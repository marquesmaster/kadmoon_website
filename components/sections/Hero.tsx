import { hero, groupCompanies } from '@/lib/content';
import { Button } from '../Button';

// Stylized Power BI dashboard used as product UI. Representative figures, not
// attributed to any client.
function DashboardMock() {
  const breakdown = [
    { k: 'Revenue', v: '$2,480,000' },
    { k: 'Cost of goods sold', v: '$1,512,000' },
    { k: 'Operating expenses', v: '$610,000' },
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
            kadmoon · Power BI
          </span>
        </div>

        <div className="p-5 md:p-6">
          {/* KPI tiles */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { k: 'Revenue', v: '$2.48M' },
              { k: 'Gross margin', v: '39.0%' },
              { k: 'EBITDA', v: '$358k' },
            ].map((t) => (
              <div key={t.k} className="rounded-xl bg-mist px-3 py-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">{t.k}</div>
                <div className="mt-1 font-display text-xl font-bold tracking-tight text-ink">{t.v}</div>
              </div>
            ))}
          </div>

          {/* Revenue & margin summary */}
          <div className="mt-5 rounded-xl border border-line p-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-[12px] font-semibold text-ink">
                Revenue &amp; margin · this month
              </span>
              <span className="rounded-full bg-success/12 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-success">
                Modeled
              </span>
            </div>
            <ul className="mt-3 space-y-2">
              {breakdown.map((row) => (
                <li key={row.k} className="flex items-center justify-between text-[13px]">
                  <span className="text-ink-2">{row.k}</span>
                  <span className="font-mono tabular-nums text-ink">{row.v}</span>
                </li>
              ))}
              <li className="mt-1 flex items-center justify-between border-t border-line pt-2.5 text-[13px]">
                <span className="font-semibold text-ink">EBITDA</span>
                <span className="font-mono tabular-nums font-semibold text-accent">$358,000</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-paper via-paper to-mist pb-10 pt-24 md:pb-14 md:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-70" aria-hidden />

      <div className="relative mx-auto max-w-shell px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Left: text */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-2">
              <span aria-hidden className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              {hero.eyebrow}
            </span>

            <h1 className="mt-5 font-display text-display-xl text-ink" style={{ textWrap: 'balance' }}>
              {hero.headlineBefore}
              <span className="text-accent">{hero.headlineAccent}</span>
              {hero.headlineAfter}
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-2 md:text-xl">
              {hero.subhead}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
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

            <p className="mt-5 font-mono text-[12px] tracking-[0.02em] text-ink-3">
              {hero.deliveryLine}
            </p>

            <div className="mt-6 flex max-w-lg flex-wrap gap-2">
              {hero.flagship.split(' · ').map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-white px-3 py-1.5 font-mono text-[11px] text-ink-3"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Power BI dashboard UI */}
          <div className="lg:pl-6">
            <DashboardMock />
          </div>
        </div>

        {/* Group companies: a continuous marquee of the companies in the group
            Kadmoon belongs to. Names scroll (logos added when available). */}
        {groupCompanies.length > 0 && (
          <div className="mt-8 border-t border-line pt-6 md:mt-9">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
              Part of a group of Microsoft specialists
            </span>
            <div className="marquee-mask marquee-pause mt-4 overflow-hidden">
              {/* Two identical halves so the -50% translate loops seamlessly.
                  Each half repeats the list enough to span a wide viewport. */}
              <ul className="flex w-max animate-marquee items-center gap-x-12 pr-12">
                {Array.from({ length: 6 })
                  .flatMap(() => groupCompanies)
                  .map((name, i) => (
                    <li
                      key={`${name}-${i}`}
                      aria-hidden={i >= groupCompanies.length * 3}
                      className="whitespace-nowrap font-display text-xl font-semibold tracking-[-0.01em] text-ink-3/80"
                    >
                      {name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
