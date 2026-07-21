'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Counts up to the numeric part of a stat (e.g. "50+", "100%", "0%") when it
 * scrolls into view. Non-numeric prefixes/suffixes are preserved. Respects
 * prefers-reduced-motion by showing the final value immediately.
 */
export function StatCounter({ value, className }: { value: string; className?: string }) {
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  const prefix = match?.[1] ?? '';
  const target = match ? parseInt(match[2], 10) : 0;
  const suffix = match?.[3] ?? '';

  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(match ? 0 : value);

  useEffect(() => {
    if (!match) return;
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || target === 0) {
      setDisplay(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          const duration = 1100;
          let start = 0;
          const step = (ts: number) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [match, target]);

  return (
    <span ref={ref} className={className}>
      {match ? `${prefix}${display}${suffix}` : display}
    </span>
  );
}
