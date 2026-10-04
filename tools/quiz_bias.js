// Quiz answer-pattern check. Run from repo root: node tools/quiz_bias.js [moduleNumbers...]
// For each module: how often the correct option is the (sole or tied) longest, and true/false balance.
const fs=require('fs');
const want=process.argv.slice(2).map(Number);
const files=fs.readdirSync('.').filter(f=>/^module-\d+-/.test(f)).sort((a,b)=>+a.split('-')[1]-+b.split('-')[1]);
let L=0,T=0,tt=0,tf=0;
for(const f of files){ const n=+f.split('-')[1]; if(want.length&&!want.includes(n)) continue;
  const s=fs.readFileSync(f,'utf8'); const m=s.match(/const QUESTIONS\s*=\s*(\{[\s\S]*?\n\});/); const Q=eval('('+m[1]+')');
  let l=0,t=0,tru=0,fal=0; const flag=[];
  for(const k in Q){ const q=Q[k];
    if(q.type==='tf'){ q.answer?tru++:fal++; continue; }
    if(!q.opts) continue; t++;
    const lens=q.opts.map(o=>o.t.length); const ci=q.opts.findIndex(o=>o.ok); const mx=Math.max(...lens);
    if(lens[ci]===mx){ l++; flag.push(k+'('+lens.join('/')+')'); } }
  L+=l; T+=t; tt+=tru; tf+=fal;
  console.log('M'+n+': correct-is-longest '+l+'/'+t+'  tf true/false '+tru+'/'+fal+(flag.length?'  ['+flag.join(' ')+']':''));
}
console.log('TOTAL correct-is-longest '+L+'/'+T+' ('+Math.round(100*L/T)+'%)  tf true/false '+tt+'/'+tf);
