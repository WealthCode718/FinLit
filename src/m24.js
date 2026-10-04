//@@META
title=The Banking Challenge
file=module-24-banking-challenge.html
placeholder=Ask about budgets and cushions…
//@@CSS
  .jar{display:flex; align-items:center; gap:10px; background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:12px 14px; margin-bottom:10px}
  .jar .jl{flex:1}
  .jar .jl strong{display:block; font-size:16px}
  .jar .jl span{font-size:13px; color:var(--ink-soft)}
  .jar .jv{font-family:"Fraunces",Georgia,serif; font-weight:700; font-size:24px; min-width:52px; text-align:center}
  .jar button{width:44px; height:44px; padding:0; border-radius:10px; font-size:22px; line-height:1}
  .jar button.minus{background:#fff; color:var(--ink); border:2px solid var(--ink)}
  .left{text-align:center; font-weight:700; margin:4px 0 12px; font-size:16px}
  .left.zero{color:var(--good)}
  .week{font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:#fff; background:var(--shell); display:inline-block; border-radius:6px; padding:2px 10px; margin-bottom:8px; font-weight:700}
  .stars{font-size:28px; letter-spacing:4px; text-align:center; margin:6px 0}
  .recaplist{list-style:none}
  .recaplist li{padding:8px 0; border-bottom:1px solid #eef2f0}
  .recaplist li:last-child{border-bottom:none}
//@@CONTENT
/* =====================================================================
   CONTENT — Module 24: The Banking Challenge (season finale)
   Vocab: budget, cushion.
   "cushion" follows the show-then-name pattern: Rana's trick of keeping a
   few dollars in checking she pretends are not there was SHOWN in M22 L3
   and is NAMED here.
   The budget builder uses small whole-number addition — the math IS the
   concept (every dollar gets a job), so arithmetic stays, but a live
   "left to plan" counter means the learner never has to hold a sum in
   their head. The month challenge tests choices, not calculations.
===================================================================== */
const VOCAB = {
  budget:{term:"budget", def:"A plan for your money BEFORE you spend it. Every dollar gets a job: needs first, then savings for your goal, then wants with what is left."},
  cushion:{term:"cushion", def:"A little money you keep in checking and plan never to spend. If a surprise comes, or you forget to look, the cushion catches you before you go below zero."}
};

const QUESTIONS = {
  "q241a":{type:"mc", prompt:"What is a budget?", concept:"budget", opts:[
    {t:"A plan for your money before you spend it", ok:true, fb:"Right. The key word is BEFORE. A budget decides each dollar’s job while the money is still all there."},
    {t:"A list of what you already spent", ok:false, fb:"That is looking back — like reading the feed. A budget looks ahead: it plans the money before it moves."},
    {t:"A special kind of bank account", ok:false, fb:"A budget is not an account. It is a plan — and it works with the checking and savings accounts you already have."}]},
  "q241b":{type:"mc", prompt:"Kai makes his budget. What order should his dollars get their jobs?", concept:"budget", opts:[
    {t:"Needs, then savings for the goal, then wants", ok:true, fb:"Right — the same order from Modules 10 and 11. Needs keep you going. Savings gets paid before wants can gobble it up."},
    {t:"Wants first, then needs, then savings if anything is left", ok:false, fb:"If wants go first, the needs might not get covered — and savings almost never happens. Needs come first."},
    {t:"It does not matter, as long as he writes it down", ok:false, fb:"The order matters a lot. Needs first, then savings, then wants — so the important jobs are never left without money."}]},
  "q241c":{type:"tf", prompt:"True or false: a budget is only useful for people with lots of money.", answer:false, concept:"budget",
    good:"Right. A budget matters MOST when money is small — every dollar has to count.",
    bad:"The opposite! When there is only a little money, planning each dollar’s job matters even more."},
  "q242a":{type:"mc", prompt:"What is a cushion?", concept:"cushion", opts:[
    {t:"Money left in checking, never to spend, to catch surprises", ok:true, fb:"Right. It sits there quietly — until the day you need it, and then it keeps you above zero."},
    {t:"Money set aside for fun things, so you do not spend your savings on them", ok:false, fb:"That is your wants money. A cushion is money you plan NOT to spend — it is there to catch you."},
    {t:"The extra the bank adds to savings", ok:false, fb:"That is interest. A cushion is money YOU leave in checking on purpose, as a safety catch."}]},
  "q242b":{type:"mc", prompt:"Why does Kai keep his cushion in CHECKING, not savings?", concept:"cushion", opts:[
    {t:"Payments come out of checking, so the catch goes there", ok:true, fb:"Right. If something goes wrong with a payment, it happens in checking. The cushion sits right where it can catch it."},
    {t:"Because savings is locked, so he could not get to the money in time", ok:false, fb:"Savings is not locked — Kai can move his money. The cushion lives in checking because that is where payments happen."},
    {t:"It does not matter where it is", ok:false, fb:"It matters! A cushion in savings cannot catch a payment that comes out of checking."}]},
  "q242c":{type:"tf", prompt:"True or false: a cushion is money you plan to spend on wants.", answer:false, concept:"cushion",
    good:"Right. A cushion is the money you plan NOT to spend. Its only job is to catch you.",
    bad:"Not quite. Wants money is for spending. A cushion is the opposite: money you plan never to spend, so it can catch a surprise."},
  "q243a":{type:"mc", prompt:"At the end of Kai’s month, his savings was a little bigger than everything he had put in. Why?", concept:"budget", opts:[
    {t:"Interest — money in savings can grow on its own", ok:true, fb:"Right. His plan put money in savings early, and the bank added a little on top while it sat there."},
    {t:"The cushion moved into savings by itself", ok:false, fb:"The cushion stays in checking. The extra in savings came from interest."},
    {t:"A mistake — savings should always match exactly what you put in", ok:false, fb:"No mistake! That little extra is interest, doing exactly what Module 21 said it would."}]},
  "q243b":{type:"mc", transfer:true, prompt:"Before fishing season, Tavo decides: some fish will feed his family, some he will sell for his boat goal, and a few he can trade for fun. What is Tavo doing?", concept:"budget", opts:[
    {t:"Making a budget — giving each part a job ahead of time", ok:true, fb:"Exactly. No money in sight yet — just fish — but the idea is the same: plan every part’s job before it gets used up."},
    {t:"Nothing about money — it is only fish", ok:false, fb:"The things changed, not the idea. Needs first, then the goal, then fun — decided ahead of time. That is a budget."},
    {t:"Wasting time — he should decide when he catches them and sees how many he has", ok:false, fb:"Deciding in the moment is how the fun part eats the goal part. Planning first is the whole point of a budget."}]}
};

const CFG = {
  n:24, title:"The Banking Challenge", homeSub:"Four short lessons. Make a plan, add a cushion, then run one whole month.",
  pool:["q241a","q241b","q241c","q242a","q242b","q242c","q243a"], transfer:"q243b",
  quest:"You built a budget, added a cushion, and ran Kai’s month without a single overdraft.",
  failKeys:"The keys: a budget plans money BEFORE it is spent (needs, then savings, then wants), a cushion sits in checking so surprises cannot push you below zero, and savings can grow with interest.",
  badge:" · Banking season complete 🏦",
  nextFile:"module-25-borrowing.html",
  passStory:'<p><strong>You now own:</strong> budget and cushion — and the whole first Banking season.</p>'+
    '<p>Kai started with a tin under a floorboard. Now he runs his own month: a plan, two accounts, a cushion, a phone that tells him everything, and a secret no trickster can get.</p>'+
    '<p>But at the market the next week, Kai spots something new pinned to the trading post board — a paper with big letters across the top: <strong>"IF YOU BORROW $10 TODAY…"</strong></p>'+
    '<p>"Borrow?" Kai asks. "Like… someone gives ME money? And then what?"</p>'+
    '<p class="muted">Module 25: Borrowing — the first step into Credit.</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about budgets, cushions, or Kai’s month — or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 24 (The Banking Challenge) of a financial-literacy app — the finale of the first Banking season. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, buy, sell, pay, earn, spend, need, save, goal, percent, bank, deposit, withdraw, balance, checking, savings, transaction, notification, interest, grow, fee, overdraft, PIN, scam. "+
  "From THIS module: budget (a plan for your money BEFORE you spend it; every dollar gets a job: needs first, then savings for the goal, then wants with what is left) and cushion (a little money kept in checking that you plan never to spend, so a surprise or a forgotten look cannot push you below zero). "+
  "TEACHING STYLE: the budget uses small whole-dollar adding, which is fine. Never compute interest, percentages, or rates. Keep most answers about WHY and WHETHER. "+
  "STRICT RULES: never use these words (later modules): borrow, loan, lend, credit, debt, owe, APR, rate, invest, stock, tax, insurance, emergency fund. If the learner uses one, answer briefly in plain words and say it is coming later. "+
  "Story context: Kai earned $20 and built a budget (needs $8, the rest split between savings and wants). Rana named her trick from Module 22 — the cushion. Then Kai ran a whole month: payday into the plan, a kite from wants money, a scam message deleted, a surprise rope caught by the cushion, and interest nudging his savings up. No fees, no overdraft. "+
  "Never repeat a failed explanation — switch analogies (giving each fish a job before the season, a seatbelt, jars on a shelf). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple question and wait.";
//@@LESSONS
/* =====================================================================
   SIMULATOR — M24 brings back both accounts (M19 duo card) and adds a
   budget builder. The month challenge applies only the correct choice
   to the balances (a wrong pick explains itself and lets you choose
   again), so the numbers stay predictable — the same design as the
   M22 pay-or-wait drill. First-try picks earn stars.
===================================================================== */
function money(n){ return (n<0?"−":"") + "$" + Math.abs(n).toFixed(2); }
function duoCard(){
  return '<div class="duo">'+
    '<div class="acct"><div class="lbl">Checking</div><div class="bal">'+money(S.acct.checking)+'</div><div class="who">spend soon</div></div>'+
    '<div class="acct save"><div class="lbl">Savings</div><div class="bal">'+money(S.acct.savings)+'</div><div class="who">for the goal</div></div>'+
    '</div>';
}

/* ---------- budget builder ---------- */
const PAY=20, NEEDS_MIN=8;
let BUD={needs:0, save:0, wants:0};
function budLeft(){ return PAY-BUD.needs-BUD.save-BUD.wants; }
function bump(k,d){
  if(d>0 && budLeft()<=0) return;
  if(d<0 && BUD[k]<=0) return;
  BUD[k]+=d; drawBudget();
}
function jar(k,label,hint){
  return '<div class="jar"><div class="jl"><strong>'+label+'</strong><span>'+hint+'</span></div>'+
    '<button class="minus" aria-label="less '+label+'" onclick="bump(\''+k+'\',-1)">−</button>'+
    '<div class="jv">$'+BUD[k]+'</div>'+
    '<button aria-label="more '+label+'" onclick="bump(\''+k+'\',1)">+</button></div>';
}
function drawBudget(){
  const left=budLeft();
  show(`<div class="kicker">Lesson 1 · Build Kai’s budget</div>
    <div class="card"><p>Kai earned <strong>$20</strong> this week. His needs (food and rope) cost <strong>$8</strong>. He wants savings for his sail AND a little fun. Give every dollar a job.</p></div>
    ${jar("needs","Needs","food and rope · at least $8")}
    ${jar("save","Savings","for the sail goal")}
    ${jar("wants","Wants","fun, with what is left")}
    <div class="left${left===0?' zero':''}">${left===0?'Every dollar has a job ✓':'Left to plan: $'+left}</div>
    <div id="fb"></div>
    <button id="bLock" onclick="lockBudget()">Lock in the plan</button>
    <div id="cont"></div>`);
}
function lockBudget(){
  let msg=null;
  if(budLeft()>0) msg="There is still $"+budLeft()+" without a job. A budget plans EVERY dollar.";
  else if(BUD.needs<NEEDS_MIN) msg="Needs come first! Food and rope cost $8, and the Needs jar only has $"+BUD.needs+".";
  else if(BUD.save<1) msg="The sail goal gets nothing this week? Savings comes right after needs — give it at least a little.";
  const fb=document.getElementById("fb");
  if(msg){ fb.innerHTML='<div class="feedback bad">'+msg+'</div>'; revealFB(); return; }
  fb.innerHTML='<div class="feedback good">A real budget. Needs covered with $'+BUD.needs+', $'+BUD.save+' for the sail, and $'+BUD.wants+' to enjoy — all decided before a single dollar moved.</div>';
  document.getElementById("bLock").disabled=true;
  document.querySelectorAll(".jar button").forEach(b=>b.disabled=true);
  document.getElementById("cont").innerHTML='<button onclick="addXP(4);next()">Continue</button>';
  revealFB();
}

/* =====================================================================
   LESSON 1 — A Plan Before the Money Moves
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · A plan before the money moves</div>
    <div class="recap"><strong>Kai’s story so far:</strong> Bank, balance, checking and savings, his phone, interest, fees, and a PIN nobody can get. Now Rana wants to see him run it all.</div>
    <div class="scene">🗓️💵<div class="cap">"Before your money arrives," Rana says, "decide what every dollar is going to do."</div></div>
    <button onclick="next()">Why before?</button>`),
  ()=>show(`<div class="kicker">Lesson 1</div>
    <div class="card"><p>Money without a plan has a way of disappearing — a sweet cake here, a trinket there — until the needs and the goal are left with nothing.</p>
    <p>A <strong>budget</strong> fixes that. It is a plan for your money <strong>before</strong> you spend it. Every dollar gets a job, in this order:</p>
    <ol class="steps" style="padding-left:20px">
      <li><strong>Needs first</strong> — the things you cannot go without (Module 10).</li>
      <li><strong>Savings for the goal</strong> — paid before wants can eat it (Module 11).</li>
      <li><strong>Wants</strong> — with what is left, guilt-free.</li>
    </ol></div>
    <button onclick="earnWord('budget');next()">New word: budget</button>`),
  ()=>{ BUD={needs:0, save:0, wants:0}; drawBudget(); },
  ()=>renderMC("q241a", next),
  ()=>renderMC("q241b", next),
  ()=>renderTF("q241c", next),
];

/* =====================================================================
   LESSON 2 — The Cushion
===================================================================== */
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · Rana’s trick, named</div>
    <div class="recap"><strong>So far:</strong> a budget gives every dollar a job before it moves.</div>
    <div class="card"><p>Remember Rana’s trick from Module 22? "I keep a few dollars in checking that I pretend are not there."</p>
    <p>That money has a name. It is a <strong>cushion</strong> — a little money you keep in checking and plan never to spend.</p>
    <p>It is not for wants. It is not for the goal. Its only job is to <strong>catch you</strong>.</p></div>
    <button onclick="earnWord('cushion');next()">New word: cushion</button>`),
  ()=>show(`<div class="kicker">Lesson 2 · Why it matters</div>
    <div class="card"><p>Surprise: Tavo’s goat chews through Kai’s rope. A new one costs $4, today. Payday is next week.</p></div>
    <div class="compare">
      <div class="box"><div class="n">No cushion — $1 left</div><div class="v" style="color:var(--bad)">below zero</div><div class="n" style="margin-top:4px">+ an overdraft fee</div></div>
      <div class="box win"><div class="n">$5 cushion — $6 left</div><div class="v">$2 left</div><div class="n" style="margin-top:4px">no fee, no stress</div></div>
    </div>
    <div class="card"><p>Same week. Same rope. The only difference is a few dollars Kai decided ahead of time not to touch.</p>
    <p>And it lives in <strong>checking</strong>, because that is where payments come from — right where the catch is needed.</p></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q242a", next),
  ()=>renderMC("q242b", next),
  ()=>renderTF("q242c", next),
];

/* =====================================================================
   LESSON 3 — One Whole Month (challenge)
===================================================================== */
const MONTH=[
  {wk:"Week 1 · Payday", story:"Kai’s $20 from the market lands in checking. His budget says $8 needs, $6 savings, $6 wants. He keeps a $5 cushion in checking.",
   pre:()=>{ S.acct={checking:5, savings:15}; }, opts:[
    {t:"Move the $6 savings part to savings right away", ok:true, fb:"Right. Savings gets paid early, before wants have a chance at it. The plan is working.",
     apply:()=>{ S.acct.checking=5+20-6; S.acct.savings=21; }},
    {t:"Leave all $20 in checking and decide later", ok:false, fb:"“Later” is how money without a job gets spent. The budget already decided — move the savings part now."},
    {t:"Spend $15 on a fancy hat to celebrate", ok:false, fb:"That would wipe out the needs AND the goal in one go. The budget gave wants $6, not $15."}]},
  {wk:"Week 2 · Market day", story:"Kai pays for food and rope ($8, his needs). Then he spots a kite for $5. His wants money for the month is $6.",
   pre:()=>{ S.acct.checking=19-8; }, opts:[
    {t:"Buy it — the kite fits inside his wants money", ok:true, fb:"Right. This is exactly what wants money is for. A budget is not about never having fun — it is about fun that fits.",
     apply:()=>{ S.acct.checking=6; }},
    {t:"Move $5 back out of savings to pay for it", ok:false, fb:"No need to touch the goal! The wants money already covers the kite. Savings stays for the sail."},
    {t:"Skip it — budgets mean no fun", ok:false, fb:"A budget plans for wants on purpose. The kite fits his wants money, so he can enjoy it."}]},
  {wk:"Week 3 · A message", story:"Kai’s phone buzzes: “You WON a free boat!! Tap this link and enter your PIN to claim it. Offer ends in 1 hour!”",
   pre:()=>{}, opts:[
    {t:"Delete it and tell Rana", ok:true, fb:"Right. Prize he never entered, asks for his PIN, rushes him. Three warning signs. A scam, every time."},
    {t:"Tap the link just to see", ok:false, fb:"The link could lead straight to the trickster. Too good to be true, a PIN request, a rush — that is a scam."},
    {t:"Reply and ask if it is real", ok:false, fb:"Replying talks to the trickster. There is nothing to check — the real bank never asks for your PIN."}]},
  {wk:"Week 4 · Surprise!", story:"The goat strikes again — Kai needs a new rope, $4, today. Payday is next week.",
   pre:()=>{}, opts:[
    {t:"Look at the balance first: $6 covers $4 — pay", ok:true, fb:"Right. One look, enough money, no overdraft. And notice: without his $5 cushion, he would have had only $1. The cushion just caught him.",
     apply:()=>{ S.acct.checking=2; }},
    {t:"Take it out of savings", ok:false, fb:"Checking already covers it — that is what the cushion is for. The sail money can stay put."},
    {t:"Pay without looking — it will probably be fine", ok:false, fb:"“Probably” is how overdrafts happen. The rule from Module 22: look first, every time."}]},
  {wk:"End of month", story:"A notification arrives: <em>Savings grew: $21.00 → $21.10.</em> Kai did not deposit anything this week.",
   pre:()=>{}, opts:[
    {t:"Interest — his savings grew on its own", ok:true, fb:"Right. The money he saved early did not just sit there — it grew a little.",
     apply:()=>{ S.acct.savings=21.10; }},
    {t:"The cushion moved over by itself", ok:false, fb:"The cushion never moves — it is still sitting in checking. The extra in savings is interest."},
    {t:"A mistake — he should report it", ok:false, fb:"No mistake! A little extra with no deposit is interest, exactly as Module 21 promised."}]}
];
let monthStars=0;
const L3=[
  ()=>{ S.acct={checking:5, savings:15}; monthStars=0; saveState();
    show(`<div class="kicker">Lesson 3 · One whole month</div>
    <div class="recap"><strong>So far:</strong> a budget plans every dollar, and a cushion catches surprises.</div>
    ${duoCard()}
    <div class="card"><p>Here is Kai at the start of the month: a $5 cushion in checking and $15 saved toward his sail.</p>
    <p>Five moments are coming. Pick what Kai should do. Get it right the first time to earn a ⭐.</p></div>
    <button onclick="next()">Start the month</button>`); },
  ()=>{
    let i=0;
    function draw(){
      if(i>=MONTH.length){ addXP(6); saveState(); next(); return; }
      const w=MONTH[i]; w.pre();
      const shuffled=w.opts.map((o,k)=>({o,k})).sort(()=>Math.random()-.5);
      show(`<div class="week">${w.wk}</div>
        ${duoCard()}
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
            done=true; if(first){ monthStars++; addXP(1); }
            if(o.apply) o.apply(); saveState();
            document.querySelector(".duo").outerHTML=duoCard();
            document.querySelectorAll("#opts .opt").forEach(b=>b.disabled=true);
            document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<MONTH.length-1?"Next week":"See the month")+'</button>';
            window._n=()=>{ i++; draw(); };
            revealFB();
          } else { first=false; btn.disabled=true; }
        };
      });
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 3 · Kai’s month</div>
    ${duoCard()}
    <div class="stars">${"⭐".repeat(monthStars)}${"☆".repeat(MONTH.length-monthStars)}</div>
    <p class="muted" style="text-align:center">${monthStars} of ${MONTH.length} on the first try</p>
    <div class="card"><ul class="recaplist">
      <li>✅ <strong>Zero overdrafts, zero fees.</strong> He looked before every payment.</li>
      <li>✅ <strong>Savings: $15 → $21.10.</strong> Paid early, then grew with interest.</li>
      <li>✅ <strong>The cushion caught one surprise.</strong> And it is still standing guard.</li>
      <li>✅ <strong>One scam, deleted.</strong> His PIN never left his head.</li>
    </ul></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q243a", next),
];
const META=[
  {title:"A Plan Before the Money Moves", sub:"Build Kai’s first budget", emoji:"🗓️"},
  {title:"The Cushion", sub:"Rana’s trick finally gets a name", emoji:"🛋️"},
  {title:"One Whole Month", sub:"Five moments. Every choice is yours.", emoji:"🏁"},
];
