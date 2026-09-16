import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Building2, Home, PiggyBank, Shield, Umbrella, TrendingUp, TrendingDown, GitFork, Mountain, Gauge, Coins, Heart, Trophy, CloudRain, Banknote, ShoppingCart, Sparkles, House, ArrowUpRight, ArrowDownRight, WalletCards } from 'lucide-react';
import { getPlayerAvatar } from '../lib/financeGameScene';

export type FinanceGameSceneId = 'budget-master'|'stock-market-simulator'|'save-or-spend'|'credit-score-climb'|'rent-vs-buy'|'retirement-countdown'|'emergency-fund-builder'|'insurance-matcher';
type Theme={sky:string;ground:string;title:string;subtitle:string;icon:React.ComponentType<any>};
const themes:Record<FinanceGameSceneId,Theme>={
 'budget-master':{sky:'#63b7c7',ground:'#43884b',title:'Budget Town',subtitle:'Your spending choices move the world',icon:Home},
 'stock-market-simulator':{sky:'#0b1530',ground:'#172848',title:'Market Arena',subtitle:'Trade, watch prices move, and react in real time',icon:TrendingUp},
 'save-or-spend':{sky:'#789fb5',ground:'#4f7a51',title:'Decision Road',subtitle:'Your choice sends the player down a different path',icon:GitFork},
 'credit-score-climb':{sky:'#708ca3',ground:'#506c4d',title:'Credit Mountain',subtitle:'Better decisions push the player toward the summit',icon:Mountain},
 'rent-vs-buy':{sky:'#79a3b8',ground:'#657b57',title:'Home Valley',subtitle:'Affordability changes where the player goes',icon:Building2},
 'retirement-countdown':{sky:'#e29a70',ground:'#a87848',title:'Retirement Coast',subtitle:'Contributions grow the nest egg',icon:PiggyBank},
 'emergency-fund-builder':{sky:'#5e7284',ground:'#465e65',title:'Storm Shelter',subtitle:'Savings strengthen the protection around you',icon:Shield},
 'insurance-matcher':{sky:'#99cbd4',ground:'#6d9562',title:'Protection Park',subtitle:'Coverage changes the safety around the player',icon:Umbrella}
};

type Live={value:number;score:number;values:number[];message:string;positive:boolean;tick:number;marketMove:number;action:'idle'|'buy'|'sell'|'advance'};
const clamp=(n:number,min:number,max:number)=>Math.max(min,Math.min(max,n));
const money=(s:string)=>Number(s.replace(/[$,]/g,''));

