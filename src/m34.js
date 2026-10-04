//@@META
title=The Earning Challenge
file=module-34-earning-challenge.html
placeholder=Ask about tax returns and refunds…
//@@CSS
  .form{background:#fff; border:2px solid #d9e2de; border-radius:10px; padding:14px 16px; margin-bottom:12px; font-size:15px}
  .form .hd{font-weight:700; border-bottom:2px solid var(--ink); padding-bottom:6px; margin-bottom:6px; display:flex; justify-content:space-between}
  .form .row{display:flex; justify-content:space-between; padding:5px 0; border-bottom:1px dashed #d9e2de}
  .form .res{margin-top:8px; padding:8px; border-radius:8px; background:#eef7f2; font-weight:700; display:flex; justify-content:space-between}
  .form .res span:last-child{font-family:"Fraunces",Georgia,serif; color:var(--good)}
  .three{display:flex; gap:8px; margin-bottom:12px}
  .three > div{flex:1; background:#fff; border:2px solid #d9e2de; border-radius:12px; padding:10px 6px; text-align:center; font-size:13px}
  .three .t{font-weight:700; font-size:14px; margin-bottom:4px}
  .three .good{border-color:var(--good); background:#eef7f2}
  .three .bad{border-color:var(--shell); background:var(--shell-soft)}
  .week{font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:#fff; background:var(--shell); display:inline-block; border-radius:6px; padding:2px 10px; margin-bottom:8px; font-weight:700}
  .stars{font-size:28px; letter-spacing:4px; text-align:center; margin:6px 0}
  .recaplist{list-style:none}
  .recaplist li{padding:8px 0; border-bottom:1px solid #eef2f0}
  .recaplist li:last-child{border-bottom:none}
  .goal{background:#fff; border:2px solid var(--good); border-radius:14px; padding:14px 16px; margin-bottom:12px}
  .goal .lbl{font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:var(--ink-soft); font-weight:700; display:flex; justify-content:space-between}
  .goal .bar{height:16px; border-radius:999px; background:#eef2f0; overflow:hidden; margin-top:8px}
  .goal .bar div{height:100%; background:var(--good); border-radius:999px; transition:width .6s ease}
//@@CONTENT
/* =====================================================================
   CONTENT — Module 34: The Earning Challenge (Earning & Taxes finale)
   Vocab: tax return, refund.
   Concept only: a tax return is the once-a-year check of "was the right
   amount of tax paid?" — three possible outcomes (refund / pay a bit
   more / nothing). No forms, no country-specific rules, no rates.
   The season challenge pays off the SAIL GOAL that has run since the
   Foundations and Banking seasons — Kai finally buys it.
   Honesty is taught as non-negotiable: leaving income off a tax return
   is against the rules.
===================================================================== */
const VOCAB = {
  taxreturn:{term:"tax return", def:"A form you fill out once a year telling the government how much you earned and how much tax was already taken. It checks whether you paid the right amount."},
  refund:{term:"refund", def:"Money given back to you, often because you paid too much. Kai’s tax refund is his own money coming home — not a bonus, so give it a job."}
};

const QUESTIONS = {
  "q341a":{type:"mc", prompt:"What is a tax return?", concept:"taxreturn", opts:[
    {t:"A once-a-year form that checks whether you paid the right amount of tax", ok:true, fb:"Right. It lists what you earned and what was already taken, and checks if they match up."},
    {t:"Taking something back to a shop", ok:false, fb:"That is returning an item. A tax return is a yearly form about your income and your taxes."},
    {t:"A form to ask for a loan", ok:false, fb:"Nothing borrowed here. A tax return checks whether the tax you paid during the year was the right amount."}]},
  "q341b":{type:"mc", prompt:"On Kai\u2019s island, what happens if too LITTLE tax was taken during the year?", concept:"taxreturn", opts:[
    {t:"You pay the rest of what you owe", ok:true, fb:"Right. The return works both ways: too much taken → money back; too little → you pay the difference."},
    {t:"Nothing — you get to keep the difference", ok:false, fb:"Taxes are required. If too little was paid, the return is where you pay the rest."},
    {t:"You get a refund anyway", ok:false, fb:"On Kai\u2019s island, a refund only comes when too MUCH was taken. Too little means you pay a bit more."}]},
  "q341c":{type:"tf", prompt:"True or false: a tax return must include all of your income, even if leaving some out would get you a bigger refund.", answer:true, concept:"taxreturn",
    good:"Right. A tax return must be honest and complete. Leaving income out to get more back is against the rules.",
    bad:"It must. A tax return has to include all your income. Leaving some out to get a bigger refund is against the rules."},
  "q342a":{type:"mc", prompt:"What is a refund?", concept:"refund", opts:[
    {t:"Money given back to you, often because you paid too much", ok:true, fb:"Right. At a shop, or on Kai\u2019s tax return, it is money coming back to you."},
    {t:"A prize for filling out forms", ok:false, fb:"It is not a prize for paperwork. For Kai, it was his own money — he paid too much, and it came back."},
    {t:"Money the government lends you, which you pay back next year", ok:false, fb:"Nothing to pay back. A refund is your own money returned."}]},
  "q342b":{type:"mc", prompt:"Kai gets a $6 tax refund. What is the smartest way to think about it?", concept:"refund", opts:[
    {t:"His own money came home — give it a job in his budget", ok:true, fb:"Right. Not free money, not a surprise bonus to blow. Like every dollar, it gets a job."},
    {t:"Free money — spend it all right away, since he did not plan on it", ok:false, fb:"It was his money all along. Treat it like any other dollar: give it a job first."},
    {t:"He should send it back", ok:false, fb:"It is his! Too much was taken, so it comes back. He just needs to plan it."}]},
  "q342c":{type:"tf", prompt:"True or false: a message saying “You have a tax refund! Reply with your PIN to get it” is real.", answer:false, concept:"refund",
    good:"Right. That is a scam. Nobody real ever asks for your PIN — not the bank, not the government.",
    bad:"It is a scam. It asks for a PIN and dangles money. Tricksters love pretending to be the tax office."},
  "q343a":{type:"mc", prompt:"Kai earned $52 this pay period, and $5 was taken for taxes. Which number does his budget start with?", concept:"refund", opts:[
    {t:"$47 — his take-home pay", ok:true, fb:"Right. Plan with what actually lands."},
    {t:"$52 — what he earned this pay period", ok:false, fb:"He never sees $52 in his account. Plan with take-home pay: $47."},
    {t:"$57 — earned plus taxes", ok:false, fb:"Taxes come OUT, not in. Take-home pay is $47."}]},
  "q343b":{type:"mc", transfer:true, prompt:"Kai buys a net, but it rips on the first day. He brings it back with his receipt, and the shop gives him his money back. What is that money called?", concept:"refund", opts:[
    {t:"A refund — money given back because he paid for something he did not get", ok:true, fb:"Exactly. Same word as a tax refund, same shape: money that was his, coming home. And the receipt made it possible."},
    {t:"Income — new money coming in", ok:false, fb:"It is not new money — it was already his. A refund is his own money coming back."},
    {t:"A loan from the shop", ok:false, fb:"Nothing to pay back. The shop is returning what he paid. That is a refund."}]}
};

const CFG = {
  n:34, title:"The Earning Challenge", homeSub:"Four short lessons. The yearly check-up, then a whole season of work.",
  pool:["q341a","q341b","q341c","q342a","q342b","q342c","q343a"], transfer:"q343b",
  quest:"You learned what a tax return and a refund are, then ran a whole season of earning — and bought the sail.",
  failKeys:"The keys: a tax return is the once-a-year check that the right tax was paid (in Kai’s case, too much → refund, too little → pay the rest), it must be honest, and a refund is your own money coming home — give it a job.",
  badge:" · Earning & Taxes block complete 💼",
  nextFile:"module-35-risk.html",
  passStory:'<p><strong>You now own:</strong> tax return and refund — and the whole Earning & Taxes block.</p>'+
    '<p>The next morning, Kai’s new sail goes up for the first time. It is the brightest thing in the harbor. He saved for it since before he had a bank account.</p>'+
    '<p>That afternoon the sky turns grey. The wind picks up. Tavo looks at the clouds, then at the sail.</p>'+
    '<p>"That is a beautiful sail," he says quietly. "What happens to it if the storm tears it in half?"</p>'+
    '<p class="muted">Module 35: Risk — a new block begins.</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about tax returns, refunds, or Kai’s season — or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 34 (The Earning Challenge) of a financial-literacy app — the finale of the Earning & Taxes block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, multiply, buy, sell, pay, earn, work, spend, need, save, goal, percent, bank, deposit, withdraw, balance, checking, savings, transaction, notification, interest, grow, fee, overdraft, PIN, scam, budget, cushion, borrow, loan, lend, owe, debt, debit card, credit card, credit score, due date, lender, minimum payment, employer, wage, paycheck, income, tax, take-home pay, sales tax, receipt. "+
  "From THIS module: tax return (a form filled out once a year telling the government how much you earned and how much tax was already taken; it checks whether the right amount was paid; too much taken means a refund, too little means you pay the rest, just right means nothing more) and refund (money given back to you, often because you paid too much; Kai's tax refund is his own money coming home, not a bonus, so give it a job). In real life, some tax rules (in the U.S., refundable tax credits) can pay people a refund even when they owed little or no tax; if asked, say so briefly in plain words, say rules differ by place, and suggest a trusted adult. A tax return must be honest and include all income. Fake 'tax office' messages asking for a PIN are scams. "+
  "ACCURACY: rules differ by place (who must file, deadlines, forms). Do not name specific agencies or forms, and do not give rates or amounts. Suggest a trusted adult for real tax questions. "+
  "NEUTRALITY: do not give opinions on whether taxes should be higher or lower. "+
  "STRICT RULES: never use these words (later modules): insurance, premium, deductible, risk, emergency fund, invest, stock, retirement, W-2, 1040, IRS. If the learner uses one, answer briefly in plain words and say it is coming later. "+
  "Story context: Tavo explained that once a year everyone tells the island council what they earned. Kai filled out his tax return honestly with Tavo's help and got a $6 refund. In the season challenge he chose more hours over a higher wage for fewer hours, budgeted with take-home pay ($47), left room for sales tax at the register, deleted a fake 'tax refund' message asking for his PIN, and put his refund toward his sail. He bought the sail. "+
  "Never repeat a failed explanation — switch analogies (a yearly check-up, returning a ripped net with a receipt, counting fish at the end of the season). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple question and wait.";
//@@LESSONS
/* =====================================================================
   SIMULATOR — a simple yearly tax-return card, the three outcomes, and
   a season challenge with a sail-goal progress bar (first-try = star).
===================================================================== */
function taxForm(){
  return '<div class="form"><div class="hd"><span>Island Council · Yearly tax return</span><span>Kai</span></div>'+
    '<div class="row"><span>Income from Tavo’s boat</span><span>listed ✓</span></div>'+
    '<div class="row"><span>Income from selling fish</span><span>listed ✓</span></div>'+
    '<div class="row"><span>Interest from savings</span><span>listed ✓</span></div>'+
    '<div class="row"><span>Tax already taken from paychecks</span><span>from pay slips ✓</span></div>'+
    '<div class="res"><span>Too much was taken. Refund:</span><span>$6.00</span></div></div>';
}
const SAIL=60;
let sailSaved=38, sStars=0;
function goalBar(){
  const pct=Math.min(100, sailSaved/SAIL*100);
  return '<div class="goal"><div class="lbl"><span>⛵ Sail goal</span><span>$'+sailSaved+' of $'+SAIL+'</span></div><div class="bar"><div style="width:'+pct+'%"></div></div></div>';
}

/* =====================================================================
   LESSON 1 — Once a Year
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · Once a year</div>
    <div class="recap"><strong>Kai’s story so far:</strong> A season of paychecks, taxes taken out of each one, and sales tax at the register. Then Tavo mentions: "Sometimes they give some back."</div>
    <div class="card"><p>All season, a little tax came out of every paycheck. But nobody knew for sure, while it was happening, whether it was <em>exactly</em> the right amount for the whole year.</p>
    <p>So once a year, everyone who earned money does a check-up.</p></div>
    <button onclick="next()">What kind of check-up?</button>`),
  ()=>show(`<div class="kicker">Lesson 1</div>
    ${taxForm()}
    <div class="card"><p>With Tavo’s help, Kai fills out a form listing <strong>all</strong> his income for the year, and how much tax was already taken from his pay slips.</p>
    <p>That form is a <strong>tax return</strong>. It checks whether you paid the right amount of tax. Every bit of income goes on it — honest and complete, always.</p></div>
    <button onclick="earnWord('taxreturn');next()">New word: tax return</button>`),
  ()=>show(`<div class="kicker">Lesson 1 · Three ways it can go</div>
    <div class="three">
      <div class="good"><div class="t">Too much taken</div>You get some back</div>
      <div class="bad"><div class="t">Too little taken</div>You pay the rest</div>
      <div><div class="t">Just right</div>Nothing more to do</div>
    </div>
    <div class="card"><p>Kai’s turned out to be the first kind: a little too much was taken during the season.</p>
    <p class="muted">(This is how it works on Kai\u2019s island. In real life, rules about who fills one out, and when, differ from place to place. Some places also have special tax rules that can give people money back even when they owed little or no tax. A trusted adult can help with a real one.)</p></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q341a", next),
  ()=>renderMC("q341b", next),
  ()=>renderTF("q341c", next),
];

/* =====================================================================
   LESSON 2 — Money Coming Home
===================================================================== */
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · Money coming home</div>
    <div class="recap"><strong>So far:</strong> a tax return checks whether the right amount of tax was paid.</div>
    <div class="card"><p>Because too much was taken, the island council sends Kai back $6. Money given back to you is called a <strong>refund</strong>. For Kai, it is tax he paid too much of, coming home.</p>
    <p>You get refunds in shops too — bring back a ripped net with your receipt, and they give your money back. Same word, same idea.</p></div>
    <button onclick="earnWord('refund');next()">New word: refund</button>`),
  ()=>show(`<div class="kicker">Lesson 2 · Not a bonus</div>
    <div class="card"><p>"Six free dollars!" Kai says.</p>
    <p>"Not free," Rana says. "That was <em>your</em> money all season. It is just coming home late. So treat it like every other dollar: <strong>give it a job.</strong>"</p>
    <p>And one warning. Tricksters know people are excited about refunds. A message that says <em>“You have a refund! Reply with your PIN”</em> is a scam — every time.</p></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q342a", next),
  ()=>renderMC("q342b", next),
  ()=>renderTF("q342c", next),
];

/* =====================================================================
   LESSON 3 — The Season (challenge)
===================================================================== */
const SEASON=[
  {wk:"Early season · Extra work", story:"Tavo offers 3 extra hours on Saturday at $4 an hour. The fair offers 1 hour at $6. Kai can only do one.", opts:[
    {t:"Tavo’s boat — 3 hours at $4 brings in $12", ok:true, fb:"Right. The fair’s wage is higher, but 1 hour is only $6. Hours matter as much as the wage. Half of it goes straight to the sail.", apply:()=>{ sailSaved+=6; }},
    {t:"The fair — $6 is a bigger wage", ok:false, fb:"A bigger wage, but only 1 hour: $6. Tavo’s 3 hours bring in $12."},
    {t:"Neither — extra work is never worth it", ok:false, fb:"This one fits his week (Saturday, safe, with Tavo) and brings in real money for the sail."}]},
  {wk:"Mid season · Payday", story:"Pay slip: <strong>Earned $52. Taxes −$5. Paid to you $47.</strong> Time to plan.", opts:[
    {t:"Budget with $47 — his take-home pay", ok:true, fb:"Right. Needs, then $10 to the sail, then wants — all from $47.", apply:()=>{ sailSaved+=10; }},
    {t:"Budget with $52 — what he earned", ok:false, fb:"$52 never lands in his account. Planning with it means planning to spend $5 he does not have."},
    {t:"Skip the budget this time", ok:false, fb:"The budget is what gets the sail money set aside before wants can eat it. Plan with $47."}]},
  {wk:"Market day", story:"Kai has $15. A coil of rope is tagged <strong>$15.00</strong>. Prices do not include sales tax.", opts:[
    {t:"Wait — exactly the tag is not enough", ok:true, fb:"Right. With sales tax, the total will be a little more than $15. He comes back next week with room to spare.", apply:()=>{}},
    {t:"Pay with his debit card — $15 is $15", ok:false, fb:"The total at the register will be a little more than $15 — that is an overdraft on his debit card."},
    {t:"Put it on a credit card and pay the minimum", ok:false, fb:"Kai does not have a real card — and paying the minimum would turn rope into growing debt."}]},
  {wk:"Late season · A message", story:"“ISLAND TAX OFFICE: You have a $50 refund waiting! Reply with your PIN within 1 hour to receive it.”", opts:[
    {t:"Delete it and tell Rana", ok:true, fb:"Right. It asks for his PIN, rushes him, and dangles money. A scam, every time.", apply:()=>{}},
    {t:"Reply — $50 is a lot of money", ok:false, fb:"That is exactly what the trickster is counting on. Nobody real asks for a PIN."},
    {t:"Reply, but only with his name", ok:false, fb:"Nothing goes back to a surprise message. Delete it, and ask a trusted adult."}]},
  {wk:"Tax time", story:"Kai’s tax return shows too much tax was taken. His refund: <strong>$6</strong>.", opts:[
    {t:"Give it a job: put it toward the sail", ok:true, fb:"Right. His own money came home, and he gave it the job that matters most right now.", apply:()=>{ sailSaved+=6; }},
    {t:"Leave the fish money off the form next year to get more back", ok:false, fb:"A tax return must include all income. Leaving some out is against the rules — never worth it."},
    {t:"Skip the tax return next year — too much paperwork", ok:false, fb:"It is required where he lives — and skipping it could mean missing his own refund."}]}
];
const L3=[
  ()=>{ sailSaved=38; sStars=0;
    show(`<div class="kicker">Lesson 3 · The season</div>
    <div class="recap"><strong>So far:</strong> a refund is your own money coming home — give it a job.</div>
    ${goalBar()}
    <div class="card"><p>Kai has been saving for a sail since before he had a bank account. With interest and his early paychecks, he is at $38 of $60.</p>
    <p>Five moments in the season. Get each right the first time to earn a ⭐ — and see if the sail is his by the end.</p></div>
    <button onclick="next()">Start the season</button>`); },
  ()=>{
    let i=0;
    function draw(){
      if(i>=SEASON.length){ addXP(6); next(); return; }
      const w=SEASON[i];
      const shuffled=w.opts.map((o,k)=>({o,k})).sort(()=>Math.random()-.5);
      show(`<div class="week">${w.wk}</div>
        ${goalBar()}
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
            done=true; if(first){ sStars++; addXP(1); }
            if(o.apply) o.apply();
            document.querySelector(".goal").outerHTML=goalBar();
            document.querySelectorAll("#opts .opt").forEach(b=>b.disabled=true);
            document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<SEASON.length-1?"Next":"End of season")+'</button>';
            window._n=()=>{ i++; draw(); };
            revealFB();
          } else { first=false; btn.disabled=true; }
        };
      });
    }
    draw();
  },
  ()=>{
    show(`<div class="kicker">Lesson 3 · End of season</div>
    ${goalBar()}
    <div class="stars">${"⭐".repeat(sStars)}${"☆".repeat(SEASON.length-sStars)}</div>
    <p class="muted" style="text-align:center">${sStars} of ${SEASON.length} on the first try</p>
    <div class="card"><p>Half the extra hours’ pay, the $10 set aside on payday, and the $6 refund — it all adds up. <strong>The sail is paid for.</strong></p>
    <ul class="recaplist">
      <li>✅ <strong>Chose work by total pay</strong>, not just the wage.</li>
      <li>✅ <strong>Budgeted with take-home pay.</strong></li>
      <li>✅ <strong>Left room for sales tax.</strong> No overdraft.</li>
      <li>✅ <strong>Spotted a fake tax-office scam.</strong></li>
      <li>✅ <strong>Filed an honest tax return</strong> and gave the refund a job.</li>
    </ul></div>
    <button onclick="next()">Practice</button>`); },
  ()=>renderMC("q343a", next),
];
const META=[
  {title:"Once a Year", sub:"The yearly tax check-up", emoji:"📋"},
  {title:"Money Coming Home", sub:"A refund is not a bonus", emoji:"🏠"},
  {title:"The Season", sub:"Five moments — and a sail", emoji:"⛵"},
];
