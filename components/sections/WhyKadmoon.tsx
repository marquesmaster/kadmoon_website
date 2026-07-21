import { why } from '@/lib/content';
import { Section } from '../Section';
import { SectionHeader } from '../SectionHeader';
import { Reveal } from '../Reveal';

export function WhyKadmoon() {
  return (
    <Section id="why" tone="mist">
      <SectionHeader eyebrow={why.eyebrow} title={why.title} sub={why.sub} />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {why.items.map((item, i) => (
          <Reveal
            as="article"
            key={item.title}
            delay={(i % 3) * 80}
            className="rounded-2xl border border-line bg-paper p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy/5 font-mono text-sm text-navy">
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold tracking-[-0.02em] text-ink">
              {item.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
