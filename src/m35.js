//@@META
title=Risk
file=module-35-risk.html
placeholder=Ask about risk and loss…
//@@CSS
  .grid2{display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:12px}
  .grid2 button{font-size:14px; padding:14px 8px; border-radius:12px; line-height:1.25}
  .grid2 .q1{background:#e8b84b; color:var(--night)}
  .grid2 .q2{background:var(--bad)}
  .grid2 .q3{background:var(--good)}
  .grid2 .q4{background:var(--shell)}
  .grid2 button small{display:block; font-weight:400; font-size:12px; opacity:.85; margin-top:2px}
  .ways{display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:12px}
  .ways div{background:#fff; border:2px solid #d9e2de; border-radius:12px; padding:12px 10px; font-size:14px}
  .ways div strong{display:block; font-size:15px; margin-bottom:2px}
  .ways div span{font-size:24px}
  .sailcard{background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:14px; text-align:center; margin-bottom:12px}
  .sailcard .v{font-family:"Fraunces",Georgia,serif; font-weight:700; font-size:26px; color:var(--bad)}
//@@CONTENT
/* =====================================================================
   CONTENT — Module 35: Risk  (opens the Risk & Insurance block)
   Vocab: risk, loss.
   Built toward the PISA financial-literacy "risk and reward" content:
   recognising risk, judging it by likelihood × size of loss, and
   choosing a response (avoid / reduce / keep / share).
   Callback: "risky" was used informally in M17 (the storm and the tin).
   "Share the risk" is SHOWN here as the fourth way and NAMED as
   insurance in M37. No probabilities or numbers to compute.
===================================================================== */
const VOCAB = {
  risk:{term:"risk", def:"The chance that something bad could happen that costs you money. Ask two questions: how likely is it, and how big would the loss be?"},
  loss:{term:"loss", def:"The money or things you lose when something bad happens. A torn sail is a $60 loss for Kai."}
};

const QUESTIONS = {
  "q351a":{type:"mc", prompt:"What is a risk?", concept:"risk", opts:[
    {t:"The chance that something bad might happen and cost you money", ok:true, fb:"Right. Not a sure thing — a chance. The storm MIGHT tear the sail."},
    {t:"Something bad that has already happened and already cost you money", ok:false, fb:"Once it has happened, it is a loss. A risk is the chance of it happening."},
    {t:"A kind of fee from the bank", ok:false, fb:"A fee is a certain charge. A risk is a chance that something bad might happen."}]},
  "q351b":{type:"mc", prompt:"The storm tears Kai’s sail. The sail cost $60. What is the $60?", concept:"loss", opts:[
    {t:"A loss — money gone because something bad happened", ok:true, fb:"Right. The risk was the chance of a tear. The loss is what the tear actually cost."},
    {t:"Income", ok:false, fb:"Income comes IN. A torn sail sends money out — it is a loss."},
    {t:"A refund — the $60 he paid for the sail coming back to him", ok:false, fb:"A refund gives money back. Here money is lost."}]},
  "q351c":{type:"tf", prompt:"True or false: every choice has zero risk if you are careful enough.", answer:false, concept:"risk",
    good:"Right. Care can make risk smaller, but some chance of something bad almost always stays.",
    bad:"Careful people still face risk. Care can shrink it, but almost nothing is zero risk."},
  "q352a":{type:"mc", prompt:"What are the two questions to ask about any risk?", concept:"risk", opts:[
    {t:"How likely is it? How big would the loss be?", ok:true, fb:"Right. A likely small loss and an unlikely huge loss need very different plans."},
    {t:"Who is to blame for it? And exactly when will it happen?", ok:false, fb:"Blame does not help plan. Ask: how likely is it, and how big would the loss be?"},
    {t:"Is it a need or a want?", ok:false, fb:"That is a budgeting question. For risk, ask how likely and how big."}]},
  "q352b":{type:"mc", prompt:"Which risk deserves the MOST planning?", concept:"loss", opts:[
    {t:"A likely risk with a big loss — like storm season and a new sail", ok:true, fb:"Right. It will probably happen, and it would hurt a lot. That is where planning pays off most."},
    {t:"An unlikely risk with a tiny loss", ok:false, fb:"Rare and small? Hardly worth worrying about. Save your planning for likely, big losses."},
    {t:"Losing a $1 fish hook", ok:false, fb:"That happens, but it is small. Kai can just pay for a new one. The big, likely risks need more planning."}]},
  "q353a":{type:"mc", prompt:"Kai checks the sky and stays in the harbor when a storm is coming. Which way of handling risk is that?", concept:"risk", opts:[
    {t:"Avoid it — not doing the risky thing at all", ok:true, fb:"Right. No sailing in the storm, no storm damage from sailing."},
    {t:"Keep it — sailing anyway and paying for any loss himself", ok:false, fb:"Keeping it would mean sailing anyway and paying if the sail tears. Kai stayed in, so he avoided it."},
    {t:"Share it with others", ok:false, fb:"Sharing spreads the cost of a loss across many people. Staying in port avoids the risk entirely."}]},
  "q353c":{type:"mc", prompt:"Kai loses a $1 fish hook most weeks. What is the sensible way to handle that risk?", concept:"loss", opts:[
    {t:"Keep it — just pay for a new hook when it happens", ok:true, fb:"Right. Small, expected losses are simply part of the budget. No big plan needed."},
    {t:"Stop fishing forever", ok:false, fb:"Avoiding fishing would cost him his job! For a tiny loss, just keep the risk and buy a new hook."},
    {t:"Borrow money for a big box of hooks, so he never runs out", ok:false, fb:"Borrowing makes things cost more. A $1 loss fits right in his budget."}]},
  "q353b":{type:"mc", transfer:true, prompt:"Mika wears a helmet every time she rides her bike. Which way of handling risk is that?", concept:"risk", opts:[
    {t:"Reduce it — she still rides, but a fall would hurt far less", ok:true, fb:"Exactly. Same as Kai tying down the sail before a storm: the risk is still there, just smaller."},
    {t:"Avoid it — she never rides", ok:false, fb:"She does ride! Avoiding would mean never riding. The helmet makes the risk smaller."},
    {t:"Keep it — she ignores the risk", ok:false, fb:"She is not ignoring it — she is doing something about it. That is reducing."}]}
};

const CFG = {
  n:35, title:"Risk", homeSub:"Four short lessons. The storm, the sail, and how to think about what could go wrong.",
  pool:["q351a","q351b","q351c","q352a","q352b","q353a","q353c"], transfer:"q353b",
  quest:"You learned what risk and loss are, how to size up a risk, and four ways to handle one.",
  failKeys:"The keys: a risk is the chance of something bad that costs money, a loss is what it actually costs, size up a risk by how likely and how big, and you can avoid, reduce, keep, or share it.",
  badge:" · Risk & Insurance block begins ⛈️",
  nextFile:"module-36-emergency-fund.html",
  passStory:'<p><strong>You now own:</strong> risk and loss.</p>'+
    '<p>The storm passes. The sail survives — barely. But Tavo is not so lucky: a wave smashes his boat against the dock. The repair will cost $40, and he needs it fixed this week to keep fishing.</p>'+
    '<p>He does not borrow. He does not panic. He walks to the bank and takes $40 out of a savings account Kai has never heard of.</p>'+
    '<p>"What is that account for?" Kai asks.</p>'+
    '<p>"Days exactly like this one," Tavo says.</p>'+
    '<p class="muted">Module 36: The Emergency Fund.</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about risk, loss, or ways to handle what could go wrong — or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 35 (Risk) of a financial-literacy app, the first module of the Risk & Insurance block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, multiply, buy, sell, pay, earn, work, spend, need, save, goal, percent, bank, deposit, withdraw, balance, checking, savings, transaction, notification, interest, grow, fee, overdraft, PIN, scam, budget, cushion, borrow, loan, lend, owe, debt, debit card, credit card, credit score, due date, lender, minimum payment, employer, wage, paycheck, income, tax, take-home pay, sales tax, receipt, tax return, refund. "+
  "From THIS module: risk (the chance that something bad could happen that costs you money) and loss (the money or things you lose when it does happen). Size up a risk with two questions: how likely is it, and how big would the loss be? Four ways to handle a risk: avoid it (don't do the risky thing), reduce it (make it less likely or less bad, like tying down a sail or wearing a helmet), keep it (pay small losses yourself), share it (spread the cost of a big loss across many people — named in a later module). "+
  "TEACHING STYLE: concepts over calculations. No probabilities, odds, or percentages. Keep answers about WHY and WHICH. Do not frighten the learner; risk is normal and manageable. "+
  "STRICT RULES: never use these words (later modules): insurance, premium, deductible, claim, policy, coverage, emergency fund, emergency, invest, stock, diversify. If the learner uses one, answer briefly in plain words and say it is coming later. "+
  "Story context: a storm threatened Kai's new $60 sail (in Module 17 a storm also made his tin under the floorboard feel risky). Kai sorted risks by how likely and how big (a lost fish hook, a torn sail in storm season, a rare giant wave, a rarely cracked cup), then learned avoid, reduce, keep, share. "+
  "Never repeat a failed explanation — switch analogies (a helmet, an umbrella, checking the sky before sailing). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple 'which way of handling it?' question and wait.";
//@@LESSONS
/* =====================================================================
   SIMULATOR — a 2×2 "how likely × how big" board. Each risk has clear
   hints in its text so the right square never depends on opinion.
===================================================================== */
const RISKS=[
  {t:"🪝 Losing a $1 fish hook overboard", hint:"Happens almost every week.", q:"q1", why:"Likely (every week) but small ($1). Just part of fishing."},
  {t:"⛵ The storm tearing Kai’s $60 sail", hint:"It is storm season — storms come often.", q:"q2", why:"Likely (storm season) AND big ($60). This is the one to plan for."},
  {t:"🌊 A giant wave sinking the whole boat", hint:"It has not happened on this island in fifty years.", q:"q4", why:"Rare — but if it happened, the loss would be huge."},
  {t:"🥤 Kai’s $1 cup cracking on a calm day", hint:"It has almost never happened.", q:"q3", why:"Rare AND small. Not worth a second thought."}
];
const Q_LABEL={q1:"Likely · small loss", q2:"Likely · big loss", q3:"Unlikely · small loss", q4:"Unlikely · big loss"};
function board(){
  return '<div class="grid2">'+
    '<button class="q1" data-bot="1" data-q="q1">Likely<small>small loss</small></button>'+
    '<button class="q2" data-bot="1" data-q="q2">Likely<small>BIG loss</small></button>'+
    '<button class="q3" data-bot="1" data-q="q3">Unlikely<small>small loss</small></button>'+
    '<button class="q4" data-bot="1" data-q="q4">Unlikely<small>BIG loss</small></button></div>';
}

/* =====================================================================
   LESSON 1 — The Storm
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · The storm</div>
    <div class="recap"><strong>Kai’s story so far:</strong> A whole season of work, and the sail is finally his. Then the sky turns grey.</div>
    <div class="scene">⛈️⛵<div class="cap">Tavo: "What happens to that sail if the storm tears it in half?"</div></div>
    <div class="card"><p>Kai has felt this before. Back in Module 17, a storm made his tin under the floorboard feel <em>risky</em> — and that is why he opened a bank account.</p>
    <p>Now the word gets its full meaning.</p></div>
    <button onclick="next()">What is risk?</button>`),
  ()=>show(`<div class="kicker">Lesson 1</div>
    <div class="card"><p>A <strong>risk</strong> is the chance that something bad could happen that costs you money.</p>
    <p>It is not a sure thing. The storm <em>might</em> tear the sail. Or it might not.</p></div>
    ${more('<p>Risk is everywhere, and that is okay. Riding a bike, planting seeds, even carrying eggs home: something could go wrong.</p>'+
      '<p>Most of the time, nothing bad happens. Thinking about risk is not about being scared. It is about being ready, so one bad day does not ruin a whole season.</p>')}
    <button onclick="earnWord('risk');next()">New word: risk</button>`),
  ()=>show(`<div class="kicker">Lesson 1 · And if it happens?</div>
    <div class="sailcard"><div>If the sail tears, Kai loses</div><div class="v">$60</div></div>
    <div class="card"><p>If the bad thing actually happens, what you lose is called a <strong>loss</strong>.</p>
    <p>The risk is the <em>chance</em>. The loss is the <em>cost</em>. Kai’s whole season of saving could be a $60 loss in one gust.</p></div>
    ${more('<p>A loss can be bigger than the price of the thing. If the sail tears, Kai cannot fish until he gets a new one. No fishing means no fish to sell.</p>'+
      '<p>So the real loss is the cost of a new sail, plus the money he misses while his boat sits still.</p>')}
    <button onclick="earnWord('loss');next()">New word: loss</button>`),
  ()=>renderMC("q351a", next),
  ()=>renderMC("q351b", next),
  ()=>renderTF("q351c", next),
];

/* =====================================================================
   LESSON 2 — How Likely, How Big (2×2 sort)
===================================================================== */
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · Two questions</div>
    <div class="recap"><strong>So far:</strong> risk is the chance; loss is the cost.</div>
    <div class="card"><p>Tavo has been fishing for thirty years. He sizes up every risk with two questions:</p>
    <p style="text-align:center; font-size:18px"><strong>How likely is it?<br>How big would the loss be?</strong></p>
    <p>A likely little loss and a rare huge one need very different plans. Try sorting four of Kai’s risks.</p></div>
    <button onclick="next()">Sort four risks</button>`),
  ()=>{
    let i=0;
    function draw(){
      if(i>=RISKS.length){ addXP(4); next(); return; }
      const r=RISKS[i];
      show(`<div class="kicker">How likely, how big? · ${i+1} of ${RISKS.length}</div>
        <div class="item">${r.t}<div class="sub">${r.hint}</div></div>
        ${board()}
        <div id="fb"></div><div id="cont"></div>`);
      let done=false;
      document.querySelectorAll(".grid2 button").forEach(b=>{
        b.onclick=()=>{
          if(done) return;
          const ok=b.dataset.q===r.q;
          document.getElementById("fb").innerHTML='<div class="feedback '+(ok?'good':'bad')+'">'+(ok?'Right — '+r.why:'Not quite. Look at the hint: how often does it happen, and how much would it cost? Try again.')+'</div>';
          revealFB();
          if(ok){
            done=true; addXP(1);
            document.querySelectorAll(".grid2 button").forEach(x=>x.disabled=true);
            document.getElementById("cont").innerHTML=(i===RISKS.length-1?more('<p>Did you notice? The giant wave is rare, but it could sink the whole boat. Rare does not mean safe to ignore when the loss would be huge.</p>'+
      '<p>The fish hook is the opposite. It happens all the time, but each loss is tiny. Different kinds of risk need different plans.</p>'):'')+'<button onclick="window._n()">'+(i<RISKS.length-1?"Next":"Done")+'</button>';
            window._n=()=>{ i++; draw(); };
            revealFB();
          } else { b.disabled=true; }
        };
      });
    }
    draw();
  },
  ()=>renderMC("q352a", next),
  ()=>renderMC("q352b", next),
];

/* =====================================================================
   LESSON 3 — Four Ways to Handle a Risk
===================================================================== */
const L3=[
  ()=>show(`<div class="kicker">Lesson 3 · Four ways</div>
    <div class="recap"><strong>So far:</strong> likely and big risks need the most planning.</div>
    <div class="ways">
      <div><span>🚫</span><strong>Avoid it</strong>Don’t do the risky thing. Stay in port when a storm is coming.</div>
      <div><span>🪢</span><strong>Reduce it</strong>Make it less likely or less bad. Tie the sail down tight.</div>
      <div><span>👛</span><strong>Keep it</strong>Pay small losses yourself. A lost hook? Buy another.</div>
      <div><span>🤝</span><strong>Share it</strong>Many people chip in, so no one faces a huge loss alone. <em>(More on this soon.)</em></div>
    </div>
    <div class="card"><p>Tavo uses all four. He never sails in a storm. He ties everything down. He buys new hooks without a second thought.</p>
    <p>And for the really big ones — the ones that could sink him — he shares the risk with other fishers. Kai will learn how that works in Module 37.</p></div>
    ${more('<p>How can sharing help? Picture ten fishers. Each year, one of their boats might get badly hurt. That one fisher could not pay for the repair alone.</p>'+
      '<p>But if all ten put in a few dollars every season, there is enough to fix whichever boat breaks. Each one pays a little, so nobody loses everything.</p>')}
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q353a", next),
  ()=>renderMC("q353c", next),
];
const META=[
  {title:"The Storm", sub:"Risk is the chance; loss is the cost", emoji:"⛈️"},
  {title:"Two Questions", sub:"How likely? How big? Sort four", emoji:"🎯"},
  {title:"Four Ways", sub:"Avoid, reduce, keep, share", emoji:"🧭"},
];
