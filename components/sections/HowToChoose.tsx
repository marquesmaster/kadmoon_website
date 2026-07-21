import { howToChoose } from '@/lib/content';
import { Section } from '../Section';
import { SectionHeader } from '../SectionHeader';
import { Reveal } from '../Reveal';

export function HowToChoose() {
  return (
    <Section id="how-to-choose" tone="paper">
      <SectionHeader
        eyebrow={howToChoose.eyebrow}
        title={howToChoose.title}
        sub={howToChoose.sub}
      />

      <ol className="mt-14 grid gap-5 lg:grid-cols-2">
        {howToChoose.items.map((item, i) => (
          <Reveal
            as="li"
            key={item.num}
            delay={(i % 2) * 90}
            className="rounded-2xl border border-line bg-paper p-7 md:p-8"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-2xl font-medium text-accent">{item.num}</span>
              <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                {item.title}
              </h3>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-2">{item.body}</p>

            <div className="mt-5 rounded-xl border-l-2 border-accent bg-mist px-5 py-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-navy">
                At Kadmoon
              </span>
              <p className="mt-2 text-[15px] leading-relaxed text-ink">{item.answer}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
