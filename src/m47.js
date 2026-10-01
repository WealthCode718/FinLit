//@@META
title=Contracts & Your Rights
file=module-47-contracts-and-your-rights.html
placeholder=Ask about contracts and consumer rights…
//@@CSS
  .week{font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:#fff; background:var(--shell); display:inline-block; border-radius:6px; padding:2px 10px; margin-bottom:8px; font-weight:700}
  .stars{font-size:28px; letter-spacing:4px; text-align:center; margin:6px 0}
  .paper{background:#fffdf5; border:2px solid var(--sand-deep); border-radius:10px; padding:14px 16px; margin-bottom:12px; font-size:14px}
  .paper .hd{font-family:"Fraunces",Georgia,serif; font-weight:700; font-size:18px; text-align:center; margin-bottom:4px}
  .paper .big{text-align:center; font-weight:800; color:#b4321d; font-size:16px; margin-bottom:8px}
  .paper .cl{display:block; width:100%; text-align:left; background:#fff; color:var(--ink); border:1px dashed var(--sand-deep); border-radius:8px; padding:8px 10px; margin:6px 0; font-size:13px; font-weight:500; line-height:1.4; min-height:44px}
  .paper .cl.catch{background:#f8e6e3; border:2px solid var(--bad)}
  .paper .cl.ok{background:#e8f3ee; border:2px solid var(--good)}
  .paper .sign{margin-top:10px; border-top:1px solid var(--ink-soft); padding-top:4px; font-size:12px; color:var(--ink-soft)}
  .tally{text-align:center; font-weight:700; margin-bottom:8px}
  .sortbar .yes{background:var(--good)} .sortbar .no{background:var(--ink)}
//@@CONTENT
/* =====================================================================
   MODULE 47 — CONTRACTS & YOUR RIGHTS  (Money World block, 2 of 4)
   Vocab: contract, consumer rights.
   L1: The blender paper. Tap every line; find the three catches
       (you only rent it; $8 a month for 3 years; $100 to cancel) plus
       "price may go up." Named: contract. Then a game free trial.
   L2: A broken flashlight + receipt (M33). "Is this my right?" sort.
       Named: consumer rights. How to complain calmly.
   L3: Sign or walk away? challenge (pressure to sign now, phone plan
       small print, written agreement with a friend, kids and contracts).
   Honest framing: rules differ from place to place; ask a trusted
   adult; this is not legal advice.
===================================================================== */
const VOCAB = {
  contract:{term:"contract", def:"An agreement, often written and signed, that both sides must follow. Signing means you agree to ALL of it, even the parts you didn't read."},
  rights:{term:"consumer rights", def:"Protections for people who buy things: to get what you paid for, to be told the real price, to get it fixed, replaced, or refunded if it's broken or not as promised, and to complain. The exact rules differ from place to place."}
};

const QUESTIONS = {
  "q471a":{type:"mc", prompt:"What is a contract?", concept:"contract", opts:[
    {t:"An agreement both sides must follow, often written and signed", ok:true, fb:"Right. Signing means you agree to all of it."},
    {t:"A suggestion you can ignore later", ok:false, fb:"A contract isn't a suggestion. Once you agree, both sides are expected to follow it."},
    {t:"An ad for a product", ok:false, fb:"An ad tries to make you want something. A contract is the agreement you're held to."}]},
  "q471b":{type:"mc", prompt:"Before signing the blender paper, which question matters MOST for Nalu to ask?", concept:"contract", opts:[
    {t:"“How much will I pay in total, and what does it cost to stop?”", ok:true, fb:"Right. $8 a month for 3 years, plus $100 to cancel. The total and the way out are where the catches hide."},
    {t:"“What color is the blender?”", ok:false, fb:"Nice to know, but the big questions are the total cost and how to get out of it."},
    {t:"“Can I sign it really fast?”", ok:false, fb:"Speed helps the seller, not Nalu. Ask about the total cost and how to cancel."}]},
  "q471c":{type:"tf", prompt:"True or false: if you sign a contract, you've agreed to everything in it, even the parts you didn't read.", answer:true, concept:"contract",
    good:"Right. That's why you read it all, especially the small print, before you sign.",
    bad:"Look again. Your signature says you agree to the WHOLE thing. Not reading a part doesn't get you out of it."},
  "q472a":{type:"mc", prompt:"What are consumer rights?", concept:"rights", opts:[
    {t:"Protections for buyers, like getting what you paid for and a fix or refund when it's broken", ok:true, fb:"Right. The exact rules differ from place to place, but the idea is the same: buyers are protected."},
    {t:"Rules that say a store must give anything back for any reason", ok:false, fb:"Not quite. If you just change your mind, it depends on the store's rules. Broken or not as promised is different."},
    {t:"Special deals only for loyal customers", ok:false, fb:"Those are deals. Consumer rights are protections every buyer has."}]},
  "q472b":{type:"mc", prompt:"Kai's new $6 flashlight doesn't work, right out of the box. He has the receipt. What should he do?", concept:"rights", opts:[
    {t:"Go back calmly with the receipt and ask for a repair, a new one, or his money back", ok:true, fb:"Right. It's broken and he has proof he bought it. That's exactly what consumer rights are for."},
    {t:"Nothing. He already paid", ok:false, fb:"He paid for a flashlight that works. Broken out of the box means he can ask the store to make it right."},
    {t:"Shout at the seller until they give him two", ok:false, fb:"Calm, clear, with the receipt works better, and he's only owed what he paid for."}]},
  "q473a":{type:"mc", prompt:"Kai's game offers: “7 days FREE! Then $5 every month until you cancel.” What's the smart move if he tries it?", concept:"contract", opts:[
    {t:"Know it's an agreement to pay, and set a reminder to cancel before day 7 if he doesn't want it", ok:true, fb:"Right. A free trial is a contract. If he forgets, $5 leaves every month."},
    {t:"Tap yes. Free is free", ok:false, fb:"Only the first 7 days are free. After that it's $5 a month until he cancels."},
    {t:"It can't charge him, because he's young", ok:false, fb:"If a payment card is linked, it can. Ask a parent, and set a reminder."}]},
  "q473b":{type:"mc", transfer:true, prompt:"Lena's brother sees “FREE PHONE TODAY!” The small print says: “With a 24-month plan at $30 a month. $200 fee to cancel early.” What's true?", concept:"contract", opts:[
    {t:"The phone isn't really free. It's a 2-year contract with a big fee to leave early, so he should read it all first", ok:true, fb:"Exactly. Different paper, same catches as Nalu's blender: a long time, monthly payments, and a cost to get out."},
    {t:"The phone is free, so there's nothing to think about", ok:false, fb:"The small print says $30 a month for 24 months, and $200 to quit early. That's a big contract."},
    {t:"He can cancel any time for free", ok:false, fb:"The paper says canceling early costs $200. Always check how to get out."}]}
};

const CFG = {
  n:47, title:"Contracts & Your Rights", homeSub:"Four short lessons. Read before you sign, and know what buyers are owed.",
  pool:["q471a","q471b","q471c","q472a","q472b","q473a"], transfer:"q473b",
  quest:"You found the catches in Nalu's blender contract, spotted a free-trial agreement, stood up for your rights with a broken flashlight, and decided when to sign and when to walk away.",
  failKeys:"The keys: a contract is an agreement you must follow, so read all of it before signing, especially the total cost and how to cancel; a free trial is a contract too; consumer rights mean you can ask for a fix, a new one, or a refund when something is broken or not as promised; and pressure to sign right now is a reason to slow down.",
  nextFile:null,
  passStory:'<p><strong>You now own:</strong> contract and consumer rights.</p>'+
    '<p>Nalu hands the paper back to the blender man. "No, thank you. I’ll buy my own blender for $40."</p>'+
    '<p>That afternoon a storm floods the low village across the bay. Families lose their boats and their nets. Kai looks at his savings, then at Rana.</p>'+
    '<p>"I want to help," he says. "But how do I know my money gets to the people who need it?"</p>'+
    '<p class="muted">Module 48 continues the Money World block. (Coming soon.)</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about contracts, small print, free trials, or your rights when you buy something. Or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 47 (Contracts & Your Rights) of a financial-literacy app, part of the Money World block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, multiply, price, cost, buy, sell, pay, spend, need, save, goal, budget, bank, savings, interest, fee, PIN, scam, borrow, loan, lend, owe, debt, credit card, due date, minimum payment, wage, paycheck, income, tax, receipt, refund, risk, emergency fund, insurance, policy, coverage, inflation, invest, stock, profit, investment fund, long-term, investment plan, advertising, value. "+
  "From THIS module: contract (an agreement, often written and signed, that both sides must follow; signing means agreeing to ALL of it) and consumer rights (protections for buyers: get what you paid for, be told the real price, get a repair, replacement, or refund when something is broken or not as promised, and be able to complain; exact rules differ from place to place). "+
  "Key points: read everything before signing, especially the total cost, how long it lasts, whether the price can change, and how to cancel; ask questions; never sign something you don't understand or a paper with blank spaces; get a copy; pressure to 'sign now' is a reason to slow down; a free trial that turns into a monthly charge is a contract, so set a reminder; in many places young people can't sign most contracts alone and a parent or guardian signs; changing your mind isn't always covered, so check the store's return rules; complain calmly with the receipt, say what happened and what you want. "+
  "TEACHING STYLE: concepts over calculations. Say rules differ by place and suggest asking a trusted adult for real situations; this is not legal advice. Never name real companies, apps, or brands. "+
  "STRICT RULES: never use these words (later modules): donate, charity, retirement. If the learner uses one, answer briefly in plain words and say it is coming later. "+
  "Story context: a man offered Nalu a paper: 'A brand-new blender every year!' Kai helped her read it. The catches: the blender stays the company's (she only rents it), $8 a month for 3 years, a $100 fee to cancel early, and the price can go up any time. Buying her own blender costs $40. Kai also saw a game offer: '7 days free, then $5 every month until you cancel.' Later his new $6 flashlight didn't work out of the box; he went back calmly with his receipt and got a new one. "+
  "Never repeat a failed explanation: switch examples (a phone plan, a gym membership, a club with monthly dues, a rental agreement for a bike). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple 'sign or ask first?' question and wait.";
//@@LESSONS
/* =====================================================================
   INTERACTIVES — the blender contract (tap each line), the rights sort,
   and the sign-or-walk-away challenge.
===================================================================== */
const CLAUSES=[
  {id:"c1", t:"1. Nalu gets a new BlendCo blender every year.", catchy:false, why:"This is the part the seller wants you to see. Fine, but keep reading."},
  {id:"c2", t:"2. The blender belongs to BlendCo. Nalu may use it while she pays.", catchy:true, why:"Catch! She never owns it. She's renting it. When the payments stop, the blender goes back."},
  {id:"c3", t:"3. Nalu pays $8 every month for 3 years.", catchy:true, why:"Catch! That's 36 payments of $8: $288. Buying her own blender costs about $40."},
  {id:"c4", t:"4. To stop before 3 years, Nalu pays a $100 fee.", catchy:true, why:"Catch! Getting out costs $100. Always check how to cancel."},
  {id:"c5", t:"5. BlendCo may raise the monthly price at any time.", catchy:true, why:"Catch! The $8 isn't even fixed. It could go up and she'd still be stuck."},
  {id:"c6", t:"6. Both sides keep a signed copy of this paper.", catchy:false, why:"Good. Always keep a copy of anything you sign."}
];
function paper(seen){
  return '<div class="paper"><div class="hd">📜 BlendCo Agreement</div><div class="big">🌀 A BRAND-NEW BLENDER EVERY YEAR! 🌀</div>'+
    CLAUSES.map(c=>'<button class="cl'+(seen.has(c.id)?(c.catchy?' catch':' ok'):'')+'" data-bot="1" data-id="'+c.id+'">'+(seen.has(c.id)?(c.catchy?'⚠️ ':'✅ '):'')+c.t+'</button>').join('')+
    '<div class="sign">Sign here: ______________________</div></div>';
}
const RIGHTS=[
  {t:"🔦 A new flashlight doesn’t work out of the box. Kai has the receipt.", yes:true, why:"Broken when bought. He can ask for a repair, a new one, or a refund."},
  {t:"🪁 Kai flew his kite all month, then decided he likes blue better than red.", yes:false, why:"It works fine and he used it. Changing your mind isn't usually a right. Some stores allow it, so check their rules."},
  {t:"🏷️ The tag says $3, but the register charges $5.", yes:true, why:"You should be told the real price. Point to the tag and ask them to fix it."},
  {t:"📦 Kai paid online for a hat that never arrived.", yes:true, why:"He didn't get what he paid for. Contact the seller, and ask a parent to help if it isn't fixed."},
  {t:"🍦 Kai ate his whole ice cream, then said he wanted chocolate instead.", yes:false, why:"He got exactly what he ordered and ate it. That's not something the seller has to fix."}
];
const MOVES=[
  {wk:"Sign now!", story:"A seller: \"This deal ends in 10 minutes! Just sign here, you can read it later.\"", opts:[
    {t:"Don't sign. Take the paper home, read it, and ask questions. If the deal disappears, so be it", ok:true, fb:"Right. A good deal survives a night of reading. “Sign now, read later” is a pressure trick."},
    {t:"Sign quickly, then read it at home", ok:false, fb:"Once you sign, you've agreed to everything, read or not. Read first."},
    {t:"Sign, but cross your fingers", ok:false, fb:"Your signature still counts. Don't sign until you've read and understood it."}]},
  {wk:"The blank space", story:"A form has a blank line next to “Monthly price: $____.” The seller says, \"I'll fill that in later.\"", opts:[
    {t:"Never sign a paper with blank spaces. Ask for the number first", ok:true, fb:"Right. A blank can be filled with anything after you sign. Get every number in writing first."},
    {t:"Sign, because the seller seems nice", ok:false, fb:"Nice or not, a blank can be filled in later with any number. Get it filled in first."},
    {t:"Sign, and guess the price", ok:false, fb:"Guessing isn't knowing. Never sign with blanks."}]},
  {wk:"A deal with a friend", story:"Mika wants to borrow $10 from Kai and pay it back in a month. Kai's mom suggests they write it down and both sign.", opts:[
    {t:"Good idea. A short written agreement protects both of them", ok:true, fb:"Right. A simple written contract means nobody forgets the amount or the date (Module 25)."},
    {t:"Bad idea, because friends don't need writing", ok:false, fb:"Writing isn't about trust. It's about remembering. It protects the friendship too."},
    {t:"Only if a bank signs it too", ok:false, fb:"A simple note with the amount, the date, and both names is enough between friends."}]},
  {wk:"Kai signs alone?", story:"Kai, who is 14, wants to sign up for a phone plan by himself.", opts:[
    {t:"In many places young people can't sign most contracts alone, so a parent or guardian helps", ok:true, fb:"Right. Rules differ by place, but a trusted adult should read and usually sign with him."},
    {t:"Anyone can sign anything at any age", ok:false, fb:"In many places, most contracts need an adult. And a trusted adult is a great second reader anyway."},
    {t:"He should use a friend's name instead", ok:false, fb:"Using someone else's name is dishonest and can get both in trouble. Ask a parent or guardian."}]}
];
let iStars=0;

/* =====================================================================
   LESSON 1 — The Long Paper
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · The long paper</div>
    <div class="recap"><strong>Kai’s story so far:</strong> Kai learned to spot the tricks in advertising and to judge real value. Now a man is waving a long paper at Nalu’s stand.</div>
    <div class="card"><p>"A brand-new blender every year!" the man says. "Just sign here."</p>
    <p>Nalu looks at Kai. "The big words sound great. What do the small ones say?"</p>
    <p>Tap <strong>every line</strong> of the paper to read it. Find the catches.</p></div>
    <button onclick="next()">Read the paper</button>`),
  ()=>{
    const seen=new Set(); let last=null;
    function draw(){
      const catches=CLAUSES.filter(c=>c.catchy&&seen.has(c.id)).length;
      const all=seen.size>=CLAUSES.length;
      show(`<div class="kicker">Lesson 1 · Read every line</div>
        <p class="tally">Lines read: ${seen.size} of ${CLAUSES.length} · ⚠️ Catches found: ${catches}</p>
        ${paper(seen)}
        <div id="fb">${last?'<div class="feedback '+(last.catchy?'bad':'good')+'">'+last.why+'</div>':''}</div>
        <div id="cont">${all?'<button onclick="next()">I read it all</button>':''}</div>`);
      document.querySelectorAll(".paper .cl").forEach(b=>{ b.onclick=()=>{
        const id=b.dataset.id; if(!seen.has(id)){ seen.add(id); addXP(1); }
        last=CLAUSES.find(c=>c.id===id); draw(); revealFB(); }; });
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 1 · A new word</div>
    <div class="card"><p>An agreement that both sides must follow, often written down and signed, is a <strong>contract</strong>.</p>
    <p>Here’s the big rule: <strong>your signature means you agree to ALL of it</strong>, even the lines you skipped.</p>
    <p>Nalu adds it up: 3 years at $8 a month is $288, for a blender she never owns. Her own blender would cost about $40.</p></div>
    <button onclick="earnWord('contract');next()">New word: contract</button>`),
  ()=>show(`<div class="kicker">Lesson 1 · Contracts in your pocket</div>
    <div class="card"><p>That night, Kai’s game pops up: <strong>“7 days FREE! Then $5 every month until you cancel.”</strong></p>
    <p>One tap of “Yes” is agreeing to a contract. Free trials, phone plans, and app sign-ups all have terms, the small words most people skip.</p>
    <p>Before agreeing to anything, ask: <em>How much in total? For how long? Can the price change? How do I stop?</em></p></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q471a", next),
  ()=>renderMC("q471b", next),
  ()=>renderTF("q471c", next),
];

/* =====================================================================
   LESSON 2 — Your Rights
===================================================================== */
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · Your rights</div>
    <div class="recap"><strong>So far:</strong> a contract binds you to all of it, so read before you sign.</div>
    <div class="card"><p>Kai buys a $6 flashlight for night fishing. At home, he clicks it. Nothing. New batteries. Still nothing.</p>
    <p>"I already paid," he sighs. "I guess that’s that."</p>
    <p>"Not so fast," says Rana. "You paid for a flashlight that <em>works</em>. Buyers are protected. Got your receipt?"</p></div>
    <button onclick="next()">What are buyers owed?</button>`),
  ()=>show(`<div class="kicker">Lesson 2 · What buyers are owed</div>
    <div class="card"><p>Protections for people who buy things are called <strong>consumer rights</strong>. In general, buyers have the right to:</p>
    <ul class="recaplist">
      <li>✅ Get what they paid for, as it was described</li>
      <li>✅ Be told the real price</li>
      <li>✅ Get a repair, a new one, or a refund if it’s broken or not as promised</li>
      <li>✅ Complain, and be taken seriously</li>
    </ul>
    <p class="muted">The exact rules differ from place to place. A trusted adult can help with the details.</p></div>
    <button onclick="earnWord('rights');next()">New word: consumer rights</button>`),
  ()=>{
    let i=0;
    function draw(){
      if(i>=RIGHTS.length){ addXP(5); next(); return; }
      const m=RIGHTS[i];
      show(`<div class="kicker">Is this a consumer right? · ${i+1} of ${RIGHTS.length}</div>
        <div class="item">${m.t}</div>
        <div class="sortbar"><button class="yes" id="rY">✅ Yes, ask to fix it</button><button class="no" id="rN">🤷 Not really</button></div>
        <div id="fb"></div><div id="cont"></div>`);
      let done=false;
      function pick(v){
        if(done) return;
        const ok=v===m.yes;
        document.getElementById("fb").innerHTML='<div class="feedback '+(ok?'good':'bad')+'">'+(ok?'Right. '+m.why:'Ask: did they get what they paid for? Try again.')+'</div>';
        revealFB();
        if(ok){
          done=true; addXP(1);
          document.getElementById("rY").disabled=true; document.getElementById("rN").disabled=true;
          document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<RIGHTS.length-1?"Next":"Done")+'</button>';
          window._n=()=>{ i++; draw(); };
          revealFB();
        }
      }
      document.getElementById("rY").onclick=()=>pick(true);
      document.getElementById("rN").onclick=()=>pick(false);
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 2 · How to complain</div>
    <div class="card"><p>Kai goes back to the shop. He doesn’t shout. He says:</p>
    <p style="font-style:italic">"Hi. I bought this flashlight yesterday. Here’s my receipt. It doesn’t work, even with new batteries. Could I get a new one, please?"</p>
    <p>The shopkeeper tests it, nods, and hands him a new one.</p>
    <ul class="recaplist"><li>🧾 Bring proof (the receipt)</li><li>🗣️ Say calmly what happened</li><li>🎯 Say what you want: a repair, a new one, or a refund</li></ul></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q472a", next),
  ()=>renderMC("q472b", next),
];

/* =====================================================================
   LESSON 3 — Sign or Walk Away? (challenge)
===================================================================== */
const L3=[
  ()=>{ iStars=0;
    show(`<div class="kicker">Lesson 3 · Sign or walk away?</div>
    <div class="recap"><strong>So far:</strong> read before you sign; buyers have rights.</div>
    <div class="card"><p>Four more papers and promises. Get each right the first time to earn a ⭐.</p></div>
    <button onclick="next()">Start</button>`); },
  ()=>{
    let i=0;
    function draw(){
      if(i>=MOVES.length){ addXP(4); next(); return; }
      const w=MOVES[i];
      const shuffled=w.opts.map((o,k)=>({o,k})).sort(()=>Math.random()-.5);
      show(`<div class="week">${w.wk}</div>
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
            done=true; if(first){ iStars++; addXP(1); }
            document.querySelectorAll("#opts .opt").forEach(b=>b.disabled=true);
            document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<MOVES.length-1?"Next":"See how you did")+'</button>';
            window._n=()=>{ i++; draw(); };
            revealFB();
          } else { first=false; btn.disabled=true; }
        };
      });
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 3 · How you did</div>
    <div class="stars">${"⭐".repeat(iStars)}${"☆".repeat(MOVES.length-iStars)}</div>
    <p class="muted" style="text-align:center">${iStars} of ${MOVES.length} on the first try</p>
    <div class="card"><p><strong>Before you sign anything:</strong></p><ul class="recaplist">
      <li>✅ Read it all, especially the small print.</li>
      <li>✅ Know the total cost, how long it lasts, and how to stop.</li>
      <li>✅ No blanks. Get a copy.</li>
      <li>✅ “Sign now” means slow down.</li>
      <li>✅ Ask a trusted adult.</li>
    </ul></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q473a", next),
];
const META=[
  {title:"The Long Paper", sub:"Find the catches before you sign", emoji:"📜"},
  {title:"Your Rights", sub:"What buyers are owed, and how to ask", emoji:"🔦"},
  {title:"Sign or Walk Away?", sub:"Four papers and promises", emoji:"✍️"},
];
