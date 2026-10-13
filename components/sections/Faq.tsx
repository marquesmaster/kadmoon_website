'use client';

import { useState } from 'react';
import { faq } from '@/lib/content';
import { siteConfig } from '@/lib/site';
import { Section } from '../Section';
import { Eyebrow } from '../Eyebrow';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" tone="paper">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Left: header + conversion card */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>{faq.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-display-sm text-ink">{faq.title}</h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-2">
            Straight answers on scope, data, ownership, and how an engagement starts. If yours is
            not here, ask us directly.
          </p>

          <div className="mt-8 rounded-2xl border border-line bg-mist p-6">
            <div className="font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-3">
              Still have a question?
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
              Tell us what you move and where the friction is. You get a senior point of view and a
              quote, with a response within one business day.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent/90"
              >
                Request a quote <span aria-hidden>→</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[14px] font-medium text-ink-2 transition-colors hover:text-accent"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* Right: accordion */}
        <div className="divide-y divide-line border-y border-line">
          {faq.items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-medium tracking-[-0.01em] text-ink md:text-lg">
                      {item.q}
                    </span>
                    <span
                      aria-hidden
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-ink-2 transition-transform duration-300 ${
                        open ? 'rotate-45 border-accent text-accent' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  className={`grid overflow-hidden transition-all duration-300 ${
                    open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="min-h-0">
                    <p className="max-w-2xl pb-6 pr-6 text-[15px] leading-relaxed text-ink-2">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
