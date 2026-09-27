//@@META
title=The Paycheck
file=module-31-the-paycheck.html
placeholder=Ask about paychecks and income…
//@@CSS
  .stub{background:#fffdf5; border:2px solid var(--sand-deep); border-radius:12px; padding:14px 16px; margin-bottom:12px; font-size:15px}
  .stub .hd{display:flex; justify-content:space-between; font-weight:700; border-bottom:2px solid var(--ink); padding-bottom:6px; margin-bottom:4px}
  .stub .row{display:flex; justify-content:space-between; padding:5px 0; border-bottom:1px dashed var(--sand-deep)}
  .stub .row.out span:last-child{color:var(--bad); font-weight:700}
  .stub .row.hl{background:#faf0ee; margin:0 -8px; padding:5px 8px; border-radius:6px}
  .stub .net{display:flex; justify-content:space-between; font-weight:700; font-size:18px; padding-top:8px}
  .stub .net span:last-child{font-family:"Fraunces",Georgia,serif; color:var(--good)}
  .sortbar .yes{background:var(--good)}
  .sortbar .no{background:var(--ink)}
  .cal2{display:flex; gap:4px; margin-bottom:12px}
  .cal2 span{flex:1; text-align:center; font-size:11px; padding:8px 0; border-radius:6px; background:#fff; border:1.5px solid #d9e2de; color:var(--ink-soft)}
  .cal2 span.pd{background:var(--good); color:#fff; border-color:var(--good); font-weight:700}
//@@CONTENT
/* =====================================================================
   CONTENT — Module 31: The Paycheck
   Vocab: paycheck, income.
   Show-then-name: the pay slip has a "Taxes −$4.00" line. It is SHOWN
   here (Kai notices the missing $4) and NAMED/explained in M32. The
   learner is never asked to explain taxes in this module.
   "Income" sort pays off earlier modules: interest IS income; a loan is
   NOT (it must be paid back); moving your own money is NOT.
===================================================================== */
const VOCAB = {
  paycheck:{term:"paycheck", def:"The payment your employer gives you for the work you did, with a slip showing your hours, your wage, and anything taken out. It often goes straight into your checking account."},
  income:{term:"income", def:"Money that comes in to you — from a paycheck, from selling things you made or caught, even interest. Money you must pay back, like a loan, is not income."}
};

const QUESTIONS = {
  "q311a":{type:"mc", prompt:"What is a paycheck?", concept:"paycheck", opts:[
    {t:"The payment an employer gives you for your work, with a slip showing the details", ok:true, fb:"Right. The slip shows hours, wage, anything taken out — and what you actually get."},
    {t:"A bill you have to pay", ok:false, fb:"The other direction! A paycheck is money coming TO you for your work."},
    {t:"A loan from your employer", ok:false, fb:"Nothing to pay back — you earned it. A paycheck is payment for work you already did."}]},
  "q311b":{type:"tf", prompt:"True or false: the amount Kai actually gets on his paycheck can be less than his hours times his wage.", answer:true, concept:"paycheck",
    good:"Right. Ten hours at $4 is $40 — but something was taken out, so $36 landed in his account. (Module 32 explains what.)",
    bad:"It can! Kai earned $40 for 10 hours, but his slip showed a line taken out, so only $36 arrived. Module 32 explains that line."},
  "q312a":{type:"mc", prompt:"What is income?", concept:"income", opts:[
    {t:"Money that comes in to you, like a paycheck, sales, or interest", ok:true, fb:"Right. Any money that comes in and is truly yours to keep."},
    {t:"Only money from an employer", ok:false, fb:"A paycheck is income, but so is money from selling fish you caught — and even interest from savings."},
    {t:"Any money in your hand, even if you have to pay it back", ok:false, fb:"Borrowed money is not income — it has to go back. Income is money that is truly yours."}]},
  "q312b":{type:"mc", prompt:"Tavo gets a $20 loan from the bank. Is that income?", concept:"income", opts:[
    {t:"No — he has to pay it back, so it is not really his", ok:true, fb:"Right. It feels like money coming in, but it is borrowed. Income is money that stays yours."},
    {t:"Yes — any money that arrives is income", ok:false, fb:"A loan arrives, but it has to go back — with interest. That makes it borrowing, not income."},
    {t:"Yes, but only if he spends it", ok:false, fb:"Spending it does not change what it is. Borrowed money is never income."}]},
  "q312c":{type:"tf", prompt:"True or false: interest the bank adds to Kai’s savings is a kind of income.", answer:true, concept:"income",
    good:"Right. It comes in, and it is his to keep. Small, but real income.",
    bad:"It is! Interest comes in and stays Kai’s. That makes it income, even though he did not work for it."},
  "q313a":{type:"mc", prompt:"Kai earned $40 but his paycheck put $36 in his account. Which number should he plan his budget with?", concept:"paycheck", opts:[
    {t:"$36 — the amount that actually arrived", ok:true, fb:"Right. You can only spend what actually lands in your account. Plan with that number."},
    {t:"$40 — the amount he earned", ok:false, fb:"He will never see that full $40 in his account. Planning with it means planning to spend $4 he does not have."},
    {t:"It does not matter", ok:false, fb:"It matters a lot! Plan with $40 and he will be $4 short. Plan with what actually arrives: $36."}]},
  "q313c":{type:"mc", prompt:"Kai is paid every two weeks. Why can’t he spend his whole paycheck in the first few days?", concept:"paycheck", opts:[
    {t:"It has to last until the next paycheck", ok:true, fb:"Right. Two weeks of needs, one paycheck. The budget spreads it out so there is still food on day 13."},
    {t:"The bank will not let him", ok:false, fb:"The bank would let him — that is the danger! It is the budget that makes it last."},
    {t:"Paychecks disappear after three days", ok:false, fb:"The money stays until he spends it. The reason to spread it out is that it has to last two whole weeks."}]},
  "q313b":{type:"mc", transfer:true, prompt:"A restaurant pays Tavo for his fish once a month. What does this mean for Tavo?", concept:"income", opts:[
    {t:"It is income on a schedule — he has to make it last the whole month", ok:true, fb:"Exactly. Same shape as Kai’s paycheck, just a longer wait. The longer the gap, the more the budget matters."},
    {t:"It is a loan, because it comes later", ok:false, fb:"Coming later does not make it borrowed. It is payment for his fish — income that is his to keep."},
    {t:"He can spend it all in the first week", ok:false, fb:"Then weeks 2, 3, and 4 would have nothing. It has to last until the next payment."}]}
};

const CFG = {
  n:31, title:"The Paycheck", homeSub:"Four short lessons. What arrives, what counts, and how to make it last.",
  pool:["q311a","q311b","q312a","q312b","q312c","q313a","q313c"], transfer:"q313b",
  quest:"You read your first paycheck, sorted what counts as income, and planned with the number that actually arrives.",
  failKeys:"The keys: a paycheck is your employer’s payment with a slip of details, income is money that comes in and stays yours (a loan does not count), and you plan with what actually arrives.",
  nextFile:"module-32-taxes.html",
  passStory:'<p><strong>You now own:</strong> paycheck and income.</p>'+
    '<p>But Kai cannot stop looking at that one line on the slip. <strong>Taxes: −$4.00.</strong></p>'+
    '<p>"I worked those hours," he says. "Where did my four dollars go?"</p>'+
    '<p>Rana points past the harbor, up the hill, to the lighthouse blinking over the water. "Partly," she says, "up there."</p>'+
    '<p class="muted">Module 32: Taxes.</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about paychecks or what counts as income — or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 31 (The Paycheck) of a financial-literacy app, in the Earning & Taxes block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, multiply, buy, sell, pay, earn, work, spend, need, save, goal, percent, bank, deposit, withdraw, balance, checking, savings, transaction, notification, interest, grow, fee, overdraft, PIN, scam, budget, cushion, borrow, loan, lend, owe, debt, debit card, credit card, credit score, due date, lender, minimum payment, employer, wage. "+
  "From THIS module: paycheck (an employer's payment for your work, with a slip showing hours, wage, anything taken out, and the amount you actually get; often deposited straight into checking; often every week or two) and income (money that comes in and is yours to keep: paychecks, selling things you made or caught, interest; a loan is NOT income, and moving your own money between accounts is NOT income). Plan a budget with the amount that actually arrives, and make each paycheck last until the next one. "+
  "About the 'Taxes -$4.00' line on Kai's slip: the learner sees it here but it is explained in the next module. If asked, say briefly that it is money taken out to help pay for things everyone on the island shares, and that Module 32 is all about it. Do not explain tax rules. "+
  "TEACHING STYLE: concepts first; small whole-number arithmetic only when needed. "+
  "STRICT RULES: never use these words (later modules): take-home pay, gross pay, net pay, sales tax, receipt, tax return, refund, withholding, deduction, government, salary, benefits, invest, stock, insurance, retirement. If the learner uses one, answer briefly in plain words and say it is coming later. "+
  "Story context: after two Saturdays (10 hours at $4) Tavo gave Kai a paycheck. The slip said earned $40, taxes -$4, paid to you $36. Kai sorted money into income or not income, then learned to plan his budget with $36 and make it last two weeks. "+
  "Never repeat a failed explanation — switch analogies (a basket that has to feed you until the next market day, water in a canteen for a long walk). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple 'income or not?' question and wait.";
//@@LESSONS
/* =====================================================================
   SIMULATOR — Kai's pay slip. The "Taxes" line is highlighted but not
   explained (show-then-name → M32).
===================================================================== */
function stub(hl){
  return '<div class="stub"><div class="hd"><span>Tavo’s Boat · Pay slip</span><span>Kai</span></div>'+
    '<div class="row"><span>Hours worked</span><span>10</span></div>'+
    '<div class="row"><span>Wage</span><span>$4.00 an hour</span></div>'+
    '<div class="row"><span>Earned</span><span>$40.00</span></div>'+
    '<div class="row out'+(hl?' hl':'')+'"><span>Taxes</span><span>−$4.00</span></div>'+
    '<div class="net"><span>Paid to you</span><span>$36.00</span></div></div>';
}

/* =====================================================================
   LESSON 1 — The Envelope
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · The envelope</div>
    <div class="recap"><strong>Kai’s story so far:</strong> Two Saturdays on Tavo’s boat. Ten hours at $4 each. Today is payday.</div>
    <div class="scene">✉️💵<div class="cap">Tavo hands Kai an envelope with his name on the front.</div></div>
    <button onclick="next()">Open it</button>`),
  ()=>show(`<div class="kicker">Lesson 1</div>
    ${stub(false)}
    <div class="card"><p>This is Kai’s first <strong>paycheck</strong> — the payment an employer gives you for your work, with a slip showing the details.</p>
    <p>"Most of my helpers don’t even get an envelope anymore," Tavo says. "The money goes straight into their checking account. But everyone should see their first slip on paper."</p></div>
    <button onclick="earnWord('paycheck');next()">New word: paycheck</button>`),
  ()=>show(`<div class="kicker">Lesson 1 · Wait a second</div>
    ${stub(true)}
    <div class="card"><p>Kai reads it line by line, the way he reads his feed. Ten hours. $4 each. $40 earned. Good.</p>
    <p>Then: <strong>Taxes, −$4.00</strong>. And at the bottom, <strong>$36</strong>.</p>
    <p>"Where did my four dollars go?" Rana smiles. "Good eye. That line gets a whole lesson of its own. For now: always read the slip."</p></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q311a", next),
  ()=>renderTF("q311b", next),
];

/* =====================================================================
   LESSON 2 — What Counts as Income? (sort)
===================================================================== */
const MONEYIN=[
  {t:"Kai’s paycheck from Tavo", yes:true, why:"Money earned from work, his to keep."},
  {t:"Money from selling fish Kai caught himself", yes:true, why:"No employer, but it came in and it is his. Income."},
  {t:"Interest the bank added to Kai’s savings", yes:true, why:"It came in and it stays his. Small, but real income."},
  {t:"A $20 loan from the bank", yes:false, why:"It has to be paid back — with interest. Borrowed money is not income."},
  {t:"Moving $5 from Kai’s savings into his checking", yes:false, why:"That money was already his. Moving it between accounts is not new money coming in."},
  {t:"Mika paying back the $2 Kai lent her", yes:false, why:"That $2 was already Kai’s — it is just coming home. Nothing new came in."}
];
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · Money coming in</div>
    <div class="recap"><strong>So far:</strong> a paycheck shows what you earned, what was taken out, and what you get.</div>
    <div class="card"><p>Kai’s paycheck is one kind of <strong>income</strong>: money that comes in to you and is yours to keep.</p>
    <p>But not every dollar that shows up counts. The test is simple: <strong>is it new money, and is it truly mine to keep?</strong></p></div>
    <button onclick="earnWord('income');next()">New word: income</button>`),
  ()=>{
    let i=0;
    function draw(){
      if(i>=MONEYIN.length){ addXP(6); next(); return; }
      const m=MONEYIN[i];
      show(`<div class="kicker">Income or not? · ${i+1} of ${MONEYIN.length}</div>
        <div class="item">${m.t}</div>
        <div class="sortbar"><button class="yes" id="sYes">✅ Income</button><button class="no" id="sNo">Not income</button></div>
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
          document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<MONEYIN.length-1?"Next":"Done")+'</button>';
          window._n=()=>{ i++; draw(); };
          revealFB();
        }
      }
      document.getElementById("sYes").onclick=()=>pick(true);
      document.getElementById("sNo").onclick=()=>pick(false);
    }
    draw();
  },
  ()=>renderMC("q312a", next),
  ()=>renderMC("q312b", next),
  ()=>renderTF("q312c", next),
];

