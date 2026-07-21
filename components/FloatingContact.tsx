'use client';

import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm';

/**
 * Floating contact popup (same pattern as the Bradata site): a pill button
 * fixed bottom-right that opens a panel with the contact form embedded. The
 * button appears after a short delay or once the visitor scrolls.
 */
export function FloatingContact() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 3500);
    const onScroll = () => {
      const denom = document.body.scrollHeight - window.innerHeight;
      if (denom > 0 && window.scrollY / denom > 0.08) setVisible(true);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close contact form' : 'Start a project'}
        aria-expanded={open}
        className={`fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white shadow-card-hover transition-all duration-500 hover:-translate-y-0.5 hover:bg-accent/90 ${
          visible && !open
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H8l-4 4V6c0-1.1.9-2 2-2z" />
        </svg>
        <span className="hidden sm:inline">Start a project</span>
      </button>

      {/* Backdrop */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-navy/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Contact form"
        style={{ transformOrigin: 'bottom right' }}
        className={`fixed z-50 flex flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-card-hover transition-all duration-300 inset-x-4 bottom-4 max-h-[calc(100dvh-2rem)] md:inset-auto md:bottom-6 md:right-6 md:w-[440px] ${
          open
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-4 scale-[0.98] opacity-0'
        }`}
      >
        {/* Header */}
        <div className="relative flex items-center justify-between overflow-hidden bg-navy px-5 py-4 text-white">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" aria-hidden />
          <div className="relative">
            <p className="font-display text-base font-semibold">Start a project</p>
            <p className="text-[12px] text-white/60">A technical proposal within one business day.</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="relative flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <div className="overflow-y-auto p-5">
          <ContactForm theme="light" idPrefix="popup" compact />
        </div>
      </div>
    </>
  );
}
