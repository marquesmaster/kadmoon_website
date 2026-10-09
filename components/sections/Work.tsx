import { work, caseStudies } from '@/lib/content';
import { Section } from '../Section';
import { SectionHeader } from '../SectionHeader';
import { Reveal } from '../Reveal';

// Featured on the homepage: three representative analytics engagements.
const featured = ['landed-cost-analytics', 'entry-throughput-analytics', 'shipment-visibility-analytics']
  .map((slug) => caseStudies.find((c) => c.slug === slug))
  .filter((c): c is (typeof caseStudies)[number] => Boolean(c));

export function Work() {
  return (
    <Section id="work" tone="paper">
      <SectionHeader eyebrow={work.eyebrow} title={work.title} sub={work.sub} />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((c, i) => (
          <Reveal
            as="article"
            key={c.slug}
            delay={i * 90}
            className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all hover:-translate-y-0.5"
          >
            <a href={`/cases/${c.slug}`} className="flex flex-1 flex-col p-7">
              <span className="inline-flex w-fit rounded-full bg-mist px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-2">
                {c.sector}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-[-0.02em] text-ink group-hover:text-accent">
                {c.title}
              </h3>
              <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-ink-2">{c.summary}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
                See the work{' '}
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-ink-3">
        Illustrative examples · fictitious clients · under NDA
      </p>

      <div className="mt-8 flex justify-center">
        <a
          href="/cases"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink-2 transition-colors hover:text-accent"
        >
          See all work <span aria-hidden>→</span>
        </a>
      </div>
    </Section>
  );
}
