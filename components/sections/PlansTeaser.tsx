import { Section } from '../Section';
import { Eyebrow } from '../Eyebrow';
import { Button } from '../Button';
import { tiers, formatUsd } from '@/lib/plans';

// Compact plans summary for the home page. Full detail + term toggle live on
// /packages; this shows the shape and the entry price so the home carries the
// offer without a wall of text.
export function PlansTeaser() {
  return (
    <Section id="plans" tone="paper">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <Eyebrow>Plans</Eyebrow>
          <h2 className="mt-4 font-display text-display-sm font-semibold text-ink">
            Priced by capacity, not by the hour.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-2">
            A dedicated team on a monthly subscription, with a defined pool of hours and a clear SLA.
            Unlimited requests within your hours.
          </p>
        </div>
        <Button href="/packages" variant="ghost">
          Compare all plans <span aria-hidden>→</span>
        </Button>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-2xl border p-6 ${
              t.featured ? 'border-accent/40 bg-white ring-1 ring-accent/20' : 'border-line bg-white'
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-display text-lg font-semibold text-ink">{t.name}</h3>
              {t.featured && (
                <span className="inline-flex rounded-full bg-accent px-2 py-0.5 font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                  Popular
                </span>
              )}
            </div>
            <p className="mt-1 font-mono text-[11px] text-ink-3">{t.capacity}</p>
            <div className="mt-4">
              {t.base != null ? (
                <p className="flex items-baseline gap-1">
                  <span className="font-sans text-[12px] text-ink-3">from</span>
                  <span className="font-display text-[26px] font-bold leading-none text-ink">
                    {formatUsd(t.base)}
                  </span>
                  <span className="font-sans text-[12px] text-ink-3">/mo</span>
                </p>
              ) : (
                <p className="font-display text-[26px] font-bold leading-none text-ink">
                  Let&rsquo;s talk
                </p>
              )}
            </div>
            <p className="mt-3 text-[13.5px] leading-relaxed text-ink-2">{t.bestFor}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-[13px] text-ink-3">
        Prices are &ldquo;from&rdquo; and depend on your environment. Billed monthly in advance, on a
        12-month term.
      </p>
    </Section>
  );
}
