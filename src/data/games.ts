import type { ComponentType, LazyExoticComponent } from 'react';
import {
  Wallet,
  TrendingUp,
  Scale,
  Code2,
  Bug,
  Binary,
  Type,
  Grid3x3,
  Calculator,
  Globe,
  CreditCard,
  Home,
  PiggyBank,
  Shield,
  Umbrella,
  Keyboard,
  Zap,
  Cpu,
  Gauge,
  BookOpen,
  Building2,
  FlaskConical,
  Atom,
  Clock,
  Coins,
  Shapes,
  PawPrint,
  Hash,
  Palette,
  Blocks,
  type LucideIcon,
} from 'lucide-react';

export type Category = 'finance' | 'tech' | 'educational' | 'brainstorming';

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface FAQ {
  question: string;
  answer: string;
}

export interface GameMeta {
  slug: string;
  title: string;
  shortTitle: string;
  category: Category;
  icon: LucideIcon;
  tagline: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  accent: string;
  difficulty: Difficulty;
  article: ArticleContent;
  faqs?: FAQ[];
  dateModified?: string;
}

export interface ArticleContent {
  style: 'A' | 'B' | 'C' | 'D';
  body: string;
}

export const categories: Record<Category, { label: string; description: string; color: string }> = {
  finance: {
    label: 'Finance Games',
    description: 'Build real money skills — budgeting, investing, and smart spending decisions.',
    color: 'brand',
  },
  tech: {
    label: 'Tech & Logic Games',
    description: 'Sharpen your programming intuition, debugging eye, and binary fluency.',
    color: 'info',
  },
  educational: {
    label: 'Educational Games',
    description: 'Expand your knowledge of science, geography, history, and language through interactive play.',
    color: 'purple',
  },
  brainstorming: {
    label: 'Brainstorming Games',
    description: 'Gentle learning games for young minds — counting, shapes, colors, animals, logic, and puzzles.',
    color: 'teal',
  },
};

