//@@META
title=Debt
file=module-26-debt.html
placeholder=Ask about owing and debt…
//@@CSS
  .debt{background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:16px; margin-bottom:12px}
  .debt .lbl{font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:var(--ink-soft); font-weight:700}
  .debt .v{font-family:"Fraunces",Georgia,serif; font-weight:700; font-size:34px; color:var(--bad); margin:2px 0 8px}
  .debt .v.small{color:var(--good)}
  .dbar{height:16px; background:#eef2f0; border-radius:999px; overflow:hidden}
  .dbar .f{height:100%; background:var(--bad); border-radius:999px; transition:width .5s ease}
  .dbar .f.ok{background:var(--good)}
  .choice{display:flex; gap:10px; margin-bottom:10px}
  .choice button{flex:1}
  .choice .skip{background:#fff; color:var(--ink); border:2px solid var(--ink)}
  .roads{display:flex; gap:10px; margin-bottom:12px}
  .roads .box{flex:1; background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:12px 10px; text-align:center}
  .roads .box .n{font-size:12px; color:var(--ink-soft); margin-bottom:4px}
  .roads .box .v{font-family:"Fraunces",Georgia,serif; font-weight:700; font-size:22px}
  .roads .box.good{border-color:var(--good); background:#eef7f2}
  .roads .box.bad{border-color:var(--bad); background:#faf0ee}
  .roads .box.you{border-color:var(--shell)}
//@@CONTENT
/* =====================================================================
   CONTENT — Module 26: Debt
   Vocab: owe, debt.
   Picks up M25's cliffhanger ("what if someone can't pay it back?").
   Mirror image of M21: interest makes SAVINGS grow for you; it makes
   DEBT grow against you. The simulator is felt, not computed — the
   learner picks pay/skip and watches a bar move. They never calculate
   a new total; the screen does it.
   Tone rule: debt is common and not shameful. Nilo is not a villain —
   he made one choice, then another, and gets out of it in Lesson 3.
===================================================================== */
const VOCAB = {
  owe:{term:"owe", def:"To need to pay money back to someone. If you borrowed $20 and have paid back $5 so far, you still owe the rest."},
  debt:{term:"debt", def:"Money you owe and have not paid back yet. Interest can make debt grow — the same way it makes savings grow, but working against you."}
};

const QUESTIONS = {
  "q261a":{type:"mc", prompt:"What does it mean to owe money?", concept:"owe", opts:[
    {t:"You need to pay money back to someone", ok:true, fb:"Right. If you borrowed it and have not finished paying it back, you owe it."},
    {t:"Someone needs to pay money back to you", ok:false, fb:"That is the other side. If someone borrowed from YOU, they owe you. To owe means YOU need to pay back."},
    {t:"You have money saved in the bank", ok:false, fb:"Saved money is yours. Owing is the opposite — money that belongs to someone else until you pay it back."}]},
  "q261b":{type:"mc", prompt:"Nilo borrowed $20 and has paid back $5 so far. Which is true?", concept:"debt", opts:[
    {t:"He still has debt — he owes the rest", ok:true, fb:"Right. Paying some back is good, but until it is ALL paid back, the rest is still debt."},
    {t:"He has no debt, because he started paying", ok:false, fb:"Starting is great — but debt only ends when everything is paid back. He still owes the rest."},
    {t:"The bank owes Nilo money now", ok:false, fb:"Nilo is the one who borrowed, so Nilo is the one who owes."}]},
  "q261c":{type:"tf", prompt:"True or false: debt is money you owe and have not paid back yet.", answer:true, concept:"debt",
    good:"Right. That is the whole definition. It stays debt until it is paid back.",
    bad:"Actually, that is exactly what debt is — money you owe that has not been paid back yet."},
  "q262a":{type:"mc", prompt:"Interest makes savings grow. What does interest do to debt?", concept:"debt", opts:[
    {t:"Makes it grow too — so you owe more the longer it sits", ok:true, fb:"Right. Same idea as Module 21, pointed the other way. Savings grows for you. Debt grows against you."},
    {t:"Makes it shrink on its own", ok:false, fb:"Debt never shrinks on its own. Only paying it back makes it smaller — and interest pushes it up in the meantime."},
    {t:"Nothing — interest only works on savings", ok:false, fb:"Interest works on borrowed money too. That is what the borrower pays. Left alone, it makes the debt bigger."}]},
  "q262b":{type:"tf", prompt:"True or false: if you skip a payment, your debt just waits for you, exactly the same size.", answer:false, concept:"debt",
    good:"Right. Skipping does not pause anything. Interest keeps adding, and a late fee often lands on top.",
    bad:"That is the trap Nilo fell into. While you skip, interest keeps adding and a late fee often lands on top. The debt gets bigger."},
  "q262c":{type:"mc", prompt:"Why did Nilo end up owing MORE than the $20 he borrowed?", concept:"debt", opts:[
    {t:"Skipped payments let interest and late fees pile on", ok:true, fb:"Right. Every skipped week added a little. Little by little, the debt grew bigger than the jacket was ever worth."},
    {t:"The jacket shop raised the price", ok:false, fb:"The shop was paid long ago. The growing came from the debt — interest and late fees on the money he still owed."},
    {t:"He did not — you always owe exactly what you borrowed", ok:false, fb:"Look back at the tracker: skipping made the number go UP. Debt can grow past what you first borrowed."}]},
  "q263a":{type:"mc", prompt:"Nilo wants to get out of debt. What is the FIRST thing he should do?", concept:"debt", opts:[
    {t:"Stop adding new debt — no more borrowing for wants", ok:true, fb:"Right. You cannot climb out of a hole while you are still digging it. Stop adding, then start paying."},
    {t:"Borrow more to feel better", ok:false, fb:"More borrowing makes the hole deeper. The first step is to stop adding to it."},
    {t:"Ignore the letters and hope it goes away", ok:false, fb:"Debt does not go away on its own — ignoring it lets interest and fees keep growing it."}]},
  "q263c":{type:"mc", prompt:"Nilo knows he cannot pay this week. What is the best move?", concept:"owe", opts:[
    {t:"Tell the bank early and ask a trusted adult for help", ok:true, fb:"Right. Speaking up BEFORE you miss a payment gives everyone more choices. Hiding gives everyone fewer."},
    {t:"Hide from the bank until he can pay", ok:false, fb:"Hiding lets fees pile up and makes the bank trust you less. Talking early is almost always better."},
    {t:"Nothing — one missed week does not matter if he pays the next week", ok:false, fb:"Every missed week can add a late fee and more interest. Speaking up early helps keep it small."}]},
  "q263b":{type:"mc", transfer:true, prompt:"Kai promised to do 2 chores for Mika. He puts it off, and each week Mika adds 1 more chore for the wait. What is this most like?", concept:"debt", opts:[
    {t:"Debt — putting off paying back makes what you owe grow", ok:true, fb:"Exactly. No money involved, but the same shape: something owed, left alone, gets bigger. The way out is the same too — start paying it back."},
    {t:"Savings — Kai’s chores are growing", ok:false, fb:"Savings grow FOR you. These chores are growing against Kai — he owes more and more. That is debt’s shape."},
    {t:"A trade — Kai and Mika are swapping chores back and forth each week", ok:false, fb:"In a trade both sides get something now. Here Kai owes something and is not paying it back — and it grows. That is debt."}]}
};

const CFG = {
  n:26, title:"Debt", homeSub:"Four short lessons. What happens when borrowed money is not paid back.",
  pool:["q261a","q261b","q261c","q262a","q262b","q262c","q263a","q263c"], transfer:"q263b",
  quest:"You learned what it means to owe, how debt can grow, and the way out.",
  failKeys:"The keys: debt is money you owe and have not paid back, interest and late fees make it grow while you wait, and the way out is to stop adding, pay a little every time, and speak up early.",
  nextFile:"module-27-paying-with-cards.html",
  passStory:'<p><strong>You now own:</strong> owe and debt — and the way back out of it.</p>'+
    '<p>A few weeks later Nilo is paying every week, and the number is finally going down. He pulls two plastic cards from his pocket and holds them up.</p>'+
    '<p>"These look almost the same," he says. "But one spends MY money, and one spends the bank’s. Guess which one got me into trouble?"</p>'+
    '<p class="muted">Module 27: Paying with Cards.</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about owing money, debt, or how to get out of it — or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 26 (Debt) of a financial-literacy app, in the Credit block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, buy, sell, pay, earn, spend, need, save, goal, percent, bank, deposit, withdraw, balance, checking, savings, transaction, notification, interest, grow, fee, overdraft, PIN, scam, budget, cushion, borrow, loan, lend. "+
  "From THIS module: owe (need to pay money back to someone) and debt (money you owe and have not paid back yet). Core ideas: interest makes savings grow for you and debt grow against you; skipping a payment does not pause debt — interest keeps adding and a late fee often lands on top; the way out is stop adding new debt, pay something every time, and speak up early (to whoever lent the money and a trusted adult) before missing a payment. "+
  "TONE: debt is very common and not shameful. Many families have some. Never shame the learner or anyone they mention. Be calm and practical. "+
  "TEACHING STYLE: concepts over calculations. Never calculate interest, a rate, a percentage, or how long payoff takes. Say 'grows' or 'gets bigger' instead of numbers. "+
  "STRICT RULES: never use these words (later modules): credit card, debit card, credit score, due date, minimum payment, lender, APR, interest rate, bankruptcy, collections, invest, stock, tax, insurance. You may say 'credit' only as the name of this section of the app. If the learner uses a later word, answer briefly in plain words and say it is coming later. Never encourage a child to borrow. "+
  "Story context: Nilo, Tavo's cousin, borrowed $20 for a fancy fishing jacket (a want). He skipped payments, and his debt grew past $20 because of interest and late fees. The learner played his weeks on a tracker, pay or skip. Then Nilo climbed out: stopped borrowing, paid every week, and talked to the bank early. "+
  "Never repeat a failed explanation — switch analogies (a hole you stop digging, weeds that grow if nobody pulls them, chores that pile up). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple WHY or WHETHER question and wait.";
//@@LESSONS
/* =====================================================================
   SIMULATOR — the debt tracker. Free choice for 4 weeks: pay or skip.
     pay  → pays $5, interest adds $1  → owed goes down by $4
     skip → late fee $3 + interest $1  → owed goes up by $4
   The learner never computes; the card and bar update themselves.
   Afterwards their road is shown next to the all-pay and all-skip roads.
===================================================================== */
const START_OWED=20, WEEKS=4, BAR_MAX=40;
function debtCard(owed, note){
  const pct=Math.max(0,Math.min(100, owed/BAR_MAX*100));
  return '<div class="debt"><div class="lbl">'+(note||'Nilo still owes')+'</div>'+
    '<div class="v'+(owed<START_OWED?' small':'')+'">$'+owed+'</div>'+
    '<div class="dbar"><div class="f'+(owed<START_OWED?' ok':'')+'" style="width:'+pct+'%"></div></div></div>';
}
let road=[];

/* =====================================================================
   LESSON 1 — What Nilo Owes
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · What Nilo owes</div>
    <div class="recap"><strong>Kai’s story so far:</strong> Tavo borrowed to fix his boat and pays a little back every week. Kai asked: what if someone can’t pay it back?</div>
    <div class="scene">🧥😬<div class="cap">Tavo’s cousin Nilo borrowed $20 for a fancy new fishing jacket. That was two months ago.</div></div>
    <button onclick="next()">What happened?</button>`),
  ()=>show(`<div class="kicker">Lesson 1</div>
    <div class="card"><p>Nilo has the jacket. The bank has an agreement with his name on it. Until he pays the money back, he <strong>owes</strong> it.</p>
    <p>To owe means you need to pay money back to someone. Right now, Nilo owes the bank.</p></div>
    <button onclick="earnWord('owe');next()">New word: owe</button>`),
  ()=>show(`<div class="kicker">Lesson 1 · A name for it</div>
    ${debtCard(20,"Nilo owes the bank")}
    <div class="card"><p>Money you owe and have not paid back yet has a name: <strong>debt</strong>.</p>
    <p>Tavo has debt too — his boat loan. That is not a bad thing by itself. Tavo borrowed for a need, has a plan, and pays every week. His debt gets smaller.</p>
    <p>Nilo’s story is going a different direction.</p></div>
    <button onclick="earnWord('debt');next()">New word: debt</button>`),
  ()=>renderMC("q261a", next),
  ()=>renderMC("q261b", next),
  ()=>renderTF("q261c", next),
];

/* =====================================================================
   LESSON 2 — Debt Can Grow (tracker)
===================================================================== */
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · Debt can grow</div>
    <div class="recap"><strong>So far:</strong> debt is money you owe and have not paid back yet.</div>
    <div class="card"><p>Remember Module 21? Money sitting in savings can <strong>grow</strong>, because the bank pays interest.</p>
    <p>Now flip it, like Module 25 did. When YOU owe, <strong>you</strong> pay interest. So while debt sits there, it can grow too — just in the wrong direction.</p>
    <p>And if a payment is late, there is often a <strong>late fee</strong> on top.</p></div>
    <button onclick="next()">Play Nilo’s next four weeks</button>`),
  ()=>{
    let owed=START_OWED, wk=0; road=[];
    function draw(){
      if(wk>=WEEKS){ addXP(4); next(); return; }
      show(`<div class="kicker">Nilo’s tracker · Week ${wk+1} of ${WEEKS}</div>
        ${debtCard(owed)}
        <div class="card"><p style="margin:0">A payment is due this week. What does Nilo do?</p></div>
        <div class="choice"><button id="dPay" data-bot="1">Pay $5</button><button class="skip" id="dSkip" data-bot="1">Skip this week</button></div>
        <div id="fb"></div><div id="cont"></div>`);
      let done=false;
      function go(pay){
        if(done) return; done=true;
        road.push(pay?"pay":"skip");
        owed += pay ? -4 : 4;
        document.getElementById("dPay").disabled=true; document.getElementById("dSkip").disabled=true;
        document.querySelector(".debt").outerHTML=debtCard(owed);
        document.getElementById("fb").innerHTML = pay
          ? '<div class="feedback good">Paid $5. Interest still added a little, but the debt went <strong>down</strong>.</div>'
          : '<div class="feedback bad">Skipped. A late fee and interest landed on top — the debt went <strong>up</strong>, and Nilo paid nothing toward it.</div>';
        document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(wk<WEEKS-1?"Next week":"See the roads")+'</button>';
        window._n=()=>{ wk++; draw(); };
        revealFB();
      }
      document.getElementById("dPay").onclick=()=>go(true);
      document.getElementById("dSkip").onclick=()=>go(false);
    }
    draw();
  },
  ()=>{
    const yours=START_OWED+road.reduce((a,r)=>a+(r==="pay"?-4:4),0);
    show(`<div class="kicker">Lesson 2 · Three roads</div>
      <div class="roads">
        <div class="box good"><div class="n">Pay every week</div><div class="v">$${START_OWED-4*WEEKS}</div></div>
        <div class="box you"><div class="n">Your road</div><div class="v">$${yours}</div></div>
        <div class="box bad"><div class="n">Skip every week</div><div class="v">$${START_OWED+4*WEEKS}</div></div>
      </div>
      <div class="card"><p>Same jacket. Same $20 borrowed. Four weeks later, the gap between paying and skipping is huge.</p>
      <p>That is the thing about debt: <strong>skipping does not pause it.</strong> It keeps growing whether you look at it or not.</p>
      <p>What really happened? Nilo skipped every week. He now owes more than the jacket ever cost.</p></div>
      <button onclick="next()">Practice</button>`);
  },
  ()=>renderMC("q262a", next),
  ()=>renderTF("q262b", next),
  ()=>renderMC("q262c", next),
];

/* =====================================================================
   LESSON 3 — Climbing Out
===================================================================== */
const L3=[
  ()=>show(`<div class="kicker">Lesson 3 · Climbing out</div>
    <div class="recap"><strong>So far:</strong> skipping lets debt grow. Paying makes it shrink.</div>
    <div class="scene">🧗<div class="cap">Nilo finally opens the letters from the bank. Then he goes to find Tavo.</div></div>
    <div class="card"><p>Debt is really common, and getting out is absolutely possible. Tavo helps Nilo make a plan in three steps.</p></div>
    <button onclick="next()">The plan</button>`),
  ()=>show(`<div class="kicker">Lesson 3 · Three steps</div>
    <div class="card"><ol style="padding-left:20px">
      <li style="margin-bottom:10px"><strong>Stop digging.</strong> No new borrowing for wants. You cannot climb out of a hole you are still digging.</li>
      <li style="margin-bottom:10px"><strong>Pay something, every time.</strong> Even a small payment on time beats a skipped one. Nilo puts the payment in his budget, right next to his needs.</li>
      <li><strong>Speak up early.</strong> If a payment is going to be hard, tell whoever lent the money <em>before</em> missing it — and tell a trusted adult. Talking early gives you more choices. Hiding gives you fewer.</li>
    </ol></div>
    ${debtCard(12,"Nilo owes — two months later")}
    <div class="card"><p>Slowly, the number starts going the right way.</p></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q263a", next),
  ()=>renderMC("q263c", next),
];
const META=[
  {title:"What Nilo Owes", sub:"Two words for borrowed money not yet paid back", emoji:"🧥"},
  {title:"Debt Can Grow", sub:"Pay or skip? Watch the tracker", emoji:"📉"},
  {title:"Climbing Out", sub:"Three steps back to zero", emoji:"🧗"},
];
