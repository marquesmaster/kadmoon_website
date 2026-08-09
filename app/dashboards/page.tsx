import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { CaseDashboard } from '@/components/cases/CaseDashboard';
import { caseDashboards } from '@/lib/cases/dashboards';
import { siteConfig } from '@/lib/site';

const title = 'Dashboards we build';
const description =
  'The Power BI dashboards behind our work: OEE by line and shift, stockouts by category and channel, approval funnels, risk scoring by cohort. Real structure, illustrative data.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteConfig.url}/dashboards` },
  openGraph: { title: `${title} | Kadmoon`, description, url: `${siteConfig.url}/dashboards`, type: 'website' },
};

export default function DashboardsPage() {
  const collectionLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url: `${siteConfig.url}/dashboards`,
  };

  return (
    <>
      <Nav />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }}
        />

        <section className="relative overflow-hidden pb-10 pt-28 md:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-70" aria-hidden />
          <div className="relative mx-auto max-w-shell px-6">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Dashboards' }]} />
            <div className="mt-6 max-w-3xl">
              <Eyebrow>Dashboards</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">
                The report behind each engagement.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">
                Every project opens into the dashboard it delivered: the KPIs that matter for the
                sector, the cross-cuts, and the detail line down to the item. Client names and
                figures are illustrative and under NDA; the structure is what actually shipped.
              </p>
              <div className="mt-8">
                <Button href="/#contact" size="lg">
                  Talk to an expert <span aria-hidden>→</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-shell px-6 pb-20">
          <div className="flex flex-col gap-20">
            {caseDashboards.map((c) => (
              <div key={c.slug} id={c.slug} className="scroll-mt-24">
                <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <span className="rounded-full bg-brand-soft px-3 py-1 text-sm font-medium text-brand-deep">
                      {c.badge}
                    </span>
                    <h2 className="mt-3 max-w-2xl font-display text-display-sm font-semibold tracking-[-0.02em] text-ink">
                      {c.report}
                    </h2>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">
                      {c.vertical}
                    </p>
                  </div>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-line">
                  <CaseDashboard slug={c.slug} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <h2 className="font-display text-display-sm text-ink">
            Want a dashboard like these on your data?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-2">
            Tell us your scenario and get a diagnosis and a proposal with an investment range within
            a few business days.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/#contact" size="lg">
              Talk to an expert <span aria-hidden>→</span>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
