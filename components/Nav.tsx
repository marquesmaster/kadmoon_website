'use client';

import { useEffect, useRef, useState } from 'react';
import { nav } from '@/lib/content';
import type { NavItem } from '@/lib/content';
import { Wordmark } from './Wordmark';

function hasPanel(item: NavItem): item is Extract<NavItem, { panel: unknown }> {
  return 'panel' in item;
}

function openSearch() {
  if (typeof window !== 'undefined') window.dispatchEvent(new Event('kadmoon:search'));
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      width="10"
      height="10"
      viewBox="0 0 10 10"
      className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    >
      <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchButton({ className = '' }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={openSearch}
      aria-label="Search"
      className={`inline-flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink-3 transition-colors hover:border-ink-3/40 hover:text-ink-2 ${className}`}
    >
      <svg aria-hidden width="15" height="15" viewBox="0 0 16 16">
        <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 11l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span className="hidden xl:inline">Search</span>
      <span className="hidden xl:inline font-mono text-[10px] text-ink-3/70">⌘K</span>
    </button>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<number | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenIndex(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const open = (i: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenIndex(i);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenIndex(null), 120);
  };

  const solid = scrolled || openIndex !== null;
  const items = nav.menu;
  const activePanel = openIndex !== null && hasPanel(items[openIndex]) ? items[openIndex] : null;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'border-b border-line bg-paper/90 backdrop-blur-md' : 'border-b border-transparent bg-paper/0'
      }`}
      onMouseLeave={scheduleClose}
    >
      <div className="mx-auto flex h-16 max-w-shell items-center gap-6 px-6 md:h-[72px]">
        <a href="/" aria-label="Kadmoon, Inc. home" className="shrink-0">
          <Wordmark />
        </a>

        {/* Desktop top-level items */}
        <nav className="hidden flex-1 items-center gap-1 lg:flex" aria-label="Primary">
          {items.map((item, i) =>
            hasPanel(item) ? (
              <button
                key={item.label}
                type="button"
                aria-haspopup="true"
                aria-expanded={openIndex === i}
                onMouseEnter={() => open(i)}
                onFocus={() => open(i)}
                onClick={() => setOpenIndex((v) => (v === i ? null : i))}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  openIndex === i ? 'bg-mist text-ink' : 'text-ink-2 hover:text-ink'
                }`}
              >
                {item.label}
                <Chevron open={openIndex === i} />
              </button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onMouseEnter={scheduleClose}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink-2 transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        {/* Desktop utility */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <SearchButton />
          <a
            href={nav.access.href}
            className="rounded-lg border border-line px-4 py-2 text-sm font-semibold text-ink-2 transition-colors hover:border-ink-3/40 hover:text-ink"
          >
            {nav.access.label}
          </a>
          <a
            href={nav.cta.href}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent/90"
          >
            {nav.cta.label}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="ml-auto flex items-center gap-1.5 lg:hidden">
          <button
            type="button"
            onClick={openSearch}
            aria-label="Search"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-2"
          >
            <svg aria-hidden width="16" height="16" viewBox="0 0 16 16">
              <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 11l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink"
          >
            <span className="relative block h-3.5 w-4">
              <span className={`absolute left-0 block h-0.5 w-4 bg-current transition-all ${mobileOpen ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-1.5 block h-0.5 w-4 bg-current transition-all ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 block h-0.5 w-4 bg-current transition-all ${mobileOpen ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Desktop mega-menu panel */}
      {activePanel && (
        <div
          className="absolute inset-x-0 top-full hidden border-b border-line bg-paper shadow-[0_24px_48px_-24px_rgba(9,38,66,0.25)] lg:block"
          onMouseEnter={() => open(openIndex as number)}
          onMouseLeave={scheduleClose}
        >
          <div className="mx-auto grid max-w-shell gap-10 px-6 py-8 lg:grid-cols-[1fr_1fr_0.9fr]">
            {activePanel.panel.groups.map((group) => (
              <div key={group.title}>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">{group.title}</p>
                <ul className="mt-4 space-y-1">
                  {group.items.map((it) => (
                    <li key={it.href}>
                      <a
                        href={it.href}
                        className="group block rounded-xl px-3 py-2.5 transition-colors hover:bg-mist"
                      >
                        <span className="block text-sm font-semibold text-ink group-hover:text-accent">
                          {it.label}
                        </span>
                        {it.desc && (
                          <span className="mt-0.5 block text-[13px] leading-snug text-ink-3">{it.desc}</span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {activePanel.panel.featured && (
              <div className="relative overflow-hidden rounded-2xl bg-navy p-6">
                <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
                <div className="relative">
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
                    {activePanel.panel.featured.eyebrow}
                  </p>
                  <p className="mt-3 font-display text-xl font-semibold text-white">
                    {activePanel.panel.featured.title}
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/70">
                    {activePanel.panel.featured.body}
                  </p>
                  <a
                    href={activePanel.panel.featured.href}
                    className="mt-5 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                  >
                    {activePanel.panel.featured.cta} <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-paper lg:hidden">
          <nav className="mx-auto flex max-w-shell flex-col px-6 py-4" aria-label="Mobile">
            {items.map((item, i) =>
              hasPanel(item) ? (
                <div key={item.label} className="border-b border-line/70">
                  <button
                    type="button"
                    aria-expanded={mobileSection === i}
                    onClick={() => setMobileSection((v) => (v === i ? null : i))}
                    className="flex w-full items-center justify-between py-3.5 text-base font-semibold text-ink"
                  >
                    {item.label}
                    <Chevron open={mobileSection === i} />
                  </button>
                  {mobileSection === i && (
                    <div className="pb-3">
                      {item.panel.groups.map((group) => (
                        <div key={group.title} className="mb-3">
                          <p className="px-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-3">
                            {group.title}
                          </p>
                          <ul className="mt-1.5">
                            {group.items.map((it) => (
                              <li key={it.href}>
                                <a
                                  href={it.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block rounded-lg px-1 py-2 text-[15px] text-ink-2 hover:text-ink"
                                >
                                  {it.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-line/70 py-3.5 text-base font-semibold text-ink"
                >
                  {item.label}
                </a>
              ),
            )}

            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href={nav.access.href}
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-lg border border-line px-5 py-3 text-sm font-semibold text-ink"
              >
                {nav.access.label}
              </a>
              <a
                href={nav.cta.href}
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white"
              >
                {nav.cta.label}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
