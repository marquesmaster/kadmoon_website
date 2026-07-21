import { techStack } from '@/lib/content';
import { Section } from '../Section';
import { SectionHeader } from '../SectionHeader';
import { Reveal } from '../Reveal';

export function TechStack() {
  return (
    <Section id="stack" tone="paper">
      <SectionHeader eyebrow={techStack.eyebrow} title={techStack.title} sub={techStack.sub} />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {techStack.groups.map((g, i) => (
          <Reveal
            as="div"
            key={g.label}
            delay={(i % 5) * 70}
            className="rounded-2xl border border-line bg-mist p-5"
          >
            <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-navy">
              {g.label}
            </h3>
            <ul className="mt-3 space-y-1.5">
              {g.items.map((item) => (
                <li key={item} className="text-[14px] text-ink-2">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      {/* Marquee */}
      <div
        className="marquee-mask mt-12 overflow-hidden"
        aria-hidden
      >
        <div className="flex w-max animate-marquee gap-3">
          {[...techStack.marquee, ...techStack.marquee].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="whitespace-nowrap rounded-full border border-line bg-paper px-4 py-2 font-mono text-xs text-ink-2"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
