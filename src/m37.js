//@@META
title=Insurance
file=module-37-insurance.html
placeholder=Ask about insurance and premiums…
//@@CSS
  .fleet{display:grid; grid-template-columns:repeat(10,1fr); gap:4px; margin-bottom:12px; background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:12px 8px}
  .fleet span{font-size:20px; text-align:center; line-height:1.2; border-radius:6px; transition:background .3s}
  .fleet span.paid{background:#eef7f2}
  .fleet span.hit{background:#faf0ee}
  .pot{background:linear-gradient(135deg,#123a3f 0%,#1f5a60 100%); color:#fff; border-radius:16px; padding:16px 18px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center}
  .pot .lbl{font-size:11px; letter-spacing:.14em; text-transform:uppercase; opacity:.8}
  .pot .v{font-family:"Fraunces",Georgia,serif; font-weight:700; font-size:34px}
  .pot .ic{font-size:40px}
  .kinds{display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:12px}
  .kinds div{background:#fff; border:2px solid #d9e2de; border-radius:12px; padding:12px 10px; font-size:14px}
  .kinds div span{font-size:24px; display:block}
  .kinds div strong{display:block; margin:2px 0}
//@@CONTENT
/* =====================================================================
   CONTENT — Module 37: Insurance
   Vocab: insurance, premium.
   Names the fourth way to handle risk ("share it") SHOWN in M35.
   The fleet simulator makes the pooling idea felt: 20 small premiums,
   one big loss, paid from the pot. It directly tackles the most common
   misconception ("I paid and nothing happened, so I wasted it") —
   what you bought was protection.
   Kinds of insurance kept to health, home, car, and boat/belongings.
   Life insurance is left out on purpose (sensitive for young learners).
   No pricing math.
===================================================================== */
const VOCAB = {
  insurance:{term:"insurance", def:"Paying a small, certain amount so that if a big loss happens, it gets paid for. Many people pay in, so no one faces a huge loss alone."},
  premium:{term:"premium", def:"The amount you pay regularly for insurance — whether or not anything bad happens. It is the price of being protected."}
};

const QUESTIONS = {
  "q371a":{type:"mc", prompt:"What is insurance?", concept:"insurance", opts:[
    {t:"Paying a small amount so a big loss gets paid for if it happens", ok:true, fb:"Right. You trade a small, certain cost for protection from a big, uncertain one."},
    {t:"A savings account that pays interest, so you have money if something goes wrong", ok:false, fb:"Savings grows your own money. Insurance pools money from many people to pay for big losses."},
    {t:"A loan for when things go wrong", ok:false, fb:"Nothing borrowed. If a covered loss happens, insurance pays — you do not pay it back."}]},
  "q371b":{type:"mc", prompt:"Why can twenty fishers each paying $5 cover a $60 repair?", concept:"insurance", opts:[
    {t:"Small payments add up, and only a few boats need it each season", ok:true, fb:"Right. Twenty times $5 fills the pot. Most seasons, only one or two boats need it."},
    {t:"Because the repair is actually free", ok:false, fb:"The repair costs real money. It is paid from the pot everyone filled."},
    {t:"Because the bank adds money to the pot whenever a repair is needed", ok:false, fb:"The bank is not involved. The pot of premiums pays."}]},
  "q371c":{type:"tf", prompt:"True or false: insurance is one way to SHARE a risk.", answer:true, concept:"insurance",
    good:"Right. It is the fourth way from Module 35: avoid, reduce, keep — or share.",
    bad:"It is exactly that — the fourth way from Module 35. Many people share the cost of big losses."},
  "q372a":{type:"mc", prompt:"What is a premium?", concept:"premium", opts:[
    {t:"What you pay regularly for insurance", ok:true, fb:"Right. Kai’s is $5 a season, paid whether or not a storm hits."},
    {t:"The money insurance pays you after a loss", ok:false, fb:"That is the other direction. The premium is what YOU pay in."},
    {t:"A fee your bank charges", ok:false, fb:"A bank fee is different. A premium is what you pay to be insured."}]},
  "q372b":{type:"mc", prompt:"Kai paid his $5 premium, and no storm hit his boat all season. Did he waste his $5?", concept:"premium", opts:[
    {t:"No — he bought protection. If the storm HAD hit, he was covered", ok:true, fb:"Right. You buy insurance hoping you never use it. The protection was real every single day."},
    {t:"Yes — he got nothing back", ok:false, fb:"He got something every day: protection. Like a seatbelt on a trip with no crash — still worth wearing."},
    {t:"Yes — he should ask for it back, since his boat never needed the pot", ok:false, fb:"Premiums pay for protection, not for losses. The pot covered whoever needed it — and would have covered him."}]},
  "q372c":{type:"tf", prompt:"True or false: you pay your premium only in the seasons when something bad happens.", answer:false, concept:"premium",
    good:"Right. Nobody knows ahead of time. Everyone pays every season — that is what fills the pot.",
    bad:"Everyone pays every season, because nobody knows ahead of time whose boat the storm will hit."},
  "q373a":{type:"mc", prompt:"Which kind of insurance helps pay doctor and hospital bills?", concept:"insurance", opts:[
    {t:"Health insurance", ok:true, fb:"Right. Getting very sick can be a huge, surprise loss. Health insurance shares that risk."},
    {t:"Car insurance", ok:false, fb:"Car insurance is for car accidents. For doctors and hospitals, it is health insurance."},
    {t:"Boat insurance", ok:false, fb:"Boat insurance protects the boat. Doctors and hospitals are covered by health insurance."}]},
  "q373b":{type:"mc", transfer:true, prompt:"Every kid in Kai’s class puts $1 in a jar. Whenever someone’s ball gets stuck on the school roof, the jar buys them a new one. What is this most like?", concept:"insurance", opts:[
    {t:"Insurance — everyone pays a little, and whoever has the loss gets covered", ok:true, fb:"Exactly. The $1 is the premium, the jar is the pot, and the lost ball is the loss."},
    {t:"A tax — it pays for the school", ok:false, fb:"Taxes pay for shared things like the school itself. This jar only pays whoever has a loss. That is insurance."},
    {t:"An emergency fund — it is one kid’s savings", ok:false, fb:"An emergency fund is your OWN money. This jar is many people’s money shared. That is insurance."}]}
};

const CFG = {
  n:37, title:"Insurance", homeSub:"Four short lessons. How twenty fishers share one big risk.",
  pool:["q371a","q371b","q371c","q372a","q372b","q372c","q373a"], transfer:"q373b",
  quest:"You learned what insurance is, what a premium buys you, and the main kinds of insurance people have.",
  failKeys:"The keys: insurance means many people pay a small premium so whoever has a big loss gets covered, the premium buys protection even if nothing happens, and there are kinds for health, homes, cars, and boats.",
  nextFile:"module-38-claims-and-deductibles.html",
  passStory:'<p><strong>You now own:</strong> insurance and premium.</p>'+
    '<p>Two weeks later, a squall rips a hole in Kai’s sail. The repair costs $30. He runs to Tavo: "I have insurance! The pot pays!"</p>'+
    '<p>Tavo unfolds the paper and points to a line near the bottom. "The pot pays — but not all of it. And you have to ask for it the right way."</p>'+
    '<p class="muted">Module 38: Claims & Deductibles.</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about insurance or premiums — or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 37 (Insurance) of a financial-literacy app, in the Risk & Insurance block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, multiply, buy, sell, pay, earn, work, spend, need, save, goal, percent, bank, deposit, withdraw, balance, checking, savings, transaction, notification, interest, grow, fee, overdraft, PIN, scam, budget, cushion, borrow, loan, lend, owe, debt, debit card, credit card, credit score, due date, lender, minimum payment, employer, wage, paycheck, income, tax, take-home pay, sales tax, receipt, tax return, refund, risk, loss, emergency, emergency fund. "+
  "From THIS module: insurance (paying a small, certain amount so that a big, uncertain loss gets paid for if it happens; many people pay in, so no one faces a huge loss alone; usually bought from an insurance company, which also keeps some to run itself) and premium (the amount you pay regularly for insurance whether or not anything bad happens). Paying a premium and never having a loss is not a waste: you bought protection. Common kinds: health, home, car, and boat or belongings. Insurance is the 'share it' way of handling risk from Module 35. "+
  "TEACHING STYLE: concepts over calculations. No premium pricing math, odds, or percentages. Do not discuss life insurance or death in detail; if asked, say briefly that some insurance helps families after a big loss, and suggest asking a trusted adult. Do not recommend specific companies. "+
  "STRICT RULES: never use these words (later modules): deductible, claim, policy, coverage, invest, stock, diversify, warranty. If the learner uses one, answer briefly in plain words and say it is coming later. "+
  "Story context: twenty island fishers each pay $5 a season into a shared pot. When a storm damaged one boat ($60), the pot paid. Kai joined and paid his $5 premium; no storm hit his boat that season, and he learned the $5 bought protection. "+
  "Never repeat a failed explanation — switch analogies (a class jar for lost balls, a seatbelt on a trip with no crash, an umbrella on a dry day). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple question and wait.";
//@@LESSONS
/* =====================================================================
   SIMULATOR — the fishers' fleet (20 boats) and the shared pot.
===================================================================== */
function fleet(paid, hit){
  let h='<div class="fleet">';
  for(let k=0;k<20;k++){
    const cls=(hit===k?'hit':(paid?'paid':''));
    h+='<span class="'+cls+'">'+(hit===k?'💥':(k===0?'⛵':'🚤'))+'</span>';
  }
  return h+'</div>';
}
function pot(v, note){ return '<div class="pot"><div><div class="lbl">'+(note||'The shared pot')+'</div><div class="v">$'+v+'</div></div><div class="ic">🏺</div></div>'; }

/* =====================================================================
   LESSON 1 — Twenty Fishers
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · Twenty fishers</div>
    <div class="recap"><strong>Kai’s story so far:</strong> An emergency fund covers surprises. But what about a loss bigger than any fund on the island?</div>
    ${fleet(false,-1)}
    <div class="card"><p>Twenty boats fish from this harbor. Every storm season, a boat or two gets damaged. Nobody knows <em>whose</em> it will be.</p>
    <p>A big repair could wipe out any one fisher. So years ago, they made a deal.</p></div>
    <button onclick="next()">What deal?</button>`),
  ()=>show(`<div class="kicker">Lesson 1</div>
    <div class="card"><p>"Every season, each of us puts $5 into a shared pot," Tavo explains. "Whoever gets hit by a storm, the pot pays for their repair."</p>
    <p>Twenty small payments. One big loss, covered. Nobody faces it alone.</p>
    <p>That is <strong>insurance</strong>: paying a small, certain amount so that a big loss gets paid for if it happens. It is the fourth way to handle risk from Module 35: <strong>share it</strong>.</p>
    <p class="muted">In most places, people buy insurance from an insurance company, which collects from thousands of people and keeps some to run itself. Same idea, bigger pot.</p></div>
    ${more('<p>Why does the deal work? Nobody knows whose boat the storm will hit. But with twenty boats, only one or two will likely get hit in a season.</p>'+
      '<p>So twenty small, certain payments can cover one or two big, surprise losses. Each fisher trades a scary “maybe” for a small, sure cost.</p>')}
    <button onclick="earnWord('insurance');next()">New word: insurance</button>`),
  ()=>renderMC("q371a", next),
  ()=>renderTF("q371c", next),
];

/* =====================================================================
   LESSON 2 — The Season of the Pot (simulator)
===================================================================== */
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · Kai joins</div>
    <div class="recap"><strong>So far:</strong> insurance means many people share the cost of big losses.</div>
    <div class="card"><p>Kai signs up, with Tavo’s help, for his little boat. His part: $5 at the start of every season, whether or not a storm hits.</p>
    <p>That regular payment is called a <strong>premium</strong>. It is the price of being protected.</p></div>
    ${more('<p>Why pay before anything goes wrong? The pot has to be full before the storm comes. If people only paid after their boat broke, the pot would be empty.</p>'+
      '<p>It is a bit like carrying an umbrella. You bring it on cloudy days, not after you are already soaked.</p>')}
    <button onclick="earnWord('premium');next()">New word: premium</button>`),
  ()=>{
    let step=0;
    function draw(){
      if(step===0){
        show(`<div class="kicker">Storm season · start</div>${fleet(false,-1)}${pot(0)}
          <div class="card"><p style="margin:0">The season begins. Time for every fisher to pay their premium.</p></div>
          <button id="pC" data-bot="1">Collect 20 premiums of $5</button>`);
        document.getElementById("pC").onclick=()=>{ step=1; draw(); };
      } else if(step===1){
        show(`<div class="kicker">Storm season · the pot is full</div>${fleet(true,-1)}${pot(100)}
          <div class="card"><p style="margin:0">Twenty fishers, $5 each. Kai’s little boat (⛵) is in there too. Now… the storms come.</p></div>
          <button id="pS" data-bot="1">⛈️ Let the storm pass</button>`);
        document.getElementById("pS").onclick=()=>{ step=2; draw(); };
      } else if(step===2){
        show(`<div class="kicker">Storm season · one boat hit</div>${fleet(true,13)}${pot(100)}
          <div class="card"><p style="margin:0">One boat is badly damaged: a $60 repair. Alone, that fisher could not pay it. But there is a pot.</p></div>
          <button id="pP" data-bot="1">Pay the repair from the pot</button>`);
        document.getElementById("pP").onclick=()=>{ step=3; draw(); };
      } else {
        show(`<div class="kicker">Storm season · the end</div>${fleet(true,13)}${pot(40,'Left in the pot')}
          <div class="card"><p>The damaged boat is fixed. The fisher never had to borrow.</p>
          <p>And the other nineteen, including Kai? They paid $5 and their boats were fine. Did they waste it?</p>
          <p><strong>No.</strong> Every day of the season, they were protected. If the storm had picked <em>their</em> boat, the pot would have paid for them. That protection is what the premium buys.</p></div>
          ${more('<p>What about the $40 left in the pot? On the island, it stays for next season, in case two boats get hit.</p>'+
      '<p>A real insurance company works a bit like this. It collects premiums from many people, pays for big losses, and keeps some to pay its own workers.</p>'+
      '<p>That is why, all together, people pay in a little more than the company pays out.</p>')}
    <div id="cont"><button onclick="addXP(4);next()">Continue</button></div>`);
      }
    }
    draw();
  },
  ()=>renderMC("q371b", next),
  ()=>renderMC("q372a", next),
  ()=>renderMC("q372b", next),
  ()=>renderTF("q372c", next),
];

/* =====================================================================
   LESSON 3 — Kinds of Insurance
===================================================================== */
const L3=[
  ()=>show(`<div class="kicker">Lesson 3 · Not just boats</div>
    <div class="recap"><strong>So far:</strong> a premium buys protection, even in a season with no loss.</div>
    <div class="card"><p>Off the island, people insure the big things they could not afford to lose:</p></div>
    <div class="kinds">
      <div><span>🏥</span><strong>Health</strong>Helps pay doctor and hospital bills.</div>
      <div><span>🏠</span><strong>Home</strong>Helps if a home is damaged by fire or storms.</div>
      <div><span>🚗</span><strong>Car</strong>Helps pay for car accidents.</div>
      <div><span>⛵</span><strong>Boats & belongings</strong>Helps replace big things that get damaged or stolen.</div>
    </div>
    <div class="card"><p>Notice what they have in common: <strong>losses too big to handle alone</strong>. That is where insurance earns its premium.</p></div>
    ${more('<p>Why not insure everything? Paying a premium every season to protect a $1 cup would cost more than the cup itself.</p>'+
      '<p>Small losses are better to keep, like Kai’s lost fish hooks. Insurance is for losses that would really hurt, like a home, a hospital visit, or a boat. For the small stuff, your emergency fund and budget do the job.</p>')}
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q373a", next),
];
const META=[
  {title:"Twenty Fishers", sub:"The deal that shares a big risk", emoji:"🚤"},
  {title:"The Season of the Pot", sub:"Premiums in, one repair out", emoji:"🏺"},
  {title:"Not Just Boats", sub:"The kinds of insurance people have", emoji:"🏥"},
];
