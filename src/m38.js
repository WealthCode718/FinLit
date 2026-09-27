//@@META
title=Claims & Deductibles
file=module-38-claims-and-deductibles.html
placeholder=Ask about claims and deductibles…
//@@CSS
  .claimform{background:#fff; border:2px solid #d9e2de; border-radius:10px; padding:14px 16px; margin-bottom:12px; font-size:15px}
  .claimform .hd{font-weight:700; border-bottom:2px solid var(--ink); padding-bottom:6px; margin-bottom:6px}
  .claimform .row{display:flex; justify-content:space-between; padding:5px 0; border-bottom:1px dashed #d9e2de}
  .split{margin-bottom:12px}
  .split .bar{display:flex; height:46px; border-radius:12px; overflow:hidden; font-weight:700; font-size:14px; color:#fff}
  .split .you{background:var(--shell); display:flex; align-items:center; justify-content:center}
  .split .ins{background:var(--good); display:flex; align-items:center; justify-content:center}
  .split .cap{display:flex; justify-content:space-between; font-size:12px; color:var(--ink-soft); margin-top:6px}
  .seesaw{display:flex; gap:10px; margin-bottom:12px}
  .seesaw > div{flex:1; background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:12px 10px; text-align:center; font-size:14px}
  .seesaw .t{font-weight:700; margin-bottom:6px}
  .sortbar .ins{background:var(--good)}
  .sortbar .self{background:var(--shell)}
//@@CONTENT
/* =====================================================================
   CONTENT — Module 38: Claims & Deductibles
   Vocab: claim, deductible.
   "claim" appeared only as everyday English in scam messages ("claim
   your prize"); here it gets its insurance meaning.
   The deductible split is SHOWN with numbers on screen ($10 you / $20
   the pot) but never asked to be computed. The premium–deductible
   trade-off is taught as a direction only (higher deductible → usually
   lower premium), no pricing math.
   Honesty rule: exaggerating a claim is against the rules and raises
   premiums for everyone.
   Lesson 3 teaches the PISA-style judgment: insure the losses you could
   not handle; keep (with an emergency fund) the ones you can.
===================================================================== */
const VOCAB = {
  claim:{term:"claim", def:"Asking your insurance to pay for a loss, with proof of what happened — like photos and receipts. A claim must always be honest."},
  deductible:{term:"deductible", def:"The part of a loss you pay yourself before insurance pays the rest. A higher deductible usually means a lower premium."}
};

const QUESTIONS = {
  "q381a":{type:"mc", prompt:"What is an insurance claim?", concept:"claim", opts:[
    {t:"Asking your insurance to pay for a loss, with proof", ok:true, fb:"Right. You tell them what happened, show proof, and ask them to pay their part."},
    {t:"The regular payment you make for insurance", ok:false, fb:"That is the premium. A claim is when you ask the insurance to pay YOU for a loss."},
    {t:"A prize you win", ok:false, fb:"Scam messages say “claim your prize” — but an insurance claim is asking to be paid for a real loss."}]},
  "q381b":{type:"mc", prompt:"What proof helps Kai’s claim for his torn sail?", concept:"claim", opts:[
    {t:"Photos of the tear and the receipt for the repair", ok:true, fb:"Right. Show what happened and what it cost. Receipts from Module 33 are proof."},
    {t:"Nothing — they just take his word", ok:false, fb:"Insurance needs proof, to be fair to everyone paying into the pot. Photos and receipts."},
    {t:"His PIN", ok:false, fb:"Never! A PIN stays secret, always. Proof means photos and receipts."}]},
  "q381c":{type:"tf", prompt:"True or false: it is fine to say the sail repair cost more than it did, since the pot has lots of money.", answer:false, concept:"claim",
    good:"Right. Exaggerating a claim is against the rules — and it drains the pot everyone shares, so premiums go up for everyone.",
    bad:"Never. Exaggerating a claim is against the rules. The pot is everyone’s money, so cheating it makes premiums go up for everyone."},
  "q382a":{type:"mc", prompt:"What is a deductible?", concept:"deductible", opts:[
    {t:"The part of a loss you pay yourself before insurance pays the rest", ok:true, fb:"Right. For Kai: $10 of the $30 repair is his; the pot pays $20."},
    {t:"The whole cost of the loss", ok:false, fb:"If you paid the whole cost, insurance would not help at all. The deductible is just the first part."},
    {t:"Money insurance pays you back later", ok:false, fb:"The deductible is YOUR part, not theirs. You pay it; insurance pays the rest."}]},
  "q382b":{type:"mc", prompt:"Kai chooses a HIGHER deductible. What usually happens to his premium?", concept:"deductible", opts:[
    {t:"It usually goes down — he agreed to pay more of any loss himself", ok:true, fb:"Right. It is a seesaw: take on more of the risk yourself, and the premium usually drops."},
    {t:"It goes up", ok:false, fb:"The other way around. When you agree to pay more of a loss yourself, the premium usually goes down."},
    {t:"It has nothing to do with the premium", ok:false, fb:"They are connected like a seesaw. Higher deductible, usually lower premium."}]},
  "q382c":{type:"mc", prompt:"Kai’s deductible is $10. Where should that $10 come from when he needs it?", concept:"deductible", opts:[
    {t:"His emergency fund", ok:true, fb:"Right. That is exactly what the fund is for. It and insurance work as a team."},
    {t:"A loan", ok:false, fb:"Borrowing makes it cost more. His emergency fund is ready for exactly this."},
    {t:"His sail goal savings", ok:false, fb:"Goal money has its own job. The emergency fund is for surprises like this."}]},
  "q383a":{type:"mc", prompt:"Which loss is best to insure?", concept:"claim", opts:[
    {t:"A big loss you could not handle yourself — like the whole boat", ok:true, fb:"Right. Insurance earns its premium on the losses that would sink you."},
    {t:"Losing a $1 fish hook", ok:false, fb:"Tiny and common. Just keep that risk and buy a new hook."},
    {t:"A $3 cup cracking", ok:false, fb:"Small enough to handle yourself. Insurance is for the big ones."}]},
  "q383b":{type:"mc", transfer:true, prompt:"On a school trip, the school replaces anything a student loses — but the student pays the first $2 of it. What is the $2 most like?", concept:"deductible", opts:[
    {t:"A deductible — the part you pay yourself before the rest is covered", ok:true, fb:"Exactly. You pay the first part, the school covers the rest. Same shape as Kai’s $10."},
    {t:"A premium — paid every trip no matter what", ok:false, fb:"A premium is paid whether or not anything happens. This $2 is only paid when something is lost."},
    {t:"A refund", ok:false, fb:"A refund gives money back to you. This $2 is your share of a loss."}]}
};

const CFG = {
  n:38, title:"Claims & Deductibles", homeSub:"Four short lessons. How insurance actually pays — and when it is worth it.",
  pool:["q381a","q381b","q381c","q382a","q382b","q382c","q383a"], transfer:"q383b",
  quest:"You filed an honest claim, split a loss with a deductible, and decided which losses are worth insuring.",
  failKeys:"The keys: a claim asks insurance to pay for a loss (with honest proof), the deductible is the part you pay first (from your emergency fund), and insurance is best for big losses you could not handle alone.",
  nextFile:"module-39-risk-challenge.html",
  passStory:'<p><strong>You now own:</strong> claim and deductible.</p>'+
    '<p>Kai now has everything: a budget, a cushion, an emergency fund, insurance on his boat, and a clear head about which risks to keep and which to share.</p>'+
    '<p>Tavo looks at the long-range forecast and whistles. "The big storm season is coming. The real one."</p>'+
    '<p>Rana hands Kai a notebook. "Then let’s see you get ready for it."</p>'+
    '<p class="muted">Module 39: The Risk Challenge.</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about insurance claims or deductibles — or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 38 (Claims & Deductibles) of a financial-literacy app, in the Risk & Insurance block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, multiply, buy, sell, pay, earn, work, spend, need, save, goal, percent, bank, deposit, withdraw, balance, checking, savings, transaction, notification, interest, grow, fee, overdraft, PIN, scam, budget, cushion, borrow, loan, lend, owe, debt, debit card, credit card, credit score, due date, lender, minimum payment, employer, wage, paycheck, income, tax, take-home pay, sales tax, receipt, tax return, refund, risk, loss, emergency, emergency fund, insurance, premium. "+
  "From THIS module: claim (asking your insurance to pay for a loss, with proof like photos and receipts; must always be honest; exaggerating is against the rules and raises premiums for everyone) and deductible (the part of a loss you pay yourself before insurance pays the rest; a higher deductible usually means a lower premium, and a lower deductible usually a higher premium; the emergency fund should be able to cover your deductible). When to insure: big losses you could not handle alone (a whole boat, a home, serious illness); keep small losses yourself (a fish hook, a torn net) using your emergency fund. "+
  "TEACHING STYLE: concepts over calculations. Do not compute premiums or which deductible is 'cheapest'; describe the seesaw direction only. Do not recommend specific companies or products. "+
  "STRICT RULES: never use these words (later modules): policy, coverage limit, copay, warranty, invest, stock, diversify. If the learner uses one, answer briefly in plain words and say it is coming later. "+
  "Story context: a squall tore Kai's sail; the repair cost $30. He filed a claim with photos and the repair receipt. His deductible was $10, paid from his emergency fund, and the fishers' pot paid $20. He learned the seesaw between deductible and premium, and sorted losses into insure-it or cover-it-yourself. "+
  "Never repeat a failed explanation — switch analogies (a seesaw, a school trip where you pay the first $2, splitting a bill). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple question and wait.";
//@@LESSONS
/* =====================================================================
   SIMULATOR — claim form, a two-colour split bar for the deductible,
   and an insure-or-keep sort.
===================================================================== */
function claimForm(){
  return '<div class="claimform"><div class="hd">Fishers’ Pot · Claim</div>'+
    '<div class="row"><span>What happened</span><span>Squall tore sail</span></div>'+
    '<div class="row"><span>Proof</span><span>📷 photos · 🧾 repair receipt</span></div>'+
    '<div class="row"><span>Repair cost</span><span>$30.00</span></div></div>';
}
function split(){
  return '<div class="split"><div class="bar"><div class="you" style="width:33.3%">Kai $10</div><div class="ins" style="width:66.7%">The pot $20</div></div>'+
    '<div class="cap"><span>deductible (Kai pays first)</span><span>insurance pays the rest</span></div></div>';
}

/* =====================================================================
   LESSON 1 — Asking the Right Way
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · Asking the right way</div>
    <div class="recap"><strong>Kai’s story so far:</strong> A squall tore his sail: a $30 repair. He has insurance. "The pot pays!" But Tavo says: not all of it, and you have to ask the right way.</div>
    <div class="card"><p>The pot does not pay automatically. Kai has to tell the fishers what happened, show proof, and ask to be paid.</p>
    <p>That request is called a <strong>claim</strong>: asking your insurance to pay for a loss, with proof.</p></div>
    <button onclick="earnWord('claim');next()">New word: claim</button>`),
  ()=>show(`<div class="kicker">Lesson 1 · Honest proof</div>
    ${claimForm()}
    <div class="card"><p>Kai takes photos of the tear and keeps the repair receipt — the habit from Module 33 pays off.</p>
    <p>For a second, he wonders: what if he wrote $40 instead of $30? Tavo reads his face.</p>
    <p>"That pot is all of our money. Cheat it, and it runs dry, and everyone’s premium goes up next season. And it is against the rules." <strong>A claim is always honest.</strong></p></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q381a", next),
  ()=>renderMC("q381b", next),
  ()=>renderTF("q381c", next),
];

/* =====================================================================
   LESSON 2 — Your Part First
===================================================================== */
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · Your part first</div>
    <div class="recap"><strong>So far:</strong> a claim asks insurance to pay, with honest proof.</div>
    ${split()}
    <div class="card"><p>Here is the line Tavo pointed to: <em>“The fisher pays the first $10 of any loss.”</em></p>
    <p>That first part is called the <strong>deductible</strong>: the part of a loss you pay yourself before insurance pays the rest.</p>
    <p>Kai pays $10 from his emergency fund. The pot pays $20. His emergency fund and his insurance just worked as a team.</p></div>
    <button onclick="earnWord('deductible');next()">New word: deductible</button>`),
  ()=>show(`<div class="kicker">Lesson 2 · The seesaw</div>
    <div class="seesaw">
      <div><div class="t">Higher deductible</div>You pay more of a loss yourself<br>↓<br><strong>Premium usually lower</strong></div>
      <div><div class="t">Lower deductible</div>Insurance pays more of a loss<br>↓<br><strong>Premium usually higher</strong></div>
    </div>
    <div class="card"><p>Deductible and premium sit on a seesaw. Take on more of the risk yourself, and you usually pay less each season.</p>
    <p>The catch: only pick a deductible your emergency fund can actually cover.</p></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q382a", next),
  ()=>renderMC("q382b", next),
  ()=>renderMC("q382c", next),
];

/* =====================================================================
   LESSON 3 — Insure It or Cover It Yourself? (sort)
===================================================================== */
const LOSSES=[
  {t:"🪝 Losing a $1 fish hook", ins:false, why:"Tiny and common. Keep it — just buy another."},
  {t:"🚤 The whole boat sinking in a storm", ins:true, why:"A huge loss no emergency fund could cover. Insure it."},
  {t:"🏥 Getting very sick and needing the hospital", ins:true, why:"Could cost far more than anyone has saved. That is what health insurance is for."},
  {t:"🕸️ A $5 net tearing", ins:false, why:"Small enough for the emergency fund. No need to insure."},
  {t:"🏠 The family home burning down", ins:true, why:"One of the biggest losses there is. Insure it."},
  {t:"🥤 A $3 cup cracking", ins:false, why:"Small. Keep that risk."}
];
const L3=[
  ()=>show(`<div class="kicker">Lesson 3 · Worth insuring?</div>
    <div class="recap"><strong>So far:</strong> you pay the deductible first; insurance pays the rest.</div>
    <div class="card"><p>Insurance costs a premium every season. So it is not worth insuring <em>everything</em>. Tavo’s rule:</p>
    <p style="text-align:center; font-size:18px"><strong>Could you handle this loss yourself?</strong><br>Yes → keep it (emergency fund).<br>No → insure it.</p></div>
    <button onclick="next()">Sort six losses</button>`),
  ()=>{
    let i=0;
    function draw(){
      if(i>=LOSSES.length){ addXP(6); next(); return; }
      const m=LOSSES[i];
      show(`<div class="kicker">Insure it or cover it yourself? · ${i+1} of ${LOSSES.length}</div>
        <div class="item">${m.t}</div>
        <div class="sortbar"><button class="ins" id="sIns">🛡️ Insure it</button><button class="self" id="sSelf">👛 Cover it myself</button></div>
        <div id="fb"></div><div id="cont"></div>`);
      let done=false;
      function pick(saysIns){
        if(done) return;
        const ok = saysIns===m.ins;
        document.getElementById("fb").innerHTML='<div class="feedback '+(ok?'good':'bad')+'">'+(ok?'Right — ':'Not quite. ')+m.why+(ok?'':' Try again.')+'</div>';
        revealFB();
        if(ok){
          done=true; addXP(1);
          document.getElementById("sIns").disabled=true; document.getElementById("sSelf").disabled=true;
          document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<LOSSES.length-1?"Next":"Done")+'</button>';
          window._n=()=>{ i++; draw(); };
          revealFB();
        }
      }
      document.getElementById("sIns").onclick=()=>pick(true);
      document.getElementById("sSelf").onclick=()=>pick(false);
    }
    draw();
  },
  ()=>renderMC("q383a", next),
];
const META=[
  {title:"Asking the Right Way", sub:"An honest claim, with proof", emoji:"📷"},
  {title:"Your Part First", sub:"The deductible, and the seesaw", emoji:"⚖️"},
  {title:"Worth Insuring?", sub:"Insure it or cover it yourself", emoji:"🛡️"},
];
