import React from 'react';
import { Home, TrendingUp, TrendingDown, PiggyBank, Shield, Umbrella, Building2, House, Mountain, Coins } from 'lucide-react';

export type FinanceGameSceneId =
  | 'budget-master'
  | 'stock-market-simulator'
  | 'save-or-spend'
  | 'credit-score-climb'
  | 'rent-vs-buy'
  | 'retirement-countdown'
  | 'emergency-fund-builder'
  | 'insurance-matcher';

interface GameSceneProps {
  game: FinanceGameSceneId;
  username?: string;
  preview?: boolean;
  children?: React.ReactNode;
}

const themes: Record<FinanceGameSceneId, {
  sky: string;
  ground: string;
  accent: string;
  opponent: string;
  kind: string;
}> = {
  'budget-master': { sky: '#3f9fb0', ground: '#4f9d50', accent: '#dff7ff', opponent: 'Rent Bot', kind: 'house' },
  'stock-market-simulator': { sky: '#101b36', ground: '#27365b', accent: '#8be9fd', opponent: 'Bull + Bear', kind: 'market' },
  'save-or-spend': { sky: '#6d9fbd', ground: '#537d52', accent: '#ffe28a', opponent: 'Choice', kind: 'fork' },
  'credit-score-climb': { sky: '#7899b3', ground: '#58754e', accent: '#f4d58a', opponent: 'Score Peak', kind: 'mountain' },
  'rent-vs-buy': { sky: '#7ea8bd', ground: '#68795b', accent: '#ffe8ad', opponent: 'Rent / Buy', kind: 'homes' },
  'retirement-countdown': { sky: '#e89a70', ground: '#b98752', accent: '#ffe4a8', opponent: 'Nest Egg', kind: 'retirement' },
  'emergency-fund-builder': { sky: '#66788d', ground: '#53646c', accent: '#dce8f0', opponent: 'Safety Shield', kind: 'shield' },
  'insurance-matcher': { sky: '#9bc7d2', ground: '#719a67', accent: '#f4ffff', opponent: 'Umbrella', kind: 'umbrella' },
};

function avatarUrl(seed: string, size: number) {
  return `https://api.dicebear.com/9.x/adventurer/svg?seed=${encodeURIComponent(seed)}&size=${size}`;
}