function read(root:HTMLElement|null,game:FinanceGameSceneId,tick=0,action:Live['action']='idle'):Live{
 if(!root)return{value:35,score:0,values:[],message:'Start the game — your actions will move the world.',positive:true,tick,marketMove:0,action};
 const ranges=Array.from(root.querySelectorAll('input[type="range"]')) as HTMLInputElement[];
 const values=ranges.map(x=>Number(x.value)||0);
 const text=root.innerText.replace(/\s+/g,' ');
 const scoreMatch=text.match(/(?:score|credit score|financial health)[^\d-]{0,30}(-?\d{1,3})/i);
 const round=Number(text.match(/Round\s+(\d+)/i)?.[1]||0);
 let value=35,score=scoreMatch?Number(scoreMatch[1]):0,message='Make a move — the world reacts instantly.',positive=true,marketMove=0;
 if(game==='stock-market-simulator'){
   const portfolioMatch=text.match(/Portfolio\s+\$([\d,]+(?:\.\d+)?)/i);
   const cashMatch=text.match(/Cash\s+\$([\d,]+(?:\.\d+)?)/i);
   const portfolio=portfolioMatch?money(portfolioMatch[1]):10000;
   const cashValue=cashMatch?money(cashMatch[1]):10000;
   const changeMatch=text.match(/([+-]\d+(?:\.\d+)?)%/);
   marketMove=changeMatch?Number(changeMatch[1]):0;
   const inferredProfit=portfolio>=10000?portfolio-10000:0;
   score=scoreMatch?Number(scoreMatch[1]):Math.max(0,Math.round((inferredProfit/10000)*100));
   value=clamp(50+marketMove*7+score*1.5,8,92);
   positive=marketMove>=0&&score>=0;
   const lastTrade=text.match(/(?:Bought|Sold)\s+\d+\s+\w+\s+@\s+\$[\d.]+/i)?.[0];
   message=action==='buy'?`${lastTrade||'BUY'} — position opened. Watch the market.`:action==='sell'?`${lastTrade||'SELL'} — position reduced. Cash is back in play.`:marketMove>0?`Market is moving UP ${marketMove.toFixed(2)}% — Bull is charging.`:marketMove<0?`Market is moving DOWN ${Math.abs(marketMove).toFixed(2)}% — Bear is taking control.`:`Round ${round||1} — choose a stock, then advance the market.`;
 } else if(game==='budget-master'){
   const total=values.reduce((a,b)=>a+b,0),save=values[3]??10;value=clamp(Math.round(save*2.8+(total===100?20:0)),0,100);score=Math.round(value);message=total===100?`Balanced! Savings ${save}% — the town is thriving.`:total>100?`${total-100}% over budget — expenses are pushing back.`:`${100-total}% still unassigned — keep balancing.`;positive=total<=100&&save>=10;
 } else if(game==='credit-score-climb'){value=clamp(score||values[0]||35,0,100);message=`Credit climb ${Math.round(value)} — the player is moving toward the next checkpoint.`;positive=value>=50;}
 else if(game==='save-or-spend'){value=clamp(45+round*5,20,100);score=round;message=round?`Decision ${round} locked — the player is following your path.`:'Choose SAVE or SPEND to move the player.';}
 else if(game==='rent-vs-buy'){value=clamp(values[0]||score||50,20,100);score=Math.round(value);message='Your affordability numbers are driving the home route live.';positive=value>=50;}
 else if(game==='retirement-countdown'){value=clamp(values[0]||50,20,100);score=Math.round(value);message=`Nest egg ${Math.round(value)}% — contributions are changing the future.`;}
 else if(game==='emergency-fund-builder'){value=clamp(values[0]||50,15,100);score=Math.round(value);message=`Shield strength ${Math.round(value)}% — savings are your storm barrier.`;positive=value>=50;}
 else {value=clamp(values[0]||55,20,100);score=Math.round(value);message=`Protection ${Math.round(value)}% — coverage is changing the umbrella.`;positive=value>=50;}
 return{value,score,values,message,positive,tick,marketMove,action};
}

function Player({live}:{live:Live}){
 const jump=live.action!=='idle';
 return <div className="absolute bottom-10 z-30 transition-all duration-500 ease-out" style={{left:`${8+live.value*.7}%`,transform:`translateX(-50%) translateY(${jump?-12:0}px)`}}>
   <div className="relative">
    <div className={`absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-black text-white shadow-lg ${live.positive?'bg-emerald-700':'bg-rose-700'}`}>{live.action==='buy'?'BOUGHT!':live.action==='sell'?'SOLD!':live.positive?'NICE MOVE!':'WATCH OUT!'}</div>
    <div className={`rounded-full border-4 border-white/50 bg-white/15 p-1 shadow-2xl backdrop-blur ${jump?'animate-bounce':''}`}><img src={getPlayerAvatar('Player',96)} alt="Player" className="h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24"/></div>
   </div>
 </div>;
}

