//@@META
title=Ads & Real Value
file=module-46-ads-and-real-value.html
placeholder=Ask about advertising and real value…
//@@CSS
  .week{font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:#fff; background:var(--shell); display:inline-block; border-radius:6px; padding:2px 10px; margin-bottom:8px; font-weight:700}
  .poster{background:#fff3c4; border:3px solid #e0a526; border-radius:14px; padding:16px; margin-bottom:12px; text-align:center}
  .poster .big{font-family:"Fraunces",Georgia,serif; font-size:24px; font-weight:800; color:#b4321d; line-height:1.15}
  .poster .tk{display:inline-block; margin:5px 3px; padding:6px 10px; border-radius:10px; border:2px dashed #c58a12; background:#fffaf0; color:#8a3a12; cursor:pointer; font-weight:800; font-size:15px; min-height:44px}
  .poster .tk.found{background:#e8f3ee; border:2px solid var(--good); color:var(--good)}
  .poster .tiny .tk{font-size:11px; font-weight:600; color:#7a6a4a}
  .tally{text-align:center; font-weight:700; margin-bottom:8px}
  .phone{background:#1b2b33; color:#fff; border-radius:18px; padding:14px; margin-bottom:12px}
  .phone .pop{background:#ff5c8a; border-radius:12px; padding:12px; text-align:center}
  .phone .pop .h{font-size:20px; font-weight:800}
  .phone .pop .t{font-size:13px; opacity:.9}
  .vs{display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px}
  .vs button{background:#fff; color:var(--ink); border:2px solid #d9e2de; border-radius:14px; padding:12px 10px; text-align:left; font-size:14px; line-height:1.35; min-height:44px}
  .vs button .e{font-size:28px; display:block}
  .vs button .p{font-family:"Fraunces",Georgia,serif; font-size:22px; font-weight:700; display:block; margin:2px 0}
  .vs button.right{border-color:var(--good); background:#e8f3ee}
  .vs button.wrong{border-color:var(--bad); background:#f8e6e3}
  .sortbar .fa{background:var(--good)} .sortbar .fe{background:var(--shell)}
//@@CONTENT
/* =====================================================================
   MODULE 46 — ADS & REAL VALUE  (Money World block, 1 of 4)
   Vocab: advertising, value.
   L1: Spot five tricks on the Sparkle Snack poster (opinion as fact,
       crowd pressure, rush, paid famous person, tiny print). Named:
       advertising. Ads aren't evil; some lines are useful facts.
   L2: Fact or feeling? sort, then a pop-up "gem sale" in Kai's phone
       game (online ads, sponsored videos, in-game offers).
   L3: Pick the better value in three pairs; cheap isn't always better
       value, and a "sale" on something you don't need isn't value.
       Named: value.
   PISA link: financial landscape, consumer awareness.
===================================================================== */
const VOCAB = {
  advertising:{term:"advertising", def:"Messages that sellers pay for to make you want to buy their things: signs, videos, pop-ups, songs, even famous people. Some parts are useful facts. Some parts are tricks to make you feel rushed or left out."},
  value:{term:"value", def:"What you really get for what you pay: how good it is, how long it lasts, and how much you'll actually use it. A low price is not the same as good value."}
};

const QUESTIONS = {
  "q461a":{type:"mc", prompt:"What is advertising?", concept:"advertising", opts:[
    {t:"Messages sellers pay for to make you want to buy their things", ok:true, fb:"Right. Signs, videos, pop-ups, and paid famous people are all advertising."},
    {t:"Fair reviews written by regular buyers who tested the product themselves", ok:false, fb:"A fair review isn't paid for by the seller. Advertising is the seller's own message, made to get you to buy."},
    {t:"Rules that say what stores are allowed to sell", ok:false, fb:"That's not it. Advertising is messages sellers pay for, to make you want their things."}]},
  "q461b":{type:"mc", prompt:"An ad shouts “ONLY TODAY! HURRY!” What is that trick trying to do?", concept:"advertising", opts:[
    {t:"Rush you so you buy before you stop and think", ok:true, fb:"Right. Scammers use the same trick (Module 23). A good deal usually survives one night of thinking."},
    {t:"Help you plan your budget", ok:false, fb:"It does the opposite. The rush is there so you skip the planning."},
    {t:"Tell you a useful fact: the price really will go up tomorrow", ok:false, fb:"“Hurry” tells you nothing about the product. It's pressure, not information."}]},
  "q461c":{type:"tf", prompt:"True or false: if a famous person is in an ad for a product, the product must be good.", answer:false, concept:"advertising",
    good:"Right. Famous people are often paid to be in ads. Being in an ad isn't proof that something is good.",
    bad:"Look again. Famous people are often PAID to be in ads. That's not proof the product is good."},
  "q462a":{type:"mc", prompt:"Which line from an ad is a useful FACT, not a feeling-pusher?", concept:"advertising", opts:[
    {t:"“$2 a cup. Made with mango and lime. Open 8 to 5 at the harbor.”", ok:true, fb:"Right. Price, what's in it, where and when. You can check all of that."},
    {t:"“The most amazing drink you'll ever taste!”", ok:false, fb:"That's an opinion dressed up as a fact. You can't check “most amazing.”"},
    {t:"“Everyone cool is drinking it!”", ok:false, fb:"That's crowd pressure, trying to make you feel left out. It tells you nothing about the drink."}]},
  "q462b":{type:"mc", prompt:"A pop-up in Kai's game: “GEM PACK 80% OFF! 2 hours left!” What's the smartest first move?", concept:"advertising", opts:[
    {t:"Pause and check: do I need it, and does it fit my budget?", ok:true, fb:"Right. A countdown timer is a rush trick. Your budget doesn't change just because a clock is ticking."},
    {t:"Buy fast before the timer ends", ok:false, fb:"The timer is there so you don't think. 80% off something you don't need is still money spent."},
    {t:"Buy two, because at 80% off, the more he buys, the more he saves", ok:false, fb:"A discount on something you didn't plan to buy isn't saving money. It's spending money."}]},
  "q463a":{type:"mc", prompt:"Sandals A cost $4 and break after about 2 months. Sandals B cost $10 and last a whole year. Which is better value for a year of walking?", concept:"value", opts:[
    {t:"Sandals B. Kai would need about 6 pairs of A in a year, which is $24", ok:true, fb:"Right. The cheaper price wasn't the better value. B costs $10 for the whole year."},
    {t:"Sandals A, because $4 is less than $10", ok:false, fb:"Per pair, yes. But A breaks every 2 months: 6 pairs × $4 = $24 for the year, more than B's $10."},
    {t:"They are the same value", ok:false, fb:"Count the pairs: about 6 of A in a year is $24. One pair of B is $10."}]},
  "q463b":{type:"mc", transfer:true, prompt:"Lena sees a video of a popular gamer holding a $40 headset: “Use my code for 10% off, today only!” The video has a tiny “sponsored” label. What's true?", concept:"advertising", opts:[
    {t:"It's an ad: the gamer is paid, and “today only” is a rush", ok:true, fb:"Exactly. Different place, same tricks: a paid famous person and a rush. “Sponsored” means advertising."},
    {t:"It's an honest review, because the gamer really uses the headset every day", ok:false, fb:"“Sponsored” means the seller paid for it. That makes it advertising, not a fair review."},
    {t:"10% off means she's saving money, so she should buy it now", ok:false, fb:"She only saves if she needed a headset anyway and it's good value. Compare first. The rush is a trick."}]}
};

const CFG = {
  n:46, title:"Ads & Real Value", homeSub:"Four short lessons. Spot the tricks in advertising, and learn to judge real value.",
  pool:["q461a","q461b","q461c","q462a","q462b","q463a"], transfer:"q463b",
  quest:"You spotted five tricks on a snack poster, sorted facts from feeling-pushers, handled a pop-up sale, and picked real value over a low price.",
  failKeys:"The keys: advertising is paid messages to make you want to buy; watch for rush, crowd pressure, paid famous people, opinions dressed as facts, and tiny print; facts you can check are useful; and value is what you really get for the price: quality, how long it lasts, and how much you'll use it.",
  nextFile:"module-47-contracts-and-your-rights.html",
  passStory:'<p><strong>You now own:</strong> advertising and value.</p>'+
    '<p>Kai walks past the Sparkle Snack poster again. This time he reads the tiny print, smiles, and keeps walking.</p>'+
    '<p>At Nalu’s stand, a man is waving a long paper. "Sign here and your stand gets a fancy new blender every year!"</p>'+
    '<p>Nalu frowns at the paper. "Kai, help me read this before I sign anything."</p>'+
    '<p class="muted">Module 47: Contracts & Your Rights.</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about advertising tricks, sponsored videos, or how to judge real value. Or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 46 (Ads & Real Value) of a financial-literacy app, the first module of the Money World block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, multiply, divide, percent, discount, price, cost, buy, sell, pay, spend, need, save, goal, budget, bank, savings, interest, fee, scam, borrow, debt, credit card, wage, income, tax, sales tax, receipt, refund, risk, emergency fund, insurance, policy, inflation, invest, return, stock, profit, diversify, investment fund, compound growth, long-term, risk tolerance, investment plan. "+
  "From THIS module: advertising (messages sellers pay for to make you want to buy: signs, videos, pop-ups, songs, famous people, 'sponsored' posts; some parts are useful checkable facts like price, ingredients, and hours; other parts are tricks) and value (what you really get for what you pay: quality, how long it lasts, how much you'll use it; a low price is not the same as good value). "+
  "Tricks to name: opinion dressed as fact ('best ever'), crowd pressure ('everyone loves it'), rush ('only today', countdown timers), paid famous people or creators, tiny print hiding the real price or conditions, and 'sale' prices on things you don't need. Advertising isn't evil; it can tell you real facts, so the skill is separating facts from feelings. "+
  "TEACHING STYLE: concepts over calculations; small multiplication is fine for value comparisons. Never name or criticize real brands, companies, games, or creators. "+
  "STRICT RULES: never use these words (later modules): contract, terms and conditions, donate, charity, retirement. If the learner uses one, answer briefly in plain words and say it is coming later. "+
  "Story context: a new cart's poster shouted 'SPARKLE SNACK! BEST SNACK EVER! EVERYONE LOVES IT! ONLY TODAY! Surf champ Leilani eats it every day!' with tiny print saying the $1 price was for the first bite-size bag only and full bags cost $3. Kai spotted the tricks, sorted fact lines from feeling lines, paused on a pop-up 'GEM PACK 80% OFF, 2 hours left' in his phone game, and compared value: $4 sandals that break every 2 months (about 6 pairs, $24 a year) vs. $10 sandals that last a year. "+
  "Never repeat a failed explanation: switch examples (a cereal box with a cartoon, a toy commercial, a 'limited edition' sticker). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple 'fact or feeling?' question and wait.";
//@@LESSONS
/* =====================================================================
   INTERACTIVES — tappable poster tricks, fact/feeling sort, phone
   pop-up, and value pairs.
===================================================================== */
const TRICKS=[
  {id:"t1", t:"BEST SNACK EVER!", why:"An opinion dressed up as a fact. Who decided it's the best? You can't check that."},
  {id:"t2", t:"EVERYONE LOVES IT!", why:"Crowd pressure. It wants you to feel left out if you don't buy. And it can't be true: not everyone has even tried it."},
  {id:"t3", t:"ONLY TODAY!", why:"A rush. If you hurry, you don't stop to think. Scammers use this exact trick (Module 23)."},
  {id:"t4", t:"Surf champ Leilani eats it every day!", why:"A famous person, very likely paid to say this. Being in an ad isn't proof something is good."},
  {id:"t5", t:"*$1 for first bite-size bag only. Full bags $3.", why:"Tiny print. The big $1 isn't the real price of a normal bag. Always read the small words."}
];
function poster(found){
  const tk=id=>{ const x=TRICKS.find(t=>t.id===id); return '<button class="tk'+(found.has(id)?' found':'')+'" data-bot="1" data-id="'+id+'">'+x.t+'</button>'; };
  return '<div class="poster"><div class="big">✨ SPARKLE SNACK ✨</div>'+
    '<div>'+tk("t1")+tk("t2")+'</div><div class="big" style="font-size:34px">ONLY $1*</div>'+
    '<div>'+tk("t3")+'</div><div>🏄 '+tk("t4")+'</div><div class="tiny">'+tk("t5")+'</div></div>';
}
const LINES=[
  {t:"“$2 a cup, at the harbor, 8 to 5.”", a:"fa", why:"Price, place, hours. You can check all of it."},
  {t:"“You deserve the BEST. You deserve Sparkle.”", a:"fe", why:"Flattery to make you feel something. No information."},
  {t:"“Made with mango, lime, and ice.”", a:"fa", why:"What's in it. That's useful to know."},
  {t:"“Don't be the only one who hasn't tried it!”", a:"fe", why:"Crowd pressure. It's trying to make you feel left out."},
  {t:"“Big bag: 20 pieces.”", a:"fa", why:"A number you can count. That helps you compare value."}
];
const PAIRS=[
  {q:"A year of walking to the dock. Which is better value?", a:{e:"🩴",p:"$4",d:"Shiny sandals. Break after about 2 months."}, b:{e:"👡",p:"$10",d:"Plain sandals. Last a whole year."}, ans:"b",
    why:"About 6 pairs of the $4 ones in a year = $24. The $10 pair does the whole year. The cheaper price was the worse value."},
  {q:"Kai wants something to help him fish. Which is better value?", a:{e:"💎",p:"$5",d:"Game gems, 80% off! He'd use them once."}, b:{e:"🪝",p:"$5",d:"A set of strong hooks. He'd use them every day for a year."}, ans:"b",
    why:"Same price, very different value. Something you'll use every day for a year beats something you'll use once, even “80% off.”"},
  {q:"Kai needs a new rope for his boat. Which is better value?", a:{e:"🪢",p:"$4",d:"Good rope, regular price. Exactly what he needs."}, b:{e:"🎒",p:"$12",d:"A fancy bag. “SALE! Was $20!” He doesn't need a bag."}, ans:"a",
    why:"A “sale” on something you don't need isn't saving $8. It's spending $12. The rope is what he needs."}
];

/* =====================================================================
   LESSON 1 — The Big Sign
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · The big sign</div>
    <div class="recap"><strong>Kai’s story so far:</strong> Kai can earn, save, borrow wisely, protect, and invest money. Now there are people who want his money: sellers.</div>
    <div class="card"><p>A bright new cart rolls into the market with a giant poster. Kids crowd around it. Kai feels a pull to buy one right now.</p>
    <p>Rana stops beside him. "That poster was made by people who are very good at their job. Let’s see how many tricks you can find."</p></div>
    <button onclick="next()">Look at the poster</button>`),
  ()=>{
    const found=new Set(); let last=null;
    function draw(){
      const all=found.size>=TRICKS.length;
      show(`<div class="kicker">Lesson 1 · Spot the tricks</div>
        <p class="tally">Tap each trick on the poster · ${found.size} of ${TRICKS.length} found</p>
        ${poster(found)}
        <div id="fb">${last?'<div class="feedback good">'+last.why+'</div>':''}</div>
        <div id="cont">${all?'<button onclick="next()">All five found!</button>':''}</div>`);
      document.querySelectorAll(".poster .tk").forEach(b=>{ b.onclick=()=>{
        const id=b.dataset.id; if(!found.has(id)){ found.add(id); addXP(1); }
        last=TRICKS.find(t=>t.id===id); draw(); revealFB(); }; });
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 1 · A new word</div>
    <div class="card"><p>Messages that sellers pay for, to make you want to buy, are called <strong>advertising</strong>. Signs, videos, songs, pop-ups, and famous people holding a product are all advertising.</p>
    <p>"Is advertising bad?" Kai asks.</p>
    <p>"Not always," says Rana. "An ad can tell you real facts: the price, what’s in it, where to find it. The trick is to keep the facts and ignore the pushing."</p></div>
    <button onclick="earnWord('advertising');next()">New word: advertising</button>`),
  ()=>renderMC("q461a", next),
  ()=>renderMC("q461b", next),
  ()=>renderTF("q461c", next),
];

/* =====================================================================
   LESSON 2 — Fact or Feeling?
===================================================================== */
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · Fact or feeling?</div>
    <div class="recap"><strong>So far:</strong> advertising is paid messages to make you want to buy. Some parts are facts; some are tricks.</div>
    <div class="card"><p>Rana gives Kai a test. "For each line, ask yourself: can I <em>check</em> this? Or is it just trying to make me <em>feel</em> something?"</p></div>
    <button onclick="next()">Sort the lines</button>`),
  ()=>{
    let i=0;
    function draw(){
      if(i>=LINES.length){ addXP(5); next(); return; }
      const m=LINES[i];
      show(`<div class="kicker">Fact or feeling? · ${i+1} of ${LINES.length}</div>
        <div class="item">${m.t}</div>
        <div class="sortbar"><button class="fa" id="bfa">✅ Useful fact</button><button class="fe" id="bfe">💭 Feeling-pusher</button></div>
        <div id="fb"></div><div id="cont"></div>`);
      let done=false;
      function pick(a){
        if(done) return;
        const ok=a===m.a;
        document.getElementById("fb").innerHTML='<div class="feedback '+(ok?'good':'bad')+'">'+(ok?'Right. '+m.why:'Ask: could I check this? Try again.')+'</div>';
        revealFB();
        if(ok){
          done=true; addXP(1);
          document.getElementById("bfa").disabled=true; document.getElementById("bfe").disabled=true;
          document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<LINES.length-1?"Next":"Done")+'</button>';
          window._n=()=>{ i++; draw(); };
          revealFB();
        }
      }
      document.getElementById("bfa").onclick=()=>pick("fa");
      document.getElementById("bfe").onclick=()=>pick("fe");
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 2 · Ads in your pocket</div>
    <div class="card"><p>That night, Kai plays a game on his phone. Suddenly:</p></div>
    <div class="phone"><div class="pop"><div class="h">💎 GEM PACK 80% OFF! 💎</div><div class="t">⏰ Only 1:59:42 left! Your friends already bought theirs!</div></div></div>
    <div class="card"><p>Same tricks, new place: a countdown <strong>rush</strong>, <strong>crowd pressure</strong> ("your friends"), and a big <strong>discount</strong> on something he hadn’t planned to buy.</p>
    <p>Ads are everywhere online too: pop-ups in games, and videos where creators are paid to show products. Look for small labels like “ad” or “sponsored.”</p></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q462a", next),
  ()=>renderMC("q462b", next),
];

/* =====================================================================
   LESSON 3 — Real Value
===================================================================== */
const L3=[
  ()=>show(`<div class="kicker">Lesson 3 · Real value</div>
    <div class="recap"><strong>So far:</strong> keep the facts in an ad, and ignore the pushing.</div>
    <div class="card"><p>"So how do I decide what’s worth buying?" Kai asks.</p>
    <p>"Not just by the price," says Tavo, who has bought a lot of rope in thirty years. "Ask what you really <em>get</em> for what you pay."</p>
    <p>Three choices. Tap the better buy in each pair.</p></div>
    <button onclick="next()">Compare</button>`),
  ()=>{
    let i=0;
    function draw(){
      if(i>=PAIRS.length){ addXP(3); next(); return; }
      const p=PAIRS[i];
      const btn=(k,o)=>'<button class="opt-v" data-bot="1" data-k="'+k+'"><span class="e">'+o.e+'</span><span class="p">'+o.p+'</span>'+o.d+'</button>';
      show(`<div class="kicker">Which is better value? · ${i+1} of ${PAIRS.length}</div>
        <div class="card"><p style="margin:0">${p.q}</p></div>
        <div class="vs">${btn("a",p.a)}${btn("b",p.b)}</div>
        <div id="fb"></div><div id="cont"></div>`);
      let done=false;
      document.querySelectorAll(".vs button").forEach(b=>{ b.onclick=()=>{
        if(done) return;
        const ok=b.dataset.k===p.ans;
        b.classList.add(ok?"right":"wrong");
        document.getElementById("fb").innerHTML='<div class="feedback '+(ok?'good':'bad')+'">'+(ok?'Right. '+p.why:'Think about how long it lasts and how much it will really be used. Try again.')+'</div>';
        revealFB();
        if(ok){
          done=true; addXP(1);
          document.querySelectorAll(".vs button").forEach(x=>x.disabled=true);
          document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<PAIRS.length-1?"Next":"Done")+'</button>';
          window._n=()=>{ i++; draw(); };
          revealFB();
        } else b.disabled=true;
      }; });
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 3 · A new word</div>
    <div class="card"><p>What you really get for what you pay, meaning how good it is, how long it lasts, and how much you’ll actually use it, is called <strong>value</strong>.</p>
    <ul class="recaplist">
      <li>💲 A low <strong>price</strong> isn’t always good value. Cheap things that break can cost more.</li>
      <li>🏷️ A <strong>sale</strong> on something you don’t need isn’t saving. It’s spending.</li>
      <li>🔁 Something you’ll <strong>use a lot</strong> is often worth paying more for.</li>
    </ul></div>
    <button onclick="earnWord('value');next()">New word: value</button>`),
  ()=>renderMC("q463a", next),
];
const META=[
  {title:"The Big Sign", sub:"Spot five tricks on one poster", emoji:"📣"},
  {title:"Fact or Feeling?", sub:"Sort ad lines, and a pop-up sale", emoji:"📱"},
  {title:"Real Value", sub:"Price isn’t the same as value", emoji:"⚖️"},
];
