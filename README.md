# Barista · باريستا
Bilingual (Arabic / English) specialty-coffee, barista & bartender library — installable as an app (PWA) on iPhone and Mac.

**Features:** recipe library with photos and extraction data · coffee encyclopedia · equipment & troubleshooting · smart calculators (dose & extraction log with comparison, brew ratios, large batches, recipe scaling, unit conversion) · ingredient prices, drink cost, gross/net profit and sales projection · personal recipes, favorites and photos · training lessons with images and files · advanced search with filters and sorting · local accounts with optional password lock · backup export/import.

**Storage:** all user data is saved in the browser on each device (IndexedDB). There is no server or database; move data between devices with Export / Import in Account & settings.

**Deploy:** static site — Cloudflare Pages with no build command and output directory `/`.

Files: `index.html` (layout & styles), `data.js` (built-in content), `app.js` (logic), `sw.js` + `manifest.webmanifest` + `icons/` (app install).

## AI assistant (free, Google Gemini)
The floating "Ask AI" chat calls `functions/api/ask.js` (a Cloudflare Pages Function), which forwards questions to Google Gemini.
The API key is **never** stored in this repo. To switch it on:
1. Create a free key at https://aistudio.google.com/apikey
2. Cloudflare → Workers & Pages → barista-library → Settings → Variables and Secrets → Add: name `GEMINI_API_KEY`, type Secret, value = your key (Production).
3. Deployments → latest → Retry deployment.
Optional: `GEMINI_MODEL` to force a specific model.
