import { hero } from '@/lib/content';
import { Button } from '../Button';

// Illustrative product UI — a stylized trade operations console, not real
// client data. Labeled "Sample" so it is never mistaken for a live figure.
function TradeConsoleMock() {
  const checks = [
    'HTS classified',
    'Parties screened',
    'Duty & landed cost',
    'ACE filing ready',
  ];
  return (
    <div className="relative">
      {/* Color-block accents */}
      <div aria-hidden className="absolute -right-4 -top-5 h-40 w-40 rounded-3xl bg-accent md:h-52 md:w-52" />
      <div aria-hidden className="absolute -bottom-6 -left-5 hidden h-28 w-28 rounded-3xl bg-ice md:block" />

      <div className="relative overflow-hidden rounded-3xl border border-line bg-white shadow-card-hover">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-line px-5 py-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-line" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-line" aria-hidden />
          <span className="ml-2 font-mono text-[11px] tracking-[0.02em] text-ink-3">
            kadmoon · trade console
          </span>
          <span className="ml-auto rounded-full bg-mist px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-ink-3">
            Sample
          </span>
        </div>

        <div className="p-5 md:p-6">
          {/* KPI tiles */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { k: 'In transit', v: '24' },
              { k: 'Cleared today', v: '18' },
              { k: 'Flags', v: '2' },
            ].map((t) => (
              <div key={t.k} className="rounded-xl bg-mist px-3 py-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">{t.k}</div>
                <div className="mt-1 font-display text-xl font-bold tracking-tight text-ink">{t.v}</div>
              </div>
            ))}
          </div>

          {/* Compliance checklist */}
          <div className="mt-5 rounded-xl border border-line p-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-[12px] font-semibold text-ink">
                Shipment #IM-4821 · pre-departure
              </span>
              <span className="rounded-full bg-success/12 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-success">
                Ready
              </span>
            </div>
            <ul className="mt-3 space-y-2.5">
              {checks.map((c) => (
                <li key={c} className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="grid h-5 w-5 flex-none place-items-center rounded-md bg-accent text-white"
                  >
                    <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3">
                      <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[14px] text-ink">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-70" aria-hidden />

      <div className="relative mx-auto max-w-shell px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left: text */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-2">
              <span aria-hidden className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              {hero.eyebrow}
            </span>

            <h1 className="mt-6 font-display text-display-xl text-ink" style={{ textWrap: 'balance' }}>
              {hero.headlineBefore}
              <span className="text-accent">{hero.headlineAccent}</span>
              {hero.headlineAfter}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2 md:text-xl">
              {hero.subhead}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {hero.ctas.map((cta) => (
                <Button
                  key={cta.href}
                  href={cta.href}
                  size="lg"
                  variant={cta.primary ? 'primary' : 'ghost'}
                >
                  {cta.label}
                  {cta.primary && <span aria-hidden>→</span>}
                </Button>
              ))}
            </div>

            <p className="mt-8 max-w-md font-mono text-[12px] leading-relaxed tracking-[0.01em] text-ink-3">
              {hero.flagship}
            </p>
          </div>

          {/* Right: illustrative trade console */}
          <div className="lg:pl-6">
            <TradeConsoleMock />
          </div>
        </div>
      </div>
    </section>
  );
}
