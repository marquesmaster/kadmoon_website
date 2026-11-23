import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { PageHero } from '@/components/sections/PageHero';
import { caseStudies } from '@/lib/content';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Cases: Power BI and Microsoft Fabric for finance and operations | Kadmoon',
  description:
    'How we build Power BI and Microsoft Fabric for finance and operations teams: the board pack, budget vs actual, cash and working capital, the month-end close, and the data platform underneath.',
  alternates: { canonical: `${siteConfig.url}/cases` },
  openGraph: {
    title: 'Cases | Kadmoon',
    description:
      'The Power BI and Microsoft Fabric work we build for finance and operations teams.',
    url: `${siteConfig.url}/cases`,
    type: 'website',
    images: ['/opengraph-image'],
  },
};

export default function CasesPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Cases"
          title="The work we build for finance and operations"
          breadcrumbs={<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Cases' }]} />}
        >
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">
            Power BI and Microsoft Fabric for the people who run finance and operations: the board
            pack, budget versus actual, cash and working capital, the month-end close, and the data
            platform underneath. Each one built on a governed model, in the client&rsquo;s own
            Microsoft tenant.
          </p>
          <p className="mt-4 max-w-2xl text-[13px] leading-relaxed text-ink-3">
            These cases describe the work and the numbers we build with. They are not based on
            specific clients; work tied to a named client is shared with written permission.
          </p>
        </PageHero>

        <section className="mx-auto max-w-shell px-6 py-16 md:py-20">
          <div className="grid items-stretch gap-6 md:grid-cols-2">
            {caseStudies.map((c, i) => (
              <Reveal as="div" key={c.slug} delay={(i % 2) * 70} className="h-full">
                <a
                  href={`/cases/${c.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-paper p-7 shadow-card transition-all hover:-translate-y-0.5 hover:border-accent/50"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                    {c.sector}
                  </span>
                  <h2 className="mt-3 font-display text-xl font-semibold leading-tight text-ink">
                    {c.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-2">{c.summary}</p>
                  <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-line pt-5">
                    {c.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <dt className="font-mono text-[9px] uppercase tracking-[0.08em] text-ink-3">
                          {m.label}
                        </dt>
                        <dd className="mt-1 font-display text-lg font-bold tabular-nums text-ink">
                          {m.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent">
                    See the case{' '}
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-shell px-6 text-center">
            <h2 className="font-display text-display-sm text-ink">
              Your numbers, in one governed model.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-2">
              A Power BI assessment ships working dashboards on your real data in about two weeks,
              with a fixed quote for the build.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href={siteConfig.bookingUrl} size="lg">
                Book a 30-minute call <span aria-hidden>→</span>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
