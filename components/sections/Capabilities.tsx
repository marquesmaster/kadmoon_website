import { capabilities } from '@/lib/content';
import { Section } from '../Section';
import { SectionHeader } from '../SectionHeader';
import { Reveal } from '../Reveal';

export function Capabilities() {
  return (
    <Section id="capabilities" tone="paper">
      <SectionHeader
        eyebrow={capabilities.eyebrow}
        title={capabilities.title}
        sub={capabilities.sub}
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
        {capabilities.items.map((item, i) => (
          <Reveal
            as="article"
            key={item.title}
            delay={(i % 3) * 80}
            className="group flex flex-col bg-paper p-7 transition-colors hover:bg-mist md:p-8"
          >
            <span className="font-mono text-xs text-ink-3">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.02em] text-ink">
              {item.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{item.body}</p>
            <span
              aria-hidden
              className="mt-5 h-0.5 w-8 rounded-full bg-line transition-all duration-300 group-hover:w-12 group-hover:bg-accent"
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
