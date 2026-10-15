import { process } from '@/lib/content';
import { Section } from '../Section';
import { SectionHeader } from '../SectionHeader';
import { Reveal } from '../Reveal';
import { Icon } from '../Icon';

// One icon per phase: discovery, foundation (data model), build, sustain.
const icons = ['discovery', 'architecture', 'stack', 'support'];

export function Process() {
  return (
    <Section id="process" tone="mist" className="border-t border-line">
      <SectionHeader eyebrow={process.eyebrow} title={process.title} />

      <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {process.steps.map((step, i) => (
          <Reveal
            as="li"
            key={step.num}
            delay={(i % 4) * 70}
            className="group relative rounded-2xl border border-line bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover md:p-7"
          >
            <div className="flex items-center justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy/5 text-navy transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                <Icon name={icons[i]} className="h-5 w-5" />
              </span>
              <span className="rounded-full border border-line bg-mist px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-2">
                {step.num} · {step.meta}
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
