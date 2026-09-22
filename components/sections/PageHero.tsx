import type { ReactNode } from 'react';

// Shared internal-page hero in the Brex design language: off-white canvas,
// faint grid, an offset orange color-block accent, an uppercase mono pill
// eyebrow, and a heavy, tight display headline. Body content (intro, CTAs)
// is passed as children; optional breadcrumbs render above the eyebrow.
export function PageHero({
  eyebrow,
  title,
  breadcrumbs,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  breadcrumbs?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-60" aria-hidden />
      {/* Brex color-blocking accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-16 hidden h-56 w-56 rounded-[2.25rem] bg-accent/10 md:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-28 top-40 hidden h-24 w-24 rounded-3xl bg-ice md:block"
      />

      <div className="relative mx-auto max-w-4xl px-6 pb-14 pt-36 md:pt-40">
        {breadcrumbs}
        <span
          className={`inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-2 ${
            breadcrumbs ? 'mt-6' : ''
          }`}
        >
          <span aria-hidden className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          {eyebrow}
        </span>
        <h1
          className="mt-6 max-w-3xl font-display text-display-lg text-ink"
          style={{ textWrap: 'balance' }}
        >
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
}
