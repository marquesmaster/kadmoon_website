import { engagement } from '@/lib/content';
import { Section } from '../Section';
import { SectionHeader } from '../SectionHeader';
import { Reveal } from '../Reveal';

export function Engagement() {
  return (
    <Section id="engagement" tone="mist">
      <SectionHeader eyebrow={engagement.eyebrow} title={engagement.title} sub={engagement.sub} />

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {engagement.models.map((m, i) => (
          <Reveal
            as="article"
            key={m.name}
            delay={i * 90}
            className="flex flex-col rounded-2xl border border-line bg-paper p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover md:p-8"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.02em] text-ink">
              {m.name}
            </h3>
            <p className="mt-1 text-[13px] text-ink-3">{m.best}</p>
            <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-2">{m.body}</p>
            <ul className="mt-5 space-y-2 border-t border-line pt-5">
              {m.points.map((pt) => (
                <li key={pt} className="flex items-center gap-2.5 text-[14px] text-ink">
                  <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {pt}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
