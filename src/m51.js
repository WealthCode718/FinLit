//@@META
title=Your Money Plan
file=module-51-your-money-plan.html
placeholder=Ask about net worth and building a money plan…
//@@CSS
  .week{font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:#fff; background:var(--shell); display:inline-block; border-radius:6px; padding:2px 10px; margin-bottom:8px; font-weight:700}
  .stars{font-size:28px; letter-spacing:4px; text-align:center; margin:6px 0}
  .sheet{display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:12px}
  .col{background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:10px; min-width:0}
  .col .hd{font-size:12px; letter-spacing:.1em; text-transform:uppercase; font-weight:800; margin-bottom:6px}
  .col.own .hd{color:var(--good)} .col.owe .hd{color:var(--bad)}
  .col .ln{display:flex; justify-content:space-between; gap:4px; font-size:13px; padding:3px 0; border-bottom:1px dashed #e3e9e6}
  .col .tot{display:flex; justify-content:space-between; font-weight:800; margin-top:6px}
  .nw{background:#fffdf5; border:2px solid var(--sand-deep); border-radius:14px; padding:12px; text-align:center; margin-bottom:12px}
  .nw .n{font-family:"Fraunces",Georgia,serif; font-size:30px; font-weight:800}
  .sortbar .own{background:var(--good)} .sortbar .owe{background:var(--bad)}
  .steps{display:grid; gap:8px; margin-bottom:12px}
  .steps button{background:#fff; color:var(--ink); border:2px solid #d9e2de; border-radius:12px; padding:10px 12px; text-align:left; font-size:14px; font-weight:600; min-height:44px}
  .steps button.wrong{border-color:var(--bad); background:#f8e6e3}
  .plan{background:#fffdf5; border:2px solid var(--sand-deep); border-radius:10px; padding:12px 14px; margin-bottom:12px; font-size:14px}
  .plan .hd{font-family:"Fraunces",Georgia,serif; font-weight:700; font-size:18px; text-align:center; margin-bottom:6px}
  .plan ol{margin:0; padding-left:22px} .plan li{padding:3px 0}
  .plan li.todo{color:#b9c2be}
//@@CONTENT
/* =====================================================================
   MODULE 51 — YOUR MONEY PLAN  (Your Money Life block, 2 of 3)
   Vocab: net worth, financial plan.
   L1: Sort Kai's things into OWN or OWE, then net worth = own − owe.
       Things are worth what someone would pay now. Named: net worth.
   L2: Build a one-page plan by tapping five steps in order: income →
       budget (needs, insurance, a little giving) → emergency fund →
       pay off costly debt → long-term investing & retirement account.
       Named: financial plan.
   L3: Plan check-ups: a raise, a lost job, rising prices, a new goal.
   Concept over computation: one subtraction for net worth.
===================================================================== */
const VOCAB = {
  networth:{term:"net worth", def:"Everything you own minus everything you owe. Owning a lot doesn't mean much if you owe a lot too. Saving, investing, and paying off debt make it grow."},
  finplan:{term:"financial plan", def:"Your whole money picture on one page, in order: know your income, budget for needs, build an emergency fund, pay off costly debt, then invest for the long term, with room for goals and giving. Check it whenever life changes."}
};

const QUESTIONS = {
  "q511a":{type:"mc", prompt:"What is net worth?", concept:"networth", opts:[
    {t:"Everything you own minus everything you owe", ok:true, fb:"Right. Own minus owe."},
    {t:"How much money you earn each month from your job, before spending", ok:false, fb:"That's income. Net worth is everything you own minus everything you owe."},
    {t:"How much money is in your wallet", ok:false, fb:"That's just cash. Net worth counts everything you own, minus everything you owe."}]},
  "q511b":{type:"mc", prompt:"Mika owns $500 in total and owes $100. What is her net worth?", concept:"networth", opts:[
    {t:"$400", ok:true, fb:"Right. $500 own − $100 owe = $400."},
    {t:"$600", ok:false, fb:"What you owe gets taken AWAY, not added. $500 − $100 = $400."},
    {t:"$500", ok:false, fb:"Don't forget what she owes. $500 − $100 = $400."}]},
  "q511c":{type:"tf", prompt:"True or false: someone with a big, fancy house always has a high net worth.", answer:false, concept:"networth",
    good:"Right. If they owe almost as much as the house is worth, their net worth could be small, or even below zero.",
    bad:"Look again. Net worth is own MINUS owe. A big house with a big loan can leave a small net worth."},
  "q512a":{type:"mc", prompt:"What is a financial plan?", concept:"finplan", opts:[
    {t:"Your whole money picture on one page, checked when life changes", ok:true, fb:"Right. Income, budget, emergency fund, costly debt, long-term investing, with room for goals and giving."},
    {t:"A promise from a bank that you'll get rich", ok:false, fb:"Nobody can promise that. A financial plan is your own map for your money."},
    {t:"A list of all the things you want to buy this year, with their prices", ok:false, fb:"A wish list is part of it at most. A financial plan covers income, needs, safety, debt, and the long term."}]},
  "q512b":{type:"mc", prompt:"In Kai's plan, what comes BEFORE long-term investing?", concept:"finplan", opts:[
    {t:"A budget for needs, an emergency fund, and paying off costly debt", ok:true, fb:"Right. Safety and debt first, then let long-term money go to work (Module 41)."},
    {t:"Nothing. Investing always comes first", ok:false, fb:"Investing money he might need tomorrow is risky. Budget, emergency fund, and costly debt come first."},
    {t:"Buying everything he wants", ok:false, fb:"Wants fit inside the budget, but needs, safety, and costly debt come before investing."}]},
  "q513a":{type:"mc", prompt:"Kai gets a raise of $20 a month. What's the smartest plan update?", concept:"finplan", opts:[
    {t:"Enjoy part of it, and send part to savings, investing, or giving", ok:true, fb:"Right. If all of a raise goes to spending, the plan stays stuck. Split it."},
    {t:"Spend all of it on fun, since he earned it and his old plan already works", ok:false, fb:"It's his choice, but sending part of it to his goals makes the raise help his future too."},
    {t:"Ignore his plan from now on", ok:false, fb:"A raise is exactly when to update the plan, so the extra money has a job."}]},
  "q513b":{type:"mc", transfer:true, prompt:"Lena's cousin owns a car worth $2,000 and has $300 in savings. He owes $1,500 on a car loan. What is his net worth?", concept:"networth", opts:[
    {t:"$800", ok:true, fb:"Exactly. Own $2,000 + $300 = $2,300. Owe $1,500. $2,300 − $1,500 = $800."},
    {t:"$2,300", ok:false, fb:"That's what he owns. Take away the $1,500 he owes: $800."},
    {t:"$3,800", ok:false, fb:"The loan is owed, so it's subtracted, not added. $2,300 − $1,500 = $800."}]}
};

const CFG = {
  n:51, title:"Your Money Plan", homeSub:"Four short lessons. Find your net worth, build a one-page plan, and keep it up to date.",
  pool:["q511a","q511b","q511c","q512a","q512b","q513a"], transfer:"q513b",
  quest:"You sorted Kai's things into own and owe, found his net worth, built his financial plan step by step, and updated it as life changed.",
  failKeys:"The keys: net worth is everything you own minus everything you owe; a financial plan puts income, a needs budget, an emergency fund, paying off costly debt, and long-term investing in order; and you check the plan whenever life changes.",
  nextFile:"module-52-final-island-challenge.html",
  passStory:'<p><strong>You now own:</strong> net worth and financial plan.</p>'+
    '<p>Kai pins his one-page plan above his bed, next to the very first shell he ever traded.</p>'+
    '<p>Rana, Tavo, Nalu, and Mika gather on the dock. "One last thing," Rana says. "A plan on paper is good. A plan that survives real life is better."</p>'+
    '<p>Tavo grins. "Let’s fast-forward through Kai’s life, and see if his plan holds."</p>'+
    '<p class="muted">Module 52: The Final Island Challenge.</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about net worth, building a financial plan, or keeping it up to date. Or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 51 (Your Money Plan) of a financial-literacy app, part of the final block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, price, cost, buy, sell, pay, earn, spend, need, save, goal, budget, cushion, bank, savings, checking, interest, fee, scam, borrow, loan, owe, debt, credit card, minimum payment, wage, paycheck, income, tax, take-home pay, risk, emergency fund, insurance, premium, inflation, buying power, invest, return, stock, diversify, investment fund, compound growth, long-term, risk tolerance, investment plan, advertising, value, contract, donate, charity, fine print, comparison shopping, retirement, retirement account. "+
  "From THIS module: net worth (everything you own minus everything you owe; things count at what someone would pay for them now) and financial plan (your whole money picture on one page, in order: know your take-home income; budget for needs, insurance, and a little giving; build an emergency fund; pay off costly debt; then invest for the long term including a retirement account; with room for goals and fun; check it whenever life changes). "+
  "Key points: a high income or a big house doesn't mean a high net worth if you owe a lot; net worth grows by saving, investing, and paying off debt, and shrinks by borrowing for wants; when you get a raise, split it between enjoying and your goals; when income drops, the emergency fund and cutting wants come first; when prices rise, update the budget; a plan is a guide, not a cage. "+
  "TEACHING STYLE: concepts over calculations; simple adding and subtracting are fine. No personal financial advice; for real situations suggest a trusted adult. Never name real companies, products, or programs. "+
  "Story context: Kai sorted his things into own (savings $50, emergency fund $60, island fund $140, his boat worth $300 if sold today, a fancy jacket worth only $20 now though it cost $60) and owe (a $20 credit card balance and $10 he borrowed from Mika). Own $570, owe $30, net worth $540. Then he built his financial plan in five steps and practiced check-ups: a raise, a lost job, rising prices, and a new goal. "+
  "Never repeat a failed explanation: switch examples (a backpack of things vs. IOUs, a seesaw with own on one side and owe on the other, a map for a trip). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple 'own or owe?' question and wait.";
//@@LESSONS
/* =====================================================================
   INTERACTIVES — own/owe sort into a net-worth sheet, the five-step
   plan builder, and plan check-ups.
===================================================================== */
const ITEMS=[
  {t:"🏦 Savings account", v:50, a:"own", why:"Money that's his."},
  {t:"💳 Credit card balance", v:20, a:"owe", why:"Money he owes the card's lender."},
  {t:"🛟 Emergency fund", v:60, a:"own", why:"His safety money. He owns it."},
  {t:"🫙 Island investment fund", v:140, a:"own", why:"His slice of the fund. He owns it."},
  {t:"🤝 Borrowed from Mika", v:10, a:"owe", why:"He owes Mika $10."},
  {t:"⛵ His boat (what someone would pay today)", v:300, a:"own", why:"He owns it. It counts at what it would sell for now."},
  {t:"🧥 Fancy jacket (cost $60, would sell for $20)", v:20, a:"own", why:"He owns it, but it's only worth what someone would pay now: $20, not $60."}
];
function sheet(done){
  const own=done.filter(x=>x.a==="own"), owe=done.filter(x=>x.a==="owe");
  const so=own.reduce((s,x)=>s+x.v,0), sw=owe.reduce((s,x)=>s+x.v,0);
  return '<div class="sheet"><div class="col own"><div class="hd">✅ Own</div>'+own.map(x=>'<div class="ln"><span>'+x.t.split(" (")[0]+'</span><span>$'+x.v+'</span></div>').join('')+'<div class="tot"><span>Total</span><span>$'+so+'</span></div></div>'+
    '<div class="col owe"><div class="hd">⛔ Owe</div>'+owe.map(x=>'<div class="ln"><span>'+x.t.split(" (")[0]+'</span><span>$'+x.v+'</span></div>').join('')+'<div class="tot"><span>Total</span><span>$'+sw+'</span></div></div></div>';
}
const STEPS=[
  {t:"💵 Know your income: take-home pay after taxes", why:"Everything starts with what actually comes in."},
  {t:"📋 Budget: needs first, then insurance, a little giving, and some fun", why:"Needs come first. Insurance and giving fit inside the budget."},
  {t:"🛟 Build an emergency fund", why:"Safety before anything risky."},
  {t:"✂️ Pay off costly debt", why:"Costly debt compounds against you. Clearing it is a sure win."},
  {t:"🌱 Invest for the long term, including a retirement account", why:"Now long-term money can go to work, spread out."}
];
let iStars=0;
const MOVES=[
  {wk:"A raise", story:"Kai's pay goes up by $20 a month.", opts:[
    {t:"Update the plan: enjoy some, and send some to his emergency fund, investing, or giving", ok:true, fb:"Right. Give every new dollar a job. Splitting it lets him enjoy now and grow later."},
    {t:"Spend it all; the plan was made before the raise", ok:false, fb:"That's exactly when to update the plan. Otherwise the raise just disappears."},
    {t:"Take out a loan, since he earns more now", ok:false, fb:"More income isn't a reason to borrow. Update the plan instead."}]},
  {wk:"A lost job", story:"The fish market closes. Kai is out of work for two months while he looks for a new job.", opts:[
    {t:"Use the emergency fund for needs, pause wants, and keep paying minimums on time", ok:true, fb:"Right. This is what the emergency fund is for. Cut wants, protect needs, avoid new debt."},
    {t:"Sell his investments in a panic and buy a treat to feel better", ok:false, fb:"The emergency fund is there so he doesn't have to sell long-term money or add new spending."},
    {t:"Put everything on a credit card and keep spending as usual", ok:false, fb:"That turns a hard two months into a long debt. Use the emergency fund and cut wants."}]},
  {wk:"Prices rise", story:"Food and rope cost more this year. Kai's old budget doesn't cover his needs anymore.", opts:[
    {t:"Update the budget: needs first, trim wants, and top up the emergency fund", ok:true, fb:"Right. Inflation (Module 40) means the plan needs new numbers."},
    {t:"Keep the old budget and hope it works", ok:false, fb:"Needs come first. If they cost more, the budget has to change."},
    {t:"Stop saving forever", ok:false, fb:"He may save a little less for a while, but trimming wants first keeps the plan alive."}]},
  {wk:"A new goal", story:"Kai wants to help pay for his little sister's school trip in 8 months.", opts:[
    {t:"Add it as a short-term goal: save a bit each week in savings, not the investment fund", ok:true, fb:"Right. 8 months is short-term, so the money stays safe and handy."},
    {t:"Put the trip money in the investment fund to grow faster", ok:false, fb:"8 months isn't long-term. The fund could be down when the trip comes."},
    {t:"Take it from his retirement account", ok:false, fb:"That can cost extra and loses decades of growth. Save for it separately."}]}
];

/* =====================================================================
   LESSON 1 — Own and Owe
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · Own and owe</div>
    <div class="recap"><strong>Kai’s story so far:</strong> Kai has goals for this week and goals for when he’s old. He wants one plan that holds all of it.</div>
    <div class="card"><p>"Every plan starts with knowing where you stand," Rana says. "List everything you <strong>own</strong>, and everything you <strong>owe</strong>."</p>
    <p>Sort each thing into the right column.</p></div>
    <button onclick="next()">Start sorting</button>`),
  ()=>{
    let i=0; const done=[];
    function draw(){
      if(i>=ITEMS.length){ addXP(4); next(); return; }
      const m=ITEMS[i];
      show(`<div class="kicker">Own or owe? · ${i+1} of ${ITEMS.length}</div>
        ${sheet(done)}
        <div class="item">${m.t} · $${m.v}</div>
        <div class="sortbar"><button class="own" id="bO">✅ Own</button><button class="owe" id="bW">⛔ Owe</button></div>
        <div id="fb"></div><div id="cont"></div>`);
      let ok1=false;
      function pick(a){
        if(ok1) return;
        const ok=a===m.a;
        document.getElementById("fb").innerHTML='<div class="feedback '+(ok?'good':'bad')+'">'+(ok?'Right. '+m.why:'Ask: is it his, or does he have to pay it to someone? Try again.')+'</div>';
        revealFB();
        if(ok){ ok1=true; addXP(1); done.push(m);
          document.getElementById("bO").disabled=true; document.getElementById("bW").disabled=true;
          document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<ITEMS.length-1?"Next":"See the totals")+'</button>';
          window._n=()=>{ i++; draw(); }; revealFB(); }
      }
      document.getElementById("bO").onclick=()=>pick("own");
      document.getElementById("bW").onclick=()=>pick("owe");
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 1 · A new word</div>
    ${sheet(ITEMS)}
    <div class="nw"><div class="muted">$570 own − $30 owe =</div><div class="n">$540</div></div>
    <div class="card"><p>Everything you own minus everything you owe is your <strong>net worth</strong>.</p>
    <p>Notice the jacket: it cost $60 but would only sell for $20. Things count at what someone would pay for them <em>now</em>.</p>
    <p>Saving, investing, and paying off debt make net worth grow. Borrowing for wants makes it shrink.</p></div>
    <button onclick="earnWord('networth');next()">New word: net worth</button>`),
  ()=>renderMC("q511a", next),
  ()=>renderMC("q511b", next),
  ()=>renderTF("q511c", next),
];

/* =====================================================================
   LESSON 2 — One Page, In Order
===================================================================== */
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · One page, in order</div>
    <div class="recap"><strong>So far:</strong> Kai’s net worth is $540.</div>
    <div class="card"><p>"You’ve learned dozens of money moves," Rana says. "The trick is doing them in the right <em>order</em>. Put them on one page."</p>
    <p>Tap the steps in the order Kai should do them.</p></div>
    <button onclick="next()">Build the plan</button>`),
  ()=>{
    let n=0, last=null; const order=STEPS.map((s,i)=>i).sort(()=>Math.random()-.5); const wrong=new Set();
    function draw(){
      if(n>=STEPS.length){ addXP(5); next(); return; }
      show(`<div class="kicker">Lesson 2 · Step ${n+1} of ${STEPS.length}</div>
        <div class="plan"><div class="hd">Kai’s Financial Plan</div><ol>${STEPS.map((s,i)=>'<li class="'+(i<n?'':'todo')+'">'+(i<n?s.t:'…')+'</li>').join('')}</ol></div>
        <p style="text-align:center"><strong>Which step comes next?</strong></p>
        <div class="steps">${order.filter(i=>i>=n).map(i=>'<button data-bot="1" data-i="'+i+'" class="'+(wrong.has(i)?'wrong':'')+'"'+(wrong.has(i)?' disabled':'')+'>'+STEPS[i].t+'</button>').join('')}</div>
        <div id="fb">${last?last:''}</div>`);
      document.querySelectorAll(".steps button").forEach(b=>{ b.onclick=()=>{
        const i=+b.dataset.i;
        if(i===n){ last='<div class="feedback good">Right. '+STEPS[i].why+'</div>'; wrong.clear(); n++; addXP(1); }
        else { wrong.add(i); last='<div class="feedback bad">Not yet. Something needs to come before that. Try again.</div>'; }
        draw(); revealFB();
      }; });
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 2 · Another new word</div>
    <div class="plan"><div class="hd">Kai’s Financial Plan</div><ol>${STEPS.map(s=>'<li>'+s.t+'</li>').join('')}</ol></div>
    <div class="card"><p>Your whole money picture on one page, in order, is a <strong>financial plan</strong>. It also has room for goals, fun, and giving, and you check it whenever life changes.</p></div>
    <button onclick="earnWord('finplan');next()">New word: financial plan</button>`),
  ()=>renderMC("q512a", next),
  ()=>renderMC("q512b", next),
];

/* =====================================================================
   LESSON 3 — Plan Check-ups (challenge)
===================================================================== */
const L3=[
  ()=>{ iStars=0;
    show(`<div class="kicker">Lesson 3 · Plan check-ups</div>
    <div class="recap"><strong>So far:</strong> net worth shows where you stand; a financial plan shows the order.</div>
    <div class="card"><p>"A plan isn’t carved in stone," Tavo says. "Life changes. The plan changes with it."</p>
    <p>Four changes. Get each right the first time to earn a ⭐.</p></div>
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
    <div class="card"><p><strong>Check your plan when:</strong></p><ul class="recaplist">
      <li>✅ Your income goes up, or down.</li>
      <li>✅ Prices change.</li>
      <li>✅ You have a new goal.</li>
      <li>✅ And once in a while, just to see your net worth grow.</li>
    </ul></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q513a", next),
];
const META=[
  {title:"Own and Owe", sub:"Find Kai’s net worth", emoji:"⚖️"},
  {title:"One Page, In Order", sub:"Build Kai’s financial plan step by step", emoji:"🗺️"},
  {title:"Plan Check-ups", sub:"Update the plan as life changes", emoji:"🔄"},
];
