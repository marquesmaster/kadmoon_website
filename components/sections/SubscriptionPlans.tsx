'use client';

import { useState } from 'react';
import { Button } from '../Button';
import { siteConfig } from '@/lib/site';
import { tiers, formatUsd as fmt } from '@/lib/plans';

// Term options. Longer commitment = deeper discount on the monthly fee.
const terms = [
  { months: 12, factor: 1, off: null },
  { months: 24, factor: 0.9, off: '−10%' },
  { months: 36, factor: 0.85, off: '−15%' },
] as const;

export function SubscriptionPlans() {
  const [termIdx, setTermIdx] = useState(0);
  const term = terms[termIdx];

  return (
    <section id="plans" className="bg-paper py-20 md:py-24">
      <div className="mx-auto max-w-shell px-6">
        {/* Term toggle */}
        <div className="flex flex-col items-center gap-3">
          <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-3">
            Choose your term
          </span>
          <div
            role="tablist"
            aria-label="Contract term"
            className="inline-flex rounded-full border border-line bg-mist p-1"
          >
            {terms.map((t, i) => (
              <button
                key={t.months}
                role="tab"
                aria-selected={i === termIdx}
                onClick={() => setTermIdx(i)}
                className={`relative rounded-full px-4 py-2 font-sans text-sm font-semibold transition-colors md:px-5 ${
                  i === termIdx ? 'bg-navy text-white' : 'text-ink-2 hover:text-ink'
                }`}
              >
                {t.months} months
                {t.off && (
                  <span
                    className={`ml-1.5 text-[11px] font-bold ${
                      i === termIdx ? 'text-accent' : 'text-accent'
                    }`}
                  >
                    {t.off}
                  </span>
                )}
              </button>
            ))}
          </div>
          <p className="text-[13px] text-ink-3">
            Prices are &ldquo;from&rdquo; and depend on your environment. Billed monthly in advance,
            on a 12-month term.
          </p>
        </div>

        {/* Tier cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => {
            const monthly = tier.base != null ? tier.base * term.factor : null;
            return (
              <article
                key={tier.name}
                className={`flex flex-col rounded-2xl border bg-white p-7 shadow-card ${
                  tier.featured ? 'border-accent/40 ring-1 ring-accent/20' : 'border-line'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-ink">{tier.name}</h3>
                  {tier.featured && (
                    <span className="inline-flex rounded-full bg-accent px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                      Most popular
                    </span>
                  )}
                </div>
                <p className="mt-1.5 font-mono text-[12px] text-ink-3">{tier.capacity}</p>

                <div className="mt-5 min-h-[68px]">
                  {monthly != null ? (
                    <>
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-sans text-[13px] text-ink-3">from</span>
                        <span className="font-display text-[32px] font-bold leading-none text-ink">
                          {fmt(monthly)}
                        </span>
                        <span className="font-sans text-[13px] text-ink-3">/mo</span>
                      </div>
                      <p className="mt-1.5 text-[12px] text-ink-3">
                        on a {term.months}-month term
                        {term.off ? ` (${term.off})` : ''}
                      </p>
                    </>
                  ) : (
                    <>
                      <span className="font-display text-[32px] font-bold leading-none text-ink">
                        Let&rsquo;s talk
                      </span>
                      <p className="mt-1.5 text-[12px] text-ink-3">Custom scope and pricing</p>
                    </>
                  )}
                </div>

                <p className="mt-4 text-[13px] font-medium text-ink">Best for</p>
                <p className="mt-1 text-[13.5px] leading-relaxed text-ink-2">{tier.bestFor}</p>

                <p className="mt-5 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-3">
                  {tier.includesLabel}
                </p>
                <ul className="mt-3 space-y-2.5">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-sm bg-accent" />
                      <span className="text-[13.5px] leading-relaxed text-ink-2">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 rounded-lg bg-mist px-3.5 py-2.5">
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-navy">
                    SLA
                  </span>
                  <span className="ml-2 text-[13px] text-ink">{tier.sla}</span>
                </div>

                <div className="mt-6 flex-1" />
                <Button
                  href={siteConfig.bookingsUrl}
                  variant={tier.featured ? 'primary' : 'ghost'}
                  className="w-full justify-center"
                >
                  {tier.base != null ? 'Book a meeting' : 'Talk to us'}
                </Button>
              </article>
            );
          })}
        </div>

        {/* Cross-tier guarantees */}
        <ul className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-3 text-center">
          {[
            'Unlimited requests within your monthly hours',
            'Works your business hours, in English',
            'Built in your tenant, you own everything',
            'One-time add-ons: migrations, Fabric, training',
          ].map((f) => (
            <li key={f} className="inline-flex items-center gap-2 text-[13.5px] text-ink-2">
              <span aria-hidden className="text-accent">
                ✓
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
