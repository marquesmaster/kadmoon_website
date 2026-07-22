'use client';

import { useEffect, useState } from 'react';

const KEY = 'kadmoon-consent';

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

/**
 * Cookie banner wired to Google Consent Mode. GTM loads with consent denied by
 * default (set in the layout); accepting here updates consent to granted so
 * analytics/marketing tags may fire. The choice is remembered in localStorage.
 */
export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === 'granted') {
        update(true);
      } else if (saved !== 'denied') {
        setShow(true);
      }
    } catch {
      setShow(true);
    }
  }, []);

  function update(granted: boolean) {
    const v = granted ? 'granted' : 'denied';
    gtag('consent', 'update', {
      ad_storage: v,
      ad_user_data: v,
      ad_personalization: v,
      analytics_storage: v,
    });
  }

  function choose(granted: boolean) {
    try {
      localStorage.setItem(KEY, granted ? 'granted' : 'denied');
    } catch {
      /* ignore */
    }
    update(granted);
    setShow(false);
  }

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-2xl border border-line bg-paper p-5 shadow-card-hover md:inset-x-auto md:left-6 md:bottom-6"
    >
      <p className="text-[14px] leading-relaxed text-ink-2">
        We use cookies to understand traffic and improve the site. You can accept analytics cookies
        or continue with only what’s essential. See our{' '}
        <a href="/privacy" className="font-medium text-navy underline decoration-accent decoration-2 underline-offset-2">
          Privacy Policy
        </a>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-2.5">
        <button
          type="button"
          onClick={() => choose(true)}
          className="rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy/90"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => choose(false)}
          className="rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink-3/50"
        >
          Essential only
        </button>
      </div>
    </div>
  );
}
