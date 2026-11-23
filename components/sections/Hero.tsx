import { hero, clientLogos } from '@/lib/content';
import { Button } from '../Button';
import { Dashboard } from '../reports/dashboard/Dashboard';
import { heroDashboard } from '@/lib/cases/dashboards';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-paper via-paper to-mist pb-10 pt-24 md:pb-14 md:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-70" aria-hidden />

      <div className="relative mx-auto max-w-shell px-6">
        <div>
          {/* Text */}
          <div className="max-w-2xl">
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

          {/* A live, navigable Power BI style report (the CFO board pack).
              Switch pages with the tabs; hover the charts. */}
          <div className="mt-10 md:mt-12">
            <Dashboard spec={heroDashboard} />
            <p className="mt-3 text-center text-[11px] text-ink-3">
              A board pack we build, live in your browser. Switch pages, hover the charts.
              Representative, not a specific client.
            </p>
          </div>
        </div>

        {/* A continuous marquee of the organizations the senior team behind
            Kadmoon has worked with, through our affiliate Fynx. Logos render as
            images where a file exists; the rest scroll as wordmarks. */}
        {clientLogos.length > 0 && (
          <div className="mt-8 border-t border-line pt-6 md:mt-9">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
              Our team&rsquo;s work in Brazil, through our affiliate Fynx
            </span>
            <div className="marquee-mask marquee-pause mt-4 overflow-hidden">
              {/* Two identical halves so the -50% translate loops seamlessly. */}
              <ul className="flex w-max animate-marquee items-center gap-x-10 pr-10">
                {[...clientLogos, ...clientLogos].map((c, i) => (
                  <li
                    key={`${c.name}-${i}`}
                    aria-hidden={i >= clientLogos.length}
                    className="flex shrink-0 items-center"
                  >
                    {c.logo ? (
                      <span
                        className={`inline-flex h-9 items-center rounded px-2 ${
                          c.darkBg ? 'bg-navy' : ''
                        }`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={c.logo}
                          alt={c.name}
                          loading="lazy"
                          className="max-h-7 w-auto object-contain opacity-70 grayscale"
                        />
                      </span>
                    ) : (
                      <span className="whitespace-nowrap font-display text-xl font-semibold tracking-[-0.01em] text-ink-3/80">
                        {c.name}
                      </span>
                    )}
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
