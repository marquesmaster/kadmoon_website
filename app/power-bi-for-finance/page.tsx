import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { PageHero } from '@/components/sections/PageHero';
import {
  KpiTiles,
  BudgetVsActualCard,
  WorkingCapitalCard,
  MonthEndCloseCard,
} from '@/components/reports/SampleReports';
import { powerBiForFinance as f } from '@/lib/content';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Power BI for Finance Teams: Close, Budget vs. Actual, Cash | Kadmoon',
  description:
    'Power BI for finance and operations teams: month-end close, budget vs actual, gross margin, cash and AR aging, on one governed model in your own Microsoft tenant. Fixed scope, fixed price.',
  alternates: { canonical: `${siteConfig.url}/power-bi-for-finance` },
  openGraph: {
    title: 'Power BI for finance and operations teams | Kadmoon',
    description:
      'One governed Power BI model for close, budget vs actual, margin and cash, built in your own Microsoft tenant.',
    url: `${siteConfig.url}/power-bi-for-finance`,
    type: 'website',
    images: ['/opengraph-image'],
  },
};

export default function PowerBiForFinancePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Power BI for finance and operations',
    provider: { '@type': 'Organization', name: siteConfig.legalName, url: siteConfig.url },
    areaServed: { '@type': 'Country', name: siteConfig.country },
    description: f.lead,
    url: `${siteConfig.url}/power-bi-for-finance`,
  };

  return (
    <>
      <Nav />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <PageHero
          eyebrow={f.eyebrow}
          title={f.title}
          breadcrumbs={
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'For Finance' }]} />
          }
        >
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">{f.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={f.cta.href} size="lg">
              {f.cta.label} <span aria-hidden>→</span>
            </Button>
            <Button href="/pricing" size="lg" variant="ghost">
              See pricing
            </Button>
          </div>
        </PageHero>

        {/* Problems */}
        <section className="mx-auto max-w-shell px-6 py-16 md:py-20">
          <Eyebrow>{f.problems.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-display-sm text-ink">
            {f.problems.title}
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {f.problems.items.map((item, i) => (
              <Reveal
                as="div"
                key={item}
                delay={(i % 2) * 70}
                className="rounded-2xl border border-line bg-paper p-6 shadow-card"
              >
                <p className="text-[15px] leading-relaxed text-ink">{item}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Example reports */}
        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-shell px-6">
            <Eyebrow>{f.reports.eyebrow}</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-display-sm text-ink">
              {f.reports.title}
            </h2>
            <p className="mt-3 max-w-xl text-[14px] text-ink-3">{f.reports.note}</p>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {f.reports.items.map((r) => (
                <div key={r.name} className="rounded-2xl border border-line bg-paper p-6">
                  <h3 className="font-display text-lg font-semibold text-ink">{r.name}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-2">{r.note}</p>
                </div>
              ))}
            </div>

            {/* Representative product UI: the finance reports we build, not a
                specific client's result. */}
            <div className="mt-12">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">
                  A representative view · your tenant · Power BI
                </span>
              </div>
              <div className="mt-5">
                <KpiTiles />
              </div>
              <div className="mt-5 grid items-stretch gap-5 lg:grid-cols-3">
                <Reveal as="div" className="h-full">
                  <BudgetVsActualCard />
                </Reveal>
                <Reveal as="div" delay={90} className="h-full">
                  <WorkingCapitalCard />
                </Reveal>
                <Reveal as="div" delay={180} className="h-full">
                  <MonthEndCloseCard />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Systems */}
        <section className="mx-auto max-w-shell px-6 py-16 md:py-20">
          <Eyebrow>{f.systems.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-display-sm text-ink">
            {f.systems.title}
          </h2>
          <p className="mt-3 max-w-xl text-[14px] text-ink-3">{f.systems.note}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {f.systems.items.map((sys) => (
              <span
                key={sys}
                className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink-2"
              >
                {sys}
              </span>
            ))}
          </div>
        </section>

        {/* How it starts */}
        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-shell px-6">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <Eyebrow>{f.how.eyebrow}</Eyebrow>
                <h2 className="mt-4 font-display text-display-sm text-ink">{f.how.title}</h2>
              </div>
              <p className="max-w-xl text-lg leading-relaxed text-ink-2">{f.how.body}</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-shell px-6 py-16 text-center md:py-20">
          <h2 className="font-display text-display-sm text-ink">{f.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-2">{f.cta.body}</p>
          <div className="mt-8 flex justify-center">
            <Button href={f.cta.href} size="lg">
              {f.cta.label} <span aria-hidden>→</span>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