function ThemeArt({ kind }: { kind: string }) {
  if (kind === 'market') return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 240" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 180 C100 150 130 195 220 145 S350 120 420 155 S520 185 610 105 S760 120 900 55" fill="none" stroke="rgba(139,233,253,.38)" strokeWidth="5" strokeDasharray="10 8" className="game-scene-chart" />
      <path d="M0 210 L900 210" stroke="rgba(255,255,255,.08)" strokeWidth="2" />
    </svg>
  );
  if (kind === 'fork') return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 240" preserveAspectRatio="none" aria-hidden="true">
      <path d="M450 240 L450 175 L300 75 M450 175 L600 75" fill="none" stroke="rgba(55,55,65,.72)" strokeWidth="54" strokeLinecap="round" />
      <path d="M450 240 L450 175 L300 75 M450 175 L600 75" fill="none" stroke="rgba(255,255,255,.6)" strokeWidth="3" strokeDasharray="9 10" />
    </svg>
  );
  if (kind === 'mountain') return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 240" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 205 L150 75 L245 155 L355 35 L505 175 L635 65 L760 155 L850 85 L900 125 L900 240 L0 240Z" fill="rgba(39,66,78,.42)" />
      <path d="M0 220 L205 120 L320 190 L475 95 L610 195 L750 115 L900 185 L900 240 L0 240Z" fill="rgba(32,52,61,.28)" />
    </svg>
  );
  if (kind === 'homes') return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 240" preserveAspectRatio="none" aria-hidden="true">
      <g fill="rgba(32,45,58,.38)">
        <path d="M55 180V105L130 45L205 105V180Z"/><path d="M90 180V125H125V155H155V125H185V180Z" fill="rgba(255,255,255,.12)"/>
        <path d="M695 180V105L770 45L845 105V180Z"/><path d="M735 180V125H765V150H795V125H825V180Z" fill="rgba(255,255,255,.12)"/>
      </g>
      <path d="M450 80V190" stroke="rgba(255,255,255,.25)" strokeWidth="2" strokeDasharray="6 7" />
    </svg>
  );
  if (kind === 'retirement') return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 240" preserveAspectRatio="none" aria-hidden="true">
      <circle cx="740" cy="65" r="38" fill="rgba(255,232,168,.65)" />
      <path d="M785 210 Q805 130 795 75 M795 105 Q750 72 730 70 M795 115 Q835 88 850 70 M795 125 Q835 125 870 110" fill="none" stroke="rgba(83,70,54,.5)" strokeWidth="7" strokeLinecap="round" />
      <path d="M0 205 Q180 175 360 205 T720 195 T900 205V240H0Z" fill="rgba(255,221,157,.25)" />
    </svg>
  );
  if (kind === 'shield') return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 240" preserveAspectRatio="none" aria-hidden="true">
      <path d="M690 38 L810 72 V135 C810 190 750 215 750 215 C750 215 690 190 690 135Z" fill="rgba(224,240,249,.18)" stroke="rgba(224,240,249,.55)" strokeWidth="7" />
      <path d="M80 55 Q130 25 180 55 M155 90 Q205 60 255 90 M55 125 Q110 95 165 125" fill="none" stroke="rgba(220,232,240,.25)" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
  if (kind === 'umbrella') return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 240" preserveAspectRatio="none" aria-hidden="true">
      <path d="M690 175V105 Q690 65 730 65 Q770 65 770 105 V175" fill="none" stroke="rgba(40,72,78,.5)" strokeWidth="7" />
      <path d="M650 108 Q730 28 810 108 Q770 92 730 112 Q690 92 650 108Z" fill="rgba(255,255,255,.42)" />
      <path d="M90 75 H300 M140 115 H350" stroke="rgba(255,255,255,.2)" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 240" preserveAspectRatio="none" aria-hidden="true">
      <circle cx="120" cy="55" r="30" fill="rgba(255,255,255,.13)" />
      <path d="M0 195 Q120 170 240 195 T480 190 T720 195 T900 188V240H0Z" fill="rgba(255,255,255,.08)" />
    </svg>
  );
}

function Companion({ kind, color }: { kind: string; color: string }) {
  const Icon = kind === 'house' ? Home : kind === 'market' ? TrendingUp : kind === 'retirement' ? PiggyBank : kind === 'shield' ? Shield : kind === 'umbrella' ? Umbrella : kind === 'homes' ? Building2 : kind === 'fork' ? Coins : Mountain;
  return <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/60 bg-white/90 shadow-lg" style={{ color }}><Icon size={29} strokeWidth={2.5} /></div>;
}

export default function GameScene({ game, username = 'Player', preview = false, children }: GameSceneProps) {
  const theme = themes[game];
  const playerName = username || 'Player';
  const playerAvatar = avatarUrl(playerName, preview ? 100 : 150);
  const sceneHeight = preview ? 'h-[150px]' : 'h-[230px]';

  return (
    <div className="w-full">
      <div className={`relative ${sceneHeight} w-full overflow-hidden rounded-t-2xl`} style={{ background: theme.sky }}>
        <ThemeArt kind={theme.kind} />
        <div className="absolute left-1/2 top-4 -translate-x-1/2 text-center">
          <span className="inline-block rounded-full border border-black/20 bg-black/55 px-3 py-1 text-xs font-bold text-white shadow-lg backdrop-blur-sm">{theme.opponent}</span>
          <div className="mt-2"><Companion kind={theme.kind} color={theme.ground} /></div>
        </div>
        <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-center">
          <div className="relative mx-auto w-fit">
            <img src={playerAvatar} alt="Player avatar" className={preview ? 'h-20 w-20' : 'h-28 w-28'} />
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-black/20 bg-black/65 px-3 py-1 text-xs font-bold text-white shadow-lg backdrop-blur-sm">{playerName}</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-9" style={{ background: theme.ground }}>
          <svg className="h-full w-full opacity-20" viewBox="0 0 120 24" preserveAspectRatio="none" aria-hidden="true"><path d="M0 18 Q8 5 16 18 T32 18 T48 18 T64 18 T80 18 T96 18 T112 18 T128 18V24H0Z" fill="white" /></svg>
        </div>
      </div>
      {children && <div className="relative">{children}</div>}
    </div>
  );
}

export const financeGameThemes = themes;
