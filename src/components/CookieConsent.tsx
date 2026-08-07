import { useEffect, useState } from 'react';
import { Cookie, X, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'vidify-cookie-consent';
const DELAY_MS = 50_000;

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'accepted' || stored === 'dismissed') return;
    } catch {
      // localStorage unavailable — skip banner
      return;
    }

    const timer = setTimeout(() => setVisible(true), DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = (value: 'accepted' | 'dismissed') => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore write errors
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className="mx-auto max-w-3xl m-4 rounded-2xl bg-white shadow-2xl ring-1 ring-ink-200 overflow-hidden">
        <div className="flex items-start gap-4 p-5">
          <div className="shrink-0 rounded-xl bg-brand-100 p-2.5">
            <Cookie className="h-5 w-5 text-brand-700" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-bold text-ink-900 text-sm">We use cookies</h3>
            <p className="text-xs text-ink-500 mt-1 leading-relaxed">
              We use cookies to operate the site, remember your preferences, and support advertising via Google AdSense. By continuing, you agree to our use of cookies. See our{' '}
              <Link to="/privacy-policy" className="font-semibold text-brand-700 hover:underline">Privacy Policy</Link>{' '}and{' '}
              <Link to="/terms" className="font-semibold text-brand-700 hover:underline">Terms</Link>.
            </p>
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => dismiss('accepted')}
                className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-700 transition-colors"
              >
                <Check className="h-3.5 w-3.5" />
                Accept
              </button>
              <button
                onClick={() => dismiss('dismissed')}
                className="inline-flex items-center gap-1.5 rounded-lg bg-ink-100 px-4 py-2 text-xs font-semibold text-ink-600 hover:bg-ink-200 transition-colors"
              >
                <X className="h-3.5 w-3.5" />
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