export const games: GameMeta[] = [
  {
    slug: 'budget-master',
    title: 'Budget Master',
    shortTitle: 'Budget Master',
    category: 'finance',
    icon: Wallet,
    tagline: 'Allocate a monthly salary across life categories and score your financial health.',
    description:
      'Drag sliders to split a monthly paycheck across rent, food, savings, transport, and fun. Your choices produce a financial-health score based on widely recommended budgeting ratios.',
    metaTitle: 'Free Budgeting Game — Practice Online | Vidify Games',
    metaDescription:
      'Play Budget Master, a free budgeting game online. Allocate a monthly salary across expenses and learn real personal finance skills. No download needed.',
    keywords: ['budgeting game', 'personal finance', 'money management', 'financial literacy game'],
    accent: 'brand',
    difficulty: 'Easy',
    article: {
      style: 'B',
      body: `BUDGET_MASTER_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'What is the 50/30/20 budgeting rule?',
        answer: 'The 50/30/20 rule directs 50% of your after-tax income to needs like rent and groceries, 30% to wants like entertainment, and 20% to savings and debt repayment. It is a starting point, not a strict law — higher earners may save more, while people in expensive cities may need to adjust the housing portion.',
      },
      {
        question: 'How much of my income should go to rent?',
        answer: 'Financial planners generally recommend keeping total housing costs under 30% of gross income. Crossing that threshold squeezes your food, transport, and savings categories, which is exactly what Budget Master penalizes when you push the rent slider too high.',
      },
      {
        question: 'Does Budget Master save my financial health score?',
        answer: 'Yes. Your best scores are saved locally in your browser using local storage, so you can try to beat your personal best over multiple sessions. Clearing your browser data will reset all saved scores.',
      },
    ],
  },
  {
    slug: 'stock-market-simulator',
    title: 'Stock Market Simulator',
    shortTitle: 'Stock Market',
    category: 'finance',
    icon: TrendingUp,
    tagline: 'Buy and sell fake stocks across volatile rounds and track your profit or loss.',
    description:
      'A simplified trading simulator with randomly fluctuating prices across ten rounds. Build a portfolio, react to price swings, and see whether you beat the market.',
    metaTitle: 'Free Stock Market Simulator Game | Vidify Games',
    metaDescription:
      'Practice trading with a free stock market simulator. Buy and sell fake stocks across volatile rounds and learn investing fundamentals. Play free online.',
    keywords: ['stock market game', 'trading simulator', 'investing game', 'stock simulation'],
    accent: 'brand',
    difficulty: 'Hard',
    article: {
      style: 'B',
      body: `STOCK_MARKET_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'Are the stock prices in the simulator based on real market data?',
        answer: 'No. Prices are randomly generated to simulate market volatility. The goal is to practice decision-making under uncertainty — position sizing, diversification, and emotional discipline — not to learn stock prediction.',
      },
      {
        question: 'What is position sizing and why does it matter?',
        answer: 'Position sizing is how much of your total capital you put into a single stock. Putting everything into one rising stock can produce big gains or total losses. Spreading capital across multiple stocks smooths out volatility, which is the core principle of real portfolio diversification.',
      },
      {
        question: 'Can I lose all my virtual money in the simulator?',
        answer: 'You can lose a significant portion if you concentrate in a crashing stock, but the game ends after ten rounds regardless. The purpose is learning emotional discipline, not survival under real financial risk.',
      },
    ],
  },
  {
    slug: 'save-or-spend',
    title: 'Save or Spend',
    shortTitle: 'Save or Spend',
    category: 'finance',
    icon: Scale,
    tagline: 'Face realistic money dilemmas and get scored on the wisdom of your choices.',
    description:
      'Each round drops you into a realistic financial scenario. Pick the smartest option and get instant feedback on whether you saved, splurged, or struck the right balance.',
    metaTitle: 'Free Financial Decision Game — Save or Spend | Vidify Games',
    metaDescription:
      'Play Save or Spend, a free financial decision game. Face realistic money dilemmas and learn to make smarter spending choices. Test your skills online.',
    keywords: ['financial decisions', 'save or spend', 'money choices game', 'financial literacy'],
    accent: 'brand',
    difficulty: 'Medium',
    article: {
      style: 'D',
      body: `SAVE_OR_SPEND_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'How does Save or Spend decide if a choice is smart or a splurge?',
        answer: 'Each option is evaluated against standard personal finance principles — needs-versus-wants categorization, long-term cost impact, and opportunity cost — then labeled wise, neutral, or a splurge with a short explanation so you understand the reasoning.',
      },
      {
        question: 'What happens if I pick the splurge option every time?',
        answer: 'Your score will reflect poor cumulative judgment. The game rewards consistently sound decisions across all ten rounds rather than a single lucky pick, so splurging every round produces a low score.',
      },
      {
        question: 'Can playing Save or Spend actually help me spend less in real life?',
        answer: 'Yes. The game trains the habit of pausing to categorize purchases as needs or wants before deciding. That same mental pause is what curbs impulse spending outside the game.',
      },
    ],
  },
  {
    slug: 'code-breaker',
    title: 'Code Breaker',
    shortTitle: 'Code Breaker',
    category: 'brainstorming',
    icon: Code2,
    tagline: 'Crack a hidden color sequence using logic and feedback hints.',
    description:
      'A Mastermind-style logic puzzle. Guess the secret sequence of colored pegs, read the hint feedback, and deduce the answer before you run out of attempts.',
    metaTitle: 'Free Logic Puzzle Game — Code Breaker | Vidify Games',
    metaDescription:
      'Play Code Breaker, a free Mastermind-style logic puzzle game. Guess a hidden color sequence using deduction and feedback hints. Train your reasoning.',
    keywords: ['mastermind game', 'logic puzzle', 'code breaker', 'deduction game'],
    accent: 'info',
    difficulty: 'Medium',
    article: {
      style: 'A',
      body: `CODE_BREAKER_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'What do the black and white pegs mean in Code Breaker?',
        answer: 'A black peg means a color is correct and in the right position. A white peg means a color is correct but in the wrong position. No peg means that color is not in the sequence at all.',
      },
      {
        question: 'Can the secret code contain duplicate colors?',
        answer: 'Yes. Duplicates are allowed, so a sequence like red-red-blue-green is valid. This makes deduction harder because the feedback can be ambiguous when the same color appears more than once.',
      },
      {
        question: 'What is the fastest way to crack the code?',
        answer: 'Use the information-theoretic approach: choose each guess to eliminate as many remaining possibilities as possible, even if you think the guess is wrong. Tournament players solve codes in five or six guesses this way.',
      },
    ],
  },
  {
    slug: 'bug-hunter',
    title: 'Bug Hunter',
    shortTitle: 'Bug Hunter',
    category: 'tech',
    icon: Bug,
    tagline: 'Spot the buggy line in a code snippet before the clock runs out.',
    description:
      'Short code snippets appear one at a time, each containing a single bug. Click the line you think is wrong before time expires. Speed and accuracy both count.',
    metaTitle: 'Free Code Debugging Game — Bug Hunter | Vidify Games',
    metaDescription:
      'Play Bug Hunter, a free code debugging game. Spot the buggy line in real code snippets before time runs out. Train your eye for programming errors.',
    keywords: ['debugging game', 'code bugs', 'programming game', 'find the bug'],
    accent: 'info',
    difficulty: 'Hard',
    article: {
      style: 'D',
      body: `BUG_HUNTER_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'What types of bugs does Bug Hunter show?',
        answer: 'Off-by-one errors, wrong comparison operators, type mismatches, undefined variables, and logic slips — the same categories that appear most often in real code review. Higher difficulty levels introduce subtler bugs that require tracing code execution mentally.',
      },
      {
        question: 'How is my score calculated in Bug Hunter?',
        answer: 'Your score reflects both accuracy and speed. Quick correct answers earn bonus points, while wrong answers carry penalties. This scoring mirrors real code review, where finding bugs fast matters but being wrong wastes everyone\'s time.',
      },
      {
        question: 'Does Bug Hunter help with real-world debugging?',
        answer: 'Yes. It trains the pattern-recognition skill that experienced developers use to spot bugs quickly during code review. Studies of expert reviewers show their first impression is correct more often than their second guess, which is exactly the reflex the game builds.',
      },
    ],
  },
  {
    slug: 'binary-blitz',
    title: 'Binary Blitz',
    shortTitle: 'Binary Blitz',
    category: 'tech',
    icon: Binary,
    tagline: 'Race the clock converting binary to decimal and back, with rising difficulty.',
    description:
      'A timed quiz that drills binary-to-decimal and decimal-to-binary conversion. Questions start easy and ramp up in bit-length and speed pressure as you progress.',
    metaTitle: 'Free Binary Conversion Game — Binary Blitz | Vidify Games',
    metaDescription:
      'Play Binary Blitz, a free timed game for converting binary to decimal and back. Learn binary number conversion with increasing difficulty. Play free.',
    keywords: ['binary game', 'binary to decimal', 'number conversion', 'binary quiz'],
    accent: 'info',
    difficulty: 'Medium',
    article: {
      style: 'A',
      body: `BINARY_BLITZ_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'How do I convert binary to decimal quickly?',
        answer: 'Read the binary number right to left, and for each digit that is 1, add the corresponding power of two: 1, 2, 4, 8, 16, and so on. The sum is the decimal value. Memorizing the first eight powers of two lets you convert any 8-bit number in seconds.',
      },
      {
        question: 'Why is 10 in binary equal to 2 in decimal?',
        answer: 'In base-2, the rightmost digit is the ones place and the next is the twos place. "10" means one group of two and zero ones, which equals two. This is the most common slip for beginners who read binary left to right as if it were decimal.',
      },
      {
        question: 'What is the fastest way to convert decimal to binary?',
        answer: 'Use the largest power method: find the biggest power of two that fits into your number, subtract it, and repeat with the remainder until you reach zero. Each power you used corresponds to a 1 bit in the result.',
      },
    ],
  },
  {
    slug: 'word-chain-challenge',
    title: 'Word Chain Challenge',
    shortTitle: 'Word Chain',
    category: 'brainstorming',
    icon: Type,
    tagline: 'Build word chains where each word starts with the last letter of the previous one.',
    description:
      'Keep the chain alive: every new word must begin with the final letter of the word before it. You have limited time per word and no repeats allowed.',
    metaTitle: 'Free Vocabulary Game — Word Chain | Vidify Games',
    metaDescription:
      'Play Word Chain Challenge, a free vocabulary game. Build chains of words where each starts with the last letter of the previous. Improve word recall.',
    keywords: ['word chain game', 'vocabulary game', 'word game', 'letter chain'],
    accent: 'purple',
    difficulty: 'Medium',
    article: {
      style: 'C',
      body: `WORD_CHAIN_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'What are the rules of Word Chain Challenge?',
        answer: 'You must type a valid English word that starts with the last letter of the previous word, without repeating any word already used, before the per-turn timer runs out. The chain ends on a repeat, an invalid word, or a timeout.',
      },
      {
        question: 'Does Word Chain actually improve vocabulary?',
        answer: 'It exercises lexical retrieval by initial letter, a different access pattern than normal speech. This makes existing words easier to recall in real writing and conversation, even though no new words are learned.',
      },
      {
        question: 'Which letters are hardest to chain from?',
        answer: 'X, Z, and J are the toughest because fewer English words start with them. Skilled players keep a mental shortlist of X-words and Z-words ready for when the chain lands on those letters.',
      },
    ],
  },
  {
    slug: 'memory-grid',
    title: 'Memory Grid',
    shortTitle: 'Memory Grid',
    category: 'brainstorming',
    icon: Grid3x3,
    tagline: 'Match flag pairs from memory across a grid of face-down cards.',
    description:
      'A classic memory-matching game themed around world flags. Flip cards two at a time, find the matching pairs, and clear the board in as few moves as possible.',
    metaTitle: 'Free Memory Matching Game — Memory Grid | Vidify Games',
    metaDescription:
      'Play Memory Grid, a free memory matching card game themed around world flags. Flip cards, find pairs, and train your visual memory. Play free online.',
    keywords: ['memory game', 'matching game', 'flag memory', 'card matching game'],
    accent: 'purple',
    difficulty: 'Easy',
    article: {
      style: 'C',
      body: `MEMORY_GRID_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'How does Memory Grid improve working memory?',
        answer: 'It forces you to store each flag image alongside its grid position for later retrieval. This strengthens the same spatial-recall pathways used in everyday memory tasks like remembering where you parked.',
      },
      {
        question: 'What is the best strategy for clearing the grid quickly?',
        answer: 'Chunk card positions into rows and associate each flag with its location rather than trying to memorize cards individually. This mirrors the technique competitive memory athletes use to track dozens of items at once.',
      },
      {
        question: 'Does Memory Grid save my best score?',
        answer: 'Yes. Your best performance by move count and completion time is saved locally in your browser, so you can chase a personal record across sessions.',
      },
    ],
  },
  {
    slug: 'math-sprint',
    title: 'Math Sprint',
    shortTitle: 'Math Sprint',
    category: 'brainstorming',
    icon: Calculator,
    tagline: 'Solve arithmetic problems against the clock with escalating difficulty.',
    description:
      'Answer as many arithmetic problems as you can before time runs out. Each correct answer adds time; each wrong one costs you. Difficulty climbs as your streak grows.',
    metaTitle: 'Free Timed Math Game — Math Sprint | Vidify Games',
    metaDescription:
      'Play Math Sprint, a free timed arithmetic game with increasing difficulty. Solve math problems against the clock and climb the leaderboard. Play free.',
    keywords: ['math game', 'arithmetic game', 'timed math', 'mental math practice'],
    accent: 'accent',
    difficulty: 'Easy',
    article: {
      style: 'D',
      body: `MATH_SPRINT_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'Is it better to be fast or accurate in Math Sprint?',
        answer: 'Accurate. A wrong answer costs time and resets your streak multiplier, so two slow correct answers score higher than one fast correct answer and one wrong one.',
      },
      {
        question: 'How does Math Sprint increase difficulty?',
        answer: 'Difficulty scales with your streak. Operands grow larger, operations mix more aggressively, and time pressure tightens as you answer correctly, so the game always pushes you at your current skill level.',
      },
      {
        question: 'What math operations does Math Sprint include?',
        answer: 'Addition, subtraction, multiplication, and division. Problems start with single-digit operations and progress to two-digit multiplication and three-digit addition as your streak grows.',
      },
    ],
  },
  {
    slug: 'geo-quiz',
    title: 'Geo Quiz',
    shortTitle: 'Geo Quiz',
    category: 'educational',
    icon: Globe,
    tagline: 'Identify countries from their flags and outlines across difficulty tiers.',
    description:
      'A geography quiz that shows flags and country outlines. Pick the right country from multiple-choice options across three difficulty tiers from easy to expert.',
    metaTitle: 'Free World Geography Quiz Game — Geo Quiz | Vidify Games',
    metaDescription:
      'Play Geo Quiz, a free geography quiz game. Identify countries from flags and outlines across multiple difficulty tiers. Test your world geography knowledge.',
    keywords: ['geography quiz', 'country quiz', 'flag game', 'world geography game'],
    accent: 'purple',
    difficulty: 'Medium',
    article: {
      style: 'C',
      body: `GEO_QUIZ_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'How many countries does Geo Quiz cover?',
        answer: 'The game draws from all 195 recognized sovereign countries. Three difficulty tiers control which ones appear, from major nations on easy to smaller countries on expert.',
      },
      {
        question: 'Why do some country flags look almost identical?',
        answer: 'Many flags share colonial histories or cultural ties. Indonesia and Monaco have nearly identical red-and-white flags, while Chad and Romania differ only in subtle shade variations of blue.',
      },
      {
        question: 'What is the most effective way to learn country flags?',
        answer: 'Active recall under time pressure, which is exactly what Geo Quiz provides. Seeing a flag and retrieving the country name from memory strengthens the connection far more than passively studying a chart.',
      },
    ],
  },
  {
    slug: 'credit-score-climb',
    title: 'Credit Score Climb',
    shortTitle: 'Credit Climb',
    category: 'finance',
    icon: CreditCard,
    tagline: 'Make financial decisions that raise your credit score from poor to excellent.',
    description:
      'Navigate real-world credit scenarios — payments, utilization, credit age, and new applications. Each decision pushes your simulated score up or down. Reach 800 before the game ends.',
    metaTitle: 'Credit Score Simulator Game — Free Online | Vidify Games',
    metaDescription:
      'Learn how credit scores work by playing Credit Score Climb. Make smart financial decisions to raise your simulated credit score. Play free online.',
    keywords: ['credit score', 'credit game', 'finance game', 'financial literacy', 'credit history'],
    accent: 'brand',
    difficulty: 'Medium',
    article: {
      style: 'A',
      body: `CREDIT_SCORE_CLIMB_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'What FICO score range is considered good versus excellent?',
        answer: 'A FICO score ranges from 300 to 850. Scores from 670 to 739 are considered good, 740 to 799 are very good, and 800 and above is excellent. Credit Score Climb challenges you to reach 800 by making decisions that mirror the real factors bureaus weigh.',
      },
      {
        question: 'How much does one missed payment hurt my credit score?',
        answer: 'A single missed payment can drop a good score by 50 to 100 points because payment history is the single biggest factor at roughly 35% of your FICO score. The damage lingers on your report for up to seven years.',
      },
      {
        question: 'What credit utilization ratio should I aim for?',
        answer: 'Keep your utilization under 30% of your total credit limit, and ideally under 10%. If your combined limits are $10,000, try to never carry more than $3,000 — and the highest scorers stay below $1,000.',
      },
    ],
  },
  {
    slug: 'rent-vs-buy',
    title: 'Rent vs Buy',
    shortTitle: 'Rent vs Buy',
    category: 'finance',
    icon: Home,
    tagline: 'Compare the true costs of renting versus buying a home across ten years.',
    description:
      'Adjust rent, home price, mortgage rate, and appreciation to see whether renting or buying wins financially. The game reveals hidden costs most people never calculate.',
    metaTitle: 'Free Home Buying Game — Rent vs Buy | Vidify Games',
    metaDescription:
      'Should you rent or buy? Play Rent vs Buy to compare the real financial impact of each option. Free educational game about housing. Play free online.',
    keywords: ['rent vs buy', 'housing game', 'mortgage game', 'home buying', 'financial decision'],
    accent: 'brand',
    difficulty: 'Hard',
    article: {
      style: 'B',
      body: `RENT_VS_BUY_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'Is renting really throwing money away?',
        answer: 'Not necessarily. When you factor in closing costs, maintenance, property taxes, and the opportunity cost of investing your down payment, renting can win financially over a ten-year horizon — especially in markets where home prices are high relative to rents.',
      },
      {
        question: 'What is the opportunity cost of a down payment?',
        answer: 'It is the investment return you give up by locking your cash in a house instead of the stock market. At a 7% average annual return, your down payment doubles roughly every ten years, which often rivals or exceeds home appreciation.',
      },
      {
        question: 'How much should I budget for home maintenance?',
        answer: 'A common rule of thumb is 1% of the home value per year. Over ten years on a $400,000 house, that is $40,000 — a significant sum that renters never pay and that many first-time buyers forget to include.',
      },
    ],
  },
  {
    slug: 'retirement-countdown',
    title: 'Retirement Countdown',
    shortTitle: 'Retirement',
    category: 'finance',
    icon: PiggyBank,
    tagline: 'Grow a retirement nest egg from your first paycheck to your last.',
    description:
      'Make annual savings and investment decisions over a simulated career. Watch compound interest work its magic — or fail to — based on when you start and how much you save.',
    metaTitle: 'Free Retirement Planning Game | Vidify Games',
    metaDescription:
      'Learn retirement planning through play. Make savings decisions over a simulated career and see how compound interest grows your nest egg. Play free.',
    keywords: ['retirement', 'compound interest', 'savings game', 'retirement planning', 'finance game'],
    accent: 'brand',
    difficulty: 'Hard',
    article: {
      style: 'A',
      body: `RETIREMENT_COUNTDOWN_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'Why does starting early matter more than saving more?',
        answer: 'Compound interest grows exponentially over time. Saving 10% of your income from age 25 yields more at retirement than saving 20% from age 40, even though the later saver contributes more per year. Time is the most powerful variable in retirement planning.',
      },
      {
        question: 'What is an employer match and why should I take it?',
        answer: 'An employer match is when your company contributes to your retirement account up to a certain percentage of your salary. Not taking the full match is equivalent to turning down a raise — it is free money that compounds over decades.',
      },
      {
        question: 'Should I choose conservative or aggressive investments for retirement?',
        answer: 'Over a 30-year horizon, aggressive portfolios almost always outperform conservative ones despite having down years. The right mix depends on your time horizon and risk tolerance, but younger savers generally benefit from more aggressive allocations.',
      },
    ],
  },
  {
    slug: 'emergency-fund-builder',
    title: 'Emergency Fund Builder',
    shortTitle: 'Emergency Fund',
    category: 'finance',
    icon: Shield,
    tagline: 'Build a financial safety net one month at a time while life throws surprises.',
    description:
      'Save toward a target emergency fund while managing unexpected expenses — car repairs, medical bills, job loss. Learn how much you really need and how to get there.',
    metaTitle: 'Free Emergency Fund Savings Game | Vidify Games',
    metaDescription:
      'Learn how to build an emergency fund by playing this free educational game. Save money while managing surprise expenses. Build financial literacy. Play.',
    keywords: ['emergency fund', 'savings game', 'financial safety net', 'emergency savings', 'finance game'],
    accent: 'brand',
    difficulty: 'Easy',
    article: {
      style: 'B',
      body: `EMERGENCY_FUND_BUILDER_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'How much should I keep in an emergency fund?',
        answer: 'Aim for three to six months of essential expenses. Start with a mini-fund of $1,000 to cover minor emergencies like a tire or copay, then build toward the full target over time.',
      },
      {
        question: 'Where should I keep my emergency savings?',
        answer: 'In a high-yield savings account that is separate from checking but easily liquid. It needs to be accessible when an emergency hits, but not so convenient that you dip into it for non-emergencies.',
      },
      {
        question: 'Why does Emergency Fund Builder charge interest on debt?',
        answer: 'Because real debt charges interest, which creates a spiral that slows your progress. The game simulates that spiral to show why saving before an emergency hits is far cheaper than borrowing after it does.',
      },
    ],
  },
  {
    slug: 'insurance-matcher',
    title: 'Insurance Matcher',
    shortTitle: 'Insurance',
    category: 'finance',
    icon: Umbrella,
    tagline: 'Match the right insurance policy to the right life situation.',
    description:
      'Read a brief life scenario and pick the best insurance coverage — auto, home, health, life, or disability. Learn what each type protects and when it matters most.',
    metaTitle: 'Free Insurance Learning Game | Vidify Games',
    metaDescription:
      'Learn about insurance types by matching policies to real-life situations. Free educational game about auto, home, health, and life insurance. Play free.',
    keywords: ['insurance', 'insurance game', 'financial literacy', 'coverage', 'finance game'],
    accent: 'brand',
    difficulty: 'Easy',
    article: {
      style: 'C',
      body: `INSURANCE_MATCHER_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'Do I need life insurance if I am young and single with no dependents?',
        answer: 'Probably not. Life insurance replaces your income for people who depend on it, so if nobody does, you can skip it. Disability insurance, however, is critical because your ability to earn income is your biggest asset.',
      },
      {
        question: 'Does standard home insurance cover flooding?',
        answer: 'No. Standard home insurance excludes flood damage. A homeowner in a flood zone needs separate flood coverage, which is one of the most common gaps people discover too late after a storm.',
      },
      {
        question: 'How often should I shop around for insurance?',
        answer: 'Annually. Rates change constantly, and the company that was cheapest last year may not be this year. Get fresh quotes every twelve months for auto and home insurance — loyalty to one insurer rarely pays.',
      },
    ],
  },
  {
    slug: 'typing-speed',
    title: 'Typing Speed Test',
    shortTitle: 'Typing Speed',
    category: 'tech',
    icon: Keyboard,
    tagline: 'Type sentences as fast and accurately as you can against the clock.',
    description:
      'Real-time typing challenge with WPM and accuracy tracking. Type the displayed sentences before time runs out. Difficulty controls text length and time limit.',
    metaTitle: 'Free Typing Speed Test Game Online | Vidify Games',
    metaDescription:
      'Test and improve your typing speed and accuracy with this free typing speed test game. Measure WPM in real time. No download needed. Play free online.',
    keywords: ['typing speed', 'typing game', 'WPM', 'typing test', 'keyboard skills'],
    accent: 'info',
    difficulty: 'Medium',
    article: {
      style: 'A',
      body: `TYPING_SPEED_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'What is a good typing speed in words per minute?',
        answer: 'The average person types around 40 WPM, trained typists hit 60 to 80, and top performers exceed 100. A practical target for most office work is 60 to 80 WPM, which lets you write as fast as you think without corrections slowing you down.',
      },
      {
        question: 'Should I type as fast as I possibly can?',
        answer: 'No. Typing at about 90% of your top speed significantly reduces errors, and fewer corrections means your effective speed is actually higher than when you max out and make mistakes. The game shows both WPM and accuracy live to help you find that sweet spot.',
      },
      {
        question: 'How do I improve my typing speed quickly?',
        answer: 'Learn proper home-row touch typing so each finger owns specific keys, look at the screen instead of the keyboard, and practice slightly below your max speed to minimize corrections. A few hours of focused practice can double your speed within a week.',
      },
    ],
  },
  {
    slug: 'shortcut-master',
    title: 'Shortcut Master',
    shortTitle: 'Shortcuts',
    category: 'tech',
    icon: Zap,
    tagline: 'Match keyboard shortcuts to their actions before time runs out.',
    description:
      'See an action name and pick the correct keyboard shortcut from four options. Covers Windows, Mac, and browser shortcuts. Build muscle memory for productivity.',
    metaTitle: 'Free Keyboard Shortcut Game | Vidify Games',
    metaDescription:
      'Learn keyboard shortcuts by playing Shortcut Master. Match actions to shortcuts and build productivity muscle memory. Free educational game. Play free.',
    keywords: ['keyboard shortcuts', 'shortcut game', 'productivity', 'keyboard skills', 'tech game'],
    accent: 'info',
    difficulty: 'Medium',
    article: {
      style: 'B',
      body: `SHORTCUT_MASTER_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'Which keyboard shortcuts save the most time?',
        answer: 'Undo (Ctrl/Cmd+Z), switch tabs (Ctrl/Cmd+Tab), close tab (Ctrl/Cmd+W), switch application (Alt/Cmd+Tab), and find (Ctrl/Cmd+F). These five cover the most frequent actions and eliminate mouse travel for the tasks you do dozens of times per day.',
      },
      {
        question: 'How long does it take to memorize keyboard shortcuts?',
        answer: 'A few focused sessions with active recall under time pressure, like Shortcut Master provides, is enough to make the most common shortcuts automatic within a week. The key is practicing recall, not just re-reading a cheat sheet.',
      },
      {
        question: 'Are Mac and Windows keyboard shortcuts the same?',
        answer: 'Most are analogous — Ctrl on Windows maps to Cmd on Mac for the same actions, with a few exceptions like application switching, which uses Alt+Tab on Windows and Cmd+Tab on Mac. Shortcut Master covers both platforms.',
      },
    ],
  },
  {
    slug: 'logic-gate-sim',
    title: 'Logic Gate Simulator',
    shortTitle: 'Logic Gates',
    category: 'tech',
    icon: Cpu,
    tagline: 'Build circuits with AND, OR, NOT, and XOR gates to match a target truth table.',
    description:
      'Drag logic gates into a circuit and connect inputs to outputs. Your goal is to match the target truth table. Learn how computers make decisions at the lowest level.',
    metaTitle: 'Free Logic Gate Simulator Game | Vidify Games',
    metaDescription:
      'Learn digital logic by building circuits with AND, OR, NOT, and XOR gates. Match target truth tables in this free educational logic game. Play free.',
    keywords: ['logic gates', 'digital logic', 'circuit game', 'AND OR NOT', 'computer science'],
    accent: 'info',
    difficulty: 'Hard',
    article: {
      style: 'D',
      body: `LOGIC_GATE_SIM_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'What are the basic logic gates I need to know?',
        answer: 'AND, OR, NOT, XOR, and NAND. AND outputs true only when both inputs are true, OR outputs true when either input is true, NOT flips a single input, XOR outputs true when exactly one input is true, and NAND is the inverse of AND.',
      },
      {
        question: 'Why is the NAND gate called universal?',
        answer: 'Because you can construct any other logic gate — AND, OR, NOT, XOR — using only NAND gates. This property makes NAND extremely useful in real circuit design, where entire processors can be built from a single gate type.',
      },
      {
        question: 'How do I simplify a logic circuit?',
        answer: 'Use De Morgan\'s laws to convert between AND and OR gates: NOT (A AND B) equals (NOT A) OR (NOT B). This identity often lets you match a truth table with fewer gates, which is faster and cheaper in real hardware.',
      },
    ],
  },
  {
    slug: 'website-speed',
    title: 'Website Speed Optimizer',
    shortTitle: 'Web Speed',
    category: 'tech',
    icon: Gauge,
    tagline: 'Optimize a slow website by choosing the right performance techniques.',
    description:
      'A fictional website loads slowly. Pick from optimization options — image compression, caching, minification, CDN — and watch the load time drop. Learn web performance fundamentals.',
    metaTitle: 'Free Website Speed Optimization Game | Vidify Games',
    metaDescription:
      'Learn website performance optimization by playing this free educational game. Compress images, enable caching, and speed up a slow site. Play free.',
    keywords: ['website speed', 'web performance', 'optimization game', 'page speed', 'tech game'],
    accent: 'info',
    difficulty: 'Medium',
    article: {
      style: 'B',
      body: `WEBSITE_SPEED_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'What is the single biggest cause of slow web pages?',
        answer: 'Unoptimized images. A 5-megabyte hero photo can take several seconds to load on mobile. Converting it to a 200-kilobyte compressed, properly sized version can cut load time in half by itself — often the highest-ROI optimization you can make.',
      },
      {
        question: 'Does enabling browser caching help first-time visitors?',
        answer: 'No. Caching stores static assets locally so returning visitors load nearly instantly, but it does not improve the first visit since there is nothing cached yet. For first-time visitors, focus on image compression and server response time.',
      },
      {
        question: 'What does minifying CSS and JavaScript do?',
        answer: 'It removes whitespace, comments, and unnecessary characters from code files, reducing their size by 30 to 50 percent so they download and parse faster. Modern build tools do this automatically, but many sites still ship unminified code.',
      },
    ],
  },
  {
    slug: 'tech-acronym-decoder',
    title: 'Tech Acronym Decoder',
    shortTitle: 'Acronym Decoder',
    category: 'tech',
    icon: BookOpen,
    tagline: 'Decode tech acronyms like API, CSS, DNS, and SQL before the timer expires.',
    description:
      'A tech acronym appears and you pick the correct expansion from four options. Learn what the jargon actually means. Difficulty controls how obscure the acronyms get.',
    metaTitle: 'Free Tech Acronym Quiz Game | Vidify Games',
    metaDescription:
      'Learn what tech acronyms mean by playing Tech Acronym Decoder. Match acronyms to their full names and build your tech vocabulary. Play free online.',
    keywords: ['tech acronyms', 'API', 'CSS', 'DNS', 'tech vocabulary', 'acronym game'],
    accent: 'info',
    difficulty: 'Easy',
    article: {
      style: 'C',
      body: `TECH_ACRONYM_DECODER_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'What does API stand for and what does it do?',
        answer: 'API stands for Application Programming Interface, and it is the set of rules that lets one program talk to another. Every web app, mobile app, and software integration runs on APIs — they are how different services share data and functionality.',
      },
      {
        question: 'What is DNS in simple terms?',
        answer: 'DNS stands for Domain Name System, and it is the phonebook of the internet. It translates human-readable domain names like example.com into the IP addresses that computers use to find each other on the network.',
      },
      {
        question: 'What is the difference between SQL and HTTP?',
        answer: 'SQL is the standard language for interacting with relational databases, while HTTP is the protocol that defines how web browsers and servers communicate. One queries stored data, the other transfers web pages across the internet.',
      },
    ],
  },
  {
    slug: 'capital-city',
    title: 'Capital City Challenge',
    shortTitle: 'Capital City',
    category: 'educational',
    icon: Building2,
    tagline: 'Match world countries to their capital cities before the clock runs out.',
    description:
      'A country name appears and you pick its capital from four options. Covers every continent and difficulty tiers control how obscure the capitals get. Build geography fluency.',
    metaTitle: 'World Capitals Quiz Game — Free Online | Vidify Games',
    metaDescription:
      'Test your knowledge of world capitals with Capital City Challenge. Match countries to their capital cities in this free geography game. Play free online.',
    keywords: ['capital cities', 'world capitals', 'geography game', 'country capitals', 'educational game'],
    accent: 'purple',
    difficulty: 'Medium',
    article: {
      style: 'A',
      body: `CAPITAL_CITY_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'Why is Canberra the capital of Australia instead of Sydney?',
        answer: 'Canberra was chosen in 1908 as a compromise between rival cities Sydney and Melbourne. It was a rural area with no existing settlement, purpose-built to serve as the administrative center.',
      },
      {
        question: 'Which country has three capital cities?',
        answer: 'South Africa splits its government across three cities: Pretoria for the executive branch, Cape Town for the legislative, and Bloemfontein for the judicial. No other country divides its capitals this way.',
      },
      {
        question: 'Are capitals always the largest city in their country?',
        answer: 'No. Many capitals are purpose-built administrative centers rather than the biggest or most famous city. Bern, not Zurich, is the capital of Switzerland, and Ottawa, not Toronto, is the capital of Canada.',
      },
    ],
  },
  {
    slug: 'science-fact-sprint',
    title: 'Science Fact Sprint',
    shortTitle: 'Science Sprint',
    category: 'educational',
    icon: FlaskConical,
    tagline: 'Answer science trivia across biology, chemistry, physics, and earth science.',
    description:
      'Rapid-fire science trivia across multiple disciplines. Pick the correct answer from four options before the timer expires. Learn fascinating facts about the natural world.',
    metaTitle: 'Free Science Quiz Game — Science Sprint | Vidify Games',
    metaDescription:
      'Test your science knowledge with Science Fact Sprint. Answer trivia across biology, chemistry, physics, and earth science. Free educational game. Play.',
    keywords: ['science trivia', 'science game', 'biology', 'chemistry', 'physics', 'educational game'],
    accent: 'purple',
    difficulty: 'Medium',
    article: {
      style: 'B',
      body: `SCIENCE_FACT_SPRINT_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'What science subjects does Science Fact Sprint cover?',
        answer: 'The game spans biology, chemistry, physics, and earth science. Questions range from the most abundant element in the universe to the speed of light and the anatomy of the human body.',
      },
      {
        question: 'Why does the game mix different science subjects in one session?',
        answer: 'Mixing subjects within a single session is called interleaving, a technique cognitive science identifies as more effective than studying one subject at a time. It forces your brain to switch contexts, which builds more durable recall.',
      },
      {
        question: 'What is the most surprising science fact in the game?',
        answer: 'A bolt of lightning reaches roughly thirty thousand degrees Celsius, about five times hotter than the surface of the sun. This happens despite the flash lasting only a fraction of a second.',
      },
    ],
  },
  {
    slug: 'periodic-table-blitz',
    title: 'Periodic Table Blitz',
    shortTitle: 'Periodic Blitz',
    category: 'educational',
    icon: Atom,
    tagline: 'Identify elements by symbol, group, and property before the timer runs out.',
    description:
      'An element symbol appears and you pick its name, or vice versa. Difficulty controls how deep into the periodic table you go. Learn chemistry fundamentals through play.',
    metaTitle: 'Free Chemistry Game — Periodic Table Quiz | Vidify Games',
    metaDescription:
      'Learn the periodic table by playing Periodic Table Blitz. Match element symbols to their names and properties. Free educational chemistry game. Play free.',
    keywords: ['periodic table', 'elements', 'chemistry game', 'element symbols', 'educational game'],
    accent: 'purple',
    difficulty: 'Hard',
    article: {
      style: 'D',
      body: `PERIODIC_TABLE_BLITZ_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'How many elements are on the periodic table?',
        answer: 'There are 118 confirmed elements, organized by increasing atomic number. The table was most recently expanded in 2016 when elements 113, 115, 117, and 118 were officially recognized.',
      },
      {
        question: 'Why do some element symbols not match their English names?',
        answer: 'Many symbols come from Latin or German roots rather than English. Iron is Fe from ferrum, gold is Au from aurum, and tungsten is W from the German name wolfram.',
      },
      {
        question: 'What makes the periodic table useful beyond memorizing elements?',
        answer: 'The table groups elements with similar chemical properties into columns, so knowing an element\'s position predicts its reactivity, bonding behavior, and physical characteristics without needing to memorize each one individually.',
      },
    ],
  },
  {
    slug: 'history-timeline',
    title: 'History Timeline',
    shortTitle: 'Timeline',
    category: 'educational',
    icon: Clock,
    tagline: 'Place historical events in the correct chronological order.',
    description:
      'Four historical events appear. Drag them into chronological order from earliest to latest. Difficulty controls the time span and how close the events are.',
    metaTitle: 'Free History Game — History Timeline | Vidify Games',
    metaDescription:
      'Learn history by placing events in chronological order. Play History Timeline, a free educational game about world history and important dates. Play free.',
    keywords: ['history timeline', 'historical events', 'chronology', 'history game', 'educational game'],
    accent: 'purple',
    difficulty: 'Medium',
    article: {
      style: 'A',
      body: `HISTORY_TIMELINE_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'How does History Timeline difficulty work?',
        answer: 'Easy mode spans centuries so the order is relatively obvious. Expert mode asks you to distinguish events that happened within the same decade, requiring much tighter temporal reasoning.',
      },
      {
        question: 'Why is chronological order more useful than memorizing exact dates?',
        answer: 'Relative order reveals cause and effect. Knowing the Renaissance preceded the Enlightenment shows how classical ideas set the stage for the scientific revolution, even if you cannot recall exact years.',
      },
      {
        question: 'What time periods does History Timeline cover?',
        answer: 'The game spans from ancient civilizations through the modern era. Questions include events like the signing of the Magna Carta in 1215 and the first powered flight in 1903.',
      },
    ],
  },
  {
    slug: 'world-currency',
    title: 'World Currency Match',
    shortTitle: 'World Currency',
    category: 'educational',
    icon: Coins,
    tagline: 'Match countries to their official currencies.',
    description:
      'A country flag or name appears and you pick its official currency from four options. Learn the currencies of the world from dollars to yen to pesos to francs.',
    metaTitle: 'World Currency Matching Game — Free Online | Vidify Games',
    metaDescription:
      'Learn world currencies by playing World Currency Match. Match countries to their official currencies in this free educational geography game. Play free.',
    keywords: ['world currency', 'currency game', 'money', 'foreign exchange', 'educational game'],
    accent: 'purple',
    difficulty: 'Easy',
    article: {
      style: 'C',
      body: `WORLD_CURRENCY_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'How many currencies are in circulation worldwide?',
        answer: 'Over 180 currencies are in active circulation. The game covers the most widely traded ones on easy mode and reaches into smaller nations with less commonly discussed currencies on expert.',
      },
      {
        question: 'What is dollarization and which countries use it?',
        answer: 'Dollarization is when a country adopts another nation\'s currency for stability. El Salvador, Ecuador, and Panama all use the US dollar as their official currency, giving up control of monetary policy in exchange for economic stability.',
      },
      {
        question: 'Which currency is the oldest still in use today?',
        answer: 'The British pound sterling, dating back over twelve hundred years. It has survived wars, the collapse of the British Empire, and decimalization in 1971.',
      },
    ],
  },
  {
    slug: 'shape-sorter',
    title: 'Shape Sorter',
    shortTitle: 'Shapes',
    category: 'brainstorming',
    icon: Shapes,
    tagline: 'Sort colorful shapes into the right baskets — circles, squares, triangles, and stars!',
    description:
      'A gentle game for young learners. Shapes appear one at a time and kids pick the right basket. No timers, no pressure — just cheerful feedback and happy animations.',
    metaTitle: 'Free Shape Sorting Game for Kids | Vidify Games',
    metaDescription:
      'A gentle, fun shape-sorting game for young children. Sort circles, squares, triangles, and stars with cheerful animations. Free kids learning game. Play.',
    keywords: ['shapes for kids', 'shape sorter', 'kids game', 'toddler game', 'learning shapes'],
    accent: 'teal',
    difficulty: 'Easy',
    article: {
      style: 'B',
      body: `SHAPE_SORTER_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'At what age should children start learning shapes?',
        answer: 'Most children begin identifying circles, squares, and triangles between ages two and three. Shape Sorter is designed for that stage with no timer, no penalties, and gentle encouragement.',
      },
      {
        question: 'Why does Shape Sorter have no timer or penalties?',
        answer: 'Young children learn best when they feel safe and unhurried. The gentle pace lets them process each shape at their own speed, which builds confidence rather than anxiety.',
      },
      {
        question: 'How does shape recognition help with math later on?',
        answer: 'It builds visual discrimination — the ability to identify differences and similarities between objects. Children later use that same cognitive process to recognize quantities, patterns, and geometric relationships.',
      },
    ],
  },
  {
    slug: 'animal-habitat',
    title: 'Animal Habitat Match',
    shortTitle: 'Animal Habitat',
    category: 'brainstorming',
    icon: PawPrint,
    tagline: 'Match friendly animals to their natural habitats — forest, ocean, desert, and more!',
    description:
      'Kids match animals to where they live. A friendly animal appears and kids pick the right habitat. Gentle, educational, and full of cheerful animal friends.',
    metaTitle: 'Free Animal Habitat Game for Kids | Vidify Games',
    metaDescription:
      'Match animals to their habitats in this gentle, fun learning game for kids. Forest, ocean, desert, and more. Free educational kids game. Play free online.',
    keywords: ['animal habitat', 'animals for kids', 'kids game', 'habitat match', 'learning animals'],
    accent: 'teal',
    difficulty: 'Easy',
    article: {
      style: 'C',
      body: `ANIMAL_HABITAT_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'What age group is Animal Habitat Match designed for?',
        answer: 'Young children in the early-science stage, roughly ages two to five. The game has no timer, no penalties, and gentle positive reinforcement to match that age group\'s attention span.',
      },
      {
        question: 'Why does a camel have a hump?',
        answer: 'A camel\'s hump stores fat, not water, which provides energy when food is scarce in the desert. This adaptation is what lets camels go up to two weeks without drinking.',
      },
      {
        question: 'How does Animal Habitat Match teach science to young children?',
        answer: 'It develops ecological thinking — the understanding that animals are adapted to specific environments — through matching animals to their natural habitats with friendly visuals and gentle, pressure-free feedback.',
      },
    ],
  },
  {
    slug: 'counting-critters',
    title: 'Counting Critters',
    shortTitle: 'Counting',
    category: 'brainstorming',
    icon: Hash,
    tagline: 'Count the cute critters and pick the right number — no timer, just fun!',
    description:
      'A gentle counting game for young learners. Friendly critters appear on screen and kids count them, then pick the right number. Cheerful, encouraging, and pressure-free.',
    metaTitle: 'Free Counting Game for Kids — Counting Critters | Vidify Games',
    metaDescription:
      'A fun, gentle counting game for young children. Count cute critters and pick the right number. No timer, no pressure. Free kids learning game. Play.',
    keywords: ['counting for kids', 'counting game', 'kids math', 'toddler counting', 'learning numbers'],
    accent: 'teal',
    difficulty: 'Easy',
    article: {
      style: 'A',
      body: `COUNTING_CRITTERS_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'What is one-to-one correspondence in counting?',
        answer: 'It is the understanding that each object being counted gets one and only one number. This is the foundational concept that separates reciting numbers from actually counting objects.',
      },
      {
        question: 'Why can my child recite numbers to ten but not count three objects?',
        answer: 'Reciting is memorization while counting is a cognitive skill. One-to-one correspondence develops later than rote recitation, and games like Counting Critters build it through practice.',
      },
      {
        question: 'At what age should a child be able to count objects?',
        answer: 'Most children develop reliable one-to-one correspondence between ages three and four. Counting Critters supports this stage with no timer, no penalties, and groups that grow from one through three up to larger sets.',
      },
    ],
  },
  {
    slug: 'color-mixing',
    title: 'Color Mixing Magic',
    shortTitle: 'Color Magic',
    category: 'brainstorming',
    icon: Palette,
    tagline: 'Mix primary colors to make new colors — red and blue make purple!',
    description:
      'A gentle color-learning game for young kids. Two primary colors appear and kids pick what color they make when mixed. Cheerful animations and gentle encouragement.',
    metaTitle: 'Free Color Mixing Game for Kids | Vidify Games',
    metaDescription:
      'Learn color mixing by playing this gentle, fun game for kids. Mix primary colors to make new colors. Free educational kids game. Play free online.',
    keywords: ['color mixing', 'colors for kids', 'primary colors', 'kids game', 'learning colors'],
    accent: 'teal',
    difficulty: 'Easy',
    article: {
      style: 'B',
      body: `COLOR_MIXING_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'What do red and blue make when mixed?',
        answer: 'Purple. The three primary color pairs are red and yellow make orange, blue and yellow make green, and red and blue make purple.',
      },
      {
        question: 'What age group is Color Mixing Magic designed for?',
        answer: 'Young children in the early-art stage, roughly ages two to five. The game has no timer, no penalties, and short rounds with immediate visual feedback to match that age group\'s attention span.',
      },
      {
        question: 'Why does Color Mixing Magic use the red-yellow-blue model?',
        answer: 'Because that is the traditional pigment model children encounter in paints, crayons, and markers, so the practice transfers directly to real-world art activities.',
      },
    ],
  },
  {
    slug: 'pattern-builder',
    title: 'Pattern Builder',
    shortTitle: 'Patterns',
    category: 'brainstorming',
    icon: Blocks,
    tagline: 'Complete the pattern — what comes next in the colorful sequence?',
    description:
      'A gentle pattern-recognition game for young learners. A sequence of colorful shapes appears with one missing. Kids pick the shape that completes the pattern.',
    metaTitle: 'Free Pattern Recognition Game for Kids | Vidify Games',
    metaDescription:
      'Build pattern recognition skills with this gentle, fun game for kids. Complete colorful shape sequences. Free educational kids game. Play free online.',
    keywords: ['patterns for kids', 'pattern game', 'kids learning', 'toddler patterns', 'shape patterns'],
    accent: 'teal',
    difficulty: 'Easy',
    article: {
      style: 'C',
      body: `PATTERN_BUILDER_ARTICLE`,
    },
    dateModified: 'August 2026',
    faqs: [
      {
        question: 'How does Pattern Builder help with math?',
        answer: 'It builds pattern recognition and prediction — the ability to identify a repeating sequence and predict what comes next. Identifying a rule and applying it is exactly what algebra asks children to do years later.',
      },
      {
        question: 'What age group is Pattern Builder designed for?',
        answer: 'Young children in the early-logic stage, roughly ages three to five. The game has no timer, no penalties, and patterns that progress from simple alternating sequences to more complex ones.',
      },
      {
        question: 'Why does Pattern Builder have no time limit?',
        answer: 'Pattern recognition requires reflective thinking, and rushing a child through it produces anxiety rather than understanding. The gentle pace lets children think at their own speed, which builds confidence and deeper comprehension.',
      },
    ],
  },
];

export function getGame(slug: string): GameMeta | undefined {
  return games.find((g) => g.slug === slug);
}

export function getRelatedGames(slug: string, count = 3): GameMeta[] {
  const game = getGame(slug);
  if (!game) return games.slice(0, count);
  const same = games.filter((g) => g.category === game.category && g.slug !== slug);
  const others = games.filter((g) => g.category !== game.category && g.slug !== slug);
  return [...same, ...others].slice(0, count);
}

export function getGamesByCategory(cat: Category): GameMeta[] {
  return games.filter((g) => g.category === cat);
}

export type GameComponent = LazyExoticComponent<ComponentType<{ game: GameMeta; onAchievement?: () => void }>>;
