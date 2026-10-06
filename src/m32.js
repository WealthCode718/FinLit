//@@META
title=Taxes
file=module-32-taxes.html
placeholder=Ask about taxes and take-home pay…
//@@CSS
  .stub{background:#fffdf5; border:2px solid var(--sand-deep); border-radius:12px; padding:14px 16px; margin-bottom:12px; font-size:15px}
  .stub .hd{display:flex; justify-content:space-between; font-weight:700; border-bottom:2px solid var(--ink); padding-bottom:6px; margin-bottom:4px}
  .stub .row{display:flex; justify-content:space-between; padding:5px 0; border-bottom:1px dashed var(--sand-deep)}
  .stub .row.out span:last-child{color:var(--bad); font-weight:700}
  .stub .net{display:flex; justify-content:space-between; font-weight:700; font-size:18px; padding-top:8px; background:#eef7f2; margin:6px -8px 0; padding:8px; border-radius:8px}
  .stub .net span:last-child{font-family:"Fraunces",Georgia,serif; color:var(--good)}
  .shared{display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin-bottom:12px}
  .shared div{background:#fff; border:2px solid #d9e2de; border-radius:12px; padding:10px 4px; text-align:center; font-size:13px; font-weight:600}
  .shared div span{display:block; font-size:28px}
  .sortbar .yes{background:var(--good)}
  .sortbar .no{background:var(--ink)}
  .flow{display:flex; align-items:center; justify-content:center; gap:8px; flex-wrap:wrap; font-size:15px; font-weight:600; margin:6px 0 12px}
  .flow .pill{background:#fff; border:2px solid #d9e2de; border-radius:999px; padding:6px 12px}
//@@CONTENT
/* =====================================================================
   CONTENT — Module 32: Taxes
   Vocab: tax, take-home pay.
   Names the "Taxes −$4.00" line SHOWN in M31 (show-then-name).
   Neutral and descriptive: what a tax is, what it pays for, how it is
   taken from a paycheck. No rates, brackets, or "how much" math, and no
   opinions on how much tax is right — the tutor is told to stay even-
   handed if asked.
   "government" is used as a plain word (defined in-line as the people
   chosen to run a place — on the island, the island council).
===================================================================== */
const VOCAB = {
  tax:{term:"tax", def:"Money people pay to the government to pay for things everyone shares — like schools, roads, the harbor, and the lighthouse. Paying taxes is required, not a choice."},
  takehome:{term:"take-home pay", def:"The part of your pay you actually get, after taxes are taken out. It is the number to plan your budget with."}
};

const QUESTIONS = {
  "q321a":{type:"mc", prompt:"What is a tax?", concept:"tax", opts:[
    {t:"Money people pay to the government to pay for things everyone shares", ok:true, fb:"Right. Lighthouses, schools, the harbor wall — things no one person could pay for alone."},
    {t:"A fee the bank charges for your account", ok:false, fb:"That is a bank fee. A tax goes to the government, to pay for shared things."},
    {t:"Money you choose to give if you feel like it", ok:false, fb:"A gift is a choice. Taxes are required — everyone pays their part."}]},
  "q321b":{type:"mc", prompt:"Why do people pay for a lighthouse with taxes instead of one person buying it?", concept:"tax", opts:[
    {t:"It costs too much for one person, and everyone uses it", ok:true, fb:"Right. Everyone chips in a little, and everyone’s boat gets home safely."},
    {t:"Because the lighthouse keeper asked everyone nicely, so they all agreed to help", ok:false, fb:"Asking nicely would not build a lighthouse! It is too big for one person, and everyone shares it."},
    {t:"Because lighthouses are free", ok:false, fb:"Nothing that big is free. Taxes are how everyone shares the cost."}]},
  "q321c":{type:"tf", prompt:"True or false: paying taxes is optional — you can skip it if you would rather keep the money.", answer:false, concept:"tax",
    good:"Right. Taxes are required. That is what lets everyone count on the lighthouse being lit.",
    bad:"Taxes are required, not optional. If people could skip, the shared things everyone counts on would not get paid for."},
  "q322a":{type:"mc", prompt:"Which of these is usually paid for with taxes?", concept:"tax", opts:[
    {t:"The island school", ok:true, fb:"Right. Every child can go, and everyone chips in through taxes."},
    {t:"Kai’s new kite", ok:false, fb:"That is Kai’s own want, paid with his own money. Taxes pay for things everyone shares."},
    {t:"Tavo’s fishing boat", ok:false, fb:"Tavo’s boat is his own, paid with his own money and his loan. Taxes pay for shared things."}]},
  "q322b":{type:"tf", prompt:"True or false: things paid for with taxes can be used by everyone, not just the person who paid the most.", answer:true, concept:"tax",
    good:"Right. The lighthouse shines for every boat. That is the point of sharing the cost.",
    bad:"They are shared. The lighthouse shines for every boat, no matter who paid what."},
  "q323a":{type:"mc", prompt:"What is take-home pay?", concept:"takehome", opts:[
    {t:"The part of your pay you keep after taxes are taken out", ok:true, fb:"Right. For Kai: earned $40, taxes $4, take-home pay $36."},
    {t:"All the money you earned for your work, before anything is taken out", ok:false, fb:"That is the earned amount ($40 for Kai). Take-home pay is what is left after taxes ($36)."},
    {t:"Money you carry home in your pocket", ok:false, fb:"It is not about pockets — even pay that goes straight into checking is take-home pay. It is what is left after taxes."}]},
  "q323c":{type:"mc", prompt:"Why does Tavo take the tax out of Kai’s pay before paying him?", concept:"tax", opts:[
    {t:"So the tax gets sent to the government for Kai, a little at a time", ok:true, fb:"Right. The employer passes it along, so Kai does not have to find the money later all at once."},
    {t:"So Tavo can keep a little extra for his boat, since he is the one paying Kai", ok:false, fb:"Tavo does not keep it. He sends it on to the government, for Kai."},
    {t:"Because Kai made a mistake", ok:false, fb:"No mistake at all. It happens to everyone’s paycheck — the employer passes the tax along."}]},
  "q323b":{type:"mc", transfer:true, prompt:"Every family on the island drops a few fish into a shared barrel. The fish feed whoever is fixing the harbor wall that week. What is this most like?", concept:"tax", opts:[
    {t:"Taxes — everyone chips in a little to pay for something everyone shares", ok:true, fb:"Exactly. No money involved, but the same shape: small parts from everyone, one shared thing that helps everyone."},
    {t:"A loan — the families will get the fish back", ok:false, fb:"The fish do not come back. They pay for shared work. That is the tax shape, not borrowing."},
    {t:"A scam — someone is tricking the families", ok:false, fb:"Nobody is pretending or tricking. Everyone knows where the fish go: the shared harbor wall."}]}
};

const CFG = {
  n:32, title:"Taxes", homeSub:"Four short lessons. Where Kai’s four dollars went.",
  pool:["q321a","q321b","q321c","q322a","q322b","q323a","q323c"], transfer:"q323b",
  quest:"You learned what taxes are, what they pay for, and why take-home pay is the number to plan with.",
  failKeys:"The keys: a tax is money paid to the government for things everyone shares, it is required, and take-home pay is what you actually get after taxes — plan with that.",
  nextFile:"module-33-sales-tax.html",
  passStory:'<p><strong>You now own:</strong> tax and take-home pay — and Kai knows exactly where his four dollars went.</p>'+
    '<p>On Saturday he takes $10 of his take-home pay to the market for a new net. The tag says <strong>$10.00</strong>. Perfect.</p>'+
    '<p>He hands over his ten dollars. The shopkeeper shakes her head. "Ten dollars and sixty cents, please."</p>'+
    '<p>"But the tag says ten!"</p>'+
    '<p class="muted">Module 33: Sales Tax.</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about taxes or take-home pay — or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 32 (Taxes) of a financial-literacy app, in the Earning & Taxes block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, multiply, buy, sell, pay, earn, work, spend, need, save, goal, percent, bank, deposit, withdraw, balance, checking, savings, transaction, notification, interest, grow, fee, overdraft, PIN, scam, budget, cushion, borrow, loan, lend, owe, debt, debit card, credit card, credit score, due date, lender, minimum payment, employer, wage, paycheck, income. "+
  "From THIS module: tax (money people pay to the government to pay for things everyone shares, like schools, roads, the harbor, rescue boats, the lighthouse; required, not optional) and take-home pay (the part of your pay you actually get after taxes are taken out; plan your budget with it). Employers usually take the tax out of each paycheck and pass it to the government, a little at a time. 'Government' means the people chosen to run a place; on the island it is the island council. "+
  "NEUTRALITY: describe what taxes are and do. Do not give opinions on whether taxes should be higher or lower or what they should be spent on. If asked, say people disagree about that, and those choices are made by governments and the people who choose them. "+
  "TEACHING STYLE: concepts over calculations. Do not give tax rates, brackets, percentages, or real-country rules; say rules differ from place to place and depend on things like how much someone earns. "+
  "STRICT RULES: never use these words (later modules): sales tax, receipt, tax return, refund, withholding, W-2, deduction, bracket, IRS, filing, invest, stock, insurance, retirement. If the learner uses one, answer briefly in plain words and say it is coming later. "+
  "Story context: Kai's pay slip showed earned $40, taxes -$4, paid to you $36. Rana pointed at the lighthouse and explained taxes pay for shared things. Kai sorted things paid for by taxes (lighthouse, school, harbor wall, rescue boat) from things people buy themselves (a kite, Tavo's boat), then learned the $36 is his take-home pay. "+
  "Never repeat a failed explanation — switch analogies (a shared fish barrel, everyone chipping in for a village feast, a class buying one big ball everyone plays with). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple question and wait.";
//@@LESSONS
function stub(){
  return '<div class="stub"><div class="hd"><span>Tavo’s Boat · Pay slip</span><span>Kai</span></div>'+
    '<div class="row"><span>Earned</span><span>$40.00</span></div>'+
    '<div class="row out"><span>Taxes</span><span>−$4.00</span></div>'+
    '<div class="net"><span>Take-home pay</span><span>$36.00</span></div></div>';
}
const SHARED='<div class="shared"><div><span>🗼</span>Lighthouse</div><div><span>🏫</span>School</div><div><span>⚓</span>Harbor wall</div>'+
  '<div><span>🛟</span>Rescue boat</div><div><span>🛤️</span>Island path</div><div><span>🏥</span>Clinic</div></div>';

/* =====================================================================
   LESSON 1 — The Lighthouse
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · The lighthouse</div>
    <div class="recap"><strong>Kai’s story so far:</strong> His first paycheck said $40 earned, but only $36 arrived. One line said <em>Taxes −$4.00</em>.</div>
    <div class="scene">🗼🌊<div class="cap">Rana points up the hill. "Who paid for that?"</div></div>
    <div class="card"><p>Kai thinks. Not Tavo. Not Rana. Not any one person — a lighthouse costs far more than anyone on the island has.</p>
    <p>"Everybody," Rana says. "A little each."</p></div>
    <button onclick="next()">How?</button>`),
  ()=>show(`<div class="kicker">Lesson 1</div>
    ${SHARED}
    <div class="card"><p>The island is run by a group of people chosen to make rules and look after shared things: the island council. Most places call that group the <strong>government</strong>.</p>
    <p>To pay for things everyone shares, everyone who earns pays a part of what they earn to the government. That part is called a <strong>tax</strong>.</p>
    <p>It is not a fee to a bank, and it is not a choice. It is how the lighthouse stays lit for every boat — including Tavo’s, with Kai on it.</p></div>
    ${more('<p>Why not let each person pay only for what they use? Some things only work if everyone chips in. One family could never pay for a whole lighthouse, but a whole island can.</p>'+
      '<p>How much tax someone pays depends on the rules where they live, and often on how much they earn. Rules differ from place to place.</p>'+
      '<p>Ask a trusted adult to point out something near you that taxes helped pay for, like a road or a park.</p>')}
    <button onclick="earnWord('tax');next()">New word: tax</button>`),
  ()=>renderMC("q321a", next),
  ()=>renderMC("q321b", next),
  ()=>renderTF("q321c", next),
];

/* =====================================================================
   LESSON 2 — Paid by Taxes? (sort)
===================================================================== */
const THINGS=[
  {t:"🗼 The lighthouse", yes:true, why:"Shared by every boat on the water. Taxes."},
  {t:"🪁 Kai’s new kite", yes:false, why:"Kai’s own want, from his own wants money."},
  {t:"🏫 The island school", yes:true, why:"Every child can go. Taxes."},
  {t:"🚤 Tavo’s fishing boat", yes:false, why:"Tavo’s own boat, paid with his own money and his loan."},
  {t:"⚓ Fixing the harbor wall after a storm", yes:true, why:"Everyone’s boats are protected by it. Taxes."},
  {t:"🛟 The rescue boat", yes:true, why:"It comes for anyone in trouble. Taxes."}
];
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · Shared or mine?</div>
    <div class="recap"><strong>So far:</strong> a tax is money paid to the government for things everyone shares.</div>
    <div class="card"><p>Here is the quick test: <strong>does everyone share it, or does one person own it?</strong></p>
    <p>Shared things are usually paid for with taxes. Things you own, you pay for yourself.</p></div>
    <button onclick="next()">Sort six things</button>`),
  ()=>{
    let i=0;
    function draw(){
      if(i>=THINGS.length){ addXP(6); next(); return; }
      const m=THINGS[i];
      show(`<div class="kicker">Paid by taxes? · ${i+1} of ${THINGS.length}</div>
        <div class="item">${m.t}</div>
        <div class="sortbar"><button class="yes" id="sYes">Paid by taxes</button><button class="no" id="sNo">Paid by its owner</button></div>
        <div id="fb"></div><div id="cont"></div>`);
      let done=false;
      function pick(saysYes){
        if(done) return;
        const ok = saysYes===m.yes;
        document.getElementById("fb").innerHTML='<div class="feedback '+(ok?'good':'bad')+'">'+(ok?'Right — ':'Not quite. ')+m.why+(ok?'':' Try again.')+'</div>';
        revealFB();
        if(ok){
          done=true; addXP(1);
          document.getElementById("sYes").disabled=true; document.getElementById("sNo").disabled=true;
          document.getElementById("cont").innerHTML=(i===THINGS.length-1?more('<p>Real life is not always so neat. Some shared things also cost a little to use, like a small fee to ride a ferry. Places mix the two in different ways.</p>'+
            '<p>The big idea stays the same: taxes pay for things everyone needs that no one person could pay for alone.</p>'):'')+'<button onclick="window._n()">'+(i<THINGS.length-1?"Next":"Done")+'</button>';
          window._n=()=>{ i++; draw(); };
          revealFB();
        }
      }
      document.getElementById("sYes").onclick=()=>pick(true);
      document.getElementById("sNo").onclick=()=>pick(false);
    }
    draw();
  },
  ()=>renderMC("q322a", next),
  ()=>renderTF("q322b", next),
];

/* =====================================================================
   LESSON 3 — Take-Home Pay
===================================================================== */
const L3=[
  ()=>show(`<div class="kicker">Lesson 3 · The number that lands</div>
    <div class="recap"><strong>So far:</strong> taxes pay for shared things like the lighthouse and the school.</div>
    <div class="card"><p>So how did Kai’s $4 get to the island council? He never went there.</p>
    <p>Tavo, his employer, took the tax out <em>before</em> paying him, and sent it along for him.</p></div>
    <div class="flow"><span class="pill">Kai earns $40</span><span>→</span><span class="pill">Tavo sends $4 tax</span><span>→</span><span class="pill">Kai gets $36</span></div>
    <div class="card"><p>That way Kai pays his part a little at a time, instead of having to find it all at once later.</p></div>
    ${more('<p>Taking the tax out before payday is easier for everyone. Kai never has to remember, and the island council gets it a little at a time.</p>'+
      '<p>It is like a budget that does one part for you, before the money even arrives.</p>'+
      '<p>People who work for themselves, like someone selling their own fish, have no employer to do this. They often have to set that money aside on their own.</p>')}
    <button onclick="next()">And the $36?</button>`),
  ()=>show(`<div class="kicker">Lesson 3</div>
    ${stub()}
    <div class="card"><p>The part of your pay you actually get, after taxes, is your <strong>take-home pay</strong>.</p>
    <p>Remember Module 31? Kai planned his budget with $36, not $40. Now he has the name for it. <strong>Always plan with take-home pay</strong> — it is the only part you can spend.</p></div>
    ${more('<p>When people talk about pay, they often say the big number: “The job pays $40!” But the number that lands in the account is smaller.</p>'+
      '<p>Comparing two jobs? Ask what the take-home pay would be. That is the money you can really budget, spend, and save.</p>')}
    <button onclick="earnWord('takehome');next()">New word: take-home pay</button>`),
  ()=>renderMC("q323a", next),
  ()=>renderMC("q323c", next),
];
const META=[
  {title:"The Lighthouse", sub:"Who paid for it? Everybody.", emoji:"🗼"},
  {title:"Shared or Mine?", sub:"Sort what taxes pay for", emoji:"⚓"},
  {title:"The Number That Lands", sub:"Take-home pay, named", emoji:"💵"},
];
