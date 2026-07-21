import { process } from '@/lib/content';
import { Section } from '../Section';
import { SectionHeader } from '../SectionHeader';
import { Reveal } from '../Reveal';

export function Process() {
  return (
    <Section id="process" tone="mist">
      <SectionHeader eyebrow={process.eyebrow} title={process.title} />

      <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
        {process.steps.map((step, i) => (
          <Reveal
            as="li"
            key={step.num}
            delay={(i % 3) * 80}
            className="group relative bg-paper p-7 md:p-8"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-3xl font-semibold tracking-[-0.03em] text-navy/25 transition-colors group-hover:text-accent">
                {step.num}
              </span>
              <span className="rounded-full border border-line bg-mist px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-2">
                {step.meta}
              </span>
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold tracking-[-0.02em] text-ink">
              {step.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{step.body}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
