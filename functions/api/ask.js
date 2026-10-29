/* Cloudflare Pages Function: POST /api/ask -> Google Gemini (free tier).
   The API key lives only in Cloudflare (Settings → Variables and Secrets → GEMINI_API_KEY),
   never in the website code or on GitHub. Optional: GEMINI_MODEL to choose a model. */
const SYSTEM = `You are "Barista AI", the built-in assistant of the Barista app — a private specialty-coffee, barista and bartender library used by a professional barista in Saudi Arabia.
Expertise: specialty coffee (origins, varieties, processing, roasting, grinding), espresso dialling-in and extraction troubleshooting, brew methods and ratios, milk steaming and latte art, Saudi/Arabic coffee, tea, mocktails (no alcohol), café equipment care, recipe development, drink costing, pricing and margins (currency SAR, VAT 15%), menu ideas and staff training.
Rules:
- Reply in the same language the user writes in (Arabic or English). Use clear Modern Standard Arabic when replying in Arabic.
- Be practical and concise: short paragraphs or bullet lists, exact numbers (grams, ml, °C, seconds, ratios) when giving recipes or fixes.
- For recipes give: ingredients with quantities, steps, and extraction parameters when relevant.
- Do not give alcoholic cocktail recipes; offer a mocktail alternative instead.
- If a question is outside coffee, drinks, café business or hospitality, answer briefly and helpfully anyway.
- Never invent facts about the user; if you are unsure, say so.`;

const MODELS = ["gemini-flash-lite-latest", "gemini-flash-latest"];

const json = (obj, status = 200) => new Response(JSON.stringify(obj), {
  status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
});

export async function onRequestPost({ request, env }) {
  const key = env.GEMINI_API_KEY;
  if (!key) return json({ error: "not_configured" }, 503);

  // only accept calls from this site
  const origin = request.headers.get("origin") || "";
  const host = new URL(request.url).host;
  if (origin && new URL(origin).host !== host) return json({ error: "forbidden" }, 403);

  let body;
  try { body = await request.json(); } catch { return json({ error: "bad_request" }, 400); }
  const msgs = Array.isArray(body.messages) ? body.messages.slice(-12) : [];
  if (!msgs.length) return json({ error: "bad_request" }, 400);

  const contents = msgs
    .filter(m => m && typeof m.text === "string" && m.text.trim())
    .map(m => ({ role: m.role === "assistant" ? "model" : "user", parts: [{ text: m.text.slice(0, 4000) }] }));
  if (!contents.length || contents[contents.length - 1].role !== "user") return json({ error: "bad_request" }, 400);

  let system = SYSTEM;
  if (typeof body.context === "string" && body.context) system += "\n\nApp context (the user's library): " + body.context.slice(0, 3000);

  const models = env.GEMINI_MODEL ? [env.GEMINI_MODEL, ...MODELS] : MODELS;
  let lastStatus = 500, lastErr = "";
  for (const model of models) {
    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
      method: "POST",
      headers: { "content-type": "application/json", "x-goog-api-key": key },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: system }] },
        contents,
        generationConfig: { temperature: 0.6, maxOutputTokens: 1200 }
      })
    });
    if (r.ok) {
      const data = await r.json();
      const text = (data.candidates?.[0]?.content?.parts || []).map(p => p.text || "").join("").trim();
      if (text) return json({ text, model });
      lastStatus = 502; lastErr = data.promptFeedback?.blockReason || "empty";
      continue;
    }
    lastStatus = r.status; lastErr = (await r.text()).slice(0, 300);
    if (![404, 429, 500, 503].includes(r.status)) break; // e.g. bad key: stop trying
  }
  const code = lastStatus === 429 ? "quota" : (lastStatus === 400 || lastStatus === 401 || lastStatus === 403) ? "bad_key" : "upstream";
  return json({ error: code, detail: lastErr }, lastStatus === 429 ? 429 : 502);
}

export async function onRequestGet({ env }) {
  return json({ configured: !!env.GEMINI_API_KEY });
}
