const $=s=>document.querySelector(s),RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function gear(n,ro,ri){let d='';for(let i=0;i<n*4;i++){const a=i/(n*4)*Math.PI*2,k=i%4,r=(k==1||k==2)?ro:ri;d+=(i?'L':'M')+(Math.cos(a)*r).toFixed(1)+' '+(Math.sin(a)*r).toFixed(1)}return d+'Z'}
const th=i=>`<svg viewBox="0 0 300 170" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><g transform="translate(${110+i*26} 90)"><path d="${gear(9+i*3,64,54)}"/><circle r="26"/><circle r="8"/></g><g transform="translate(${230-i*14} 50)"><path d="${gear(7,30,24)}" opacity=".6"/></g></svg>`;
// ---- load partials/*.html into <div data-include="..."> ----
async function includes(){await Promise.all([...document.querySelectorAll('[data-include]')].map(async el=>{try{const r=await fetch(el.dataset.include);if(!r.ok)throw 0;el.outerHTML=await r.text()}catch(x){el.outerHTML='<p style="padding:24px">Could not load '+el.dataset.include+'. Open the site through a web server (see README.md).</p>'}}))}
// ---- tiny markdown + front-matter parser for projects/*.md ----
function parseMD(t){const m=t.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/),meta={results:[]};if(!m)return{meta,body:t};
m[1].split(/\r?\n/).forEach(l=>{if(/^\s*-\s/.test(l)){const [v,lab]=l.replace(/^\s*-\s*/,'').split('|');meta.results.push([v.trim(),(lab||'').trim()])}else{const i=l.indexOf(':');if(i>0&&l.slice(0,i).trim()!=='results')meta[l.slice(0,i).trim()]=l.slice(i+1).trim()}});return{meta,body:m[2]}}
const inl=t=>esc(t).replace(/!\[([^\]]*)\]\(([^)]+)\)/g,'<img src="$2" alt="$1">').replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2">$1</a>').replace(/\*\*([^*]+)\*\*/g,'<b>$1</b>').replace(/\*([^*]+)\*/g,'<i>$1</i>').replace(/`([^`]+)`/g,'<code>$1</code>');
function md(t){return t.trim().split(/\n\s*\n/).map(b=>{b=b.trim();if(/^#{1,3}\s/.test(b))return'<h3>'+inl(b.replace(/^#+\s*/,''))+'</h3>';if(/^[-*]\s/.test(b))return'<ul>'+b.split('\n').map(l=>'<li>'+inl(l.replace(/^[-*]\s*/,''))+'</li>').join('')+'</ul>';return'<p>'+inl(b.replace(/\n/g,' '))+'</p>'}).join('')}
let PJ=[];
async function loadProjects(){try{const r0=await fetch('projects/index.json');if(!r0.ok)throw 0;const slugs=await r0.json();
PJ=(await Promise.all(slugs.map(async s=>{try{const r=await fetch('projects/'+s+'.md');if(!r.ok)throw 0;const t=await r.text();if(/^\s*</.test(t))throw 0;return{slug:s,...parseMD(t)}}catch(e){console.warn('Could not load projects/'+s+'.md');return null}}))).filter(Boolean)}catch(x){PJ=[]}}
const tagsOf=m=>(m.tags||'').split(',').map(t=>t.trim()).filter(Boolean);
function renderCards(){if(!PJ.length){$('#cards').innerHTML='<p>Projects could not be loaded. Check that the .md files are in the projects folder.</p>';return}$('#cards').innerHTML=PJ.map((p,i)=>`<button class="card rv" data-slug="${p.slug}" style="transition-delay:${i*90}ms"><div class="th">${p.meta.image?`<img src="${esc(p.meta.image)}" alt="">`:th(i)}</div><div class="bd"><h3>${esc(p.meta.title)}</h3><p>${esc(p.meta.summary||'')}</p><div class="tags">${tagsOf(p.meta).map(t=>`<span>${esc(t)}</span>`).join('')}</div></div></button>`).join('');
document.querySelectorAll('.card').forEach(c=>c.onclick=()=>{location.hash='project/'+c.dataset.slug})}
function initTilt(){if(!RM)document.querySelectorAll('.card').forEach(c=>{c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect();c.style.transitionDelay='0s';c.style.setProperty('--ry',((e.clientX-r.left)/r.width-.5)*8+'deg');c.style.setProperty('--rx',-((e.clientY-r.top)/r.height-.5)*8+'deg')});c.addEventListener('mouseleave',()=>{c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg')})});}
function initHero(){
// hero: gear train that starts meshed, then explodes
const H=(r)=>{let p='';for(let i=0;i<6;i++){const a=i*Math.PI/3+Math.PI/6;p+=(Math.cos(a)*r).toFixed(1)+','+(Math.sin(a)*r).toFixed(1)+' '}return p};
const gb=(n,ro,ri,h)=>`<path d="${gear(n,ro,ri)}"/><circle r="${ri-18}" class="f"/><circle r="${ri*.45}"/><circle r="${ri*.14}"/>`+Array.from({length:h},(_,i)=>{const a=i/h*6.283;return `<circle cx="${(Math.cos(a)*ri*.72).toFixed(1)}" cy="${(Math.sin(a)*ri*.72).toFixed(1)}" r="${ri*.1}" class="f"/>`}).join('');
const parts=[
{svg:gb(24,168,148,6),a:[400,260],e:[450,262],k:1,l:'drive gear'},
{svg:gb(14,98,80,5),a:[173,150],e:[84,66],k:-24/14,l:'idler gear'},
{svg:gb(8,56,40,3),a:[222,382],e:[140,452],k:-3,l:'pinion'},
{svg:`<polygon points="${H(30)}"/><circle r="12"/>`,a:[400,260],e:[560,96],k:0,l:'hex nut'},
{svg:'<circle r="40"/><circle r="17"/>',a:[400,260],e:[566,404],k:0,l:'washer'}];
let h='<g id="ax" class="d"><path d="M0 260H600M450 60V460"/></g>';
parts.forEach((p,i)=>{h+=`<line class="d lead" id="ld${i}"/><g id="p${i}"><g id="r${i}">${p.svg}</g></g><text id="t${i}">${p.l}</text>`});
h+='<g id="dim"><path d="M240 480H660M240 472v16M660 472v16"/><text x="420" y="498">Ø 336 mm</text></g>';
$('#art').innerHTML=h;
let mx=0,my=0;addEventListener('mousemove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});let ex=RM?1:0,tg=RM?1:0,last=performance.now(),rot=0;
setTimeout(()=>{if(!RM)tg=1},1400);
$('#artw').onclick=()=>{tg=tg?0:1;$('.hint').textContent=tg?'Click the drawing to put it back together':'Click the drawing to explode it'};
function loop(now){const dt=Math.min(now-last,50);last=now;ex+=(tg-ex)*Math.min(1,dt/260);if(!RM)rot+=dt*.006;
const e=ex,z=e*e*(3-2*e),ang=rot+scrollY*.08;
parts.forEach((p,i)=>{const x=p.a[0]+(p.e[0]-p.a[0])*z+mx*(i+1)*4*z,y=p.a[1]+(p.e[1]-p.a[1])*z+my*(i+1)*4*z;
$('#p'+i).setAttribute('transform',`translate(${x.toFixed(1)} ${y.toFixed(1)})`);
$('#r'+i).setAttribute('transform',`rotate(${(ang*p.k).toFixed(2)})`);
const l=$('#ld'+i);l.setAttribute('x1',p.a[0]);l.setAttribute('y1',p.a[1]);l.setAttribute('x2',x);l.setAttribute('y2',y);l.style.opacity=z;
const t=$('#t'+i);t.setAttribute('x',x-20);t.setAttribute('y',y+(i==0?200:i==3?-44:i==4?-54:i==1?-110:72));t.style.opacity=z>.9?(z-.9)*10:0});
$('#ax').style.opacity=z;$('#dim').style.opacity=z>.8?(z-.8)*5:0;
requestAnimationFrame(loop)}
requestAnimationFrame(loop);
}
function loadMV(){if(document.getElementById('mvs'))return;const t=document.createElement('script');t.type='module';t.id='mvs';t.src='https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js';document.head.appendChild(t)}
function openP(slug){const i=PJ.findIndex(x=>x.slug===slug);if(i<0)return;const p=PJ[i],m=p.meta,pr=$('#proj');
$('#pin').innerHTML=`<button class="back" id="bk">Back to projects</button><h1>${esc(m.title)}</h1><p class="lead">${esc(m.lead||'')}</p><div class="fig${m.model?' has3d':''}">${m.model?`<model-viewer src="${esc(m.model)}" ${m.image?`poster="${esc(m.image)}"`:''} alt="3D model of ${esc(m.title)}" camera-controls auto-rotate auto-rotate-delay="1500" interaction-prompt="auto" shadow-intensity="1"></model-viewer><span class="mvh">Drag to rotate, scroll to zoom</span>`:m.image?`<img src="${esc(m.image)}" alt="${esc(m.title)}">`:th(i)}</div>${m.results.length?`<div class="res">${m.results.map(r=>`<div class="stat"><b>${esc(r[0])}</b><span>${esc(r[1])}</span></div>`).join('')}</div>`:''}${md(p.body)}<h3>Tools</h3><div class="tags">${tagsOf(m).map(t=>`<span>${esc(t)}</span>`).join('')}</div>`;
if(m.model)loadMV();pr.classList.add('open');pr.scrollTop=0;document.body.style.overflow='hidden';$('#bk').onclick=()=>{location.hash='projects'};$('#bk').focus()}
function route(){const m=location.hash.match(/^#project\/(.+)/),pr=$('#proj');if(m)openP(m[1]);else{pr.classList.remove('open');document.body.style.overflow=''}}
function initPage(){
$('#sg').innerHTML=`<path d="${gear(14,52,44)}"/><circle r="22"/><circle r="6"/>`;
// photo preview
const _p=new Image();_p.onload=()=>{$('#pim').src=_p.src;$('#pim').hidden=false;$('#pem').hidden=true};_p.src='assets/photo.jpg';

// reveal, counters, bars
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const t=e.target;t.classList.add('in');io.unobserve(t);
t.querySelectorAll('.fl').forEach(f=>f.style.width=f.dataset.w+'%');
t.querySelectorAll('[data-n]').forEach(n=>{const to=+n.dataset.n;let c=0;const id=setInterval(()=>{c++;n.textContent=c;if(c>=to)clearInterval(id)},900/to)})}),{threshold:.2});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
function esc(t){return t.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
const SEG=[...document.querySelectorAll('.seg button')];let mode='msg';
const cfg={msg:{b:'Send message',n:'Your note',p:'What would you like to talk about?',h:'I read every message.'},cv:{b:'Request my resume',n:'A short note',p:'Who are you, and what role or project is this for?',h:'Fill this in and my resume unlocks right away.'}};
function setMode(m){mode=m;SEG.forEach(b=>b.setAttribute('aria-selected',b.dataset.m===m));$('.pill').style.transform=m==='cv'?'translateX(100%)':'none';$('#sbtn').textContent=cfg[m].b;$('#nl').textContent=cfg[m].n;$('#note').placeholder=cfg[m].p;$('#hint').textContent=cfg[m].h}
SEG.forEach(b=>b.onclick=()=>setMode(b.dataset.m));setMode('msg');
$('#cf').onsubmit=e=>{e.preventDefault();const n=$('#nm').value.trim(),em=$('#em').value.trim(),nt=$('#note').value.trim(),ok=/^\S+@\S+\.\S+$/.test(em);
if(!n||!ok||!nt){$('#err').textContent=!n?'Please add your name.':!ok?'Please enter a valid email address.':'Please add a short note.';return}
$('#err').textContent='';const first=n.split(' ')[0],subj=(mode==='cv'?'Resume request from ':'Message from ')+n,body='Name: '+n+'\nEmail: '+em+'\n\n'+nt,mt='mailto:ot64@cornell.edu?subject='+encodeURIComponent(subj)+'&body='+encodeURIComponent(body),d=$('#done');
$('#cf').hidden=true;$('.seg').hidden=true;d.hidden=false;
if(mode==='msg'){d.innerHTML=`<h3>Almost there, ${esc(first)}.</h3><p>Your message is drafted. Open it in your email app and press send.</p><a class="sub" href="${mt}">Open email draft</a><p class="sm">If nothing opens, write to ot64@cornell.edu directly.</p><button type="button" class="lnk" id="again" style="margin:10px 0 0">Write another</button>`}
else{d.innerHTML=`<h3>Thanks, ${esc(first)}. Here is my resume.</h3><p>Download it below. If you like, email me too so I know who you are.</p><a class="sub" id="dl" href="assets/Olivia-Tolliver-Resume.pdf" download>Download resume (PDF)</a><a class="lnk" href="${mt}">Email me about it</a><button type="button" class="lnk" id="again" style="margin:10px 0 0">Start over</button>`;
}
$('#again').onclick=()=>{d.hidden=true;$('#cf').hidden=false;$('.seg').hidden=false;$('#cf').reset();setMode(mode)}};

// scroll effects
const secs=[...document.querySelectorAll('section')],links=[...document.querySelectorAll('nav a')],tl=$('#tl');
function onS(){const y=scrollY,hh=document.documentElement.scrollHeight-innerHeight;
$('#bar').style.transform=`scaleX(${hh>0?y/hh:0})`;
if(y<innerHeight)$('#artw').style.transform=`translateY(calc(-50% + ${y*.18}px))`;
$('#sg').style.transform=`rotate(${y*.15}deg)`;const r=tl.getBoundingClientRect();tl.style.setProperty('--p',Math.min(1,Math.max(0,(innerHeight*.6-r.top)/r.height)));
let cur='';secs.forEach(s=>{if(s.getBoundingClientRect().top<innerHeight*.4)cur=s.id});links.forEach(a=>a.classList.toggle('on',a.hash==='#'+cur))}
addEventListener('scroll',onS,{passive:true});onS();
}
// ---- password page (turn on/off in js/config.js) ----
const unlocked=()=>{try{return sessionStorage.getItem('portfolio-unlocked')==='1'}catch(e){return false}};
async function sha256(t){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(t));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}
async function gate(){if(!SITE_CONFIG.passwordProtected||unlocked())return;
try{const r=await fetch('partials/gate.html');if(!r.ok)throw 0;document.body.insertAdjacentHTML('afterbegin',await r.text())}catch(e){document.body.innerHTML='<p style="padding:24px">Could not load the password page.</p>';await new Promise(()=>{})}
const g=$('#gate'),inp=$('#gp'),er=$('#ge');inp.focus();
$('#gs').onchange=e=>{inp.type=e.target.checked?'text':'password'};
await new Promise(res=>{$('#gf').onsubmit=async ev=>{ev.preventDefault();
if(!(window.crypto&&crypto.subtle)){er.textContent='The password check needs a secure (https) connection.';return}
if(await sha256(SITE_CONFIG.passwordSalt+inp.value)===SITE_CONFIG.passwordHash){try{sessionStorage.setItem('portfolio-unlocked','1')}catch(x){}g.classList.add('out');setTimeout(()=>{g.remove();res()},600)}
else{er.textContent='That password is not right. Try again.';g.classList.remove('shake');void g.offsetWidth;g.classList.add('shake');inp.select()}}})}
// ---- dark / light toggle ----
function initTheme(){const b=$('#theme'),h=document.documentElement;if(!b)return;
const set=t=>{h.setAttribute('data-theme',t);b.setAttribute('aria-label',t==='dark'?'Switch to light mode':'Switch to dark mode');try{localStorage.setItem('portfolio-theme',t)}catch(e){}};
set(h.dataset.theme==='light'?'light':'dark');
b.onclick=()=>{h.classList.add('tx');set(h.dataset.theme==='dark'?'light':'dark');setTimeout(()=>h.classList.remove('tx'),500)}}
async function boot(){await gate();await includes();initTheme();await loadProjects();renderCards();initHero();initPage();initTilt();addEventListener('hashchange',route);addEventListener('keydown',e=>{if(e.key==='Escape'&&$('#proj').classList.contains('open'))location.hash='projects'});route()}
boot();