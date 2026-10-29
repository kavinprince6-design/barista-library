/* Barista AI — floating chat assistant (Google Gemini via /api/ask). */
(function(){
Object.assign(L.ar,{aiName:"مساعد الباريستا الذكي",aiShort:"اسأل الذكاء الاصطناعي",aiHello:"أهلًا! أنا مساعدك الذكي في القهوة والمشروبات. اسألني عن الوصفات، ضبط الإسبريسو، النسب، التكلفة أو أي شيء آخر.",aiPh:"اكتب سؤالك…",aiSend:"إرسال",aiClear:"محادثة جديدة",aiThinking:"يفكّر…",aiErrNet:"تعذّر الاتصال. تحقق من الإنترنت وحاول مرة أخرى.",aiErrConf:"المساعد غير مفعّل بعد. يحتاج المسؤول إلى إضافة مفتاح Gemini في إعدادات Cloudflare.",aiErrQuota:"تم الوصول إلى الحد المجاني اليومي. حاول لاحقًا أو غدًا.",aiErrKey:"مفتاح Gemini غير صحيح. يرجى مراجعة الإعداد في Cloudflare.",aiErr:"حدث خطأ مؤقت. حاول مرة أخرى.",aiNote:"قد يخطئ الذكاء الاصطناعي؛ تحقّق من المعلومات المهمة.",aiCopy:"نسخ",aiCopied:"تم النسخ",aiSave:"حفظ كملاحظة",
 aiS1:"الإسبريسو حامض وسريع، ماذا أفعل؟",aiS2:"اقترح وصفة مشروب بارد جديد للصيف",aiS3:"كيف أسعّر كوب لاتيه 12 أونصة؟",aiS4:"ما الفرق بين المعالجة المغسولة والطبيعية؟"});
Object.assign(L.en,{aiName:"Barista AI assistant",aiShort:"Ask AI",aiHello:"Hi! I'm your AI assistant for coffee and drinks. Ask me about recipes, dialling in espresso, ratios, costing or anything else.",aiPh:"Type your question…",aiSend:"Send",aiClear:"New chat",aiThinking:"Thinking…",aiErrNet:"Couldn't connect. Check the internet and try again.",aiErrConf:"The assistant isn't switched on yet. The admin needs to add a Gemini key in Cloudflare settings.",aiErrQuota:"The free daily limit has been reached. Try again later or tomorrow.",aiErrKey:"The Gemini key is invalid. Please check the Cloudflare setting.",aiErr:"A temporary error occurred. Please try again.",aiNote:"AI can make mistakes; double-check important information.",aiCopy:"Copy",aiCopied:"Copied",aiSave:"Save as note",
 aiS1:"My espresso is sour and fast — what should I do?",aiS2:"Suggest a new cold drink recipe for summer",aiS3:"How should I price a 12 oz latte?",aiS4:"Washed vs natural processing — what's the difference?"});

document.body.insertAdjacentHTML("beforeend",`<button class="aifab" id="aiFab" aria-label="AI"><span class="aiorb"><svg viewBox="0 0 24 24"><path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/><path d="M18.5 15l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/></svg></span><span class="aifab-t" id="aiFabT"></span></button>
<div class="aipanel" id="aiPanel" role="dialog" aria-modal="false"><div class="aihead"><span class="aiorb sm"><svg viewBox="0 0 24 24"><path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/></svg></span><div style="flex:1;min-width:0"><b id="aiTitle"></b><small id="aiSub">Gemini · Barista</small></div><button class="aiic" id="aiNew" title="">↺</button><button class="aiic" id="aiClose" aria-label="close">✕</button></div>
<div class="aibody" id="aiBody"></div>
<form class="aiform" id="aiForm"><textarea id="aiIn" rows="1"></textarea><button class="aisend" id="aiSendBtn" aria-label="send"><svg viewBox="0 0 24 24"><path d="M4 12l16-8-6 16-2.5-6.5z"/></svg></button></form><div class="ainote" id="aiNote"></div></div>`);
document.head.insertAdjacentHTML("beforeend",`<style>
.aifab{position:fixed;z-index:85;bottom:max(20px,env(safe-area-inset-bottom));inset-inline-end:20px;display:flex;align-items:center;gap:10px;padding:8px 18px 8px 8px;border-radius:99px;border:1px solid #d3ad76;background:linear-gradient(135deg,#2a1f15,#120e0b);color:#f1dcb8;font-weight:bold;box-shadow:0 14px 34px -10px #000,0 0 0 4px #d3ad7614;transition:transform .25s,box-shadow .25s}[dir=rtl] .aifab{padding:8px 8px 8px 18px}
.aifab:hover{transform:translateY(-2px);box-shadow:0 18px 40px -10px #000,0 0 22px -4px #d3ad7699}
.aiorb{width:40px;height:40px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(from 0deg,#f6e3c0,#c79d64,#8a6a42,#e4c396,#f6e3c0);animation:orb 6s linear infinite;box-shadow:0 0 16px -2px #d3ad76aa;flex:none}.aiorb svg{width:22px;height:22px;fill:#20160c;animation:orb 6s linear infinite reverse}.aiorb.sm{width:34px;height:34px}.aiorb.sm svg{width:18px;height:18px}
@keyframes orb{to{transform:rotate(360deg)}}
.aipanel{position:fixed;z-index:86;bottom:max(20px,env(safe-area-inset-bottom));inset-inline-end:20px;width:min(420px,calc(100vw - 32px));height:min(640px,calc(100vh - 40px));display:flex;flex-direction:column;border-radius:20px;overflow:hidden;border:1px solid #6a5136;background:linear-gradient(180deg,#1c1612,#0f0d0b);box-shadow:0 30px 80px -20px #000,0 0 0 1px #d3ad7622 inset;opacity:0;transform:translateY(16px) scale(.98);pointer-events:none;transition:opacity .25s,transform .25s}
.aipanel.open{opacity:1;transform:none;pointer-events:auto}body.ai-open .aifab{opacity:0;pointer-events:none}
.aihead{display:flex;align-items:center;gap:10px;padding:12px 14px;border-bottom:1px solid #3a2d22;background:linear-gradient(90deg,#2a1f15,#17120e)}.aihead b{display:block;color:#f1dcb8;font-size:15px}.aihead small{color:var(--muted);font-size:11px;letter-spacing:1px}
.aiic{width:34px;height:34px;border-radius:50%;border:1px solid #4b3925;background:#120e0b;color:var(--cream);font-size:15px}.aiic:hover{border-color:var(--gold);color:var(--gold)}
.aibody{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px;scrollbar-width:thin;scrollbar-color:#4b3925 transparent}
.msg{max-width:88%;padding:10px 13px;border-radius:16px;font-size:14px;line-height:1.65;white-space:normal;word-wrap:break-word;animation:fadeUp .3s both}
.msg.u{align-self:flex-end;background:linear-gradient(135deg,#e4c396,#c79d64);color:#20160c;border-end-end-radius:5px}
.msg.a{align-self:flex-start;background:#211a14;border:1px solid #3a2d22;color:#ecdfcb;border-end-start-radius:5px}
.msg.a p{margin:0 0 8px}.msg.a p:last-child{margin:0}.msg.a ul,.msg.a ol{margin:4px 0 8px;padding-inline-start:20px}.msg.a li{margin:2px 0}.msg.a b,.msg.a strong{color:#f1dcb8}.msg.a h4{margin:6px 0 4px;color:var(--gold);font-size:14px}.msg.a code{background:#120e0b;border-radius:5px;padding:0 5px}
.msg.err{border-color:#6b3a31;color:#f0c2b8}
.msg .tools{display:flex;gap:6px;margin-top:6px}.msg .tools button{font-size:11px;padding:3px 9px;border-radius:99px;border:1px solid #4b3925;background:transparent;color:var(--muted)}.msg .tools button:hover{color:var(--gold);border-color:var(--gold)}
.typing{display:inline-flex;gap:4px;align-items:center}.typing i{width:6px;height:6px;border-radius:50%;background:var(--gold);animation:blink 1.2s infinite}.typing i:nth-child(2){animation-delay:.2s}.typing i:nth-child(3){animation-delay:.4s}@keyframes blink{0%,80%,100%{opacity:.25}40%{opacity:1}}
.aisugg{display:flex;flex-direction:column;gap:6px;margin-top:2px}.aisugg button{text-align:start;border:1px solid #3a2d22;background:#15110e;color:#e6d8c3;border-radius:12px;padding:8px 12px;font-size:13px}.aisugg button:hover{border-color:#8a6a42;color:#f1dcb8}
.aiform{display:flex;gap:8px;align-items:flex-end;padding:10px 12px 6px;border-top:1px solid #3a2d22}.aiform textarea{flex:1;resize:none;min-height:44px;max-height:130px;border-radius:14px;padding:11px 13px;font-size:14px}
.aisend{width:44px;height:44px;border-radius:50%;border:0;background:linear-gradient(135deg,#f1dcb8,#c79d64);display:grid;place-items:center;flex:none}.aisend svg{width:20px;height:20px;fill:#20160c}[dir=rtl] .aisend svg{transform:scaleX(-1)}.aisend:disabled{opacity:.5}
.ainote{font-size:10.5px;color:#8a7a66;text-align:center;padding:0 12px 10px}
@media(max-width:800px){.aifab-t{display:none}.aifab{padding:6px!important}.aipanel{inset:0;width:100%;height:100%;border-radius:0;bottom:0}}
</style>`);

const KEY=()=>"bb_ai_"+((typeof S!=="undefined"&&S.uid)||"guest");
let chat=[];const load=()=>{try{chat=JSON.parse(localStorage.getItem(KEY())||"[]")}catch(e){chat=[]}};const store=()=>{try{localStorage.setItem(KEY(),JSON.stringify(chat.slice(-40)))}catch(e){}};
let busy=false;
function md(s){let h=esc(s).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>").replace(/`([^`]+)`/g,"<code>$1</code>");const out=[];let list=null;
 h.split("\n").forEach(line=>{const ul=line.match(/^\s*[-*•]\s+(.*)/),ol=line.match(/^\s*\d+[.)]\s+(.*)/),hd=line.match(/^\s*#{1,4}\s+(.*)/);
  if(ul||ol){const tag=ul?"ul":"ol";if(!list||list.tag!==tag){if(list)out.push(`</${list.tag}>`);list={tag};out.push(`<${tag}>`)}out.push(`<li>${(ul||ol)[1]}</li>`);return}
  if(list){out.push(`</${list.tag}>`);list=null}
  if(hd)out.push(`<h4>${hd[1]}</h4>`);else if(line.trim())out.push(`<p>${line}</p>`)});
 if(list)out.push(`</${list.tag}>`);return out.join("")}
function render(){const b=$("#aiBody");let h=`<div class="msg a">${md(t("aiHello"))}</div>`;
 if(!chat.length)h+=`<div class="aisugg">${["aiS1","aiS2","aiS3","aiS4"].map(k=>`<button data-sugg="${esc(t(k))}">✦ ${esc(t(k))}</button>`).join("")}</div>`;
 h+=chat.map((m,i)=>m.role==="user"?`<div class="msg u">${esc(m.text).replace(/\n/g,"<br>")}</div>`:`<div class="msg a ${m.err?"err":""}">${md(m.text)}${m.err?"":`<div class="tools"><button data-copy="${i}">${t("aiCopy")}</button><button data-note="${i}">${t("aiSave")}</button></div>`}</div>`).join("");
 if(busy)h+=`<div class="msg a"><span class="typing"><i></i><i></i><i></i></span> <span class="small">${t("aiThinking")}</span></div>`;
 b.innerHTML=h;b.scrollTop=b.scrollHeight}
function labels(){$("#aiFabT").textContent=t("aiShort");$("#aiTitle").textContent=t("aiName");$("#aiIn").placeholder=t("aiPh");$("#aiNote").textContent=t("aiNote");$("#aiNew").title=t("aiClear")}
function context(){try{const mine=(S.recipes||[]).slice(0,25).map(r=>r.name).join(", ");const lib=effLIB().map(r=>tx(r.name)).join(", ");return`Built-in recipes: ${lib}. ${mine?"User's own recipes: "+mine+".":""} Interface language: ${LANG==="ar"?"Arabic":"English"}.`}catch(e){return""}}
async function ask(q){q=q.trim();if(!q||busy)return;chat.push({role:"user",text:q});busy=true;store();render();
 let reply,err=false;
 try{const r=await fetch("api/ask",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({messages:chat.filter(m=>!m.err).slice(-12).map(m=>({role:m.role,text:m.text})),context:context()})});
  let d={};try{d=await r.json()}catch(e){}
  if(r.ok&&d.text)reply=d.text;else{err=true;reply=t(d.error==="not_configured"||r.status===404||r.status===405?"aiErrConf":d.error==="quota"?"aiErrQuota":d.error==="bad_key"?"aiErrKey":"aiErr")}}
 catch(e){err=true;reply=t("aiErrNet")}
 busy=false;chat.push({role:"assistant",text:reply,err});store();render()}
function open(){load();labels();render();document.body.classList.add("ai-open");$("#aiPanel").classList.add("open");setTimeout(()=>$("#aiIn").focus(),200)}
function close(){document.body.classList.remove("ai-open");$("#aiPanel").classList.remove("open")}
$("#aiFab").onclick=open;$("#aiClose").onclick=close;
$("#aiNew").onclick=()=>{chat=[];store();render()};
$("#aiForm").addEventListener("submit",e=>{e.preventDefault();const v=$("#aiIn").value;$("#aiIn").value="";$("#aiIn").style.height="";ask(v)});
$("#aiIn").addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.shiftKey&&!e.isComposing){e.preventDefault();$("#aiForm").requestSubmit()}});
$("#aiIn").addEventListener("input",e=>{const el=e.target;el.style.height="auto";el.style.height=Math.min(130,el.scrollHeight)+"px"});
$("#aiBody").addEventListener("click",e=>{const s=e.target.closest("[data-sugg]");if(s){ask(s.dataset.sugg);return}
 const c=e.target.closest("[data-copy]");if(c){const m=chat[+c.dataset.copy];try{navigator.clipboard.writeText(m.text);toast(t("aiCopied"))}catch(err){}return}
 const n=e.target.closest("[data-note]");if(n){const i=+n.dataset.note,m=chat[i],q=chat[i-1];S.notes.unshift({id:uid(),title:"🤖 "+(q?q.text:t("aiName")).slice(0,80),text:m.text,date:Date.now()});save("notes");renderNotes();toast(t("tSaved"))}});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&$("#aiPanel").classList.contains("open"))close()});
document.getElementById("langBtn").addEventListener("click",()=>setTimeout(()=>{labels();if($("#aiPanel").classList.contains("open"))render()},60));
labels();
})();
