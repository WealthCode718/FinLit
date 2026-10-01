//@@META
title=The Investing Challenge
file=module-45-investing-challenge.html
placeholder=Ask about risk tolerance and investment plans…
//@@CSS
  .week{font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:#fff; background:var(--shell); display:inline-block; border-radius:6px; padding:2px 10px; margin-bottom:8px; font-weight:700}
  .stars{font-size:28px; letter-spacing:4px; text-align:center; margin:6px 0}
  .sortbar{flex-wrap:wrap}
  .sortbar button{min-width:90px}
  .sortbar .s1{background:var(--good)} .sortbar .s2{background:var(--ink)} .sortbar .s3{background:var(--shell)}
  .who{background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:14px 16px; margin-bottom:12px}
  .who .nm{font-family:"Fraunces",Georgia,serif; font-weight:700; font-size:20px; margin-bottom:4px}
  .plan{background:#fffdf5; border:2px solid var(--sand-deep); border-radius:10px; padding:14px 16px; margin-bottom:12px; font-size:14px}
  .plan .hd{font-family:"Fraunces",Georgia,serif; font-weight:700; font-size:18px; text-align:center; margin-bottom:8px}
  .plan .row{display:flex; justify-content:space-between; gap:8px; padding:5px 0; border-bottom:1px dashed var(--sand-deep)}
  .plan .row span:last-child{font-weight:700; text-align:right}
  .plan .rule{margin-top:8px; font-size:13px; color:var(--ink-soft)}
  .meter{background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:12px 14px; margin-bottom:12px}
  .meter .lbl{font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:var(--ink-soft); font-weight:700; display:flex; justify-content:space-between}
  .meter .bar{height:14px; border-radius:999px; background:#eef2f0; overflow:hidden; margin-top:8px}
  .meter .bar div{height:100%; background:var(--good); border-radius:999px; transition:width .5s ease}
//@@CONTENT
/* =====================================================================
   MODULE 45 — THE INVESTING CHALLENGE  (Investing block finale, 6 of 6)
   Vocab: risk tolerance, investment plan.
   L1: Four islanders, four situations: mostly savings / a mix / mostly
       the investment fund. Time AND feelings matter; the best plan is
       one you can stick with. Named: risk tolerance.
   L2: Kai's plan builder: five money pots go to savings, pay it off,
       or the investment fund (M36, M29, M41 rules). Named: investment plan.
   L3: Ten-year challenge with a "plan strength" meter: all-in temptation,
       a crash year, rising prices, a "Coconut Coin" scam, a big-fee fund,
       a raise. Every rule from M40–M44 in one run.
   No real products named; outcomes are story numbers, not predictions.
===================================================================== */
const VOCAB = {
  risktol:{term:"risk tolerance", def:"How much up-and-down you can handle without panicking or needing the money. It depends on WHEN you need the money and how you FEEL when it drops."},
  invplan:{term:"investment plan", def:"Your written rules for money: what stays safe in savings, what debt gets paid off first, what gets invested for the long term, and what you'll do when it drops."}
};

const QUESTIONS = {
  "q451a":{type:"mc", prompt:"What is risk tolerance?", concept:"risktol", opts:[
    {t:"How much up-and-down you can handle without panicking or needing the money", ok:true, fb:"Right. It depends on when you need the money and how you feel when it drops."},
    {t:"How much money you are allowed to lose by law", ok:false, fb:"No law sets that. Risk tolerance is about you: when you need the money, and how you handle drops."},
    {t:"How risky a business is", ok:false, fb:"That's the business's risk. Risk tolerance is about the person: how much up-and-down they can handle."}]},
  "q451b":{type:"mc", prompt:"Mika needs her money in one year to buy a bike. What kind of plan fits her?", concept:"risktol", opts:[
    {t:"Mostly savings, because one year is too short to ride out a bad year", ok:true, fb:"Right. If the fund drops right before she needs the money, there's no time to wait for it to recover."},
    {t:"Mostly the investment fund, so it grows faster", ok:false, fb:"It might grow, or it might be down right when she needs the bike money. One year isn't long-term."},
    {t:"All in one business she likes", ok:false, fb:"That's the riskiest choice of all, for money she needs in a year. Mostly savings fits."}]},
  "q451c":{type:"tf", prompt:"True or false: the best plan is always the one with the biggest possible return.", answer:false, concept:"risktol",
    good:"Right. The best plan is one that fits when you need the money, and one you can actually stick with when it drops.",
    bad:"Look again. A plan that makes you panic and sell in a bad year can end up worse. The best plan fits your time and your nerves."},
  "q452a":{type:"mc", prompt:"Which list is the best order for Kai's investment plan?", concept:"invplan", opts:[
    {t:"Fill the emergency fund, pay off costly debt, then invest long-term money", ok:true, fb:"Right. Safety first, then the sure win of clearing debt, then let long-term money go to work."},
    {t:"Invest everything first, then build an emergency fund later", ok:false, fb:"Without an emergency fund, one bad day could force him to sell in a down year or borrow. Emergency fund first."},
    {t:"Invest first, pay the card's minimum forever", ok:false, fb:"The card's interest compounds against him for sure. Pay it off before investing."}]},
  "q452b":{type:"mc", prompt:"Why should an investment plan be written down?", concept:"invplan", opts:[
    {t:"So you can follow your calm thinking when a scary year or a shiny offer comes", ok:true, fb:"Right. You make the plan on a calm day, then follow it on the hard days."},
    {t:"Because a written plan guarantees a profit", ok:false, fb:"Nothing guarantees a profit. A written plan just keeps you from panicking or chasing scams."},
    {t:"So the bank can use it", ok:false, fb:"It's for you. It helps you stick to your own rules when things get bumpy."}]},
  "q453a":{type:"mc", prompt:"In a crash year, Kai's island fund drops from $130 to $100. His plan says this money is for 15 years from now. What does the plan tell him to do?", concept:"invplan", opts:[
    {t:"Stick to the plan. It's long-term money, and he expected bad years", ok:true, fb:"Right. He wrote this plan on a calm day for exactly this kind of year."},
    {t:"Sell everything so it can't drop more", ok:false, fb:"That locks in the drop and stops compound growth. His plan says this money can wait 15 years."},
    {t:"Move his emergency fund into the fund to buy more", ok:false, fb:"The emergency fund stays in savings, always. That's rule number one of the plan."}]},
  "q453b":{type:"mc", transfer:true, prompt:"Lena's family has two goals: a trip next summer, and helping Lena with school costs in 15 years. Their emergency fund is full and they have no debt. Which plan fits?", concept:"invplan", opts:[
    {t:"Trip money in savings; school money in a spread-out investment fund for the long term", ok:true, fb:"Exactly. Short-term goal: keep it safe. Long-term goal: let it grow, spread out, through the ups and downs."},
    {t:"Both in the investment fund, to grow faster", ok:false, fb:"The trip is next summer. That's not long-term, and the fund could be down right when they need it."},
    {t:"Both in a tin at home", ok:false, fb:"A tin loses buying power to inflation (Module 40), and 15 years in a tin is a long time to fall behind."}]}
};

const CFG = {
  n:45, title:"The Investing Challenge", homeSub:"Four short lessons. Match plans to people, write Kai's investment plan, then live ten years of it.",
  pool:["q451a","q451b","q451c","q452a","q452b","q453a"], transfer:"q453b",
  quest:"You matched plans to four islanders, wrote Kai's investment plan, and stuck to it through ten years of temptations, scams, and a crash.",
  failKeys:"The keys: risk tolerance depends on when you need the money and how you handle drops; an investment plan puts the emergency fund first, pays off costly debt, and invests only long-term money, spread out; and you follow the plan on the hard days, not your panic.",
  badge:" · Investing block complete 📈",
  nextFile:null,
  passStory:'<p><strong>You now own:</strong> risk tolerance and investment plan, and the whole Investing block.</p>'+
    '<p>Kai folds his plan and puts it in the dry drawer, right next to his insurance policy.</p>'+
    '<p>"Savings for safety. Insurance for big losses. Investing for the long term," Rana says. "You can protect money and grow it now."</p>'+
    '<p>On the way home, a huge painted sign at the market catches Kai’s eye: <em>BEST SNACK EVER! EVERYONE LOVES IT! ONLY TODAY!</em></p>'+
    '<p>Rana raises an eyebrow. "Next, let’s talk about the people who want your money."</p>'+
    '<p class="muted">Module 46 begins a new block. (Coming soon.)</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about risk tolerance, building an investment plan, or sticking to it. Or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 45 (The Investing Challenge) of a financial-literacy app, the finale of the Investing block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, multiply, divide, fraction, buy, sell, pay, price, cost, earn, spend, need, save, goal, percent, bank, deposit, withdraw, balance, savings, interest, grow, fee, scam, budget, borrow, loan, owe, debt, credit card, minimum payment, wage, income, tax, risk, loss, emergency, emergency fund, insurance, policy, inflation, buying power, invest, return, stock, profit, diversify, investment fund, compound growth, long-term. "+
  "From THIS module: risk tolerance (how much up-and-down you can handle without panicking or needing the money; it depends on WHEN you need the money and how you FEEL when it drops) and investment plan (your written rules: emergency fund stays in savings, costly debt paid off first, only long-term money invested, spread out, low fees, and what you will do in a bad year). "+
  "Key points: money needed soon fits mostly savings; long-term money can be mostly in a spread-out investment fund; a mix suits partly-soon goals or nervous investors; the best plan is one you can stick with; write the plan on a calm day and follow it on hard days; 'guaranteed' or 'today only' offers are scams; adding a little regularly helps. "+
  "TEACHING STYLE: concepts over calculations. Never give a growth rate, never predict returns, never recommend a real fund, company, app, or coin, and do not give personal advice about anyone's real money; speak about the story and general ideas. "+
  "STRICT RULES: never use these words (later modules): retirement, dividend, broker, portfolio, bond, advertising. If the learner uses one, answer briefly in plain words and say it is coming later or is a grown-up detail. "+
  "Story context: Kai matched plans to four islanders (Mika: bike in one year → mostly savings; Kai: boat in 20 years → mostly the fund; Tavo: new boat in 3 years plus long-term money → a mix; Nalu: 20 years but panics at drops → a steadier mix she can stick with). Then he wrote his plan: emergency fund $60 in savings, $20 card balance paid off, $30 ferry trip next month in savings, $100 boat money and $40 extra into the island investment fund. Then he lived ten years: stayed spread out instead of going all in on Nalu's stand, stuck to the plan when the fund dropped from $130 to $100, topped up his emergency fund when prices rose, refused 'Coconut Coin' that promised to triple, chose a low-fee fund, and added part of a raise to his plan. In the story his invested money ended around $300. "+
  "Never repeat a failed explanation: switch examples (a farmer planning crops for a season vs. an orchard for decades, a hiker packing for a day vs. a month). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple 'savings or investment fund?' question and wait.";
//@@LESSONS
/* =====================================================================
   SIMULATORS — people-to-plan sort, Kai's plan builder, and the
   ten-year challenge with a plan-strength meter.
===================================================================== */
const PEOPLE=[
  {e:"👧", nm:"Mika", t:"Saving $80 for a bike she wants to buy next year.", a:"s1", why:"One year is too short to ride out a bad year. Mostly savings."},
  {e:"🧒", nm:"Kai", t:"Saving for a bigger boat in 20 years. When his fund drops, he shrugs and waits.", a:"s3", why:"Long-term money and steady nerves: mostly a spread-out investment fund."},
  {e:"👴", nm:"Tavo", t:"Needs part of his money for a new motor in 3 years. The rest is for the long term.", a:"s2", why:"Part soon, part long-term: a mix. Soon money stays safe; long-term money can grow."},
  {e:"👩", nm:"Nalu", t:"Won't need the money for 20 years, but when it drops, she can't sleep and wants to sell everything.", a:"s2", why:"Her time says invest, but her nerves say steadier. A mix she can stick with beats a plan she'll panic out of."}
];
const PLABEL={s1:"Mostly savings", s2:"A mix", s3:"Mostly fund"};
const POTS=[
  {t:"🛟 Emergency fund · $60", a:"sav", why:"Always ready for a bad day. Stays in savings."},
  {t:"💳 Credit card balance · $20", a:"pay", why:"Costly debt compounds against you. Pay it off first."},
  {t:"⛴️ Ferry trip next month · $30", a:"sav", why:"Needed soon, so not long-term. Savings."},
  {t:"⛵ Bigger boat in 20 years · $100", a:"inv", why:"Long-term. Spread out in the investment fund."},
  {t:"🌱 Extra money, no plans for 15+ years · $40", a:"inv", why:"Long-term money is exactly what investing is for."}
];
const PLAB={sav:"🏦 Savings", pay:"✂️ Pay it off", inv:"🫙 Investment fund"};
function planCard(n){
  return '<div class="plan"><div class="hd">Kai’s Investment Plan</div>'+
    POTS.slice(0,n).map(p=>'<div class="row"><span>'+p.t+'</span><span>'+PLAB[p.a]+'</span></div>').join('')+
    (n>=POTS.length?'<div class="rule">If the fund drops: stick to the plan. If someone says “guaranteed”: walk away.</div>':'')+'</div>';
}
let strength=0, cStars=0;
function meter(){ return '<div class="meter"><div class="lbl"><span>📋 Plan strength</span><span>'+strength+'%</span></div><div class="bar"><div style="width:'+strength+'%"></div></div></div>'; }
const YEARS=[
  {wk:"Year 1", story:"The fund is up nicely. Mika says: \"Nalu’s stand did amazing this year. Sell your fund and put it ALL in Nalu’s stand!\"", opts:[
    {t:"Stay spread out, as the plan says", ok:true, fb:"Right. One great year doesn’t make one stand safe. Diversify (Module 43)."},
    {t:"Go all in on Nalu’s stand", ok:false, fb:"Everything in one stand means one storm hits all of it. The plan says spread out."},
    {t:"Sell everything and keep it in a tin", ok:false, fb:"A tin loses buying power (Module 40), and this is long-term money. Stick to the plan."}]},
  {wk:"Year 3", story:"A crash year hits the whole island. Kai’s fund drops from $130 to $100. Neighbors are selling in a panic.", opts:[
    {t:"Stick to the plan. This money is for 17 more years", ok:true, fb:"Right. He wrote the plan on a calm day for exactly this kind of year."},
    {t:"Sell it all before it drops further", ok:false, fb:"That locks in the drop and stops the compound growth. The plan says long-term money waits."},
    {t:"Move the emergency fund in to buy more", ok:false, fb:"The emergency fund stays in savings, no matter what. Rule number one."}]},
  {wk:"Year 5", story:"Prices on the island have crept up. A repair that cost $50 now costs $60. Kai’s emergency fund is still $60.", opts:[
    {t:"Top up the emergency fund so it still covers a real emergency", ok:true, fb:"Right. Inflation shrinks buying power, so the safety pot needs to grow with prices too."},
    {t:"Move the emergency fund into the investment fund to beat inflation", ok:false, fb:"The emergency fund must be ready on any day. Keep it in savings and top it up instead."},
    {t:"Do nothing, because $60 is $60", ok:false, fb:"$60 buys less than it used to (Module 40). Top it up so it still covers a real emergency."}]},
  {wk:"Year 6", story:"A smooth talker at the dock: \"Coconut Coin! It TRIPLES every year, guaranteed! Everyone’s getting rich. Buy before tonight!\"", opts:[
    {t:"Walk away. “Guaranteed,” “everyone,” and “before tonight” are scam signs", ok:true, fb:"Right. No real investment triples on a promise. The plan says: guaranteed means walk away."},
    {t:"Put the ferry money in, just this once", ok:false, fb:"That’s money needed soon, sent to a likely scam. Walk away."},
    {t:"Put in half his fund", ok:false, fb:"Nothing real is guaranteed to triple. This is a scam. Walk away."}]},
  {wk:"Year 8", story:"Two island funds own nearly the same businesses. Kai’s current one charges a big fee every year. The other charges a tiny one.", opts:[
    {t:"Notice the fee. When two are nearly the same, the lower fee leaves more to grow", ok:true, fb:"Right. Fees come out every year, good or bad, and they also stop that money from compounding."},
    {t:"Keep the big fee, since higher price means better", ok:false, fb:"Not when they own nearly the same businesses. The big fee just takes more of the growth."},
    {t:"Fees don’t matter over ten years", ok:false, fb:"Over many years, fees matter even more, because the money they take can’t compound."}]},
  {wk:"Year 10", story:"Kai gets a raise at work: $10 more each month.", opts:[
    {t:"Enjoy some of it, and add some to the plan every month", ok:true, fb:"Right. A little added regularly gives compound growth more to work with, and he still gets to enjoy his raise."},
    {t:"Spend all of it every month", ok:false, fb:"It’s his choice, but adding even a little to long-term money is how plans grow."},
    {t:"Put all of it into the emergency fund forever", ok:false, fb:"The emergency fund only needs to be big enough. Once it is, extra long-term money can go to work."}]}
];

/* =====================================================================
   LESSON 1 — A Plan for Every Person
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · A plan for every person</div>
    <div class="recap"><strong>The Investing block so far:</strong> inflation shrinks buying power; investing puts money to work; stock is owning a piece; diversify; compound growth needs long-term money.</div>
    <div class="card"><p>Word has spread: Kai knows about investing. Four islanders ask Rana the same question: "Should my money be in savings or the investment fund?"</p>
    <p>"It depends on the person," Rana says. "Two things matter. <strong>When</strong> do you need the money? And <strong>how do you feel</strong> when it drops?"</p></div>
    <button onclick="next()">Meet them</button>`),
  ()=>{
    let i=0;
    function draw(){
      if(i>=PEOPLE.length){ addXP(4); next(); return; }
      const p=PEOPLE[i];
      show(`<div class="kicker">Which plan fits? · ${i+1} of ${PEOPLE.length}</div>
        <div class="who"><div class="nm">${p.e} ${p.nm}</div><p style="margin:0">${p.t}</p></div>
        <div class="sortbar"><button class="s1" id="b1">Mostly savings</button><button class="s2" id="b2">A mix</button><button class="s3" id="b3">Mostly fund</button></div>
        <div id="fb"></div><div id="cont"></div>`);
      let done=false;
      function pick(a){
        if(done) return;
        const ok=a===p.a;
        document.getElementById("fb").innerHTML='<div class="feedback '+(ok?'good':'bad')+'">'+(ok?'Right. '+p.why:'Think about two things: when they need the money, and how they handle drops. Try again.')+'</div>';
        revealFB();
        if(ok){
          done=true; addXP(1);
          ["b1","b2","b3"].forEach(id=>document.getElementById(id).disabled=true);
          document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<PEOPLE.length-1?"Next":"Done")+'</button>';
          window._n=()=>{ i++; draw(); };
          revealFB();
        }
      }
      document.getElementById("b1").onclick=()=>pick("s1");
      document.getElementById("b2").onclick=()=>pick("s2");
      document.getElementById("b3").onclick=()=>pick("s3");
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 1 · A new word</div>
    <div class="card"><p>How much up-and-down someone can handle, without panicking or needing the money, is their <strong>risk tolerance</strong>.</p>
    <p>Nalu taught Kai something important: the plan with the biggest possible return isn’t always the best. <strong>The best plan is one you can stick with.</strong></p></div>
    <button onclick="earnWord('risktol');next()">New word: risk tolerance</button>`),
  ()=>renderMC("q451a", next),
  ()=>renderMC("q451b", next),
  ()=>renderTF("q451c", next),
];

/* =====================================================================
   LESSON 2 — Kai Writes His Plan
===================================================================== */
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · Kai writes his plan</div>
    <div class="recap"><strong>So far:</strong> risk tolerance depends on when you need the money and how you handle drops.</div>
    <div class="card"><p>"Now you," Rana says, handing Kai a pencil. "Remember your insurance policy? Real plans get written down. Write your money plan on a calm day, so you can follow it on a scary one."</p>
    <p>Kai has five pots of money. For each one, choose where it goes.</p></div>
    <button onclick="next()">Start writing</button>`),
  ()=>{
    let i=0;
    function draw(){
      if(i>=POTS.length){ addXP(5); next(); return; }
      const p=POTS[i];
      show(`<div class="kicker">Kai’s plan · ${i+1} of ${POTS.length}</div>
        ${planCard(i)}
        <div class="item">${p.t}</div>
        <div class="sortbar"><button class="s1" id="ps">🏦 Savings</button><button class="s2" id="pp">✂️ Pay it off</button><button class="s3" id="pi">🫙 Fund</button></div>
        <div id="fb"></div><div id="cont"></div>`);
      let done=false;
      function pick(a){
        if(done) return;
        const ok=a===p.a;
        document.getElementById("fb").innerHTML='<div class="feedback '+(ok?'good':'bad')+'">'+(ok?'Right. '+p.why:'Ask: is it for emergencies, is it debt, is it needed soon, or is it long-term? Try again.')+'</div>';
        revealFB();
        if(ok){
          done=true; addXP(1);
          ["ps","pp","pi"].forEach(id=>document.getElementById(id).disabled=true);
          document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<POTS.length-1?"Next":"See the plan")+'</button>';
          window._n=()=>{ i++; draw(); };
          revealFB();
        }
      }
      document.getElementById("ps").onclick=()=>pick("sav");
      document.getElementById("pp").onclick=()=>pick("pay");
      document.getElementById("pi").onclick=()=>pick("inv");
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 2 · Another new word</div>
    ${planCard(POTS.length)}
    <div class="card"><p>Written rules for your money, covering what stays safe, what debt goes first, what gets invested for the long term, and what you’ll do when it drops, make an <strong>investment plan</strong>.</p></div>
    <button onclick="earnWord('invplan');next()">New word: investment plan</button>`),
  ()=>renderMC("q452a", next),
  ()=>renderMC("q452b", next),
];

/* =====================================================================
   LESSON 3 — Ten Years (challenge)
===================================================================== */
const L3=[
  ()=>{ strength=0; cStars=0;
    show(`<div class="kicker">Lesson 3 · Ten years</div>
    <div class="recap"><strong>So far:</strong> Kai wrote his plan.</div>
    ${meter()}
    <div class="card"><p>Writing a plan is the easy part. Now Kai has to <em>live</em> it. Six moments over ten years will test him.</p>
    <p>Each right choice makes the plan stronger. Right the first time earns a ⭐.</p></div>
    <button onclick="next()">Start year 1</button>`); },
  ()=>{
    let i=0;
    function draw(){
      if(i>=YEARS.length){ addXP(6); next(); return; }
      const w=YEARS[i];
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
            done=true; if(first){ cStars++; addXP(1); }
            strength=Math.round((i+1)/YEARS.length*100);
            document.querySelector(".meter").outerHTML=meter();
            document.querySelectorAll("#opts .opt").forEach(b=>b.disabled=true);
            document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<YEARS.length-1?"Next":"Ten years later")+'</button>';
            window._n=()=>{ i++; draw(); };
            revealFB();
          } else { first=false; btn.disabled=true; }
        };
      });
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 3 · Ten years later</div>
    ${meter()}
    <div class="stars">${"⭐".repeat(cStars)}${"☆".repeat(YEARS.length-cStars)}</div>
    <p class="muted" style="text-align:center">${cStars} of ${YEARS.length} on the first try</p>
    <div class="card"><p>In this story, Kai’s invested money went through a crash, a scam, and a big-fee fund, and still ended around <strong>$300</strong>. Real investing promises nothing. But Kai gave his money the best chance:</p>
    <ul class="recaplist">
      <li>✅ <strong>Spread out</strong>, never all in one stand.</li>
      <li>✅ <strong>Stuck to the plan</strong> in the crash year.</li>
      <li>✅ <strong>Topped up</strong> the emergency fund as prices rose.</li>
      <li>✅ <strong>Walked away</strong> from “guaranteed.”</li>
      <li>✅ <strong>Watched the fees.</strong></li>
      <li>✅ <strong>Kept adding</strong> a little.</li>
    </ul></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q453a", next),
];
const META=[
  {title:"A Plan for Every Person", sub:"Four islanders, four kinds of plan", emoji:"🧭"},
  {title:"Kai Writes His Plan", sub:"Five pots of money, one written plan", emoji:"📝"},
  {title:"Ten Years", sub:"Live the plan through six big moments", emoji:"🏁"},
];
