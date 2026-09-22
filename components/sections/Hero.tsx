import { hero } from '@/lib/content';
import { Button } from '../Button';

// Illustrative dashboard mock — a stylized product visual (Brex-style), not
// real client data. Labeled "Sample" so it is never mistaken for a metric.
function DashboardMock() {
  const bars = [38, 52, 46, 63, 58, 74, 69, 88];
  return (
    <div className="relative">
      {/* Color-block behind the card (Brex color-blocking motif) */}
      <div
        aria-hidden
        className="absolute -right-4 -top-5 h-40 w-40 rounded-3xl bg-accent md:h-52 md:w-52"
      />
      <div
        aria-hidden
        className="absolute -bottom-6 -left-5 hidden h-28 w-28 rounded-3xl bg-ice md:block"
      />

      <div className="relative overflow-hidden rounded-3xl border border-line bg-white shadow-card-hover">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-line px-5 py-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-line" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-line" aria-hidden />
          <span className="ml-2 font-mono text-[11px] tracking-[0.02em] text-ink-3">
            executive-overview.pbix
          </span>
          <span className="ml-auto rounded-full bg-mist px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-ink-3">
            Sample
          </span>
        </div>

        <div className="p-5 md:p-6">
          {/* KPI tiles */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { k: 'Revenue', v: '$4.2M', d: '+8.1%' },
              { k: 'Margin', v: '31.4%', d: '+2.2pt' },
              { k: 'On-time', v: '96%', d: '+1.4pt' },
            ].map((t) => (
              <div key={t.k} className="rounded-xl bg-mist px-3 py-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
                  {t.k}
                </div>
                <div className="mt-1 font-display text-lg font-bold tracking-tight text-ink">
                  {t.v}
                </div>
                <div className="font-mono text-[10px] font-bold text-success">{t.d}</div>
              </div>
            ))}
          </div>

          {/* Bar chart */}
          <div className="mt-5 rounded-xl border border-line p-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-[12px] font-semibold text-ink">
                Revenue by month
              </span>
              <span className="font-mono text-[10px] text-ink-3">FY, indexed</span>
            </div>
            <svg viewBox="0 0 320 96" className="mt-3 h-24 w-full" role="img" aria-label="Illustrative revenue trend, rising">
              {bars.map((h, i) => {
                const x = 8 + i * 38;
                const barH = (h / 100) * 76;
                const y = 84 - barH;
                return (
                  <rect
                    key={i}
                    x={x}
                    y={y}
                    width="22"
                    height={barH}
                    rx="4"
                    className="fill-accent"
                    opacity={0.35 + (i / bars.length) * 0.65}
                  />
                );
              })}
            </svg>
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

          {/* Right: illustrative dashboard */}
          <div className="lg:pl-6">
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
  );
}
