import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Building2, Home, PiggyBank, Shield, Umbrella, TrendingUp, GitFork, Mountain, Gauge, Coins, Heart, Trophy, CloudRain, Banknote, ShoppingCart, Sparkles, House } from 'lucide-react';
import { getPlayerAvatar } from '../lib/financeGameScene';

export type FinanceGameSceneId = 'budget-master'|'stock-market-simulator'|'save-or-spend'|'credit-score-climb'|'rent-vs-buy'|'retirement-countdown'|'emergency-fund-builder'|'insurance-matcher';
type Theme={sky:string;ground:string;title:string;subtitle:string;icon:React.ComponentType<any>};
const themes:Record<FinanceGameSceneId,Theme>={
 'budget-master':{sky:'#69b9c7',ground:'#4e9851',title:'Budget Town',subtitle:'Balance your paycheck in real time',icon:Home},
 'stock-market-simulator':{sky:'#101a35',ground:'#24355c',title:'Market Arena',subtitle:'Your portfolio moves with the market',icon:TrendingUp},
 'save-or-spend':{sky:'#759fba',ground:'#527c55',title:'Decision Road',subtitle:'Your choice moves the player',icon:GitFork},
 'credit-score-climb':{sky:'#718fa7',ground:'#526e4c',title:'Credit Mountain',subtitle:'Good decisions climb the path',icon:Mountain},
 'rent-vs-buy':{sky:'#7ba5ba',ground:'#657958',title:'Home Valley',subtitle:'Affordability changes the route',icon:Building2},
 'retirement-countdown':{sky:'#e39a70',ground:'#ae814d',title:'Retirement Coast',subtitle:'Grow the nest egg',icon:PiggyBank},
 'emergency-fund-builder':{sky:'#637689',ground:'#4d6269',title:'Storm Shelter',subtitle:'Savings strengthen your shield',icon:Shield},
 'insurance-matcher':{sky:'#9ccbd3',ground:'#719866',title:'Protection Park',subtitle:'Coverage changes the protection',icon:Umbrella}
};

type Live={value:number;values:number[];message:string;positive:boolean;tick:number};
function read(root:HTMLElement|null,game:FinanceGameSceneId,tick=0):Live{
 if(!root)return{value:35,values:[],message:'Start the game — the world will react to your moves.',positive:true,tick};
 const ranges=Array.from(root.querySelectorAll('input[type="range"]')) as HTMLInputElement[];
 const values=ranges.map(x=>Number(x.value)||0); const text=root.innerText.replace(/\s+/g,' ');
 const score=Number(text.match(/(?:score|credit score|financial health)[^\d]{0,30}(\d{1,3})/i)?.[1]||0);
 const round=Number(text.match(/(?:round|question|scenario)[^\d]{0,12}(\d{1,2})/i)?.[1]||0);
 let value=35,message='Make a move — the world reacts instantly.',positive=true;
 if(game==='budget-master'){const total=values.reduce((a,b)=>a+b,0),save=values[3]??10;value=Math.max(0,Math.min(100,Math.round(save*2.8+(total===100?20:0))));message=total===100?`Balanced! Savings ${save}% — paycheck fully allocated.`:total>100?`${total-100}% over budget — reduce a category.`:`${100-total}% still unassigned — keep balancing.`;positive=total<=100&&save>=10;}
 else if(game==='stock-market-simulator'){value=score||50;message=round?`Round ${round} — your portfolio is reacting to the market.`:'Watch the market and make your next trade.';positive=value>=50;}
 else if(game==='credit-score-climb'){value=score||values[0]||35;message=`Credit climb: ${Math.round(value)} — moving toward the next checkpoint.`;positive=value>=50;}
 else if(game==='save-or-spend'){value=Math.min(100,45+(round*4));message=round?`Decision ${round} — choose a path and watch the player move.`:'Choose SAVE or SPEND to move the player.';}
 else if(game==='rent-vs-buy'){value=Math.max(20,Math.min(100,values[0]||score||50));message='Change the numbers or choice — the home valley updates live.';}
 else if(game==='retirement-countdown'){value=Math.max(20,Math.min(100,values[0]||50));message=`Nest egg progress ${Math.round(value)}% — keep building the future.`;}
 else if(game==='emergency-fund-builder'){value=Math.max(15,Math.min(100,values[0]||50));message=`Shield strength ${Math.round(value)}% — savings are your storm barrier.`;positive=value>=50;}
 else {value=Math.max(20,Math.min(100,values[0]||55));message=`Protection ${Math.round(value)}% — match coverage to the risk.`;positive=value>=50;}
 return{value,values,message,positive,tick};
}

