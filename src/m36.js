//@@META
title=The Emergency Fund
file=module-36-emergency-fund.html
placeholder=Ask about emergencies and emergency funds…
//@@CSS
  .fund{background:linear-gradient(135deg,#1b5540 0%,#0e3a2c 100%); color:#fff; border-radius:16px; padding:18px 20px; margin-bottom:12px}
  .fund .lbl{font-size:11px; letter-spacing:.14em; text-transform:uppercase; opacity:.8}
  .fund .v{font-family:"Fraunces",Georgia,serif; font-weight:700; font-size:40px; margin:2px 0}
  .fund .bar{height:12px; border-radius:999px; background:rgba(255,255,255,.18); overflow:hidden; margin-top:8px}
  .fund .bar div{height:100%; background:var(--gold); border-radius:999px; transition:width .5s ease}
  .fund .who{font-size:13px; opacity:.85; margin-top:6px}
  .vs{width:100%; border-collapse:collapse; background:#fff; border-radius:12px; overflow:hidden; margin-bottom:12px; font-size:14px}
  .vs th,.vs td{padding:9px 10px; border-bottom:1px solid #eef2f0; text-align:left; vertical-align:top}
  .vs th{background:var(--sand); font-size:12px; letter-spacing:.06em; text-transform:uppercase; color:var(--ink-soft)}
  .sortbar .yes{background:var(--bad)}
  .sortbar .no{background:var(--ink)}
  .compare .box .d{font-size:13px; color:var(--ink-soft); margin-top:6px}
//@@CONTENT
/* =====================================================================
   CONTENT — Module 36: The Emergency Fund
   Vocab: emergency, emergency fund.
   This is "keep the risk" done properly: money set aside so a surprise
   loss does not become debt. It is explicitly contrasted with M24's
   cushion (a few dollars in checking to catch a forgotten look) and
   with goal savings (money with a planned job).
   No "3–6 months of expenses" rule — that is adult-specific and
   numeric; the lesson says "enough to cover a surprise or two, and
   growing". The builder is felt, not computed.
===================================================================== */
const VOCAB = {
  emergency:{term:"emergency", def:"A surprise that needs money right away and cannot wait — like a broken boat, getting sick, or a storm-damaged roof. Things you knew were coming are not emergencies."},
  efund:{term:"emergency fund", def:"Money saved ONLY for emergencies, kept in savings and separate from your goal money. It turns a surprise loss into an inconvenience instead of debt."}
};

const QUESTIONS = {
  "q361a":{type:"mc", prompt:"What is an emergency?", concept:"emergency", opts:[
    {t:"A surprise that needs money right away and cannot wait", ok:true, fb:"Right. Surprise + can’t wait. Tavo’s smashed boat was both."},
    {t:"Anything you really want, like a kite you have been dreaming about", ok:false, fb:"Wanting something badly does not make it an emergency. An emergency is a surprise that cannot wait."},
    {t:"A bill you knew was coming", ok:false, fb:"If you knew it was coming, it belongs in your budget. Emergencies are surprises."}]},
  "q361b":{type:"mc", prompt:"How is an emergency fund different from Kai’s sail savings?", concept:"efund", opts:[
    {t:"It is ONLY for emergencies — goal money has its own planned job", ok:true, fb:"Right. Two jobs, two separate piles. Mixing them means an emergency eats the goal, or the goal eats the safety net."},
    {t:"There is no difference", ok:false, fb:"They have different jobs. Goal money is for the sail. Emergency money waits for surprises."},
    {t:"An emergency fund is money you borrow", ok:false, fb:"Nothing borrowed — it is your own saved money. That is the whole point: no debt when trouble hits."}]},
  "q361c":{type:"tf", prompt:"True or false: an emergency fund and a cushion are the same thing.", answer:false, concept:"efund",
    good:"Right. A cushion is a few dollars in checking to catch a forgotten look. An emergency fund is bigger, kept in savings, for real surprises.",
    bad:"They are different. A cushion is a few dollars in checking so you do not overdraft. An emergency fund is bigger, in savings, for surprise losses."},
  "q362a":{type:"mc", prompt:"Which of these is an emergency?", concept:"emergency", opts:[
    {t:"The roof starts leaking during a storm", ok:true, fb:"Right. A surprise, and it cannot wait. This is exactly what the fund is for."},
    {t:"Kites are on sale this week", ok:false, fb:"A sale is not an emergency — it is a want. The fund stays put."},
    {t:"A friend’s birthday you knew about for months", ok:false, fb:"Known for months = not a surprise. That belongs in the budget."}]},
  "q362b":{type:"tf", prompt:"True or false: if you use your emergency fund, you should build it back up afterwards.", answer:true, concept:"efund",
    good:"Right. The next surprise is coming someday. Refill it a little each paycheck.",
    bad:"You should! The next surprise will come someday, so refill it a little at a time."},
  "q363a":{type:"mc", prompt:"Tavo and Nilo both get a $40 surprise repair. Tavo has an emergency fund. Nilo does not. What happens?", concept:"efund", opts:[
    {t:"Tavo pays and moves on. Nilo has to borrow — and his debt grows", ok:true, fb:"Right. Same surprise, very different month. The fund turned Tavo’s emergency into an inconvenience."},
    {t:"They both end up exactly the same", ok:false, fb:"Not at all. Without a fund, Nilo has to borrow — and borrowing costs extra."},
    {t:"Nilo is better off, because his money was free to spend on other things", ok:false, fb:"Nilo had nothing set aside, so he had to borrow. Borrowing costs more than the repair."}]},
  "q363c":{type:"mc", prompt:"Where is the best place to keep an emergency fund?", concept:"efund", opts:[
    {t:"In savings — safe, apart from spending money, and it can grow", ok:true, fb:"Right. Easy to reach in a real emergency, but not sitting in checking tempting you."},
    {t:"In a tin under the floorboard at home, so it is close by when needed", ok:false, fb:"Kai learned in Module 17 why the tin is risky! Savings is safer — and it can grow."},
    {t:"Spent on something nice, just in case", ok:false, fb:"If it is spent, it cannot help in an emergency. It has to sit and wait."}]},
  "q363b":{type:"mc", transfer:true, prompt:"Every ship on the island carries a spare sail and a first-aid kit. They are only used when something goes wrong. What is this most like?", concept:"efund", opts:[
    {t:"An emergency fund — set aside only for surprises, so trouble does not become disaster", ok:true, fb:"Exactly. Nobody uses the spare sail for fun. It waits — and when it is needed, it saves the trip."},
    {t:"Goal savings — the crew is saving for a new ship", ok:false, fb:"The spare sail has no planned job. It waits for a surprise. That is the emergency-fund shape."},
    {t:"Debt — the ship owes the sail", ok:false, fb:"Nothing is owed. It is something set aside ahead of time for when things go wrong."}]}
};

const CFG = {
  n:36, title:"The Emergency Fund", homeSub:"Four short lessons. Money that waits for the day you need it most.",
  pool:["q361a","q361b","q361c","q362a","q362b","q363a","q363c"], transfer:"q363b",
  quest:"You learned what counts as an emergency, why an emergency fund is its own pile, and how to build and refill one.",
  failKeys:"The keys: an emergency is a surprise that cannot wait, an emergency fund is money saved only for that (in savings, separate from goals), and you refill it after you use it.",
  nextFile:"module-37-insurance.html",
  passStory:'<p><strong>You now own:</strong> emergency and emergency fund.</p>'+
    '<p>Kai’s fund is growing. But one night he does the math on his biggest risk of all. If a storm destroyed Tavo’s whole boat, the loss would be far more than any emergency fund on the island could cover.</p>'+
    '<p>"So what do you do about THAT?" he asks.</p>'+
    '<p>Tavo pulls a folded paper from his coat. "Remember the fourth way to handle risk? This is how twenty fishers share one."</p>'+
    '<p class="muted">Module 37: Insurance.</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about emergencies or emergency funds — or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 36 (The Emergency Fund) of a financial-literacy app, in the Risk & Insurance block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, multiply, buy, sell, pay, earn, work, spend, need, save, goal, percent, bank, deposit, withdraw, balance, checking, savings, transaction, notification, interest, grow, fee, overdraft, PIN, scam, budget, cushion, borrow, loan, lend, owe, debt, debit card, credit card, credit score, due date, lender, minimum payment, employer, wage, paycheck, income, tax, take-home pay, sales tax, receipt, tax return, refund, risk, loss. "+
  "From THIS module: emergency (a surprise that needs money right away and cannot wait; things you knew were coming are not emergencies) and emergency fund (money saved only for emergencies, kept in savings, separate from goal money; build it a little each paycheck; refill it after using it). Contrast with cushion: a cushion is a few dollars in checking to catch a forgotten look; an emergency fund is bigger and in savings. Without a fund, a surprise often means borrowing, and debt grows. An emergency fund is the smart way to 'keep' a risk. "+
  "TEACHING STYLE: concepts over calculations. Do not give a rule like 'three to six months of expenses'; say 'enough to cover a surprise or two, and growing', and that adults often aim for more. "+
  "STRICT RULES: never use these words (later modules): insurance, premium, deductible, claim, policy, coverage, invest, stock, diversify. If the learner uses one, answer briefly in plain words and say it is coming later. "+
  "Story context: a wave smashed Tavo's boat; the $40 repair came from his emergency fund, not a loan. Nilo, with no fund, had to borrow for a similar repair. Kai sorted emergencies from non-emergencies, then built his own fund a little each payday, used it when a storm ruined his nets, and refilled it. "+
  "Never repeat a failed explanation — switch analogies (a spare sail, a first-aid kit, a lifeboat). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple 'emergency or not?' question and wait.";
//@@LESSONS
/* =====================================================================
   SIMULATOR — Kai's emergency fund card. Payday taps add $5; a storm
   uses some; paydays refill it. The bar is the whole visual.
===================================================================== */
const FUND_TARGET=30;
function fundCard(v, note){
  const pct=Math.min(100, v/FUND_TARGET*100);
  return '<div class="fund"><div class="lbl">Kai’s emergency fund · in savings</div><div class="v">$'+v+'</div>'+
    '<div class="bar"><div style="width:'+pct+'%"></div></div><div class="who">'+(note||'first target: $'+FUND_TARGET)+'</div></div>';
}

/* =====================================================================
   LESSON 1 — Tavo's Other Account
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · Tavo’s other account</div>
    <div class="recap"><strong>Kai’s story so far:</strong> A wave smashed Tavo’s boat against the dock. $40 to fix, this week. Tavo took it straight out of a savings account Kai had never heard of.</div>
    <div class="scene">🚤💥🛠️<div class="cap">No loan. No panic. The boat is fixed by Thursday.</div></div>
    <div class="card"><p>"A smashed boat is a surprise," Tavo says, "and it cannot wait. If I don’t fix it, I don’t fish. If I don’t fish, I don’t earn."</p>
    <p>A surprise that needs money right away and cannot wait has a name: an <strong>emergency</strong>.</p></div>
    ${more('<p>Not every surprise is an emergency. Finding a pretty shell is a surprise, but nothing bad happens if you wait.</p>'+
      '<p>And not every big cost is an emergency. A new school bag can cost a lot, but you know it is coming, so you can plan for it.</p>'+
      '<p>An emergency is both at once: a surprise, and it cannot wait.</p>')}
    <button onclick="earnWord('emergency');next()">New word: emergency</button>`),
  ()=>show(`<div class="kicker">Lesson 1 · The account for days like this</div>
    <div class="card"><p>Years ago, Tavo started putting a little from every paycheck into a separate pile. He never spends it on wants, or on goals. It just waits.</p>
    <p>That is an <strong>emergency fund</strong>: money saved only for emergencies.</p></div>
    <table class="vs">
      <tr><th></th><th>Cushion</th><th>Emergency fund</th></tr>
      <tr><td><strong>Where</strong></td><td>Checking</td><td>Savings</td></tr>
      <tr><td><strong>Size</strong></td><td>A few dollars</td><td>Bigger, and growing</td></tr>
      <tr><td><strong>Job</strong></td><td>Catch a forgotten look before an overdraft</td><td>Pay for real surprises without borrowing</td></tr>
    </table>
    ${more('<p>Why keep it in savings, not checking? Money in checking is easy to spend by mistake. In savings, it sits one step away from everyday spending, but it is still there when you need it.</p>'+
      '<p>It can even grow a little with interest while it waits. It starts small, like Kai’s, and gets bigger over time. A bigger fund can handle a bigger surprise.</p>')}
    <button onclick="earnWord('efund');next()">New word: emergency fund</button>`),
  ()=>renderMC("q361a", next),
  ()=>renderMC("q361b", next),
  ()=>renderTF("q361c", next),
];

/* =====================================================================
   LESSON 2 — Emergency or Not? (sort)
===================================================================== */
const SURPRISES=[
  {t:"🚤 A wave smashes the boat, and it must be fixed this week", yes:true, why:"Surprise, and it cannot wait. Emergency."},
  {t:"🪁 Kites are on sale this week only", yes:false, why:"A sale is a want, even a good one. The fund stays put."},
  {t:"🤒 Kai gets sick and needs the clinic", yes:true, why:"Nobody plans to get sick, and it cannot wait. Emergency."},
  {t:"🎂 Mika’s birthday, which Kai has known about for months", yes:false, why:"Not a surprise at all. Plan it in the budget."},
  {t:"🏠 The roof starts leaking during a storm", yes:true, why:"A surprise that gets worse every hour. Emergency."},
  {t:"🎮 A new game that everyone at school has", yes:false, why:"A want. Wanting it a lot does not make it an emergency."}
];
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · The test</div>
    <div class="recap"><strong>So far:</strong> an emergency fund is money saved only for emergencies.</div>
    <div class="card"><p>The fund only works if it is only used for real emergencies. Tavo’s test has two parts:</p>
    <p style="text-align:center; font-size:18px"><strong>Was it a surprise?<br>Can it truly not wait?</strong></p>
    <p>Both yes? Emergency. Otherwise, it belongs in the budget.</p></div>
    <button onclick="next()">Sort six</button>`),
  ()=>{
    let i=0;
    function draw(){
      if(i>=SURPRISES.length){ addXP(6); next(); return; }
      const m=SURPRISES[i];
      show(`<div class="kicker">Emergency or not? · ${i+1} of ${SURPRISES.length}</div>
        <div class="item">${m.t}</div>
        <div class="sortbar"><button class="yes" id="sYes">🚨 Emergency</button><button class="no" id="sNo">Not an emergency</button></div>
        <div id="fb"></div><div id="cont"></div>`);
      let done=false;
      function pick(saysYes){
        if(done) return;
        const ok = saysYes===m.yes;
        document.getElementById("fb").innerHTML='<div class="feedback '+(ok?'good':'bad')+'">'+(ok?'Right — ':'Not quite. ')+m.why+(ok?'':' Try again.')+'</div>';
        revealFB();
        if(ok){
          done=true; addXP(1);
          document.getElementById("sYes").disabled=true; document.getElementById("sNo").disabled=true;
          document.getElementById("cont").innerHTML=(i===SURPRISES.length-1?more('<p>Wanting something a lot can feel urgent. That feeling is strong, but it is not the same as a real emergency.</p>'+
      '<p>A good trick: ask, “What happens if I wait a week?” If the answer is “nothing bad,” it is not an emergency. It belongs in the budget.</p>'):'')+'<button onclick="window._n()">'+(i<SURPRISES.length-1?"Next":"Done")+'</button>';
          window._n=()=>{ i++; draw(); };
          revealFB();
        }
      }
      document.getElementById("sYes").onclick=()=>pick(true);
      document.getElementById("sNo").onclick=()=>pick(false);
    }
    draw();
  },
  ()=>renderMC("q362a", next),
  ()=>renderTF("q362b", next),
];

/* =====================================================================
   LESSON 3 — Build It, Use It, Refill It (simulator)
===================================================================== */
const L3=[
  ()=>show(`<div class="kicker">Lesson 3 · Same surprise, two endings</div>
    <div class="recap"><strong>So far:</strong> emergencies are surprises that cannot wait.</div>
    <div class="compare">
      <div class="box win"><div class="n">Tavo — has a fund</div><div class="v">fixed</div><div class="d">$40 from his fund. Done by Thursday.</div></div>
      <div class="box" style="border-color:var(--bad); background:#faf0ee"><div class="n">Nilo — no fund</div><div class="v">borrowed</div><div class="d">$40 loan. Pays back more than $40.</div></div>
    </div>
    <div class="card"><p>Same size surprise. But for Nilo, it turned into debt — and from Module 26, you know debt grows.</p>
    <p>An emergency fund is how you <em>keep</em> a risk the smart way: the loss still happens, but it does not snowball.</p></div>
    <button onclick="next()">Build Kai’s fund</button>`),
  ()=>{
    let v=0, step=0;
    const PAYDAYS=6;
    function draw(){
      let body='', btn='';
      if(step<PAYDAYS){
        body='Payday '+(step+1)+' of '+PAYDAYS+'. Kai’s budget sends $5 to the emergency fund before anything else.';
        btn='<button id="fAdd" data-bot="1">💵 Add $5 to the fund</button>';
      } else if(step===PAYDAYS){
        body='🌧️ A storm shreds Kai’s nets. New ones cost $20, and he needs them to work on Saturday. A surprise that cannot wait.';
        btn='<button id="fUse" data-bot="1">Use $20 from the emergency fund</button>';
      } else if(step<PAYDAYS+3){
        body='Nets replaced, no borrowing. Now the fund needs refilling before the next surprise. Payday '+(step-PAYDAYS)+' of 2.';
        btn='<button id="fAdd" data-bot="1">💵 Refill $5</button>';
      }
      if(step>=PAYDAYS+3){
        show(`<div class="kicker">Build, use, refill</div>${fundCard(v,'refilling — ready for the next surprise')}
          <div class="card"><p style="margin:0">Built a little at a time. Used for a real emergency. Refilled. That is the whole cycle — and Kai never borrowed a cent.</p></div>
          ${more('<p>Why refill right away? Emergencies do not take turns. Another storm could come next month.</p>'+
      '<p>Refilling the fund is like putting a spare net back in the boat. You hope you never need it, but you feel calmer knowing it is there.</p>'+
      '<p>That calm is worth a lot. Without a fund, every storm cloud feels scary.</p>')}
    <div id="cont"><button onclick="addXP(5);next()">Continue</button></div>`);
        return;
      }
      show(`<div class="kicker">Build, use, refill</div>${fundCard(v)}<div class="card"><p style="margin:0">${body}</p></div>${btn}`);
      const a=document.getElementById("fAdd"), u=document.getElementById("fUse");
      if(a) a.onclick=()=>{ v+=5; step++; draw(); };
      if(u) u.onclick=()=>{ v-=20; step++; draw(); };
    }
    draw();
  },
  ()=>renderMC("q363a", next),
  ()=>renderMC("q363c", next),
];
const META=[
  {title:"Tavo’s Other Account", sub:"Money that waits for surprises", emoji:"🛠️"},
  {title:"Emergency or Not?", sub:"Surprise + can’t wait. Sort six", emoji:"🚨"},
  {title:"Build, Use, Refill", sub:"Kai’s first emergency fund", emoji:"🛟"},
];
