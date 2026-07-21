'use client';

import { useEffect, useRef } from 'react';

/** Thin accent progress bar at the top that tracks scroll position. */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let ticking = false;
    const update = () => {
      const denom = document.documentElement.scrollHeight - window.innerHeight;
      const p = denom > 0 ? window.scrollY / denom : 0;
      el.style.transform = `scaleX(${Math.min(Math.max(p, 0), 1)})`;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return <div ref={ref} className="scroll-progress" style={{ transform: 'scaleX(0)' }} aria-hidden />;
}
