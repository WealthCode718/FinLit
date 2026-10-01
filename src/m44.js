//@@META
title=Growing Over Time
file=module-44-growing-over-time.html
placeholder=Ask about compound growth and long-term money…
//@@CSS
  .week{font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:#fff; background:var(--shell); display:inline-block; border-radius:6px; padding:2px 10px; margin-bottom:8px; font-weight:700}
  .stars{font-size:28px; letter-spacing:4px; text-align:center; margin:6px 0}
  .race{background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:12px 14px; margin-bottom:12px}
  .race .row{margin:8px 0}
  .race .nm{display:flex; justify-content:space-between; font-weight:700; font-size:15px}
  .race .bar{height:18px; border-radius:999px; background:#eef2f0; overflow:hidden; margin-top:4px}
  .race .bar div{height:100%; border-radius:999px; transition:width .6s ease}
  .race .k .bar div{background:var(--good)} .race .m .bar div{background:var(--shell)}
  .race .sub{font-size:13px; color:var(--ink-soft); margin-top:2px}
  .decades{display:flex; gap:6px; flex-wrap:wrap; margin:6px 0 2px}
  .decades span{background:#e8f3ee; color:var(--good); font-weight:700; border-radius:8px; padding:3px 8px; font-size:13px}
  .ages{display:flex; gap:8px; flex-wrap:wrap; margin-bottom:12px}
  .ages button{flex:1; min-width:70px}
  .ages button.on{outline:3px solid var(--shell)}
//@@CONTENT
/* =====================================================================
   MODULE 44 — GROWING OVER TIME  (Investing block, 5 of 6)
   Vocab: compound growth, long-term.
   L1: Kai and Mika each put $100 into the island fund. Mika takes her
       growth out every year to spend; Kai leaves it in. Decade by decade
       Kai's growth gets BIGGER (+$97, +$190, +$374). Named: compound growth.
   L2: Start-age picker: $100 left until age 45, starting at 15/25/35/45.
       Time is the biggest ingredient. Named: long-term.
   L3: Challenge: a bad year (stay long-term), debt compounds AGAINST you,
       "compounding" scam, money needed soon isn't long-term.
   Honesty: the picture is smoothed. Real investments bounce, can lose,
   and nothing is promised. Numbers follow ~7% a year, never stated.
===================================================================== */
const VOCAB = {
  compound:{term:"compound growth", def:"When the growth your money earns stays in and starts earning growth of its own. Growth on top of growth, so it speeds up the longer you leave it."},
  longterm:{term:"long-term", def:"For many years — think 10, 20, or 30. Long-term money is money you won't need for a long time, so it can ride out bad years and keep growing."}
};

const QUESTIONS = {
  "q441a":{type:"mc", prompt:"What is compound growth?", concept:"compound", opts:[
    {t:"Growth that stays in and earns growth of its own", ok:true, fb:"Right. Growth on top of growth. That's why it speeds up the longer you leave it."},
    {t:"Growth that is the same amount every single year", ok:false, fb:"That's what Mika got by taking her growth out. Compound growth gets BIGGER over time, because the growth starts growing too."},
    {t:"A promise that money will double every year", ok:false, fb:"Nobody can promise that. Compound growth just means growth that stays in earns growth of its own."}]},
  "q441b":{type:"mc", prompt:"Kai and Mika both put $100 in. Why did Kai end with so much more after 30 years?", concept:"compound", opts:[
    {t:"He left his growth in, so it kept growing too", ok:true, fb:"Right. Mika spent her growth each year, so only her first $100 ever grew. Kai's growth piled up and grew on itself."},
    {t:"He picked a luckier fund", ok:false, fb:"They used the same fund. The difference was that Kai left his growth in, and Mika took hers out."},
    {t:"He added a lot more money later", ok:false, fb:"Neither of them added anything. Kai just left his growth in to grow on itself."}]},
  "q441c":{type:"tf", prompt:"True or false: when growth is left in, the later years usually add more money than the early years did.", answer:true, concept:"compound",
    good:"Right. Kai's first ten years added $97. His last ten added $374. Same fund, more money growing.",
    bad:"Look again. Kai's first ten years added $97 and his last ten added $374. The pile was bigger, so the growth was bigger."},
  "q442a":{type:"mc", prompt:"$100 put in at age 15 grew to about $761 by age 45. $100 put in at 35 grew to only about $197. Why?", concept:"longterm", opts:[
    {t:"The first one had 30 years to grow, and the second had only 10", ok:true, fb:"Right. Time is the biggest ingredient. The earlier money gets the most years of growth on growth."},
    {t:"Young people get better funds", ok:false, fb:"Same fund, same $100. The only difference was how many years it had to grow."},
    {t:"Money put in later is worth less", ok:false, fb:"$100 is $100. The early $100 just had 20 more years of growth on growth."}]},
  "q442b":{type:"mc", prompt:"Which of Kai's money is long-term money?", concept:"longterm", opts:[
    {t:"Savings toward a bigger boat in about 20 years", ok:true, fb:"Right. He won't need it for many years, so it can ride out bad years and keep growing."},
    {t:"Money for next week's groceries", ok:false, fb:"He needs that next week. Long-term means many years."},
    {t:"His emergency fund", ok:false, fb:"The emergency fund has to be ready any day. That's the opposite of long-term. It stays in savings."}]},
  "q443a":{type:"mc", prompt:"Kai leaves a credit card balance unpaid for years. What does compound growth do here?", concept:"compound", opts:[
    {t:"It works against him: interest gets charged on the interest, so the debt grows faster and faster", ok:true, fb:"Right. Compound growth is great when you own it and painful when you owe it. Pay costly debt off first."},
    {t:"Nothing. Compound growth only works on investments", ok:false, fb:"It works on debt too. Unpaid interest gets added on, then charged interest itself. The debt snowballs."},
    {t:"It shrinks the debt over time", ok:false, fb:"The opposite. Interest on interest makes an unpaid debt grow faster and faster."}]},
  "q443b":{type:"mc", transfer:true, prompt:"Lena plants one mango tree. Each year its fruit drops seeds, and she lets some grow into new trees, which then drop seeds too. What happens over many years?", concept:"compound", opts:[
    {t:"The grove grows faster and faster, because new trees make more trees", ok:true, fb:"Exactly. Trees, not dollars, but the same idea: growth that stays in makes more growth."},
    {t:"It grows by exactly one tree every year", ok:false, fb:"The new trees drop seeds too, so each year there are more seed-makers. It speeds up."},
    {t:"It stays at one tree", ok:false, fb:"She lets the seeds grow into trees, and those trees make seeds too. The grove keeps speeding up."}]}
};

const CFG = {
  n:44, title:"Growing Over Time", homeSub:"Four short lessons. Growth on top of growth, why starting early matters, and why patience pays.",
  pool:["q441a","q441b","q441c","q442a","q442b","q443a"], transfer:"q443b",
  quest:"You watched Kai's growth speed up when he left it in, saw how much the starting age matters, and learned that compound growth works against you in debt.",
  failKeys:"The keys: compound growth is growth earning its own growth, so it speeds up over time; time is the biggest ingredient, so starting early matters; long-term money is money you won't need for many years; real investments still bounce and nothing is promised; and debt compounds against you.",
  nextFile:null,
  passStory:'<p><strong>You now own:</strong> compound growth and long-term.</p>'+
    '<p>Tavo closes his old notebook. "Thirty years ago I put a little in and mostly left it alone. Storms came. Bad years came. I didn’t panic, and I didn’t touch it."</p>'+
    '<p>He smiles at Kai. "You have something I didn’t have at your age: you already know all this. Time is on your side."</p>'+
    '<p>Rana stands up. "Now let’s see if you can put the whole block together."</p>'+
    '<p class="muted">Module 45: The Investing Challenge. (Coming soon.)</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about compound growth, starting early, or long-term money. Or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 44 (Growing Over Time) of a financial-literacy app, part of the Investing block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, multiply, divide, fraction, buy, sell, pay, price, cost, earn, spend, need, save, goal, percent, bank, deposit, withdraw, balance, savings, interest, grow, fee, scam, budget, borrow, loan, owe, debt, credit card, minimum payment, wage, income, tax, risk, loss, emergency, emergency fund, insurance, inflation, buying power, invest, return, stock, profit, diversify, investment fund. "+
  "From THIS module: compound growth (growth that stays in and earns growth of its own, so it speeds up the longer you leave it) and long-term (for many years, like 10, 20, or 30; long-term money is money you won't need for a long time). "+
  "Key points: leaving growth in beats taking it out; time is the biggest ingredient, so starting early matters more than starting big; the pictures in this module are smoothed, and real investments bounce up and down and can lose money, with nothing promised; long-term money can ride out bad years; the emergency fund and money needed soon are NOT long-term; compound growth also works against you on unpaid debt, because interest gets charged on interest. "+
  "TEACHING STYLE: concepts over calculations. Never state a growth rate or percentage, never predict returns, never recommend a real fund, company, app, or coin. "+
  "STRICT RULES: never use these words (later modules): retirement, dividend, broker, portfolio, bond. If the learner uses one, answer briefly in plain words and say it is coming later or is a grown-up detail. "+
  "Story context: Kai and Mika each put $100 into the island investment fund. Mika took her growth out every year to spend (about $7 a year, $210 over 30 years) and kept $100. Kai left his in: about $197 after 10 years, $387 after 20, $761 after 30; his decades added $97, then $190, then $374. Then Kai compared starting at 15, 25, 35, or 45 with $100 left until 45: about $761, $387, $197, or $100. Tavo, who has fished for thirty years, started small long ago and left it alone through storms. "+
  "Never repeat a failed explanation: switch examples (a mango grove where new trees make seeds, a rumor spreading from friend to friend, a snowball rolling downhill). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple 'leave it in or take it out?' question and wait.";
//@@LESSONS
/* =====================================================================
   SIMULATORS — Kai vs. Mika by decade, and the start-age picker.
   Values follow roughly 7% a year; the rate is never shown.
===================================================================== */
const DEC=[
  {y:"Today", kai:100, mikaSpent:0},
  {y:"10 years later", kai:197, mikaSpent:70},
  {y:"20 years later", kai:387, mikaSpent:140},
  {y:"30 years later", kai:761, mikaSpent:210}
];
function race(k){
  const d=DEC[k], max=761, w=v=>Math.max(3, v/max*100);
  let gains=''; for(let i=1;i<=k;i++){ gains+='<span>Decade '+i+': +$'+(DEC[i].kai-DEC[i-1].kai)+'</span>'; }
  return '<div class="week">'+d.y+'</div><div class="race">'+
    '<div class="row k"><div class="nm"><span>🧒 Kai · leaves it in</span><span>$'+d.kai+'</span></div><div class="bar"><div style="width:'+w(d.kai)+'%"></div></div>'+
      (k?'<div class="decades">'+gains+'</div>':'')+'</div>'+
    '<div class="row m"><div class="nm"><span>👧 Mika · takes it out</span><span>$100</span></div><div class="bar"><div style="width:'+w(100)+'%"></div></div>'+
      '<div class="sub">'+(k?'Spent her growth along the way: $'+d.mikaSpent:'Will take her growth out every year to spend')+'</div></div></div>';
}
const AGES=[{a:15,v:761,yrs:30},{a:25,v:387,yrs:20},{a:35,v:197,yrs:10},{a:45,v:100,yrs:0}];
function ageView(i){
  const g=AGES[i], w=Math.max(3,g.v/761*100);
  return '<div class="race"><div class="row k"><div class="nm"><span>$100 put in at age '+g.a+'</span><span>$'+g.v+'</span></div>'+
    '<div class="bar"><div style="width:'+w+'%"></div></div><div class="sub">'+(g.yrs?g.yrs+' years of growth by age 45':'No time to grow by age 45')+'</div></div></div>';
}

/* =====================================================================
   LESSON 1 — Leave It In
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · Leave it in</div>
    <div class="recap"><strong>Kai’s story so far:</strong> Kai owns pieces of businesses and a slice of the island investment fund, spread out so one storm can’t sink it all. Tavo promised to show him what thirty years can do.</div>
    <div class="card"><p>Kai and Mika each put <strong>$100</strong> into the island fund on the same day.</p>
    <p>"Every year my money grows a bit," Mika says, "and I’m taking that bit out to spend. The first year that’s about $7. Fun money!"</p>
    <p>"I’ll leave mine in," says Kai.</p>
    <p>Tavo grins. "Let’s skip ahead thirty years and watch."</p>
    <p class="muted">This is a smoothed picture. Real investments bounce up and down along the way, and nothing is promised.</p></div>
    <button onclick="next()">Start the clock</button>`),
  ()=>{
    let k=0;
    function draw(){
      const last=k>=DEC.length-1;
      show(`<div class="kicker">Lesson 1 · Kai vs. Mika</div>
        ${race(k)}
        <div id="cont">${last
          ? '<div class="feedback good">Kai: $761. Mika: still $100, plus $210 she spent along the way. And look at Kai’s decades: +$97, then +$190, then +$374. His growth kept getting bigger.</div><button onclick="next()">Why?</button>'
          : '<button data-bot="1" onclick="window._w()">⏩ Skip 10 years</button>'}</div>`);
      window._w=()=>{ k++; draw(); };
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 1 · A new word</div>
    <div class="card"><p>Mika’s growth left every year, so only her first $100 ever grew.</p>
    <p>Kai’s growth stayed in. The next year, <em>that</em> growth grew too. Then the growth on the growth grew. The pile kept getting bigger, so each year’s growth got bigger.</p>
    <p>Growth that stays in and earns growth of its own is called <strong>compound growth</strong>.</p></div>
    <button onclick="earnWord('compound');next()">New word: compound growth</button>`),
  ()=>renderMC("q441a", next),
  ()=>renderMC("q441b", next),
  ()=>renderTF("q441c", next),
];

/* =====================================================================
   LESSON 2 — Starting Early
===================================================================== */
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · Starting early</div>
    <div class="recap"><strong>So far:</strong> compound growth is growth on top of growth. It speeds up over time.</div>
    <div class="card"><p>"So what matters most?" Kai asks. "Putting in a lot?"</p>
    <p>"Putting in <em>early</em>," Tavo says. "Try it. Same $100 every time. Pick when you put it in, and we’ll see what it’s worth when you’re 45."</p></div>
    <button onclick="next()">Try it</button>`),
  ()=>{
    const seen=new Set([0]); let cur=0;
    function draw(){
      const allSeen=seen.size>=AGES.length;
      show(`<div class="kicker">Lesson 2 · Pick a starting age</div>
        <div class="ages">${AGES.map((g,i)=>'<button class="btn-ghost'+(i===cur?' on':'')+'" data-bot="1" data-i="'+i+'">Age '+g.a+'</button>').join('')}</div>
        ${ageView(cur)}
        <p class="muted" style="text-align:center">${allSeen?'You tried every age.':'Try all four ages ('+seen.size+' of 4).'}</p>
        <div id="cont">${allSeen
          ? '<div class="feedback good">Starting at 15: about $761. At 35: about $197. Same $100. The only difference was time.</div><button onclick="next()">Continue</button>'
          : ''}</div>`);
      document.querySelectorAll(".ages button").forEach(b=>{ b.onclick=()=>{ cur=+b.dataset.i; seen.add(cur); draw(); }; });
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 2 · Another new word</div>
    <div class="card"><p>Compound growth needs time, lots of it. Money you won’t need for many years, like 10, 20, or 30, is <strong>long-term</strong> money.</p>
    <p>Long-term money can ride out a bad year, because you aren’t counting on it next week. That’s exactly the money that’s ready to invest (Module 41).</p>
    <p>Not long-term: your emergency fund, and anything you need soon.</p></div>
    <button onclick="earnWord('longterm');next()">New word: long-term</button>`),
  ()=>renderMC("q442a", next),
  ()=>renderMC("q442b", next),
];

/* =====================================================================
   LESSON 3 — Patience Test (challenge)
===================================================================== */
const MOVES=[
  {wk:"A bad year", story:"Five years in, a rough year hits the whole island. Kai’s fund drops from $140 to $115. He won’t need this money for 25 more years.", opts:[
    {t:"Leave it in. It’s long-term money, and bad years are part of the ride", ok:true, fb:"Right. Taking it out locks in the drop and stops the growth on growth. Nothing is promised, but panic isn’t a plan."},
    {t:"Take it all out before it drops more", ok:false, fb:"Then the drop is locked in and the compounding stops. For money he won’t need for 25 years, a bad year isn’t a reason to quit."},
    {t:"Borrow money to put in more", ok:false, fb:"Borrowing to invest means owing money even if it drops further. That’s a big extra risk."}]},
  {wk:"The card balance", story:"Kai has a $30 credit card balance he’s been paying only the minimum on. He also has $30 he could invest.", opts:[
    {t:"Pay off the card. Unpaid debt compounds against him", ok:true, fb:"Right. Interest on interest makes the card grow. Clearing it is a sure win; investing is only a hope."},
    {t:"Invest it, because compound growth will beat the card", ok:false, fb:"The card’s growth against him is certain. The investment’s growth is not. Pay costly debt first."},
    {t:"Keep paying only the minimum forever", ok:false, fb:"That’s how the card’s compounding wins (Module 29). Pay it off."}]},
  {wk:"A magic offer", story:"A stranger: \"My super-compounding plan turns $50 into $5,000 in one year! Guaranteed! Sign today!\"", opts:[
    {t:"Say no. Real compound growth is slow and never guaranteed. This is a scam", ok:true, fb:"Right. Compounding takes years, not one. “Guaranteed” and “today” are the scam signs again."},
    {t:"Sign, because compound growth is powerful", ok:false, fb:"It’s powerful over decades, not overnight, and never guaranteed. This is a scam."},
    {t:"Give him $10 to test it", ok:false, fb:"Any money to this stranger is likely gone. Say no."}]},
  {wk:"Next month’s rent", story:"Kai’s cousin wants to put next month’s rent money into the fund \"to let compound growth help.\"", opts:[
    {t:"Not a good idea. That money isn’t long-term, and the fund could be down next month", ok:true, fb:"Right. Compound growth needs years. Money needed next month should stay safe."},
    {t:"Great idea, because every month of growth counts", ok:false, fb:"One month gives almost no growth, and the fund could be DOWN when the rent is due. Keep it safe."},
    {t:"Fine, but only half", ok:false, fb:"Even half could be down when rent is due. Money needed soon isn’t long-term."}]}
];
let iStars=0;
const L3=[
  ()=>{ iStars=0;
    show(`<div class="kicker">Lesson 3 · The patience test</div>
    <div class="recap"><strong>So far:</strong> compound growth needs time; long-term money can ride out bad years.</div>
    <div class="card"><p>"Knowing this is easy," Tavo says. "Sticking to it is hard. Let’s test your patience."</p>
    <p>Four moments. Get each right the first time to earn a ⭐.</p></div>
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
      <li>✅ Long-term money can ride out a bad year.</li>
      <li>✅ Debt compounds too, against you. Pay it off first.</li>
      <li>✅ Real compounding is slow. “Overnight” is a scam.</li>
      <li>✅ Money needed soon isn’t long-term.</li>
    </ul></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q443a", next),
];
const META=[
  {title:"Leave It In", sub:"Kai vs. Mika over thirty years", emoji:"🌱"},
  {title:"Starting Early", sub:"Same $100, different starting ages", emoji:"⏳"},
  {title:"The Patience Test", sub:"Four moments that test your patience", emoji:"🧘"},
];