function StockWorld({live}:{live:Live}){
 const up=live.marketMove>=0;
 return <>
  <div className="absolute inset-0 bg-[#0b1530]"/>
  <div className="absolute inset-x-0 top-16 h-40 opacity-80">
   <svg viewBox="0 0 900 220" className="h-full w-full" preserveAspectRatio="none">
    <defs><linearGradient id="marketFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#34d399" stopOpacity=".35"/><stop offset="1" stopColor="#34d399" stopOpacity="0"/></linearGradient></defs>
    <path d={up?'M0 175 C100 150 120 185 210 125 S350 150 440 80 S570 125 660 62 S790 90 900 25':'M0 55 C100 70 120 35 210 105 S350 80 440 145 S570 100 660 160 S790 130 900 195'} fill="none" stroke={up?'#34d399':'#fb7185'} strokeWidth="7" strokeLinecap="round" strokeDasharray="16 9"><animate attributeName="stroke-dashoffset" from="0" to="-50" dur=".8s" repeatCount="indefinite"/></path>
    <path d={up?'M0 175 C100 150 120 185 210 125 S350 150 440 80 S570 125 660 62 S790 90 900 25':'M0 55 C100 70 120 35 210 105 S350 80 440 145 S570 100 660 160 S790 130 900 195'} fill="none" stroke={up?'url(#marketFill)':'rgba(251,113,133,.18)'} strokeWidth="30" strokeLinecap="round" opacity=".35"/>
   </svg>
  </div>
  <div className="absolute left-[8%] top-[23%] transition-transform duration-500" style={{transform:`translateY(${up?-12:12}px) rotate(${up?-4:4}deg)`}}><div className={`flex h-16 w-16 items-center justify-center rounded-2xl border-2 ${up?'border-emerald-300/50 bg-emerald-400/15':'border-rose-300/50 bg-rose-400/15'} shadow-xl`}><TrendingUp className={`h-10 w-10 ${up?'text-emerald-300':'text-rose-300'}`}/></div><div className="mt-1 text-center text-[10px] font-black text-white/80">BULL</div></div>
  <div className="absolute right-[8%] top-[23%] transition-transform duration-500" style={{transform:`translateY(${up?12:-12}px) rotate(${up?4:-4}deg)`}}><div className={`flex h-16 w-16 items-center justify-center rounded-2xl border-2 ${!up?'border-rose-300/50 bg-rose-400/15':'border-slate-300/30 bg-white/5'} shadow-xl`}><TrendingDown className={`h-10 w-10 ${!up?'text-rose-300':'text-white/45'}`}/></div><div className="mt-1 text-center text-[10px] font-black text-white/80">BEAR</div></div>
  <div className="absolute bottom-0 inset-x-0 h-20 bg-[#172848]"/>
  <div className="absolute left-1/2 top-[55%] -translate-x-1/2 rounded-2xl border border-white/10 bg-black/35 px-5 py-3 text-center text-white backdrop-blur-md shadow-xl"><div className={`text-2xl font-black ${up?'text-emerald-300':'text-rose-300'}`}>{live.marketMove>0?'+':''}{live.marketMove.toFixed(2)}%</div><div className="text-[10px] font-bold uppercase tracking-widest text-white/55">Market Move</div></div>
  <div className="absolute right-4 bottom-5 rounded-xl bg-black/40 px-3 py-2 text-white backdrop-blur"><div className="text-[10px] text-white/60">LIVE SCORE</div><div className="text-xl font-black">{live.score > 0?'+':''}{live.score}%</div></div>
  <Player live={live}/>
 </>;
}

