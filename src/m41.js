//@@META
title=Making Money Work
file=module-41-making-money-work.html
placeholder=Ask about investing and returns…
//@@CSS
  .sortbar{flex-wrap:wrap}
  .sortbar .sp{background:var(--bad)}
  .sortbar .sv{background:var(--good)}
  .sortbar .iv{background:var(--shell)}
  .week{font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:#fff; background:var(--shell); display:inline-block; border-radius:6px; padding:2px 10px; margin-bottom:8px; font-weight:700}
  .stars{font-size:28px; letter-spacing:4px; text-align:center; margin:6px 0}
  .payback{background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:12px 14px; margin-bottom:12px}
  .payback .lbl{font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:var(--ink-soft); font-weight:700; display:flex; justify-content:space-between}
  .payback .bar{height:16px; border-radius:999px; background:#eef2f0; overflow:hidden; margin-top:8px; position:relative}
  .payback .bar div{height:100%; background:var(--good); border-radius:999px; transition:width .5s ease}
  .payback .note{font-size:14px; margin-top:8px}
  .jars{display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px}
  .jar{background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:12px 14px; min-width:0}
  .jar .lbl{font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:var(--ink-soft); font-weight:700}
  .jar .amt{font-family:"Fraunces",Georgia,serif; font-size:28px; font-weight:700; margin:2px 0 4px}
  .jar .trail{font-size:13px; color:var(--ink-soft); line-height:1.5}
  .jar .up{color:var(--good); font-weight:700} .jar .dn{color:var(--bad); font-weight:700}
//@@CONTENT
/* =====================================================================
   MODULE 41 — MAKING MONEY WORK  (Investing block, 2 of 6)
   Vocab: invest, return.
   Concept over computation: small running totals only (M6/M18 skills).
   L1 shows investing as buying a better net (money that brings money
   back), then sorts spend / save / invest. L2 lets learners watch savings
   (steady, small) next to an investment (bumpy, can go down). L3 is a
   "ready to invest?" challenge: emergency fund first, debt first, money
   needed soon stays put, "guaranteed" big returns are a scam sign.
   Held back for later modules: owning part of a business (M42),
   spreading money out (M43), growth on growth over time (M44).
===================================================================== */
const VOCAB = {
  invest:{term:"invest", def:"To put money into something now because you hope it will bring you more money later. It might, and it might not. That is the risk."},
  return:{term:"return", def:"What an investment brings back to you. A good return means you got back more than you put in. A return can also be small, or even a loss."}
};

const QUESTIONS = {
  "q411a":{type:"mc", prompt:"Kai pays $20 for a bigger net so he can catch and sell more fish. Why is this investing and not just spending?", concept:"invest", opts:[
    {t:"He is using money now on something he hopes will bring more money back later", ok:true, fb:"Right. The net is a tool that can earn. That is what makes it investing."},
    {t:"Because it cost more than $10", ok:false, fb:"The price does not decide it. Investing means putting money into something you hope will bring more money back later, like a net that catches more fish."},
    {t:"Because he paid with money from his savings", ok:false, fb:"Where the money came from does not decide it. What matters is that the net can bring money back. That is investing."}]},
  "q411b":{type:"mc", prompt:"The bigger net cost $20. After six weeks, it has brought Kai $30 more than his old net would have. What is his return so far?", concept:"return", opts:[
    {t:"$10 more than he put in — a good return", ok:true, fb:"Right. $30 came back for a $20 net: all of his money back, plus $10."},
    {t:"$30, because that is what came back", ok:false, fb:"$30 came back, but $20 of it just paid for the net. The return beyond what he put in is $10."},
    {t:"Nothing yet, because the net is not free", ok:false, fb:"The net already paid for itself and then some: $30 back on $20 is $10 more than he put in."}]},
  "q411c":{type:"tf", prompt:"True or false: buying a movie ticket is investing.", answer:false, concept:"invest",
    good:"Right. A movie ticket can be a great want, but it will not bring money back. That is spending.",
    bad:"Look again. A movie ticket is fun, but it does not bring money back later. That is spending, not investing."},
  "q412a":{type:"mc", prompt:"In the game, which one went DOWN in one of the seasons?", concept:"return", opts:[
    {t:"The investment — returns can go up and down", ok:true, fb:"Right. Season 2 was bad for the net. Investments can have bad seasons, and sometimes end lower than they started."},
    {t:"The savings account", ok:false, fb:"The savings went up a little every season. The investment was the bumpy one."},
    {t:"Neither — investing only goes up", ok:false, fb:"The investment fell in season 2. Investing is never a sure thing. That is the risk."}]},
  "q412b":{type:"mc", prompt:"What is the big trade between saving and investing?", concept:"invest", opts:[
    {t:"Savings is safe with a small return; investing can bring more but can also lose", ok:true, fb:"Right. More chance to grow comes with more risk. You learned to weigh risk back in Module 35."},
    {t:"Investing is always better because it grows more", ok:false, fb:"It can grow more, but it can also lose. Savings is steadier. Each has a job."},
    {t:"Savings is always better because it never grows", ok:false, fb:"Savings does grow, with interest, just slowly and safely. Investing can grow more, with more risk. Each has a job."}]},
  "q413a":{type:"mc", prompt:"Which money is the best fit for investing?", concept:"invest", opts:[
    {t:"Money you won't need for a long time, after the emergency fund is full and debts are paid", ok:true, fb:"Right. That money can ride out a bad season, because you are not counting on it next week."},
    {t:"Your emergency fund, so it can grow bigger", ok:false, fb:"The emergency fund has to be ready on a bad day. If an investment has a bad season right then, it isn't there. Keep it in savings."},
    {t:"The money for next week's needs", ok:false, fb:"If the investment has a bad week, you can't pay for needs. Only invest money you won't need for a long time."}]},
  "q413b":{type:"mc", transfer:true, prompt:"Lena spends $15 on a class to learn to fix bikes, hoping to earn money fixing her neighbors' bikes. What is she doing?", concept:"invest", opts:[
    {t:"Investing in herself: money now that she hopes will bring money back later", ok:true, fb:"Exactly. Not a net this time, but a skill. Same idea: money now, hoping for more later, with no promise."},
    {t:"Just spending, because a class is not a thing you can hold", ok:false, fb:"A skill can earn money just like a tool can. She is investing in herself."},
    {t:"Saving, because she will use the skill later", ok:false, fb:"Saving means keeping the money. She spent it on a skill that might bring money back. That is investing."}]}
};

const CFG = {
  n:41, title:"Making Money Work", homeSub:"Four short lessons. What it means to invest, what a return is, and when you're ready.",
  pool:["q411a","q411b","q411c","q412a","q412b","q413a"], transfer:"q413b",
  quest:"You watched a net pay for itself, sorted spend, save, and invest, compared a steady savings account with a bumpy investment, and decided when money is ready to go to work.",
  failKeys:"The keys: to invest is to put money into something now, hoping it brings more back later; the return is what comes back, and it can be a loss; savings is steady and small, investing can grow more but can go down; and only invest money you won't need soon, after the emergency fund is full and debts are paid.",
  nextFile:null,
  passStory:'<p><strong>You now own:</strong> invest and return.</p>'+
    '<p>Kai’s net hangs on the dock, a little worn now, still catching more fish than the old one ever did.</p>'+
    '<p>"A net is one way to put money to work," Rana says. "But you can only use one net at a time."</p>'+
    '<p>She points at the juice stand by the harbor, then at Tavo’s boat. "What if your money could own a small piece of something much bigger than a net?"</p>'+
    '<p class="muted">Module 42 continues the Investing block. (Coming soon.)</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about investing, returns, or when money is ready to go to work. Or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 41 (Making Money Work) of a financial-literacy app, part of the Investing block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, multiply, buy, sell, pay, price, cost, earn, work, spend, need, save, goal, percent, bank, deposit, withdraw, balance, checking, savings, transaction, notification, interest, grow, fee, overdraft, PIN, scam, budget, cushion, borrow, loan, lend, owe, debt, debit card, credit card, credit score, due date, lender, minimum payment, employer, wage, paycheck, income, tax, take-home pay, sales tax, receipt, tax return, refund, risk, loss, emergency, emergency fund, insurance, premium, claim, deductible, policy, coverage, inflation, buying power. "+
  "From THIS module: invest (to put money into something now because you hope it will bring more money later; it might not) and return (what an investment brings back; it can be more than you put in, small, or a loss). "+
  "Key points: tools and skills can be investments (a better net, a class); spending on wants is not investing; savings is steady with a small return and investing can bring more but can go down, which is risk; only invest money you won't need for a long time, after the emergency fund is full and costly debts are paid; anyone promising a big 'guaranteed' return fast is a scam sign. "+
  "TEACHING STYLE: concepts over calculations. Never give return percentages or predict returns. Do not recommend any specific company, product, app, or coin. "+
  "STRICT RULES: never use these words (later modules): stock, share (as in part of a company), bond, fund (except 'emergency fund'), diversify, portfolio, compound, retirement, index, dividend. If the learner uses one, answer briefly in plain words and say it is coming later. "+
  "Story context: after learning about inflation, Kai paid $20 for a bigger net that brought an extra $5 of fish each week; after six weeks it had brought back $30, so $10 more than it cost. Rana then showed him a game: $30 in savings grew a little every season ($31, $32, $33, $34) while $30 in a net-and-boat plan went $36, then down to $33 in a bad season, then $40, then $44. Finally Kai decided when money is ready to invest: not the emergency fund, not money for next week, debts first, and never a 'guaranteed double your money' stranger. "+
  "Never repeat a failed explanation: switch examples (a bike-fixing class, a lemonade stand's cooler, a sewing machine). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple 'spend, save, or invest?' question and wait.";
//@@LESSONS
/* =====================================================================
   SIMULATORS — the net payback bar, and savings vs. investment seasons.
===================================================================== */
const NET_COST=20, NET_WEEKLY=5, NET_WEEKS=6;
function payback(w){
  const back=w*NET_WEEKLY, pct=Math.min(100, back/NET_COST*100);
  const note = w===0 ? 'The net cost $20. Nothing back yet.'
    : back<NET_COST ? '$'+back+' back so far. $'+(NET_COST-back)+' to go before the net has paid for itself.'
    : back===NET_COST ? '$20 back. The net has paid for itself!'
    : '$'+back+' back. That is all $20, plus <strong>$'+(back-NET_COST)+' more</strong>.';
  return '<div class="payback"><div class="lbl"><span>🎣 Bigger net · week '+w+'</span><span>$'+back+' back</span></div>'+
    '<div class="bar"><div style="width:'+pct+'%"></div></div><div class="note">'+note+'</div></div>';
}
const SORT=[
  {t:"🎬 A movie ticket", a:"sp", why:"Fun, but it won’t bring money back. Spending."},
  {t:"🏦 $10 into the savings account", a:"sv", why:"Kept safe, growing slowly with interest. Saving."},
  {t:"🎣 A stronger fishing rod to catch more fish to sell", a:"iv", why:"A tool that can bring money back. Investing."},
  {t:"🍬 A bag of sweets", a:"sp", why:"A treat. It won’t bring money back. Spending."},
  {t:"🧵 Sewing supplies so Mika can sell fixed-up bags", a:"iv", why:"Supplies that can earn. Investing."}
];
const LABEL={sp:"Spend", sv:"Save", iv:"Invest"};
const SEASONS=[
  {s:"Start", sav:30, inv:30, story:"Kai puts $30 in savings, and Rana’s game puts another $30 into a net-and-boat fishing plan."},
  {s:"Season 1", sav:31, inv:36, story:"Big schools of fish. The plan brings back a lot."},
  {s:"Season 2", sav:32, inv:33, story:"Stormy months. Fewer trips, and a torn net to repair. The plan goes DOWN."},
  {s:"Season 3", sav:33, inv:40, story:"Calm seas again. The plan climbs back up."},
  {s:"Season 4", sav:34, inv:44, story:"Another good season."}
];
function trail(key,k){
  return SEASONS.slice(1,k+1).map((x,i)=>{ const d=x[key]-SEASONS[i][key]; return '<span class="'+(d>=0?'up':'dn')+'">'+(d>=0?'▲ +$':'▼ −$')+Math.abs(d)+'</span>'; }).join(' ');
}
function seasonJars(k){
  const s=SEASONS[k];
  return '<div class="week">'+s.s+'</div><div class="card"><p style="margin:0">'+s.story+'</p></div>'+
    '<div class="jars"><div class="jar"><div class="lbl">🏦 Savings</div><div class="amt">$'+s.sav+'</div><div class="trail">'+trail('sav',k)+'</div></div>'+
    '<div class="jar"><div class="lbl">🎣 Invested</div><div class="amt">$'+s.inv+'</div><div class="trail">'+trail('inv',k)+'</div></div></div>';
}

/* =====================================================================
   LESSON 1 — The Better Net
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · The better net</div>
    <div class="recap"><strong>Kai’s story so far:</strong> Inflation slowly shrinks buying power. Savings keeps up better than a tin, but can still slip a little. Rana asked what his money could do if it went out to work.</div>
    <div class="card"><p>Kai’s old net catches about 10 fish a week. At the market, a bigger, stronger net costs <strong>$20</strong>.</p>
    <p>"With that net I could catch 15," Kai says. "Five more fish is $5 more every week."</p>
    <p>"Then that $20 would not just be spent," Rana says. "It would be <em>working</em> for you. Try it."</p></div>
    <button onclick="next()">Buy the net</button>`),
  ()=>{
    let w=0;
    function draw(){
      show(`<div class="kicker">Lesson 1 · Week by week</div>
        ${payback(w)}
        <div id="cont">${w<NET_WEEKS
          ? '<button data-bot="1" onclick="window._w()">🎣 Fish one more week</button>'
          : '<div class="feedback good">Six weeks: the net paid for itself and brought back $10 more.</div><button onclick="next()">Continue</button>'}</div>`);
      window._w=()=>{ w++; draw(); };
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 1 · A new word</div>
    <div class="card"><p>Kai didn’t just spend $20. He put money into something now because he hoped it would bring more money back later.</p>
    <p>That is called investing. To <strong>invest</strong>.</p></div>
    <button onclick="earnWord('invest');next()">New word: invest</button>`),
  ()=>show(`<div class="kicker">Lesson 1 · Another new word</div>
    <div class="card"><p>What an investment brings back is its <strong>return</strong>. Kai put in $20 and got back $30: all his money, plus $10.</p>
    <p>"Hope is the key word," Rana says. "A net can tear. The fish can move away. A return is never a promise."</p></div>
    <button onclick="earnWord('return');next()">New word: return</button>`),
  ()=>{
    let i=0;
    function draw(){
      if(i>=SORT.length){ addXP(5); next(); return; }
      const m=SORT[i];
      show(`<div class="kicker">Spend, save, or invest? · ${i+1} of ${SORT.length}</div>
        <div class="item">${m.t}</div>
        <div class="sortbar"><button class="sp" id="bsp">Spend</button><button class="sv" id="bsv">Save</button><button class="iv" id="biv">Invest</button></div>
        <div id="fb"></div><div id="cont"></div>`);
      let done=false;
      function pick(a){
        if(done) return;
        const ok=a===m.a;
        document.getElementById("fb").innerHTML='<div class="feedback '+(ok?'good':'bad')+'">'+(ok?'Right. ':'Not quite. ')+(ok?m.why:'Ask: will it bring money back later, or keep money safe, or is it just used up? Try again.')+'</div>';
        revealFB();
        if(ok){
          done=true; addXP(1);
          ["bsp","bsv","biv"].forEach(id=>document.getElementById(id).disabled=true);
          document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<SORT.length-1?"Next":"Done")+'</button>';
          window._n=()=>{ i++; draw(); };
          revealFB();
        }
      }
      document.getElementById("bsp").onclick=()=>pick("sp");
      document.getElementById("bsv").onclick=()=>pick("sv");
      document.getElementById("biv").onclick=()=>pick("iv");
    }
    draw();
  },
  ()=>renderMC("q411a", next),
  ()=>renderMC("q411b", next),
  ()=>renderTF("q411c", next),
];

/* =====================================================================
   LESSON 2 — Steady or Bumpy?
===================================================================== */
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · Steady or bumpy?</div>
    <div class="recap"><strong>So far:</strong> to invest is to put money to work, hoping for a return.</div>
    <div class="card"><p>"So investing always wins?" Kai asks.</p>
    <p>Rana opens her money game again. "Let’s watch four seasons. Savings on one side, an investment on the other. Same $30 each."</p></div>
    <button onclick="next()">Start the seasons</button>`),
  ()=>{
    let k=0;
    function draw(){
      const last=k>=SEASONS.length-1;
      show(`<div class="kicker">Lesson 2 · Savings vs. investing</div>
        ${seasonJars(k)}
        <div id="cont">${last
          ? '<div class="feedback good">Savings: steady, a little every season, $34. The investment: bumpy, down one season, and this time it ended at $44.</div><button onclick="next()">Continue</button>'
          : '<button data-bot="1" onclick="window._w()">⏩ Next season</button>'}</div>`);
      window._w=()=>{ k++; draw(); };
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 2 · The catch</div>
    <div class="card"><p>"This time it ended higher," Rana says. "But if the storms had lasted three seasons, it could have ended <em>below</em> $30. Nobody knows ahead of time."</p>
    <p>Savings is steady and safe, with a small return. Investing can bring a bigger return, but it can also go down.</p>
    <p style="text-align:center"><strong>A chance for more comes with more risk.</strong></p>
    <p>That is the same risk you learned to weigh in Module 35: how likely, and how big?</p></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q412a", next),
  ()=>renderMC("q412b", next),
];

/* =====================================================================
   LESSON 3 — Ready to Invest? (challenge)
===================================================================== */
const MOVES=[
  {wk:"The emergency fund", story:"Kai’s emergency fund is full. Mika says: \"Put it all into fishing gear to sell! It will grow faster.\"", opts:[
    {t:"No. The emergency fund stays in savings, ready for a bad day", ok:true, fb:"Right. If the gear doesn’t sell the week his roof leaks, the fund isn’t there. Its job is to be ready, not to grow fast."},
    {t:"Yes, a bigger fund is a better fund", ok:false, fb:"An investment can be down right when the emergency comes. The fund’s job is to be ready. Keep it in savings."},
    {t:"Put half in, just to try", ok:false, fb:"Even half could be down on the day he needs it. The emergency fund stays safe in savings."}]},
  {wk:"A stranger at the dock", story:"A stranger says: \"Give me $20 today and I GUARANTEE you get $40 back next week. No risk!\"", opts:[
    {t:"Say no. A “guaranteed” big return with no risk is a scam sign", ok:true, fb:"Right. Real investing never comes with a promise. Big return, no risk, and a rush? That is Module 23 all over again."},
    {t:"Pay, because doubling your money is a great return", ok:false, fb:"No real investment can promise that. “Guaranteed” plus a rush is a classic scam."},
    {t:"Pay $10 to test it first", ok:false, fb:"Any money to this stranger is likely gone. No real investment promises a sure, fast double."}]},
  {wk:"Money for next week", story:"Kai has $15 set aside to pay his boat fee next week. Could he invest it until then?", opts:[
    {t:"No. Money needed soon stays safe, because an investment can be down next week", ok:true, fb:"Right. Only invest money that can wait through a bad season."},
    {t:"Yes, a week is plenty of time to grow", ok:false, fb:"A week is plenty of time to go DOWN. If it drops, he can’t pay the fee. Money needed soon stays safe."},
    {t:"Yes, and borrow if it goes down", ok:false, fb:"Then a bad week turns into debt. Money needed soon stays safe."}]},
  {wk:"A card balance", story:"Kai still owes $12 on a credit card that charges him extra every month. He also has $12 extra this month.", opts:[
    {t:"Pay off the card first. Getting rid of costly debt comes before investing", ok:true, fb:"Right. The card’s cost is certain. An investment’s return is not. Clear the debt first."},
    {t:"Invest the $12 and hope it grows faster than the card’s cost", ok:false, fb:"The card’s cost is a sure thing. The return is just a hope. Pay the debt first."},
    {t:"Split it and make only the minimum payment", ok:false, fb:"Minimum payments keep the costly debt around longer (Module 29). Pay it off first."}]},
  {wk:"A goal ten years away", story:"Emergency fund full. No debts. Kai has $30 he won’t need for years, for a bigger boat someday.", opts:[
    {t:"This money is a good fit to invest, knowing it can have bad seasons", ok:true, fb:"Right. Money that can wait years can ride out a bad season. That is the money investing is for."},
    {t:"Keep it in a tin under the bed", ok:false, fb:"You saw in Module 40 how a tin loses buying power. This money can wait, so it can go to work."},
    {t:"Spend it now before prices rise", ok:false, fb:"Then there is no boat money at all. This money can wait, which makes it a good fit to invest."}]}
];
let iStars=0;
const L3=[
  ()=>{ iStars=0;
    show(`<div class="kicker">Lesson 3 · Ready to invest?</div>
    <div class="recap"><strong>So far:</strong> investing can bring a bigger return, but it can go down.</div>
    <div class="card"><p>"The real question," Rana says, "is not <em>how</em> to invest. It is <em>which money</em> is ready."</p>
    <p>Five moments. Get each right the first time to earn a ⭐.</p></div>
    <button onclick="next()">Start</button>`); },
  ()=>{
    let i=0;
    function draw(){
      if(i>=MOVES.length){ addXP(5); next(); return; }
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
    <div class="card"><p><strong>Before you invest, check:</strong></p><ul class="recaplist">
      <li>✅ Emergency fund full, and staying in savings.</li>
      <li>✅ Costly debts paid off.</li>
      <li>✅ The money can wait a long time.</li>
      <li>✅ No one is promising a “guaranteed” big return.</li>
    </ul></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q413a", next),
];
const META=[
  {title:"The Better Net", sub:"Money that brings money back", emoji:"🎣"},
  {title:"Steady or Bumpy?", sub:"Savings vs. investing over four seasons", emoji:"🎢"},
  {title:"Ready to Invest?", sub:"Which money is ready to go to work", emoji:"✅"},
];
