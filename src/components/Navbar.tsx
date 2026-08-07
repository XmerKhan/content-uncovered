import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Brain, Menu, X, ChevronDown, Wallet, Code2, Globe, Baby } from 'lucide-react';
import { categories } from '../data/games';
import SoundToggle from './SoundToggle';

const categoryIcons: Record<string, typeof Wallet> = {
  finance: Wallet,
  tech: Code2,
  educational: Globe,
  brainstorming: Baby,
};

const topLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms & Conditions' },
  { to: '/disclaimer', label: 'Disclaimer' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [gamesOpen, setGamesOpen] = useState(false);
  const [mobileGamesOpen, setMobileGamesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setGamesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setGamesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-ink-200">
      <nav className="container-content flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-display font-extrabold text-lg text-ink-900 shrink-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
            <Brain className="h-5 w-5" />
          </span>
          Vidify Games
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {/* Games dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setGamesOpen((v) => !v)}
              onMouseEnter={() => setGamesOpen(true)}
              className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                gamesOpen ? 'text-brand-700 bg-brand-50' : 'text-ink-600 hover:text-ink-900 hover:bg-ink-100'
              }`}
            >
              Games
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${gamesOpen ? 'rotate-180' : ''}`} />
            </button>

            {gamesOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-52 rounded-xl bg-white shadow-lg border border-ink-200 py-1.5 z-50"
                onMouseLeave={() => setGamesOpen(false)}
              >
                {Object.entries(categories).map(([key, cat]) => {
                  const Icon = categoryIcons[key];
                  return (
                    <NavLink
                      key={key}
                      to={`/category/${key}`}
                      className={({ isActive }) =>
                        `flex items-center gap-2.5 px-3.5 py-2 text-sm font-medium transition-colors ${
                          isActive
                            ? 'text-brand-700 bg-brand-50'
                            : 'text-ink-700 hover:text-brand-700 hover:bg-ink-50'
                        }`
                      }
                    >
                      <Icon className="h-4 w-4 shrink-0 opacity-70" />
                      {cat.label}
                    </NavLink>
                  );
                })}
              </div>
            )}
          </div>

          {/* Top-level links */}
          {topLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive ? 'text-brand-700 bg-brand-50' : 'text-ink-600 hover:text-ink-900 hover:bg-ink-100'
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <SoundToggle />
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <SoundToggle />
          <button
            className="p-2 rounded-lg text-ink-700 hover:bg-ink-100"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-ink-200 bg-white">
          <div className="container-content py-3 space-y-0.5">
            {/* Games accordion */}
            <button
              onClick={() => setMobileGamesOpen((v) => !v)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-ink-800 hover:bg-ink-100 transition-colors"
            >
              <span>Games</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileGamesOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileGamesOpen && (
              <div className="ml-3 border-l-2 border-ink-200 pl-3 space-y-0.5 pb-1">
                {Object.entries(categories).map(([key, cat]) => {
                  const Icon = categoryIcons[key];
                  return (
                    <Link
                      key={key}
                      to={`/category/${key}`}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-ink-700 hover:bg-ink-100 hover:text-brand-700 transition-colors"
                    >
                      <Icon className="h-4 w-4 opacity-60" />
                      {cat.label}
                    </Link>
                  );
                })}
              </div>
            )}

            <div className="border-t border-ink-100 pt-1 mt-1 space-y-0.5">
              {topLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-ink-700 hover:bg-ink-100 hover:text-brand-700 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
