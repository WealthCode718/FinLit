//@@META
title=Owning a Piece
file=module-42-owning-a-piece.html
placeholder=Ask about stock and profit…
//@@CSS
  .grid10{display:grid; grid-template-columns:repeat(5,1fr); gap:6px; margin:6px 0 10px}
  .grid10 div{aspect-ratio:1; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:700; color:#fff; text-align:center; line-height:1.1; padding:2px}
  .grid10 .o-nalu{background:#8a9a93} .grid10 .o-kai{background:var(--shell)} .grid10 .o-tavo{background:var(--ink)} .grid10 .o-rana{background:var(--good)}
  .grid10 .o-open{background:#fff; border:2px dashed var(--sand-deep); color:var(--ink-soft)}
  .stand{background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:12px 14px; margin-bottom:12px}
  .stand .hd{font-family:"Fraunces",Georgia,serif; font-weight:700; font-size:18px; margin-bottom:4px}
  .ledger{background:#fffdf5; border:2px solid var(--sand-deep); border-radius:10px; padding:12px 14px; margin-bottom:12px; font-size:15px}
  .ledger .row{display:flex; justify-content:space-between; padding:4px 0; border-bottom:1px dashed var(--sand-deep)}
  .ledger .row.tot{font-weight:700; border-bottom:none; padding-top:8px}
  .ledger .row.hide span:last-child{color:transparent; background:#eef2f0; border-radius:6px; min-width:48px}
  .ledger .pos{color:var(--good)} .ledger .neg{color:var(--bad)}
  .week{font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:#fff; background:var(--shell); display:inline-block; border-radius:6px; padding:2px 10px; margin-bottom:8px; font-weight:700}
  .stars{font-size:28px; letter-spacing:4px; text-align:center; margin:6px 0}
//@@CONTENT
/* =====================================================================
   MODULE 42 — OWNING A PIECE  (Investing block, 3 of 6)
   Vocab: stock, profit.  ("business" has been used informally since
   M9/M30 and is not a shelf word.)
   L1: Nalu splits her juice stand into 10 equal pieces (M13/M14 callback)
       to pay for a second stand; Kai buys one. Named: stock.
   L2: Profit day. A good month (sales − costs = profit, split 10 ways),
       a rainy month (no profit), then what a piece could sell for.
       Two ways a stock can bring a return; both can go down.
   L3: Would you buy a piece? Includes "all eggs in one stand" as
       show-then-name for M43 (diversify).
   Concept over computation: only small subtraction and ÷10.
===================================================================== */
const VOCAB = {
  stock:{term:"stock", def:"A small piece of owning a business. If a business is split into 10 equal pieces and you buy one, you own 1/10 of it."},
  profit:{term:"profit", def:"The money a business has left after it pays all its costs. Owners share in the profit. Some months there is none."}
};

const QUESTIONS = {
  "q421a":{type:"mc", prompt:"Nalu splits her juice stand into 10 equal pieces. Kai buys 1 piece. What does Kai have?", concept:"stock", opts:[
    {t:"Stock: he owns 1/10 of the juice stand", ok:true, fb:"Right. A stock is a small piece of owning the business. His piece is 1 of 10."},
    {t:"A loan: Nalu must pay him back his $10 later, plus a little extra", ok:false, fb:"With a loan, the borrower must pay you back. Kai didn't lend Nalu money. He bought a piece of the stand, so he is part owner."},
    {t:"A coupon for 10 free juices", ok:false, fb:"He didn't buy juice. He bought a piece of the stand itself. That is stock."}]},
  "q421b":{type:"mc", prompt:"Why did Nalu sell pieces of her stand at all?", concept:"stock", opts:[
    {t:"To raise money for a second stand without borrowing", ok:true, fb:"Right. Selling pieces brought in $60. In return, she now shares the stand with its new owners."},
    {t:"Because the stand was losing money and about to close for good", ok:false, fb:"The stand was doing well. Nalu wanted money to open a second one."},
    {t:"Because the bank told her to", ok:false, fb:"It was Nalu's choice. She wanted money for a second stand without taking a loan."}]},
  "q421c":{type:"tf", prompt:"True or false: if you own stock in a business, you own a small piece of that business.", answer:true, concept:"stock",
    good:"Right. That is exactly what stock is: a piece of owning.",
    bad:"Look again. A stock IS a small piece of owning a business. Kai owns 1 of Nalu's 10 pieces."},
  "q422a":{type:"mc", prompt:"In one month, the stand sold $60 of juice and paid $40 in costs. What was the profit?", concept:"profit", opts:[
    {t:"$20 — what's left after all the costs", ok:true, fb:"Right. $60 in, $40 out for costs, $20 left. That's the profit."},
    {t:"$60 — everything it sold", ok:false, fb:"$60 is what came in, but $40 went right back out for mangoes, cups, and Nalu's pay. Profit is what's LEFT: $20."},
    {t:"$100 — sales plus costs", ok:false, fb:"Costs are taken away, not added. $60 − $40 = $20 profit."}]},
  "q422b":{type:"mc", prompt:"It rains all month. The stand sells less than its costs. What does Kai's piece earn from profit this month?", concept:"profit", opts:[
    {t:"Nothing. No profit means nothing to share", ok:true, fb:"Right. Owners share the profit, and in a rainy month there isn't any. That's part of owning."},
    {t:"$2, the same as every month, because he owns 1 of the 10 pieces", ok:false, fb:"Kai only gets a part of the profit when there IS one. This month there was none."},
    {t:"Nalu has to pay him back his $10", ok:false, fb:"Kai is an owner, not a lender. Owners share the good months and the bad ones."}]},
  "q423a":{type:"mc", prompt:"Kai wants to put ALL the money he's ready to invest into Nalu's stand. What's the risk?", concept:"stock", opts:[
    {t:"One bad event at the stand could hit all of his money at once", ok:true, fb:"Right. Everything in one place means one bad event hits all of it. Next module is about what to do instead."},
    {t:"There's no real risk, because the stand is popular and made a profit last month", ok:false, fb:"Popular stands still have rainy months, broken blenders, or a new stand next door. Everything in one place is a big risk."},
    {t:"The only risk is that Nalu won't let him", ok:false, fb:"The bigger risk: if that one stand struggles, ALL his invested money struggles with it."}]},
  "q423b":{type:"mc", transfer:true, prompt:"A bakery in Lena's town is split into 20 equal pieces. Lena's mom buys 2. The bakery has a great year and some profit is shared with the owners. What is true?", concept:"profit", opts:[
    {t:"She owns 2/20 of the bakery, so she gets a part of the shared profit", ok:true, fb:"Exactly. Different business, same idea: she owns stock, so she shares in the profit when there is some."},
    {t:"She gets all the profit, because she bought 2 pieces", ok:false, fb:"There are 20 pieces and she owns 2. The profit is shared among all the owners."},
    {t:"She gets free bread, which is what stock means", ok:false, fb:"Stock means owning a piece of the business. The return comes from profit, or selling the piece later, not free bread."}]}
};

const CFG = {
  n:42, title:"Owning a Piece", homeSub:"Four short lessons. What stock is, what profit is, and how owners share the good months and the bad ones.",
  pool:["q421a","q421b","q421c","q422a","q422b","q423a"], transfer:"q423b",
  quest:"You bought a piece of Nalu's juice stand, worked out its profit in a good month and a rainy one, and weighed when a piece is worth buying.",
  failKeys:"The keys: stock is a small piece of owning a business; profit is what's left after all costs; owners share profit when there is some and get nothing when there isn't; a piece can later sell for more or less than you paid; and putting everything in one business is a big risk.",
  nextFile:"module-43-spreading-it-out.html",
  passStory:'<p><strong>You now own:</strong> stock and profit, and a real piece of a juice stand.</p>'+
    '<p>Kai sips a mango juice at the new beach stand. "What if a storm wrecks both stands?" he asks.</p>'+
    '<p>"Then every owner feels it," Nalu says.</p>'+
    '<p>Rana nods. "That is why smart owners don’t keep everything in one stand. Next time, we spread it out."</p>'+
    '<p class="muted">Module 43: Spreading It Out.</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about stock, profit, or owning a piece of a business. Or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 42 (Owning a Piece) of a financial-literacy app, part of the Investing block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, multiply, divide, split, fraction, buy, sell, pay, price, cost, earn, work, spend, need, save, goal, percent, bank, deposit, withdraw, balance, checking, savings, interest, grow, fee, scam, budget, borrow, loan, lend, owe, debt, credit card, lender, employer, wage, paycheck, income, tax, risk, loss, emergency fund, insurance, inflation, buying power, invest, return. "+
  "From THIS module: stock (a small piece of owning a business; people also call a piece a 'share') and profit (the money a business has left after paying all its costs; owners share in it; some months there is none). "+
  "Key points: a business may sell pieces to raise money to grow instead of borrowing; an owner is not a lender, so nobody has to pay an owner back; a stock can bring a return in two ways: a part of the profit when the business shares it (some businesses keep profit to grow instead), or selling the piece later for more than you paid; both can go down, and a piece can sell for less than you paid or become worth nothing if the business fails; putting everything into one business is a big risk. "+
  "TEACHING STYLE: concepts over calculations. Never recommend any real company, stock, app, or coin, and never predict prices. "+
  "STRICT RULES: never use these words (later modules): diversify, portfolio, compound, retirement, index, fund (except 'emergency fund'), bond, dividend, stock market, broker. If the learner uses one, answer briefly in plain words and say it is coming later. "+
  "Story context: Nalu runs a mango juice stand by the harbor and wanted $60 for a second stand. She split the business into 10 equal pieces at $10 each, kept 4, and sold 1 to Kai, 3 to Tavo, and 2 to Rana. In a good month the stand sold $60 and paid $40 in costs (mangoes, cups, Nalu's own pay), leaving $20 profit, so each piece got $2. In a rainy month it sold $30 against $35 of costs: no profit, nothing shared. When the second stand did well, someone offered Kai $15 for his piece; when a rival stand opened, offers dropped to $6. "+
  "Never repeat a failed explanation: switch examples (a bakery split into 20 pieces, a pizza shared by friends, a fishing boat owned by four families). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple 'profit or no profit?' question and wait.";
//@@LESSONS
/* =====================================================================
   SIMULATORS — the 10-piece ownership grid, and the profit ledger.
===================================================================== */
const OWN_ORDER=["kai","tavo","tavo","tavo","rana","rana","nalu","nalu","nalu","nalu"];
const OWN_NAME={kai:"Kai",tavo:"Tavo",rana:"Rana",nalu:"Nalu"};
function grid(owners){
  return '<div class="grid10">'+owners.map(o=>'<div class="o-'+o+'">'+(o==="open"?"$10":OWN_NAME[o])+'</div>').join('')+'</div>';
}
const MONTHS=[
  {nm:"A sunny month", sales:60, costs:[["🥭 Mangoes",20],["🥤 Cups",5],["👩 Nalu’s pay",15]]},
  {nm:"A rainy month", sales:30, costs:[["🥭 Mangoes",15],["🥤 Cups",5],["👩 Nalu’s pay",15]]}
];
function ledger(m, shown){
  const cost=m.costs.reduce((a,c)=>a+c[1],0), p=m.sales-cost;
  let h='<div class="ledger"><div class="row"><span>💰 Juice sold</span><span class="pos">+$'+m.sales+'</span></div>';
  m.costs.forEach(c=>{ h+='<div class="row"><span>'+c[0]+'</span><span class="neg">−$'+c[1]+'</span></div>'; });
  h+='<div class="row tot'+(shown?'':' hide')+'"><span>Left after costs</span><span class="'+(p>0?'pos':'neg')+'">'+(shown?(p>0?'$'+p:'−$'+(-p)):'??')+'</span></div></div>';
  return h;
}

/* =====================================================================
   LESSON 1 — A Piece of the Stand
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · A piece of the stand</div>
    <div class="recap"><strong>Kai’s story so far:</strong> Investing means putting money to work, hoping for a return. Kai’s bigger net did that. Rana asked what it would be like to own a piece of something bigger than a net.</div>
    <div class="card"><p>Nalu runs the mango juice stand by the harbor. There’s always a line. She wants to open a <strong>second stand</strong> by the beach, and it will cost <strong>$60</strong>.</p>
    <p>"I don’t want to borrow and pay interest," Nalu says. "So here’s my idea. I’ll split my business into 10 equal pieces, like you split things back in Module 13. I’ll sell some pieces for $10 each."</p></div>
    <button onclick="next()">See the pieces</button>`),
  ()=>{
    let n=0;
    const TEXT=["Kai buys 1 piece for $10.","Tavo buys 3 pieces for $30.","Rana buys 2 pieces for $20.","Nalu keeps the other 4."];
    const STEP=[1,4,6,10];
    function draw(){
      const k = n===0?0:STEP[n-1];
      const owners=OWN_ORDER.map((o,i)=> i<k ? o : "open");
      const done=n>=STEP.length;
      show(`<div class="kicker">Lesson 1 · Nalu’s 10 pieces</div>
        <div class="stand"><div class="hd">🥭 Nalu’s Juice Stand</div>${grid(owners)}
        <p class="muted" style="margin:0">${n===0?"10 equal pieces. Each one is 1/10 of the stand.":TEXT.slice(0,n).join(" ")}</p></div>
        <div id="cont">${done
          ? '<div class="feedback good">Nalu raised $60 for the second stand. Now the stand has four owners, and Kai owns 1/10 of it.</div><button onclick="next()">Continue</button>'
          : '<button data-bot="1" onclick="window._b()">'+TEXT[n].replace(/\.$/,'')+'</button>'}</div>`);
      window._b=()=>{ n++; draw(); };
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 1 · A new word</div>
    <div class="stand"><div class="hd">🥭 Nalu’s Juice Stand</div>${grid(OWN_ORDER)}</div>
    <div class="card"><p>Kai’s little square has a name. A small piece of owning a business is called <strong>stock</strong>.</p>
    <p>Kai isn’t a lender. Nalu doesn’t owe him $10. He’s a part <em>owner</em>. When the stand does well, he shares in it. When it struggles, he shares in that too.</p>
    <p class="muted">Big businesses split themselves into millions of pieces, so lots of people can each own a tiny bit.</p></div>
    <button onclick="earnWord('stock');next()">New word: stock</button>`),
  ()=>renderMC("q421a", next),
  ()=>renderMC("q421b", next),
  ()=>renderTF("q421c", next),
];

/* =====================================================================
   LESSON 2 — Profit Day
===================================================================== */
const L2=[
  ()=>{
    show(`<div class="kicker">Lesson 2 · Profit day</div>
    <div class="recap"><strong>So far:</strong> stock is a piece of owning a business. Kai owns 1 of 10 pieces.</div>
    <div class="card"><p>At the end of the month, Nalu opens her notebook and calls the owners over.</p>
    <p>"Not all the money we took in is ours to keep," she says. "First we pay every cost."</p></div>
    ${ledger(MONTHS[0],false)}
    <div class="card"><p>Juice sold: $60. Costs: $20 + $5 + $15. How much is left?</p></div>
    <div class="btn-row" id="opts"><button class="opt" data-bot="1" data-v="60">$60</button><button class="opt" data-bot="1" data-v="20">$20</button><button class="opt" data-bot="1" data-v="40">$40</button></div>
    <div id="fb"></div><div id="cont"></div>`);
    const FB={"60":"$60 is what came IN. The costs still have to come out. Try again.","40":"$40 is the costs added up. What's left after taking them away from $60? Try again.","20":"Right. $60 − $40 of costs = $20 left."};
    let done=false;
    document.querySelectorAll("#opts .opt").forEach(btn=>{
      btn.onclick=()=>{
        if(done) return;
        const ok=btn.dataset.v==="20";
        btn.classList.add(ok?"right":"wrong");
        document.getElementById("fb").innerHTML='<div class="feedback '+(ok?'good':'bad')+'">'+FB[btn.dataset.v]+'</div>';
        revealFB();
        if(ok){ done=true; addXP(1);
          document.querySelectorAll("#opts .opt").forEach(b=>b.disabled=true);
          document.getElementById("cont").innerHTML='<button onclick="next()">Continue</button>'; revealFB();
        } else btn.disabled=true;
      };
    });
  },
  ()=>show(`<div class="kicker">Lesson 2 · A new word</div>
    ${ledger(MONTHS[0],true)}
    <div class="card"><p>The money a business has left after it pays all its costs is its <strong>profit</strong>.</p>
    <p>This month the profit is $20. Nalu decides to share it with the owners: $20 split into 10 pieces is <strong>$2 a piece</strong>. Kai gets $2. Tavo gets $6. Rana gets $4. Nalu gets $8.</p>
    <p class="muted">Some businesses share profit like this. Others keep it to grow bigger.</p></div>
    <button onclick="earnWord('profit');next()">New word: profit</button>`),
  ()=>{
    let shown=false;
    function draw(){
      show(`<div class="kicker">Lesson 2 · The next month</div>
        <div class="week">${MONTHS[1].nm}</div>
        <div class="card"><p style="margin:0">It rains for weeks. Hardly anyone wants cold juice.</p></div>
        ${ledger(MONTHS[1],shown)}
        <div id="cont">${shown
          ? '<div class="feedback bad">$30 in, $35 of costs. No profit, so there’s nothing to share. Kai gets $0 this month.</div><button onclick="next()">Continue</button>'
          : '<button data-bot="1" onclick="window._s()">Work it out</button>'}</div>`);
      window._s=()=>{ shown=true; draw(); };
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 2 · What is a piece worth?</div>
    <div class="card"><p>Months later, the second stand is a hit. Mika offers Kai <strong>$15</strong> for his piece. He paid $10.</p>
    <p>Then a new stand opens next door, with cheaper juice. Now the best offer for a piece is <strong>$6</strong>.</p>
    <p>So a stock can bring a return in two ways:</p>
    <ul class="recaplist"><li>💵 A part of the <strong>profit</strong>, when the business shares it.</li><li>🔁 <strong>Selling</strong> your piece later for more than you paid.</li></ul>
    <p style="text-align:center"><strong>Both can go down. A piece can even end up worth less than you paid.</strong></p></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q422a", next),
  ()=>renderMC("q422b", next),
];

/* =====================================================================
   LESSON 3 — Would You Buy a Piece? (challenge)
===================================================================== */
const MOVES=[
  {wk:"Two stands", story:"Two stands sell pieces for $10. One has long lines and an owner who keeps careful notes. The other is closed half the time, and nobody knows its costs.", opts:[
    {t:"The busy, well-run stand looks like the better piece to own, though it’s still not a sure thing", ok:true, fb:"Right. You’re buying a piece of the business, so look at the business. Even a good one can have bad months."},
    {t:"Either one, since stock always goes up", ok:false, fb:"Stock can go down, and a business nobody can explain is a big risk. Look at the business first."},
    {t:"The closed one, because nobody else wants it", ok:false, fb:"Nobody wanting it is a warning sign, not a bargain. Look at how the business is actually doing."}]},
  {wk:"A stranger’s offer", story:"A stranger says: \"Buy a piece of my gold mine on a faraway island! $20 now, and I GUARANTEE it doubles by next month. Today only!\"", opts:[
    {t:"Say no. Nobody can promise a piece will double, and the rush is a scam sign", ok:true, fb:"Right. Real owners share real ups and downs. “Guaranteed” plus “today only” is a scam, like in Modules 23 and 41."},
    {t:"Buy it, because gold is always valuable", ok:false, fb:"You can’t see the mine, and no piece can be guaranteed to double. That’s a scam."},
    {t:"Buy just one piece to test it", ok:false, fb:"Any money to this stranger is likely gone. Say no."}]},
  {wk:"All in one stand?", story:"Kai has $40 he’s ready to invest. He loves Nalu’s stand and wants to buy 4 more pieces with all of it.", opts:[
    {t:"Maybe not all of it. If this one stand has big trouble, all his money has trouble too", ok:true, fb:"Right. Everything in one place means one storm hits all of it. Rana has a plan for this, coming next module."},
    {t:"Yes, all of it. Nalu’s stand is the best on the island", ok:false, fb:"Even the best stand can be hit by a storm or a new rival. All in one stand means one bad event hits everything."},
    {t:"Yes, and borrow more to buy extra pieces", ok:false, fb:"Borrowing to buy pieces means he could owe money even if the stand does badly. Big risk."}]},
  {wk:"A rough patch", story:"The rival stand opens. Offers for pieces drop to $6. Kai doesn’t need this money for years.", opts:[
    {t:"Remember why he bought it. One rough patch isn’t the whole story, and he isn’t in a hurry", ok:true, fb:"Right. Money that can wait doesn’t have to be sold in a bad moment. Nothing is promised, but panic isn’t a plan."},
    {t:"Sell right now at $6 before it drops to zero", ok:false, fb:"Maybe it drops more, maybe it recovers. Nobody knows. Selling in a panic locks in the loss. He isn’t in a hurry, so he can think it through."},
    {t:"Ask Nalu to give him back his $10", ok:false, fb:"Owners aren’t lenders. Nalu doesn’t owe him $10. He owns a piece, through ups and downs."}]}
];
let iStars=0;
const L3=[
  ()=>{ iStars=0;
    show(`<div class="kicker">Lesson 3 · Would you buy a piece?</div>
    <div class="recap"><strong>So far:</strong> stock is a piece of owning; profit is what’s left after costs; both can go down.</div>
    <div class="card"><p>Word spreads. Other islanders start selling pieces of their businesses too. Rana helps Kai think each one through.</p>
    <p>Four moments. Get each right the first time to earn a ⭐.</p></div>
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
    <div class="card"><ul class="recaplist">
      <li>✅ Look at the <strong>business</strong> before buying a piece.</li>
      <li>✅ “Guaranteed to double” is a scam sign.</li>
      <li>✅ Everything in one business is a big risk.</li>
      <li>✅ One rough patch isn’t the whole story, and panic isn’t a plan.</li>
    </ul></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q423a", next),
];
const META=[
  {title:"A Piece of the Stand", sub:"Nalu splits her business into 10", emoji:"🥭"},
  {title:"Profit Day", sub:"What’s left after costs, and who gets it", emoji:"📒"},
  {title:"Would You Buy a Piece?", sub:"Four choices about owning stock", emoji:"🤔"},
];
