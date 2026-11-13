import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/Button';
import { PageHero } from '@/components/sections/PageHero';
import { caseStudies } from '@/lib/content';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Case studies | Power BI and the Microsoft stack',
  description:
    'Illustrative Power BI and Microsoft-stack work: executive dashboards, finance and sales analytics, Power BI migration, Power Platform automation, Fabric data engineering, and embedded analytics, built in your own tenant.',
  keywords: [
    'Power BI case studies',
    'Power BI dashboards',
    'Microsoft Fabric',
    'Power Platform',
    'kadmoon case studies',
  ],
  alternates: { canonical: `${siteConfig.url}/cases` },
  openGraph: {
    title: 'Kadmoon case studies',
    description:
      'Illustrative Power BI and Microsoft-stack scenarios: dashboards, migrations, automation, and data engineering built in your own tenant.',
    url: `${siteConfig.url}/cases`,
    type: 'website',
    images: ['/opengraph-image'],
  },
};

const analytics = caseStudies.filter((c) => c.kind === 'analytics');
const software = caseStudies.filter((c) => c.kind === 'software');

function Card({ c }: { c: (typeof caseStudies)[number] }) {
  const kpis = c.metrics.slice(0, 2);
  return (
    <a
      href={`/cases/${c.slug}`}
      className="group flex flex-col rounded-2xl border border-line bg-paper p-7 shadow-card transition-all hover:-translate-y-0.5 md:p-8"
    >
      <span className="inline-flex w-fit rounded-full bg-mist px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-2">
        {c.sector}
      </span>
      <h2 className="mt-5 font-display text-xl font-semibold tracking-[-0.02em] text-ink group-hover:text-accent">
        {c.title}
      </h2>
      <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-ink-2">{c.summary}</p>

      <dl className="mt-5 grid grid-cols-2 gap-3">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-xl border border-line bg-mist p-3">
            <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">{k.label}</dt>
            <dd className="mt-0.5 font-display text-xl font-semibold tracking-[-0.02em] text-ink">
              {k.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {c.dataSources.slice(0, 3).map((d) => (
          <span
            key={d}
            className="rounded-full border border-line bg-paper px-2.5 py-1 font-mono text-[10px] text-ink-3"
          >
            {d}
          </span>
        ))}
      </div>

      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
        Read the case study{' '}
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </a>
  );
}

export default function CasesPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Case studies"
          title="Power BI and the Microsoft stack, at work."
          breadcrumbs={<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Cases' }]} />}
        >
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">
            The scenarios below are illustrative of the Power BI and Microsoft-stack work we build,
            not based on specific clients; the structure is what ships.
          </p>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-3">
            Data comes from wherever your business already runs: SQL Server, Dynamics 365, SAP,
            Salesforce, Excel, SharePoint, or APIs. The analytics is delivered in your own tenant.
          </p>
        </PageHero>

        <section className="mx-auto max-w-shell px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {analytics.map((c) => (
              <Card key={c.slug} c={c} />
            ))}
          </div>

          <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-ink-3">
            Illustrative scenarios · example figures
          </p>
        </section>

        {/* Software builds, kept distinct from the analytics work */}
        <section className="border-t border-line bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-shell px-6">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-navy">
                Builds on the stack
              </p>
              <h2 className="mt-3 font-display text-display-sm font-semibold text-ink">
                When reporting turns into a system to run on.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
                Power BI leads, and the same governed model carries into Power Platform apps, Fabric
                data engineering, and embedded analytics. These are builds that grew out of that work.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {software.map((c) => (
                <Card key={c.slug} c={c} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <h2 className="font-display text-display-sm text-ink">
            Want Power BI like this on your data?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-2">
            Tell us where your numbers live and what leadership needs to see. You get a scoped plan
            and a quote within one business day.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" size="lg">
              Request a quote <span aria-hidden>→</span>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
