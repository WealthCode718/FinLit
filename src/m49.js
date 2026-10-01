//@@META
title=The Money World Challenge
file=module-49-money-world-challenge.html
placeholder=Ask about fine print and comparison shopping…
//@@CSS
  .week{font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:#fff; background:var(--shell); display:inline-block; border-radius:6px; padding:2px 10px; margin-bottom:8px; font-weight:700}
  .stars{font-size:28px; letter-spacing:4px; text-align:center; margin:6px 0}
  .offer{background:#fff3c4; border:3px solid #e0a526; border-radius:14px; padding:14px; margin-bottom:12px; text-align:center}
  .offer .big{font-family:"Fraunces",Georgia,serif; font-size:22px; font-weight:800; color:#b4321d; line-height:1.2}
  .offer .fp{margin-top:8px; font-size:12px; color:#6b5a3a; background:#fffaf0; border:1px dashed #c58a12; border-radius:8px; padding:6px 8px}
  .offer .fp.hidden{color:transparent; background:#f2e6c9; user-select:none}
  .stalls{display:grid; grid-template-columns:1fr; gap:8px; margin-bottom:12px}
  .stall{background:#fff; color:var(--ink); border:2px solid #d9e2de; border-radius:14px; padding:12px 14px; text-align:left; font-size:14px; line-height:1.4; min-height:44px}
  .stall .nm{font-weight:800; font-size:16px; display:flex; justify-content:space-between}
  .stall .det{margin-top:6px; color:var(--ink-soft); font-weight:400}
  .stall.seen{border-color:var(--sand-deep)}
  .stall.right{border-color:var(--good); background:#e8f3ee}
  .stall.wrong{border-color:var(--bad); background:#f8e6e3}
  .meter{background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:12px 14px; margin-bottom:12px}
  .meter .lbl{font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:var(--ink-soft); font-weight:700; display:flex; justify-content:space-between}
  .meter .bar{height:14px; border-radius:999px; background:#eef2f0; overflow:hidden; margin-top:8px}
  .meter .bar div{height:100%; background:var(--good); border-radius:999px; transition:width .5s ease}
//@@CONTENT
/* =====================================================================
   MODULE 49 — THE MONEY WORLD CHALLENGE  (Money World block finale)
   Vocab: fine print, comparison shopping.
   Show-then-name: "tiny print" (M46) and "small print" (M47) are now
   named "fine print"; "compare" (M4) becomes comparison shopping.
   L1: Three offers. Reveal the fine print, then pick what the deal
       really is. Named: fine print.
   L2: Kai needs a new net. Inspect three stalls (price, strength,
       written repair promise, what fishers say), then choose.
       Named: comparison shopping.
   L3: One busy week, six moments, with a "smart-shopper" meter:
       countdown ad, phone contract, repair right, fake charity text,
       a "sale" on a want, and a giving plan. Badge on pass.
===================================================================== */
const VOCAB = {
  fineprint:{term:"fine print", def:"The small words on an offer, ad, or contract where the important details hide: the real price, how long it lasts, extra fees, and how to cancel. Read it before you say yes."},
  compshop:{term:"comparison shopping", def:"Checking several sellers before you buy, to compare price, quality, promises, and what other buyers say, so you get real value, not just the loudest ad."}
};

const QUESTIONS = {
  "q491a":{type:"mc", prompt:"What is fine print?", concept:"fineprint", opts:[
    {t:"The small words on an offer or contract where the important details hide", ok:true, fb:"Right. The real price, how long, extra fees, how to cancel: it's usually in the fine print."},
    {t:"A fancy font that makes ads look nice", ok:false, fb:"It's not about looks. Fine print is the small words that hold the real details."},
    {t:"Words that don't matter, so you can skip them", ok:false, fb:"The opposite. Fine print is where the details that matter most often hide."}]},
  "q491b":{type:"mc", prompt:"An ad says “WIN A FREE BOAT TRIP!*” The fine print: “*Winners must pay $40 for meals and $20 for fuel.” What's the real deal?", concept:"fineprint", opts:[
    {t:"The trip isn't free. A “winner” still pays $60", ok:true, fb:"Right. The big words said free; the fine print said $60. Always read the small words."},
    {t:"It's a free trip, exactly as the big words say", ok:false, fb:"The fine print says winners pay $40 + $20 = $60. Not free."},
    {t:"The fine print doesn't count", ok:false, fb:"Fine print counts just as much as the big words, often more."}]},
  "q491c":{type:"tf", prompt:"True or false: the big, bright words on an offer tell you everything you need to know.", answer:false, concept:"fineprint",
    good:"Right. The big words are there to make you want it. The fine print tells you what it really costs.",
    bad:"Look again. The big words sell; the fine print tells. Always read both."},
  "q492a":{type:"mc", prompt:"What is comparison shopping?", concept:"compshop", opts:[
    {t:"Checking several sellers for price, quality, and promises before you buy", ok:true, fb:"Right. It's how you find real value, not just the loudest ad."},
    {t:"Buying from whichever seller has the biggest sign", ok:false, fb:"A big sign is advertising, not value. Comparison shopping means checking several sellers first."},
    {t:"Always buying the cheapest thing you see", ok:false, fb:"Price is one thing to compare. Quality and promises matter too, like the net that tears in a week."}]},
  "q492b":{type:"mc", prompt:"Besides price, what's MOST worth comparing between sellers?", concept:"compshop", opts:[
    {t:"How well it's made, any written promises like free repairs, and what other buyers say", ok:true, fb:"Right. That's how Kai picked the $9 net over the $7 one that tears."},
    {t:"Which seller has the brightest colors", ok:false, fb:"Colors are advertising. Compare quality, promises, and what other buyers say."},
    {t:"Which seller talks the fastest", ok:false, fb:"Fast talk is pressure, not value. Compare quality, promises, and buyer reviews."}]},
  "q493a":{type:"mc", prompt:"Two months after buying, Kai's $9 net rips. His receipt shows a written 3-month free repair promise. What should he do?", concept:"compshop", opts:[
    {t:"Go back calmly with the receipt and ask for the free repair", ok:true, fb:"Right. The written promise is part of what he paid for. Consumer rights plus a receipt."},
    {t:"Buy a new net, because it's his problem now", ok:false, fb:"The seller promised free repairs for 3 months, in writing. He should use it."},
    {t:"Post angry messages about the seller before asking", ok:false, fb:"Ask calmly first, with the receipt. Most sellers keep written promises."}]},
  "q493b":{type:"mc", transfer:true, prompt:"Lena needs a bike helmet. Shop A: $15, “COOLEST HELMET EVER!”, no safety label. Shop B: $20, safety-tested label, 1-year promise in writing. Shop C: $35, same as B but a famous rider's name on it. What's the smart pick?", concept:"compshop", opts:[
    {t:"Shop B. Safety-tested, a written promise, and a fair price", ok:true, fb:"Exactly. Different item, same skills: ignore the hype, read the details, compare value."},
    {t:"Shop A, because it's cheapest and the coolest", ok:false, fb:"“Coolest” is advertising, and no safety label is a big deal for a helmet. Compare value, not just price."},
    {t:"Shop C, because a famous rider means it's the best", ok:false, fb:"It's the same helmet as B with a famous name, and $15 more. The name doesn't make it safer."}]}
};

const CFG = {
  n:49, title:"The Money World Challenge", homeSub:"Four short lessons. Read the fine print, shop around, then handle one busy week.",
  pool:["q491a","q491b","q491c","q492a","q492b","q493a"], transfer:"q493b",
  quest:"You read the fine print on three offers, compared three stalls to find real value, and handled a busy week of ads, contracts, rights, and giving.",
  failKeys:"The keys: fine print is where the real details hide, so read it before saying yes; comparison shopping means checking several sellers for price, quality, promises, and what buyers say; and every Money World skill (spot ad tricks, read contracts, use your rights, check charities) works together.",
  badge:" · Money World block complete 🌍",
  nextFile:null,
  passStory:'<p><strong>You now own:</strong> fine print and comparison shopping, and the whole Money World block.</p>'+
    '<p>Kai sits on the dock with his notebook. He’s learned to earn, save, borrow, protect, invest, and now to handle a whole world that wants his money.</p>'+
    '<p>Tavo sits down beside him, slower than he used to. "I’ve fished for thirty years," he says. "One day, I’ll stop. When that day comes, what will I live on?"</p>'+
    '<p>Kai looks at him. He had never thought about that.</p>'+
    '<p class="muted">Module 50 begins the final block. (Coming soon.)</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about fine print, comparison shopping, or any skill from the Money World block. Or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 49 (The Money World Challenge) of a financial-literacy app, the finale of the Money World block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, multiply, compare, price, cost, buy, sell, pay, spend, need, save, goal, discount, budget, bank, savings, interest, fee, scam, borrow, loan, debt, credit card, wage, income, tax, receipt, refund, risk, emergency fund, insurance, policy, coverage, inflation, invest, stock, profit, investment fund, long-term, investment plan, advertising, value, contract, consumer rights, donate, charity. "+
  "From THIS module: fine print (the small words on an offer, ad, or contract where the important details hide: real price, how long it lasts, extra fees, how to cancel) and comparison shopping (checking several sellers before buying to compare price, quality, written promises like repairs, and what other buyers say). "+
  "Key points: the big words sell, the fine print tells; compare more than price; a written promise is part of what you paid for, so keep the receipt; pause on countdowns and 'sales' on wants; read contracts and ask a trusted adult; check a charity before giving; plan giving you can keep up. "+
  "TEACHING STYLE: concepts over calculations; small adding is fine. Never name real companies, brands, stores, apps, or charities; rules about buyers' rights differ by place. "+
  "STRICT RULES: never use the word retirement (next module). If the learner uses it, answer briefly in plain words and say it is coming next. "+
  "Story context: Kai read the fine print on three offers (a 'FREE game' that costs $4 every week after day 3; 'WIN A FREE BOAT TRIP' where winners pay $60; a '$1 phone case' that is $1 only when you buy two at $12 each). He compared three net stalls: Stall A $12 with a 'BEST NET EVER!' sign and nothing else; Stall B $9, strong, with a written 3-month free repair promise; Stall C $7 that local fishers say tears within weeks. He chose B. Then he handled one busy week: a countdown headset ad, a 2-year phone plan with a $150 cancel fee, using the repair promise with his receipt, a fake charity text asking for gift cards, a 'was $30, now $15' jacket he didn't need, and his own giving plan of $2 plus a Saturday of help. "+
  "Never repeat a failed explanation: switch examples (a bike helmet, a school backpack, a 'buy one get one' snack deal). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple 'what does the fine print really mean?' question and wait.";
//@@LESSONS
/* =====================================================================
   INTERACTIVES — fine-print reveals, the three net stalls, and the
   busy-week challenge with a smart-shopper meter.
===================================================================== */
const OFFERS=[
  {big:"🎮 FREE GAME! Download now!", fp:"Free for 3 days. Then $4 every week until you cancel.", opts:[
    {t:"It's free for 3 days, then costs $4 every week", ok:true, fb:"Right. That's a free trial, which is a contract (Module 47). $4 a week adds up fast."},
    {t:"It's free forever", ok:false, fb:"The fine print says only 3 days free. After that, $4 every week."},
    {t:"It costs $4 once", ok:false, fb:"Read it again: $4 EVERY week, until you cancel."}]},
  {big:"⛵ WIN A FREE BOAT TRIP!*", fp:"*Winners must pay $40 for meals and $20 for fuel.", opts:[
    {t:"A “winner” still pays $60", ok:true, fb:"Right. $40 + $20 = $60. Not free at all."},
    {t:"The trip is completely free", ok:false, fb:"The fine print says winners pay $40 + $20 = $60."},
    {t:"You win $60", ok:false, fb:"The other way around: winners PAY $60."}]},
  {big:"📱 PHONE CASES: ONLY $1!*", fp:"*$1 price only when you buy 2 cases at $12 each.", opts:[
    {t:"To get the $1 case, you must spend $24 first", ok:true, fb:"Right. The real cost is $25 for three cases, not $1."},
    {t:"Every case costs $1", ok:false, fb:"Only one case is $1, and only if you first buy two at $12 each."},
    {t:"The case is free if you buy one", ok:false, fb:"The fine print says buy 2 at $12, THEN one costs $1."}]}
];
const STALLS=[
  {id:"A", nm:"Stall A", p:"$12", det:"Big sign: “BEST NET EVER! EVERYONE BUYS HERE!” The seller won’t say what it’s made of. No promises.", ok:false, fb:"A loud sign isn't value. It costs the most and tells you the least."},
  {id:"B", nm:"Stall B", p:"$9", det:"Strong knots, thick rope. Written on the receipt: “Free repairs for 3 months.” Local fishers say it lasts.", ok:true, fb:"Right. Fair price, good quality, a written promise, and fishers trust it. That's real value."},
  {id:"C", nm:"Stall C", p:"$7", det:"Thin rope, loose knots. Three fishers on the dock say theirs tore within weeks.", ok:false, fb:"Cheapest, but if it tears in weeks he'll buy again and again. Low price isn't good value."}
];
let smart=0, wStars=0;
function meter(){ return '<div class="meter"><div class="lbl"><span>🌍 Smart-shopper score</span><span>'+smart+'%</span></div><div class="bar"><div style="width:'+smart+'%"></div></div></div>'; }
const WEEK=[
  {wk:"Monday", story:"A pop-up: “PRO GAMING HEADSET! 70% OFF! ⏰ 59 minutes left!” Kai didn’t plan to buy a headset.", opts:[
    {t:"Close it. A countdown on something he didn't plan to buy is a rush trick", ok:true, fb:"Right. If he really wants one later, he can comparison shop calmly."},
    {t:"Buy fast. 70% off is huge", ok:false, fb:"70% off something he doesn't need is still spending. The timer is the trick."},
    {t:"Buy two, so he saves twice", ok:false, fb:"Spending more isn't saving. Close it."}]},
  {wk:"Tuesday", story:"A shop offers Kai a phone plan. The fine print: “24 months. $150 fee to cancel early.” The seller says, “Sign now, it’s easy!”", opts:[
    {t:"Take the paper home, read it with a parent, and compare other plans first", ok:true, fb:"Right. Two years and a $150 way out is a big contract. Read, ask, compare."},
    {t:"Sign now. Easy means safe", ok:false, fb:"“Sign now” is pressure. Two years plus a $150 cancel fee needs careful reading."},
    {t:"Sign, and cancel if he doesn’t like it", ok:false, fb:"Canceling costs $150. That's exactly why he should read first."}]},
  {wk:"Wednesday", story:"Kai’s Stall B net rips after 6 weeks. His receipt says “Free repairs for 3 months.”", opts:[
    {t:"Go back calmly with the receipt and ask for the free repair", ok:true, fb:"Right. The written promise is part of what he paid for."},
    {t:"Buy a new net from Stall C", ok:false, fb:"He has a free repair promise in writing. Use it."},
    {t:"Throw it away; promises never count", ok:false, fb:"Written promises count. That's why he chose Stall B."}]},
  {wk:"Thursday", story:"A text: “Storm victims need YOU! Send a $10 gift card code to this number right now!”", opts:[
    {t:"Don't send it. Gift card codes, an unknown number, and “right now” are scam signs", ok:true, fb:"Right. If he wants to help, he can give through the village elders or a group he knows."},
    {t:"Send it. It's for storm victims", ok:false, fb:"Real charities don't ask for gift card codes from unknown numbers. Don't send it."},
    {t:"Send $5 instead of $10", ok:false, fb:"Any amount to a scammer is lost. Give through people you know instead."}]},
  {wk:"Friday", story:"A jacket: “WAS $30, NOW $15!” Kai already has a warm jacket that fits fine.", opts:[
    {t:"Skip it. A sale on something he doesn't need isn't saving, it's spending $15", ok:true, fb:"Right. Value depends on need. His $15 stays in his budget."},
    {t:"Buy it, because he'd save $15", ok:false, fb:"He doesn't save $15. He spends $15 on something he doesn't need."},
    {t:"Buy it on his credit card", ok:false, fb:"Debt for a want he doesn't need is the worst of both. Skip it."}]},
  {wk:"Saturday", story:"Kai looks at his budget. He wants to keep helping the village a little.", opts:[
    {t:"Stick to his giving plan: $2 this week, plus a morning mending nets", ok:true, fb:"Right. Steady, planned giving that never crowds out needs or savings."},
    {t:"Give everything left in his budget", ok:false, fb:"His needs and savings come first. A small planned amount is easier to keep up."},
    {t:"Feel guilty and give nothing ever again", ok:false, fb:"No guilt needed. A small, steady plan, like $2 and some time, is a great way to help."}]}
];

/* =====================================================================
   LESSON 1 — Read the Fine Print
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · Read the fine print</div>
    <div class="recap"><strong>The Money World block so far:</strong> spot ad tricks; judge value; read contracts; use your rights; check a charity before giving.</div>
    <div class="card"><p>Rana pins three offers to the harbor board. "Big words sell," she says. "Small words tell. Let’s read the small ones."</p></div>
    <button onclick="next()">See the offers</button>`),
  ()=>{
    let i=0;
    function draw(){
      if(i>=OFFERS.length){ addXP(3); next(); return; }
      const o=OFFERS[i]; let shown=false, done=false;
      function paint(){
        show(`<div class="kicker">Offer ${i+1} of ${OFFERS.length}</div>
          <div class="offer"><div class="big">${o.big}</div><div class="fp${shown?'':' hidden'}">${o.fp}</div></div>
          ${shown
            ? '<p style="text-align:center"><strong>What’s the real deal?</strong></p><div id="opts">'+o.opts.map((x,k)=>'<button class="opt" data-bot="1" data-k="'+k+'">'+x.t+'</button>').join('')+'</div><div id="fb"></div><div id="cont"></div>'
            : '<div id="cont"><button data-bot="1" onclick="window._r()">🔍 Read the fine print</button></div>'}`);
        window._r=()=>{ shown=true; paint(); };
        if(shown) document.querySelectorAll("#opts .opt").forEach(btn=>{ btn.onclick=()=>{
          if(done) return;
          const x=o.opts[+btn.dataset.k];
          btn.classList.add(x.ok?"right":"wrong");
          document.getElementById("fb").innerHTML='<div class="feedback '+(x.ok?'good':'bad')+'">'+x.fb+(x.ok?'':' Pick again.')+'</div>';
          revealFB();
          if(x.ok){ done=true; addXP(1);
            document.querySelectorAll("#opts .opt").forEach(b=>b.disabled=true);
            document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<OFFERS.length-1?"Next offer":"Done")+'</button>';
            window._n=()=>{ i++; draw(); }; revealFB();
          } else btn.disabled=true;
        }; });
      }
      paint();
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 1 · A new word</div>
    <div class="card"><p>You’ve seen it before: the tiny print on the Sparkle Snack poster, the small lines in Nalu’s blender contract. Now it gets its name.</p>
    <p>The small words where the important details hide are the <strong>fine print</strong>: the real price, how long it lasts, extra fees, how to cancel.</p></div>
    <button onclick="earnWord('fineprint');next()">New word: fine print</button>`),
  ()=>renderMC("q491a", next),
  ()=>renderMC("q491b", next),
  ()=>renderTF("q491c", next),
];

/* =====================================================================
   LESSON 2 — Shop Around
===================================================================== */
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · Shop around</div>
    <div class="recap"><strong>So far:</strong> big words sell; fine print tells.</div>
    <div class="card"><p>Kai’s old net is finally worn out. This isn’t a want, it’s a need: no net, no fish, no income.</p>
    <p>"Three stalls sell nets," Tavo says. "Don’t buy from the first one. Look at all three."</p>
    <p>Tap each stall to look closely, then choose.</p></div>
    <button onclick="next()">Go to the market</button>`),
  ()=>{
    const seen=new Set(); let done=false, pickedWrong=new Set(), last=null;
    function draw(){
      const all=seen.size>=STALLS.length;
      show(`<div class="kicker">Lesson 2 · ${all?'Which net will Kai buy?':'Look at every stall ('+seen.size+' of 3)'}</div>
        <div class="stalls">${STALLS.map(s=>'<button class="stall'+(done&&s.ok?' right':pickedWrong.has(s.id)?' wrong':seen.has(s.id)?' seen':'')+'" data-bot="1" data-id="'+s.id+'"'+((done||pickedWrong.has(s.id))?' disabled':'')+'><div class="nm"><span>'+s.nm+'</span><span>'+s.p+'</span></div>'+(seen.has(s.id)?'<div class="det">'+s.det+'</div>':'<div class="det">Tap to look closely</div>')+'</button>').join('')}</div>
        <div id="fb">${last?'<div class="feedback '+(last.ok?'good':'bad')+'">'+last.fb+(last.ok?'':' Pick again.')+'</div>':''}</div>
        <div id="cont">${done?'<button onclick="next()">Buy the Stall B net</button>':''}</div>`);
      document.querySelectorAll(".stall").forEach(b=>{ b.onclick=()=>{
        const s=STALLS.find(x=>x.id===b.dataset.id);
        if(!seen.has(s.id)){ seen.add(s.id); last=null; draw(); return; }
        if(seen.size<STALLS.length) return;
        last=s; if(s.ok){ done=true; addXP(3); } else pickedWrong.add(s.id);
        draw(); revealFB();
      }; });
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 2 · Another new word</div>
    <div class="card"><p>Checking several sellers before you buy, to compare price, quality, promises, and what other buyers say, is called <strong>comparison shopping</strong>.</p>
    <p>Kai didn’t pick the loudest sign, and he didn’t pick the cheapest. He picked the best <strong>value</strong>, and he kept the receipt with the written promise.</p></div>
    <button onclick="earnWord('compshop');next()">New word: comparison shopping</button>`),
  ()=>renderMC("q492a", next),
  ()=>renderMC("q492b", next),
];

/* =====================================================================
   LESSON 3 — One Busy Week (challenge)
===================================================================== */
const L3=[
  ()=>{ smart=0; wStars=0;
    show(`<div class="kicker">Lesson 3 · One busy week</div>
    <div class="recap"><strong>So far:</strong> read the fine print; shop around.</div>
    ${meter()}
    <div class="card"><p>Six days, six moments. Ads, contracts, rights, and giving, all in one week.</p>
    <p>Every smart choice raises Kai’s score. Right the first time earns a ⭐.</p></div>
    <button onclick="next()">Start Monday</button>`); },
  ()=>{
    let i=0;
    function draw(){
      if(i>=WEEK.length){ addXP(6); next(); return; }
      const w=WEEK[i];
      const shuffled=w.opts.map((o,k)=>({o,k})).sort(()=>Math.random()-.5);
      show(`<div class="week">${w.wk}</div>
        ${meter()}
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
            done=true; if(first){ wStars++; addXP(1); }
            smart=Math.round((i+1)/WEEK.length*100);
            document.querySelector(".meter").outerHTML=meter();
            document.querySelectorAll("#opts .opt").forEach(b=>b.disabled=true);
            document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<WEEK.length-1?"Next day":"End of the week")+'</button>';
            window._n=()=>{ i++; draw(); };
            revealFB();
          } else { first=false; btn.disabled=true; }
        };
      });
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 3 · End of the week</div>
    ${meter()}
    <div class="stars">${"⭐".repeat(wStars)}${"☆".repeat(WEEK.length-wStars)}</div>
    <p class="muted" style="text-align:center">${wStars} of ${WEEK.length} on the first try</p>
    <div class="card"><ul class="recaplist">
      <li>✅ <strong>Closed</strong> a countdown ad.</li>
      <li>✅ <strong>Read</strong> a contract before signing.</li>
      <li>✅ <strong>Used</strong> a written promise and a receipt.</li>
      <li>✅ <strong>Spotted</strong> a fake charity.</li>
      <li>✅ <strong>Skipped</strong> a “sale” on a want.</li>
      <li>✅ <strong>Kept</strong> a steady giving plan.</li>
    </ul></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q493a", next),
];
const META=[
  {title:"Read the Fine Print", sub:"Three offers, three surprises", emoji:"🔍"},
  {title:"Shop Around", sub:"Three net stalls, one smart choice", emoji:"🛒"},
  {title:"One Busy Week", sub:"Six moments, every Money World skill", emoji:"🗓️"},
];
