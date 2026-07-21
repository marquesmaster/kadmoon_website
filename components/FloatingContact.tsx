'use client';

import { useEffect, useState } from 'react';

/** Sticky contact button that appears after the user scrolls past the hero. */
export function FloatingContact() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#contact"
      aria-label="Start a project"
      className={`fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <span
        aria-hidden
        className="inline-block h-2 w-2 animate-pulse rounded-full bg-white"
      />
      Start a project
    </a>
  );
}
