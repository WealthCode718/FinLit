//@@META
title=The Risk Challenge
file=module-39-risk-challenge.html
placeholder=Ask about policies and coverage…
//@@CSS
  .policy{background:#fffdf5; border:2px solid var(--sand-deep); border-radius:10px; padding:14px 16px; margin-bottom:12px; font-size:14px}
  .policy .hd{font-family:"Fraunces",Georgia,serif; font-weight:700; font-size:18px; text-align:center; margin-bottom:8px}
  .policy .row{display:flex; justify-content:space-between; padding:4px 0; border-bottom:1px dashed var(--sand-deep)}
  .policy h4{font-size:12px; letter-spacing:.1em; text-transform:uppercase; margin:10px 0 4px}
  .policy h4.y{color:var(--good)} .policy h4.n{color:var(--bad)}
  .policy ul{list-style:none; padding-left:0}
  .policy li{padding:2px 0}
  .sortbar .yes{background:var(--good)}
  .sortbar .no{background:var(--bad)}
  .week{font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:#fff; background:var(--shell); display:inline-block; border-radius:6px; padding:2px 10px; margin-bottom:8px; font-weight:700}
  .stars{font-size:28px; letter-spacing:4px; text-align:center; margin:6px 0}
  .ready{background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:12px 14px; margin-bottom:12px}
  .ready .lbl{font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:var(--ink-soft); font-weight:700; display:flex; justify-content:space-between}
  .ready .bar{height:14px; border-radius:999px; background:#eef2f0; overflow:hidden; margin-top:8px}
  .ready .bar div{height:100%; background:var(--good); border-radius:999px; transition:width .5s ease}
  .recaplist{list-style:none}
  .recaplist li{padding:8px 0; border-bottom:1px solid #eef2f0}
  .recaplist li:last-child{border-bottom:none}
//@@CONTENT
/* =====================================================================
   CONTENT — Module 39: The Risk Challenge (Risk & Insurance finale)
   Vocab: policy, coverage.
   Two quick concept lessons (what a policy is; reading what is and is
   NOT covered), then a storm-season challenge that uses every tool
   from the block: reduce risk, an emergency fund big enough for the
   deductible, spotting a fake insurance seller, an honest claim, and
   knowing when something is simply not covered.
   Same challenge engine as M24/M29/M34: only the correct choice
   advances; first-try picks earn a star and fill a readiness bar.
===================================================================== */
const VOCAB = {
  policy:{term:"policy", def:"The written agreement with your insurance. It lists the premium, the deductible, and exactly what is covered — and what is not."},
  coverage:{term:"coverage", def:"What your insurance policy will pay for. Anything not in the coverage, you pay for yourself — so read it before you need it."}
};

const QUESTIONS = {
  "q391a":{type:"mc", prompt:"What is an insurance policy?", concept:"policy", opts:[
    {t:"The written agreement that lists the premium, deductible, and what is covered", ok:true, fb:"Right. It is the rulebook for your insurance. Everything is in writing."},
    {t:"A promise someone makes out loud", ok:false, fb:"A real policy is written down. If it is only spoken, you have nothing to show later."},
    {t:"The money you get after a loss", ok:false, fb:"That is what a claim pays. The policy is the written agreement behind it."}]},
  "q391b":{type:"mc", prompt:"What does coverage mean?", concept:"coverage", opts:[
    {t:"What the policy will pay for", ok:true, fb:"Right. If it is covered, a claim can be paid. If not, it is on you."},
    {t:"The cover on the front of the policy paper", ok:false, fb:"Ha — not quite! Coverage is what the policy will actually pay for."},
    {t:"Every possible loss, always", ok:false, fb:"No policy covers everything. That is why you read what is and is not covered."}]},
  "q391c":{type:"tf", prompt:"True or false: if you have insurance, every loss you have will be paid for.", answer:false, concept:"coverage",
    good:"Right. Only what is in the coverage gets paid. Everything else is yours — read the policy before you need it.",
    bad:"Only losses in your coverage are paid. Things like a rope wearing out with age usually are not."},
  "q392a":{type:"mc", prompt:"Kai’s policy covers storm damage but NOT things wearing out with age. His five-year-old rope frays. Will a claim be paid?", concept:"coverage", opts:[
    {t:"No — wearing out with age is not in his coverage", ok:true, fb:"Right. Old things wearing out are expected. That belongs in the budget, not an insurance claim."},
    {t:"Yes — insurance pays for everything on a boat", ok:false, fb:"Only what the policy covers. Wear and tear is listed as NOT covered."},
    {t:"Yes, if he says a storm did it", ok:false, fb:"That would be a dishonest claim — against the rules, and unfair to everyone in the pot."}]},
  "q392b":{type:"mc", prompt:"A man at the dock says: “Buy my Super Storm Insurance now — cash only, today only, no paperwork!” What is the biggest warning sign?", concept:"policy", opts:[
    {t:"No written policy — plus he is rushing you", ok:true, fb:"Right. Real insurance comes with a written policy. No paper plus “today only” are scam signs from Module 23."},
    {t:"He is selling insurance at all", ok:false, fb:"Real insurance does get sold. The problem is no written policy and a rush."},
    {t:"Nothing — it sounds like a good deal", ok:false, fb:"No written policy means nothing to show when you need to claim. And the rush is a classic scam sign."}]},
  "q393a":{type:"mc", prompt:"Which tool from this block should be big enough to pay your deductible?", concept:"policy", opts:[
    {t:"Your emergency fund", ok:true, fb:"Right. The fund pays your part; insurance pays the rest. They work as a team."},
    {t:"Your cushion", ok:false, fb:"The cushion is just a few dollars in checking to prevent overdrafts. The emergency fund is for surprises like this."},
    {t:"A credit card", ok:false, fb:"That turns a surprise into debt. The emergency fund is built for exactly this."}]},
  "q393b":{type:"mc", transfer:true, prompt:"Mika buys a phone that comes with a paper saying: “We repair it free for one year if it stops working. Dropping it is not included.” She drops it. Is the repair free?", concept:"coverage", opts:[
    {t:"No — drops are not in the coverage, even though she has the paper", ok:true, fb:"Exactly. Different paper, same shape as Kai’s policy: what is covered, and what is not. Reading it first saves surprises."},
    {t:"Yes — she has the paper, so everything is free", ok:false, fb:"The paper says drops are NOT included. Having coverage is not the same as covering everything."},
    {t:"Yes, if she says it just stopped working", ok:false, fb:"That would be dishonest. The truth matters — and the paper was clear."}]}
};

const CFG = {
  n:39, title:"The Risk Challenge", homeSub:"Four short lessons. Read the policy, then get ready for the big storm season.",
  pool:["q391a","q391b","q391c","q392a","q392b","q393a"], transfer:"q393b",
  quest:"You read a policy, sorted covered from not covered, and got ready for the big storm season using every tool in the block.",
  failKeys:"The keys: a policy is the written agreement, coverage is what it will pay for (not everything), your emergency fund covers the deductible, and real insurance always comes in writing.",
  badge:" · Risk & Insurance block complete 🛡️",
  nextFile:null,
  passStory:'<p><strong>You now own:</strong> policy and coverage — and the whole Risk & Insurance block.</p>'+
    '<p>The big storm comes and goes. Kai’s boat is tied down, his emergency fund is full, his policy is in a dry drawer, and his sail is patched and flying.</p>'+
    '<p>On the first calm morning, Rana sits beside him on the dock. "Your money is safe now. Savings, a fund, insurance. That is the defense."</p>'+
    '<p>She looks out at the water. "Now, what if some of it could do more than sit safely? What if it could go out and work?"</p>'+
    '<p class="muted">Module 40 begins a new block. (Coming soon.)</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about policies, coverage, or getting ready for storm season — or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 39 (The Risk Challenge) of a financial-literacy app — the finale of the Risk & Insurance block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, multiply, buy, sell, pay, earn, work, spend, need, save, goal, percent, bank, deposit, withdraw, balance, checking, savings, transaction, notification, interest, grow, fee, overdraft, PIN, scam, budget, cushion, borrow, loan, lend, owe, debt, debit card, credit card, credit score, due date, lender, minimum payment, employer, wage, paycheck, income, tax, take-home pay, sales tax, receipt, tax return, refund, risk, loss, emergency, emergency fund, insurance, premium, claim, deductible. "+
  "From THIS module: policy (the written agreement with your insurance listing the premium, the deductible, and what is and is not covered) and coverage (what the policy will pay for; nothing covers everything; wear and tear is usually not covered). Real insurance always comes with a written policy; a seller with no paperwork who rushes you is a scam sign. The whole block works together: reduce risk, keep an emergency fund big enough for the deductible, insure big losses, file honest claims, and budget for things that simply wear out. "+
  "TEACHING STYLE: concepts over calculations. Do not recommend specific companies or products. "+
  "STRICT RULES: never use these words (later modules): invest, investment, stock, bond, share (as in company share), diversify, portfolio, return (as in investment return), retirement. If the learner uses one, answer briefly in plain words and say it is coming later. "+
  "Story context: Kai read his boat policy (covers storm damage and theft; not wear and tear, lost gear, or racing damage), sorted losses into covered or not, then prepared for the big storm season: tied everything down, refilled his emergency fund to cover his $10 deductible, turned away a cash-only 'Super Storm Insurance' seller with no paperwork, filed an honest claim with photos and a receipt for a torn sail, and budgeted for a worn-out rope that was not covered. "+
  "Never repeat a failed explanation — switch analogies (a phone repair paper that excludes drops, a rulebook for a game). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple 'covered or not?' question and wait.";
//@@LESSONS
/* =====================================================================
   SIMULATOR — Kai's written policy, a covered-or-not sort, and the
   storm-season challenge with a readiness bar.
===================================================================== */
function policy(){
  return '<div class="policy"><div class="hd">Fishers’ Pot · Policy</div>'+
    '<div class="row"><span>Insured</span><span>Kai · small boat & sail</span></div>'+
    '<div class="row"><span>Premium</span><span>$5 each season</span></div>'+
    '<div class="row"><span>Deductible</span><span>$10 per loss</span></div>'+
    '<h4 class="y">✅ Covered</h4><ul><li>Storm damage to the boat or sail</li><li>The boat being stolen</li></ul>'+
    '<h4 class="n">❌ Not covered</h4><ul><li>Things wearing out with age</li><li>Fishing gear lost overboard</li><li>Damage while racing</li></ul></div>';
}
let rStars=0, ready=20;
function readyBar(){
  return '<div class="ready"><div class="lbl"><span>🌀 Storm readiness</span><span>'+ready+'%</span></div><div class="bar"><div style="width:'+ready+'%"></div></div></div>';
}

/* =====================================================================
   LESSON 1 — The Paper in the Drawer
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · The paper in the drawer</div>
    <div class="recap"><strong>Kai’s story so far:</strong> An emergency fund, insurance on his boat, and one honest claim already paid. The big storm season is coming.</div>
    <div class="card"><p>Rana asks Kai one question: "What exactly does your insurance pay for?"</p>
    <p>Kai opens his mouth… and realizes he is not sure. Tavo pulls a folded paper from a dry drawer.</p></div>
    ${policy()}
    <div class="card"><p>This is Kai’s <strong>policy</strong>: the written agreement with his insurance. The premium, the deductible, and exactly what is covered — in writing.</p></div>
    <button onclick="earnWord('policy');next()">New word: policy</button>`),
  ()=>show(`<div class="kicker">Lesson 1 · Read the bottom half</div>
    <div class="card"><p>Look at the two lists. What the policy will pay for is called its <strong>coverage</strong>.</p>
    <p>And the <em>not covered</em> list matters just as much. No policy covers everything. If Kai only learns what is missing on the day he needs it, it is too late.</p>
    <p style="text-align:center"><strong>Read the policy before you need it.</strong></p></div>
    <button onclick="earnWord('coverage');next()">New word: coverage</button>`),
  ()=>renderMC("q391a", next),
  ()=>renderMC("q391b", next),
  ()=>renderTF("q391c", next),
];

/* =====================================================================
   LESSON 2 — Covered or Not? (sort)
===================================================================== */
const EVENTS=[
  {t:"⛈️ A storm rips the sail", yes:true, why:"Storm damage to the sail is on the covered list."},
  {t:"🪢 A five-year-old rope frays and snaps", yes:false, why:"Wearing out with age is NOT covered. Budget for it."},
  {t:"🚤 Someone steals the boat from the dock", yes:true, why:"Theft of the boat is covered."},
  {t:"🎣 Kai drops his fishing rod overboard", yes:false, why:"Lost fishing gear is NOT covered. That one is on Kai."},
  {t:"🏁 The mast cracks during the harbor race", yes:false, why:"Damage while racing is NOT covered. Kai might think twice about racing."}
];
const L2=[
  ()=>{
    let i=0;
    function draw(){
      if(i>=EVENTS.length){ addXP(5); next(); return; }
      const m=EVENTS[i];
      show(`<div class="kicker">Covered or not? · ${i+1} of ${EVENTS.length}</div>
        ${policy()}
        <div class="item">${m.t}</div>
        <div class="sortbar"><button class="yes" id="sYes">✅ Covered</button><button class="no" id="sNo">❌ Not covered</button></div>
        <div id="fb"></div><div id="cont"></div>`);
      let done=false;
      function pick(saysYes){
        if(done) return;
        const ok = saysYes===m.yes;
        document.getElementById("fb").innerHTML='<div class="feedback '+(ok?'good':'bad')+'">'+(ok?'Right — ':'Check the policy again. ')+m.why+(ok?'':' Try again.')+'</div>';
        revealFB();
        if(ok){
          done=true; addXP(1);
          document.getElementById("sYes").disabled=true; document.getElementById("sNo").disabled=true;
          document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<EVENTS.length-1?"Next":"Done")+'</button>';
          window._n=()=>{ i++; draw(); };
          revealFB();
        }
      }
      document.getElementById("sYes").onclick=()=>pick(true);
      document.getElementById("sNo").onclick=()=>pick(false);
    }
    draw();
  },
  ()=>renderMC("q392a", next),
  ()=>renderMC("q392b", next),
];

/* =====================================================================
   LESSON 3 — The Big Storm Season (challenge)
===================================================================== */
const STORM=[
  {wk:"Before the season", story:"Forecasts say the storms will be the biggest in years. The season starts next week.", opts:[
    {t:"Tie everything down and check the sky before every trip", ok:true, fb:"Right. Reduce the risk first. The cheapest loss is the one that never happens."},
    {t:"Nothing — he has insurance now", ok:false, fb:"Insurance helps after a loss, and he still pays the deductible. Reduce the risk first."},
    {t:"Race in the harbor to practice", ok:false, fb:"Racing damage is not even covered! Reduce the risk instead."}]},
  {wk:"A quick check", story:"Kai’s deductible is $10. His emergency fund has only $5 after buying new nets.", opts:[
    {t:"Refill the fund from the next paychecks until it can cover the $10", ok:true, fb:"Right. If a storm hits, the fund has to be able to pay his part of the claim."},
    {t:"Spend the $5 on snacks — insurance will handle it", ok:false, fb:"Insurance only pays after the deductible. Without $10 in the fund, a claim could push him into borrowing."},
    {t:"Put the deductible on a credit card later", ok:false, fb:"That turns a surprise into debt. Refill the fund instead."}]},
  {wk:"At the dock", story:"A stranger: “Super Storm Insurance! Pay me $20 cash right now — today only. No paperwork needed!”", opts:[
    {t:"Say no — no written policy and a rush are scam signs", ok:true, fb:"Right. Real insurance always comes with a written policy. “Today only” is straight out of Module 23."},
    {t:"Pay — more insurance is always better", ok:false, fb:"There is no policy, so nothing to claim on. And the rush is a classic scam sign."},
    {t:"Pay half now, half later", ok:false, fb:"Any money to a seller with no written policy is money gone. Say no and tell Rana."}]},
  {wk:"The storm hits", story:"A gust tears Kai’s sail. The repair costs $30. Storm damage is on his covered list.", opts:[
    {t:"File an honest claim with photos and the receipt; pay the $10 deductible from his fund", ok:true, fb:"Right. Honest claim, fund pays his part, the pot pays the rest. No debt, no drama."},
    {t:"Claim $50 — the pot has plenty", ok:false, fb:"Exaggerating a claim is against the rules and raises everyone’s premium. Claim the true $30."},
    {t:"Skip the claim and borrow for the repair", ok:false, fb:"He pays premiums for exactly this. Borrowing would cost extra for no reason."}]},
  {wk:"After the storm", story:"Kai’s old rope, five years old, frays and snaps. A new one costs $4.", opts:[
    {t:"Buy a new rope from his budget — wear and tear is not covered", ok:true, fb:"Right. Old things wearing out are expected. That is a budget item, not a claim."},
    {t:"File a claim for the rope", ok:false, fb:"Wear and tear is on the not-covered list. The claim would be turned down."},
    {t:"Keep using the frayed rope", ok:false, fb:"A snapped rope in a storm is a much bigger risk. $4 now is the smart spend."}]}
];
const L3=[
  ()=>{ rStars=0; ready=20;
    show(`<div class="kicker">Lesson 3 · The big storm season</div>
    <div class="recap"><strong>So far:</strong> read the policy; know what is and is not covered.</div>
    ${readyBar()}
    <div class="card"><p>Rana’s notebook has one page: <em>Get ready.</em> Five moments are coming. Use every tool from this block.</p>
    <p>Get each right the first time to earn a ⭐ and fill the readiness bar.</p></div>
    <button onclick="next()">Start the season</button>`); },
  ()=>{
    let i=0;
    function draw(){
      if(i>=STORM.length){ addXP(6); next(); return; }
      const w=STORM[i];
      const shuffled=w.opts.map((o,k)=>({o,k})).sort(()=>Math.random()-.5);
      show(`<div class="week">${w.wk}</div>
        ${readyBar()}
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
            done=true; if(first){ rStars++; addXP(1); }
            ready=Math.min(100, ready+16);
            document.querySelector(".ready").outerHTML=readyBar();
            document.querySelectorAll("#opts .opt").forEach(b=>b.disabled=true);
            document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<STORM.length-1?"Next":"End of the season")+'</button>';
            window._n=()=>{ i++; draw(); };
            revealFB();
          } else { first=false; btn.disabled=true; }
        };
      });
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 3 · After the storms</div>
    ${readyBar()}
    <div class="stars">${"⭐".repeat(rStars)}${"☆".repeat(STORM.length-rStars)}</div>
    <p class="muted" style="text-align:center">${rStars} of ${STORM.length} on the first try</p>
    <div class="card"><ul class="recaplist">
      <li>✅ <strong>Reduced</strong> the risk before the season.</li>
      <li>✅ <strong>Kept</strong> an emergency fund big enough for the deductible.</li>
      <li>✅ <strong>Spotted</strong> a fake insurance seller.</li>
      <li>✅ <strong>Shared</strong> a big loss through an honest claim.</li>
      <li>✅ <strong>Budgeted</strong> for what simply wears out.</li>
    </ul></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q393a", next),
];
const META=[
  {title:"The Paper in the Drawer", sub:"What a policy is, and what it covers", emoji:"📄"},
  {title:"Covered or Not?", sub:"Read Kai’s policy and sort five", emoji:"✅"},
  {title:"The Big Storm Season", sub:"Every tool in the block, all at once", emoji:"🌀"},
];
