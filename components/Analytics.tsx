'use client';

import { useEffect } from 'react';
import { siteConfig } from '@/lib/site';

// Non-invasive CTA tracking. Delegates one capture-phase click listener and
// pushes a `cta` event to the GTM dataLayer for the key funnel actions, so we
// can measure them without wiring onClick into every button.
export function Analytics() {
  useEffect(() => {
    function classify(href: string): string | null {
      if (href.includes('kadmoon-overview.pdf')) return 'presentation_view';
      if (
        (siteConfig.bookingsUrl !== '/contact' && href === siteConfig.bookingsUrl) ||
        href.includes('office365.com/book') ||
        href.includes('/bookings')
      )
        return 'book_meeting';
      if (href.includes('/packages')) return 'view_plans';
      if (href.includes('/contact') || href.includes('#contact')) return 'contact';
      return null;
    }

    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const a = target?.closest?.('a');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      const type = classify(href);
      if (!type) return;
      const w = window as unknown as { dataLayer?: unknown[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: 'cta',
        cta_type: type,
        cta_text: (a.textContent || '').trim().slice(0, 60),
        cta_href: href,
      });
    }

    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
