import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/Button';
import { PageHero } from '@/components/sections/PageHero';
import { caseStudies } from '@/lib/content';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Case studies | Analytics for foreign trade',
  description:
    'Illustrative analytics work for cross-border trade: landed cost, duty exposure, shipment visibility, OTIF, customs throughput, and inventory, drawing data from SAP, Microsoft, and the systems a trade operation already runs on.',
  keywords: [
    'foreign trade analytics',
    'customs analytics',
    'logistics analytics',
    'landed cost analytics',
    'kadmoon case studies',
  ],
  alternates: { canonical: `${siteConfig.url}/cases` },
  openGraph: {
    title: 'Kadmoon case studies',
    description:
      'Analytics for importers, brokers, forwarders, and the companies that move goods across borders. Illustrative examples, real structure.',
    url: `${siteConfig.url}/cases`,
    type: 'website',
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
          title="Analytics we have built for cross-border trade."
          breadcrumbs={<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Cases' }]} />}
        >
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">
            Kadmoon does analytics for one thing: foreign trade. With more than 35 clients served,
            the work below is illustrative of the structure we ship; detailed client results are
            available under NDA.
          </p>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-3">
            Data comes from wherever your operation already runs: SAP, Microsoft, Oracle, NetSuite,
            broker and carrier systems, EDI and ACE, or spreadsheets. Analytics is delivered in your
            own tenant.
          </p>
        </PageHero>

        <section className="mx-auto max-w-shell px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {analytics.map((c) => (
              <Card key={c.slug} c={c} />
            ))}
          </div>

          <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-ink-3">
            Illustrative figures · fictitious clients · under NDA
          </p>
        </section>

        {/* Software builds, kept distinct from the analytics work */}
        <section className="border-t border-line bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-shell px-6">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-navy">
                Software we build
              </p>
              <h2 className="mt-3 font-display text-display-sm font-semibold text-ink">
                When analytics turns into a system to run on.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
                Living in a client&rsquo;s trade data is where our software starts. These are builds
                that grew out of that work, and the direction we keep extending.
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
            Want analytics like this on your trade data?
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
