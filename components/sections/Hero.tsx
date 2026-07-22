import { hero } from '@/lib/content';
import { Eyebrow } from '../Eyebrow';
import { Button } from '../Button';
import { Icon } from '../Icon';

const delivery = [
  'The Git repository',
  'CI/CD pipelines',
  'Infrastructure credentials',
  'An operational runbook',
  'Full documentation',
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-70" aria-hidden />
      <div aria-hidden className="blob blob-accent -right-24 -top-16 h-72 w-72 md:h-96 md:w-96" />
      <div aria-hidden className="blob blob-navy right-1/4 top-40 h-64 w-64" />

      <div className="relative mx-auto max-w-shell px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Left: text */}
          <div>
            <Eyebrow>{hero.eyebrow}</Eyebrow>

            <h1 className="mt-5 font-display text-display-xl text-ink">
              {hero.headlineBefore}
              <span className="text-accent">{hero.headlineAccent}</span>
              {hero.headlineAfter}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2 md:text-xl">
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

            <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-mist px-4 py-2">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="font-mono text-xs tracking-[0.04em] text-ink-2">
                {hero.flagship}
              </span>
            </div>
          </div>

          {/* Right: "on delivery you get" panel */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy p-7 shadow-card-hover md:p-8">
              <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" aria-hidden />
              <div className="relative">
                <div className="flex items-center gap-2.5">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/70">
                    On delivery, you own
                  </span>
                </div>
                <ul className="mt-6 space-y-4">
                  {delivery.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent">
                        <Icon name="qa" className="h-4 w-4" />
                      </span>
                      <span className="text-[15px] font-medium text-white">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 border-t border-white/10 pt-5">
                  <p className="text-[13px] leading-relaxed text-white/60">
                    No lock-in. No permanent dependency. Every line is yours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