function World({game,live}:{game:FinanceGameSceneId;live:Live}){
 const t=themes[game],Icon=t.icon,progress=clamp(live.value,8,92);
 if(game==='stock-market-simulator') return <div className="absolute inset-0 overflow-hidden" aria-hidden="true"><StockWorld live={live}/></div>;
 return <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
  <div className="absolute inset-0" style={{background:t.sky}}/><div className="absolute inset-x-0 bottom-0 h-16" style={{background:t.ground}}/>
  {game==='save-or-spend'&&<svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 340" preserveAspectRatio="none"><path d="M450 340V245L270 110M450 245L630 110" fill="none" stroke="rgba(48,55,58,.75)" strokeWidth="76" strokeLinecap="round"/><path d="M450 340V245L270 110M450 245L630 110" fill="none" stroke="white" strokeOpacity=".65" strokeWidth="4" strokeDasharray="12 12"/></svg>}
  {game==='credit-score-climb'&&<><div className="absolute bottom-12 left-0 right-0 h-44 bg-slate-700/25" style={{clipPath:'polygon(0 100%,14% 20%,29% 65%,43% 8%,59% 72%,76% 25%,100% 68%,100% 100%)'}}/><div className="absolute left-[10%] right-[10%] bottom-[23%] h-2 rotate-[-8deg] rounded-full bg-amber-200/70"/></>}
  {game==='rent-vs-buy'&&<><div className="absolute bottom-12 left-[7%] flex h-32 w-28 flex-col items-center justify-end rounded-t-xl bg-slate-800/45 p-3"><Building2 className="h-16 w-16 text-white/75"/><span className="text-[10px] font-bold text-white/75">RENT</span></div><div className="absolute bottom-12 right-[7%] flex h-36 w-32 flex-col items-center justify-end rounded-t-xl bg-emerald-950/35 p-3"><House className="h-20 w-20 text-white/80"/><span className="text-[10px] font-bold text-white/75">BUY</span></div></>}
  {game==='retirement-countdown'&&<><div className="absolute right-[8%] top-[18%] h-16 w-16 rounded-full bg-yellow-100/60"/><div className="absolute bottom-12 right-[10%] text-7xl text-emerald-950/55">🌴</div></>}
  {game==='emergency-fund-builder'&&<><CloudRain className="absolute left-[10%] top-[17%] h-16 w-16 text-white/25 animate-pulse"/><div className="absolute right-[9%] bottom-16 flex h-36 w-32 items-center justify-center rounded-[45%] border-8 border-white/60 bg-white/10 transition-all duration-700" style={{transform:`scale(${.75+progress/300})`}}><Shield className="h-20 w-20 text-white/80"/></div></>}
  {game==='insurance-matcher'&&<><div className="absolute right-[8%] bottom-12 flex h-36 w-36 items-center justify-center"><Umbrella className="h-32 w-32 text-white/85 transition-transform duration-700" style={{transform:`scale(${.75+progress/350})`}}/></div><Heart className="absolute left-[12%] top-[24%] h-12 w-12 text-white/35 animate-pulse"/></>}
  {game==='budget-master'&&<><div className="absolute left-[8%] bottom-12 rounded-xl bg-white/20 p-3"><Banknote className="h-12 w-12 text-white/80"/></div><div className="absolute right-[9%] bottom-12 rounded-xl bg-white/20 p-3"><ShoppingCart className="h-12 w-12 text-white/80"/></div><div className="absolute right-[24%] bottom-16 rounded-full bg-amber-200/80 p-3 transition-transform duration-500" style={{transform:`scale(${.8+(live.values[3]||10)/45})`}}><PiggyBank className="h-10 w-10 text-amber-900/70"/></div></>}
  <Player live={live}/>
  <div className="absolute bottom-11 right-[6%] z-20 flex h-16 w-16 items-center justify-center rounded-full bg-black/25 text-white shadow-xl transition-all duration-500" style={{transform:`translateY(${live.positive?-8:5}px) rotate(${live.positive?3:-5}deg)`}}><Icon className="h-9 w-9"/></div>
  {live.action!=='idle'&&<Coins key={live.tick} className="absolute left-1/2 top-[45%] z-30 h-7 w-7 -translate-x-1/2 animate-bounce text-yellow-200 drop-shadow-lg"/>}
 </div>;
}

export default function FinanceGameScene({game,username='Player',preview=false,children}:{game:FinanceGameSceneId;username?:string;preview?:boolean;children?:React.ReactNode}){
 const t=themes[game],Icon=t.icon,ref=useRef<HTMLDivElement>(null),last=useRef('');
 const [live,setLive]=useState<Live>(()=>read(null,game)); const [tick,setTick]=useState(0); const [action,setAction]=useState<Live['action']>('idle'); const avatar=useMemo(()=>getPlayerAvatar(username||'Player',96),[username]);
 useEffect(()=>{const el=ref.current;if(!el)return;
   const update=(forcedAction:Live['action']=action)=>{const next=read(el,game,tick+1,forcedAction);const snap=JSON.stringify([next.value,next.score,next.values,next.message,next.positive,next.marketMove,forcedAction]);if(snap!==last.current){last.current=snap;setLive(next);setTick(x=>x+1);if(forcedAction!=='idle'){window.setTimeout(()=>setAction('idle'),700)}}};
   const onClick=(e:Event)=>{const target=e.target as HTMLElement;const label=target.closest('button')?.textContent?.trim().toLowerCase()||'';let a:Live['action']='idle';if(/buy/.test(label))a='buy';else if(/sell/.test(label))a='sell';else if(/advance|start trading|next round/.test(label))a='advance';setAction(a);update(a)};
   const onInput=()=>update('idle');
   const observer=new MutationObserver(()=>update('idle')); observer.observe(el,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['value','aria-valuenow','disabled']});
   el.addEventListener('click',onClick,true);el.addEventListener('input',onInput,true);el.addEventListener('change',onInput,true);update('idle');const timer=window.setInterval(()=>update('idle'),250);
   return()=>{observer.disconnect();el.removeEventListener('click',onClick,true);el.removeEventListener('input',onInput,true);el.removeEventListener('change',onInput,true);window.clearInterval(timer)}
 },[game]);
 if(preview)return <>{children}</>;
 return <div ref={ref} className="w-full"><style>{`@keyframes fgPop{0%{transform:scale(.86);opacity:.2}100%{transform:scale(1);opacity:1}} @keyframes marketPulse{0%,100%{filter:brightness(1)}50%{filter:brightness(1.25)}}`}</style>
  <div className="mb-5 overflow-hidden rounded-3xl border border-black/10 bg-slate-950 shadow-2xl"><div className="relative h-[330px] sm:h-[370px]"><World game={game} live={{...live,tick,action}}/>
   <div className="absolute left-4 top-4 z-40 rounded-2xl bg-black/50 px-3 py-2 text-white shadow-lg backdrop-blur-md"><div className="flex items-center gap-2 text-sm font-extrabold"><Icon size={18}/>{t.title}</div><div className="text-[11px] text-white/80">{t.subtitle}</div></div>
   <div className="absolute right-4 top-4 z-40 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300"/> LIVE WORLD</div>
   <div key={tick} className="absolute bottom-7 left-1/2 z-40 w-[88%] -translate-x-1/2 rounded-2xl border border-white/15 bg-black/55 px-4 py-2.5 text-center text-[11px] font-semibold text-white shadow-xl" style={{animation:'fgPop .22s ease-out'}}>{live.message}</div>
   <div className="absolute right-4 bottom-20 z-40 flex items-center gap-2 rounded-xl bg-black/55 px-2.5 py-2 text-white shadow-lg backdrop-blur-md"><Gauge size={15}/><span className="text-xs font-extrabold">{game==='stock-market-simulator'?`${live.score>0?'+':''}${live.score}%`: `${Math.round(live.value)}%`}</span></div>
  </div><div className="border-t border-white/10 bg-slate-950/95 px-4 py-3 text-white"><div className="flex items-center justify-between gap-3"><div className="flex items-center gap-2 text-xs font-bold text-white/85"><img src={avatar} alt="" className="h-7 w-7 rounded-full"/>{username} is controlling the scene</div><div className="flex items-center gap-1 text-[10px] font-bold text-emerald-300"><Sparkles size={12}/> ACTIONS ARE LIVE</div></div></div></div>
  <div className="relative rounded-2xl border border-ink-200 bg-white p-4 shadow-sm sm:p-6"><div className="mb-4 flex items-center justify-between border-b border-ink-100 pb-3"><div><div className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-brand-600">Live Gameplay</div><div className="text-xs text-ink-400">Your existing game buttons and sliders directly drive the animated world above.</div></div><div className="flex items-center gap-1 text-[10px] font-bold text-ink-400"><WalletCards size={13}/> Original game logic preserved</div></div>{children}</div>
 </div>;
}
export {themes as financeGameSceneThemes};
