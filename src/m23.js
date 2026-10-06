//@@META
title=Protecting Your Money
file=module-23-protecting-your-money.html
placeholder=Ask about PINs and scams…
//@@CSS
  .msgcard{background:#fff; border:2px solid #d9e2de; border-radius:14px; padding:14px 16px; margin-bottom:12px; font-size:16px}
  .msgcard .from{font-size:12px; letter-spacing:.08em; text-transform:uppercase; color:var(--ink-soft); font-weight:700; margin-bottom:4px}
  .sortbar .real{background:var(--good)}
  .sortbar .fake{background:var(--bad)}
  .signs{list-style:none; margin:0 0 4px}
  .signs li{padding:8px 0 8px 30px; position:relative; border-bottom:1px solid #eef2f0}
  .signs li:last-child{border-bottom:none}
  .signs li:before{content:"🚩"; position:absolute; left:0}
  .steps{counter-reset:s; list-style:none}
  .steps li{counter-increment:s; padding:8px 0 8px 36px; position:relative}
  .steps li:before{content:counter(s); position:absolute; left:0; top:7px; width:26px; height:26px; border-radius:50%; background:var(--shell); color:#fff; font-weight:700; font-size:14px; display:flex; align-items:center; justify-content:center}
//@@CONTENT
/* =====================================================================
   CONTENT — Module 23: Protecting Your Money
   Vocab: PIN, scam.
   Picks up the M22 cliffhanger (a "your account is LOCKED" message).
   Concept-first: the learner learns to RECOGNIZE (a strong PIN, the
   warning signs of a scam, what to do first) — no math at all.
   Safety note for the tutor: it must never ask for, or accept, a real PIN.
===================================================================== */
const VOCAB = {
  pin:{term:"PIN", def:"A secret number only you know. It proves to the bank that it is really you. Never tell it to anyone — the real bank will never ask for it."},
  scam:{term:"scam", def:"A trick where someone pretends to be someone they are not, to get your money or your secrets. Warning signs: they rush you, ask for your PIN, or promise something too good to be true."}
};

const QUESTIONS = {
  "q231a":{type:"mc", prompt:"What is a PIN?", concept:"pin", opts:[
    {t:"A secret number that proves to the bank it is really you", ok:true, fb:"Right. It works like a key. Anyone who has it can get into your account — which is exactly why it stays secret."},
    {t:"The number on the front of the bank building, so you can find the right one", ok:false, fb:"Nope — anyone can see that. A PIN is the opposite: a number ONLY you know."},
    {t:"Your balance, written in code", ok:false, fb:"Your balance is how much money you have. A PIN is a secret number that proves you are you."}]},
  "q231b":{type:"mc", prompt:"Which of these is the best PIN for Kai?", concept:"pin", opts:[
    {t:"8315", ok:true, fb:"Right. No pattern, not his birthday, not a number anyone could guess by knowing him."},
    {t:"1234", ok:false, fb:"That is the first number a trickster would try! Easy to remember means easy to guess."},
    {t:"0412 — his birthday", ok:false, fb:"Lots of people know Kai’s birthday. A good PIN is not connected to anything about you."},
    {t:"0000", ok:false, fb:"Four of the same number is one of the most-guessed PINs there is. Pick something with no pattern."}]},
  "q231c":{type:"tf", prompt:"True or false: it is fine to tell your best friend your PIN, as long as you trust them.", answer:false, concept:"pin",
    good:"Right. A PIN is for you only. Even a great friend could lose it, say it out loud, or have their phone taken.",
    bad:"Even a friend you trust should not have it. The moment a second person knows your PIN, it is no longer a secret you control."},
  "q232a":{type:"mc", prompt:"What is a scam?", concept:"scam", opts:[
    {t:"A trick where someone pretends, to get your money or secrets", ok:true, fb:"Right. The pretending is the heart of it — a fake bank, a fake prize, even a fake friend."},
    {t:"A fee the bank charges each month", ok:false, fb:"A fee is a real charge from your real bank. A scam is a trick from someone pretending."},
    {t:"Any message from a number you do not know, even if it only says hello", ok:false, fb:"A message from a new number can be fine. A scam is one that is pretending, to trick you out of money or secrets."}]},
  "q232b":{type:"mc", prompt:"Which of these is a warning sign of a scam?", concept:"scam", opts:[
    {t:"It rushes you: “Reply in the next 10 minutes or lose everything!”", ok:true, fb:"Right. Tricksters rush you so you do not stop to think or ask someone. Real banks give you time."},
    {t:"It tells you a transaction that you really made", ok:false, fb:"That is a normal notification — just telling you what already happened. It is not asking you for anything."},
    {t:"It comes during the day", ok:false, fb:"The time of day tells you nothing. Look for rushing, asking for your PIN, or a prize that is too good to be true."}]},
  "q232c":{type:"tf", prompt:"True or false: the real bank might send you a message asking you to reply with your PIN.", answer:false, concept:"scam",
    good:"Right. The real bank will NEVER ask for your PIN. Any message that does is a scam — every single time.",
    bad:"Never. The real bank already knows it is you. A message asking for your PIN is a scam, every single time."},
  "q233a":{type:"mc", prompt:"Kai sees “−$7.00 Unknown shop” in his feed. He never went there. What should he do FIRST?", concept:"scam", opts:[
    {t:"Tell a trusted adult and contact the bank right away", ok:true, fb:"Right. Fast is what matters. The sooner the bank knows, the more it can usually help."},
    {t:"Wait a month and see if it happens again", ok:false, fb:"Waiting lets a problem grow. Speaking up fast is the whole trick — the bank can usually help more when you report quickly."},
    {t:"Nothing — it is only $7", ok:false, fb:"A strange transaction is a signal that someone else may be using your account. Small or not, tell someone right away."}]},
  "q233c":{type:"mc", prompt:"How should Kai contact his bank about a problem?", concept:"scam", opts:[
    {t:"Through his bank app, or the number he already knows", ok:true, fb:"Right. Start from something YOU already trust. That way you know you are really talking to your bank."},
    {t:"By tapping the link in the surprise message", ok:false, fb:"That link could lead straight to the trickster. Always go to your bank the way you already know."},
    {t:"By replying to the message that said his account was locked — it has the details", ok:false, fb:"That message was the scam! Replying talks to the trickster, not the bank."}]},
  "q233b":{type:"mc", transfer:true, prompt:"A stranger at the harbor says, “I am from the island council. Give me the key to your family’s boat shed so I can check it — quickly!” What should Kai do?", concept:"scam", opts:[
    {t:"Keep the key and check with a trusted adult first", ok:true, fb:"Exactly. Same shape as a scam message: pretending to be someone official, asking for the key, and rushing. Different place, same trick."},
    {t:"Hand it over — the council is important", ok:false, fb:"Anyone can SAY they are from the council. Asking for a key and rushing you are the same warning signs as a scam message."},
    {t:"Hand it over, but only after they show a paper with the council’s name on it", ok:false, fb:"Anyone can make a paper with a name on it. The warning signs are still there: a stranger, a key, and a rush."}]}
};

const CFG = {
  n:23, title:"Protecting Your Money", homeSub:"Four short lessons. Your secret number, and how to spot a trick.",
  pool:["q231a","q231b","q231c","q232a","q232b","q232c","q233a","q233c"], transfer:"q233b",
  quest:"You learned to keep your PIN secret, spot a scam, and act fast when something looks wrong.",
  failKeys:"The keys: your PIN is for you only, the real bank never asks for it, scams rush you or promise too much, and if something looks wrong you tell someone fast.",
  nextFile:"module-24-banking-challenge.html",
  passStory:'<p><strong>You now own:</strong> PIN and scam — and Kai’s account is exactly as safe as the day he opened it.</p>'+
    '<p>Kai has come a long way since the tin under the floorboard. A bank. A balance he can read. Checking and savings. His phone. Interest. Fees he knows how to dodge. And now, a secret no trickster can get.</p>'+
    '<p>Rana grins. "Ready to put it all together? One whole month. Every choice is yours."</p>'+
    '<p class="muted">Module 24: The Banking Challenge.</p>'
};

const TUTOR_HELLO = "Hi! Ask me anything about keeping your PIN safe or spotting a scam — or tap a button below. (Never type your real PIN here or anywhere!)";
const TUTOR_SYS = "You are the tutor inside Module 23 (Protecting Your Money) of a financial-literacy app, in the Banking block. The learner may be a child or an adult. "+
  "They know from earlier modules: money, dollar, cent, add, subtract, buy, sell, pay, earn, spend, need, save, goal, percent, bank, deposit, withdraw, balance, checking, savings, transaction, notification, interest, grow, fee, overdraft. "+
  "From THIS module: PIN (a secret number only you know that proves to the bank it is you; never share it, not even with friends; avoid easy ones like 1234, 0000 or a birthday) and scam (a trick where someone pretends to be someone they are not to get your money or secrets; warning signs: rushing you, asking for your PIN, a prize too good to be true, a link or number you do not know, a 'friend' with a new number asking for money). "+
  "What to do when something looks wrong: tell a trusted adult, contact the bank through the app or number you already know (never a link or number from the surprise message), and change your PIN. Acting fast helps. "+
  "SAFETY RULE — highest priority: never ask for, repeat, or accept a real PIN, account number, or personal details. If the learner types something that looks like a real PIN or private info, kindly tell them not to share it anywhere, including here, and do not repeat it. "+
  "TEACHING STYLE: concepts, no math needed. "+
  "STRICT RULES: never use these words (later modules): borrow, loan, lend, credit, debt, owe, APR, rate, cushion, budget, invest, tax, insurance, identity theft. If the learner uses one, answer briefly in plain words and say it is coming later. "+
  "Story context: Kai got a message saying 'FinLit Bank: Your account is LOCKED. Reply with your secret number in 10 minutes'. Rana explained PINs, then scams, and Kai sorted real notifications from scam messages. Later he spotted a $7 'Unknown shop' transaction he never made and learned to tell an adult and contact the bank fast. "+
  "Never repeat a failed explanation — switch analogies (a house key, a stranger in a costume, a fishing lure that looks like food). Keep answers under 80 words, warm, honest, never mark wrong ideas right. If asked 'Quiz me', ask ONE simple question like 'Real or scam?' with a short example message, and wait.";
//@@LESSONS
/* =====================================================================
   SIMULATOR — M23 has no balance math. The "simulator" is Kai's phone
   inbox: learners sort real bank notifications from scam messages.
===================================================================== */
function msgCard(from, text){
  return '<div class="msgcard"><div class="from">'+from+'</div>'+text+'</div>';
}
function feed(rows){
  let h='<div class="phone"><div class="pbar"><span>FinLit Bank</span><span>Checking</span></div><div class="feed">';
  rows.forEach(r=>{
    h+='<div class="fitem"'+(r.flag?' style="background:#faf0ee"':'')+'><span><span class="day">'+r.day+'</span><br>'+r.label+'</span>'+
       '<span class="amt'+(r.amt<0?' out':'')+'">'+(r.amt<0?'−':'+')+'$'+Math.abs(r.amt).toFixed(2)+'</span></div>';
  });
  return h+'</div></div>';
}

/* =====================================================================
   LESSON 1 — The Secret Number
===================================================================== */
const L1=[
  ()=>show(`<div class="kicker">Lesson 1 · The secret number</div>
    <div class="recap"><strong>Kai’s story so far:</strong> He never goes below zero anymore. Then a message arrives, late at night.</div>
    ${msgCard("Message · 11:48 pm","FinLit Bank: Your account is LOCKED. Reply with your secret number in the next 10 minutes or lose everything!")}
    <div class="card"><p>Kai’s heart jumps. He almost replies. Instead, he runs to Rana’s hut with his phone.</p>
    <p>"Before we talk about that message," Rana says, "tell me — what is the secret number it wants?"</p></div>
    <button onclick="next()">The number Kai types to open his app</button>`),
  ()=>show(`<div class="kicker">Lesson 1</div>
    <div class="scene">🔐📱<div class="cap">Every time Kai opens his bank app, it asks for four numbers only he knows.</div></div>
    <div class="card"><p>That is his <strong>PIN</strong> — a secret number that proves to the bank it is really him.</p>
    <p>Think of it like the key to the tin, except the tin now holds everything. Anyone who has the PIN can get in.</p>
    <p>So the PIN has one job: <strong>stay secret</strong>. Not for friends. Not for anyone who says they are from the bank. Not even for someone you really like.</p></div>
    ${more('<p>Why are four numbers enough? There are thousands of ways to mix them. And most banks stop someone after a few wrong tries.</p>'+
      '<p>The real danger is not guessing. It is someone <strong>seeing</strong> or <strong>being told</strong> the PIN.</p>'+
      '<p>So when Kai types it, he turns his screen away or covers it with his other hand. Even when only friends are nearby.</p>')}
    <button onclick="earnWord('pin');next()">New word: PIN</button>`),
  ()=>show(`<div class="kicker">Lesson 1 · A good PIN</div>
    <div class="card"><p>Tricksters guess the easy ones first. So a good PIN is:</p>
    <ul style="list-style:none; margin-bottom:10px">
      <li style="padding:6px 0">❌ &nbsp;Not a pattern like 1234 or 0000</li>
      <li style="padding:6px 0">❌ &nbsp;Not your birthday or anything people know about you</li>
      <li style="padding:6px 0">✅ &nbsp;Random-looking — and only in your head</li>
    </ul>
    <p>Easy to guess means easy to steal.</p></div>
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q231a", next),
  ()=>renderMC("q231b", next),
  ()=>renderTF("q231c", next),
];

/* =====================================================================
   LESSON 2 — Real or Scam? (sorting simulator)
===================================================================== */
const INBOX=[
  {from:"FinLit Bank", text:"Money in: $10.00 — Market morning. Balance now $22.00.", scam:false,
   why:"Real. It only tells Kai something that already happened. It asks for nothing."},
  {from:"Unknown number", text:"CONGRATULATIONS! You WON $500! Send $5 today to claim your prize.", scam:true,
   why:"Scam. Kai never entered anything, and he has to pay to get a “prize”. Too good to be true."},
  {from:"Unknown number", text:"FinLit Bank: Your account is LOCKED. Reply with your PIN in 10 minutes!", scam:true,
   why:"Scam. It asks for the PIN AND rushes him. The real bank never asks for a PIN."},
  {from:"FinLit Bank", text:"Money out: $3.00 — Bread. Balance now $19.00.", scam:false,
   why:"Real. A plain notification about a transaction Kai really made."},
  {from:"New number", text:"Hi it’s Tavo!! Lost my phone, this is my new number. Can you send me $20 fast? Don’t tell anyone.", scam:true,
   why:"Scam. Someone pretending to be a friend, asking for money, rushing, AND asking for secrecy. Kai should ask Tavo in person."},
  {from:"FinLit Bank", text:"Your paper statement is now turned off. You can read every transaction in the app.", scam:false,
   why:"Real. It confirms the switch Kai made himself in Module 22, and asks for nothing."}
];
const L2=[
  ()=>show(`<div class="kicker">Lesson 2 · Too good to be true</div>
    <div class="recap"><strong>So far:</strong> a PIN is Kai’s secret number, and it stays secret.</div>
    ${msgCard("Message · 11:48 pm","FinLit Bank: Your account is LOCKED. Reply with your secret number in the next 10 minutes or lose everything!")}
    <div class="card"><p>"So," Rana says. "This message wants your PIN. What do you think now?"</p>
    <p>Kai stares at it. "The real bank already knows it’s me. Why would it ask?"</p>
    <p>"It wouldn’t. That message is a <strong>scam</strong> — a trick where someone pretends to be someone they are not, to get your money or your secrets."</p></div>
    ${more('<p>Why do scams work on smart people? They go after feelings. Scared feelings, like “you will lose everything!” Or excited ones, like “you won a prize!”</p>'+
      '<p>Big feelings make us want to act fast, before we think.</p>'+
      '<p>Kai did the smartest thing: he stopped, and he showed a trusted adult before doing anything.</p>')}
    <button onclick="earnWord('scam');next()">New word: scam</button>`),
  ()=>show(`<div class="kicker">Lesson 2 · The warning signs</div>
    <div class="card"><p>Scams wear different costumes, but they usually give themselves away:</p>
    <ul class="signs">
      <li><strong>They ask for your PIN</strong> or another secret.</li>
      <li><strong>They rush you</strong> — "10 minutes!", "right now!"</li>
      <li><strong>Too good to be true</strong> — a prize you never tried to win.</li>
      <li><strong>They pretend</strong> — to be your bank, or even a friend.</li>
    </ul>
    <p style="margin-top:10px">Kai’s real notifications from Module 20 just tell him what happened. They never ask him for anything.</p></div>
    <button onclick="next()">Sort Kai’s inbox</button>`),
  ()=>{
    let i=0;
    function draw(){
      if(i>=INBOX.length){ addXP(6); next(); return; }
      const m=INBOX[i];
      show(`<div class="kicker">Real or scam? · ${i+1} of ${INBOX.length}</div>
        ${msgCard(m.from, m.text)}
        <div class="sortbar"><button class="real" id="sReal">✅ Real</button><button class="fake" id="sScam">🚩 Scam</button></div>
        <div id="fb"></div><div id="cont"></div>`);
      let done=false;
      function pick(saysScam){
        if(done) return;
        const ok = saysScam===m.scam;
        document.getElementById("fb").innerHTML='<div class="feedback '+(ok?'good':'bad')+'">'+(ok?'Right — ':'Not quite. ')+m.why+(ok?'':' Try again.')+'</div>';
        revealFB();
        if(ok){
          done=true; addXP(1);
          document.getElementById("sReal").disabled=true; document.getElementById("sScam").disabled=true;
          document.getElementById("cont").innerHTML='<button onclick="window._n()">'+(i<INBOX.length-1?"Next message":"Done")+'</button>';
          if(i===INBOX.length-1) document.getElementById("cont").innerHTML=more('<p>Did you notice? The real messages only <strong>told</strong> Kai something. The scams all <strong>wanted</strong> something: money, a PIN, or speed.</p>'+
            '<p>That one question sorts most messages: <em>“Is this asking me to do something?”</em></p>'+
            '<p>Even a message from a friend’s name can be a costume. When money is asked for, check with the real person, face to face.</p>')+document.getElementById("cont").innerHTML;
          window._n=()=>{ i++; draw(); };
          revealFB();
        }
      }
      document.getElementById("sReal").onclick=()=>pick(false);
      document.getElementById("sScam").onclick=()=>pick(true);
    }
    draw();
  },
  ()=>renderMC("q232a", next),
  ()=>renderMC("q232b", next),
  ()=>renderTF("q232c", next),
];

/* =====================================================================
   LESSON 3 — When Something Looks Wrong
===================================================================== */
const L3=[
  ()=>show(`<div class="kicker">Lesson 3 · When something looks wrong</div>
    <div class="recap"><strong>So far:</strong> Kai can spot a scam by its warning signs.</div>
    ${feed([{day:"Tue",label:"Bread",amt:-3},{day:"Wed",label:"Helping Tavo",amt:6},{day:"Thu",label:"Unknown shop",amt:-7,flag:true}])}
    <div class="card"><p>A week later, Kai is reading his feed like always. Bread — yes. Helping Tavo — yes.</p>
    <p><strong>Unknown shop, −$7.00?</strong> Kai has never been there.</p>
    <p>Remember Module 20: <em>you can only notice something is wrong if you look</em>. Kai looked. Now what?</p></div>
    <button onclick="next()">What Kai does</button>`),
  ()=>show(`<div class="kicker">Lesson 3 · Three steps, fast</div>
    <div class="card"><ol class="steps">
      <li><strong>Tell a trusted adult.</strong> Kai goes straight to Rana. Nobody should handle this alone.</li>
      <li><strong>Contact the bank — the way you already know.</strong> Through the app he already has, or the bank’s number he already knows. Never through a link or number in a surprise message.</li>
      <li><strong>Change the PIN.</strong> If someone might know the old secret, make a new one.</li>
    </ol>
    <p style="margin-top:8px">Speed matters. When you speak up fast, the bank can usually do much more to help.</p></div>
    ${more('<p>Why not just tap the link in the message? A scam link can open a page that looks <strong>exactly</strong> like the bank, with the same colors and logo. It is a costume.</p>'+
      '<p>If Kai types his PIN there, it goes straight to the trickster.</p>'+
      '<p>The app Kai already has, or a number he already knows, cannot be swapped out by a stranger’s message. That is why it is safe.</p>')}
    <button onclick="next()">What happened next?</button>`),
  ()=>show(`<div class="kicker">Lesson 3</div>
    <div class="notif"><span class="bell">🔔</span><span><strong>FinLit Bank</strong><br>Money in: $7.00 — Returned: Unknown shop. Balance now $22.00.</span></div>
    <div class="card"><p>Because Kai looked, and spoke up the same day, the bank sorted it out and put his $7 back.</p>
    <p>Looking, keeping the PIN secret, and acting fast — those three habits protect Kai’s money better than any lock on any tin.</p></div>
    ${more('<p>Will a bank always give the money back? Not always. Each bank has its own rules, and they are different in different places. Ask a trusted adult how your bank handles it.</p>'+
      '<p>But one thing is true almost everywhere: the sooner you speak up, the better your chances.</p>'+
      '<p>Waiting a month makes it much harder to sort out.</p>')}
    <button onclick="next()">Practice</button>`),
  ()=>renderMC("q233a", next),
  ()=>renderMC("q233c", next),
];
const META=[
  {title:"The Secret Number", sub:"What a PIN is, and what makes a good one", emoji:"🔐"},
  {title:"Too Good to Be True", sub:"Real message or scam? Sort Kai’s inbox", emoji:"🚩"},
  {title:"When Something Looks Wrong", sub:"Three steps, fast", emoji:"🛟"},
];