/* =====================================================================
   LESSON 3 — From Paycheck to Plan
===================================================================== */
const L3=[
  ()=>show(`<div class="kicker">Lesson 3 · From paycheck to plan</div>
    <div class="recap"><strong>So far:</strong> income is new money that stays yours.</div>
    <div class="card"><p>Kai opens his budget from Module 24. He starts to type <strong>$40</strong> at the top… and stops.</p>
    <p>His account never got $40. It got <strong>$36</strong>. You can only spend what actually arrives, so that is the number the plan starts with.</p></div>
    ${stub(false)}
    <button onclick="next()">One more thing</button>`),
  ()=>show(`<div class="kicker">Lesson 3 · Making it last</div>
    <div class="cal2">${Array.from({length:14},(_,k)=>'<span class="'+(k===0?'pd':'')+'">'+(k===0?'PAY':'day '+(k+1))+'</span>').join('').replace(/day /g,'')}</div>
    <div class="card"><p>Tavo pays every <strong>two weeks</strong>. That $36 has to cover every day until the next paycheck.</p>
    <p>If Kai spends it all in the first three days, days four through fourteen are empty. The budget spreads it out: needs for both weeks first, then savings, then wants — with his cushion sitting quietly in checking.</p></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q313a", next),
  ()=>renderMC("q313c", next),
];
const META=[
  {title:"The Envelope", sub:"Reading your first pay slip", emoji:"✉️"},
  {title:"Money Coming In", sub:"Income or not? Sort six", emoji:"📥"},
  {title:"From Paycheck to Plan", sub:"Plan with what arrives — and make it last", emoji:"🗓️"},
];
