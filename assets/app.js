/* French Conversation — shared engine (TTS, rendering, grading, progress) */
(function(){
'use strict';
const LS = {
  get(k,d){try{const v=localStorage.getItem(k);return v==null?d:JSON.parse(v)}catch(e){return d}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
};
window.FC = window.FC || {};
FC.units = FC.units || {};
FC.registerUnit = u => { FC.units[u.n] = u; };
FC.LS = LS;

/* ---------------- Speech (TTS) ---------------- */
const TTS = {
  voices: [], fem: null, masc: null,
  rate: LS.get('fc_rate', 0.92),
  prefF: LS.get('fc_voiceF', ''), prefM: LS.get('fc_voiceM', ''),
  femNames: /(denise|vivienne|eloise|éloïse|amélie|amelie|audrey|marie|julie|hortense|brigitte|coralie|celeste|céleste|jacqueline|charline|yvette|josephine|joséphine|sylvie|ariane|léa|lea|aurélie|virginie|flo|google français|female|femme)/i,
  mascNames: /(henri|remy|rémy|thomas|paul|claude|jérôme|jerome|alain|antoine|maurice|gerard|gérard|jean|nicolas|daniel|fabrice|guillaume|lucien|yves|male|homme)/i,
  score(v){
    let s=0; const n=v.name;
    if(/^fr[-_]FR/i.test(v.lang)) s+=40; else if(/^fr/i.test(v.lang)) s+=20; else return -1;
    if(/natural|online|neural|premium|enhanced|wavenet|studio/i.test(n)) s+=50;
    if(/google/i.test(n)) s+=25;
    if(/(amélie|amelie|thomas|audrey|aurélie)/i.test(n)) s+=15;
    if(/compact|espeak/i.test(n)) s-=30;
    return s;
  },
  load(){
    const all = (window.speechSynthesis && speechSynthesis.getVoices()) || [];
    this.voices = all.filter(v=>/^fr/i.test(v.lang)).sort((a,b)=>this.score(b)-this.score(a));
    const byName = n => this.voices.find(v=>v.name===n);
    const fem = this.voices.filter(v=>this.femNames.test(v.name) && !this.mascNames.test(v.name));
    const masc = this.voices.filter(v=>this.mascNames.test(v.name));
    this.fem = byName(this.prefF) || fem[0] || this.voices[0] || null;
    this.masc = byName(this.prefM) || masc[0] || this.voices.find(v=>v!==this.fem) || this.fem;
    document.dispatchEvent(new Event('fc-voices'));
  },
  stop(){ if(window.speechSynthesis) speechSynthesis.cancel(); document.querySelectorAll('.playing').forEach(e=>e.classList.remove('playing')); },
  speak(text, opt={}){
    return new Promise(res=>{
      if(!window.speechSynthesis){ toast('이 브라우저는 음성 기능을 지원하지 않아요. Chrome/Edge를 사용해 주세요.'); return res(); }
      const clean = String(text).replace(/<[^>]+>/g,'').replace(/_+/g,' … ').replace(/\s+/g,' ').trim();
      const u = new SpeechSynthesisUtterance(clean);
      u.lang='fr-FR';
      const v = opt.g==='m' ? this.masc : this.fem;
      if(v) u.voice=v;
      u.rate = (opt.rate||1)*this.rate;
      u.pitch = (v && this.fem===this.masc && opt.g==='m') ? 0.8 : 1;
      if(opt.el) opt.el.classList.add('playing');
      const done=()=>{ if(opt.el) opt.el.classList.remove('playing'); res(); };
      u.onend=done; u.onerror=done;
      speechSynthesis.speak(u);
    });
  }
};
FC.TTS = TTS;
if(window.speechSynthesis){
  TTS.load();
  speechSynthesis.onvoiceschanged = ()=>TTS.load();
  setTimeout(()=>TTS.load(),600);
}
FC.say = (t,o)=>{ TTS.stop(); return TTS.speak(t,o); };

/* click any .say element to hear it */
document.addEventListener('click', e=>{
  const s = e.target.closest('.say');
  if(s && !e.target.closest('input,select,textarea')){ FC.say(s.dataset.say||s.textContent,{el:s,g:s.dataset.g}); }
});

function toast(msg){
  let t=document.querySelector('.toast');
  if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t);}
  t.textContent=msg; t.classList.add('show'); clearTimeout(t._h); t._h=setTimeout(()=>t.classList.remove('show'),2600);
}
FC.toast = toast;

/* ---------------- Voice settings modal ---------------- */
FC.voicePanel = function(){
  let m=document.getElementById('voiceModal');
  if(!m){
    m=document.createElement('div'); m.id='voiceModal'; m.className='modal';
    m.innerHTML=`<div class="pane"><h3>🔊 음성 설정 (Voix)</h3>
      <label>여성 목소리 (voix féminine)</label><select id="vF"></select>
      <label>남성 목소리 (voix masculine)</label><select id="vM"></select>
      <label>속도 <span id="rateV"></span></label><input type="range" id="rate" min="0.6" max="1.2" step="0.02">
      <div style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap">
        <button class="btn" id="tF">▶ 여성 음성 듣기</button><button class="btn" id="tM">▶ 남성 음성 듣기</button>
        <span style="flex:1"></span><button class="btn pri" id="vClose">닫기</button></div>
      <div class="vnote">💡 가장 자연스러운 원어민 발음: <b>Microsoft Edge</b>의 “Denise / Henri / Vivienne / Remy (Online, Natural)” 또는 Chrome의 “Google français”, iPhone·Mac의 “Amélie / Thomas (향상됨)” 음성을 선택하세요. 목록에 프랑스어 음성이 없으면 기기 설정에서 프랑스어 음성을 추가하면 됩니다.</div></div>`;
    document.body.appendChild(m);
    m.addEventListener('click',e=>{ if(e.target===m) m.classList.remove('show'); });
    m.querySelector('#vClose').onclick=()=>m.classList.remove('show');
    const fill=()=>{
      ['vF','vM'].forEach(id=>{
        const s=m.querySelector('#'+id), cur=id==='vF'?TTS.fem:TTS.masc;
        s.innerHTML = TTS.voices.length? TTS.voices.map(v=>`<option ${cur&&v.name===cur.name?'selected':''}>${v.name}</option>`).join('') : '<option>(프랑스어 음성 없음)</option>';
      });
      const r=m.querySelector('#rate'); r.value=TTS.rate; m.querySelector('#rateV').textContent='×'+(+TTS.rate).toFixed(2);
    };
    fill(); document.addEventListener('fc-voices',fill);
    m.querySelector('#vF').onchange=e=>{TTS.prefF=e.target.value;LS.set('fc_voiceF',TTS.prefF);TTS.load();};
    m.querySelector('#vM').onchange=e=>{TTS.prefM=e.target.value;LS.set('fc_voiceM',TTS.prefM);TTS.load();};
    m.querySelector('#rate').oninput=e=>{TTS.rate=+e.target.value;LS.set('fc_rate',TTS.rate);m.querySelector('#rateV').textContent='×'+TTS.rate.toFixed(2);};
    m.querySelector('#tF').onclick=()=>FC.say('Bonjour ! Je m’appelle Claire. Bienvenue au cours de français.',{g:'f'});
    m.querySelector('#tM').onclick=()=>FC.say('Bonjour ! Moi, c’est Julien. On commence ?',{g:'m'});
  }
  m.classList.add('show');
};

/* ---------------- Progress ---------------- */
FC.progress = {
  key:(u,id)=>`fc_u${u}_${id}`,
  save(u,id,score,total){ const k=this.key(u,id); const old=LS.get(k,null); if(!old || score/total >= old.s/old.t) LS.set(k,{s:score,t:total,d:Date.now()}); },
  get(u,id){ return LS.get(this.key(u,id),null); },
  unit(u){
    const U=FC.units[u]; if(!U) return null;
    const exs=U.sections.filter(s=>s.type==='ex');
    let done=0,s=0,t=0;
    exs.forEach(e=>{const p=this.get(u,e.id); if(p){done++;s+=p.s;t+=p.t;}});
    return {done,total:exs.length,pct:t?Math.round(100*s/t):0};
  }
};

/* ---------------- Normalisation & comparison ---------------- */
const stripAcc = s => s.normalize('NFD').replace(/[̀-ͯ]/g,'');
function norm(s){
  return String(s).toLowerCase()
    .replace(/[’‘`´]/g,"'").replace(/[«»"“”]/g,'').replace(/œ/g,'oe').replace(/æ/g,'ae')
    .replace(/\s*'\s*/g,"'").replace(/[.,!?;:…()\-–—]/g,' ').replace(/\s+/g,' ').trim();
}
function cmp(input, answers){
  const n=norm(input); if(!n) return 0;
  const alts = String(answers).split('|');
  if(alts.some(a=>norm(a)===n)) return 2;              // exact
  if(alts.some(a=>stripAcc(norm(a))===stripAcc(n))) return 1; // accents only
  return 0;
}
FC.cmp = cmp;
const first = a => String(a).split('|')[0];
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
FC.esc = esc;
const sayBtn = (t,g) => `<button class="iconbtn" title="듣기" data-sayt="${esc(t)}" ${g?`data-g="${g}"`:''}>▶</button>`;
document.addEventListener('click',e=>{const b=e.target.closest('[data-sayt]'); if(b){e.preventDefault(); FC.say(b.dataset.sayt,{g:b.dataset.g});}});

/* ---------------- Speech recognition (repeat after me) ---------------- */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
FC.canListen = !!SR;
function similarity(a,b){
  a=stripAcc(norm(a)).split(' '); b=stripAcc(norm(b)).split(' ');
  const set=new Set(b); let hit=0; a.forEach(w=>{if(set.has(w))hit++;});
  return Math.round(100*hit/Math.max(a.length,1));
}
FC.listen = function(target, btn){
  if(!SR){ toast('음성 인식은 Chrome/Edge에서 사용할 수 있어요.'); return; }
  const r=new SR(); r.lang='fr-FR'; r.interimResults=false; r.maxAlternatives=3;
  btn.textContent='🎙️ 듣는 중…'; btn.disabled=true;
  r.onresult=e=>{
    const alts=[...e.results[0]].map(x=>x.transcript);
    const best=alts.map(t=>[t,similarity(target,t)]).sort((x,y)=>y[1]-x[1])[0];
    const out=btn.parentElement.querySelector('.srout') || Object.assign(document.createElement('div'),{className:'srout'});
    out.style.cssText='font-size:13.5px;margin-top:4px';
    out.innerHTML=`🗣️ <i>${esc(best[0])}</i> — <b style="color:${best[1]>=80?'var(--ok)':best[1]>=50?'var(--warn)':'var(--bad)'}">${best[1]}%</b> ${best[1]>=80?'Très bien ! 👏':best[1]>=50?'Pas mal ! 다시 한번':'Encore une fois !'}`;
    btn.parentElement.appendChild(out);
  };
  r.onerror=()=>toast('음성을 인식하지 못했어요. 마이크 권한을 확인하세요.');
  r.onend=()=>{btn.textContent='🎤 따라 말하기';btn.disabled=false;};
  r.start();
};

/* ---------------- Renderers ---------------- */
const R = {};
R.dialogue = (s,U)=>{
  const lines = s.lines.map((l,i)=>`<div class="dl-line" data-i="${i}" data-sp="${esc(l.s)}">
      <button class="iconbtn" data-line="${i}">▶</button>
      <div class="who ${l.g==='f'?'f':''}">${esc(l.s)}</div>
      <div class="txt"><div class="fr">${l.fr}</div><div class="tr">${l.ko||''}</div>
      ${FC.canListen?`<div class="mic"><button class="btn sm ghost" data-mic="${i}">🎤 따라 말하기</button></div>`:''}</div></div>`).join('');
  const speakers=[...new Set(s.lines.map(l=>l.s))];
  return `<h2><span class="badge">Dialogue</span> <span class="fr">${s.title}</span></h2>
    <p class="sub">${s.ko||''}</p>${s.intro?`<div class="inst">${s.intro}</div>`:''}
    <div class="dl-tools">
      <button class="btn pri" data-act="playall">▶ 전체 듣기</button>
      <button class="btn" data-act="stop">■ 멈춤</button>
      <button class="btn" data-act="slow">🐢 천천히 듣기</button>
      <button class="btn" data-act="tr">👁 번역 숨기기</button>
      <select class="btn" data-act="role"><option value="">🎭 역할극: 끄기</option>${speakers.map(p=>`<option>${esc(p)}</option>`).join('')}</select>
    </div><div class="dl">${lines}</div>`;
};
R.bindDialogue=(el,s)=>{
  const lineEls=[...el.querySelectorAll('.dl-line')];
  let stop=false;
  const playFrom=async(rate)=>{ TTS.stop(); stop=false; await new Promise(r=>setTimeout(r,60));
    for(let i=0;i<s.lines.length && !stop;i++){
      const le=lineEls[i];
      if(le.classList.contains('masked')){ le.classList.add('playing'); await new Promise(r=>setTimeout(r,Math.max(1800, s.lines[i].fr.length*90))); le.classList.remove('playing'); continue; }
      le.scrollIntoView({block:'nearest',behavior:'smooth'});
      await TTS.speak(s.lines[i].fr,{g:s.lines[i].g==='f'?'f':'m',el:le,rate});
      await new Promise(r=>setTimeout(r,250));
    }};
  el.addEventListener('click',e=>{
    const b=e.target.closest('[data-line]'); if(b){ const i=+b.dataset.line; FC.say(s.lines[i].fr,{g:s.lines[i].g==='f'?'f':'m',el:lineEls[i]}); return; }
    const m=e.target.closest('[data-mic]'); if(m){ FC.listen(s.lines[+m.dataset.mic].fr.replace(/<[^>]+>/g,''),m); return; }
    const a=e.target.closest('[data-act]'); if(!a||a.tagName==='SELECT') return;
    const act=a.dataset.act;
    if(act==='playall') playFrom(1);
    if(act==='slow') playFrom(0.75);
    if(act==='stop'){ stop=true; TTS.stop(); }
    if(act==='tr'){ el.classList.toggle('hide-tr'); a.textContent=el.classList.contains('hide-tr')?'👁 번역 보기':'👁 번역 숨기기'; }
  });
  el.querySelector('[data-act=role]').onchange=e=>{ const v=e.target.value; lineEls.forEach(le=>le.classList.toggle('masked', !!v && le.dataset.sp===v)); if(v) toast(`${v} 역할을 직접 말해 보세요! (해당 대사는 가려지고 그 시간만큼 멈춥니다)`); };
};
R.notes = s=>`<h2><span class="badge" style="background:#5b6bb5">Grammaire</span> ${s.title}</h2>${s.ko?`<p class="sub">${s.ko}</p>`:''}<div class="notes">${s.html}</div>`;
R.reading = s=>`<h2><span class="badge" style="background:#7a5bb5">Lecture</span> <span class="fr">${s.title}</span></h2>${s.ko?`<p class="sub">${s.ko}</p>`:''}
  <div class="dl-tools"><button class="btn pri" data-readall>▶ 읽어 주기</button><button class="btn" data-act="stop2">■ 멈춤</button></div><div class="reading">${s.html}</div>`;
R.vocab = s=>`<h2><span class="badge" style="background:#0f7b6c">Vocabulaire</span> ${s.title||'핵심 어휘'}</h2>
  <div class="dl-tools"><button class="btn" data-flash>🃏 뜻 가리기 (카드 모드)</button><button class="btn" data-vall>▶ 모두 듣기</button></div>
  <div class="vocab">${s.items.map(([f,k])=>`<div class="vitem">${sayBtn(f)}<div><div class="fr">${f}</div><div class="ko">${k}</div></div></div>`).join('')}</div>`;
R.bindVocab=(el,s)=>{
  el.querySelector('[data-flash]').onclick=e=>{const v=el.querySelector('.vocab');v.classList.toggle('flash');e.target.textContent=v.classList.contains('flash')?'🃏 뜻 모두 보기':'🃏 뜻 가리기 (카드 모드)';};
  el.querySelector('.vocab').addEventListener('click',e=>{const it=e.target.closest('.vitem'); if(it) it.classList.add('show');});
  el.querySelector('[data-vall]').onclick=async()=>{TTS.stop(); for(const [f] of s.items){ await TTS.speak(f,{}); await new Promise(r=>setTimeout(r,300)); }};
};
R.bindReading=(el,s)=>{
  el.querySelector('[data-readall]').onclick=()=>FC.say(el.querySelector('.reading').innerText,{g:s.g||'f'});
  el.querySelector('[data-act=stop2]').onclick=()=>TTS.stop();
};

/* ---------- exercises ---------- */
function blanksHTML(q, ans){
  let k=0;
  return q.replace(/___+/g,()=>{ const a=(ans&&ans[k])||''; const len=Math.max(5,...String(a).split('|').map(x=>x.length))+2;
    return `<input class="blank" data-b="${k++}" autocomplete="off" autocapitalize="off" spellcheck="false" size="${len}">`; });
}
R.ex = (s,U)=>{
  const head=`<h2><span class="badge ex">Exercice ${s.n}</span> ${s.title||''}</h2>
    <div class="inst">${s.inst}${s.en?`<span class="en">${s.en}</span>`:''}</div>${s.html?`<div class="box">${s.html}</div>`:''}
    ${s.example?`<p class="muted" style="margin:-4px 0 12px">예) <span class="fr">${s.example}</span></p>`:''}`;
  let body='';
  const items=s.items||[];
  const audio = it => it.say?`${sayBtn(it.say, it.g)} `:'';
  if(s.kind==='fill') body=items.map((it,i)=>`<div class="item" data-i="${i}"><div class="q"><span class="qn">${i+1}</span>${audio(it)}<span class="fr">${blanksHTML(it.q,it.a)}</span></div>${it.hint?`<div class="muted" style="font-size:13px">${it.hint}</div>`:''}<div class="fb"></div></div>`).join('');
  if(s.kind==='choice'||s.kind==='tf') body=items.map((it,i)=>{
    const o = s.kind==='tf' ? ['Vrai (참)','Faux (거짓)'] : it.o;
    return `<div class="item" data-i="${i}"><div class="q"><span class="qn">${i+1}</span>${audio(it)}<span class="fr">${it.q||''}</span></div>
      <div class="opts">${o.map((x,j)=>`<button class="opt" data-o="${j}">${x}</button>`).join('')}</div><div class="fb"></div></div>`;}).join('');
  if(s.kind==='write') body=items.map((it,i)=>`<div class="item" data-i="${i}"><div class="q"><span class="qn">${i+1}</span>${audio(it)}<span class="fr">${it.q||''}</span></div>${it.hint?`<div class="muted" style="font-size:13px">${it.hint}</div>`:''}
      <input class="long" data-w autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${it.ph||'프랑스어로 쓰세요…'}"><div class="fb"></div></div>`).join('');
  if(s.kind==='order') body=items.map((it,i)=>{
    const words=it.w.split(' / '); const sh=shuffle(words.map((w,j)=>[w,j]), i+s.n);
    return `<div class="item" data-i="${i}"><div class="q"><span class="qn">${i+1}</span>${it.q||'단어를 순서대로 눌러 문장을 만드세요.'}</div>
      <div class="chips built" data-built></div><div class="chips" data-pool>${sh.map(([w])=>`<span class="chip">${esc(w)}</span>`).join('')}</div><div class="fb"></div></div>`;}).join('');
  if(s.kind==='match'){
    const right=s.right;
    body=`<div class="items">${s.left.map((l,i)=>`<div class="item match-row" data-i="${i}"><div class="q"><span class="qn">${i+1}</span><span class="fr">${l}</span>${s.sayLeft?` ${sayBtn(l.replace(/<[^>]+>/g,''))}`:''}</div>
      <div><select data-m><option value="">— 선택 —</option>${shuffle(right.map((r,j)=>[r,j]),s.n+11).map(([r,j])=>`<option value="${j}">${r.replace(/<[^>]+>/g,'')}</option>`).join('')}</select><div class="fb"></div></div></div>`).join('')}</div>`;
    return head+body+exActions();
  }
  return head+`<div class="items">${body}</div>`+exActions();
};
function exActions(){return `<div class="ex-actions"><button class="btn pri" data-check>✔ 채점하기</button><button class="btn" data-show>💡 정답 보기</button><button class="btn" data-reset>↺ 다시 풀기</button><span class="result"></span></div>`;}
function shuffle(a,seed){ a=a.slice(); let x=seed*9301+49297; const rnd=()=>{x=(x*9301+49297)%233280;return x/233280;};
  for(let i=a.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  if(a.every((p,i)=>p[1]===i) && a.length>1) a.push(a.shift()); return a; }

R.bindEx=(el,s,U)=>{
  const itemsEl=[...el.querySelectorAll('.item')];
  // choice selection
  el.addEventListener('click',e=>{
    const o=e.target.closest('.opt'); if(o){ o.parentElement.querySelectorAll('.opt').forEach(b=>b.classList.remove('sel','right','wrong')); o.classList.add('sel'); }
    const c=e.target.closest('.chip'); if(c){ const it=c.closest('.item'); const built=it.querySelector('[data-built]'), pool=it.querySelector('[data-pool]');
      (c.parentElement===pool?built:pool).appendChild(c); }
  });
  el.addEventListener('keydown',e=>{ if(e.key==='Enter' && e.target.matches('input')){ e.preventDefault(); const ins=[...el.querySelectorAll('input')]; const i=ins.indexOf(e.target); if(ins[i+1]) ins[i+1].focus(); else el.querySelector('[data-check]').click(); }});
  const fb=(it,cls,html)=>{ it.classList.remove('ok','bad','half'); if(cls) it.classList.add(cls); const f=it.querySelector('.fb'); f.innerHTML=html||''; f.classList.toggle('show',!!html); };
  const answerText=(i)=>{
    const it=s.items?s.items[i]:null;
    if(s.kind==='fill') return it.a.map(first).join(' / ');
    if(s.kind==='choice') return it.o[it.a];
    if(s.kind==='tf') return (it.a?'Vrai':'Faux')+(it.fix?` → ${it.fix}`:'');
    if(s.kind==='write'||s.kind==='order') return first(it.a);
    if(s.kind==='match') return s.right[s.a[i]].replace(/<[^>]+>/g,'');
  };
  const check=(reveal)=>{
    let score=0,total=0;
    itemsEl.forEach((ie,i)=>{
      const it=s.items?s.items[i]:null; let pts=0,max=1,note='';
      if(s.kind==='fill'){
        const ins=[...ie.querySelectorAll('input')]; max=ins.length;
        ins.forEach((inp,k)=>{ const r=cmp(inp.value,it.a[k]); if(r===2) pts++; else if(r===1){pts++;note='악센트(é, è, à, ç…)를 확인하세요.';}
          inp.style.borderColor = r? 'var(--ok)':'var(--bad)'; if(reveal && !r) inp.value=first(it.a[k]); });
      } else if(s.kind==='choice'||s.kind==='tf'){
        const sel=ie.querySelector('.opt.sel'); const correct = s.kind==='tf' ? (it.a?0:1) : it.a;
        if(sel && +sel.dataset.o===correct){pts=1; sel.classList.add('right');}
        else { if(sel) sel.classList.add('wrong'); ie.querySelectorAll('.opt')[correct].classList.add('right'); }
      } else if(s.kind==='write'){
        const inp=ie.querySelector('input'); const r=cmp(inp.value,it.a); if(r){pts=1; if(r===1) note='악센트를 확인하세요.';}
      } else if(s.kind==='order'){
        const built=[...ie.querySelectorAll('[data-built] .chip')].map(c=>c.textContent).join(' ');
        if(cmp(built,it.a)) pts=1;
      } else if(s.kind==='match'){
        const v=ie.querySelector('select').value; if(v!=='' && +v===s.a[i]) pts=1;
      }
      score+=pts; total+=max;
      const full=pts===max;
      const showAns = !full || it&&it.ex;
      fb(ie, full?(note?'half':'ok'):(pts>0?'half':'bad'),
        (full?'✅ 정답! ':'❌ 정답: <span class="ans">'+esc(answerText(i))+'</span>') + (note?` <span class="note">${note}</span>`:'') + (it&&it.ex?`<div class="muted">💬 ${it.ex}</div>`:'') + (full && s.kind!=='choice' && s.kind!=='tf' && s.kind!=='match' && s.showModel ? `<div class="muted">모범답안: <span class="fr">${esc(answerText(i))}</span></div>`:''));
    });
    return {score,total};
  };
  el.querySelector('[data-check]').onclick=()=>{
    const {score,total}=check(false); const r=el.querySelector('.result'); const p=score/total;
    r.className='result show '+(p>=.8?'g':p>=.5?'m':'b'); r.textContent=`${score} / ${total} 점 (${Math.round(p*100)}%) ${p===1?'🎉 Parfait !':p>=.8?'👏 Très bien !':p>=.5?'💪 Courage !':'📖 다시 도전!'}`;
    FC.progress.save(U.n,s.id,score,total); document.dispatchEvent(new Event('fc-progress'));
  };
  el.querySelector('[data-show]').onclick=()=>{
    itemsEl.forEach((ie,i)=>{ fb(ie,'', '💡 정답: <span class="ans">'+esc(answerText(i))+'</span>'+(s.items&&s.items[i].ex?`<div class="muted">💬 ${s.items[i].ex}</div>`:'')); });
  };
  el.querySelector('[data-reset]').onclick=()=>{
    el.querySelectorAll('input').forEach(i=>{i.value='';i.style.borderColor='';});
    el.querySelectorAll('select[data-m]').forEach(x=>x.value='');
    el.querySelectorAll('.opt').forEach(b=>b.classList.remove('sel','right','wrong'));
    el.querySelectorAll('.item').forEach(ie=>{ const b=ie.querySelector('[data-built]'), p=ie.querySelector('[data-pool]'); if(b) [...b.children].forEach(c=>p.appendChild(c)); fb(ie,'',''); });
    el.querySelector('.result').className='result';
  };
};

/* ---------------- Unit page ---------------- */
FC.renderUnit = function(n){
  const U=FC.units[n]; const meta=(FC.META||[]).find(m=>m.n===n)||{};
  if(!U){ document.getElementById('app').innerHTML='<div class="wrap">단원을 찾을 수 없습니다.</div>'; return; }
  document.title=`Unité ${n} · ${U.title} — Français Conversation`;
  let exCount=0;
  U.sections.forEach((s,i)=>{ if(!s.id) s.id = s.type==='ex' ? 'ex'+s.n : s.type+i; if(s.type==='ex') exCount++; });
  const nav=U.sections.map(s=>{
    const lbl = s.type==='ex'?`✏️ Exercice ${s.n}`: s.type==='dialogue'?`💬 ${s.title}`: s.type==='notes'?`📘 ${s.title}`: s.type==='reading'?`📰 ${s.title}`:`🔤 ${s.title||'어휘'}`;
    return `<a href="#${s.id}"><span>${lbl}</span>${s.type==='ex'?`<span class="sc" data-sc="${s.id}"></span>`:''}</a>`;}).join('');
  const prev=FC.META.find(m=>m.n===n-1), next=FC.META.find(m=>m.n===n+1);
  document.getElementById('app').innerHTML=`
   <section class="unit-hero"><div class="in"><div class="kicker">${n===0?'INTRODUCTION':'UNITÉ '+n}</div>
     <h1><span class="fr">${U.title}</span> ${meta.emoji||''}</h1><div class="muted">${U.ko}</div>
     <div class="goals">${(U.goals||[]).map(g=>`<span>${g}</span>`).join('')}</div></div></section>
   <div class="layout"><aside class="side"><div class="scorebox"><small>단원 점수</small><b id="uScore">–</b><small id="uDone"></small></div>
      <a href="index.html">🏠 전체 단원</a><div class="grp">CONTENU</div>${nav}</aside>
     <main id="main"></main></div>`;
  const main=document.getElementById('main');
  U.sections.forEach(s=>{
    const c=document.createElement('section'); c.className='card'; c.id=s.id;
    c.innerHTML=R[s.type](s,U); main.appendChild(c);
    if(s.type==='dialogue') R.bindDialogue(c,s);
    if(s.type==='vocab') R.bindVocab(c,s);
    if(s.type==='reading') R.bindReading(c,s);
    if(s.type==='ex') R.bindEx(c,s,U);
  });
  const nv=document.createElement('div'); nv.className='unit-nav';
  nv.innerHTML=`${prev?`<a class="btn" href="unit.html?u=${prev.n}">← ${prev.n===0?'Introduction':'Unité '+prev.n}: ${prev.fr}</a>`:'<span></span>'}${next?`<a class="btn pri" href="unit.html?u=${next.n}">Unité ${next.n}: ${next.fr} →</a>`:''}`;
  main.appendChild(nv);
  const upd=()=>{ const p=FC.progress.unit(n); document.getElementById('uScore').textContent=p.done?p.pct+'%':'–'; document.getElementById('uDone').textContent=`연습문제 ${p.done}/${p.total} 완료`;
    U.sections.filter(s=>s.type==='ex').forEach(s=>{const g=FC.progress.get(n,s.id); const el=document.querySelector(`[data-sc="${s.id}"]`); if(el) el.textContent=g?`${g.s}/${g.t}`:'';}); };
  upd(); document.addEventListener('fc-progress',upd);
  if(location.hash){ const t=document.querySelector(location.hash); if(t) setTimeout(()=>t.scrollIntoView(),50); }
};
})();
