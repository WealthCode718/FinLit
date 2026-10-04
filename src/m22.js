//@@META
title=Fees & Overdrafts
file=module-22-fees-and-overdrafts.html
placeholder=Ask about fees and overdrafts…
//@@CSS
  .acct.neg{background:linear-gradient(135deg,#a94436 0%,#7a2e25 100%)}
  .acct .zero{display:inline-block; margin-top:6px; font-size:12px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; background:rgba(255,255,255,.18); border-radius:6px; padding:2px 8px}
  .buyrow{background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:16px; text-align:center; margin-bottom:12px}
  .buyrow .it{font-size:40px; line-height:1.1}
  .buyrow .nm{font-size:18px; font-weight:700; margin-top:4px}
  .buyrow .pr{font-size:15px; color:var(--ink-soft)}
  .choice{display:flex; gap:10px; margin-bottom:10px}
  .choice button{flex:1}
  .choice .wait{background:#fff; color:var(--ink); border:2px solid var(--ink)}
//@@CONTENT
/* =====================================================================
   CONTENT — Module 22: Fees & Overdrafts
   Vocab: fee, overdraft.
   Concept over computation (continues M21's principle): the learner
   never calculates a fee. The skill tested is WHETHER a payment fits
   the balance, and WHY going below zero costs more than the price.
   Numbers stay whole and small so the only question is "enough or not?"
===================================================================== */
const VOCAB = {
  fee:{term:"fee", def:"Money a bank takes out of your account — for a service, or for breaking one of its rules. Interest adds money. A fee takes it away. Many fees can be avoided if you know the rules."},
  overdraft:{term:"overdraft", def:"When you spend or take out more than your balance, so it goes below zero. The bank covers the gap for a moment — and usually charges a fee for it."}
};

const QUESTIONS = {
  "q221a":{type:"mc", prompt:"What is a fee?", concept:"fee", opts:[
    {t:"Money the bank takes out, for a service or a broken rule", ok:true, fb:"Right. A fee is a charge. It makes your balance smaller, even though you did not buy anything."},
    {t:"A little extra the bank adds for keeping your money there", ok:false, fb:"That is interest — the opposite! Interest adds money. A fee takes money away."},
    {t:"Money you earn by working", ok:false, fb:"Earning brings money in. A fee sends money out — to the bank."}]},
  "q221b":{type:"mc", prompt:"Kai is charged $1 every month for a paper statement in the mail. What is the best way to stop that fee?", concept:"fee", opts:[
    {t:"Turn off paper statements and read it all on his phone", ok:true, fb:"Exactly. He already reads everything on his phone. Same information, no fee. Knowing the rule is what saved him."},
    {t:"Close his savings account, so the bank has fewer accounts to charge him for", ok:false, fb:"That would not touch the paper fee at all — and he would lose his interest. Fix the rule that causes the fee instead."},
    {t:"Nothing — fees can never be avoided", ok:false, fb:"Many fees CAN be avoided once you know why they happen. This one ends the day Kai switches to reading on his phone."}]},
  "q221c":{type:"tf", prompt:"True or false: interest and fees both add money to your account.", answer:false, concept:"fee",
    good:"Right — they point in opposite directions. Interest adds a little. A fee takes some away.",
    bad:"Only interest adds. A fee is money the bank takes OUT. They point in opposite directions."},
  "q222a":{type:"mc", prompt:"What is an overdraft?", concept:"overdraft", opts:[
    {t:"Spending more than your balance, so it goes below zero", ok:true, fb:"Right. The balance does not just hit zero — it goes past it, and the bank has to cover the gap."},
    {t:"Having a lot of money in savings", ok:false, fb:"That is a great thing to have, but it is not an overdraft. An overdraft means your balance went below zero."},
    {t:"Any deposit bigger than $10", ok:false, fb:"Deposits make your balance bigger. An overdraft is when it goes the other way — all the way below zero."}]},
  "q222b":{type:"mc", prompt:"Why does an overdraft cost more than just the price of what you bought?", concept:"overdraft", opts:[
    {t:"A fee lands on top, and your next deposit must fill the gap first", ok:true, fb:"Right. You pay the price, then a fee, and then part of your next money is already used up before you even see it."},
    {t:"It doesn't — you only ever pay the price", ok:false, fb:"Look back at Kai's net. The price was $9, but going below zero added a $5 fee on top. The overdraft itself costs money."},
    {t:"Because the shop charges a higher price when your balance is below zero", ok:false, fb:"The shop charged the normal price. The extra came from the BANK, as an overdraft fee."}]},
  "q222c":{type:"tf", prompt:"True or false: if the bank lets a payment go through, that means you had enough money.", answer:false, concept:"overdraft",
    good:"Right — that is the trap. Some banks let a payment go through anyway, then charge a fee because you did NOT have enough.",
    bad:"That is the trap Kai fell into. Some banks let a payment go through even when the balance is too small — and then charge a fee for it."},
  "q223a":{type:"mc", prompt:"What is the best habit for never having an overdraft?", concept:"overdraft", opts:[
    {t:"Look at your balance before you pay for something", ok:true, fb:"Exactly. One look answers the only question that matters: is there enough? Kai’s phone makes that look take two seconds."},
    {t:"Pay first, check the balance at the end of the month", ok:false, fb:"By the end of the month the fee has already happened. The look has to come BEFORE the payment."},
    {t:"Only shop on weekends", ok:false, fb:"The day does not matter. What matters is looking at the balance before paying."}]},
  "q223c":{type:"mc", prompt:"Kai has $4 in checking. The sandals he wants cost $6. What should he do?", concept:"overdraft", opts:[
    {t:"Wait — save up until his balance covers the sandals", ok:true, fb:"Right. $4 is less than $6, so paying now would go below zero. Waiting costs nothing. An overdraft costs a fee."},
    {t:"Pay now and hope the bank lets it through", ok:false, fb:"Even if the bank lets it through, the balance goes below zero and a fee lands on top. Waiting is free."},
    {t:"Pay now — it is only $2 more than he has", ok:false, fb:"Being a little short is still being short. Below zero is below zero, and the fee does not care how small the gap was."}]},
  "q223b":{type:"mc", transfer:true, prompt:"The island library lets you take a book home for one week. If you bring it back late, you pay $1. What is that $1?", concept:"fee", opts:[
    {t:"A fee — a charge for a broken rule, and returning on time avoids it", ok:true, fb:"Exactly. Same shape as a bank fee: a rule, a charge for breaking it, and an easy way to never pay it."},
    {t:"Interest — the library is thanking you", ok:false, fb:"Interest adds money to YOU. This $1 goes from you to the library. That makes it a fee."},
    {t:"The price of the book — you pay a little at a time to keep reading it", ok:false, fb:"You are not buying the book — you bring it back. The $1 is only charged for being late. That is a fee."}]}
};

const CFG = {
  n:22, title:"Fees & Overdrafts", homeSub:"Four short lessons. Why going below zero costs more than the price.",
  pool:["q221a","q221b","q221c","q222a","q222b","q222c","q223a","q223c"], transfer:"q223b",
  quest:"You learned what a fee is, why an overdraft costs extra, and the one habit that prevents it.",
  failKeys:"The keys: a fee takes money away (interest adds it), an overdraft means going below zero, and one look at your balance before paying prevents it.",
  nextFile:"module-23-protecting-your-money.html",
  passStory:'<p><strong>You now own:</strong> fee and overdraft — and the habit that keeps both away: look before you pay.</p>'+
    '<p>That night Kai’s phone buzzes again. But this message is different. It does not say money in or money out.</p>'+
    '<p style="text-align:center"><strong>"FinLit Bank: Your account is LOCKED. Reply with your secret number in the next 10 minutes or lose everything!"</strong></p>'+
    '<p>Kai’s thumb hovers over the screen.</p>'+
    '<p class="muted">Module 23: Protecting Your Money.</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about fees, overdrafts, or staying above zero — or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 22 (Fees & Overdrafts) of a financial-literacy app, in the Banking block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, buy, sell, pay, earn, spend, need, save, goal, percent, bank, deposit, withdraw, balance, checking, savings, transaction, notification, interest, grow. "+
  "From THIS module: fee (money a bank takes out of your account for a service or for breaking a rule; the opposite direction from interest; many fees can be avoided by knowing the rules) and overdraft (spending more than your balance so it goes below zero; the bank covers the gap for a moment and usually charges a fee; the next deposit has to fill the gap first). "+
  "Core habit: look at your balance BEFORE you pay. If the balance is smaller than the price, wait. "+
  "TEACHING STYLE: concepts over calculations. Never compute a fee, a percentage, or a rate. You may compare two whole-dollar amounts to decide if there is enough (for example $4 is less than $6, so there is not enough). Keep answers about WHY and WHETHER. Do not teach negative-number arithmetic; say 'below zero' or 'short by'. "+
  "STRICT RULES: never use these words (later modules): borrow, loan, lend, credit, debt, owe, APR, rate, PIN, scam, password, cushion, budget, invest, tax, insurance. If the learner uses one, answer briefly in plain words and say it is coming later. "+
  "Story context: a $1 paper statement fee appeared in Kai's feed; he stopped it by reading on his phone instead. Later he had $6 in checking, paid $9 for a net without looking, went $3 below zero, and got a $5 overdraft fee on top. Then he practiced deciding pay-or-wait by looking at his balance first. "+
  "Never repeat a failed explanation — switch analogies (a cup that overflows, a late library book, a line you should not step past). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple WHY or WHETHER question and wait.";
//@@LESSONS
/* =====================================================================
   SIMULATOR — M22 lets the balance go BELOW ZERO for the first time.
   A red account card is the whole visual for "overdraft". No negative-
   number arithmetic is asked of the learner; the words "below zero"
   carry the idea.
===================================================================== */
function money(n){ return (n<0?"−":"") + "$" + Math.abs(n).toFixed(2); }
function acctCard(bal, note){
  return '<div class="acct'+(bal<0?' neg':'')+'"><div class="lbl">Checking</div>'+
    '<div class="bal">'+money(bal)+'</div>'+
    '<div class="who">'+(note||'Kai')+'</div>'+
    (bal<0?'<div class="zero">below zero</div>':'')+'</div>';
}
function feed(rows){
  let h='<div class="phone"><div class="pbar"><span>FinLit Bank</span><span>Checking</span></div><div class="feed">';
  rows.forEach(r=>{
    h+='<div class="fitem"><span><span class="day">'+r.day+'</span><br>'+r.label+'</span>'+
       '<span class="amt'+(r.amt<0?' out':'')+'">'+(r.amt<0?'−':'+')+'$'+Math.abs(r.amt).toFixed(2)+'</span></div>';
  });
  return h+'</div></div>';
}

/* =====================================================================
   LESSON 1 — The Line Nobody Bought
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · The line nobody bought</div>
    <div class="recap"><strong>Kai’s story so far:</strong> His savings grew on its own. Interest — a thank-you from the bank. So why is there a line in his feed that went the other way?</div>
    ${feed([{day:"Mon",label:"Market morning",amt:5},{day:"Tue",label:"Paper statement",amt:-1},{day:"Wed",label:"Bread",amt:-2}])}
    <div class="card"><p>Kai knows the market money. He knows the bread. But <strong>"Paper statement, −$1.00"</strong>? He never bought any paper.</p></div>
    <button onclick="next()">Ask Rana</button>`),
  ()=>show(`<div class="kicker">Lesson 1</div>
    <div class="scene">📄✉️<div class="cap">"Every month the bank mails you a paper list of your transactions," Rana says. "And this bank charges for it."</div></div>
    <div class="card"><p>That $1 is called a <strong>fee</strong> — money a bank takes out of your account for a service, or for breaking one of its rules.</p>
    <p>Kai did not buy anything. The bank took it anyway, because the rules said so.</p>
    <p>Put it next to last module’s word: <strong>interest adds a little. A fee takes some away.</strong></p></div>
    <button onclick="earnWord('fee');next()">New word: fee</button>`),
  ()=>show(`<div class="kicker">Lesson 1 · Knowing the rule</div>
    <div class="card"><p>Here is the good news. Kai already reads every transaction on his phone. He does not need the paper at all.</p>
    <p>He taps one switch in the app: <strong>paper statement — off</strong>.</p>
    <p>Next month, no paper. No fee. Same information, for free.</p>
    <p style="text-align:center; font-size:19px"><strong>Many fees can be avoided — once you know the rule that causes them.</strong></p></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q221a", next),
  ()=>renderMC("q221b", next),
  ()=>renderTF("q221c", next),
];

/* =====================================================================
   LESSON 2 — Below Zero
===================================================================== */
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · Below zero</div>
    <div class="recap"><strong>So far:</strong> a fee takes money away, and many fees can be dodged by knowing the rules.</div>
    ${acctCard(6,"Kai · end of a busy week")}
    <div class="card"><p>Kai has $6 in checking. At the trading post there is a brand-new fishing net for $9.</p>
    <p>He is excited. He does not look at his phone. He just pays.</p></div>
    <button onclick="next()">What happens?</button>`),
  ()=>show(`<div class="kicker">Lesson 2</div>
    ${acctCard(-3,"after the $9 net")}
    <div class="card"><p>The payment went through! But look at the balance. There is a little minus sign in front: <strong>−$3.00</strong>.</p>
    <p>That means <strong>below zero</strong>. Kai did not just run out of money — he spent $3 he never had. The bank covered the gap for him, for a moment.</p>
    <p>This is called an <strong>overdraft</strong>: spending more than your balance, so it goes below zero.</p></div>
    <button onclick="earnWord('overdraft');next()">New word: overdraft</button>`),
  ()=>show(`<div class="kicker">Lesson 2 · The buzz</div>
    <div class="notif"><span class="bell">🔔</span><span><strong>FinLit Bank</strong><br>Overdraft fee: −$5.00. Your balance is below zero.</span></div>
    ${acctCard(-8,"after the overdraft fee")}
    <div class="card"><p>Covering that gap was not free. The bank charged an <strong>overdraft fee</strong> — and now Kai is even further below zero.</p>
    <p>The net cost $9. Not looking cost him <strong>$5 more on top</strong>.</p></div>
    <button onclick="next()">Then what?</button>`),
  ()=>show(`<div class="kicker">Lesson 2 · Filling the hole</div>
    <div class="card"><p>On Monday Kai earns $10 at the market and deposits it.</p>
    <p>But he does not get to use all $10. Part of it goes first to <strong>filling the hole</strong> below zero — money already spent before it even arrived.</p>
    <p>That is the real sting of an overdraft. It costs the price, <strong>plus</strong> a fee, <strong>plus</strong> it eats into money you have not even earned yet.</p></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q222a", next),
  ()=>renderMC("q222b", next),
  ()=>renderTF("q222c", next),
];

/* =====================================================================
   LESSON 3 — Look Before You Pay (pay-or-wait simulator)
   Correct choice = Pay if balance covers price, else Wait. A wrong
   "Pay" shows what WOULD happen but is not applied; the learner picks
   again. The only skill is comparing two whole numbers.
===================================================================== */
const SHOP=[
  {em:"🍞", nm:"Bread and fruit", pr:3},
  {em:"🪝", nm:"Fish hooks", pr:4},
  {em:"🪁", nm:"A bright red kite", pr:7},
  {em:"💧", nm:"Water jug", pr:2},
  {em:"🩴", nm:"New sandals", pr:6}
];
const L3=[
  ()=>show(`<div class="kicker">Lesson 3 · Look before you pay</div>
    <div class="recap"><strong>So far:</strong> an overdraft costs the price, plus a fee, plus a hole in your next deposit.</div>
    <div class="card"><p>Kai makes himself one rule. Before paying for anything, he opens his phone and asks a single question:</p>
    <p style="text-align:center; font-size:19px"><strong>Is my balance at least as big as the price?</strong></p>
    <p>Yes → pay. No → wait. That is the whole rule. Now you try it with Kai’s next trip to the market.</p></div>
    <button onclick="next()">Start with $12</button>`),
  ()=>{
    let bal=12, i=0;
    function draw(){
      if(i>=SHOP.length){ addXP(6); next(); return; }
      const it=SHOP[i];
      show(`<div class="kicker">Pay or wait · ${i+1} of ${SHOP.length}</div>
        ${acctCard(bal,"Kai · checking right now")}
        <div class="buyrow"><div class="it">${it.em}</div><div class="nm">${it.nm}</div><div class="pr">costs $${it.pr}</div></div>
        <div class="choice"><button id="pPay">Pay now</button><button class="wait" id="pWait">Wait</button></div>
        <div id="fb"></div><div id="cont"></div>`);
      const enough = bal>=it.pr;
      let done=false;
      function finish(msg){
        done=true;
        document.getElementById("pPay").disabled=true; document.getElementById("pWait").disabled=true;
        document.getElementById("fb").innerHTML='<div class="feedback good">'+msg+'</div>';
        document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<SHOP.length-1?"Next item":"Done")+'</button>';
        window._n=()=>{ i++; draw(); };
        revealFB();
      }
      document.getElementById("pPay").onclick=()=>{
        if(done) return;
        if(enough){ bal-=it.pr; addXP(1);
          finish(`Right — $${bal+it.pr} covers $${it.pr}. Paid, and the balance stays above zero.`);
          document.querySelector(".acct").outerHTML=acctCard(bal,"Kai · checking right now");
        } else {
          document.getElementById("fb").innerHTML='<div class="feedback bad">Look again: the balance is $'+bal+' and the price is $'+it.pr+'. Paying would go below zero — and an overdraft fee would land on top. Try the other choice.</div>';
          revealFB();
        }
      };
      document.getElementById("pWait").onclick=()=>{
        if(done) return;
        if(!enough){ addXP(1);
          finish(`Right — $${bal} is less than $${it.pr}. Waiting costs nothing. Kai can save up and come back for it.`);
        } else {
          document.getElementById("fb").innerHTML='<div class="feedback bad">You can wait if you like — but there is enough here: $'+bal+' covers $'+it.pr+'. The rule says this one is safe to pay. Try again.</div>';
          revealFB();
        }
      };
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 3 · Rana’s extra trick</div>
    <div class="card"><p>Kai finished the market with money left and <strong>zero</strong> fees. One look, every time.</p>
    <p>Rana shares one more trick: "I keep a few dollars in checking that I pretend are not there. If I ever forget to look, those few dollars catch me before I go below zero."</p>
    <p>And the goal money? It stays in savings, where Kai does not spend it by accident — and where it keeps growing.</p></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q223a", next),
  ()=>renderMC("q223c", next),
];
const META=[
  {title:"The Line Nobody Bought", sub:"A charge Kai never agreed to", emoji:"📄"},
  {title:"Below Zero", sub:"What happens when you pay without looking", emoji:"🕳️"},
  {title:"Look Before You Pay", sub:"Pay or wait? One rule decides", emoji:"👀"},
];
