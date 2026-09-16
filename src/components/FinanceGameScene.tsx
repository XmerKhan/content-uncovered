import React from 'react';
import { Building2, Home, PiggyBank, Shield, Umbrella, TrendingUp, TrendingDown, GitFork, Mountain } from 'lucide-react';
import { getPlayerAvatar } from '../lib/financeGameScene';

export type FinanceGameSceneId =
  | 'budget-master'
  | 'stock-market-simulator'
  | 'save-or-spend'
  | 'credit-score-climb'
  | 'rent-vs-buy'
  | 'retirement-countdown'
  | 'emergency-fund-builder'
  | 'insurance-matcher';

const themes = {
  'budget-master': { sky: '#3f9fb0', ground: '#4f9d50', label: 'Rent Bot', icon: Home, accent: '#dff7ff' },
  'stock-market-simulator': { sky: '#101b36', ground: '#27365b', label: 'Bull + Bear', icon: TrendingUp, accent: '#8be9fd' },
  'save-or-spend': { sky: '#6d9fbd', ground: '#537d52', label: 'Save / Spend', icon: GitFork, accent: '#ffe28a' },
  'credit-score-climb': { sky: '#7899b3', ground: '#58754e', label: 'Score Peak', icon: Mountain, accent: '#f4d58a' },
  'rent-vs-buy': { sky: '#7ea8bd', ground: '#68795b', label: 'Rent / Buy', icon: Building2, accent: '#ffe8ad' },
  'retirement-countdown': { sky: '#e89a70', ground: '#b98752', label: 'Nest Egg', icon: PiggyBank, accent: '#ffe4a8' },
  'emergency-fund-builder': { sky: '#66788d', ground: '#53646c', label: 'Safety Shield', icon: Shield, accent: '#dce8f0' },
  'insurance-matcher': { sky: '#9bc7d2', ground: '#719a67', label: 'Umbrella', icon: Umbrella, accent: '#f4ffff' },
} as const;

function BackgroundArt({ game }: { game: FinanceGameSceneId }) {
  return <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 240" preserveAspectRatio="none" aria-hidden="true">
    {game === 'stock-market-simulator' && <>
      <path d="M0 185 C110 150 130 205 225 145 S360 115 430 155 S535 190 620 100 S770 125 900 50" fill="none" stroke="rgba(139,233,253,.42)" strokeWidth="5" strokeDasharray="10 8" />
      <path d="M0 210H900" stroke="rgba(255,255,255,.1)" strokeWidth="2" />
    </>}
    {game === 'save-or-spend' && <>
      <path d="M450 240V175L300 72M450 175L600 72" fill="none" stroke="rgba(55,55,65,.72)" strokeWidth="56" strokeLinecap="round" />
      <path d="M450 240V175L300 72M450 175L600 72" fill="none" stroke="rgba(255,255,255,.6)" strokeWidth="3" strokeDasharray="9 10" />
    </>}
    {game === 'credit-score-climb' && <>
      <path d="M0 205L150 75L245 155L355 35L505 175L635 65L760 155L850 85L900 125V240H0Z" fill="rgba(39,66,78,.42)" />
      <path d="M0 220L205 120L320 190L475 95L610 195L750 115L900 185V240H0Z" fill="rgba(32,52,61,.28)" />
    </>}
    {game === 'rent-vs-buy' && <>
      <g fill="rgba(32,45,58,.38)"><path d="M55 180V105L130 45L205 105V180Z"/><path d="M695 180V105L770 45L845 105V180Z"/></g>
      <path d="M450 80V190" stroke="rgba(255,255,255,.25)" strokeWidth="2" strokeDasharray="6 7" />
    </>}
    {game === 'retirement-countdown' && <>
      <circle cx="740" cy="65" r="38" fill="rgba(255,232,168,.65)" />
      <path d="M785 210Q805 130 795 75M795 105Q750 72 730 70M795 115Q835 88 850 70M795 125Q835 125 870 110" fill="none" stroke="rgba(83,70,54,.5)" strokeWidth="7" strokeLinecap="round" />
    </>}
    {game === 'emergency-fund-builder' && <>
      <path d="M690 38L810 72V135C810 190 750 215 750 215C750 215 690 190 690 135Z" fill="rgba(224,240,249,.18)" stroke="rgba(224,240,249,.55)" strokeWidth="7" />
      <path d="M80 55Q130 25 180 55M155 90Q205 60 255 90M55 125Q110 95 165 125" fill="none" stroke="rgba(220,232,240,.25)" strokeWidth="8" strokeLinecap="round" />
    </>}
    {game === 'insurance-matcher' && <>
      <path d="M690 175V105Q690 65 730 65Q770 65 770 105V175" fill="none" stroke="rgba(40,72,78,.5)" strokeWidth="7" />
      <path d="M650 108Q730 28 810 108Q770 92 730 112Q690 92 650 108Z" fill="rgba(255,255,255,.42)" />
    </>}
    {game === 'budget-master' && <circle cx="120" cy="55" r="30" fill="rgba(255,255,255,.13)" />}
  </svg>;
}

export default function FinanceGameScene({ game, username = 'Player', preview = false, children }: { game: FinanceGameSceneId; username?: string; preview?: boolean; children?: React.ReactNode }) {
  const theme = themes[game];
  const Icon = theme.icon;
  const avatar = getPlayerAvatar(username || 'Player', preview ? 100 : 150);
  return <div className="w-full">
    <div className={`relative ${preview ? 'h-[150px]' : 'h-[230px]'} w-full overflow-hidden rounded-t-2xl`} style={{ background: theme.sky }}>
      <BackgroundArt game={game} />
      <div className="absolute left-1/2 top-4 z-10 -translate-x-1/2 text-center">
        <span className="inline-block rounded-full border border-black/20 bg-black/60 px-3 py-1 text-xs font-bold text-white shadow-lg backdrop-blur-sm">{theme.label}</span>
        <div className="mt-2 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/60 bg-white/90 shadow-lg" style={{ color: theme.ground }}><Icon size={29} strokeWidth={2.5} /></div>
      </div>
      <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 text-center">
        <div className="relative mx-auto w-fit">
          <img src={avatar} alt={`${username || 'Player'} avatar`} className={preview ? 'h-20 w-20' : 'h-28 w-28'} />
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-black/20 bg-black/65 px-3 py-1 text-xs font-bold text-white shadow-lg backdrop-blur-sm">{username || 'Player'}</span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-9" style={{ background: theme.ground }}>
        <svg className="h-full w-full opacity-20" viewBox="0 0 120 24" preserveAspectRatio="none" aria-hidden="true"><path d="M0 18Q8 5 16 18T32 18T48 18T64 18T80 18T96 18T112 18T128 18V24H0Z" fill="white" /></svg>
      </div>
    </div>
    {children && <div className="relative">{children}</div>}
  </div>;
}

export { themes as financeGameSceneThemes };
