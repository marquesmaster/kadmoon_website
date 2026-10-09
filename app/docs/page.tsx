import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { DocsSidebar } from '@/components/docs/DocsSidebar';
import { docs } from '@/lib/docs';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Docs | How Kadmoon delivers trade analytics',
  description:
    'Documentation for how Kadmoon delivers analytics for foreign trade: methodology, engagement models, data integration across SAP, Microsoft, Oracle, EDI and ACE, security and tenant model, the KPI library, and a glossary.',
  alternates: { canonical: `${siteConfig.url}/docs` },
};

const getStarted = docs.filter((d) => d.group === 'Get started').sort((a, b) => a.order - b.order);
const reference = docs.filter((d) => d.group === 'Reference').sort((a, b) => a.order - b.order);

function DocCard({ slug, title, description }: { slug: string; title: string; description: string }) {
  return (
    <a
      href={`/docs/${slug}`}
      className="group flex flex-col rounded-2xl border border-line bg-paper p-6 shadow-card transition-all hover:-translate-y-0.5"
    >
      <h3 className="font-display text-lg font-semibold text-ink group-hover:text-accent">{title}</h3>
      <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink-2">{description}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
        Read <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
      </span>
    </a>
  );
}

export default function DocsHub() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Documentation"
          title="How we deliver trade analytics, documented."
          breadcrumbs={<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Docs' }]} />}
        >
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">
            Our methodology, how we integrate data from the systems you already run, how it is
            secured in your tenant, the KPIs we model, and the terms we use. Written for the people
            evaluating a build, not just signing off on one.
          </p>
        </PageHero>

        <section className="mx-auto max-w-shell px-6 pb-24">
          <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <DocsSidebar current="overview" />
              </div>
            </aside>

            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.12em] text-navy">Get started</h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {getStarted.map((d) => (
                  <DocCard key={d.slug} slug={d.slug} title={d.title} description={d.description} />
                ))}
              </div>

              <h2 className="mt-12 font-mono text-[11px] uppercase tracking-[0.12em] text-navy">
                Reference
              </h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {reference.map((d) => (
                  <DocCard key={d.slug} slug={d.slug} title={d.title} description={d.description} />
                ))}
              </div>

              <div className="mt-12 rounded-2xl border border-line bg-mist p-6">
                <p className="font-display text-lg font-semibold text-ink">
                  Looking for client access?
                </p>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink-2">
                  Access to reports is provisioned inside your own tenant, per engagement. If you are
                  an existing client and need access or a new report, request it and we will set it up
                  against your environment.
                </p>
                <a
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                >
                  Request access <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
