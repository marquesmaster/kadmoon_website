import { work, caseStudies } from '@/lib/content';
import { getDashboard } from '@/lib/cases/dashboards';
import { DashboardPreview } from '../cases/DashboardPreview';
import { Section } from '../Section';
import { SectionHeader } from '../SectionHeader';
import { Reveal } from '../Reveal';

// Featured on the homepage: the three signature engagements (migration,
// Fabric single source of truth, executive OEE), each with its illustrative
// dashboard KPIs surfaced up front.
const featured = ['migracao-qlik-powerbi', 'plataforma-dados-fabric-varejo', 'bi-executivo-industria-oee']
  .map((slug) => caseStudies.find((c) => c.slug === slug))
  .filter((c): c is (typeof caseStudies)[number] => Boolean(c));

export function Work() {
  return (
    <Section id="work" tone="paper">
      <SectionHeader eyebrow={work.eyebrow} title={work.title} sub={work.sub} />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((c, i) => {
          const kpis = getDashboard(c.slug)?.kpis.slice(0, 4) ?? [];
          return (
            <Reveal
              as="article"
              key={c.slug}
              delay={i * 90}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-card transition-all hover:-translate-y-0.5"
            >
              <a href={`/cases/${c.slug}`} className="flex flex-1 flex-col">
                <div className="relative flex h-36 items-end overflow-hidden bg-navy p-5">
                  <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
                  <DashboardPreview slug={c.slug} className="absolute inset-x-5 top-5 opacity-95" />
                  <span className="relative rounded-full bg-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white backdrop-blur">
                    {c.sector}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-ink group-hover:text-accent">
                    {c.title}
                  </h3>

                  {kpis.length > 0 && (
                    <dl className="mt-4 grid grid-cols-2 gap-2.5">
                      {kpis.map((k) => (
                        <div key={k.label} className="rounded-lg border border-line bg-mist p-2.5">
                          <dt className="font-mono text-[9px] uppercase tracking-[0.08em] text-ink-3">
                            {k.label}
                          </dt>
                          <dd className="mt-0.5 font-display text-base font-semibold tracking-[-0.02em] text-ink">
                            {k.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
                    See case{' '}
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>

      <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-ink-3">
        Illustrative figures · fictitious clients · under NDA
      </p>

      <div className="mt-8 flex justify-center">
        <a
          href="/cases"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink-2 transition-colors hover:text-accent"
        >
          See all case studies <span aria-hidden>→</span>
        </a>
      </div>
    </Section>
  );
}
