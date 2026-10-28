/* Barista — subtle luxury motion (respects "reduce motion" settings) */
(function(){
const reduce=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
/* section entrance: replay a short staggered fade-up each time a section opens */
const _activate=activate;
activate=function(id){_activate(id);const s=document.getElementById(id);if(!s||reduce)return;s.classList.remove("enter");void s.offsetWidth;s.classList.add("enter");clearTimeout(s._en);s._en=setTimeout(()=>s.classList.remove("enter"),1600)};
const first=document.querySelector(".section.active");if(first&&!reduce){first.classList.add("enter");setTimeout(()=>first.classList.remove("enter"),1600)}
/* rotating quotes in the sidebar */
const Q=[["Good coffee is not just a drink — it's a craft.","القهوة الجيدة ليست مجرد مشروب — إنها حرفة."],["Every cup tells the story of its origin.","كل فنجان يحكي قصة منشئه."],["Precision in the grind, patience in the pour.","دقة في الطحن، وصبر في الصب."],["Life happens, coffee helps.","الحياة تمضي، والقهوة تعين."],["Taste is the final judge.","الطعم هو الحكم الأخير."]];
const qEl=document.querySelector(".quote");let qi=0;
function showQ(){if(!qEl)return;const q=Q[qi%Q.length];qEl.innerHTML=`<span class="qtxt">“${LANG==="ar"?q[1]:q[0]}”</span>`}
showQ();if(!reduce)setInterval(()=>{if(!qEl)return;qEl.classList.add("qout");setTimeout(()=>{qi++;showQ();qEl.classList.remove("qout")},600)},7000);
document.getElementById("langBtn").addEventListener("click",()=>setTimeout(showQ,50));
/* splash once per session */
const sp=document.getElementById("splash");
if(sp){let seen=false;try{seen=sessionStorage.getItem("bb_splash")==="1";sessionStorage.setItem("bb_splash","1")}catch(e){}
 if(seen||reduce)sp.remove();else setTimeout(()=>{sp.classList.add("hide");setTimeout(()=>sp.remove(),900)},1500)}
/* gentle parallax on hero background */
const hero=document.querySelector(".hero");
if(hero&&!reduce&&window.matchMedia("(pointer:fine)").matches)hero.addEventListener("mousemove",e=>{const r=hero.getBoundingClientRect();hero.style.setProperty("--px",((e.clientX-r.left)/r.width-.5)*-14+"px");hero.style.setProperty("--py",((e.clientY-r.top)/r.height-.5)*-10+"px")});
})();
