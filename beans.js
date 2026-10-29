/* Barista — coffee beans everywhere: a layered, slowly drifting field of roasted beans
   behind the whole app, on the lock screen and splash, and gold beans in the header. */
(function(){
const reduce=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const small=window.innerWidth<800;
let seed=1425;const rnd=()=>{seed=(seed*16807)%2147483647;return(seed-1)/2147483646};

/* one realistic roasted bean, reused everywhere */
document.body.insertAdjacentHTML("afterbegin",`<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<radialGradient id="bnBody" cx="38%" cy="30%" r="75%"><stop offset="0" stop-color="#8a5a35"/><stop offset=".45" stop-color="#5a351d"/><stop offset="1" stop-color="#1f120a"/></radialGradient>
<radialGradient id="bnShine" cx="32%" cy="24%" r="40%"><stop offset="0" stop-color="#ffe6bf" stop-opacity=".55"/><stop offset="1" stop-color="#ffe6bf" stop-opacity="0"/></radialGradient>
<linearGradient id="bnGold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6e3c0"/><stop offset=".5" stop-color="#d3ad76"/><stop offset="1" stop-color="#9a7444"/></linearGradient>
<symbol id="bean" viewBox="0 0 40 56"><ellipse cx="20" cy="28" rx="17" ry="25" fill="url(#bnBody)"/><path d="M20 5c-7 6 7 13 0 23s7 17 0 23" fill="none" stroke="#140a05" stroke-width="3.2" stroke-linecap="round"/><path d="M20 5c-7 6 7 13 0 23s7 17 0 23" fill="none" stroke="#b07a48" stroke-width=".8" stroke-linecap="round" opacity=".5" transform="translate(1.6 0)"/><ellipse cx="20" cy="28" rx="17" ry="25" fill="url(#bnShine)"/><ellipse cx="20" cy="28" rx="16.4" ry="24.4" fill="none" stroke="#d3ad76" stroke-opacity=".22" stroke-width=".8"/></symbol>
<symbol id="beanGold" viewBox="0 0 40 56"><ellipse cx="20" cy="28" rx="17" ry="25" fill="none" stroke="url(#bnGold)" stroke-width="1.6"/><path d="M20 5c-7 6 7 13 0 23s7 17 0 23" fill="none" stroke="url(#bnGold)" stroke-width="1.6" stroke-linecap="round"/></symbol>
</defs></svg>`);

function bean(o){const s=o.size,el=`<span class="bn ${o.cls||""}" style="left:${o.x}%;top:${o.y}%;width:${s}px;height:${s*1.4}px;--r:${o.r}deg;--dx:${o.dx}px;--dy:${o.dy}px;--rr:${o.rr}deg;--d:${o.dur}s;--dl:${-o.delay}s;opacity:${o.op};${o.blur?`filter:blur(${o.blur}px);`:""}"><svg viewBox="0 0 40 56"><use href="#${o.gold?"beanGold":"bean"}"/></svg></span>`;return el}
function field(n,opt){let h="";for(let i=0;i<n;i++){const size=opt.min+rnd()*(opt.max-opt.min);h+=bean({x:rnd()*100,y:rnd()*100,size,r:rnd()*360,rr:(rnd()<.5?-1:1)*(8+rnd()*22),dx:(rnd()-.5)*opt.drift,dy:(rnd()-.5)*opt.drift,dur:18+rnd()*22,delay:rnd()*30,op:opt.op[0]+rnd()*(opt.op[1]-opt.op[0]),blur:opt.blur?opt.blur[0]+rnd()*(opt.blur[1]-opt.blur[0]):0,gold:opt.gold})}return h}

/* 1+2) background, lock screen and splash — five selectable styles */
const k=small?.5:1;
function edgeField(n,opt){let h="";for(let i=0;i<n;i++){let x,y;const side=Math.floor(rnd()*4),d=Math.pow(rnd(),1.6)*(opt.depth||18);if(side===0){x=d;y=rnd()*100}else if(side===1){x=100-d;y=rnd()*100}else if(side===2){y=d;x=rnd()*100}else{y=100-d;x=rnd()*100}
 const size=opt.min+rnd()*(opt.max-opt.min);h+=bean({x,y,size,r:rnd()*360,rr:(rnd()<.5?-1:1)*(4+rnd()*10),dx:(rnd()-.5)*opt.drift,dy:(rnd()-.5)*opt.drift,dur:24+rnd()*20,delay:rnd()*30,op:opt.op[0]+rnd()*(opt.op[1]-opt.op[0]),blur:opt.blur?opt.blur[0]+rnd()*(opt.blur[1]-opt.blur[0]):0,gold:opt.gold})}return h}
const STYLES={
 classic:{bg:()=>`<div class="bl far" data-p=".06">${field(Math.round(90*k),{min:10,max:18,drift:30,op:[.2,.34],blur:[.5,1.2]})}</div><div class="bl mid" data-p=".14">${field(Math.round(55*k),{min:20,max:36,drift:50,op:[.42,.65]})+field(Math.round(8*k),{min:14,max:22,drift:40,op:[.35,.55],gold:true})}</div><div class="bl near" data-p=".28">${field(Math.round(9*k),{min:50,max:84,drift:70,op:[.22,.32],blur:[3,6]})}</div>`,
  lock:n=>field(n,{min:16,max:44,drift:40,op:[.25,.6],blur:[0,.8]})+field(Math.round(n/5),{min:14,max:26,drift:30,op:[.35,.6],gold:true})+field(4,{min:60,max:96,drift:40,op:[.18,.3],blur:[4,7]})},
 gold:{bg:()=>`<div class="bl far" data-p=".05">${field(Math.round(50*k),{min:10,max:16,drift:24,op:[.12,.22],gold:true})}</div><div class="bl mid" data-p=".14">${field(Math.round(26*k),{min:18,max:30,drift:40,op:[.3,.55],gold:true})}</div>`,
  lock:n=>field(Math.round(n*.9),{min:14,max:34,drift:30,op:[.25,.65],gold:true})},
 frame:{bg:()=>`<div class="bl mid" data-p=".04">${edgeField(Math.round(120*k),{min:18,max:40,drift:12,op:[.55,.95],depth:14})+edgeField(Math.round(14*k),{min:16,max:24,drift:10,op:[.5,.8],depth:12,gold:true})}</div><div class="bl near" data-p=".1">${edgeField(Math.round(14*k),{min:60,max:96,drift:20,op:[.35,.55],depth:6,blur:[3,6]})}</div>`,
  lock:n=>edgeField(n*3,{min:18,max:44,drift:10,op:[.6,1],depth:22})+edgeField(n/3,{min:16,max:26,drift:10,op:[.5,.85],depth:20,gold:true})},
 pattern:{bg:()=>"",lock:()=>""},
 none:{bg:()=>"",lock:()=>""}};
const BEAN_STYLES=[["classic",A("كلاسيكي عائم","Floating classic"),A("حبوب قهوة بثلاث طبقات عمق تطفو ببطء","Three depths of beans drifting slowly")],["frame",A("إطار البن","Bean frame"),A("حبوب كثيفة على الأطراف ووسط نظيف","Dense beans around the edges, clean centre")],["gold",A("ذهبي فاخر","Gold line"),A("حبوب برسم خطي ذهبي، أنيقة وهادئة","Gold line-art beans, calm and elegant")],["pattern",A("نقش فاخر","Luxury pattern"),A("نقش حبوب ثابت مثل ورق الجدران الفاخر","A still bean motif like luxury wallpaper")],["none",A("بسيط","Minimal"),A("بدون حبوب في الخلفية","No beans in the background")]];
let beanStyle="classic";try{beanStyle=localStorage.getItem("bb_beans")||"classic"}catch(e){}
document.body.insertAdjacentHTML("afterbegin",`<div class="beanfield" aria-hidden="true"></div>`);
const lock=document.getElementById("lock");if(lock)lock.insertAdjacentHTML("afterbegin",`<div class="beanlocal" aria-hidden="true"></div>`);
const sp=document.getElementById("splash");if(sp)sp.insertAdjacentHTML("afterbegin",`<div class="beanlocal" aria-hidden="true"></div>`);
function applyBeans(st){if(!STYLES[st])st="classic";beanStyle=st;seed=1425;document.body.dataset.beans=st;const S_=STYLES[st];
 document.querySelector(".beanfield").innerHTML=S_.bg();document.querySelectorAll(".lock .beanlocal,.splash .beanlocal").forEach((el,i)=>el.innerHTML=S_.lock(small?(i?26:30):(i?32:40)));
 layers=[...document.querySelectorAll(".beanfield .bl")];upd()}
let layers=[];
/* 3) header: gold beans gently falling past the wordmark */
const hero=document.querySelector(".hero");if(hero){let h="";const n=small?6:12;for(let i=0;i<n;i++){const s=10+rnd()*14;h+=`<span class="bn fall" style="left:${4+rnd()*92}%;width:${s}px;height:${s*1.4}px;--r:${rnd()*360}deg;--rr:${(rnd()<.5?-1:1)*(120+rnd()*240)}deg;--d:${12+rnd()*14}s;--dl:${-rnd()*26}s;opacity:${.35+rnd()*.4}"><svg viewBox="0 0 40 56"><use href="#${rnd()<.55?"beanGold":"bean"}"/></svg></span>`}hero.insertAdjacentHTML("beforeend",`<div class="beanhero" aria-hidden="true">${h}</div>`)}

/* 4) sidebar: a small pile of beans at the foot */
const aside=document.querySelector("aside");if(aside)aside.insertAdjacentHTML("beforeend",`<div class="beanpile" aria-hidden="true">${[[8,10,22,-30],[24,4,26,15],[40,12,20,70],[56,2,24,-10],[70,9,21,40],[84,3,18,95],[16,24,18,120],[48,26,20,-55],[66,22,17,10]].map(([x,b,s,r])=>`<span class="bn still" style="left:${x}%;bottom:${b}px;width:${s}px;height:${s*1.4}px;--r:${r}deg;opacity:.85"><svg viewBox="0 0 40 56"><use href="#bean"/></svg></span>`).join("")}</div>`);

document.head.insertAdjacentHTML("beforeend",`<style>
body{background:radial-gradient(1200px 700px at 70% -10%,#2a1d13 0%,transparent 60%),radial-gradient(900px 600px at 0% 100%,#1f150e 0%,transparent 60%),#0d0c0b fixed}
.layout{position:relative;z-index:1}
.beanfield{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden}
.beanfield .bl{position:absolute;inset:-10% -5%;will-change:transform}
.bn{position:absolute;display:block;transform:rotate(var(--r));animation:bnfloat var(--d) ease-in-out var(--dl) infinite alternate}
.bn svg{width:100%;height:100%;display:block;overflow:visible;filter:drop-shadow(0 3px 4px #000a)}
@keyframes bnfloat{from{transform:translate(0,0) rotate(var(--r))}to{transform:translate(var(--dx),var(--dy)) rotate(calc(var(--r) + var(--rr)))}}
.beanlocal{position:absolute;inset:0;overflow:hidden;pointer-events:none}.lock .box,.splash .inner{position:relative;z-index:1}
.lock{background:radial-gradient(circle at 50% 35%,#3a2818 0%,#1a120c 45%,#0b0908 80%)!important}
.lock .box{background:linear-gradient(160deg,#241b13ee,#120e0bf2)!important;border:1px solid #6a5136!important;box-shadow:0 30px 80px -20px #000,0 0 0 1px #d3ad7622 inset;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}
.beanhero{position:absolute;inset:0;z-index:-1;overflow:hidden;pointer-events:none}
.bn.fall{top:-40px;animation:bnfall var(--d) linear var(--dl) infinite}.bn.fall svg{filter:drop-shadow(0 0 6px #d3ad7655)}
@keyframes bnfall{0%{transform:translateY(-40px) rotate(var(--r));opacity:0}10%{opacity:.8}85%{opacity:.6}100%{transform:translateY(340px) rotate(calc(var(--r) + var(--rr)));opacity:0}}
aside{position:sticky}.beanpile{position:relative;height:58px;margin-top:6px;flex:none}.bn.still{animation:none}

body[data-beans=pattern] .beanfield,body[data-beans=pattern] .beanlocal{background:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27140%27 height=%27140%27 viewBox=%270 0 140 140%27%3E%3Cg fill=%27none%27 stroke=%27%23d3ad76%27 stroke-width=%271.3%27 stroke-linecap=%27round%27%3E%3Cg transform=%27translate(30 30) rotate(-30)%27%3E%3Cellipse rx=%279%27 ry=%2713%27/%3E%3Cpath d=%27M0 -13c-4 3 4 7 0 13s4 9 0 13%27/%3E%3C/g%3E%3Cg transform=%27translate(100 95) rotate(35)%27%3E%3Cellipse rx=%279%27 ry=%2713%27/%3E%3Cpath d=%27M0 -13c-4 3 4 7 0 13s4 9 0 13%27/%3E%3C/g%3E%3Cpath d=%27M100 30l3 -3l3 3l-3 3z M30 100l3 -3l3 3l-3 3z%27/%3E%3C/g%3E%3C/svg%3E") 0 0/140px 140px;opacity:.16}
body[data-beans=pattern] .lock .beanlocal{opacity:.28}
body[data-beans=none] .beanpile{display:none}
.bstyles{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;margin-top:10px}
.bstyle{border:1px solid #3a2d22;border-radius:14px;overflow:hidden;background:#100d0b;color:#e6d8c3;text-align:start;padding:0;transition:border-color .25s,transform .25s}.bstyle:hover{transform:translateY(-2px);border-color:#8a6a42}
.bstyle.on{border-color:#d3ad76;box-shadow:0 0 0 1px #d3ad7666,0 10px 24px -14px #d3ad76aa}
.bstyle .pv{height:86px;position:relative;overflow:hidden;background:radial-gradient(circle at 50% 30%,#2a1d13,#0d0c0b)}.bstyle .pv .bn{animation:none}
.bstyle .tt{display:block;padding:8px 12px 10px}.bstyle .tt b{display:block;font-size:13px;color:#f1dcb8}.bstyle .tt small{color:var(--muted);font-size:11px;line-height:1.35;display:block}
.bstyle.on .tt b::after{content:" ✓";color:var(--gold)}
.welcome-banner .beans{display:none}
.stat,.card,.box{background:linear-gradient(145deg,#211a14d0,#141110dc)!important;backdrop-filter:blur(2.5px);-webkit-backdrop-filter:blur(2.5px)}.rcard,.dotd,.pantry,.lock .box{backdrop-filter:none}.tabs button{background:#211c17d9}.chips button{background:#16120ee0}
.section-head h2{display:flex;align-items:center;gap:10px}.section-head h2::before{content:"";width:16px;height:22px;flex:none;background:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 40 56%27%3E%3Cellipse cx=%2720%27 cy=%2728%27 rx=%2717%27 ry=%2725%27 fill=%27none%27 stroke=%27%23d3ad76%27 stroke-width=%272.4%27/%3E%3Cpath d=%27M20 5c-7 6 7 13 0 23s7 17 0 23%27 fill=%27none%27 stroke=%27%23d3ad76%27 stroke-width=%272.4%27 stroke-linecap=%27round%27/%3E%3C/svg%3E") center/contain no-repeat;transform:rotate(-25deg);filter:drop-shadow(0 0 6px #d3ad7666)}
.ornament b{font-size:0}.ornament b::before{content:"";display:inline-block;width:12px;height:17px;background:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 40 56%27%3E%3Cellipse cx=%2720%27 cy=%2728%27 rx=%2717%27 ry=%2725%27 fill=%27%23d3ad76%27/%3E%3Cpath d=%27M20 5c-7 6 7 13 0 23s7 17 0 23%27 fill=%27none%27 stroke=%27%231a120c%27 stroke-width=%273.4%27 stroke-linecap=%27round%27/%3E%3C/svg%3E") center/contain no-repeat;transform:rotate(30deg)}
@media(max-width:800px){.beanpile{display:none}}
@media(prefers-reduced-motion:reduce){.bn{animation:none!important}.bn.fall{display:none}}
</style>`);

/* scroll parallax for the depth layers */
function upd(){if(reduce)return;const y=window.scrollY;layers.forEach(l=>l.style.transform=`translateY(${-y*parseFloat(l.dataset.p)}px)`)}
if(!reduce){let ticking=false;
 const upd2=()=>{const y=window.scrollY;layers.forEach(l=>l.style.transform=`translateY(${-y*parseFloat(l.dataset.p)}px)`);ticking=false};
 window.addEventListener("scroll",()=>{if(!ticking){ticking=true;requestAnimationFrame(upd2)}},{passive:true});
 if(window.matchMedia("(pointer:fine)").matches)window.addEventListener("mousemove",e=>{const cx=e.clientX/window.innerWidth-.5,cy=e.clientY/window.innerHeight-.5;layers.forEach((l,i)=>{l.style.translate=`${-cx*(i+1)*8}px ${-cy*(i+1)*6}px`})},{passive:true})}

Object.assign(L.ar,{beanTitle:"نمط حبوب القهوة"});Object.assign(L.en,{beanTitle:"Coffee bean style"});
function preview(st){seed=777;const old=small;let h="";if(st==="classic")h=field(14,{min:8,max:16,drift:0,op:[.4,.8]})+field(3,{min:8,max:12,drift:0,op:[.5,.7],gold:true});else if(st==="gold")h=field(12,{min:8,max:14,drift:0,op:[.35,.7],gold:true});else if(st==="frame")h=edgeField(40,{min:8,max:16,drift:0,op:[.6,1],depth:16});
 return`<div class="pv" ${st==="pattern"?`style="background:url('${getComputedStyle(document.body).getPropertyValue("--pat")||""}')"`:""}>${st==="pattern"?`<div class="beanlocal" style="background:inherit"></div>`:""}${h}</div>`}
const _ra=renderAccount;renderAccount=async function(){await _ra();const host=$("#accountBody");if(!host)return;
 host.insertAdjacentHTML("beforeend",`<div class="box" style="margin-top:14px"><h3 class="bt">☕ ${t("beanTitle")}</h3><div class="bstyles">${BEAN_STYLES.map(([id,n,d])=>`<button class="bstyle ${id===beanStyle?"on":""}" data-bs="${id}">${preview(id)}<span class="tt"><b>${esc(tx(n))}</b><small>${esc(tx(d))}</small></span></button>`).join("")}</div></div>`);
 host.querySelectorAll(".bstyle .pv").forEach((pv,i)=>{if(BEAN_STYLES[i][0]==="pattern"){pv.innerHTML="";pv.style.background=`url("${PAT}") 0 0/90px 90px, radial-gradient(circle at 50% 30%,#2a1d13,#0d0c0b)`;pv.style.backgroundBlendMode="normal"}});
 host.querySelectorAll("[data-bs]").forEach(b=>b.onclick=()=>{applyBeans(b.dataset.bs);try{localStorage.setItem("bb_beans",b.dataset.bs)}catch(e){}host.querySelectorAll(".bstyle").forEach(x=>x.classList.toggle("on",x===b));toast(t("tSaved"))})};
const PAT=`data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27140%27 height=%27140%27 viewBox=%270 0 140 140%27%3E%3Cg fill=%27none%27 stroke=%27%23d3ad76%27 stroke-width=%271.6%27 stroke-linecap=%27round%27%3E%3Cg transform=%27translate(30 30) rotate(-30)%27%3E%3Cellipse rx=%279%27 ry=%2713%27/%3E%3Cpath d=%27M0 -13c-4 3 4 7 0 13s4 9 0 13%27/%3E%3C/g%3E%3Cg transform=%27translate(100 95) rotate(35)%27%3E%3Cellipse rx=%279%27 ry=%2713%27/%3E%3Cpath d=%27M0 -13c-4 3 4 7 0 13s4 9 0 13%27/%3E%3C/g%3E%3Cpath d=%27M100 30l3 -3l3 3l-3 3z M30 100l3 -3l3 3l-3 3z%27/%3E%3C/g%3E%3C/svg%3E`;
applyBeans(beanStyle);
if(typeof current!=="undefined"&&current==="account")renderAccount();
})();