import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/Button';
import { PageHero } from '@/components/sections/PageHero';
import {
  KpiTiles,
  BudgetVsActualCard,
  WorkingCapitalCard,
  MonthEndCloseCard,
} from '@/components/reports/SampleReports';
import { caseStudies } from '@/lib/content';
import { siteConfig } from '@/lib/site';

const CASE_CARDS: Record<string, () => JSX.Element> = {
  'budget-vs-actual': BudgetVsActualCard,
  'working-capital': WorkingCapitalCard,
  'month-end-close': MonthEndCloseCard,
};

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = caseStudies.find((x) => x.slug === params.slug);
  if (!c) return {};
  const url = `${siteConfig.url}/cases/${c.slug}`;
  return {
    title: `${c.title} | Kadmoon`,
    description: c.summary,
    alternates: { canonical: url },
    openGraph: { title: `${c.title} | Kadmoon`, description: c.summary, url, type: 'article', images: ['/opengraph-image'] },
  };
}

function List({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <h2 className="font-mono text-[11px] uppercase tracking-[0.12em] text-navy">{label}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink">
            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Chips({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <h2 className="font-mono text-[11px] uppercase tracking-[0.12em] text-navy">{label}</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-[13px] font-medium text-ink-2"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function CasePage({ params }: { params: { slug: string } }) {
  const c = caseStudies.find((x) => x.slug === params.slug);
  if (!c) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.title,
    description: c.summary,
    about: c.sector,
    author: { '@type': 'Organization', name: siteConfig.legalName, url: siteConfig.url },
    publisher: { '@type': 'Organization', name: siteConfig.legalName, url: siteConfig.url },
    url: `${siteConfig.url}/cases/${c.slug}`,
  };

  return (
    <>
      <Nav />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <PageHero
          eyebrow={c.sector}
          title={c.title}
          breadcrumbs={
            <Breadcrumbs
              items={[{ label: 'Home', href: '/' }, { label: 'Cases', href: '/cases' }, { label: c.sector }]}
            />
          }
        >
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">{c.summary}</p>
        </PageHero>

        {/* Metrics */}
        <section className="border-y border-line bg-mist">
          <div className="mx-auto grid max-w-shell grid-cols-2 gap-px bg-line lg:grid-cols-4">
            {c.metrics.map((m) => (
              <div key={m.label} className="bg-mist px-6 py-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
                  {m.label}
                </div>
                <div className="mt-2 font-display text-3xl font-bold tabular-nums text-ink">
                  {m.value}
                </div>
                {m.sub ? <div className="mt-1 text-[12px] text-ink-3">{m.sub}</div> : null}
              </div>
            ))}
          </div>
        </section>

        {/* Narrative */}
        <section className="mx-auto max-w-shell px-6 py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.12em] text-navy">
                The challenge
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink">{c.challenge}</p>
              <h2 className="mt-10 font-mono text-[11px] uppercase tracking-[0.12em] text-navy">
                What we built
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink">{c.build}</p>
            </div>
            <div className="space-y-10">
              <List label="In the build" items={c.whatWeBuilt} />
              <List label="Outcomes" items={c.outcomes} />
              <div className="grid gap-8 sm:grid-cols-2">
                <Chips label="Data sources" items={c.dataSources} />
                <Chips label="Microsoft stack" items={c.stack} />
              </div>
            </div>
          </div>

          {c.dashboards && c.dashboards.length > 0 ? (
            (() => {
              const cardKeys = c.dashboards.filter((k) => k !== 'kpi');
              return (
                <div className="mt-14">
                  <h2 className="font-mono text-[11px] uppercase tracking-[0.12em] text-navy">
                    The dashboards
                  </h2>
                  {c.dashboards.includes('kpi') ? (
                    <div className="mt-5">
                      <KpiTiles />
                    </div>
                  ) : null}
                  {cardKeys.length > 0 ? (
                    <div
                      className={`mt-5 grid items-stretch gap-5 ${
                        cardKeys.length > 1 ? 'md:grid-cols-2' : 'md:max-w-xl'
                      }`}
                    >
                      {cardKeys.map((k) => {
                        const Card = CASE_CARDS[k];
                        return Card ? (
                          <div key={k} className="h-full">
                            <Card />
                          </div>
                        ) : null;
                      })}
                    </div>
                  ) : null}
                </div>
              );
            })()
          ) : null}

          {c.result ? (
            <div className="mt-14 rounded-2xl border border-accent/30 bg-accent/5 p-7 md:p-9">
              <p className="text-lg leading-relaxed text-ink">{c.result}</p>
            </div>
          ) : null}

          <p className="mt-10 text-[11px] leading-relaxed text-ink-3">
            Anonymized case, not based on a specific client. Named-client work is shared with written
            permission.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-shell px-6 text-center">
            <h2 className="font-display text-display-sm text-ink">Build this on your own data.</h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-2">
              A Power BI assessment delivers working dashboards on your real data in about two weeks,
              with a fixed quote for the build.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href={siteConfig.bookingUrl} size="lg">
                Book a 30-minute call <span aria-hidden>→</span>
              </Button>
              <Button href="/cases" size="lg" variant="ghost">
                See more cases
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
