//@@META
title=Inflation
file=module-40-inflation.html
placeholder=Ask about inflation and buying power…
//@@CSS
  .pricebook{background:#fffdf5; border:2px solid var(--sand-deep); border-radius:10px; padding:14px 16px; margin-bottom:12px; font-size:15px}
  .pricebook .hd{font-family:"Fraunces",Georgia,serif; font-weight:700; font-size:18px; text-align:center; margin-bottom:8px}
  .pricebook .row{display:grid; grid-template-columns:1.4fr 1fr 1fr; gap:6px; padding:5px 0; border-bottom:1px dashed var(--sand-deep); align-items:center}
  .pricebook .row.h{font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:var(--ink-soft); font-weight:700}
  .pricebook .now{font-weight:700}
  .pricebook .hide{color:transparent; background:#eef2f0; border-radius:6px}
  .years{font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:#fff; background:var(--shell); display:inline-block; border-radius:6px; padding:2px 10px; margin-bottom:8px; font-weight:700}
  .jars{display:grid; grid-template-columns:1fr; gap:10px; margin-bottom:12px}
  .jars.two{grid-template-columns:1fr 1fr}
  .jar{background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:12px 14px; min-width:0}
  .jar .lbl{font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:var(--ink-soft); font-weight:700}
  .jar .amt{font-family:"Fraunces",Georgia,serif; font-size:28px; font-weight:700; margin:2px 0 6px}
  .jar .buys{font-size:22px; line-height:1.3; min-height:30px; word-break:break-all}
  .jar .cnt{font-size:13px; color:var(--ink-soft); margin-top:4px}
  .tag{display:inline-block; background:#fffdf5; border:2px dashed var(--sand-deep); border-radius:8px; padding:2px 10px; font-weight:700}
  .week{font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:#fff; background:var(--shell); display:inline-block; border-radius:6px; padding:2px 10px; margin-bottom:8px; font-weight:700}
  .stars{font-size:28px; letter-spacing:4px; text-align:center; margin:6px 0}
//@@CONTENT
/* =====================================================================
   MODULE 40 — INFLATION  (first module of the Investing block)
   Vocab: inflation, buying power.
   Concept over computation: no rates, no percentages. Learners SEE prices
   climb in Tavo's old price book, then SEE a tin of $10 buy fewer coconuts
   every five years, then compare it with savings that earns interest.
   Misconceptions handled: one seller's price jump is not inflation; the
   dollars do not disappear; inflation is not a reason to spend everything
   now; interest helps but may not fully keep up (sets up M41).
===================================================================== */
const VOCAB = {
  inflation:{term:"inflation", def:"When prices on almost everything slowly go up over the years. The same dollar buys a little less than it used to."},
  buyingpower:{term:"buying power", def:"How much your money can actually get you. $10 is always $10, but inflation slowly shrinks what that $10 can buy."}
};

const QUESTIONS = {
  "q401a":{type:"mc", prompt:"Thirty years ago a rope cost $1 on the island. Today the same kind of rope costs $4, and most other prices went up too. What is this called?", concept:"inflation", opts:[
    {t:"Inflation — prices on almost everything slowly went up over the years", ok:true, fb:"Right. Same rope, more dollars. When nearly all prices creep up over time, that is inflation."},
    {t:"A scam — the rope seller is tricking people", ok:false, fb:"One seller tricking people would not make prices go up everywhere. Almost everything got more expensive, slowly, over many years. That is inflation."},
    {t:"A fee — the bank adds $3 to every rope", ok:false, fb:"A fee is a charge from the bank. This is the price of the rope itself going up over time, along with most other prices. That is inflation."}]},
  "q401b":{type:"mc", prompt:"Today, one fruit stall suddenly doubles its mango price. Every other stall still charges what it did yesterday. Is that inflation?", concept:"inflation", opts:[
    {t:"No — inflation is prices almost everywhere rising over years, not one seller in one day", ok:true, fb:"Right. One stall is just one seller's choice. Compare prices and buy from another stall."},
    {t:"Yes — any price going up is inflation", ok:false, fb:"Inflation is prices on almost everything, almost everywhere, slowly going up over years. One stall on one day is just that stall. Buy from another one."},
    {t:"Yes — and every other stall will double tomorrow", ok:false, fb:"Nothing says that. Inflation is slow and spread out. One stall jumping is one seller's choice, so buy from a different stall."}]},
  "q401c":{type:"tf", prompt:"True or false: inflation takes dollars out of your tin or your account.", answer:false, concept:"inflation",
    good:"Right. Your $10 stays $10. What changes is how much $10 can buy.",
    bad:"Look again. Nobody takes your dollars. Your $10 stays $10. What changes is what $10 can buy, because prices went up."},
  "q402a":{type:"mc", prompt:"Kai leaves $10 in his tin for twenty years while prices keep rising. What happens to its buying power?", concept:"buyingpower", opts:[
    {t:"It shrinks — still $10, but it buys fewer things", ok:true, fb:"Right. You watched it: 10 coconuts at the start, 4 at the end. Same $10."},
    {t:"It stays the same — $10 is $10", ok:false, fb:"The NUMBER stays $10. But buying power is what the $10 can get you, and that went from 10 coconuts down to 4."},
    {t:"It grows — money gets more useful the longer you keep it", ok:false, fb:"Money in a tin does not grow at all. Prices went up, so the same $10 bought fewer coconuts over time."}]},
  "q402b":{type:"mc", prompt:"Why did Kai's savings account hold on to its buying power better than his tin?", concept:"buyingpower", opts:[
    {t:"The savings earned interest, so the balance grew while prices rose", ok:true, fb:"Right. The tin stood still while prices climbed. The savings balance climbed too."},
    {t:"Prices do not go up for people who have savings accounts", ok:false, fb:"Prices go up for everyone. The savings did better because interest made the balance grow."},
    {t:"The bank keeps prices low for its customers", ok:false, fb:"Banks do not set the price of coconuts. The savings did better because interest made the balance grow."}]},
  "q403a":{type:"mc", prompt:"Mika says: \"Prices always go up, so spend all your money today!\" What is the best answer?", concept:"inflation", opts:[
    {t:"No. Prices rise slowly, needs and goals still come first, and savings with interest helps keep up", ok:true, fb:"Right. Inflation is a reason to keep your savings where they can grow. It is not a reason to spend everything today."},
    {t:"Yes — money you keep is wasted money", ok:false, fb:"Saved money still buys a lot. Prices only creep up slowly. Spending it all now leaves nothing for needs, goals, or an emergency."},
    {t:"Yes — but only on wants, not needs", ok:false, fb:"That is still spending everything. Keep money for needs, goals, and emergencies, somewhere it can earn interest."}]},
  "q403b":{type:"mc", transfer:true, prompt:"Lena's grandmother paid 50¢ for a bus ride when she was young. Today the same ride costs $2, and almost everything else costs more too. She kept $20 in a shoebox the whole time. What is true?", concept:"buyingpower", opts:[
    {t:"The shoebox still has $20, but it buys far fewer bus rides than it did back then", ok:true, fb:"Exactly. Different place, same idea: the dollars stayed, the buying power shrank. That is inflation."},
    {t:"The shoebox now has less than $20 in it", ok:false, fb:"Nobody took any dollars. It still holds $20. It just buys far fewer rides than before."},
    {t:"The bus company tricked everyone", ok:false, fb:"Almost every price went up over the years, not just the bus. That is inflation, not a trick."}]}
};

const CFG = {
  n:40, title:"Inflation", homeSub:"Four short lessons. Why the same dollar buys less over the years, and what that means for your savings.",
  pool:["q401a","q401b","q401c","q402a","q402b","q403a"], transfer:"q403b",
  quest:"You watched prices climb in an old price book, saw a tin of money lose buying power, and compared it with savings that earns interest.",
  failKeys:"The keys: inflation is prices on almost everything slowly going up over the years; your dollars do not disappear, but their buying power shrinks; savings that earns interest keeps up better than a tin; and inflation is not a reason to spend everything today.",
  nextFile:"module-41-making-money-work.html",
  passStory:'<p><strong>You now own:</strong> inflation and buying power.</p>'+
    '<p>Kai looks at the two jars on Rana’s screen. The tin fell a long way behind. The savings did much better, but it still slipped a little.</p>'+
    '<p>"So even savings can fall behind?" he asks.</p>'+
    '<p>"A little, sometimes," Rana says. "That is why I asked what your money could do if it went out to work. Some kinds of work can grow faster than prices. But they come with more risk, and you already know how to think about risk."</p>'+
    '<p class="muted">Module 41: Making Money Work.</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about inflation, buying power, or why a tin of money slowly falls behind. Or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 40 (Inflation) of a financial-literacy app, the first module of a new block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, multiply, buy, sell, pay, price, cost, earn, work, spend, need, save, goal, percent, bank, deposit, withdraw, balance, checking, savings, transaction, notification, interest, grow, fee, overdraft, PIN, scam, budget, cushion, borrow, loan, lend, owe, debt, debit card, credit card, credit score, due date, lender, minimum payment, employer, wage, paycheck, income, tax, take-home pay, sales tax, receipt, tax return, refund, risk, loss, emergency, emergency fund, insurance, premium, claim, deductible, policy, coverage. "+
  "From THIS module: inflation (prices on almost everything slowly going up over the years, so the same dollar buys a little less) and buying power (how much your money can actually get you; the number of dollars stays the same, but inflation shrinks what they buy). "+
  "Why prices rise, in plain words: making and bringing things usually costs more over time (boat fuel, workers' wages, materials), and when people have more money to spend on the same amount of stuff, sellers can ask more. Wages usually go up over the years too. It happens slowly, almost everywhere. "+
  "Key points: your dollars do not disappear, their buying power shrinks; one seller raising one price is not inflation (compare and buy elsewhere); money in a tin falls behind; savings that earns interest keeps up better but may still slip a little; inflation is NOT a reason to spend everything now, because needs, goals, and the emergency fund still come first. "+
  "TEACHING STYLE: concepts over calculations. Never give inflation rates, interest rates, or percentages for them. Do not predict future prices. Do not recommend specific banks or products. "+
  "STRICT RULES: never use these words (later modules): invest, investment, stock, bond, share (as in company share), diversify, portfolio, return (as in investment return), compound, retirement, mortgage. If the learner uses one, answer briefly in plain words and say it is coming later. "+
  "Story context: right after storm season, Rana asked Kai what his money could do if it went out to work. First she showed him why it matters: Tavo's old price book from thirty years ago (mango 20 cents, rope $1, sail $8) against today's prices (mango 70 cents, rope $4, sail $30). Then Kai watched $10 in a tin buy 10 coconuts today but only 4 after twenty years, while $10 in savings grew with interest to $20 and still bought 8. "+
  "Never repeat a failed explanation: switch examples (a bus ride a grandparent paid 50 cents for, a snack, a ticket). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple 'inflation or not?' question and wait.";
//@@LESSONS
/* =====================================================================
   SIMULATOR — Tavo's price book, and the tin-vs-savings coconut jars.
   Coconut price every 5 years: $1.00, $1.25, $1.50, $2.00, $2.50.
   Tin: $10 the whole time.   Savings with interest: $10, $12, $14, $17, $20.
===================================================================== */
const BOOK=[
  {nm:"🥭 Mango", w:"mango", then:"20¢", now:"70¢"},
  {nm:"🪢 Rope", w:"rope", then:"$1", now:"$4"},
  {nm:"⛵ Sail", w:"sail", then:"$8", now:"$30"}
];
function pricebook(shown){
  return '<div class="pricebook"><div class="hd">Tavo’s Price Book</div>'+
    '<div class="row h"><span>Item</span><span>30 years ago</span><span>Today</span></div>'+
    BOOK.map((b,i)=>'<div class="row"><span>'+b.nm+'</span><span>'+b.then+'</span><span class="now'+(i<shown?'':' hide')+'">'+(i<shown?b.now:'??')+'</span></div>').join('')+
    '</div>';
}
const YEARS=[
  {y:"Today", price:1.00, tin:10, sav:10},
  {y:"5 years later", price:1.25, tin:10, sav:12},
  {y:"10 years later", price:1.50, tin:10, sav:14},
  {y:"15 years later", price:2.00, tin:10, sav:17},
  {y:"20 years later", price:2.50, tin:10, sav:20}
];
function money(v){ return "$"+v.toFixed(2).replace(/\.00$/,""); }
function jar(label, amt, price){
  const n=Math.floor(amt/price+1e-9);
  return '<div class="jar"><div class="lbl">'+label+'</div><div class="amt">'+money(amt)+'</div>'+
    '<div class="buys">'+"🥥".repeat(n)+'</div><div class="cnt">buys '+n+' coconut'+(n===1?'':'s')+'</div></div>';
}
function jars(k, both){
  const s=YEARS[k];
  return '<div class="years">'+s.y+'</div>'+
    '<p style="margin:4px 0 10px">One coconut costs <span class="tag">'+money(s.price)+'</span></p>'+
    '<div class="jars'+(both?' two':'')+'">'+jar("🫙 Kai’s tin", s.tin, s.price)+(both?jar("🏦 Savings", s.sav, s.price):'')+'</div>';
}

/* =====================================================================
   LESSON 1 — Tavo's Price Book
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · Tavo’s price book</div>
    <div class="recap"><strong>Kai’s story so far:</strong> Storm season is over. His money is safe: savings, an emergency fund, and insurance. Then Rana asked, "What if your money could go out and work?"</div>
    <div class="card"><p>"Before we talk about money going to work," Rana says, "you should see <em>why</em> it matters."</p>
    <p>She walks Kai to Tavo’s shed. Tavo has fished for thirty years, and he writes everything down. He pulls out a faded notebook: the prices he paid when he was young.</p></div>
    ${pricebook(0)}
    <div class="card"><p>Guess: are today’s prices higher, lower, or the same?</p></div>
    <button onclick="next()">Show today’s prices</button>`),
  ()=>{
    let k=0;
    function draw(){
      show(`<div class="kicker">Lesson 1 · Then and now</div>
        ${pricebook(k)}
        <div id="cont">${k<BOOK.length
          ? '<button data-bot="1" onclick="window._r()">Show today’s '+BOOK[k].w+' price</button>'
          : '<div class="feedback good">Every one went up. A $4 rope and a $30 sail: Kai paid those prices himself this storm season.</div><button onclick="next()">Why?</button>'}</div>`);
      window._r=()=>{ k++; draw(); };
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 1 · A new word</div>
    <div class="card"><p>"Same mango. Same rope. Same kind of sail," Tavo says. "They just cost more dollars now. And not only at one stall. Almost everything on the island went up, a little at a time, year after year."</p>
    <p>When prices on almost everything slowly go up over the years, it is called <strong>inflation</strong>.</p>
    <p>"But why?" Kai asks.</p>
    <p>"Boat fuel costs more. Workers earn bigger wages than I did back then. And when people have more money to spend on the same number of mangoes, sellers ask more for them," Tavo says. "It happens slowly, and it happens almost everywhere."</p></div>
    <button onclick="earnWord('inflation');next()">New word: inflation</button>`),
  ()=>renderMC("q401a", next),
  ()=>renderMC("q401b", next),
  ()=>renderTF("q401c", next),
];

/* =====================================================================
   LESSON 2 — The Tin and the Coconuts
===================================================================== */
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · The tin and the coconuts</div>
    <div class="recap"><strong>So far:</strong> inflation means prices on almost everything slowly go up over the years.</div>
    <div class="card"><p>Rana opens a little money game on her phone. "Say you put $10 in your old tin and hide it for twenty years. Nobody touches it."</p>
    <p>"Then I still have $10," Kai says.</p>
    <p>"You do. Now watch what that $10 can buy."</p></div>
    <button onclick="next()">Start the game</button>`),
  ()=>{
    let k=0;
    function draw(){
      const last=k>=YEARS.length-1;
      show(`<div class="kicker">Lesson 2 · Watch the tin</div>
        ${jars(k,false)}
        <div id="cont">${last
          ? '<div class="feedback bad">Still $10. But it went from 10 coconuts to 4.</div><button onclick="next()">What happened?</button>'
          : '<button data-bot="1" onclick="window._w()">⏩ Wait 5 years</button>'}</div>`);
      window._w=()=>{ k++; draw(); };
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 2 · Another new word</div>
    <div class="card"><p>Nobody opened the tin. Nobody took a dollar. It is still $10.</p>
    <p>What shrank is its <strong>buying power</strong>: how much your money can actually get you.</p>
    <p style="text-align:center"><strong>Inflation does not take your dollars. It shrinks what they can buy.</strong></p></div>
    <button onclick="earnWord('buyingpower');next()">New word: buying power</button>`),
  ()=>show(`<div class="kicker">Lesson 2 · Round two</div>
    <div class="card"><p>"Now play it again," Rana says. "This time, also put $10 in your <strong>savings account</strong>, where it earns interest, like you saw back in Module 21."</p></div>
    <button onclick="next()">Play again</button>`),
  ()=>{
    let k=0;
    function draw(){
      const last=k>=YEARS.length-1;
      show(`<div class="kicker">Lesson 2 · Tin vs. savings</div>
        ${jars(k,true)}
        <div id="cont">${last
          ? '<div class="feedback good">The tin fell to 4 coconuts. The savings grew to $20 and still buys 8. It kept up much better, but not perfectly.</div><button onclick="next()">Continue</button>'
          : '<button data-bot="1" onclick="window._w()">⏩ Wait 5 years</button>'}</div>`);
      window._w=()=>{ k++; draw(); };
    }
    draw();
  },
  ()=>renderMC("q402a", next),
  ()=>renderMC("q402b", next),
];

/* =====================================================================
   LESSON 3 — Smart Move or Trap? (challenge)
===================================================================== */
const MOVES=[
  {wk:"At the market", story:"The mango stall by the dock raises its price from 70¢ to $1.40 overnight. Every other stall still charges 70¢.", opts:[
    {t:"Buy from another stall. This is one seller, not inflation", ok:true, fb:"Right. Inflation is slow and almost everywhere. One jump at one stall is a reason to compare prices."},
    {t:"Buy lots of mangoes today before every stall doubles", ok:false, fb:"Nothing says the other stalls will double. One seller's price is not inflation. Buy from another stall."},
    {t:"Pay $1.40, because prices always go up", ok:false, fb:"Prices across the island rise slowly. This is one seller. Compare and buy from another stall."}]},
  {wk:"Mika's idea", story:"Mika says: \"Prices keep going up, so money you keep is wasted. Spend all your savings today!\"", opts:[
    {t:"Keep saving. Needs and goals come first, and savings with interest keeps up better than a tin", ok:true, fb:"Right. Inflation is slow. It is a reason to keep savings where it can grow, not to empty it."},
    {t:"Spend it all on wants before it shrinks", ok:false, fb:"That leaves nothing for needs, goals, or an emergency. Inflation is slow. Keep saving somewhere it can grow."},
    {t:"Move it all into the tin so it is safe", ok:false, fb:"You just watched the tin lose buying power. Savings with interest keeps up better."}]},
  {wk:"A big goal", story:"Kai wants a bigger boat in about ten years. He has $50 put aside for it.", opts:[
    {t:"Keep it in savings so it earns interest while he waits, and keep adding to it", ok:true, fb:"Right. A goal years away needs money that grows, because the boat's price will likely go up too."},
    {t:"Hide it in the tin for ten years", ok:false, fb:"Ten years in a tin means the same $50 buys less boat. Let it earn interest in savings."},
    {t:"Spend it now, because the boat will cost more anyway", ok:false, fb:"Then he has nothing toward the goal. Keep saving, somewhere it can grow."}]},
  {wk:"The emergency fund", story:"Kai wonders: \"Inflation shrinks buying power. Should I spend my emergency fund before it shrinks?\"", opts:[
    {t:"No. Keep it in savings, safe and ready, and top it up now and then as prices rise", ok:true, fb:"Right. The fund's job is to be there on a bad day. Savings keeps it safe and earning a little interest, and topping it up keeps it big enough."},
    {t:"Yes, spend it before it loses buying power", ok:false, fb:"Then a surprise could push him into debt. The fund's job is to be ready. Keep it in savings and top it up."},
    {t:"Move it to the tin under the bed", ok:false, fb:"The tin loses buying power fastest. Savings keeps the fund safe and earning interest."}]}
];
let iStars=0;
const L3=[
  ()=>{ iStars=0;
    show(`<div class="kicker">Lesson 3 · Smart move or trap?</div>
    <div class="recap"><strong>So far:</strong> inflation shrinks buying power; a tin falls behind; savings with interest keeps up better.</div>
    <div class="card"><p>Rana gives Kai four moments from island life. Some ideas about inflation sound smart but are traps.</p>
    <p>Get each one right the first time to earn a ⭐.</p></div>
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
      <li>✅ One seller’s price jump is <strong>not</strong> inflation. Compare prices.</li>
      <li>✅ Inflation is slow. It is not a reason to spend everything.</li>
      <li>✅ Goals years away need money that <strong>grows</strong>.</li>
      <li>✅ The emergency fund stays in savings, ready, and gets topped up.</li>
    </ul></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q403a", next),
];
const META=[
  {title:"Tavo’s Price Book", sub:"Same things, more dollars", emoji:"📒"},
  {title:"The Tin and the Coconuts", sub:"Watch $10 lose buying power", emoji:"🥥"},
  {title:"Smart Move or Trap?", sub:"Four choices about rising prices", emoji:"🧭"},
];
