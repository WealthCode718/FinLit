//@@META
title=Your Credit Score
file=module-28-credit-score.html
placeholder=Ask about credit scores and due dates…
//@@CSS
  .gauge{background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:16px; margin-bottom:12px}
  .gauge .who{font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:var(--ink-soft); font-weight:700; margin-bottom:8px}
  .gtrack{position:relative; height:18px; border-radius:999px; background:linear-gradient(90deg,#a94436 0%,#e8b84b 50%,#2e7d5b 100%)}
  .gpin{position:absolute; top:-7px; width:6px; height:32px; background:var(--ink); border-radius:3px; transform:translateX(-50%); transition:left .5s ease; box-shadow:0 0 0 3px #fff}
  .gends{display:flex; justify-content:space-between; font-size:12px; color:var(--ink-soft); margin-top:8px; font-weight:600}
  .sortbar .up{background:var(--good)}
  .sortbar .down{background:var(--bad)}
  .cal{display:inline-block; background:#fff; border:2px solid var(--bad); border-radius:10px; overflow:hidden; text-align:center; min-width:72px; vertical-align:middle}
  .cal .m, .cal .d{display:block}
  .cal .m{background:var(--bad); color:#fff; font-size:11px; font-weight:700; letter-spacing:.1em; padding:2px 0}
  .cal .d{font-family:"Fraunces",Georgia,serif; font-weight:700; font-size:28px; padding:2px 0}
//@@CONTENT
/* =====================================================================
   CONTENT — Module 28: Your Credit Score
   Vocab: credit score, due date.
   "due date" follows show-then-name: M27's bill said "pay by the 15th";
   here it is named.
   Deliberately NO score numbers (no 300–850 range): the score is a
   gauge from "less trusted" to "more trusted". What moves it is the
   concept being taught — mostly, paying back on time. A common
   misconception is addressed directly: a credit score is about your
   record of paying back, not about how much money you have.
===================================================================== */
const VOCAB = {
  creditscore:{term:"credit score", def:"A number that shows banks how well you have paid back money before. Paying on time makes it go up. Missing payments makes it go down."},
  duedate:{term:"due date", def:"The date on a bill by which you must pay. Paying by the due date avoids late fees — and is the biggest thing that builds a good credit score."}
};

const QUESTIONS = {
  "q281a":{type:"mc", prompt:"What is a credit score?", concept:"creditscore", opts:[
    {t:"A number that shows banks how well you have paid back money before", ok:true, fb:"Right. It is a bank’s quick way of asking: when this person borrowed before, did they pay it back?"},
    {t:"How much money you have in savings", ok:false, fb:"Savings does not set the score. It is about your record of borrowing and paying back."},
    {t:"The number of cards you own", ok:false, fb:"Owning cards is not the score. The score shows how well you have paid back what you borrowed."}]},
  "q281b":{type:"mc", prompt:"Why did the bank say yes to Tavo and no to Nilo?", concept:"creditscore", opts:[
    {t:"Tavo has a record of paying back on time; Nilo has missed payments", ok:true, fb:"Right. The bank looked at their past. Tavo’s record says he pays back. Nilo’s record says he sometimes does not."},
    {t:"Tavo has more money than Nilo", ok:false, fb:"It was not about who has more money. It was about who has paid back on time before."},
    {t:"The bank just likes Tavo more", ok:false, fb:"It is not about liking. The bank looked at each person’s record of paying back."}]},
  "q281c":{type:"tf", prompt:"True or false: having lots of money in savings automatically gives you a high credit score.", answer:false, concept:"creditscore",
    good:"Right. Savings is great, but the credit score is about your record of borrowing and paying back on time.",
    bad:"Surprising, but no. The credit score only looks at how you have handled borrowed money — mostly whether you paid back on time."},
  "q282a":{type:"mc", prompt:"What is a due date?", concept:"duedate", opts:[
    {t:"The date on a bill by which you must pay", ok:true, fb:"Right. Nilo’s bill said “pay by the 15th” — the 15th was the due date."},
    {t:"The day you get paid for work", ok:false, fb:"That is payday. A due date is when a bill must be paid."},
    {t:"The day a store opens", ok:false, fb:"A due date is about bills: the last day to pay on time."}]},
  "q282b":{type:"mc", prompt:"What is the BIGGEST thing that builds a good credit score?", concept:"duedate", opts:[
    {t:"Paying every bill by its due date", ok:true, fb:"Right. On time, every time. Nothing matters more to the score."},
    {t:"Borrowing as much as possible", ok:false, fb:"Borrowing lots does not help — and borrowing lots all at once can make the score go down."},
    {t:"Having a nice-looking card", ok:false, fb:"How the card looks does nothing. Paying by the due date is what counts."}]},
  "q282c":{type:"tf", prompt:"True or false: missing a due date can lower your credit score.", answer:true, concept:"duedate",
    good:"Right. A missed due date goes on your record — and it usually brings a late fee too.",
    bad:"It really can. A missed due date goes on your record, and banks see it."},
  "q283a":{type:"mc", prompt:"Why does a good credit score matter?", concept:"creditscore", opts:[
    {t:"When you really need to borrow, it is easier to get a yes — and often you pay less extra", ok:true, fb:"Right. Tavo got his net loan fast. A good record opens doors when you need them."},
    {t:"It lets you skip paying bills", ok:false, fb:"Nobody gets to skip bills! A good score just makes banks more willing to trust you."},
    {t:"It adds money to your savings", ok:false, fb:"A score does not add money. It helps when you need to borrow — easier yes, often less extra to pay."}]},
  "q283c":{type:"mc", prompt:"Nilo’s score is low. What can he do?", concept:"creditscore", opts:[
    {t:"Pay every bill on time from now on — the score rises slowly", ok:true, fb:"Right. Scores are not stuck. A new record of on-time payments slowly builds trust back."},
    {t:"Nothing — a low score is forever", ok:false, fb:"Not forever! Paying on time, again and again, slowly rebuilds it."},
    {t:"Borrow a lot more to show he can", ok:false, fb:"Borrowing lots at once can lower it further. The fix is on-time payments, one after another."}]},
  "q283b":{type:"mc", transfer:true, prompt:"Mika always gives back what she borrows, on time. Jojo usually forgets. Who will friends be happy to lend to next time?", concept:"creditscore", opts:[
    {t:"Mika — her record shows she gives things back", ok:true, fb:"Exactly. Nobody wrote down a number, but everyone keeps a kind of score. A credit score is the same idea, written down."},
    {t:"Jojo — he needs things more", ok:false, fb:"Needing something does not make people trust you. Friends look at who has given things back before."},
    {t:"Both the same — the past does not matter", ok:false, fb:"The past matters a lot. People lend more easily to someone with a record of giving things back."}]}
};

const CFG = {
  n:28, title:"Your Credit Score", homeSub:"Four short lessons. Who is keeping score — and how to keep it high.",
  pool:["q281a","q281b","q281c","q282a","q282b","q282c","q283a","q283c"], transfer:"q283b",
  quest:"You learned what a credit score is, why due dates matter so much, and how a score is built back up.",
  failKeys:"The keys: a credit score shows how well you have paid back before (not how much money you have), paying by the due date is the biggest thing that builds it, and a low score can slowly be rebuilt.",
  nextFile:"module-29-credit-challenge.html",
  passStory:'<p><strong>You now own:</strong> credit score and due date — and the one habit that matters most: on time, every time.</p>'+
    '<p>Rana finds Kai at the harbor. "You’ve learned borrowing, debt, cards, and scores. When you are grown, you’ll have a card of your own someday."</p>'+
    '<p>She hands him a pretend one, cut from a coconut shell. "So let’s practice. One whole month. Your card. Your bills. Your choices."</p>'+
    '<p class="muted">Module 29: The Credit Challenge.</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about credit scores or due dates — or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 28 (Your Credit Score) of a financial-literacy app, in the Credit block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, buy, sell, pay, earn, spend, need, save, goal, percent, bank, deposit, withdraw, balance, checking, savings, transaction, notification, interest, grow, fee, overdraft, PIN, scam, budget, cushion, borrow, loan, lend, owe, debt, debit card, credit card. "+
  "From THIS module: credit score (a number that shows banks how well you have paid back before; on-time payments raise it, missed payments and borrowing lots all at once lower it; it is NOT about how much money you have) and due date (the date on a bill by which you must pay). A good score makes it easier to get a yes when you really need to borrow, and often means paying less extra. A low score can be rebuilt slowly with on-time payments. "+
  "TEACHING STYLE: concepts over calculations. Do not give score numbers or ranges (no 300-850), rates, or percentages; describe the score as 'more trusted' vs 'less trusted'. Do not list detailed scoring formulas. "+
  "STRICT RULES: never use these words (later modules): minimum payment, lender (say 'the bank' or 'whoever lends'), credit limit, credit utilization, credit report, credit bureau, APR, interest rate, bankruptcy, collections, invest, stock, tax, insurance. If the learner uses a later word, answer briefly in plain words and say it is coming later. Children do not have credit scores yet; say so gently if asked. "+
  "Story context: the bank said yes fast to Tavo's new net loan because of his good record, and no to Nilo because of missed payments. Kai learned what a credit score is, what a due date is, sorted actions by whether they push a score up or down, and saw that Nilo can rebuild by paying on time. "+
  "Never repeat a failed explanation — switch analogies (a friend who always returns borrowed things, a report card for paying back, trust that takes time to build). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple 'up or down?' question and wait.";
//@@LESSONS
/* =====================================================================
   SIMULATOR — a trust gauge (red → gold → green) with a moving pin.
   No numbers on it on purpose.
===================================================================== */
function gauge(pos, who){
  const p=Math.max(4,Math.min(96,pos));
  return '<div class="gauge"><div class="who">'+who+'</div><div class="gtrack"><div class="gpin" style="left:'+p+'%"></div></div>'+
    '<div class="gends"><span>less trusted</span><span>more trusted</span></div></div>';
}
function cal(d){ return '<span class="cal"><span class="m">DUE</span><span class="d">'+d+'</span></span>'; }

/* =====================================================================
   LESSON 1 — Who's Keeping Score?
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · Who’s keeping score?</div>
    <div class="recap"><strong>Kai’s story so far:</strong> Tavo got a fast yes on a new loan. Nilo got a no. Same bank, same week.</div>
    <div class="card"><p>Rana explains. "Before a bank lends, it wants to know one thing: <em>if we lend to you, will you pay it back?</em>"</p>
    <p>"It can’t see the future. So it looks at the past."</p></div>
    ${gauge(85,"Tavo")}
    ${gauge(22,"Nilo")}
    <button onclick="next()">What is it looking at?</button>`),
  ()=>show(`<div class="kicker">Lesson 1</div>
    <div class="card"><p>Every time someone borrows and pays back, it goes on a record. That record is boiled down into one number: a <strong>credit score</strong>.</p>
    <p>A credit score shows banks how well you have paid back money before. Higher means more trusted.</p>
    <p>Tavo has paid his boat loan every single week. Nilo skipped payments on his jacket and his card. The bank did not guess — it looked.</p>
    <p>One surprise: <strong>the score is not about how much money you have.</strong> It is about how you have handled borrowed money.</p></div>
    <button onclick="earnWord('creditscore');next()">New word: credit score</button>`),
  ()=>renderMC("q281a", next),
  ()=>renderMC("q281b", next),
  ()=>renderTF("q281c", next),
];

/* =====================================================================
   LESSON 2 — The Date That Matters Most (up-or-down sort)
===================================================================== */
const ACTIONS=[
  {t:"Pays the whole credit card bill by the due date.", up:true, why:"On time — exactly what banks want to see."},
  {t:"Misses the due date by two weeks.", up:false, why:"A missed due date goes on the record, and a late fee usually comes too."},
  {t:"Pays the boat loan on time, every week, for a whole year.", up:true, why:"A long record of on-time payments is the strongest thing there is."},
  {t:"Borrows lots of new loans all at once.", up:false, why:"Grabbing lots of new borrowing at once makes banks nervous."},
  {t:"Ignores the bank’s letters and does not pay.", up:false, why:"Missed payments are the fastest way down."},
  {t:"Pays a small bill on time, every month.", up:true, why:"Small or not, on time is on time. It all builds trust."}
];
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · The date that matters most</div>
    <div class="recap"><strong>So far:</strong> a credit score shows how well you have paid back before.</div>
    <div class="card"><p>Remember Nilo’s bill in Module 27? At the bottom it said: <strong>pay by the 15th</strong>. ${cal(15)}</p>
    <p>That date has a name: the <strong>due date</strong> — the date on a bill by which you must pay.</p>
    <p>Of everything that moves a credit score, paying by the due date matters most. <strong>On time, every time.</strong></p></div>
    <button onclick="earnWord('duedate');next()">New word: due date</button>`),
  ()=>{
    let i=0, pos=50;
    function draw(){
      if(i>=ACTIONS.length){ addXP(6); next(); return; }
      const a=ACTIONS[i];
      show(`<div class="kicker">Up or down? · ${i+1} of ${ACTIONS.length}</div>
        ${gauge(pos,"Someone’s credit score")}
        <div class="item">${a.t}</div>
        <div class="sortbar"><button class="up" id="sUp">⬆ Score goes up</button><button class="down" id="sDown">⬇ Score goes down</button></div>
        <div id="fb"></div><div id="cont"></div>`);
      let done=false;
      function pick(saysUp){
        if(done) return;
        const ok = saysUp===a.up;
        document.getElementById("fb").innerHTML='<div class="feedback '+(ok?'good':'bad')+'">'+(ok?'Right — ':'Not quite. ')+a.why+(ok?'':' Try again.')+'</div>';
        revealFB();
        if(ok){
          done=true; addXP(1);
          pos += a.up ? 12 : -12;
          document.querySelector(".gauge").outerHTML=gauge(pos,"Someone’s credit score");
          document.getElementById("sUp").disabled=true; document.getElementById("sDown").disabled=true;
          document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<ACTIONS.length-1?"Next":"Done")+'</button>';
          window._n=()=>{ i++; draw(); };
          revealFB();
        }
      }
      document.getElementById("sUp").onclick=()=>pick(true);
      document.getElementById("sDown").onclick=()=>pick(false);
    }
    draw();
  },
  ()=>renderMC("q282a", next),
  ()=>renderMC("q282b", next),
  ()=>renderTF("q282c", next),
];

/* =====================================================================
   LESSON 3 — Why It Matters (and how it comes back)
===================================================================== */
const L3=[
  ()=>show(`<div class="kicker">Lesson 3 · Why it matters</div>
    <div class="recap"><strong>So far:</strong> paying by the due date is what builds a score.</div>
    <div class="card"><p>Why should Kai care about a number he will not have for years?</p>
    <p>Because someday he might <em>need</em> to borrow — like Tavo did when his engine broke. When that day comes:</p>
    <p>✅ A good score → a faster yes, and often <strong>less extra to pay</strong>.<br>
    ❌ A low score → maybe a no, or <strong>more extra to pay</strong> for the same loan.</p>
    <p>The habits Kai builds now — a budget, looking before he pays, paying back what he owes — are the same ones that build a good score later.</p></div>
    <button onclick="next()">What about Nilo?</button>`),
  ()=>show(`<div class="kicker">Lesson 3 · Climbing back</div>
    ${gauge(22,"Nilo — this month")}
    ${gauge(55,"Nilo — a year of on-time payments later")}
    <div class="card"><p>A low score is not forever. Nilo pays every bill by its due date, month after month. Slowly, the pin moves.</p>
    <p>Trust takes a long time to build and a short time to lose. But it <strong>can</strong> be built back.</p></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q283a", next),
  ()=>renderMC("q283c", next),
];
const META=[
  {title:"Who’s Keeping Score?", sub:"Why the bank said yes to Tavo and no to Nilo", emoji:"📊"},
  {title:"The Date That Matters Most", sub:"Up or down? Sort six choices", emoji:"📅"},
  {title:"Why It Matters", sub:"And how a score comes back", emoji:"🌱"},
];
