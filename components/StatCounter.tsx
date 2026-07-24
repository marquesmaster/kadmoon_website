'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Counts up to the numeric part of a stat (e.g. "50+", "100%", "0%") when it
 * scrolls into view, preserving any prefix/suffix. Respects
 * prefers-reduced-motion. The effect depends only on `value` (a stable string)
 * so state updates never restart the animation.
 */
export function StatCounter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const match = value.match(/^(\D*)(\d+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const prefix = match[1];
    const target = parseInt(match[2], 10);
    const suffix = match[3];
    const render = (n: number) => setDisplay(`${prefix}${n}${suffix}`);

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce || target === 0) {
      render(target);
      return;
    }

    const el = ref.current;
    if (!el) {
      render(target);
      return;
    }

    render(0);
    let raf = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        const duration = 1100;
        let start = 0;
        const step = (ts: number) => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          render(Math.round(eased * target));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
