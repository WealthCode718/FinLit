//@@META
title=Long-Term Goals
file=module-50-long-term-goals.html
placeholder=Ask about retirement and long-term goals…
//@@CSS
  .week{font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:#fff; background:var(--shell); display:inline-block; border-radius:6px; padding:2px 10px; margin-bottom:8px; font-weight:700}
  .stars{font-size:28px; letter-spacing:4px; text-align:center; margin:6px 0}
  .life{background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:12px 14px; margin-bottom:12px}
  .life .track{display:flex; height:26px; border-radius:999px; overflow:hidden; margin:8px 0 6px}
  .life .track div{display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:700; color:#fff}
  .life .kid{background:#9fb7ad} .life .work{background:var(--good)} .life .ret{background:var(--shell)}
  .life .legend{font-size:12px; color:var(--ink-soft); display:flex; justify-content:space-between}
  .buckets{display:grid; grid-template-columns:1fr; gap:8px; margin-bottom:12px}
  .bucket{background:#fff; color:var(--ink); border:2px solid #d9e2de; border-radius:14px; padding:12px 14px; text-align:left; font-size:14px; font-weight:400; line-height:1.4; min-height:44px}
  .bucket .nm{font-weight:800; font-size:15px}
  .bucket.open{border-color:var(--good); background:#e8f3ee}
  .cover{background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:12px 14px; margin-bottom:12px}
  .cover .lbl{font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:var(--ink-soft); font-weight:700; display:flex; justify-content:space-between}
  .cover .bar{height:16px; border-radius:999px; background:#eef2f0; overflow:hidden; margin-top:8px; display:flex}
  .cover .bar div{height:100%; transition:width .5s ease}
  .race{background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:12px 14px; margin-bottom:12px}
  .race .row{margin:8px 0}
  .race .nm{display:flex; justify-content:space-between; font-weight:700; font-size:15px}
  .race .bar{height:18px; border-radius:999px; background:#eef2f0; overflow:hidden; margin-top:4px}
  .race .bar div{height:100%; border-radius:999px; transition:width .6s ease}
  .race .p .bar div{background:var(--good)} .race .l .bar div{background:var(--shell)}
  .race .sub{font-size:13px; color:var(--ink-soft); margin-top:2px}
  .sortbar .st{background:var(--ink)} .sortbar .lt{background:var(--good)}
//@@CONTENT
/* =====================================================================
   MODULE 50 — LONG-TERM GOALS  (Finale block, 1 of 3)
   Vocab: retirement, retirement account.
   L1: Tavo's question. A lifetime bar (childhood / working / retired),
       then open three buckets that will pay Tavo's needs once the
       paycheck stops: what he built, an island program he paid into
       from every paycheck, and family/selling his boat. Named: retirement.
   L2: Pua starts $5 a week at 20; Leo starts $10 a week at 40. By 65,
       Pua put in less but has more (compound growth, M44). Named:
       retirement account (generic: names and rules differ by place;
       some employers add money; taking it out early can cost extra).
   L3: Short-term or long-term goal sort, then a 4-moment challenge.
   Pua/Leo numbers follow ~7% a year, never stated; labeled smoothed.
===================================================================== */
const VOCAB = {
  retirement:{term:"retirement", def:"The time in life when a person stops working for pay, usually when they're older. The paychecks stop, but needs like food, a home, and medicine don't."},
  retacct:{term:"retirement account", def:"A special account for long-term money you'll live on in retirement. Names and rules differ by place. Often it gets extra help, like an employer adding money, and taking money out early can cost extra."}
};

const QUESTIONS = {
  "q501a":{type:"mc", prompt:"What is retirement?", concept:"retirement", opts:[
    {t:"The time in life when someone stops working for pay, usually when they're older", ok:true, fb:"Right. The paychecks stop, but the needs keep going."},
    {t:"A long vacation between two jobs", ok:false, fb:"A break between jobs is short. Retirement is when someone stops working for pay for good, usually when older."},
    {t:"When someone switches to a new employer", ok:false, fb:"That's a new job. Retirement is when working for pay stops."}]},
  "q501b":{type:"mc", prompt:"Tavo stops fishing. His paychecks stop. What will mostly pay for his needs?", concept:"retirement", opts:[
    {t:"Money he built up over his working years, plus any programs he paid into", ok:true, fb:"Right. Retirement is paid for by what you set aside while you were earning."},
    {t:"Nothing. Needs stop when work stops", ok:false, fb:"Food, a home, and medicine are still needed. Something has to pay for them."},
    {t:"A loan he never pays back", ok:false, fb:"Loans must be paid back, and borrowing with no income is very risky. Retirement runs on money built up earlier."}]},
  "q501c":{type:"tf", prompt:"True or false: retirement only matters once you're old.", answer:false, concept:"retirement",
    good:"Right. It's paid for during the working years, and the earliest years help most, thanks to compound growth.",
    bad:"Look again. Retirement is paid for while you're working. Starting young gives compound growth the most time."},
  "q502a":{type:"mc", prompt:"What is a retirement account?", concept:"retacct", opts:[
    {t:"A special account for long-term money to live on later, often with extra help like an employer adding money", ok:true, fb:"Right. Names and rules differ by place, but the idea is the same."},
    {t:"An account for next week's spending", ok:false, fb:"That's checking. A retirement account is for money you won't touch for decades."},
    {t:"The emergency fund under a new name", ok:false, fb:"The emergency fund must be ready any day. Retirement money is meant to stay put for a very long time."}]},
  "q502b":{type:"mc", prompt:"Pua put in about $11,700 starting at 20. Leo put in about $13,000 starting at 40. By 65, Pua has much more. Why?", concept:"retacct", opts:[
    {t:"Her money had 20 more years of compound growth", ok:true, fb:"Right. Time beat size. Starting small and early won."},
    {t:"Pua found a magic account", ok:false, fb:"Same kind of account. The only big difference was 20 extra years of growth on growth."},
    {t:"Leo's money disappeared", ok:false, fb:"Leo's money grew too, just for fewer years. Pua had 20 more years of compound growth."}]},
  "q503a":{type:"mc", prompt:"At 30, Kai wants to take money out of his retirement account early to buy a fancy new phone. What's the problem?", concept:"retacct", opts:[
    {t:"It can cost extra, and that money loses decades of growth he'll need later", ok:true, fb:"Right. A phone today could cost far more in retirement money later. It's long-term money for a reason."},
    {t:"No problem. It's his money, so it's free to use any time", ok:false, fb:"It's his, but taking it out early often costs extra, and it stops decades of compound growth."},
    {t:"The phone will grow in value instead", ok:false, fb:"Phones lose value fast. The retirement money would have kept growing."}]},
  "q503b":{type:"mc", transfer:true, prompt:"Lena's aunt, 25, starts a new job. Her employer says: \"Put money in your retirement account and we'll add some too.\" She already has an emergency fund. What's a smart move?", concept:"retacct", opts:[
    {t:"Join, put in at least enough to get the employer's extra, read the fine print, and keep her emergency fund", ok:true, fb:"Exactly. Extra money from an employer plus decades of growth. Same ideas as Pua's head start."},
    {t:"Wait until she's 45, because 25 is too young", ok:false, fb:"25 is a great time. More years of growth, and she'd miss the employer's extra money."},
    {t:"Move her emergency fund into it", ok:false, fb:"The emergency fund must stay ready. Retirement money is for decades from now."}]}
};

const CFG = {
  n:50, title:"Long-Term Goals", homeSub:"Four short lessons. What retirement is, why starting early matters, and goals across a lifetime.",
  pool:["q501a","q501b","q501c","q502a","q502b","q503a"], transfer:"q503b",
  quest:"You helped Tavo see what pays the bills after fishing stops, watched Pua's small early start beat Leo's bigger late one, and sorted goals across a lifetime.",
  failKeys:"The keys: retirement is when paid work stops but needs keep going; it's paid for by money built up while working; a retirement account is special long-term money, often with extra help, and taking it out early costs you; and starting small and early beats starting big and late.",
  nextFile:"module-51-your-money-plan.html",
  passStory:'<p><strong>You now own:</strong> retirement and retirement account.</p>'+
    '<p>Tavo smiles. "Turns out I did better than I thought. I put a little away for thirty years and mostly left it alone."</p>'+
    '<p>Kai opens his notebook to a clean page. "If I have goals for this week and goals for when I’m old… I need one plan that holds all of it."</p>'+
    '<p>Rana nods. "Then let’s build it. Everything you’ve learned, on one page."</p>'+
    '<p class="muted">Module 51: Your Money Plan.</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about retirement, retirement accounts, or long-term goals. Or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 50 (Long-Term Goals) of a financial-literacy app, the first module of the final block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, multiply, price, cost, buy, pay, earn, work, spend, need, save, goal, budget, bank, deposit, withdraw, balance, savings, interest, grow, fee, scam, borrow, loan, debt, credit card, employer, wage, paycheck, income, tax, take-home pay, risk, emergency, emergency fund, insurance, policy, inflation, buying power, invest, return, stock, profit, diversify, investment fund, compound growth, long-term, risk tolerance, investment plan, advertising, value, contract, consumer rights, donate, charity, fine print, comparison shopping. "+
  "From THIS module: retirement (the time in life when someone stops working for pay, usually when older; paychecks stop but needs don't) and retirement account (a special account for long-term money to live on in retirement; names and rules differ by place; often it gets extra help like an employer adding money or tax breaks; taking money out early can cost extra). "+
  "Key points: retirement is paid for during working years, from money built up (savings, investments, retirement accounts), sometimes programs people pay into from their paychecks, and sometimes family; starting small and early beats starting big and late because of compound growth; retirement money doesn't replace the emergency fund; taking retirement money out early for wants can cost extra and loses decades of growth; if an employer adds money, read the fine print and try to get it. "+
  "TEACHING STYLE: concepts over calculations. Never give a growth rate. Do not name country-specific account types, government programs, companies, or funds; say names and rules differ by place and suggest asking a trusted adult. No personal financial advice. "+
  "Story context: Tavo, who has fished for thirty years, asked what he'll live on when he stops. Kai saw a lifetime bar (childhood, about 45 working years, maybe 20+ retired years) and opened Tavo's three buckets: what he built up over thirty years in the island fund, the island elders' program he paid into from every paycheck, and selling his boat plus a little family help. Then Kai compared Pua (starts $5 a week at 20, puts in about $11,700, has about $74,000 at 65) with Leo (starts $10 a week at 40, puts in about $13,000, has about $33,000 at 65), a smoothed picture where nothing is promised. "+
  "Never repeat a failed explanation: switch examples (planting a tree you'll sit under later, a squirrel storing nuts for winter, a long voyage needing supplies packed early). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple 'short-term or long-term goal?' question and wait.";
//@@LESSONS
/* =====================================================================
   INTERACTIVES — lifetime bar, Tavo's three buckets, Pua vs. Leo,
   short/long goal sort, and the challenge.
===================================================================== */
function lifeBar(){
  return '<div class="life"><div class="track"><div class="kid" style="width:22%">Child</div><div class="work" style="width:50%">Working years</div><div class="ret" style="width:28%">Retired</div></div>'+
    '<div class="legend"><span style="width:22%">Ages 0–20</span><span style="width:50%;text-align:center">About 20 to 65</span><span style="width:28%;text-align:right">65 and up</span></div></div>';
}
const BUCKETS=[
  {id:"b1", nm:"🫙 What Tavo built", d:"Thirty years of putting a little into the island fund and leaving it alone. This is the biggest bucket.", pct:55, c:"var(--good)"},
  {id:"b2", nm:"🏛️ The elders’ program", d:"A little came out of every paycheck Tavo ever earned, into an island program that now pays him a small amount each month. Many places have programs like this, with different rules.", pct:30, c:"var(--ink)"},
  {id:"b3", nm:"⛵ The boat, and family", d:"Selling his boat to a young fisher, and a little help from family now and then.", pct:15, c:"var(--shell)"}
];
function cover(open){
  const tot=BUCKETS.filter(b=>open.has(b.id)).reduce((a,b)=>a+b.pct,0);
  return '<div class="cover"><div class="lbl"><span>Tavo’s needs covered</span><span>'+tot+'%</span></div><div class="bar">'+
    BUCKETS.filter(b=>open.has(b.id)).map(b=>'<div style="width:'+b.pct+'%;background:'+b.c+'"></div>').join('')+'</div></div>';
}
const AGES=[
  {a:"Age 20", pua:0, leo:0, pin:0, lin:0, note:"Pua starts putting $5 a week into a retirement account. Leo says, \"I'll start later, with more.\""},
  {a:"Age 40", pua:11000, leo:0, pin:5200, lin:0, note:"Pua has put in about $5,200. Leo starts now, with $10 a week."},
  {a:"Age 65", pua:74000, leo:33000, pin:11700, lin:13000, note:"Pua put in about $11,700. Leo put in about $13,000, MORE than Pua. But Pua ends with more than twice as much."}
];
function fmt(n){ return "$"+n.toLocaleString("en-US"); }
function race(k){
  const s=AGES[k], w=v=>Math.max(2, v/74000*100);
  return '<div class="week">'+s.a+'</div><div class="race">'+
    '<div class="row p"><div class="nm"><span>🧑 Pua · started at 20</span><span>'+fmt(s.pua)+'</span></div><div class="bar"><div style="width:'+w(s.pua)+'%"></div></div><div class="sub">Put in so far: '+fmt(s.pin)+'</div></div>'+
    '<div class="row l"><div class="nm"><span>🧔 Leo · started at 40</span><span>'+fmt(s.leo)+'</span></div><div class="bar"><div style="width:'+w(s.leo)+'%"></div></div><div class="sub">Put in so far: '+fmt(s.lin)+'</div></div></div>'+
    '<div class="card"><p style="margin:0">'+s.note+'</p></div>';
}
const GOALS=[
  {t:"🎟️ Movie tickets this weekend", a:"st", why:"This weekend is short-term."},
  {t:"🏖️ Retiring someday", a:"lt", why:"Decades away. The longest goal of all."},
  {t:"🎒 A new school bag next month", a:"st", why:"Next month is short-term."},
  {t:"⛵ A bigger boat in about 15 years", a:"lt", why:"15 years is long-term. That money can be invested."},
  {t:"🎁 Mika’s birthday gift in two weeks", a:"st", why:"Two weeks is short-term. Keep that money safe and handy."}
];
const MOVES=[
  {wk:"Too young?", story:"Kai, 16, gets his first paycheck. A friend says: \"Retirement? That's 50 years away. Why bother now?\"", opts:[
    {t:"Start small anyway. Even a little now gets the most years of compound growth", ok:true, fb:"Right. Remember Pua. Small and early beat big and late."},
    {t:"Wait until he's 40 and earning more", ok:false, fb:"That's Leo's plan. He put in more and ended with less."},
    {t:"Never, because retirement will take care of itself", ok:false, fb:"Retirement is paid for by what you set aside while working. It won't happen by itself."}]},
  {wk:"Free extra money", story:"Kai's new employer says: \"Put some of each paycheck in your retirement account, and we'll add money too.\"", opts:[
    {t:"Read the fine print, then put in at least enough to get the employer's extra money", ok:true, fb:"Right. Extra money for his future just for joining is a great deal. Check the details first."},
    {t:"Say no, because it's too complicated", ok:false, fb:"Ask a trusted adult to help him read it. Turning down extra money for his future is a big miss."},
    {t:"Sign without reading", ok:false, fb:"It's probably good, but always read the fine print first (Module 49)."}]},
  {wk:"Raid it for a phone?", story:"At 30, Kai wants a fancy phone. His retirement account has plenty in it.", opts:[
    {t:"Leave it alone. Taking it early can cost extra and loses decades of growth", ok:true, fb:"Right. It's long-term money. Save for the phone separately."},
    {t:"Take it out. It's his money", ok:false, fb:"It is his, but early withdrawals often cost extra, and the money stops growing."},
    {t:"Take it out and put it back someday", ok:false, fb:"“Someday” rarely comes, and the lost growth never comes back."}]},
  {wk:"Both at once?", story:"Kai puts money into his retirement account every month. Mika says he doesn't need an emergency fund anymore.", opts:[
    {t:"He still needs one. Retirement money is for decades from now; the emergency fund is for any bad day", ok:true, fb:"Right. Different jobs. Keep both."},
    {t:"True, he can use retirement money for emergencies", ok:false, fb:"That can cost extra and loses growth. The emergency fund is for emergencies."},
    {t:"True, insurance covers everything", ok:false, fb:"Insurance doesn't cover everything (Module 39). Keep an emergency fund too."}]}
];
let iStars=0;

/* =====================================================================
   LESSON 1 — When the Fishing Stops
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · When the fishing stops</div>
    <div class="recap"><strong>Kai’s story so far:</strong> Kai can earn, save, borrow, protect, invest, and handle the money world. Then Tavo asked: "One day I’ll stop fishing. What will I live on?"</div>
    ${lifeBar()}
    <div class="card"><p>"Most people work for many years," Rana says. "Then one day, they stop. That stretch after work can last twenty years, or more."</p>
    <p>"But the needs don’t stop," Kai says slowly. "Food. A roof. Medicine."</p>
    <p>"Exactly. So what pays for them?"</p></div>
    <button onclick="next()">Look at Tavo’s buckets</button>`),
  ()=>{
    const open=new Set(); let last=null;
    function draw(){
      const all=open.size>=BUCKETS.length;
      show(`<div class="kicker">Lesson 1 · Tavo’s three buckets</div>
        ${cover(open)}
        <div class="buckets">${BUCKETS.map(b=>'<button class="bucket'+(open.has(b.id)?' open':'')+'" data-bot="1" data-id="'+b.id+'"><div class="nm">'+b.nm+'</div>'+(open.has(b.id)?b.d:'Tap to open')+'</button>').join('')}</div>
        <div id="cont">${all?'<div class="feedback good">All three together cover Tavo’s needs. And nearly all of it was set aside during his working years.</div><button onclick="next()">Continue</button>':''}</div>`);
      document.querySelectorAll(".bucket").forEach(b=>{ b.onclick=()=>{ if(!open.has(b.dataset.id)){ open.add(b.dataset.id); addXP(1); } draw(); }; });
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 1 · A new word</div>
    <div class="card"><p>The time in life when someone stops working for pay, usually when they’re older, is called <strong>retirement</strong>.</p>
    <p>The big lesson from Tavo’s buckets: <strong>retirement is paid for during the working years.</strong> Every bucket was filled while he was still fishing.</p></div>
    <button onclick="earnWord('retirement');next()">New word: retirement</button>`),
  ()=>renderMC("q501a", next),
  ()=>renderMC("q501b", next),
  ()=>renderTF("q501c", next),
];

/* =====================================================================
   LESSON 2 — Pua and Leo
===================================================================== */
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · Pua and Leo</div>
    <div class="recap"><strong>So far:</strong> retirement is paid for during the working years.</div>
    <div class="card"><p>Rana tells Kai about two fishers from the next island. Both saved for retirement in the same kind of account. One started early and small. One started late and bigger.</p>
    <p class="muted">This is a smoothed picture. Real investments bounce up and down, and nothing is promised.</p></div>
    <button onclick="next()">Watch their stories</button>`),
  ()=>{
    let k=0;
    function draw(){
      const last=k>=AGES.length-1;
      show(`<div class="kicker">Lesson 2 · Small and early vs. big and late</div>
        ${race(k)}
        <div id="cont">${last
          ? '<div class="feedback good">Pua put in LESS and ended with more than twice as much. Twenty extra years of compound growth (Module 44) did the heavy lifting.</div><button onclick="next()">Continue</button>'
          : '<button data-bot="1" onclick="window._w()">⏩ Skip ahead</button>'}</div>`);
      window._w=()=>{ k++; draw(); };
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 2 · Another new word</div>
    <div class="card"><p>Pua and Leo used a <strong>retirement account</strong>: a special account for long-term money to live on in retirement.</p>
    <ul class="recaplist">
      <li>🌍 <strong>Names and rules differ</strong> from place to place.</li>
      <li>🎁 Often there’s <strong>extra help</strong>, like an employer adding money when you put some in.</li>
      <li>⛔ Taking money out <strong>early</strong> can cost extra, and it loses years of growth.</li>
    </ul></div>
    <button onclick="earnWord('retacct');next()">New word: retirement account</button>`),
  ()=>renderMC("q502a", next),
  ()=>renderMC("q502b", next),
];

/* =====================================================================
   LESSON 3 — Goals Across a Lifetime
===================================================================== */
const L3=[
  ()=>show(`<div class="kicker">Lesson 3 · Goals across a lifetime</div>
    <div class="recap"><strong>So far:</strong> small and early beats big and late.</div>
    <div class="card"><p>Kai realizes he has goals on very different clocks. Some are days away. One is fifty years away.</p>
    <p>Short-term goal money stays safe and handy. Long-term goal money can go to work.</p></div>
    <button onclick="next()">Sort Kai’s goals</button>`),
  ()=>{
    let i=0;
    function draw(){
      if(i>=GOALS.length){ addXP(5); next(); return; }
      const g=GOALS[i];
      show(`<div class="kicker">Short-term or long-term? · ${i+1} of ${GOALS.length}</div>
        <div class="item">${g.t}</div>
        <div class="sortbar"><button class="st" id="gS">⏱️ Short-term</button><button class="lt" id="gL">🌳 Long-term</button></div>
        <div id="fb"></div><div id="cont"></div>`);
      let done=false;
      function pick(a){
        if(done) return;
        const ok=a===g.a;
        document.getElementById("fb").innerHTML='<div class="feedback '+(ok?'good':'bad')+'">'+(ok?'Right. '+g.why:'Ask: is it days and months away, or many years? Try again.')+'</div>';
        revealFB();
        if(ok){
          done=true; addXP(1);
          document.getElementById("gS").disabled=true; document.getElementById("gL").disabled=true;
          document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<GOALS.length-1?"Next":"Done")+'</button>';
          window._n=()=>{ i++; draw(); };
          revealFB();
        }
      }
      document.getElementById("gS").onclick=()=>pick("st");
      document.getElementById("gL").onclick=()=>pick("lt");
    }
    draw();
  },
  ()=>{ iStars=0;
    show(`<div class="kicker">Lesson 3 · Four moments</div>
    <div class="card"><p>Four moments across Kai’s life. Get each right the first time to earn a ⭐.</p></div>
    <button onclick="next()">Start</button>`); },
  ()=>{
    let i=0;
    function draw(){
      if(i>=MOVES.length){ addXP(4); next(); return; }
      const w=MOVES[i];
      const shuffled=w.opts.map((o,k)=>({o,k})).sort(()=>Math.random()-.5);
      show(`<div class="week">${w.wk}</div>
        <div class="card"><p style="margin:0">${w.story}</p></div>
        <div id="opts">${shuffled.map(x=>'<button class="opt" data-bot="1" data-k="'+x.k+'">'+x.o.t+'</button>').join('')}</div>
        <div id="fb"></div><div id="cont"></div>`);
      let first=true, done=false;
      document.querySelectorAll("#opts .opt").forEach(btn=>{
        btn.onclick=()=>{
          if(done) return;
          const o=w.opts[+btn.dataset.k];
          btn.classList.add(o.ok?"right":"wrong");
          document.getElementById("fb").innerHTML='<div class="feedback '+(o.ok?'good':'bad')+'">'+o.fb+(o.ok?'':' Pick again.')+'</div>';
          revealFB();
          if(o.ok){
            done=true; if(first){ iStars++; addXP(1); }
            document.querySelectorAll("#opts .opt").forEach(b=>b.disabled=true);
            document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<MOVES.length-1?"Next":"See how you did")+'</button>';
            window._n=()=>{ i++; draw(); };
            revealFB();
          } else { first=false; btn.disabled=true; }
        };
      });
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 3 · How you did</div>
    <div class="stars">${"⭐".repeat(iStars)}${"☆".repeat(MOVES.length-iStars)}</div>
    <p class="muted" style="text-align:center">${iStars} of ${MOVES.length} on the first try</p>
    <div class="card"><ul class="recaplist">
      <li>✅ Start small, start early.</li>
      <li>✅ Get the employer’s extra money, after reading the fine print.</li>
      <li>✅ Leave retirement money alone.</li>
      <li>✅ Keep the emergency fund too.</li>
    </ul></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q503a", next),
];
const META=[
  {title:"When the Fishing Stops", sub:"What pays the bills after work ends", emoji:"🌅"},
  {title:"Pua and Leo", sub:"Small and early vs. big and late", emoji:"⏳"},
  {title:"Goals Across a Lifetime", sub:"Short-term, long-term, and four moments", emoji:"🧭"},
];
