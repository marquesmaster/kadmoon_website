'use client';

import { useState } from 'react';
import { faq } from '@/lib/content';
import { Section } from '../Section';
import { SectionHeader } from '../SectionHeader';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" tone="paper">
      <SectionHeader eyebrow={faq.eyebrow} title={faq.title} />

      <div className="mx-auto mt-12 max-w-3xl divide-y divide-line border-y border-line">
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
                  <p className="max-w-2xl pb-6 pr-10 text-[15px] leading-relaxed text-ink-2">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
