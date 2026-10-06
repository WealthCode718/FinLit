//@@META
title=Giving & Sharing
file=module-48-giving-and-sharing.html
placeholder=Ask about donating and checking a charity…
//@@CSS
  .week{font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:#fff; background:var(--shell); display:inline-block; border-radius:6px; padding:2px 10px; margin-bottom:8px; font-weight:700}
  .stars{font-size:28px; letter-spacing:4px; text-align:center; margin:6px 0}
  .jars3{display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin-bottom:12px}
  .jars3 .j{background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:10px 6px; text-align:center; min-width:0}
  .jars3 .j .e{font-size:26px}
  .jars3 .j .l{font-size:11px; letter-spacing:.08em; text-transform:uppercase; color:var(--ink-soft); font-weight:700}
  .jars3 .j .a{font-family:"Fraunces",Georgia,serif; font-size:24px; font-weight:700}
  .jars3 .j.warn{border-color:var(--bad); background:#f8e6e3}
  .gives{display:flex; gap:8px; flex-wrap:wrap; margin-bottom:12px}
  .gives button{flex:1; min-width:64px; background:#fff; color:var(--ink); border:2px solid #d9e2de}
  .gives button.on{border-color:var(--shell); background:#fdf0ea}
  .req{background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:12px 14px; margin-bottom:12px}
  .req .from{font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:var(--ink-soft); font-weight:700; margin-bottom:4px}
  .sortbar .ok{background:var(--good)} .sortbar .sus{background:var(--bad)}
//@@CONTENT
/* =====================================================================
   MODULE 48 — GIVING & SHARING  (Money World block, 3 of 4)
   Vocab: donate, charity.
   L1: The flooded village. Ways to give (money, time, things). A
       give/save/spend jar picker for Kai's $20 week: any amount that
       still covers needs is fine, $0 included; all $20 leaves needs
       unpaid. Named: donate.
   L2: Is it real? Sort five donation requests (real vs. suspicious),
       callback to scams (M23). Named: charity.
   L3: Making it count: give what's needed, keep a giving line in the
       budget, it's okay to say no to pressure, time counts.
   Tone: giving is a choice, never measured by size. No real charities,
   religions, or causes named.
===================================================================== */
const VOCAB = {
  donate:{term:"donate", def:"To give money, things, or time to help others, without expecting anything back. How much is your choice. Small gifts count."},
  charity:{term:"charity", def:"A group whose job is to collect donations and use them to help people, animals, or places in need. A real one is open about who it is and what it does with the money."}
};

const QUESTIONS = {
  "q481a":{type:"mc", prompt:"What does it mean to donate?", concept:"donate", opts:[
    {t:"To give money, things, or time to help others, as a gift", ok:true, fb:"Right. A donation is a gift. How much is your choice."},
    {t:"To lend money to people in need, who pay it back when they can", ok:false, fb:"That's a loan (Module 25). A donation is given freely, with nothing owed back."},
    {t:"To buy something that helps you", ok:false, fb:"Buying gets you something. Donating is giving, to help others."}]},
  "q481b":{type:"mc", prompt:"Kai has no spare money this week. How can he still help the flooded village?", concept:"donate", opts:[
    {t:"Give time or things: help mend nets, or donate gear he doesn't use", ok:true, fb:"Right. Time and things are donations too. Mending nets might help more than a few dollars."},
    {t:"He can't. Only money counts", ok:false, fb:"Time, skills, and useful things are all ways to give. Money is just one."},
    {t:"Borrow a few dollars from a friend so he can donate, and pay it back later", ok:false, fb:"Going into debt to give isn't wise. He can give time or things instead."}]},
  "q481c":{type:"tf", prompt:"True or false: giving only counts if you give a lot of money.", answer:false, concept:"donate",
    good:"Right. Small gifts, time, and useful things all count. Giving is about helping, not the size.",
    bad:"Look again. A $2 gift, an afternoon of help, or a spare net all count. Giving isn't measured by size."},
  "q482a":{type:"mc", prompt:"What is a charity?", concept:"charity", opts:[
    {t:"A group that collects donations and uses them to help those in need", ok:true, fb:"Right. A real one is open about who it is and what it does with the money."},
    {t:"A business that sells things to make a profit", ok:false, fb:"A business aims for profit (Module 42). A charity collects gifts to help others."},
    {t:"A bank account that earns interest", ok:false, fb:"That's savings. A charity is a group that uses donations to help."}]},
  "q482b":{type:"mc", prompt:"Which donation request is the most SUSPICIOUS?", concept:"charity", opts:[
    {t:"A stranger: “Cash only, right now! I can't tell you exactly where it goes.”", ok:true, fb:"Right. Cash only, a rush, and no clear answers are the same scam signs from Module 23."},
    {t:"The village elders list exactly what they need and give receipts", ok:false, fb:"That's open and clear: a good sign. The stranger asking for cash only, right now, is the suspicious one."},
    {t:"The school asks families to drop off spare blankets at the front office this week", ok:false, fb:"A known place, a clear need, no rush: a good sign. The pushy stranger is the suspicious one."}]},
  "q483a":{type:"mc", prompt:"The flooded village says it needs nets, rope, and food. Kai has some old toys. What's the most helpful?", concept:"donate", opts:[
    {t:"Give what they asked for, or ask first if toys are wanted", ok:true, fb:"Right. The best gift is one that fits the real need. Asking first makes it count."},
    {t:"Send the toys anyway, because any gift helps and kids there will be bored", ok:false, fb:"Toys they didn't ask for may just take up space. Give what they need, or ask first."},
    {t:"Send nothing, because toys aren't money", ok:false, fb:"He can still help, with rope, food, or his time. Give what fits the need."}]},
  "q483b":{type:"mc", transfer:true, prompt:"Lena's school runs a winter coat drive. Lena has no spare money, but she has a warm coat she's outgrown. What can she do?", concept:"donate", opts:[
    {t:"Donate the coat she's outgrown. It's exactly what's needed", ok:true, fb:"Exactly. Different place, same idea: a useful thing, given freely, to a known group with a clear need."},
    {t:"Nothing, because she has no money", ok:false, fb:"Things count too. Her outgrown coat is exactly what the drive is collecting."},
    {t:"Buy a new coat with money she needs for lunch", ok:false, fb:"Giving shouldn't leave her without her own needs. Her outgrown coat is a great gift."}]}
};

const CFG = {
  n:48, title:"Giving & Sharing", homeSub:"Four short lessons. Ways to give, how to check a charity is real, and how to make giving count.",
  pool:["q481a","q481b","q481c","q482a","q482b","q483a"], transfer:"q483b",
  quest:"You chose how much of Kai's week to give, sorted real requests from suspicious ones, and learned to make a gift fit the real need.",
  failKeys:"The keys: to donate is to give money, things, or time freely; how much is your choice and small gifts count; a charity is a group that uses donations to help, and a real one is open and never rushes you; and the best gift fits the real need without leaving your own needs unpaid.",
  nextFile:"module-49-money-world-challenge.html",
  passStory:'<p><strong>You now own:</strong> donate and charity.</p>'+
    '<p>A week later, the low village’s boats are back on the water. Kai’s afternoon of mending nets is out there somewhere, catching fish.</p>'+
    '<p>Rana walks him back to the market. "Ads, contracts, rights, giving. That’s the money world around you. Ready to see how you’d handle all of it in one busy week?"</p>'+
    '<p class="muted">Module 49: The Money World Challenge.</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about giving, donating time or things, or how to check a charity is real. Or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 48 (Giving & Sharing) of a financial-literacy app, part of the Money World block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, price, cost, buy, pay, earn, spend, need, save, goal, budget, bank, savings, interest, fee, scam, borrow, loan, debt, wage, income, tax, receipt, risk, emergency, emergency fund, insurance, inflation, invest, stock, profit, investment fund, long-term, investment plan, advertising, value, contract, consumer rights. "+
  "From THIS module: donate (to give money, things, or time to help others, without expecting anything back; how much is your choice; small gifts count) and charity (a group that collects donations and uses them to help people, animals, or places; a real one is open about who it is and what it does with the money). "+
  "Key points: giving is a personal choice and never measured by size; time, skills, and useful things are donations too; a planned giving amount in your budget is easier to keep up; never give so much that your own needs or emergency fund go unpaid, and never borrow to give; check a charity: a known name, clear about what the money does, receipts, no rush, any amount welcome; suspicious signs: strangers, cash or gift cards only, 'today only', vague answers, pressure; the best gift fits the real need, so ask first; it's okay to say no to pressure, even from friends. "+
  "TEACHING STYLE: warm and non-judgmental; never shame anyone for giving little or nothing. Never name real charities, religions, political causes, or companies. "+
  "STRICT RULES: never use the word retirement (later module). If the learner uses it, answer briefly in plain words and say it is coming later. "+
  "Story context: a storm flooded the low village across the bay; families lost boats and nets. Kai, who earns about $20 a week, chose how much to give, sorted real requests from suspicious ones (a stranger wanting cash only, right now, with no answers), learned the village needed nets, rope, and food (not old toys), and spent an afternoon mending nets. "+
  "Never repeat a failed explanation: switch examples (a school coat drive, an animal shelter needing blankets, helping a neighbor carry groceries). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple 'real or suspicious request?' question and wait.";
//@@LESSONS
/* =====================================================================
   INTERACTIVES — the give/save/spend picker, the real-or-suspicious
   sort, and the making-it-count challenge.
===================================================================== */
const WEEK=20, NEEDS=10;
const GIVE_OPTS=[0,2,5,20];
function jars3(g){
  const rest=WEEK-NEEDS-g, save=rest>0?Math.floor(rest/2):0, spend=WEEK-g-save;
  const short=g>WEEK-NEEDS;
  return '<div class="jars3"><div class="j"><div class="e">🎁</div><div class="l">Give</div><div class="a">$'+g+'</div></div>'+
    '<div class="j"><div class="e">🏦</div><div class="l">Save</div><div class="a">$'+save+'</div></div>'+
    '<div class="j'+(short?' warn':'')+'"><div class="e">🍚</div><div class="l">Needs & spend</div><div class="a">$'+spend+'</div></div></div>';
}
const GIVE_FB={
  0:{ok:true, t:"That's okay. Giving is a choice. Kai could still give time this week, like mending nets."},
  2:{ok:true, t:"A small, steady gift he can keep up. Needs covered, savings still growing."},
  5:{ok:true, t:"A generous gift, and his needs are still covered. Savings is a little smaller this week."},
  20:{ok:false, t:"Big heart! But now there's $0 for his $10 of needs, and no savings. Giving shouldn't leave your own needs unpaid. Try a smaller amount."}
};
const REQS=[
  {from:"The village elders", t:"“Here’s a list: nets, rope, rice. Drop things at the harbor hall, or give at the bank’s village account. We’ll post what we receive.”", real:true, why:"Known people, a clear list, a public place, and they'll show what they received. Good signs."},
  {from:"A stranger at the dock", t:"“Flood relief! CASH ONLY. I’m leaving on the next ferry, so give now. Where does it go? Uh… to the village.”", real:false, why:"Cash only, a rush, and a vague answer. Those are the scam signs from Module 23."},
  {from:"Kai’s school", t:"“We’re collecting blankets at the front office all month. Every family that gives gets a thank-you note.”", real:true, why:"A place you know, a clear need, no rush. Good signs."},
  {from:"A message on Kai’s phone", t:"“URGENT!! Flood victims need help! Send a $10 gift card code to this number TODAY.”", real:false, why:"Gift card codes, “urgent,” “today,” and an unknown number. Real charities don't ask for gift card codes."},
  {from:"The island animal shelter", t:"“The flood scared a lot of animals. We need old towels. Our sign-up sheet shows what’s already covered.”", real:true, why:"A known group, a specific need, and openness about what they have. Good signs."}
];
const MOVES=[
  {wk:"What do they need?", story:"Mika wants to send the village a box of her old comic books.", opts:[
    {t:"Ask the village what they need first. Right now it’s nets, rope, and food", ok:true, fb:"Right. The best gift fits the real need. Comics might be great later, once the boats are fixed."},
    {t:"Send the comics. Any gift is the same", ok:false, fb:"A gift they can't use takes up space when they're busy. Ask first, and give what's needed."},
    {t:"Throw the comics away instead", ok:false, fb:"No need! She can ask whether they'd be welcome later, or give them somewhere they're wanted."}]},
  {wk:"Friend pressure", story:"Tavo’s nephew says: \"I gave $20. If you don’t give $20 too, you don’t care.\" Kai has already planned to give $2 and an afternoon of work.", opts:[
    {t:"Stick to his plan. It’s okay to say no to pressure. Giving is his choice", ok:true, fb:"Right. Giving isn't a contest. His $2 and his time are real help."},
    {t:"Give $20 from his needs money to prove he cares", ok:false, fb:"Then his own needs go unpaid. Caring isn't measured in dollars. Stick to his plan."},
    {t:"Borrow $20 to keep up", ok:false, fb:"Never go into debt to give. His plan was already generous."}]},
  {wk:"Make it regular", story:"Kai liked helping. He wants to keep giving a little, even after the flood is fixed.", opts:[
    {t:"Add a small giving line to his budget, like $1 or $2 a week, that he can keep up", ok:true, fb:"Right. A planned amount is easier to keep, and it never crowds out needs or savings."},
    {t:"Give whatever is left over, if anything", ok:false, fb:"That can work, but leftovers often vanish. A small planned line makes it steady."},
    {t:"Give his whole emergency fund at once", ok:false, fb:"The emergency fund is for his own bad days. Plan a small, steady giving line instead."}]},
  {wk:"Time counts", story:"Kai has $0 to spare this month, but a free Saturday.", opts:[
    {t:"Offer his Saturday to help mend nets or clean up the harbor", ok:true, fb:"Right. Time is a donation too, and hands are exactly what a flooded village needs."},
    {t:"Feel bad because he can't give money", ok:false, fb:"No need. Time and skills are real gifts. His Saturday can do a lot."},
    {t:"Use his credit card to give anyway", ok:false, fb:"Never go into debt to give. His free Saturday is a great gift."}]}
];
let iStars=0;

/* =====================================================================
   LESSON 1 — The Flooded Village
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · The flooded village</div>
    <div class="recap"><strong>Kai’s story so far:</strong> Kai learned to read ads and contracts and to stand up for his rights. Then a storm flooded the low village across the bay.</div>
    <div class="card"><p>Families there lost boats and nets. Kai wants to help. "But I only earn about $20 a week," he says, "and $10 of it goes to my needs."</p>
    <p>"Helping comes in many shapes," Rana says. "<strong>Money</strong>, yes. But also <strong>time</strong>, like mending nets. And <strong>things</strong>, like spare rope. And how much is <em>your</em> choice."</p></div>
    <button onclick="next()">Plan Kai’s week</button>`),
  ()=>{
    let g=null; const tried=new Set();
    function draw(){
      const fb=g===null?null:GIVE_FB[g];
      show(`<div class="kicker">Lesson 1 · How much to give?</div>
        <div class="card"><p style="margin:0">Kai has <strong>$20</strong> this week. <strong>$10</strong> must go to needs. Tap an amount to give and watch the jars.</p></div>
        <div class="gives">${GIVE_OPTS.map(v=>'<button class="'+(g===v?'on':'')+'" data-bot="1" data-v="'+v+'">$'+v+'</button>').join('')}</div>
        ${jars3(g===null?0:g)}
        <div id="fb">${fb?'<div class="feedback '+(fb.ok?'good':'bad')+'">'+fb.t+'</div>':''}</div>
        <div id="cont">${(fb&&fb.ok&&tried.size>=2)?'<button onclick="next()">Continue</button>':(fb&&fb.ok?'<p class="muted" style="text-align:center">Try one more amount to compare.</p>':'')}</div>`);
      document.querySelectorAll(".gives button").forEach(b=>{ b.onclick=()=>{ g=+b.dataset.v; if(!tried.has(g)){ tried.add(g); addXP(1); } draw(); revealFB(); }; });
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 1 · A new word</div>
    <div class="card"><p>Giving money, things, or time to help others, without expecting anything back, is to <strong>donate</strong>.</p>
    <ul class="recaplist">
      <li>🎁 How much is <strong>your choice</strong>. Small gifts count.</li>
      <li>🧰 <strong>Time and things</strong> count too.</li>
      <li>🍚 Don’t give so much that your own <strong>needs</strong> go unpaid, and never borrow to give.</li>
    </ul></div>
    ${more('<p>Why do people give? Part of it is simple: helping feels good. Part of it is that a village works best when neighbors look out for each other.</p>'+
      '<p>Next year a storm might hit Kai’s side of the bay instead. Giving keeps that circle of help strong. But a gift is still a gift: you don’t give to get something back.</p>')}
    <button onclick="earnWord('donate');next()">New word: donate</button>`),
  ()=>renderMC("q481a", next),
  ()=>renderMC("q481b", next),
  ()=>renderTF("q481c", next),
];

/* =====================================================================
   LESSON 2 — Is It Real?
===================================================================== */
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · Is it real?</div>
    <div class="recap"><strong>So far:</strong> to donate is to give money, things, or time, freely.</div>
    <div class="card"><p>Word of the flood spreads, and suddenly lots of people are asking for donations. Most mean well. Some don’t.</p>
    <p>A group whose job is to collect donations and use them to help people, animals, or places is called a <strong>charity</strong>. A real one is open about who it is and what it does with the money.</p></div>
    ${more('<p>Why give through a charity instead of on your own? A charity can gather lots of small gifts into one big pile and buy just what is needed, like 50 nets at once.</p>'+
      '<p>A good charity also tells people what it did with the money. That’s how Kai can know his $2 really reached the village.</p>')}
    <button onclick="earnWord('charity');next()">New word: charity</button>`),
  ()=>{
    let i=0;
    function draw(){
      if(i>=REQS.length){ addXP(5); next(); return; }
      const r=REQS[i];
      show(`<div class="kicker">Real or suspicious? · ${i+1} of ${REQS.length}</div>
        <div class="req"><div class="from">${r.from}</div><p style="margin:0">${r.t}</p></div>
        <div class="sortbar"><button class="ok" id="rR">✅ Looks real</button><button class="sus" id="rS">🚩 Suspicious</button></div>
        <div id="fb"></div><div id="cont"></div>`);
      let done=false;
      function pick(v){
        if(done) return;
        const ok=v===r.real;
        document.getElementById("fb").innerHTML='<div class="feedback '+(ok?'good':'bad')+'">'+(ok?'Right. '+r.why:'Look for: who is asking, a clear need, a rush, and how they want to be paid. Try again.')+'</div>';
        revealFB();
        if(ok){
          done=true; addXP(1);
          document.getElementById("rR").disabled=true; document.getElementById("rS").disabled=true;
          document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<REQS.length-1?"Next":"Done")+'</button>';
          window._n=()=>{ i++; draw(); };
          revealFB();
        }
      }
      document.getElementById("rR").onclick=()=>pick(true);
      document.getElementById("rS").onclick=()=>pick(false);
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 2 · Check before you give</div>
    <div class="card"><p><strong>Good signs:</strong> a name you know or can check, a clear need, open about what the money does, receipts, any amount welcome.</p>
    <p><strong>🚩 Red flags:</strong> strangers, cash or gift cards only, “urgent” or “today only,” vague answers, pressure.</p>
    <p>When unsure, give through people and places you know, and ask a trusted adult.</p></div>
    ${more('<p>Why do scammers show up after a storm? People feel sad and want to help fast. Fast is just what a scammer wants, so you don’t stop to check.</p>'+
      '<p>Taking a day to check doesn’t hurt a real charity. It will still be there tomorrow. A stranger leaving on the next ferry won’t.</p>')}
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q482a", next),
  ()=>renderMC("q482b", next),
];

/* =====================================================================
   LESSON 3 — Making It Count (challenge)
===================================================================== */
const L3=[
  ()=>{ iStars=0;
    show(`<div class="kicker">Lesson 3 · Making it count</div>
    <div class="recap"><strong>So far:</strong> give freely, and check that a charity is real.</div>
    <div class="card"><p>Four giving moments. Get each right the first time to earn a ⭐.</p></div>
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
      <li>✅ Ask what’s needed, and give what fits.</li>
      <li>✅ It’s okay to say no to pressure.</li>
      <li>✅ A small giving line in your budget is easy to keep.</li>
      <li>✅ Time is a gift too.</li>
    </ul></div>
    ${more('<p>Lots of families talk about giving together: who they want to help, and how much fits their budget. You could ask a grown-up at home what they care about.</p>'+
      '<p>Some kids keep three jars: give, save, and spend. Even a few cents in the give jar each week adds up over a whole year.</p>')}
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q483a", next),
];
const META=[
  {title:"The Flooded Village", sub:"Money, time, and things: how much to give", emoji:"🌊"},
  {title:"Is It Real?", sub:"Sort five donation requests", emoji:"🔍"},
  {title:"Making It Count", sub:"Four giving moments", emoji:"🤲"},
];
