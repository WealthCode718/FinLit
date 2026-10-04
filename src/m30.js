//@@META
title=Your First Job
file=module-30-your-first-job.html
placeholder=Ask about jobs and wages…
//@@CSS
  .pay{background:linear-gradient(135deg,#2e7d5b 0%,#1b5540 100%); color:#fff; border-radius:16px; padding:18px 20px; margin-bottom:12px; box-shadow:0 4px 16px rgba(46,125,91,.25)}
  .pay .lbl{font-size:11px; letter-spacing:.14em; text-transform:uppercase; opacity:.8}
  .pay .v{font-family:"Fraunces",Georgia,serif; font-weight:700; font-size:40px; margin:2px 0}
  .pay .who{font-size:14px; opacity:.85}
  .hours{display:flex; gap:6px; margin:10px 0 2px; flex-wrap:wrap}
  .hours span{width:34px; height:34px; border-radius:8px; background:rgba(255,255,255,.18); display:flex; align-items:center; justify-content:center; font-size:18px}
  .hours span.on{background:var(--gold)}
  .offer{background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:14px 12px; text-align:center; flex:1}
  .offer .t{font-weight:700; margin-bottom:6px}
  .offer .r{font-size:14px; color:var(--ink-soft)}
  .offer .tot{font-family:"Fraunces",Georgia,serif; font-weight:700; font-size:26px; margin-top:6px}
  .offer.win{border-color:var(--good); background:#eef7f2}
//@@CONTENT
/* =====================================================================
   CONTENT — Module 30: Your First Job  (opens the Earning & Taxes block)
   Vocab: employer, wage.
   The math here is small multiplication from M12 (hours × wage). The
   screen always shows the total, so the questions stay about WHETHER
   and WHY: more hours → more pay; a higher wage is not automatically
   more money if the hours are fewer.
   Kai is a kid helping on a family friend's boat — light, safe work.
===================================================================== */
const VOCAB = {
  employer:{term:"employer", def:"The person or business that pays you to work for them. Tavo is Kai’s employer."},
  wage:{term:"wage", def:"The money you are paid for each hour (or day) of work. More hours at the same wage means more money."}
};

const QUESTIONS = {
  "q301a":{type:"mc", prompt:"What is an employer?", concept:"employer", opts:[
    {t:"The person or business that pays you to work for them", ok:true, fb:"Right. Tavo pays Kai to work on his boat, so Tavo is Kai’s employer."},
    {t:"The person who does the work", ok:false, fb:"That is Kai! The employer is the one who pays for the work — Tavo."},
    {t:"A bank that holds your money", ok:false, fb:"The bank keeps money safe. An employer is whoever pays you for working."}]},
  "q301b":{type:"tf", prompt:"True or false: when Kai sells fish he caught himself at the market, a shop owner is his employer.", answer:false, concept:"employer",
    good:"Right. Nobody is paying Kai to work for them there — he is selling his own fish. An employer pays you to work for THEM.",
    bad:"Selling your own fish is earning, but nobody is employing you. An employer is someone who pays you to work for them, like Tavo on the boat."},
  "q302a":{type:"mc", prompt:"What is a wage?", concept:"wage", opts:[
    {t:"The money you are paid for each hour (or day) of work", ok:true, fb:"Right. Kai’s wage is $4 for every hour he works on the boat."},
    {t:"A gift from your employer", ok:false, fb:"A wage is not a gift — it is earned, one hour at a time."},
    {t:"Money you borrow from your employer", ok:false, fb:"Nothing borrowed here. A wage is money you earn for the hours you work, and it is yours to keep."}]},
  "q302b":{type:"mc", prompt:"Kai’s wage stays the same. Next week he works MORE hours. What happens to his pay?", concept:"wage", opts:[
    {t:"It goes up", ok:true, fb:"Right. Same wage, more hours, more money. Every hour adds another $4."},
    {t:"It stays the same", ok:false, fb:"A wage is paid for EACH hour. More hours means more of them get paid."},
    {t:"It goes down", ok:false, fb:"Working more hours never lowers the pay at the same wage. It goes up."}]},
  "q302c":{type:"tf", prompt:"True or false: two people with the same wage can earn different amounts.", answer:true, concept:"wage",
    good:"Right. The wage is only half of it. The other half is how many hours each person works.",
    bad:"They can! Same wage, but if one works more hours, that person earns more. Hours matter too."},
  "q303a":{type:"mc", prompt:"Tavo pays $4 an hour for 5 hours. The bakery pays $5 an hour for 2 hours. Why does Tavo’s job bring in MORE money?", concept:"wage", opts:[
    {t:"He works more hours there, and that beats the higher wage", ok:true, fb:"Right. $20 on the boat vs $10 at the bakery. The wage is higher at the bakery, but the hours make the difference."},
    {t:"Because the boat is more fun", ok:false, fb:"Fun is nice, but it is not why the pay is bigger. It is the hours: 5 hours vs 2."},
    {t:"It doesn’t — the bakery’s higher wage always means more money in the end", ok:false, fb:"Look at the totals: $20 on the boat, $10 at the bakery. Hours matter as much as the wage."}]},
  "q303c":{type:"mc", prompt:"Besides the money, what else should Kai think about when choosing a job?", concept:"employer", opts:[
    {t:"Is it safe, does it fit school, and is there time to rest?", ok:true, fb:"Right. A job is part of your whole week. The best offer is not only the one with the biggest number."},
    {t:"Nothing — only the money matters, since that is the reason to have a job", ok:false, fb:"Money matters a lot, but so do safety, school, and rest. A job that breaks your week is not a good deal."},
    {t:"Which employer has the nicest hat", ok:false, fb:"Ha! Think bigger: is it safe, does it fit around school, and does it leave time to rest?"}]},
  "q303b":{type:"mc", transfer:true, prompt:"Mika gets $3 for every basket of bread she delivers for the bakery. How is this like a wage?", concept:"wage", opts:[
    {t:"Each basket pays the same amount — more baskets, more money", ok:true, fb:"Exactly. Kai is paid per hour, Mika per basket. Same shape: a set amount for each unit of work."},
    {t:"It isn’t — a wage is only paid by the hour, so baskets do not count", ok:false, fb:"A wage is often paid by the hour, but baskets work the same way: a set amount for each piece of work."},
    {t:"It is a gift for being nice", ok:false, fb:"It is earned, not a gift. Each basket delivered adds $3, just like each hour adds to Kai’s pay."}]}
};

const CFG = {
  n:30, title:"Your First Job", homeSub:"Four short lessons. Working for someone else, one hour at a time.",
  pool:["q301a","q301b","q302a","q302b","q302c","q303a","q303c"], transfer:"q303b",
  quest:"You learned what an employer is, how a wage works, and how to compare two job offers.",
  failKeys:"The keys: an employer pays you to work for them, a wage is paid for each hour, and total pay depends on the wage AND the hours.",
  badge:" · Earning & Taxes block begins 💼",
  nextFile:"module-31-the-paycheck.html",
  passStory:'<p><strong>You now own:</strong> employer and wage — and Kai has his first real job.</p>'+
    '<p>Two weeks later, Tavo hands Kai an envelope with his name on it. Inside is a slip of paper with lots of lines on it.</p>'+
    '<p>Kai counts his hours. Ten. At $4 each, that should be $40.</p>'+
    '<p>He looks at the bottom of the slip. It does not say $40.</p>'+
    '<p class="muted">Module 31: The Paycheck.</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about jobs, employers, or wages — or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 30 (Your First Job) of a financial-literacy app, the first module of the Earning & Taxes block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, multiply, buy, sell, pay, earn, work, spend, need, save, goal, percent, bank, deposit, withdraw, balance, checking, savings, transaction, notification, interest, grow, fee, overdraft, PIN, scam, budget, cushion, borrow, loan, lend, owe, debt, debit card, credit card, credit score, due date, lender, minimum payment. "+
  "From THIS module: employer (the person or business that pays you to work for them) and wage (money paid for each hour or day of work). Core ideas: same wage + more hours = more pay; a higher wage is not more money if the hours are much fewer; besides money, a job should be safe, fit around school, and leave time for rest. "+
  "TEACHING STYLE: small whole-number multiplication (hours times wage) is fine and is the concept here, but keep numbers small and keep most answers about WHY and WHETHER. "+
  "STRICT RULES: never use these words (later modules): paycheck, income, tax, take-home pay, sales tax, receipt, tax return, refund, withholding, salary, benefits, invest, stock, insurance, retirement. If the learner uses one, answer briefly in plain words and say it is coming later. If a child asks about getting a job, say kids' work is usually small jobs like chores or helping family and friends, that many places have rules about work for young people, and to talk with a trusted adult. "+
  "Story context: Tavo offered Kai paid work helping on his boat at $4 an hour. Kai worked a 5-hour shift and watched his pay grow hour by hour. Then he compared Tavo's job (5 hours at $4 = $20) with the bakery (2 hours at $5 = $10) and saw that hours matter as much as the wage. "+
  "Never repeat a failed explanation — switch analogies (a jar that gets a coin every hour, paid per basket, filling buckets). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple question and wait.";
//@@LESSONS
/* =====================================================================
   SIMULATOR — a pay card that grows by one wage per tap of
   "Work an hour". The learner feels pay as hours × wage without
   having to compute it.
===================================================================== */
const WAGE=4, SHIFT=5;
function payCard(h, note){
  let dots=''; for(let k=0;k<SHIFT;k++) dots+='<span class="'+(k<h?'on':'')+'">'+(k<h?'⏱':'')+'</span>';
  return '<div class="pay"><div class="lbl">Earned so far</div><div class="v">$'+(h*WAGE)+'</div>'+
    '<div class="who">'+(note||(h+' of '+SHIFT+' hours · $'+WAGE+' each'))+'</div><div class="hours">'+dots+'</div></div>';
}

/* =====================================================================
   LESSON 1 — The Offer
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · The offer</div>
    <div class="recap"><strong>Kai’s story so far:</strong> Banking and credit, all done. Then Tavo waves from the dock: "I need a real helper on the boat this season. Paid work."</div>
    <div class="scene">🚤🧑‍🦱<div class="cap">"Coiling ropes, sorting the catch, cleaning the deck. Saturdays only. Interested?"</div></div>
    <button onclick="next()">Kai is interested</button>`),
  ()=>show(`<div class="kicker">Lesson 1</div>
    <div class="card"><p>Kai has earned money before — selling fish at the market, helping neighbors. But this is different. Tavo will pay Kai to work for <em>him</em>.</p>
    <p>That makes Tavo Kai’s <strong>employer</strong>: the person or business that pays you to work for them.</p>
    <p>Rana nods. "An employer is someone trusting you with their work. Show up on time, do it well, and they will want you back."</p></div>
    <button onclick="earnWord('employer');next()">New word: employer</button>`),
  ()=>renderMC("q301a", next),
  ()=>renderTF("q301b", next),
];

/* =====================================================================
   LESSON 2 — Paid by the Hour (shift simulator)
===================================================================== */
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · Paid by the hour</div>
    <div class="recap"><strong>So far:</strong> Tavo is Kai’s employer.</div>
    <div class="card"><p>"Here is the deal," Tavo says. "Every hour you work, I pay you $4."</p>
    <p>That amount for each hour has a name: a <strong>wage</strong> — the money you are paid for each hour (or day) of work.</p></div>
    <button onclick="earnWord('wage');next()">New word: wage</button>`),
  ()=>{
    let h=0;
    function draw(){
      show(`<div class="kicker">Saturday shift</div>
        ${payCard(h)}
        <div class="card"><p style="margin:0">${h===0?'The sun is up. Time to work.':h<SHIFT?'Another hour done. Keep going?':'Shift over! Five hours, done well.'}</p></div>
        ${h<SHIFT?'<button id="wHour" data-bot="1">⏱ Work an hour</button>':''}
        <div id="cont">${h>=SHIFT?'<button onclick="addXP(4);next()">Continue</button>':''}</div>`);
      const b=document.getElementById("wHour");
      if(b) b.onclick=()=>{ h++; draw(); };
    }
    draw();
  },
  ()=>show(`<div class="kicker">Lesson 2</div>
    ${payCard(5,"Saturday · 5 hours × $4")}
    <div class="card"><p>Every hour added the same $4. Five hours, $20.</p>
    <p>That is the whole idea of a wage: <strong>same wage, more hours, more money.</strong> Fewer hours, less money.</p></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q302a", next),
  ()=>renderMC("q302b", next),
  ()=>renderTF("q302c", next),
];

/* =====================================================================
   LESSON 3 — Comparing Offers
===================================================================== */
const L3=[
  ()=>show(`<div class="kicker">Lesson 3 · A second offer</div>
    <div class="recap"><strong>So far:</strong> a wage is paid for each hour. More hours, more money.</div>
    <div class="card"><p>Word gets around that Kai is a good worker. The bakery offers him a Saturday job too — and a <strong>higher wage</strong>: $5 an hour.</p>
    <p>"Five is more than four!" Kai says. Then Rana asks: "For how many hours?"</p></div>
    <div style="display:flex; gap:10px; margin-bottom:14px">
      <div class="offer win"><div class="t">🚤 Tavo’s boat</div><div class="r">$4 an hour<br>5 hours</div><div class="tot">$20</div></div>
      <div class="offer"><div class="t">🥖 Bakery</div><div class="r">$5 an hour<br>2 hours</div><div class="tot">$10</div></div>
    </div>
    <div class="card"><p>The bakery wage is higher. But the hours are so few that it brings in <strong>half</strong> as much.</p>
    <p style="text-align:center"><strong>Pay depends on the wage AND the hours.</strong></p></div>
    <button onclick="next()">Is money the only thing?</button>`),
  ()=>show(`<div class="kicker">Lesson 3 · More than a number</div>
    <div class="card"><p>Rana adds one more thing. "A job is part of your whole week. Before you say yes, ask:"</p>
    <ul style="list-style:none">
      <li style="padding:6px 0">🦺 <strong>Is it safe?</strong></li>
      <li style="padding:6px 0">📚 <strong>Does it fit around school?</strong></li>
      <li style="padding:6px 0">😴 <strong>Does it leave time to rest?</strong></li>
    </ul>
    <p>Tavo’s job is Saturdays only, with an adult he trusts. Kai takes it.</p></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q303a", next),
  ()=>renderMC("q303c", next),
];
const META=[
  {title:"The Offer", sub:"Working for someone else", emoji:"🚤"},
  {title:"Paid by the Hour", sub:"Work a shift and watch the pay grow", emoji:"⏱"},
  {title:"Comparing Offers", sub:"A higher wage isn’t always more money", emoji:"⚖️"},
];
