//@@META
title=The Credit Challenge
file=module-29-credit-challenge.html
placeholder=Ask about lenders and minimum payments…
//@@CSS
  .gauge{background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:16px; margin-bottom:12px}
  .gauge .who{font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:var(--ink-soft); font-weight:700; margin-bottom:8px}
  .gtrack{position:relative; height:18px; border-radius:999px; background:linear-gradient(90deg,#a94436 0%,#e8b84b 50%,#2e7d5b 100%)}
  .gpin{position:absolute; top:-7px; width:6px; height:32px; background:var(--ink); border-radius:3px; transform:translateX(-50%); transition:left .5s ease; box-shadow:0 0 0 3px #fff}
  .gends{display:flex; justify-content:space-between; font-size:12px; color:var(--ink-soft); margin-top:8px; font-weight:600}
  .bill{background:#fffdf5; border:2px solid var(--sand-deep); border-radius:12px; padding:14px 16px; margin-bottom:12px; font-size:15px}
  .bill .tot{font-weight:700; font-size:17px; display:flex; justify-content:space-between; padding:4px 0}
  .bill .min{display:flex; justify-content:space-between; padding:4px 0; color:var(--shell); font-weight:700}
  .bill .by{font-size:13px; color:var(--bad); font-weight:700; margin-top:6px; text-align:right}
  .week{font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:#fff; background:var(--shell); display:inline-block; border-radius:6px; padding:2px 10px; margin-bottom:8px; font-weight:700}
  .stars{font-size:28px; letter-spacing:4px; text-align:center; margin:6px 0}
  .recaplist{list-style:none}
  .recaplist li{padding:8px 0; border-bottom:1px solid #eef2f0}
  .recaplist li:last-child{border-bottom:none}
  .coco{background:linear-gradient(135deg,#6b4a2f 0%,#3f2a19 100%); color:#f3ead8; border-radius:14px; padding:16px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:flex-end; min-height:96px}
  .coco .nm{font-weight:700}
  .coco .sm{font-size:11px; letter-spacing:.08em; text-transform:uppercase; opacity:.8}
//@@CONTENT
/* =====================================================================
   CONTENT — Module 29: The Credit Challenge (Credit block finale)
   Vocab: lender, minimum payment.
   Mirrors M24's structure: two short concept lessons, then a month of
   choices on Rana's pretend coconut-shell card, scored with stars and
   a trust gauge (from M28).
   Concept over computation: the minimum-payment trap is shown as two
   roads in words ("paid off this month" vs "still paying months later,
   paying much more in total") — no payoff math, no rates.
===================================================================== */
const VOCAB = {
  lender:{term:"lender", def:"Whoever lends the money — a bank, a shop, even a friend. The lender is the one who gets paid back."},
  minpay:{term:"minimum payment", def:"The smallest amount a credit card bill lets you pay by the due date without a late fee. Paying only this leaves the rest as debt that keeps growing."}
};

const QUESTIONS = {
  "q291a":{type:"mc", prompt:"What is a lender?", concept:"lender", opts:[
    {t:"Whoever lends the money — the one who gets paid back", ok:true, fb:"Right. It can be a bank, a shop, or a friend. If they lent it, they are the lender."},
    {t:"The person who borrows the money", ok:false, fb:"That is the borrower. The lender is on the other side — the one who hands the money over."},
    {t:"Anyone who has a savings account", ok:false, fb:"Having savings does not make you a lender. A lender is whoever lent the money in a loan."}]},
  "q291b":{type:"mc", prompt:"Tavo borrowed from FinLit Bank to fix his boat. Who is the lender?", concept:"lender", opts:[
    {t:"FinLit Bank", ok:true, fb:"Right. The bank lent the money, so the bank is the lender. Tavo is the borrower."},
    {t:"Tavo", ok:false, fb:"Tavo borrowed. The one who lent the money — the bank — is the lender."},
    {t:"The boat shop", ok:false, fb:"The shop just got paid for the repair. The money was lent by the bank, so the bank is the lender."}]},
  "q292a":{type:"mc", prompt:"What is a minimum payment?", concept:"minpay", opts:[
    {t:"The smallest amount you can pay by the due date without a late fee", ok:true, fb:"Right. It keeps you from a late fee — but everything you did not pay stays as debt."},
    {t:"The whole bill, paid in full", ok:false, fb:"That is paying in full — the best choice. The minimum is the smallest amount allowed."},
    {t:"A fee for having a card", ok:false, fb:"It is not a fee. It is the smallest payment the bill lets you make on time."}]},
  "q292b":{type:"mc", prompt:"Why is paying ONLY the minimum a trap?", concept:"minpay", opts:[
    {t:"The rest becomes debt that keeps growing", ok:true, fb:"Right. It feels like handling the bill, but the debt hangs around and grows, month after month."},
    {t:"Because the lender adds a late fee even when you pay the minimum on time", ok:false, fb:"Paying the minimum on time actually avoids the late fee. The trap is the debt left over, which keeps growing."},
    {t:"It isn’t — the minimum is all you ever owe", ok:false, fb:"You owe the whole bill. The minimum only keeps you out of late-fee trouble. The rest keeps growing."}]},
  "q292c":{type:"tf", prompt:"True or false: paying the minimum on time avoids a late fee, but the rest of the bill still grows with interest.", answer:true, concept:"minpay",
    good:"Right. No late fee — but the leftover is debt, and debt grows. That is exactly why it is a trap.",
    bad:"It is true. The minimum avoids the late fee, but what you did not pay stays as debt and keeps growing."},
  "q293a":{type:"mc", prompt:"What is the golden rule for using a credit card?", concept:"minpay", opts:[
    {t:"Only tap for things you could pay in full when the bill comes", ok:true, fb:"Right. If you can pay the whole bill by the due date, the card works for you. If not, it works against you."},
    {t:"Tap it whenever checking is low, so your balance never goes below zero", ok:false, fb:"That is the fastest way into debt. If checking is low, you probably cannot pay the whole bill later either."},
    {t:"Always pay the minimum", ok:false, fb:"The minimum is the trap! Pay the whole bill."}]},
  "q293b":{type:"mc", transfer:true, prompt:"A shop sign says: “Take this phone home TODAY — just $2 a week!” What should you ask before saying yes?", concept:"minpay", opts:[
    {t:"What is the total, for how long — and could I save up instead?", ok:true, fb:"Exactly. “Just $2 a week” is the minimum-payment shape: a small number that hides a big total. Look at the whole thing."},
    {t:"Nothing — $2 a week is tiny, so the phone must be a really good deal", ok:false, fb:"A small weekly number can hide a big total over a long time. That is exactly how the minimum-payment trap works."},
    {t:"What color phones do they have?", ok:false, fb:"Fun question, but first: what is the total, how long will it take, and could you save up instead?"}]}
};

const CFG = {
  n:29, title:"The Credit Challenge", homeSub:"Four short lessons. Two last words, then a month with your own (pretend) card.",
  pool:["q291a","q291b","q292a","q292b","q292c","q293a"], transfer:"q293b",
  quest:"You named the lender, saw through the minimum-payment trap, and ran a month on a card without owing a cent of interest.",
  failKeys:"The keys: the lender is whoever lends the money, the minimum payment avoids a late fee but leaves debt that grows, and the golden rule is to only tap a credit card for what you can pay in full.",
  badge:" · Credit block complete 🔑",
  nextFile:"module-30-your-first-job.html",
  passStory:'<p><strong>You now own:</strong> lender and minimum payment — and the whole Credit block.</p>'+
    '<p>Borrowing, debt, cards, scores. Kai knows how money can come in <em>before</em> it is earned, and what it costs when it does.</p>'+
    '<p>Rana tucks the coconut card in her pocket. "Every one of these lessons starts with money coming in. So let’s talk about that."</p>'+
    '<p>Down at the dock, Tavo is waving. "Kai! I need a real helper on the boat this season. Paid work. Interested?"</p>'+
    '<p class="muted">Module 30: Your First Job — a new block begins.</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about lenders, minimum payments, or using a card wisely — or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 29 (The Credit Challenge) of a financial-literacy app — the finale of the Credit block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, buy, sell, pay, earn, spend, need, save, goal, percent, bank, deposit, withdraw, balance, checking, savings, transaction, notification, interest, grow, fee, overdraft, PIN, scam, budget, cushion, borrow, loan, lend, owe, debt, debit card, credit card, credit score, due date. "+
  "From THIS module: lender (whoever lends the money and gets paid back — a bank, a shop, a friend) and minimum payment (the smallest amount a credit card bill lets you pay by the due date without a late fee; paying only that leaves the rest as debt that keeps growing, so you pay much more and for much longer). Golden rule: only tap a credit card for things you could pay for in full when the bill comes, and pay the whole bill by the due date. "+
  "TEACHING STYLE: concepts over calculations. Never calculate interest, rates, percentages, or how long payoff takes. Say 'much more' and 'much longer' instead of numbers. "+
  "STRICT RULES: never use these words (later modules): APR, interest rate, credit limit, credit utilization, credit report, bankruptcy, collections, paycheck, income, tax, invest, stock, insurance. If the learner uses a later word, answer briefly in plain words and say it is coming later. Never encourage a child to get or use a real credit card; Kai's card here is pretend. "+
  "Story context: Rana gave Kai a pretend card cut from a coconut shell to practice. The learner ran a month: waited on a $40 hat he could not pay for in full, paid for food with his debit card, paid a credit bill in full instead of the minimum, deleted a scam message asking for his card number and PIN, and the pretend credit score rose. "+
  "Never repeat a failed explanation — switch analogies (a small weekly number hiding a big total, a leaky bucket, a borrowed rod). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple WHY or WHETHER question and wait.";
//@@LESSONS
/* =====================================================================
   SIMULATOR — Rana's pretend coconut card + the M28 trust gauge.
   As in M24, only the correct choice advances; first-try picks earn a
   star and nudge the gauge up.
===================================================================== */
function gauge(pos, who){
  const p=Math.max(4,Math.min(96,pos));
  return '<div class="gauge"><div class="who">'+who+'</div><div class="gtrack"><div class="gpin" style="left:'+p+'%"></div></div>'+
    '<div class="gends"><span>less trusted</span><span>more trusted</span></div></div>';
}
function bill(owe,min,due){
  return '<div class="bill"><strong>Coconut Card · bill</strong>'+
    '<div class="tot"><span>You owe</span><span>$'+owe+'.00</span></div>'+
    '<div class="min"><span>Minimum payment</span><span>$'+min+'.00</span></div>'+
    '<div class="by">Due date: the '+due+'</div></div>';
}
const coco='<div class="coco"><div><div class="sm">pretend credit card</div><div class="nm">Coconut Card · Kai</div></div><div style="font-size:30px">🥥</div></div>';

/* =====================================================================
   LESSON 1 — The Lender
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · Two last words</div>
    <div class="recap"><strong>Kai’s story so far:</strong> Borrowing, debt, cards, and scores. Rana has one more test — and a card cut from a coconut shell.</div>
    ${coco}
    <div class="card"><p>"Before your month starts," Rana says, "two more words. First: in every loan there are two sides."</p>
    <p>Tavo was the <em>borrower</em>. FinLit Bank handed over the money. Whoever lends the money — a bank, a shop, even a friend — is the <strong>lender</strong>. The lender is the one who gets paid back.</p></div>
    ${more('<p>A lender takes a chance. It hands over money now and trusts that it will come back later.</p>'+
      '<p>That is why a lender looks at your credit score first. It is also why a lender usually asks for a little extra back: extra for waiting, and for the chance it takes.</p>'+
      '<p>When you lend a friend your pencil, you are the lender!</p>')}
    <button onclick="earnWord('lender');next()">New word: lender</button>`),
  ()=>renderMC("q291a", next),
  ()=>renderMC("q291b", next),
];

/* =====================================================================
   LESSON 2 — The Minimum Payment Trap
===================================================================== */
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · The small number</div>
    <div class="recap"><strong>So far:</strong> the lender is whoever lends the money.</div>
    ${bill(30,3,"15th")}
    <div class="card"><p>Nilo’s newest bill has something Kai has not noticed before: <strong>two</strong> numbers.</p>
    <p>"You owe $30." And underneath, much smaller: "Minimum payment $3."</p>
    <p>The <strong>minimum payment</strong> is the smallest amount the bill lets you pay by the due date without a late fee.</p>
    <p>"Only three dollars?" Kai says. "That sounds easy."</p>
    <p>Rana shakes her head slowly. "That’s exactly why it’s a trap."</p></div>
    ${more('<p>Why would a bill show such a small number? Paying the minimum keeps you from a late fee this month. That part is true.</p>'+
      '<p>But the rest stays as debt, and debt grows. The slower you pay, the more extra goes to the lender.</p>'+
      '<p>The minimum is the <strong>least</strong> you may pay. It is not what you <strong>should</strong> pay.</p>')}
    <button onclick="earnWord('minpay');next()">New word: minimum payment</button>`),
  ()=>show(`<div class="kicker">Lesson 2 · Two roads</div>
    <div class="compare">
      <div class="box win"><div class="n">Pay the whole $30</div><div class="v">done</div><div class="n" style="margin-top:6px">this month · no interest</div></div>
      <div class="box" style="border-color:var(--bad); background:#faf0ee"><div class="n">Pay only the $3</div><div class="v">still paying</div><div class="n" style="margin-top:6px">months later · pays much more in total</div></div>
    </div>
    <div class="card"><p>Pay the minimum and there is no late fee. But everything he did <em>not</em> pay becomes <strong>debt</strong> — and from Module 26, you know what debt does. It grows, while the small payments barely keep up.</p>
    <p style="text-align:center; font-size:18px"><strong>The small number is not what you owe. The big number is.</strong></p></div>
    ${more('<p>Think of a leaky bucket. Each small payment scoops a little water out. But the debt keeps dripping more back in.</p>'+
      '<p>Pay only the minimum, and the bucket takes a long, long time to empty. Pay the whole bill, and it is empty today.</p>'+
      '<p>That is why grown-ups who handle cards well try to pay the big number every time.</p>')}
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q292a", next),
  ()=>renderMC("q292b", next),
  ()=>renderTF("q292c", next),
];

/* =====================================================================
   LESSON 3 — One Month, One Card (challenge)
===================================================================== */
const CMONTH=[
  {wk:"Week 1 · The hat", story:"Kai sees a fancy $40 hat. He has $20 in checking. The coconut card would let him take it home today.", opts:[
    {t:"Wait and save — he could not pay the whole bill for it", ok:true, fb:"Right. The golden rule: only tap the card for what you could pay in full when the bill comes. $20 cannot cover $40."},
    {t:"Tap the coconut card — the bill is weeks away", ok:false, fb:"When the bill comes, he still will not have $40. Whatever he cannot pay becomes debt. Wait and save."},
    {t:"Use his debit card", ok:false, fb:"Debit spends from checking — $20 is less than $40. That is an overdraft. Wait and save."}]},
  {wk:"Week 2 · Groceries", story:"Kai needs $8 of food for the week. He has $20 in checking.", opts:[
    {t:"Pay with his debit card — he has enough", ok:true, fb:"Right. A need, money he already has, a look at the balance first. No borrowing needed."},
    {t:"Put it on the coconut card and pay just the minimum later", ok:false, fb:"Paying only the minimum turns an $8 need into debt that grows. He has the money — just use it."},
    {t:"Skip food to save money", ok:false, fb:"Food is a need! Needs come first in the budget. He can afford it."}]},
  {wk:"Week 3 · Card for a kite", story:"Kai taps the coconut card for a $6 kite. He has $12 in checking, so he knows he can pay it off when the bill comes.", opts:[
    {t:"Good use — he can pay the whole thing when the bill comes", ok:true, fb:"Right. That is the card working FOR him: tap now, pay in full later, no interest."},
    {t:"Bad use — a card should never be used", ok:false, fb:"Cards are not bad by themselves. Tapping for something you can pay in full is exactly how to use one well."},
    {t:"Good use — and now he can tap for $50 more", ok:false, fb:"Not if he cannot pay it in full! The golden rule applies every single tap."}]},
  {wk:"Week 4 · The bill", story:"The coconut card bill arrives: <strong>You owe $6. Minimum payment $1. Due the 15th.</strong> Kai has $12 in checking.", opts:[
    {t:"Pay the whole $6 by the due date", ok:true, fb:"Right. Whole bill, on time. No interest, no late fee — and his pretend score goes up."},
    {t:"Pay the $1 minimum — it’s easier", ok:false, fb:"That is the trap! The other $5 would become debt and grow. He has enough to pay it all."},
    {t:"Pay it all next month", ok:false, fb:"Missing the due date means a late fee, interest, and a lower score. Pay by the 15th."}]},
  {wk:"Week 4 · A message", story:"A text: “COCONUT CARD ALERT: suspicious activity! Confirm your card number and PIN here within 1 hour.”", opts:[
    {t:"Delete it and check through the card’s real app", ok:true, fb:"Right. It asks for his PIN and rushes him: a scam. If he is worried, he goes to the lender the way he already knows."},
    {t:"Reply with his card number — but not the PIN", ok:false, fb:"Still giving a trickster information! Nothing goes back to a surprise message. Delete it."},
    {t:"Tap the link to check", ok:false, fb:"The link could lead straight to the trickster. Use the app or number he already knows."}]}
];
let cStars=0, cPos=50;
const L3=[
  ()=>{ cStars=0; cPos=50;
    show(`<div class="kicker">Lesson 3 · One month, one card</div>
    <div class="recap"><strong>So far:</strong> pay the big number, not the small one.</div>
    ${coco}
    ${gauge(cPos,"Kai’s pretend credit score")}
    <div class="card"><p>Rana hands Kai the coconut card. "It’s pretend — but the choices are real. Five moments. Let’s see where your score ends up."</p>
    <p>Get each one right the first time to earn a ⭐.</p></div>
    <button onclick="next()">Start the month</button>`); },
  ()=>{
    let i=0;
    function draw(){
      if(i>=CMONTH.length){ addXP(6); next(); return; }
      const w=CMONTH[i];
      const shuffled=w.opts.map((o,k)=>({o,k})).sort(()=>Math.random()-.5);
      show(`<div class="week">${w.wk}</div>
        ${gauge(cPos,"Kai’s pretend credit score")}
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
            done=true; if(first){ cStars++; addXP(1); cPos+=8; }
            document.querySelector(".gauge").outerHTML=gauge(cPos,"Kai’s pretend credit score");
            document.querySelectorAll("#opts .opt").forEach(b=>b.disabled=true);
            document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<CMONTH.length-1?"Next":"See the month")+'</button>';
            window._n=()=>{ i++; draw(); };
            revealFB();
          } else { first=false; btn.disabled=true; }
        };
      });
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 3 · Kai’s month</div>
    ${gauge(cPos,"Kai’s pretend credit score")}
    <div class="stars">${"⭐".repeat(cStars)}${"☆".repeat(CMONTH.length-cStars)}</div>
    <p class="muted" style="text-align:center">${cStars} of ${CMONTH.length} on the first try</p>
    <div class="card"><ul class="recaplist">
      <li>✅ <strong>Zero interest paid.</strong> The bill was paid in full, by the due date.</li>
      <li>✅ <strong>Zero debt.</strong> The hat waited; the minimum was ignored.</li>
      <li>✅ <strong>The right card for the job.</strong> Debit for money he had; credit only for what he could pay in full.</li>
      <li>✅ <strong>One scam, deleted.</strong></li>
    </ul></div>
    ${more('<p>Kai’s month shows the golden rule: only tap a credit card for what you could pay in full when the bill comes.</p>'+
      '<p>Used that way, a card costs nothing extra and helps build a good credit score. Used the other way, small buys turn into debt that grows.</p>'+
      '<p>The card is the same either way. The choices make the difference.</p>')}
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q293a", next),
];
const META=[
  {title:"The Lender", sub:"Every loan has two sides", emoji:"🤝"},
  {title:"The Small Number", sub:"Why the minimum payment is a trap", emoji:"🪤"},
  {title:"One Month, One Card", sub:"A pretend card. Real choices.", emoji:"🥥"},
];