function World({game,live}:{game:FinanceGameSceneId;live:Live}){
 const t=themes[game],Icon=t.icon,progress=Math.max(8,Math.min(92,live.value)),playerX=`${8+progress*.7}%`;
 return <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
  <div className="absolute inset-0" style={{background:t.sky}}/><div className="absolute inset-x-0 bottom-0 h-16" style={{background:t.ground}}/>
  {game==='stock-market-simulator'&&<svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 340" preserveAspectRatio="none"><path d="M0 240C100 205 120 285 220 225S350 160 440 220S555 275 650 130S790 170 900 65" fill="none" stroke="rgba(103,232,190,.55)" strokeWidth="8" strokeDasharray="15 10"><animate attributeName="stroke-dashoffset" from="0" to="-50" dur="1.5s" repeatCount="indefinite"/></path></svg>}
  {game==='save-or-spend'&&<svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 340" preserveAspectRatio="none"><path d="M450 340V245L270 110M450 245L630 110" fill="none" stroke="rgba(48,55,58,.75)" strokeWidth="76" strokeLinecap="round"/><path d="M450 340V245L270 110M450 245L630 110" fill="none" stroke="white" strokeOpacity=".65" strokeWidth="4" strokeDasharray="12 12"/></svg>}
  {game==='credit-score-climb'&&<><div className="absolute bottom-12 left-0 right-0 h-44 bg-slate-700/25" style={{clipPath:'polygon(0 100%,14% 20%,29% 65%,43% 8%,59% 72%,76% 25%,100% 68%,100% 100%)'}}/><div className="absolute left-[10%] right-[10%] bottom-[23%] h-2 rotate-[-8deg] rounded-full bg-amber-200/70"/></>}
  {game==='rent-vs-buy'&&<><div className="absolute bottom-12 left-[7%] flex h-32 w-28 flex-col items-center justify-end rounded-t-xl bg-slate-800/45 p-3"><Building2 className="h-16 w-16 text-white/75"/><span className="text-[10px] font-bold text-white/75">RENT</span></div><div className="absolute bottom-12 right-[7%] flex h-36 w-32 flex-col items-center justify-end rounded-t-xl bg-emerald-950/35 p-3"><House className="h-20 w-20 text-white/80"/><span className="text-[10px] font-bold text-white/75">BUY</span></div></>}
  {game==='retirement-countdown'&&<><div className="absolute right-[8%] top-[18%] h-16 w-16 rounded-full bg-yellow-100/60"/><div className="absolute bottom-12 right-[10%] text-7xl text-emerald-950/55">🌴</div></>}
  {game==='emergency-fund-builder'&&<><CloudRain className="absolute left-[10%] top-[17%] h-16 w-16 text-white/25 animate-pulse"/><div className="absolute right-[9%] bottom-16 flex h-36 w-32 items-center justify-center rounded-[45%] border-8 border-white/60 bg-white/10 transition-all duration-700" style={{transform:`scale(${.75+progress/300})`}}><Shield className="h-20 w-20 text-white/80"/></div></>}
  {game==='insurance-matcher'&&<><div className="absolute right-[8%] bottom-12 flex h-36 w-36 items-center justify-center"><Umbrella className="h-32 w-32 text-white/85 transition-transform duration-700" style={{transform:`scale(${.75+progress/350})`}}/></div><Heart className="absolute left-[12%] top-[24%] h-12 w-12 text-white/35 animate-pulse"/></>}
  {game==='budget-master'&&<><div className="absolute left-[8%] bottom-12 rounded-xl bg-white/20 p-3"><Banknote className="h-12 w-12 text-white/80"/></div><div className="absolute right-[9%] bottom-12 rounded-xl bg-white/20 p-3"><ShoppingCart className="h-12 w-12 text-white/80"/></div><div className="absolute right-[24%] bottom-16 rounded-full bg-amber-200/80 p-3 transition-transform duration-500" style={{transform:`scale(${.8+(live.values[3]||10)/45})`}}><PiggyBank className="h-10 w-10 text-amber-900/70"/></div></>}
  <div className="absolute bottom-11 z-20 transition-all duration-500 ease-out" style={{left:playerX}}><div className="relative -translate-x-1/2"><div className={`absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-extrabold text-white shadow-lg ${live.positive?'bg-emerald-700/90':'bg-rose-700/90'}`}>{live.positive?'GOOD MOVE!':'WATCH OUT!'}</div><img src={getPlayerAvatar('Player',96)} alt="Player" className="h-20 w-20 rounded-full border-4 border-white/40 object-cover shadow-2xl sm:h-24 sm:w-24"/></div></div>
  <div className="absolute bottom-11 right-[6%] z-20 flex h-16 w-16 items-center justify-center rounded-full bg-black/25 text-white shadow-xl transition-all duration-500" style={{transform:`translateY(${live.positive?-8:5}px) rotate(${live.positive?3:-5}deg)`}}><Icon className="h-9 w-9"/></div>
  <Coins key={live.tick} className="absolute left-1/2 top-[45%] z-30 h-7 w-7 -translate-x-1/2 animate-bounce text-yellow-200 drop-shadow-lg"/>
 </div>;
}

export default function FinanceGameScene({game,username='Player',preview=false,children}:{game:FinanceGameSceneId;username?:string;preview?:boolean;children?:React.ReactNode}){
 const t=themes[game],Icon=t.icon,ref=useRef<HTMLDivElement>(null),last=useRef('');
 const [live,setLive]=useState<Live>(()=>read(null,game)); const [tick,setTick]=useState(0); const avatar=useMemo(()=>getPlayerAvatar(username||'Player',96),[username]);
 useEffect(()=>{const el=ref.current;if(!el)return;const update=()=>{const next=read(el,game,tick+1);const snap=JSON.stringify([next.value,next.values,next.message,next.positive]);if(snap!==last.current){last.current=snap;setLive(next);setTick(x=>x+1)}};const observer=new MutationObserver(update);observer.observe(el,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['value','aria-valuenow','disabled']});el.addEventListener('input',update,true);el.addEventListener('change',update,true);el.addEventListener('click',update,true);update();const timer=window.setInterval(update,350);return()=>{observer.disconnect();el.removeEventListener('input',update,true);el.removeEventListener('change',update,true);el.removeEventListener('click',update,true);window.clearInterval(timer)}},[game]);
 if(preview)return <>{children}</>;
 return <div ref={ref} className="w-full"><style>{`@keyframes fgPop{0%{transform:scale(.85);opacity:.4}100%{transform:scale(1);opacity:1}}`}</style>
  <div className="mb-5 overflow-hidden rounded-3xl border border-black/10 bg-slate-950 shadow-2xl"><div className="relative h-[330px] sm:h-[370px]"><World game={game} live={{...live,tick}}/>
   <div className="absolute left-4 top-4 z-40 rounded-2xl bg-black/45 px-3 py-2 text-white shadow-lg backdrop-blur-md"><div className="flex items-center gap-2 text-sm font-extrabold"><Icon size={18}/>{t.title}</div><div className="text-[11px] text-white/80">{t.subtitle}</div></div>
   <div className="absolute right-4 top-4 z-40 flex items-center gap-2 rounded-full bg-black/45 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300"/> LIVE WORLD</div>
   <div key={tick} className="absolute bottom-7 left-1/2 z-40 w-[88%] -translate-x-1/2 rounded-2xl border border-white/15 bg-black/55 px-4 py-2.5 text-center text-[11px] font-semibold text-white shadow-xl backdrop-blur-md" style={{animation:'fgPop .25s ease-out'}}>{live.message}</div>
   <div className="absolute right-4 bottom-20 z-40 flex items-center gap-2 rounded-xl bg-black/55 px-2.5 py-2 text-white shadow-lg backdrop-blur-md"><Gauge size={15}/><span className="text-xs font-extrabold">{Math.round(live.value)}%</span></div>
  </div><div className="border-t border-white/10 bg-slate-950/95 px-4 py-3 text-white"><div className="flex items-center justify-between gap-3"><div className="flex items-center gap-2 text-xs font-bold text-white/85"><img src={avatar} alt="" className="h-7 w-7 rounded-full"/>{username} is controlling the scene</div><div className="flex items-center gap-1 text-[10px] font-bold text-emerald-300"><Sparkles size={12}/> LIVE REACTION</div></div></div></div>
  <div className="relative rounded-2xl border border-ink-200 bg-white p-4 shadow-sm sm:p-6"><div className="mb-4 flex items-center justify-between border-b border-ink-100 pb-3"><div><div className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-brand-600">Gameplay Controls</div><div className="text-xs text-ink-400">These are the original controls. Their live state drives the world above.</div></div><div className="flex items-center gap-1 text-[10px] font-bold text-ink-400"><Trophy size={13}/> Original scoring preserved</div></div>{children}</div>
 </div>;
}
export {themes as financeGameSceneThemes};
