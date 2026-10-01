//@@META
title=The Final Island Challenge
file=module-52-final-island-challenge.html
placeholder=Ask about anything from the whole course…
//@@CSS
  .week{font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:#fff; background:var(--shell); display:inline-block; border-radius:6px; padding:2px 10px; margin-bottom:8px; font-weight:700}
  .stars{font-size:26px; letter-spacing:3px; text-align:center; margin:6px 0}
  .lane{display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:12px}
  .lane button{background:#fff; color:var(--ink); border:2px solid #d9e2de; border-radius:12px; padding:10px; text-align:left; font-size:13px; font-weight:400; line-height:1.35; min-height:64px; min-width:0}
  .lane button .t{font-weight:800; font-size:14px; display:block}
  .lane button.open{border-color:var(--good); background:#e8f3ee}
  .meter{background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:12px 14px; margin-bottom:12px}
  .meter .lbl{font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:var(--ink-soft); font-weight:700; display:flex; justify-content:space-between}
  .meter .bar{height:14px; border-radius:999px; background:#eef2f0; overflow:hidden; margin-top:8px}
  .meter .bar div{height:100%; background:var(--good); border-radius:999px; transition:width .5s ease}
  .sortbar .gd{background:var(--good)} .sortbar .bd{background:var(--bad)}
  .pledge{display:grid; gap:8px; margin-bottom:12px}
  .pledge button{background:#fff; color:var(--ink); border:2px solid #d9e2de; border-radius:12px; padding:10px 12px; text-align:left; font-size:14px; font-weight:600; min-height:44px}
  .pledge button.on{border-color:var(--good); background:#e8f3ee}
  .final{background:linear-gradient(135deg,#fff3c4,#e8f3ee); border:3px solid var(--good); border-radius:16px; padding:18px; text-align:center; margin-bottom:12px}
  .final .big{font-family:"Fraunces",Georgia,serif; font-size:26px; font-weight:800}
//@@CONTENT
/* =====================================================================
   MODULE 52 — THE FINAL ISLAND CHALLENGE  (course finale)
   Vocab: financial well-being, habit.
   L1: Memory lane: tap all nine blocks to recall one big idea each.
       Named: financial well-being (PISA's end goal).
   L2: Kai's whole life, ages 18 to 65: eight stages, every block, with
       a well-being meter and story net worth (smoothed, not a promise).
   L3: Good habit or bad habit? sort; named: habit. Then a pledge (pick
       any three) and the course-complete screen.
===================================================================== */
const VOCAB = {
  wellbeing:{term:"financial well-being", def:"Feeling secure about your money today and ready for tomorrow: needs covered, a cushion for surprises, no debt you can't handle, and choices about the future. It's about habits and plans, not just how much you earn."},
  habit:{term:"habit", def:"Something you do so often it becomes automatic. Small money habits, like checking your balance or saving a little from every paycheck, add up to a whole life."}
};

const QUESTIONS = {
  "q521a":{type:"mc", prompt:"What is financial well-being?", concept:"wellbeing", opts:[
    {t:"Feeling secure about money today and ready for tomorrow, with needs covered and choices ahead", ok:true, fb:"Right. It's security plus choices, built from habits and plans."},
    {t:"Being the richest person on the island", ok:false, fb:"Rich people can still be stressed and in debt. Well-being is about security and choices, not just size."},
    {t:"Never spending any money", ok:false, fb:"Spending on needs and some fun is part of a good life. Well-being means it's all inside a plan."}]},
  "q521b":{type:"mc", prompt:"Who has better financial well-being?", concept:"wellbeing", opts:[
    {t:"Nalu: a modest income, an emergency fund, no costly debt, and a plan", ok:true, fb:"Right. Security and a plan beat a big paycheck with no cushion."},
    {t:"A trader with a big income, no savings, and three maxed-out credit cards", ok:false, fb:"A big income doesn't help if every dollar is already owed. One surprise could sink him."},
    {t:"They're the same, because only income matters", ok:false, fb:"Income is just one piece. Savings, debt, and a plan matter just as much."}]},
  "q521c":{type:"tf", prompt:"True or false: financial well-being depends only on how much money you earn.", answer:false, concept:"wellbeing",
    good:"Right. Habits, a plan, a cushion, and staying out of costly debt matter just as much.",
    bad:"Look again. Plenty of high earners are stressed and in debt. Habits and plans matter as much as income."},
  "q522a":{type:"mc", prompt:"At 35, Kai's investments drop a lot in a crash year. His plan says this is money for retirement. What does he do?", concept:"wellbeing", opts:[
    {t:"Stick to the plan. It's long-term money, and he expected bad years", ok:true, fb:"Right. Same lesson as Modules 44 and 45: panic isn't a plan."},
    {t:"Sell everything before it drops further", ok:false, fb:"That locks in the loss and stops the compound growth. His plan says wait."},
    {t:"Borrow money to buy more", ok:false, fb:"Borrowing to invest adds big risk. Stick to the plan."}]},
  "q522b":{type:"mc", prompt:"At 23, a storm wrecks Kai's boat, but he's okay. What protected him?", concept:"wellbeing", opts:[
    {t:"Insurance paid for most of it, and his emergency fund covered the deductible", ok:true, fb:"Right. Risk & Insurance (Modules 35–39) in real life."},
    {t:"Luck. Nothing could have helped", ok:false, fb:"He planned for this: insurance for big losses, an emergency fund for the deductible."},
    {t:"A loan from a stranger at the dock", ok:false, fb:"No debt needed. His insurance and emergency fund did the job."}]},
  "q523a":{type:"mc", prompt:"Which one is a GOOD money habit?", concept:"habit", opts:[
    {t:"Saving a little from every paycheck, before spending the rest", ok:true, fb:"Right. Small, automatic, and it adds up for life."},
    {t:"Buying whatever a countdown ad shows you", ok:false, fb:"That's a habit, just not a good one. Pause on countdowns (Module 46)."},
    {t:"Paying only the minimum on a credit card every month", ok:false, fb:"That keeps costly debt around for a long time (Module 29)."}]},
  "q523b":{type:"mc", transfer:true, prompt:"Lena, 18, gets her first full-time job. Which first steps fit everything in this course?", concept:"wellbeing", opts:[
    {t:"Make a budget, start an emergency fund, avoid costly debt, and put a little toward the long term", ok:true, fb:"Exactly. That's the whole course on one line. Lena is ready."},
    {t:"Buy a fancy car on a loan to celebrate", ok:false, fb:"A big loan on day one shrinks her choices for years. Budget and cushion first."},
    {t:"Wait ten years before thinking about money", ok:false, fb:"The earliest years matter most, for habits and for compound growth."}]}
};

const CFG = {
  n:52, title:"The Final Island Challenge", homeSub:"Four short lessons. Walk back through the whole course, live Kai's whole life, and choose your habits.",
  pool:["q521a","q521b","q521c","q522a","q522b","q523a"], transfer:"q523b",
  quest:"You walked back through all nine blocks, guided Kai from his first job to retirement, and chose the habits you'll take with you.",
  failKeys:"The keys: financial well-being means security today and choices tomorrow, built from habits and plans, not just income; protect money with an emergency fund and insurance; avoid costly debt; read the fine print; invest long-term money and stick to the plan; give in ways you can keep up.",
  badge:" · 🏝️ FinLit complete: all 52 modules!",
  nextFile:null,
  passStory:'<p><strong>You now own:</strong> financial well-being and habit, and every word on the island.</p>'+
    '<p>The sun sets over the harbor. Kai sits on the dock with Rana, Tavo, Nalu, and Mika. In his pocket is the very first shell he ever traded.</p>'+
    '<p>"I started out not even knowing what money was," he says.</p>'+
    '<p>"And now?" asks Rana.</p>'+
    '<p>Kai smiles. "Now I know what it’s <em>for</em>."</p>'+
    '<p class="muted">🎉 You’ve finished FinLit. Come back to the island anytime to replay a module or review your words.</p>'
};

const TUTOR_HELLO = "Hi! This is the final module. Ask me anything from the whole course, or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 52 (The Final Island Challenge), the last module of a financial-literacy app. The learner may be a child or an adult. "+
  "They have learned every word in the course, including: money, price, cost, budget, save, goal, bank, balance, checking, savings, interest, fee, overdraft, PIN, scam, borrow, loan, debt, debit card, credit card, credit score, minimum payment, wage, paycheck, income, tax, take-home pay, receipt, refund, risk, emergency fund, insurance, premium, deductible, policy, coverage, inflation, buying power, invest, return, stock, profit, diversify, investment fund, compound growth, long-term, risk tolerance, investment plan, advertising, value, contract, consumer rights, donate, charity, fine print, comparison shopping, retirement, retirement account, net worth, financial plan. "+
  "From THIS module: financial well-being (feeling secure about money today and ready for tomorrow: needs covered, a cushion, no debt you can't handle, and choices about the future; built from habits and plans, not just income) and habit (something you do so often it becomes automatic; small money habits add up over a lifetime). "+
  "Key points: tie answers back to the earlier blocks; well-being isn't the same as being rich; good habits include saving a little from every paycheck, checking your balance, pausing on countdowns, reading the fine print, paying cards in full, keeping an emergency fund, sticking to a written plan, and giving in ways you can keep up. "+
  "TEACHING STYLE: concepts over calculations; warm and celebratory, since this is the end of the course. No personal financial advice; for real situations suggest a trusted adult. Never name real companies, products, account types, or programs. "+
  "Story context: Kai walked back through all nine blocks, then lived his whole life in fast-forward: a first full-time job at 18 (budget and emergency fund first), his first place at 20 (read the rental contract), a storm at 23 (insurance and emergency fund), a 'guaranteed' investment from a friend at 26 (walked away), a raise and an employer adding money to his retirement account at 30, a crash at 35 (stuck to his plan), a flooded neighbor at 40 (gave within his plan), and retirement at 65 (ready, with buckets like Tavo's). "+
  "Never repeat a failed explanation: switch examples. Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE question from any block and wait.";
//@@LESSONS
/* =====================================================================
   INTERACTIVES — memory lane, Kai's whole life with a well-being meter,
   habits sort, and the pledge.
===================================================================== */
const BLOCKS=[
  {e:"🐚", t:"Money", m:"Money works because everyone agrees on it. Spend on needs first, then save for goals."},
  {e:"➗", t:"Money Math", m:"Adding, splitting, fractions, decimals, percents: the tools behind every price tag."},
  {e:"🏦", t:"Banking", m:"A bank keeps money safe. Track your balance, watch fees, guard your PIN, spot scams."},
  {e:"💳", t:"Credit", m:"Borrowing costs extra. Pay on time, pay cards in full, and protect your credit score."},
  {e:"💼", t:"Earning & Taxes", m:"Wages, paychecks, and take-home pay. Taxes pay for shared things. Be honest on your tax return."},
  {e:"🛟", t:"Risk & Insurance", m:"Reduce risk, keep an emergency fund, insure the big losses, read your policy."},
  {e:"📈", t:"Investing", m:"Inflation shrinks idle money. Invest long-term money, spread out, and stick to the plan."},
  {e:"🌍", t:"The Money World", m:"Spot ad tricks, read the fine print, know your rights, and check before you give."},
  {e:"🌅", t:"Your Money Life", m:"Start retirement saving early, know your net worth, and keep a one-page plan."}
];
let wb=0, nw=0, lStars=0;
function meter(){ return '<div class="meter"><div class="lbl"><span>🏝️ Well-being</span><span>Net worth $'+nw.toLocaleString("en-US")+'</span></div><div class="bar"><div style="width:'+wb+'%"></div></div></div>'; }
const LIFE=[
  {wk:"Age 18 · First full-time job", nw:200, story:"Kai's first real paycheck arrives. Friends say: \"Buy a fancy boat on a loan, you can afford the payments!\"", opts:[
    {t:"Make a budget, start an emergency fund, and skip the big loan for now", ok:true, fb:"Right. Budget and cushion first (Modules 24 and 36). The fancy boat can be a goal."},
    {t:"Take the loan. Payments are easy with a paycheck", ok:false, fb:"A big loan on day one shrinks his choices for years. Budget and emergency fund first."},
    {t:"Spend the whole paycheck to celebrate", ok:false, fb:"One small treat is fine. The whole paycheck leaves nothing for needs or a cushion."}]},
  {wk:"Age 20 · A place of his own", nw:900, story:"Kai rents his first little house. The landlord hands him a two-page rental contract: \"Sign quick, others want it.\"", opts:[
    {t:"Read every line first: the total cost, how long, fees, and how to leave", ok:true, fb:"Right. “Sign quick” means slow down (Module 47). Read the fine print."},
    {t:"Sign right away before someone else does", ok:false, fb:"Rushing is the trick. Signing means agreeing to all of it. Read first."},
    {t:"Sign, and read it if there's ever a problem", ok:false, fb:"By then he's already agreed. Read before signing."}]},
  {wk:"Age 23 · The big storm", nw:2100, story:"A storm wrecks Kai's boat. Repairs cost $800. His insurance deductible is $100.", opts:[
    {t:"File an honest claim, and pay the $100 deductible from his emergency fund", ok:true, fb:"Right. Insurance for the big loss, the emergency fund for his part, and no debt."},
    {t:"Put the whole $800 on a credit card", ok:false, fb:"He has insurance and an emergency fund for exactly this. No debt needed."},
    {t:"Claim $1,200 to get a little extra", ok:false, fb:"Exaggerating a claim is dishonest and raises everyone's premium. Claim the true $800."}]},
  {wk:"Age 26 · A friend's 'sure thing'", nw:4300, story:"An old friend: \"Put $1,000 in my Coconut Coin. It's GUARANTEED to triple by summer. Don't tell anyone!\"", opts:[
    {t:"Say no. “Guaranteed,” “triple,” and “secret” are scam signs, even from a friend", ok:true, fb:"Right. Scams often come through people we trust. The plan says: guaranteed means walk away."},
    {t:"Put in $1,000. Friends don't lie", ok:false, fb:"Even honest friends can be fooled by a scam. No real investment is guaranteed to triple."},
    {t:"Put in $100 just to test it", ok:false, fb:"Money sent to a scam is usually gone. Say no."}]},
  {wk:"Age 30 · A raise, and extra money", nw:8800, story:"Kai gets a raise. His employer also says: \"Put some pay in your retirement account and we'll add more.\"", opts:[
    {t:"Read the fine print, join to get the extra, and split the raise between fun and goals", ok:true, fb:"Right. Extra money from his employer plus decades of growth (Module 50)."},
    {t:"Spend the whole raise and skip the retirement account", ok:false, fb:"He'd leave the employer's extra money on the table, and lose years of growth."},
    {t:"Put his emergency fund into the retirement account", ok:false, fb:"The emergency fund stays ready for bad days. Use part of the raise instead."}]},
  {wk:"Age 35 · The crash", nw:12500, story:"A crash year hits the whole island. Kai's investments drop a lot. Neighbors are selling in a panic.", opts:[
    {t:"Stick to his written plan. It's long-term money", ok:true, fb:"Right. He wrote the plan on a calm day for exactly this kind of year (Module 45)."},
    {t:"Sell everything now", ok:false, fb:"That locks in the drop and stops compound growth. Stick to the plan."},
    {t:"Take a loan to buy more", ok:false, fb:"Borrowing to invest adds big risk. Stick to the plan."}]},
  {wk:"Age 40 · A neighbor in need", nw:26000, story:"Floods hit the low village again. Kai wants to help.", opts:[
    {t:"Give through people he knows, in an amount his plan can handle, plus a Saturday of help", ok:true, fb:"Right. Generous, checked, and planned (Module 48)."},
    {t:"Send money to the first text message asking for gift cards", ok:false, fb:"Gift-card requests are a scam sign. Give through people he knows."},
    {t:"Give his whole emergency fund", ok:false, fb:"His own safety still matters. Give within his plan."}]},
  {wk:"Age 65 · Retirement", nw:96000, story:"Kai hangs up his nets for good. Paychecks stop. What will he live on?", opts:[
    {t:"The retirement account and investments he built over the years, plus any programs he paid into", ok:true, fb:"Right. Just like Tavo's buckets (Module 50), filled during the working years."},
    {t:"A new credit card", ok:false, fb:"Borrowing with no income is very risky. Retirement runs on money built up earlier."},
    {t:"Nothing. He'll just keep fishing forever", ok:false, fb:"He gets to choose to rest, because he planned for it."}]}
];
const HABITS=[
  {t:"💰 Saving a little from every paycheck, first", a:"gd", why:"Pay yourself first. It adds up for life."},
  {t:"⏰ Buying whatever the countdown timer says", a:"bd", why:"Countdowns are a rush trick. Pause instead."},
  {t:"🧾 Checking your balance every week", a:"gd", why:"Knowing your numbers prevents overdrafts and spots fraud early."},
  {t:"💳 Paying only the card minimum every month", a:"bd", why:"Costly debt hangs around and grows. Pay in full when you can."},
  {t:"🔍 Reading the fine print before you say yes", a:"gd", why:"The details hide there. Always read it."},
  {t:"😱 Selling investments every time the news is scary", a:"bd", why:"Panic locks in losses. Stick to the plan."}
];
const PLEDGES=["💰 Save a little from every paycheck","🧾 Check my balance every week","🔍 Read the fine print before saying yes","⏸️ Pause on countdowns and “sales”","💳 Pay my card in full","🛟 Keep an emergency fund","📋 Keep a one-page plan","🤲 Give in ways I can keep up"];

/* =====================================================================
   LESSON 1 — Memory Lane
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · Memory lane</div>
    <div class="recap"><strong>Kai’s story so far:</strong> Kai has a one-page financial plan. Now he wants to know if it holds up in real life.</div>
    <div class="card"><p>Before the big test, Rana walks Kai along the harbor, past every place he learned something. "Remember where it all started?"</p>
    <p>Tap all nine blocks to remember the big idea from each.</p></div>
    <button onclick="next()">Walk the island</button>`),
  ()=>{
    const open=new Set();
    function draw(){
      const all=open.size>=BLOCKS.length;
      show(`<div class="kicker">Lesson 1 · ${open.size} of ${BLOCKS.length} remembered</div>
        <div class="lane">${BLOCKS.map((b,i)=>'<button class="'+(open.has(i)?'open':'')+'" data-bot="1" data-i="'+i+'"><span class="t">'+b.e+' '+b.t+'</span>'+(open.has(i)?b.m:'Tap to remember')+'</button>').join('')}</div>
        <div id="cont">${all?'<button onclick="next()">All nine!</button>':''}</div>`);
      document.querySelectorAll(".lane button").forEach(b=>{ b.onclick=()=>{ const i=+b.dataset.i; if(!open.has(i)){ open.add(i); addXP(1); } draw(); }; });
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 1 · A new word</div>
    <div class="card"><p>"So what was it all <em>for</em>?" Kai asks.</p>
    <p>"Not to be the richest person on the island," Rana says. "It’s to feel secure today and ready for tomorrow: needs covered, a cushion for surprises, no debt you can’t handle, and choices about your future."</p>
    <p>That feeling has a name: <strong>financial well-being</strong>. It comes from habits and plans, not just from how much you earn.</p></div>
    <button onclick="earnWord('wellbeing');next()">New word: financial well-being</button>`),
  ()=>renderMC("q521a", next),
  ()=>renderMC("q521b", next),
  ()=>renderTF("q521c", next),
];

/* =====================================================================
   LESSON 2 — Kai's Whole Life (the final challenge)
===================================================================== */
const L2=[
  ()=>{ wb=0; nw=0; lStars=0;
    show(`<div class="kicker">Lesson 2 · Kai’s whole life</div>
    <div class="recap"><strong>So far:</strong> financial well-being comes from habits and plans.</div>
    ${meter()}
    <div class="card"><p>Tavo grins. "Let’s fast-forward. Eight moments, from Kai’s first job to his last day of fishing."</p>
    <p>Every good choice fills the well-being meter. Right the first time earns a ⭐.</p>
    <p class="muted">The net-worth numbers are a story, not a prediction. Real life bounces up and down.</p></div>
    <button onclick="next()">Start at age 18</button>`); },
  ()=>{
    let i=0;
    function draw(){
      if(i>=LIFE.length){ addXP(8); next(); return; }
      const w=LIFE[i];
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
            done=true; if(first){ lStars++; addXP(1); }
            wb=Math.round((i+1)/LIFE.length*100); nw=w.nw;
            document.querySelector(".meter").outerHTML=meter();
            document.querySelectorAll("#opts .opt").forEach(b=>b.disabled=true);
            document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<LIFE.length-1?"Fast-forward":"Look back")+'</button>';
            window._n=()=>{ i++; draw(); };
            revealFB();
          } else { first=false; btn.disabled=true; }
        };
      });
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 2 · Looking back</div>
    ${meter()}
    <div class="stars">${"⭐".repeat(lStars)}${"☆".repeat(LIFE.length-lStars)}</div>
    <p class="muted" style="text-align:center">${lStars} of ${LIFE.length} on the first try</p>
    <div class="card"><p>Kai didn’t win a prize or find a shortcut. He made the same kinds of choices over and over: budget first, keep a cushion, read before signing, insure the big stuff, walk away from “guaranteed,” stick to the plan, and give what he could.</p>
    <p style="text-align:center"><strong>His plan held, because his habits held.</strong></p></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q522a", next),
  ()=>renderMC("q522b", next),
];

/* =====================================================================
   LESSON 3 — Habits for Life
===================================================================== */
const L3=[
  ()=>show(`<div class="kicker">Lesson 3 · Habits for life</div>
    <div class="recap"><strong>So far:</strong> Kai’s plan held because his habits held.</div>
    <div class="card"><p>Something you do so often it becomes automatic is a <strong>habit</strong>. Good money habits work quietly in the background, for your whole life.</p>
    <p>Sort these: good habit, or bad habit?</p></div>
    <button onclick="earnWord('habit');next()">New word: habit</button>`),
  ()=>{
    let i=0;
    function draw(){
      if(i>=HABITS.length){ addXP(6); next(); return; }
      const h=HABITS[i];
      show(`<div class="kicker">Good habit or bad habit? · ${i+1} of ${HABITS.length}</div>
        <div class="item">${h.t}</div>
        <div class="sortbar"><button class="gd" id="hG">👍 Good habit</button><button class="bd" id="hB">👎 Bad habit</button></div>
        <div id="fb"></div><div id="cont"></div>`);
      let done=false;
      function pick(a){
        if(done) return;
        const ok=a===h.a;
        document.getElementById("fb").innerHTML='<div class="feedback '+(ok?'good':'bad')+'">'+(ok?'Right. '+h.why:'Think about what happens after doing it for years. Try again.')+'</div>';
        revealFB();
        if(ok){ done=true; addXP(1);
          document.getElementById("hG").disabled=true; document.getElementById("hB").disabled=true;
          document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<HABITS.length-1?"Next":"Done")+'</button>';
          window._n=()=>{ i++; draw(); }; revealFB(); }
      }
      document.getElementById("hG").onclick=()=>pick("gd");
      document.getElementById("hB").onclick=()=>pick("bd");
    }
    draw();
  },
  ()=>{
    const picked=new Set();
    function draw(){
      const ready=picked.size>=3;
      show(`<div class="kicker">Lesson 3 · Your pledge</div>
        <div class="card"><p style="margin:0">Kai picked three habits to carry for life. Now it’s your turn. Pick <strong>any three</strong>. There are no wrong answers.</p></div>
        <div class="pledge">${PLEDGES.map((p,i)=>'<button class="'+(picked.has(i)?'on':'')+'" data-bot="1" data-i="'+i+'">'+(picked.has(i)?'✅ ':'')+p+'</button>').join('')}</div>
        <p class="muted" style="text-align:center">${picked.size} of 3 picked</p>
        <div id="cont">${ready?'<button onclick="next()">Make my pledge</button>':''}</div>`);
      document.querySelectorAll(".pledge button").forEach(b=>{ b.onclick=()=>{
        const i=+b.dataset.i;
        if(picked.has(i)) picked.delete(i); else if(picked.size<3) picked.add(i);
        window._pledge=[...picked].map(k=>PLEDGES[k]); draw(); }; });
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 3 · Your pledge</div>
    <div class="final"><div class="big">🏝️ My money habits</div>
    <ul class="recaplist" style="text-align:left; margin-top:10px">${(window._pledge||PLEDGES.slice(0,3)).map(p=>'<li>'+p+'</li>').join('')}</ul></div>
    <div class="card"><p>Small habits, every week, for a lifetime. That’s how Kai’s plan held, and it’s how yours will too.</p>
    <p>One last practice question, then the final mastery check.</p></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q523a", next),
];
const META=[
  {title:"Memory Lane", sub:"Nine blocks, nine big ideas", emoji:"🐚"},
  {title:"Kai’s Whole Life", sub:"From first job to retirement", emoji:"⛵"},
  {title:"Habits for Life", sub:"Sort habits, then make your pledge", emoji:"🌱"},
];
