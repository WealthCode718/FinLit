//@@META
title=Sales Tax
file=module-33-sales-tax.html
placeholder=Ask about sales tax and receipts…
//@@CSS
  .tag{display:inline-block; background:#fffdf5; border:2px solid var(--sand-deep); border-radius:8px 18px 18px 8px; padding:10px 18px 10px 26px; position:relative; font-family:"Fraunces",Georgia,serif; font-weight:700; font-size:26px; margin:4px 0 10px}
  .tag:before{content:""; position:absolute; left:9px; top:50%; width:8px; height:8px; margin-top:-4px; border-radius:50%; background:var(--sand-deep)}
  .reg{background:#0e1b2c; color:#9fe0b8; border-radius:12px; padding:12px 16px; font-family:ui-monospace,Menlo,monospace; margin-bottom:12px}
  .reg .row{display:flex; justify-content:space-between; padding:3px 0}
  .reg .tot{border-top:1px dashed #3d6166; margin-top:6px; padding-top:6px; font-size:20px; font-weight:700; color:#fff}
  .rcpt{background:#fff; border:2px solid #d9e2de; border-radius:4px; padding:14px 16px; margin-bottom:12px; font-family:ui-monospace,Menlo,monospace; font-size:14px; box-shadow:0 3px 0 #d9e2de}
  .rcpt .c{text-align:center; font-weight:700; margin-bottom:8px}
  .rcpt .row{display:flex; justify-content:space-between; padding:3px 0}
  .rcpt .tot{border-top:1px dashed #999; margin-top:6px; padding-top:6px; font-weight:700}
  .rcpt .sm{text-align:center; font-size:11px; color:var(--ink-soft); margin-top:8px}
  .wallet{display:flex; gap:10px; margin-bottom:12px}
  .wallet > div{flex:1; background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:12px; text-align:center}
  .wallet .n{font-size:12px; color:var(--ink-soft); margin-bottom:2px}
  .wallet .v{font-family:"Fraunces",Georgia,serif; font-weight:700; font-size:26px}
  .sortbar .yes{background:var(--good)}
  .sortbar .no{background:var(--bad)}
//@@CONTENT
/* =====================================================================
   CONTENT — Module 33: Sales Tax
   Vocab: sales tax, receipt.
   Concept over computation: sales tax is "a little extra added at the
   register, bigger when the price is bigger." The drill never asks for
   a total — only WHETHER the money is enough, using clear cases
   (exactly-the-tag = not enough; well under the tag = enough) so the
   answer never depends on a specific rate.
   Accuracy note: in many places sales tax is added at the register and
   is not on the tag; some places have none, and some include it in the
   price. The lesson says "in many places" and the tutor says rules differ.
===================================================================== */
const VOCAB = {
  salestax:{term:"sales tax", def:"A tax added to the price when you buy something. The shop collects it and passes it to the government. In many places it is not on the tag — so the total is a little more than the price."},
  receipt:{term:"receipt", def:"A record of what you bought and what you paid — each price, the tax, and the total. Check it, and keep it in case something goes wrong."}
};

const QUESTIONS = {
  "q331a":{type:"mc", prompt:"What is sales tax?", concept:"salestax", opts:[
    {t:"A tax added to the price when you buy something", ok:true, fb:"Right. The shop adds it at the register and passes it along to the government."},
    {t:"A discount the shop gives you", ok:false, fb:"The opposite! A discount takes a little off. Sales tax adds a little on."},
    {t:"A fee your bank charges when you shop", ok:false, fb:"Not the bank. Sales tax is collected by the shop, for the government."}]},
  "q331b":{type:"mc", prompt:"Who does the shop pass the sales tax to?", concept:"salestax", opts:[
    {t:"The government — it helps pay for shared things", ok:true, fb:"Right. Same idea as the tax on Kai’s paycheck: shared things like the harbor and the school."},
    {t:"The shopkeeper keeps it, as extra pay for running the shop all day", ok:false, fb:"The shop only collects it. It gets passed along to the government."},
    {t:"The bank", ok:false, fb:"The bank has nothing to do with it. Sales tax goes to the government."}]},
  "q331c":{type:"tf", prompt:"True or false: a more expensive item usually has more sales tax added than a cheap one.", answer:true, concept:"salestax",
    good:"Right. The bigger the price, the bigger the little extra on top.",
    bad:"It usually does. Sales tax grows with the price — a bigger price means a bigger extra."},
  "q332a":{type:"mc", prompt:"Kai has exactly $5. The tag on a rope says $5.00. In a place with sales tax, what will happen at the register?", concept:"salestax", opts:[
    {t:"He will be a little short — the total is more than the tag", ok:true, fb:"Right. Exactly the tag is never quite enough when tax is added on top. Leave a little room."},
    {t:"He will have exactly enough, because the tag always shows the full price", ok:false, fb:"The tag does not include sales tax. It gets added at the register, so the total is a little more than $5."},
    {t:"He will get change back", ok:false, fb:"Change back would mean the total was LESS than $5. With sales tax it is a little more."}]},
  "q332b":{type:"mc", prompt:"What is the best habit when shopping in a place with sales tax?", concept:"salestax", opts:[
    {t:"Plan for a little more than the tag", ok:true, fb:"Right. A little room keeps you from being short at the register — and from an overdraft on your debit card."},
    {t:"Only look at the tag", ok:false, fb:"The tag is not the whole story when tax is added at the register. Plan for a little more."},
    {t:"Always bring exactly the tag price, so you do not carry extra money around", ok:false, fb:"Exactly the tag is the one amount that is guaranteed to be short. Bring a little more."}]},
  "q333a":{type:"mc", prompt:"What is a receipt?", concept:"receipt", opts:[
    {t:"A record of what you bought and what you paid", ok:true, fb:"Right. Each price, the tax, and the total, all in one place."},
    {t:"A coupon for your next visit", ok:false, fb:"Some shops print coupons, but a receipt is the record of what you just bought and paid."},
    {t:"A bill the shop gives you for things you still have to pay for", ok:false, fb:"A bill asks you to pay. A receipt shows you already did."}]},
  "q333c":{type:"mc", prompt:"Kai’s receipt shows “Bread $3.00” twice, but he only bought one loaf. What should he do?", concept:"receipt", opts:[
    {t:"Show the receipt to the shopkeeper and ask to fix it", ok:true, fb:"Right. The receipt is his proof. Checking it is the same habit as reading his feed: you can only catch a mistake if you look."},
    {t:"Throw it away — it’s only $3", ok:false, fb:"$3 is $3! And without the receipt, he has no proof. Keep it and ask."},
    {t:"Nothing — receipts are printed by a machine, so they are always right", ok:false, fb:"Mistakes happen, even at honest shops. That is exactly why you check."}]},
  "q333b":{type:"mc", transfer:true, prompt:"The ferry sign says “Ticket $4 + port tax.” At the window Kai pays a little more than $4, and the extra goes to the island to keep the dock repaired. What is this most like?", concept:"salestax", opts:[
    {t:"Sales tax — a tax added on top of the posted price, for something everyone shares", ok:true, fb:"Exactly. Different name, same shape: the sign shows the price, a tax is added on top, and it pays for something shared."},
    {t:"A discount on the ticket", ok:false, fb:"A discount would make it LESS than $4. This adds a little on top."},
    {t:"A loan from the ferry", ok:false, fb:"Nothing is borrowed. The extra is a tax added on top of the price."}]}
};

const CFG = {
  n:33, title:"Sales Tax", homeSub:"Four short lessons. Why the register says more than the tag.",
  pool:["q331a","q331b","q331c","q332a","q332b","q333a","q333c"], transfer:"q333b",
  quest:"You learned why the total is more than the tag, how to leave room for it, and why a receipt is worth checking.",
  failKeys:"The keys: sales tax is added to the price at the register (so the total is a little more than the tag), plan for a little extra, and a receipt is your record — check it and keep it.",
  nextFile:"module-34-earning-challenge.html",
  passStory:'<p><strong>You now own:</strong> sales tax and receipt.</p>'+
    '<p>The fishing season is almost over. Kai has a stack of pay slips, a folder of receipts, and a savings account that is finally close to a sail.</p>'+
    '<p>Then Tavo says something surprising. "Once a year, we all tell the island council how much we earned. And sometimes — if too much tax was taken — they give some back."</p>'+
    '<p>Kai’s eyes go wide. "Give some BACK?"</p>'+
    '<p class="muted">Module 34: The Earning Challenge.</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about sales tax or receipts — or tap a button below.";
const TUTOR_SYS = "You are the tutor inside Module 33 (Sales Tax) of a financial-literacy app, in the Earning & Taxes block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, multiply, buy, sell, pay, earn, work, spend, need, save, goal, percent, discount, bank, deposit, withdraw, balance, checking, savings, transaction, notification, interest, grow, fee, overdraft, PIN, scam, budget, cushion, borrow, loan, lend, owe, debt, debit card, credit card, credit score, due date, lender, minimum payment, employer, wage, paycheck, income, tax, take-home pay. "+
  "From THIS module: sales tax (a tax added to the price when you buy something; the shop collects it and passes it to the government; in many places it is not on the tag, so the total at the register is a little more than the price; a bigger price usually means more sales tax) and receipt (a record of what you bought and paid: each price, the tax, the total; check it for mistakes and keep it). Habit: plan for a little more than the tag; exactly the tag price is not enough where sales tax is added. "+
  "ACCURACY: rules differ by place. Some places have no sales tax; some include tax in the price on the tag. Say so if asked. Do not give specific rates. "+
  "TEACHING STYLE: concepts over calculations. Do not calculate sales tax amounts or percentages, even if asked; explain the exact math depends on where you live and redirect to the idea of leaving a little room. "+
  "NEUTRALITY: do not give opinions on whether taxes should be higher or lower. "+
  "STRICT RULES: never use these words (later modules): tax return, refund, withholding, filing, deduction, bracket, VAT, invest, stock, insurance, retirement. If the learner uses one, answer briefly in plain words and say it is coming later. "+
  "Story context: Kai took $10 to buy a net tagged $10.00, and the register said $10.60 because of sales tax. He practiced deciding whether money was enough at the register, then checked a receipt and found bread charged twice. "+
  "Never repeat a failed explanation — switch analogies (a ferry ticket plus port tax, a small extra scoop added on top). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple 'enough or not?' question and wait.";
//@@LESSONS
/* =====================================================================
   SIMULATOR — tag vs register, and a paper receipt.
===================================================================== */
function reg(lines, total){
  return '<div class="reg">'+lines.map(l=>'<div class="row"><span>'+l[0]+'</span><span>'+l[1]+'</span></div>').join('')+
    '<div class="row tot"><span>TOTAL</span><span>'+total+'</span></div></div>';
}
function receipt(lines, tax, total, note){
  return '<div class="rcpt"><div class="c">ISLAND MARKET</div>'+lines.map(l=>'<div class="row"><span>'+l[0]+'</span><span>'+l[1]+'</span></div>').join('')+
    '<div class="row"><span>Sales tax</span><span>'+tax+'</span></div>'+
    '<div class="row tot"><span>TOTAL</span><span>'+total+'</span></div>'+
    '<div class="sm">'+(note||'Paid with debit card · Thank you!')+'</div></div>';
}

/* =====================================================================
   LESSON 1 — Ten Dollars and Sixty Cents
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · Ten dollars and sixty cents</div>
    <div class="recap"><strong>Kai’s story so far:</strong> He knows where the tax on his paycheck goes. Now he is at the market with $10 of take-home pay.</div>
    <div class="card"><p>The new net has a tag:</p><div style="text-align:center"><span class="tag">$10.00</span></div></div>
    ${reg([["Fishing net","$10.00"],["Sales tax","$0.60"]],"$10.60")}
    <div class="card"><p>"But the tag says ten!" Kai says.</p>
    <p>The shopkeeper points to a small sign by the register: <em>Prices do not include sales tax.</em></p></div>
    <button onclick="next()">What is sales tax?</button>`),
  ()=>show(`<div class="kicker">Lesson 1</div>
    <div class="card"><p>Kai already knows one tax: the one taken out of his paycheck. This is a second kind.</p>
    <p><strong>Sales tax</strong> is a tax added to the price when you buy something. The shop collects it and passes it to the government — the same shared-things pot as the lighthouse.</p>
    <p>In many places it is <strong>not on the tag</strong>. It only shows up at the register. And the bigger the price, the bigger the little extra.</p>
    <p class="muted">(Some places have no sales tax, and some put it right in the price on the tag. Rules differ from place to place.)</p></div>
    ${more('<p>Why add it at the register and not on the tag? It is just how some places do it. That is why the same net can cost a little more on one island than on another.</p>'+
      '<p>In places that have sales tax, everyone who buys pays it, even kids. A tiny part of your snack money may help pay for things like the school.</p>')}
    <button onclick="earnWord('salestax');next()">New word: sales tax</button>`),
  ()=>renderMC("q331a", next),
  ()=>renderMC("q331b", next),
  ()=>renderTF("q331c", next),
];

/* =====================================================================
   LESSON 2 — Enough at the Register? (drill)
   Clear cases only: exactly-the-tag → not enough; well under → enough.
===================================================================== */
const CASES=[
  {has:10, tag:"$10.00", item:"🪢 A new net", ok:false, why:"Exactly the tag is not enough when sales tax is added on top. He would be a little short."},
  {has:10, tag:"$6.00", item:"🍞 Bread and fruit", ok:true, why:"Plenty of room. The little extra on $6 still fits inside $10."},
  {has:5, tag:"$5.00", item:"🪝 A box of hooks", ok:false, why:"Same trap — exactly the tag. The total will be a little more than $5."},
  {has:20, tag:"$12.00", item:"🩴 New sandals", ok:true, why:"Lots of room. $20 easily covers $12 plus a little tax."},
  {has:8, tag:"$8.00", item:"🧢 A sun hat", ok:false, why:"Exactly the tag again. Leave a little room for the tax."}
];
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · Leave a little room</div>
    <div class="recap"><strong>So far:</strong> sales tax is added at the register, so the total is a little more than the tag.</div>
    <div class="card"><p>Kai does not need to work out the exact tax. He just needs one rule:</p>
    <p style="text-align:center; font-size:18px"><strong>Exactly the tag is not enough.<br>Leave a little room.</strong></p>
    <p>This matters even more with a debit card: if the total is bigger than his balance, that is an overdraft.</p></div>
    ${more('<p>Why not just work it out? You could, but the amount changes from place to place, and the register is a busy spot for math.</p>'+
      '<p>A little room is easier. Bring a bit more than the tag, or pick something that costs a bit less than what you have.</p>'+
      '<p>It is the same idea as the cushion in Kai’s budget: a little extra, just in case.</p>')}
    <button onclick="next()">Enough or not? Try five</button>`),
  ()=>{
    let i=0;
    function draw(){
      if(i>=CASES.length){ addXP(5); next(); return; }
      const c=CASES[i];
      show(`<div class="kicker">Enough at the register? · ${i+1} of ${CASES.length}</div>
        <div class="wallet"><div><div class="n">Kai has</div><div class="v">$${c.has}</div></div><div><div class="n">${c.item}</div><div class="v">${c.tag}</div></div></div>
        <div class="card"><p style="margin:0">Prices here do not include sales tax. Is Kai’s money enough?</p></div>
        <div class="sortbar"><button class="yes" id="sYes">✅ Enough</button><button class="no" id="sNo">✋ Not enough</button></div>
        <div id="fb"></div><div id="cont"></div>`);
      let done=false;
      function pick(saysYes){
        if(done) return;
        const ok = saysYes===c.ok;
        document.getElementById("fb").innerHTML='<div class="feedback '+(ok?'good':'bad')+'">'+(ok?'Right — ':'Not quite. ')+c.why+(ok?'':' Try again.')+'</div>';
        revealFB();
        if(ok){
          done=true; addXP(1);
          document.getElementById("sYes").disabled=true; document.getElementById("sNo").disabled=true;
          document.getElementById("cont").innerHTML=(i===CASES.length-1?more('<p>See the pattern? Every “not enough” was exactly the tag. Every “enough” had plenty of room.</p>'+
            '<p>When it is close, it is fine to ask for the total before you pay, or to put one thing back. Grown-ups do it all the time.</p>'):'')+'<button onclick="window._n()">'+(i<CASES.length-1?"Next":"Done")+'</button>';
          window._n=()=>{ i++; draw(); };
          revealFB();
        }
      }
      document.getElementById("sYes").onclick=()=>pick(true);
      document.getElementById("sNo").onclick=()=>pick(false);
    }
    draw();
  },
  ()=>renderMC("q332a", next),
  ()=>renderMC("q332b", next),
];

/* =====================================================================
   LESSON 3 — The Receipt
===================================================================== */
const L3=[
  ()=>show(`<div class="kicker">Lesson 3 · The little paper</div>
    <div class="recap"><strong>So far:</strong> leave a little room for sales tax.</div>
    ${receipt([["Fishing net","$10.00"]],"$0.60","$10.60")}
    <div class="card"><p>After Kai pays, the shopkeeper hands him a slip of paper. He almost drops it in the bin.</p>
    <p>"Keep that," Rana says. "It’s your <strong>receipt</strong> — a record of what you bought and what you paid. Each price, the tax, the total."</p>
    <p>If the net rips on day one, the receipt proves he bought it here. And it lets him check the shop got it right.</p></div>
    ${more('<p>Many shops can send a receipt to your phone instead of paper. It still counts as a receipt.</p>'+
      '<p>Some grown-ups keep a month of receipts in one envelope. Then they match them to the transactions in their bank app.</p>'+
      '<p>Shops often ask to see the receipt if you want to bring something back.</p>')}
    <button onclick="earnWord('receipt');next()">New word: receipt</button>`),
  ()=>show(`<div class="kicker">Lesson 3 · Check it</div>
    ${receipt([["Bread","$3.00"],["Bread","$3.00"],["Fruit","$2.00"]],"$0.48","$8.48")}
    <div class="card"><p>The next week, Kai buys one loaf of bread and some fruit. He reads the receipt the way he reads his feed — line by line.</p>
    <p>Something is off. Can you spot it?</p></div>
    <button onclick="next()">I think I see it</button>`),
  ()=>renderMC("q333c", next),
  ()=>renderMC("q333a", next),
];
const META=[
  {title:"Ten Dollars and Sixty Cents", sub:"Why the register says more than the tag", emoji:"🏷️"},
  {title:"Leave a Little Room", sub:"Enough at the register? Try five", emoji:"🧮"},
  {title:"The Little Paper", sub:"Read it, check it, keep it", emoji:"🧾"},
];
