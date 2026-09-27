//@@META
title=Borrowing
file=module-25-borrowing.html
placeholder=Ask about borrowing and loans…
//@@CSS
  .poster{background:#fffdf5; border:2px solid var(--sand-deep); border-radius:6px; padding:18px 16px; margin-bottom:14px; text-align:center; box-shadow:0 3px 0 var(--sand-deep); transform:rotate(-1deg)}
  .poster .big{font-family:"Fraunces",Georgia,serif; font-weight:700; font-size:22px; line-height:1.2}
  .poster .small{font-size:14px; color:var(--ink-soft); margin-top:6px}
  .flow{display:flex; align-items:center; justify-content:center; gap:8px; flex-wrap:wrap; font-size:15px; font-weight:600; margin:6px 0 2px}
  .flow .pill{background:var(--lagoon); border-radius:999px; padding:6px 12px}
  .compare .box .d{font-size:13px; color:var(--ink-soft); margin-top:6px}
  .sortbar .wait{background:var(--good)}
  .sortbar .bor{background:var(--shell)}
//@@CONTENT
/* =====================================================================
   CONTENT — Module 25: Borrowing  (opens the Credit block)
   Vocab: borrow, loan.  (lend is used as the everyday verb here too —
   it was held back until this module.)
   Big idea: interest runs in BOTH directions. M21 taught "the bank pays
   you for using your money." M25 flips it: when you use someone else's
   money, YOU pay. Concept over computation: pay-back amounts are shown
   only as "more than you got" — no rates, no percentages, no "how much
   interest" questions.
   Callback: in M21 Kai learned the bank puts saved money to work
   "helping other people with their own plans" — this is where he finds
   out what that meant.
===================================================================== */
const VOCAB = {
  borrow:{term:"borrow", def:"To use someone else’s money (or thing) now, and give it back later. When you borrow money, you usually pay back MORE than you got."},
  loan:{term:"loan", def:"Money you borrow, with an agreement about when you will pay it back and how much extra (interest) you will pay for using it."}
};

const QUESTIONS = {
  "q251a":{type:"mc", prompt:"What does it mean to borrow money?", concept:"borrow", opts:[
    {t:"Use someone else’s money now and give it back later", ok:true, fb:"Right. The money is yours to use — for a while. The giving-back part is not optional."},
    {t:"Get money as a gift that you keep forever", ok:false, fb:"A gift stays with you. Borrowed money has to go back to whoever it came from."},
    {t:"Earn money by working", ok:false, fb:"Earning is money you keep because you worked for it. Borrowed money has to be paid back."}]},
  "q251b":{type:"mc", prompt:"Where does a bank get the money it lends out as loans?", concept:"loan", opts:[
    {t:"Partly from the money savers like Kai leave in the bank", ok:true, fb:"Right! This is what Module 21 meant by the bank “putting your money to work.” Kai’s savings helps make someone else’s loan possible."},
    {t:"It prints brand-new money for every loan", ok:false, fb:"Not the way to think about it here. A big part of what a bank lends comes from money that savers keep there."},
    {t:"From the fees it charges for paper statements", ok:false, fb:"Fees are small. The big pool the bank lends from is the money savers leave with it."}]},
  "q251c":{type:"tf", prompt:"True or false: a loan comes with an agreement about when you will pay it back.", answer:true, concept:"loan",
    good:"Right. A loan is not “pay back whenever.” There is an agreement — when, and how much — before you get the money.",
    bad:"A loan always comes with an agreement. You know WHEN you must pay it back, and how much, before you ever get the money."},
  "q252a":{type:"mc", prompt:"Kai SAVES $10 in the bank. Tavo BORROWS $10 from the bank. Who pays interest to whom?", concept:"loan", opts:[
    {t:"The bank pays Kai. Tavo pays the bank.", ok:true, fb:"Exactly. Same word, opposite directions. Whoever gets to USE the money pays the thank-you."},
    {t:"The bank pays both of them", ok:false, fb:"Only the saver gets paid. Tavo is using the bank’s money, so he is the one who pays."},
    {t:"Kai and Tavo both pay the bank", ok:false, fb:"Kai is letting the bank use his money — so the bank pays HIM. Only the borrower pays."}]},
  "q252b":{type:"tf", prompt:"True or false: if you borrow $10, you usually pay back exactly $10.", answer:false, concept:"borrow",
    good:"Right. You usually pay back more than $10. The extra is interest — the price of using someone else’s money.",
    bad:"Usually you pay back MORE than you borrowed. The extra is interest — this time going from you to whoever lent it."},
  "q252c":{type:"mc", prompt:"Why does borrowing usually make something cost more?", concept:"borrow", opts:[
    {t:"You pay the price, plus interest for using someone else’s money", ok:true, fb:"Right. A $10 net paid for with a loan ends up costing more than $10 by the time it is all paid back."},
    {t:"Shops charge more if you borrowed", ok:false, fb:"The shop charges the normal price. The extra comes from the LOAN — the interest you pay the bank."},
    {t:"It doesn’t — borrowing is free", ok:false, fb:"Borrowing money is almost never free. The interest you pay back is what makes it cost more."}]},
  "q253a":{type:"mc", prompt:"What should Kai ask himself BEFORE borrowing?", concept:"borrow", opts:[
    {t:"“Can I pay it back on time — and is this worth paying extra for?”", ok:true, fb:"Right. Two questions: can I really pay it back, and is having it NOW worth paying more than the price?"},
    {t:"“Will they let me?”", ok:false, fb:"Being allowed to borrow is not the same as it being a good idea. Ask: can I pay it back, and is it worth the extra?"},
    {t:"“How fast can I spend it?”", ok:false, fb:"That is the question that gets people in trouble. Ask first whether you can pay it back and whether it is worth the extra."}]},
  "q253c":{type:"mc", prompt:"Kai wants a new sail. He could borrow now, or save for a few more weeks. Why is saving usually the better choice for something like this?", concept:"borrow", opts:[
    {t:"Saving costs nothing extra — and his savings even grows with interest while he waits", ok:true, fb:"Right. Waiting a few weeks is free. Borrowing would mean paying interest instead of earning it."},
    {t:"Saving is faster than borrowing", ok:false, fb:"Borrowing is actually faster! That is its one advantage. But it costs extra — saving does not."},
    {t:"Banks never lend money for sails", ok:false, fb:"They might! The reason to wait is cost: borrowing means paying interest, saving means earning it."}]},
  "q253b":{type:"mc", transfer:true, prompt:"Mika lets Kai use her fishing rod for a week. When he gives it back, he adds a fish as thanks. Who borrowed, and what is the fish like?", concept:"borrow", opts:[
    {t:"Kai borrowed the rod — and the fish is like the interest a borrower pays", ok:true, fb:"Exactly. Kai used something that was not his, gave it back, and added a little extra for the use of it. That is the whole shape of a loan."},
    {t:"Mika borrowed — the fish was hers", ok:false, fb:"Mika owns the rod. Kai is the one who used it and gave it back, so Kai borrowed."},
    {t:"Nobody borrowed — it was a trade", ok:false, fb:"In a trade, things swap for good. Here the rod went BACK to Mika. Using something and returning it is borrowing."}]}
};

const CFG = {
  n:25, title:"Borrowing", homeSub:"Four short lessons. Using someone else’s money — and what it costs.",
  pool:["q251a","q251b","q251c","q252a","q252b","q252c","q253a","q253c"], transfer:"q253b",
  quest:"You learned what it means to borrow, why a loan costs more than the price, and when waiting beats borrowing.",
  failKeys:"The keys: borrowing means using someone else’s money and paying it back, a loan comes with an agreement, and the borrower pays interest — so it usually costs more than the price.",
  badge:" · Credit block begins 🔑",
  nextFile:"module-26-debt.html",
  passStory:'<p><strong>You now own:</strong> borrow and loan — and the other half of interest.</p>'+
    '<p>Tavo got his loan and fixed his boat. Every week at the market he pays a little of it back, and Kai watches him check it off.</p>'+
    '<p>"What happens," Kai asks one day, "if someone borrows and then… can’t pay it back?"</p>'+
    '<p>Tavo stops smiling for a second. "That," he says, "is the part nobody puts on the poster."</p>'+
    '<p class="muted">Module 26: Debt.</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about borrowing, loans, or why the borrower pays interest — or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 25 (Borrowing) of a financial-literacy app — the first module of the Credit block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, buy, sell, pay, earn, spend, need, save, goal, percent, bank, deposit, withdraw, balance, checking, savings, transaction, notification, interest, grow, fee, overdraft, PIN, scam, budget, cushion. "+
  "From THIS module: borrow (use someone else's money or thing now and give it back later), loan (money you borrow, with an agreement about when you pay it back and how much extra you pay), and lend (the everyday verb for the other side). "+
  "Core ideas: interest runs both ways — the bank pays savers, borrowers pay whoever lent the money, so borrowing usually makes things cost more than the price; the bank lends out money that savers leave there (this is what 'the bank puts your money to work' meant in Module 21); before borrowing ask 'can I pay it back on time, and is having it now worth paying extra?'; saving up is usually cheaper for wants, while borrowing can make sense for a real need that cannot wait or something that helps you keep earning. "+
  "TEACHING STYLE: concepts over calculations. Never calculate interest, a rate, a percentage, or a payment amount, even if asked. Say 'more than you borrowed' instead of a number. If asked how much, explain warmly that the exact math comes much later. "+
  "STRICT RULES: never use these words (later modules): lender (say 'the bank' or 'whoever lends'), credit card, credit score, debt, default, APR, interest rate, minimum payment, invest, stock, tax, insurance. You may say 'credit' only as the name of this section of the app. If the learner uses a later word, answer briefly in plain words and say it is coming later. Never encourage a child to borrow money. "+
  "Story context: a poster at the trading post said 'IF YOU BORROW $10 TODAY, PAY BACK $12 AT HARVEST'. Tavo's boat engine broke, and without the boat he cannot fish or earn, so he took a loan from the bank to fix it and pays a little back each week. Kai learned that his own savings is part of what the bank lends out. Kai decided to keep saving for his sail instead of borrowing. "+
  "Never repeat a failed explanation — switch analogies (a borrowed fishing rod returned with a fish, a library book, using a friend's bike). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple WHY or WHO question and wait.";
//@@LESSONS
/* =====================================================================
   SIMULATOR — M25 has no balances. The visual is a money FLOW: who
   hands money to whom, and which direction the interest goes.
===================================================================== */
function flow(parts){ return '<div class="flow">'+parts.map(p=>p==='→'?'<span>→</span>':'<span class="pill">'+p+'</span>').join('')+'</div>'; }

/* =====================================================================
   LESSON 1 — The Poster
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · The poster</div>
    <div class="recap"><strong>Kai’s story so far:</strong> One whole month, run perfectly. Then a paper on the trading post board.</div>
    <div class="poster"><div class="big">IF YOU BORROW $10 TODAY…</div><div class="small">…pay back $12 at harvest. Ask at FinLit Bank.</div></div>
    <div class="card"><p>Kai reads it twice. "So someone gives me $10… and later I give them $12? Why would anybody do that?"</p>
    <p>Tavo is standing right behind him, looking at the same poster. "I might," he says quietly.</p></div>
    <button onclick="next()">Why would Tavo?</button>`),
  ()=>show(`<div class="kicker">Lesson 1</div>
    <div class="scene">🚤💥<div class="cap">Tavo’s boat engine broke. No boat, no fishing. No fishing, no earning.</div></div>
    <div class="card"><p>Tavo has $10 saved. The repair costs $30. If he waits to save the rest, he cannot fish — so he cannot earn — so he can never save the rest.</p>
    <p>So he is thinking about using someone else’s money now, and giving it back later. That is called <strong>borrowing</strong>.</p></div>
    <button onclick="earnWord('borrow');next()">New word: borrow</button>`),
  ()=>show(`<div class="kicker">Lesson 1 · Where the money comes from</div>
    <div class="card"><p>Tavo goes to the bank. They agree: the bank will lend him $20 now, and he will pay it back a little each week, plus some extra, by harvest.</p>
    <p>Money you borrow, with an agreement like that, is called a <strong>loan</strong>.</p>
    <p>And here is the part that makes Kai stop in his tracks. Remember Module 21 — the bank “puts your money to work, helping other people with their own plans”?</p></div>
    ${flow(["Kai saves","→","the bank","→","lends to Tavo"])}
    <div class="card" style="margin-top:12px"><p style="margin:0"><strong>This is what it meant.</strong> Money savers leave in the bank is part of what the bank lends out.</p></div>
    <button onclick="earnWord('loan');next()">New word: loan</button>`),
  ()=>renderMC("q251a", next),
  ()=>renderMC("q251b", next),
  ()=>renderTF("q251c", next),
];

/* =====================================================================
   LESSON 2 — Interest, Flipped
===================================================================== */
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · Interest, flipped</div>
    <div class="recap"><strong>So far:</strong> borrowing is using someone else’s money. A loan comes with an agreement.</div>
    <div class="card"><p>Kai has seen interest before. The bank pays <em>him</em> a little thank-you, because it gets to use his money.</p>
    <p>Now flip it around. Tavo is using the <em>bank’s</em> money. So who pays the thank-you this time?</p></div>
    <button onclick="next()">Tavo does</button>`),
  ()=>show(`<div class="kicker">Lesson 2</div>
    <div class="compare">
      <div class="box win"><div class="n">Kai SAVES $10</div><div class="v">gets back more</div><div class="d">The bank pays Kai interest</div></div>
      <div class="box" style="border-color:var(--shell)"><div class="n">Tavo BORROWS $10</div><div class="v">pays back more</div><div class="d">Tavo pays the bank interest</div></div>
    </div>
    <div class="card"><p>Same word, opposite directions. <strong>Whoever gets to use the money pays the thank-you.</strong></p>
    <p>That is why the poster said borrow $10, pay back $12. The extra is interest — the price of using money that is not yours.</p>
    <p>So borrowing makes things cost more than their price. The $30 boat repair will cost Tavo <em>more</em> than $30 by the time he is done.</p></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q252a", next),
  ()=>renderTF("q252b", next),
  ()=>renderMC("q252c", next),
];

/* =====================================================================
   LESSON 3 — Borrow or Wait? (sorting simulator)
   The rule of thumb taught: a real need that cannot wait, or something
   that helps you keep earning → borrowing MIGHT make sense. A want you
   could save for → wait and save (free, and savings grows).
===================================================================== */
const CASES=[
  {t:"Kai wants sweet cakes for everyone at the market this week.", borrow:false,
   why:"A want, and a small one. Paying extra for cakes makes no sense — wait and use wants money from the budget."},
  {t:"Tavo’s boat engine broke. Without the boat he cannot fish or earn anything.", borrow:true,
   why:"A real need, and fixing it lets him keep earning — which is how he pays the loan back. This is when borrowing can make sense."},
  {t:"Kai sees a fancy hat he wants right now.", borrow:false,
   why:"A want that can wait. Borrowing would make the hat cost more than its price. Save up instead."},
  {t:"A family’s roof is leaking, and storm season starts next week.", borrow:true,
   why:"A real need that cannot wait. Paying a bit extra to fix it now can be worth it — as long as they can pay it back."},
  {t:"Kai has $21 for his $30 sail. A few more weeks of saving would cover it.", borrow:false,
   why:"He is almost there! Waiting a few weeks is free, and his savings even grows while he waits. Borrowing would mean paying interest instead."}
];
const L3=[
  ()=>show(`<div class="kicker">Lesson 3 · Borrow or wait?</div>
    <div class="recap"><strong>So far:</strong> the borrower pays interest, so borrowing usually costs more than the price.</div>
    <div class="card"><p>Kai thinks about his sail. He could borrow and have it this week…</p>
    <p>Rana gives him the two questions to ask before borrowing <em>anything</em>:</p>
    <p style="text-align:center; font-size:18px"><strong>Can I pay it back on time?<br>Is having it NOW worth paying extra?</strong></p>
    <p>For a want you could save for, the answer to the second one is almost always no. For a real need that cannot wait — or something that keeps you earning — it can be yes.</p></div>
    <button onclick="next()">Sort five situations</button>`),
  ()=>{
    let i=0;
    function draw(){
      if(i>=CASES.length){ addXP(6); next(); return; }
      const c=CASES[i];
      show(`<div class="kicker">Borrow or wait? · ${i+1} of ${CASES.length}</div>
        <div class="item">${c.t}</div>
        <div class="sortbar"><button class="wait" id="sWait">🫙 Wait &amp; save</button><button class="bor" id="sBor">🤝 Borrowing might make sense</button></div>
        <div id="fb"></div><div id="cont"></div>`);
      let done=false;
      function pick(saysBorrow){
        if(done) return;
        const ok = saysBorrow===c.borrow;
        document.getElementById("fb").innerHTML='<div class="feedback '+(ok?'good':'bad')+'">'+(ok?'Right — ':'Think again. ')+c.why+'</div>';
        revealFB();
        if(ok){
          done=true; addXP(1);
          document.getElementById("sWait").disabled=true; document.getElementById("sBor").disabled=true;
          document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<CASES.length-1?"Next":"Done")+'</button>';
          window._n=()=>{ i++; draw(); };
          revealFB();
        }
      }
      document.getElementById("sWait").onclick=()=>pick(false);
      document.getElementById("sBor").onclick=()=>pick(true);
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 3 · Kai decides</div>
    <div class="card"><p>Kai keeps saving for his sail. A few more weeks, no extra cost — and the bank keeps paying <em>him</em> a little while he waits.</p>
    <p>Tavo takes his loan, fixes his boat, and is back on the water by Friday. Both of them made the right call — for different reasons.</p></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q253a", next),
  ()=>renderMC("q253c", next),
];
const META=[
  {title:"The Poster", sub:"Borrow $10, pay back $12?", emoji:"📜"},
  {title:"Interest, Flipped", sub:"Who pays whom — and why", emoji:"🔄"},
  {title:"Borrow or Wait?", sub:"Two questions before borrowing anything", emoji:"🤔"},
];
