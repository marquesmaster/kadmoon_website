import { work } from '@/lib/content';
import { Section } from '../Section';
import { SectionHeader } from '../SectionHeader';
import { Reveal } from '../Reveal';

export function Work() {
  return (
    <Section id="work" tone="paper">
      <SectionHeader eyebrow={work.eyebrow} title={work.title} sub={work.sub} />

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {work.cases.map((c, i) => (
          <Reveal
            as="article"
            key={c.title}
            delay={i * 90}
            className="flex flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-card"
          >
            <div className="relative flex h-40 items-end bg-navy p-6">
              <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
              <span className="relative font-mono text-[11px] uppercase tracking-[0.12em] text-white/70">
                {c.tag}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-7 md:p-8">
              <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                {c.title}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-2">{c.body}</p>
              <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-accent">
                {c.status}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
