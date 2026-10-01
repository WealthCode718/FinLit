//@@META
title=Spreading It Out
file=module-43-spreading-it-out.html
placeholder=Ask about diversifying and investment funds…
//@@CSS
  .week{font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:#fff; background:var(--shell); display:inline-block; border-radius:6px; padding:2px 10px; margin-bottom:8px; font-weight:700}
  .stars{font-size:28px; letter-spacing:4px; text-align:center; margin:6px 0}
  .baskets{display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px}
  .bk{background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:12px; min-width:0}
  .bk .lbl{font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:var(--ink-soft); font-weight:700}
  .bk .amt{font-family:"Fraunces",Georgia,serif; font-size:28px; font-weight:700; margin:2px 0 6px}
  .bk .pcs{display:grid; grid-template-columns:1fr 1fr; gap:4px}
  .bk .pc{background:#f5f7f6; border-radius:8px; padding:4px 6px; font-size:13px; display:flex; justify-content:space-between; gap:4px}
  .bk .trail{font-size:13px; color:var(--ink-soft); margin-top:6px; line-height:1.5}
  .up{color:var(--good); font-weight:700} .dn{color:var(--bad); font-weight:700}
  .pot{background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:12px 14px; margin-bottom:12px}
  .pot .hd{font-family:"Fraunces",Georgia,serif; font-weight:700; font-size:18px; margin-bottom:6px}
  .pot .tiles{display:grid; grid-template-columns:repeat(5,1fr); gap:5px; margin:6px 0 8px}
  .pot .tiles div{aspect-ratio:1; border-radius:8px; background:#f5f7f6; display:flex; align-items:center; justify-content:center; font-size:22px}
  .pot .tiles .gone{background:#f3dcd8; filter:grayscale(1); opacity:.55}
  .pot .row{display:flex; justify-content:space-between; padding:4px 0; border-bottom:1px dashed #d9e2de; font-size:15px}
  .pair{display:flex; gap:10px; justify-content:center; align-items:center; font-size:20px; font-weight:700; margin-bottom:12px}
  .pair span{background:#fff; border:2px solid #d9e2de; border-radius:12px; padding:10px 12px; font-size:16px}
//@@CONTENT
/* =====================================================================
   MODULE 43 — SPREADING IT OUT  (Investing block, 4 of 6)
   Vocab: diversify, investment fund.
   L1: $40 all in Nalu's juice stand vs. one piece each in four different
       businesses, over four seasons. The spread basket is steadier but
       also misses the biggest win (honest trade-off). Named: diversify.
   L2: "Together or opposite?" pairs sort: diversifying means DIFFERENT
       kinds, not more of the same.
   L3: The island investment fund: 20 islanders pool $10 each to own a
       piece of 20 businesses; one closes and the pot barely moves.
       Named: investment fund (kept distinct from "emergency fund").
       Then a short "spread smart?" challenge.
   Concept over computation: small adding/subtracting only.
===================================================================== */
const VOCAB = {
  diversify:{term:"diversify", def:"To spread your money across many different kinds of investments, so one bad event can't hit all of it at once. It lowers risk. It doesn't remove it."},
  invfund:{term:"investment fund", def:"A shared pot: many people put money in, and the pot buys small pieces of many different businesses. Your money is spread out for you. (Not the same as your emergency fund!)"}
};

const QUESTIONS = {
  "q431a":{type:"mc", prompt:"What does it mean to diversify?", concept:"diversify", opts:[
    {t:"Spread your money across many different kinds of investments", ok:true, fb:"Right. Different kinds, so one bad event can't hit everything at once."},
    {t:"Put all your money into the one investment you like best", ok:false, fb:"That's the opposite: everything in one place. To diversify is to spread it across many different kinds."},
    {t:"Keep switching your money around every week", ok:false, fb:"Moving money around a lot isn't diversifying. Diversifying means owning many different kinds at the same time."}]},
  "q431b":{type:"mc", prompt:"Which of these baskets is the MOST diversified?", concept:"diversify", opts:[
    {t:"A piece each of a juice stand, an umbrella shop, a fishing boat, and a bakery", ok:true, fb:"Right. Four different kinds of business. Rain, storms, or a rival won't hit them all the same way."},
    {t:"Four pieces of four different juice stands", ok:false, fb:"Four businesses, but all the same kind. A rainy month hits every juice stand at once. That's not really spread out."},
    {t:"Four pieces of Nalu's juice stand", ok:false, fb:"That's all in one place. If Nalu's stand has trouble, everything does."}]},
  "q431c":{type:"tf", prompt:"True or false: if you diversify, you can never lose money.", answer:false, concept:"diversify",
    good:"Right. Diversifying lowers the risk that ONE bad event hurts everything. A huge event can still pull almost everything down.",
    bad:"Look again. Diversifying lowers risk, but it doesn't remove it. A huge storm over the whole island can still pull everything down."},
  "q432a":{type:"mc", prompt:"Twenty islanders each put $10 into a shared pot that buys a piece of 20 different businesses. What is that pot?", concept:"invfund", opts:[
    {t:"An investment fund", ok:true, fb:"Right. Many people, one pot, pieces of many businesses. Each person's money is spread out for them."},
    {t:"An emergency fund", ok:false, fb:"Same word, different thing. An emergency fund is YOUR money set aside in savings for bad days. This shared pot is an investment fund."},
    {t:"A loan to 20 businesses", ok:false, fb:"The pot doesn't lend. It BUYS pieces, so its members are part owners. That's an investment fund."}]},
  "q432b":{type:"mc", prompt:"The kite shop closed. Why did Kai lose much less in the investment fund than he would have by putting his $10 all in the kite shop?", concept:"invfund", opts:[
    {t:"The kite shop was only 1 of the fund's 20 businesses", ok:true, fb:"Right. One business out of 20 closing only takes a small bite. Owning the kite shop alone would have meant losing the whole $10."},
    {t:"Funds always get their money back when a business closes", ok:false, fb:"Nobody gives the money back. The fund just owned lots of other businesses, so one closing was a small part of it."},
    {t:"The fund knew the kite shop would close", ok:false, fb:"Nobody knew. The fund was simply spread across 20 businesses, so one closing hurt only a little."}]},
  "q433a":{type:"mc", prompt:"Kai says: \"My emergency fund and an investment fund are the same, so I'll move my emergency fund into the investment fund.\" What's wrong?", concept:"invfund", opts:[
    {t:"They're different. The emergency fund stays in savings, ready for bad days. An investment fund can go down", ok:true, fb:"Right. Same word, different jobs. The emergency fund must be there on a bad day, so it stays safe in savings."},
    {t:"Nothing. A bigger, spread-out fund is safer", ok:false, fb:"An investment fund can be down right when the emergency comes. The emergency fund's job is to be ready, so it stays in savings."},
    {t:"Nothing, as long as he moves only half", ok:false, fb:"Even half could be down on the day he needs it. The emergency fund stays in savings."}]},
  "q433b":{type:"mc", transfer:true, prompt:"Lena's uncle is a farmer. One year he plants only strawberries. A frost kills them all, and he has nothing to sell. What could help next year?", concept:"diversify", opts:[
    {t:"Plant several different crops, so one frost can't wipe out everything", ok:true, fb:"Exactly. Farming, not stock, but the same idea: diversify, so one bad event can't take it all."},
    {t:"Plant twice as many strawberries", ok:false, fb:"Then one frost wipes out twice as much. More of the same isn't spreading out."},
    {t:"Stop farming forever, because farming is risky", ok:false, fb:"Every kind of work has some risk. Spreading it across different crops makes it smaller."}]}
};

const CFG = {
  n:43, title:"Spreading It Out", homeSub:"Four short lessons. Why smart owners spread their money out, and how an investment fund does it for you.",
  pool:["q431a","q431b","q431c","q432a","q432b","q433a"], transfer:"q433b",
  quest:"You compared all-in-one-stand with a spread-out basket, sorted businesses that rise together from ones that balance out, and watched an investment fund barely notice a shop closing.",
  failKeys:"The keys: to diversify is to spread money across many DIFFERENT kinds of investments; it lowers risk but doesn't remove it, and it also means no single big win; an investment fund is a shared pot that owns pieces of many businesses; and it's not the same as your emergency fund, which stays in savings.",
  nextFile:null,
  passStory:'<p><strong>You now own:</strong> diversify and investment fund.</p>'+
    '<p>Kai looks at his little basket: a juice stand, an umbrella shop, a fishing boat, a bakery, and now a slice of the island fund too.</p>'+
    '<p>"Spread out, not all in one stand," he says.</p>'+
    '<p>Tavo laughs. "Now the hard part. Leave it alone and let time do the work. I’ll show you what thirty years can do."</p>'+
    '<p class="muted">Module 44 continues the Investing block. (Coming soon.)</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about diversifying, investment funds, or why not to keep everything in one stand. Or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 43 (Spreading It Out) of a financial-literacy app, part of the Investing block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, multiply, divide, split, fraction, buy, sell, pay, price, cost, earn, work, spend, need, save, goal, percent, bank, deposit, withdraw, balance, checking, savings, interest, grow, fee, scam, budget, borrow, loan, debt, credit card, wage, income, tax, risk, loss, emergency, emergency fund, insurance, inflation, buying power, invest, return, stock, profit. "+
  "From THIS module: diversify (spread money across many DIFFERENT kinds of investments so one bad event can't hit all of it; it lowers risk but does not remove it; it also means you won't get the single biggest win) and investment fund (a shared pot: many people put money in and it buys small pieces of many businesses; it usually charges a small fee to run; it is NOT the same as an emergency fund, which stays in savings for bad days). "+
  "Key points: more of the same kind (four juice stands) is not real diversifying, because the same weather hits them all; businesses that do well in opposite conditions (juice in sun, umbrellas in rain) balance each other; a very big event can pull almost everything down at once. "+
  "TEACHING STYLE: concepts over calculations. Never recommend a real company, fund, app, or coin, and never predict prices. "+
  "STRICT RULES: never use these words (later modules): compound, retirement, dividend, broker, portfolio, bond. If the learner uses one, answer briefly in plain words and say it is coming later or is a grown-up detail. "+
  "Story context: Kai had $40 to invest. All in Nalu's juice stand it went $40 → $56 (sunny) → $32 (rainy) → $20 (rival stand) → $24. Spread as one $10 piece each of the juice stand, an umbrella shop, Tavo's fishing boat, and the bakery, it went $40 → $45 → $44 → $44 → $49: steadier, though it missed the big sunny-season win. Then 20 islanders each put $10 into an island investment fund ($200) that owns a piece of 20 businesses; when the kite shop closed, the pot dropped to $190 and Kai's share went from $10 to $9.50. "+
  "Never repeat a failed explanation: switch examples (a farmer planting several crops, not carrying all your eggs in one basket, a team with players good at different things). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple 'spread out or not?' question and wait.";
//@@LESSONS
/* =====================================================================
   SIMULATORS — all-in vs. spread baskets, and the island fund pot.
===================================================================== */
const BIZ=[{e:"🥭",nm:"Juice"},{e:"☂️",nm:"Umbrellas"},{e:"🎣",nm:"Fishing"},{e:"🍞",nm:"Bakery"}];
const SEAS=[
  {s:"Start", story:"Kai has $40 ready to invest. Basket A: 4 pieces of Nalu’s juice stand. Basket B: 1 piece each of 4 different businesses.", v:[10,10,10,10]},
  {s:"A sunny season", story:"Sunshine every day. Juice sells like crazy. Nobody needs umbrellas.", v:[14,8,12,11]},
  {s:"A rainy season", story:"Rain for months. Juice barely sells. The umbrella shop can’t keep up!", v:[8,13,11,12]},
  {s:"A rival opens", story:"A cheaper juice stand opens right next to Nalu’s. The other businesses don’t notice.", v:[5,13,13,13]},
  {s:"A calm season", story:"Nice weather, steady customers. Most things go up a little.", v:[6,14,15,14]}
];
function allIn(k){ return SEAS[k].v[0]*4; }
function spread(k){ return SEAS[k].v.reduce((a,b)=>a+b,0); }
function trailOf(f,k){
  let h=''; for(let i=1;i<=k;i++){ const d=f(i)-f(i-1); h+='<span class="'+(d>=0?'up':'dn')+'">'+(d>=0?'▲ +$':'▼ −$')+Math.abs(d)+'</span> '; } return h;
}
function baskets(k){
  const s=SEAS[k];
  return '<div class="week">'+s.s+'</div><div class="card"><p style="margin:0">'+s.story+'</p></div>'+
    '<div class="baskets"><div class="bk"><div class="lbl">A · All in</div><div class="amt">$'+allIn(k)+'</div>'+
    '<div class="pcs">'+[0,1,2,3].map(()=>'<div class="pc"><span>🥭</span><span>$'+s.v[0]+'</span></div>').join('')+'</div><div class="trail">'+trailOf(allIn,k)+'</div></div>'+
    '<div class="bk"><div class="lbl">B · Spread</div><div class="amt">$'+spread(k)+'</div>'+
    '<div class="pcs">'+BIZ.map((b,i)=>'<div class="pc"><span>'+b.e+'</span><span>$'+s.v[i]+'</span></div>').join('')+'</div><div class="trail">'+trailOf(spread,k)+'</div></div></div>';
}
const PAIRS=[
  {a:"🥭 Juice stand", b:"☂️ Umbrella shop", ans:"opp", why:"Sun helps juice and hurts umbrellas; rain does the opposite. They balance each other."},
  {a:"🥭 Nalu’s juice stand", b:"🍹 Another juice stand", ans:"tog", why:"Same kind of business. A rainy month hurts both at once."},
  {a:"🎣 Tavo’s fishing boat", b:"🐟 The fish market", ans:"tog", why:"If the fish disappear, both suffer together."},
  {a:"🧥 Raincoat stall", b:"🕶️ Sunglasses stall", ans:"opp", why:"Rain helps raincoats; sun helps sunglasses. Owning both evens things out."}
];
const FUND_E=["🥭","☂️","🎣","🍞","🪁","⛵","🧵","🥥","🛶","🧺","🍦","🔧","🏠","🌴","🐚","🎨","🥾","📚","🪢","🍹"];

/* =====================================================================
   LESSON 1 — Two Baskets
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · Two baskets</div>
    <div class="recap"><strong>Kai’s story so far:</strong> Kai owns stock in Nalu’s juice stand. Owners share the profit, and the bad months too. Rana warned him not to keep everything in one stand.</div>
    <div class="card"><p>Kai has <strong>$40</strong> ready to invest. Pieces cost $10 each.</p>
    <p>"I could buy 4 more pieces of Nalu’s stand," he says. "It’s the best stand on the island."</p>
    <p>"Or," says Rana, "you could buy 1 piece each of 4 <em>different</em> businesses. Let’s play both and see what four seasons do."</p></div>
    <button onclick="next()">Start the seasons</button>`),
  ()=>{
    let k=0;
    function draw(){
      const last=k>=SEAS.length-1;
      show(`<div class="kicker">Lesson 1 · All in vs. spread</div>
        ${baskets(k)}
        <div id="cont">${last
          ? '<div class="feedback good">Basket A swung from $56 down to $20. Basket B stayed between $44 and $49. Spread out, one bad season never hit everything at once.</div><button onclick="next()">Continue</button>'
          : '<button data-bot="1" onclick="window._w()">⏩ Next season</button>'}</div>`);
      window._w=()=>{ k++; draw(); };
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 1 · A new word</div>
    <div class="card"><p>Spreading your money across many different kinds of investments, so one bad event can’t hit all of it, is called diversifying. To <strong>diversify</strong>.</p>
    <p>"But look at the sunny season," Kai says. "Basket A was way ahead!"</p>
    <p>"True," Rana says. "Spreading out means you don’t get the biggest win either. You give up the wildest highs to avoid the deepest lows."</p>
    <p style="text-align:center"><strong>Diversifying lowers risk. It doesn’t remove it.</strong></p></div>
    <button onclick="earnWord('diversify');next()">New word: diversify</button>`),
  ()=>renderMC("q431a", next),
  ()=>renderTF("q431c", next),
];

/* =====================================================================
   LESSON 2 — Together or Opposite?
===================================================================== */
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · Together or opposite?</div>
    <div class="recap"><strong>So far:</strong> to diversify is to spread money across different kinds of investments.</div>
    <div class="card"><p>"So I’ll buy pieces of four juice stands!" Kai says. "That’s four businesses."</p>
    <p>Rana shakes her head. "When it rains, what happens to <em>every</em> juice stand?"</p>
    <p>"…They all sell less," Kai says slowly.</p>
    <p>"Real spreading means owning things that don’t all rise and fall <em>together</em>. Let’s sort some pairs."</p></div>
    <button onclick="next()">Sort the pairs</button>`),
  ()=>{
    let i=0;
    function draw(){
      if(i>=PAIRS.length){ addXP(4); next(); return; }
      const p=PAIRS[i];
      show(`<div class="kicker">Together or opposite? · ${i+1} of ${PAIRS.length}</div>
        <div class="pair"><span>${p.a}</span>+<span>${p.b}</span></div>
        <p style="text-align:center">When one has a bad season, what usually happens to the other?</p>
        <div class="sortbar"><button class="chk" id="pT">🔗 Fall together</button><button class="sav" id="pO">⚖️ Balance out</button></div>
        <div id="fb"></div><div id="cont"></div>`);
      let done=false;
      function pick(a){
        if(done) return;
        const ok=a===p.ans;
        document.getElementById("fb").innerHTML='<div class="feedback '+(ok?'good':'bad')+'">'+(ok?'Right. ':'Think about the weather, or what each one needs. ')+(ok?p.why:'Try again.')+'</div>';
        revealFB();
        if(ok){
          done=true; addXP(1);
          document.getElementById("pT").disabled=true; document.getElementById("pO").disabled=true;
          document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<PAIRS.length-1?"Next":"Done")+'</button>';
          window._n=()=>{ i++; draw(); };
          revealFB();
        }
      }
      document.getElementById("pT").onclick=()=>pick("tog");
      document.getElementById("pO").onclick=()=>pick("opp");
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 2 · The rule</div>
    <div class="card"><p>Owning more of the <strong>same kind</strong> of thing isn’t really spreading out. One rainy month still hits all of it.</p>
    <p>Owning <strong>different kinds</strong> of things, some that do well when others struggle, is what makes diversifying work.</p></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q431b", next),
];

/* =====================================================================
   LESSON 3 — The Island Fund (+ challenge)
===================================================================== */
const MOVES=[
  {wk:"The big storm", story:"The biggest storm in fifty years closes almost every business on the island for a month. Kai’s spread-out basket goes down too.", opts:[
    {t:"That can happen. Diversifying makes risk smaller, not zero", ok:true, fb:"Right. A big enough event can pull almost everything down at once. Spreading out still helped: no single business could sink him alone."},
    {t:"Diversifying is useless, so he should go all in next time", ok:false, fb:"All in would have been hit just as hard, or worse. Spreading out still helps. It just can’t stop everything."},
    {t:"The fund must be a scam", ok:false, fb:"Real investments go down in a huge storm. That’s risk, not a scam. A scam is someone promising it can’t go down."}]},
  {wk:"A shiny offer", story:"A stranger: \"My Super Fund owns 1,000 businesses and is GUARANTEED never to go down! Pay cash today.\"", opts:[
    {t:"Say no. No fund can promise it never goes down, and the rush is a scam sign", ok:true, fb:"Right. Even a real fund can drop. “Guaranteed” and “cash today” are the scam signs from Module 23."},
    {t:"Pay, because 1,000 businesses is very spread out", ok:false, fb:"Spread out still can’t mean never going down. That promise is the giveaway: scam."},
    {t:"Pay a little to try it", ok:false, fb:"Any cash to this stranger is likely gone. Say no."}]},
  {wk:"Kai’s emergency fund", story:"Kai thinks: \"My emergency fund is a fund too. Let me move it into the island investment fund so it’s spread out.\"", opts:[
    {t:"No. Same word, different jobs: the emergency fund stays in savings, ready for bad days", ok:true, fb:"Right. An investment fund can be down on the very day the roof leaks. The emergency fund must be there."},
    {t:"Yes, spread out is always safer", ok:false, fb:"Spread out lowers investment risk, but it can still go down. The emergency fund needs to be ready, so it stays in savings."},
    {t:"Yes, but only during storm season", ok:false, fb:"Storm season is exactly when emergencies happen. Keep the emergency fund in savings."}]},
  {wk:"Watching the fees", story:"Two island funds own nearly the same 20 businesses. One charges a tiny fee to run it. The other charges a big fee every year.", opts:[
    {t:"Notice the fee. A big fee every year eats into whatever the fund earns", ok:true, fb:"Right. Fees come out whether the fund goes up or down. When two are nearly the same, the fee matters."},
    {t:"Pick the big-fee fund, because a higher price means better", ok:false, fb:"Not here. They own nearly the same businesses. The big fee just takes more of your return."},
    {t:"Fees don’t matter for funds", ok:false, fb:"Fees come out every year, good season or bad. They add up, just like the bank fees in Module 22."}]}
];
let iStars=0;
const L3=[
  ()=>show(`<div class="kicker">Lesson 3 · The island fund</div>
    <div class="recap"><strong>So far:</strong> diversify across different kinds of businesses.</div>
    <div class="card"><p>"But there are dozens of businesses," Kai says. "I only have $10 more. I can’t buy a piece of every one."</p>
    <p>"Nobody can alone," Rana says. "So twenty islanders put $10 each into one shared pot. The pot buys a piece of 20 different businesses."</p>
    <p>A shared pot like this, which buys pieces of many businesses, is called an <strong>investment fund</strong>.</p></div>
    <div class="pot"><div class="hd">🫙 The Island Fund</div><div class="tiles">${FUND_E.map(e=>'<div>'+e+'</div>').join('')}</div>
    <div class="row"><span>The whole pot</span><strong>$200</strong></div><div class="row"><span>Kai’s share (1 of 20)</span><strong>$10</strong></div></div>
    <button onclick="earnWord('invfund');next()">New word: investment fund</button>`),
  ()=>{
    let hit=false;
    function draw(){
      show(`<div class="kicker">Lesson 3 · One shop closes</div>
        <div class="card"><p style="margin:0">${hit?"The kite shop closes for good. Its piece is now worth nothing.":"News at the harbor: the kite shop is in trouble."}</p></div>
        <div class="pot"><div class="hd">🫙 The Island Fund</div><div class="tiles">${FUND_E.map(e=>'<div class="'+(hit&&e==="🪁"?'gone':'')+'">'+e+'</div>').join('')}</div>
        <div class="row"><span>The whole pot</span><strong>${hit?'$190':'$200'}</strong></div><div class="row"><span>Kai’s share (1 of 20)</span><strong>${hit?'$9.50':'$10'}</strong></div></div>
        <div id="cont">${hit
          ? '<div class="feedback good">Kai’s share went from $10 to $9.50. If he’d put his $10 all in the kite shop, he’d have lost all $10.</div><button onclick="next()">Continue</button>'
          : '<button data-bot="1" onclick="window._h()">See what happens</button>'}</div>`);
      window._h=()=>{ hit=true; draw(); };
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 3 · Same word, different job</div>
    <div class="card"><p>An <strong>investment fund</strong> spreads your money out for you, even when you only have a little.</p>
    <p>⚠️ Don’t mix it up with your <strong>emergency fund</strong>. That one is your own money in savings, ready for a bad day. An investment fund can go down. Running it usually costs a small fee too.</p></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q432a", next),
  ()=>renderMC("q432b", next),
  ()=>{ iStars=0;
    show(`<div class="kicker">Lesson 3 · Spread smart?</div>
    <div class="card"><p>Four last moments. Get each right the first time to earn a ⭐.</p></div>
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
      <li>✅ Spreading out lowers risk. It can’t remove it.</li>
      <li>✅ “Guaranteed never to go down” is a scam sign.</li>
      <li>✅ The emergency fund stays in savings.</li>
      <li>✅ Watch the fees.</li>
    </ul></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q433a", next),
];
const META=[
  {title:"Two Baskets", sub:"All in one stand vs. spread out", emoji:"🧺"},
  {title:"Together or Opposite?", sub:"What real spreading looks like", emoji:"⚖️"},
  {title:"The Island Fund", sub:"A shared pot that spreads it for you", emoji:"🫙"},
];
