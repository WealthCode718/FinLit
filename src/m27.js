//@@META
title=Paying with Cards
file=module-27-paying-with-cards.html
placeholder=Ask about debit and credit cards…
//@@CSS
  .cards{display:flex; gap:10px; margin-bottom:14px}
  .pcard{flex:1; border-radius:14px; padding:14px 12px; color:#fff; min-height:110px; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 4px 14px rgba(14,27,44,.2)}
  .pcard.deb{background:linear-gradient(135deg,#123a3f 0%,#1f5a60 100%)}
  .pcard.cred{background:linear-gradient(135deg,#c96f4a 0%,#8f4428 100%)}
  .pcard .chip{width:28px; height:20px; border-radius:4px; background:var(--gold); opacity:.9}
  .pcard .nm{font-weight:700; font-size:15px}
  .pcard .sm{font-size:11px; opacity:.8; letter-spacing:.06em; text-transform:uppercase}
  .bill{background:#fffdf5; border:2px solid var(--sand-deep); border-radius:12px; padding:14px 16px; margin-bottom:12px; font-size:15px}
  .bill .row{display:flex; justify-content:space-between; padding:4px 0; border-bottom:1px dashed var(--sand-deep)}
  .bill .row:last-of-type{border-bottom:none}
  .bill .tot{font-weight:700; font-size:17px; border-top:2px solid var(--ink); margin-top:6px; padding-top:6px; display:flex; justify-content:space-between}
  .bill .by{font-size:13px; color:var(--bad); font-weight:700; margin-top:6px; text-align:right}
  .sortbar .deb{background:var(--ink)}
  .sortbar .cred{background:var(--shell)}
//@@CONTENT
/* =====================================================================
   CONTENT — Module 27: Paying with Cards
   Vocab: debit card, credit card.
   First time cards appear in the app (deliberately held back through
   the Banking season). The whole module is one contrast:
     debit card  → spends YOUR money, from checking, right now
     credit card → spends the BANK'S money; every tap is a small loan;
                   a bill arrives later
   "The date on the bill" is SHOWN here and NAMED ("due date") in M28.
   No interest math: "pay the whole bill on time → usually no interest;
   pay part → the rest becomes debt that grows" (callback to M26).
===================================================================== */
const VOCAB = {
  debitcard:{term:"debit card", def:"A card connected to your checking account. When you pay with it, the money leaves YOUR checking right away — like a withdrawal you can tap."},
  creditcard:{term:"credit card", def:"A card that pays with the BANK’S money. Every tap is a small loan. A bill comes later, and if you do not pay all of it, the rest becomes debt with interest."}
};

const QUESTIONS = {
  "q271a":{type:"mc", prompt:"Kai pays $3 for bread with his debit card. Where does the money come from?", concept:"debitcard", opts:[
    {t:"Straight out of his own checking account, right away", ok:true, fb:"Right. A debit card spends money Kai already has. His checking balance drops by $3 the moment he pays."},
    {t:"From the bank, as a small loan", ok:false, fb:"That is how a CREDIT card works. A debit card uses Kai’s own money from checking."},
    {t:"From his savings account", ok:false, fb:"A debit card is connected to checking — the spend-soon account. Savings stays put."}]},
  "q271b":{type:"tf", prompt:"True or false: you can still have an overdraft with a debit card if you do not look at your balance.", answer:true, concept:"debitcard",
    good:"Right. A debit card spends from checking, so Module 22’s rule still applies: look before you pay.",
    bad:"It can happen! A debit card takes money from checking — and if the price is bigger than the balance, that is an overdraft. Look first."},
  "q272a":{type:"mc", prompt:"What really happens each time Nilo taps his credit card?", concept:"creditcard", opts:[
    {t:"The bank pays for him — it is a small loan he must pay back", ok:true, fb:"Right. Every tap is borrowing. It just does not feel like it, because his checking does not move."},
    {t:"Money leaves his checking account right away", ok:false, fb:"That is a debit card. With a credit card, his checking does not change — the bank pays, and he owes the bank."},
    {t:"Nothing — the card is free money", ok:false, fb:"Nothing is free here. Every tap is a loan that shows up on a bill later."}]},
  "q272b":{type:"mc", prompt:"Why can a credit card make it easy to spend too much?", concept:"creditcard", opts:[
    {t:"Checking does not drop when you tap, so it feels free", ok:true, fb:"Right. That was exactly Nilo’s trap. No number dropped, so it felt free — until the bill came."},
    {t:"Shops add a little extra to the price every time you pay with a card", ok:false, fb:"The price is the same. The danger is that the spending is hidden until the bill arrives."},
    {t:"It can’t — credit cards stop you from spending", ok:false, fb:"They make spending feel easier, not harder. That is why they need extra care."}]},
  "q272c":{type:"tf", prompt:"True or false: paying with a credit card is a kind of borrowing.", answer:true, concept:"creditcard",
    good:"Right. Every tap is a small loan from the bank. Module 25’s questions apply: can I pay it back, and is it worth it?",
    bad:"It really is borrowing. The bank pays for you now, and you owe the bank until you pay the bill."},
  "q273a":{type:"mc", prompt:"Nilo’s credit card bill says $18. What is the best way to pay it?", concept:"creditcard", opts:[
    {t:"Pay the whole $18 by the date on the bill", ok:true, fb:"Right. Pay it all, on time, and there is usually no interest at all. The loan came and went for free."},
    {t:"Pay a little now and the rest someday", ok:false, fb:"Whatever is left over becomes debt — and from Module 26, you know debt grows. Pay the whole bill if you can."},
    {t:"Wait for next month’s bill and pay both together", ok:false, fb:"Paying late usually means a late fee AND interest. Pay the whole bill by the date on it."}]},
  "q273c":{type:"mc", prompt:"Which card spends money you already have?", concept:"debitcard", opts:[
    {t:"The debit card", ok:true, fb:"Right. Debit = your own money, from checking, right now."},
    {t:"The credit card", ok:false, fb:"A credit card spends the bank’s money — it is a loan. The debit card is the one that uses money you already have."},
    {t:"Both of them", ok:false, fb:"Only one does. Debit uses your checking. Credit borrows from the bank."}]},
  "q273b":{type:"mc", transfer:true, prompt:"The bread shop lets Kai take bread now and write his name in a book. At the end of the month, he pays for everything in the book. What is this most like?", concept:"creditcard", opts:[
    {t:"A credit card — buy now, and a bill comes later", ok:true, fb:"Exactly. No plastic, but the same shape: the shop trusts him now, and the book is his bill. It is still borrowing."},
    {t:"A debit card — the money leaves Kai’s account each time he takes bread", ok:false, fb:"Nothing leaves Kai’s money right away here. He takes the bread now and pays later. That is the credit shape."},
    {t:"Savings — Kai is keeping his money", ok:false, fb:"He is not saving it — he already owes it. At the end of the month the whole book has to be paid."}]}
};

const CFG = {
  n:27, title:"Paying with Cards", homeSub:"Four short lessons. Two cards that look the same and work completely differently.",
  pool:["q271a","q271b","q272a","q272b","q272c","q273a","q273c"], transfer:"q273b",
  quest:"You learned the difference between a debit card and a credit card, and how to handle the bill.",
  failKeys:"The keys: a debit card spends your own money from checking right away, a credit card spends the bank’s money (every tap is a small loan), and paying the WHOLE bill on time is how you avoid interest.",
  nextFile:"module-28-credit-score.html",
  passStory:'<p><strong>You now own:</strong> debit card and credit card — and you know which one is borrowing.</p>'+
    '<p>Tavo walks up waving a letter. "The bank said yes to a new net loan — and fast! They said I have a good record."</p>'+
    '<p>Nilo frowns. "They told me no last week. Said my record was… not so good."</p>'+
    '<p>Kai looks from one to the other. "What record? Who is keeping score?"</p>'+
    '<p class="muted">Module 28: Your Credit Score.</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about debit cards, credit cards, or the bill — or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 27 (Paying with Cards) of a financial-literacy app, in the Credit block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, buy, sell, pay, earn, spend, need, save, goal, percent, bank, deposit, withdraw, balance, checking, savings, transaction, notification, interest, grow, fee, overdraft, PIN, scam, budget, cushion, borrow, loan, lend, owe, debt. "+
  "From THIS module: debit card (connected to checking; money leaves your own account right away; you can still overdraft if you don't look) and credit card (pays with the bank's money; every tap is a small loan; a bill arrives later; pay the WHOLE bill by the date on it and there is usually no interest; pay only part and the rest becomes debt that grows). Key danger: a credit card does not feel like spending because checking does not go down. Both cards are protected by a PIN that stays secret. "+
  "TEACHING STYLE: concepts over calculations. Never calculate interest, rates, percentages or payoff time. "+
  "STRICT RULES: never use these words (later modules): lender, credit score, due date, minimum payment, credit limit, APR, interest rate, grace period, bankruptcy, collections, invest, stock, tax, insurance. Say 'the date on the bill' instead of due date. If the learner uses a later word, answer briefly in plain words and say it is coming later. Never encourage a child to get or use a credit card; say that is for adults, and always with care. "+
  "Story context: Nilo showed Kai two cards that look alike. His debit card spends his own checking money; his credit card is how he kept tapping for small things after the jacket without feeling it, until an $18 bill arrived. The learner sorted facts into debit or credit. "+
  "Never repeat a failed explanation — switch analogies (a shop's name-book paid at the end of the month, a borrowed rod, a key to your own tin vs. a note that says 'the bank will pay'). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple 'debit or credit?' question and wait.";
//@@LESSONS
/* =====================================================================
   SIMULATOR — two side-by-side cards, a checking balance that moves
   (debit) or does not (credit), and a monthly bill.
===================================================================== */
function money(n){ return (n<0?"−":"") + "$" + Math.abs(n).toFixed(2); }
function twoCards(){
  return '<div class="cards">'+
    '<div class="pcard deb"><div class="chip"></div><div><div class="sm">spends your money</div><div class="nm">Debit card</div></div></div>'+
    '<div class="pcard cred"><div class="chip"></div><div><div class="sm">spends the bank’s money</div><div class="nm">Credit card</div></div></div>'+
    '</div>';
}
function acctCard(bal,note){
  return '<div class="acct"><div class="lbl">Checking</div><div class="bal">'+money(bal)+'</div><div class="who">'+note+'</div></div>';
}
function billCard(){
  return '<div class="bill"><strong>FinLit Bank · Credit card bill</strong>'+
    '<div class="row"><span>Sweet cakes</span><span>$4.00</span></div>'+
    '<div class="row"><span>Hat</span><span>$6.00</span></div>'+
    '<div class="row"><span>Snacks</span><span>$3.00</span></div>'+
    '<div class="row"><span>Kite string</span><span>$5.00</span></div>'+
    '<div class="tot"><span>You owe</span><span>$18.00</span></div>'+
    '<div class="by">Pay by the 15th</div></div>';
}

/* =====================================================================
   LESSON 1 — The Card That Spends Your Money
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · Two cards</div>
    <div class="recap"><strong>Kai’s story so far:</strong> Nilo is climbing out of debt. Now he holds up two cards that look almost exactly the same.</div>
    ${twoCards()}
    <div class="card"><p>"One spends MY money," Nilo says. "One spends the bank’s. From the outside, you can’t tell."</p>
    <p>Kai has used his phone to watch his money. He has never paid with a card.</p></div>
    <button onclick="next()">Start with the first one</button>`),
  ()=>show(`<div class="kicker">Lesson 1</div>
    ${acctCard(15,"Kai · before the bread")}
    <div class="card"><p>Rana gives Kai a card that is connected to his <strong>checking account</strong>. He taps it to pay $3 for bread.</p></div>
    ${acctCard(12,"Kai · right after tapping")}
    <div class="card"><p>The money left his own checking <strong>right away</strong> — like a withdrawal he can tap.</p>
    <p>That is a <strong>debit card</strong>. It spends money you already have. It needs his PIN, and everything from Modules 22 and 23 still applies: look before you pay, and keep the PIN secret.</p></div>
    <button onclick="earnWord('debitcard');next()">New word: debit card</button>`),
  ()=>renderMC("q271a", next),
  ()=>renderTF("q271b", next),
];

/* =====================================================================
   LESSON 2 — The Card That Spends the Bank's Money
===================================================================== */
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · The other card</div>
    <div class="recap"><strong>So far:</strong> a debit card spends your own money from checking, right away.</div>
    ${acctCard(20,"Nilo · before a week of tapping")}
    <div class="card"><p>Nilo taps his <em>other</em> card all week — sweet cakes, a hat, snacks, kite string.</p></div>
    ${acctCard(20,"Nilo · after a week of tapping")}
    <div class="card"><p>Kai stares. "It didn’t go down at all!"</p>
    <p>"That’s the trick," Nilo says. "This card doesn’t use my money. The <strong>bank</strong> pays. Every tap is a small loan."</p></div>
    <button onclick="next()">So what is it?</button>`),
  ()=>show(`<div class="kicker">Lesson 2</div>
    <div class="card"><p>That is a <strong>credit card</strong>. It pays with the bank’s money, and you pay the bank back later. <em>Credit</em> means the bank trusts you to pay it back.</p>
    <p>Here is the danger Nilo learned the hard way: <strong>because his checking never moved, it did not feel like spending.</strong> Four little taps, no number going down, no alarm bells.</p>
    <p>Every one of them was borrowing.</p></div>
    <button onclick="earnWord('creditcard');next()">New word: credit card</button>`),
  ()=>renderMC("q272a", next),
  ()=>renderMC("q272b", next),
  ()=>renderTF("q272c", next),
];

/* =====================================================================
   LESSON 3 — The Bill (+ debit-or-credit sort)
===================================================================== */
const FACTS=[
  {t:"Money leaves your checking the moment you tap.", credit:false, why:"Debit. It spends money you already have, right away."},
  {t:"A bill arrives later, listing everything you tapped.", credit:true, why:"Credit. The bank paid first; the bill is how you pay the bank back."},
  {t:"Every tap is a small loan.", credit:true, why:"Credit. The bank is lending you the money each time."},
  {t:"It can cause an overdraft if you do not look at your balance.", credit:false, why:"Debit. It spends from checking, so the look-before-you-pay rule still applies."},
  {t:"If you do not pay the whole bill, the rest becomes debt with interest.", credit:true, why:"Credit. Whatever is left unpaid is debt — and debt grows."},
  {t:"It only spends money you already have.", credit:false, why:"Debit. No borrowing involved."}
];
const L3=[
  ()=>show(`<div class="kicker">Lesson 3 · The bill</div>
    <div class="recap"><strong>So far:</strong> a credit card spends the bank’s money, and it does not feel like spending.</div>
    ${billCard()}
    <div class="card"><p>At the end of the month, the bill arrives. Every tap, added up. And a date: pay by the 15th.</p>
    <p>Nilo has a choice, and it decides everything:</p>
    <p><strong>Pay the whole bill by the date</strong> → usually no interest at all. The bank lent him the money for free.</p>
    <p><strong>Pay only part</strong> → whatever is left becomes <strong>debt</strong>, and from Module 26 you know what debt does. It grows.</p></div>
    <button onclick="next()">Debit or credit? Sort six facts</button>`),
  ()=>{
    let i=0;
    function draw(){
      if(i>=FACTS.length){ addXP(6); next(); return; }
      const f=FACTS[i];
      show(`<div class="kicker">Debit or credit? · ${i+1} of ${FACTS.length}</div>
        <div class="item">${f.t}</div>
        <div class="sortbar"><button class="deb" id="sDeb">Debit card</button><button class="cred" id="sCred">Credit card</button></div>
        <div id="fb"></div><div id="cont"></div>`);
      let done=false;
      function pick(saysCredit){
        if(done) return;
        const ok = saysCredit===f.credit;
        document.getElementById("fb").innerHTML='<div class="feedback '+(ok?'good':'bad')+'">'+(ok?'Right — ':'Not quite. ')+f.why+(ok?'':' Try again.')+'</div>';
        revealFB();
        if(ok){
          done=true; addXP(1);
          document.getElementById("sDeb").disabled=true; document.getElementById("sCred").disabled=true;
          document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<FACTS.length-1?"Next":"Done")+'</button>';
          window._n=()=>{ i++; draw(); };
          revealFB();
        }
      }
      document.getElementById("sDeb").onclick=()=>pick(false);
      document.getElementById("sCred").onclick=()=>pick(true);
    }
    draw();
  },
  ()=>renderMC("q273a", next),
  ()=>renderMC("q273c", next),
];
const META=[
  {title:"The Card That Spends Your Money", sub:"Debit: your checking, right away", emoji:"💳"},
  {title:"The Card That Spends the Bank’s", sub:"Credit: every tap is a small loan", emoji:"🏦"},
  {title:"The Bill", sub:"Pay it all, and sort debit from credit", emoji:"🧾"},
];
