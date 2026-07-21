import { testimonials } from '@/lib/content';
import { Section } from '../Section';
import { SectionHeader } from '../SectionHeader';
import { Reveal } from '../Reveal';

/** Renders only when real testimonials exist. Never shows fabricated quotes. */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section id="testimonials" tone="mist">
      <SectionHeader
        eyebrow="Client stories"
        title="What our clients say."
        align="center"
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal
            as="figure"
            key={`${t.name}-${i}`}
            delay={(i % 3) * 80}
            className="flex flex-col rounded-2xl border border-line bg-paper p-7 shadow-card"
          >
            <span aria-hidden className="font-display text-4xl leading-none text-accent">
              &ldquo;
            </span>
            <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-ink">
              {t.quote}
            </blockquote>
            <figcaption className="mt-5 border-t border-line pt-4">
              <span className="block font-display text-sm font-semibold text-ink">{t.name}</span>
              <span className="block text-[13px] text-ink-2">
                {t.role}, {t.company}
              </span>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
