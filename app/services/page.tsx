import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { HowToChoose } from '@/components/sections/HowToChoose';
import { analyticsSolutions, services } from '@/lib/content';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services | Power BI, Power Platform, Fabric & Copilot',
  description:
    'Power BI services and the Microsoft stack around it: governed dashboards and semantic models, Power BI migration and embedded analytics, Power Platform automation, data engineering on Fabric and Azure, and Copilot and AI. Delivered in your own tenant.',
  alternates: { canonical: `${siteConfig.url}/services` },
  openGraph: { url: `${siteConfig.url}/services`, type: 'website', images: ['/opengraph-image'] },
};

const engage = [
  {
    kicker: 'Power BI assessment',
    title: 'Start here',
    body: 'A short, fixed-scope first project that maps your decisions and data and delivers first dashboards in about two weeks, with a scope and a quote grounded in your real data. It leads into one of the two models.',
    cta: 'Request a quote',
    featured: true,
  },
  {
    kicker: 'By project',
    title: 'When the outcome is defined',
    body: 'A fixed-scope build with defined deliverables and milestone billing: the governed semantic model, the dashboards, any migration, and the governance around them. You know what you get, when, and how to validate it.',
    cta: 'Scope a project',
    featured: false,
  },
  {
    kicker: 'Managed Power BI',
    title: 'For ongoing work',
    body: 'Our monthly subscription: a senior team that runs and evolves your Power BI every month. Refreshes, governance, new reports as needs change, and Copilot and AI as it matures. A boutique partner on call.',
    cta: 'Talk Managed Power BI',
    featured: false,
  },
];

const faqs = [
  { q: 'Is it only Power BI, or the whole stack?', a: 'Power BI is the lead, and we build on the same governed model: Power Platform apps and automation, data engineering on Microsoft Fabric and Azure, and Copilot and AI. You can start with reporting and grow into automation and AI when it earns its place.' },
  { q: 'Do we have to be on Microsoft already?', a: 'No. Your data can live in SQL Server, Dynamics, SAP, Oracle, NetSuite, Salesforce, Excel, SharePoint, or your own APIs. We read from the system of record and deliver the analytics on Power BI and the Microsoft cloud, in your own tenant.' },
  { q: 'How fast do we see something?', a: 'A Power BI assessment delivers first dashboards in about two weeks, so you validate real value early instead of waiting on a long data project with nothing to show.' },
  { q: 'Do we own the model and the data?', a: 'Yes. The semantic model, the reports, and the data live in your own tenant with documentation and a full handover. Access follows your identity provider. No lock-in.' },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <PageHero
          eyebrow="Services"
          title="Power BI, and everything we build around it."
          breadcrumbs={<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />}
        >
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
            We turn the data in your ERP, CRM, and line-of-business systems into decisions, delivered
            on Power BI in your own tenant, with Power Platform automation, Fabric data engineering,
            and Copilot and AI built on the same governed model.
          </p>
        </PageHero>

        {/* Analytics we deliver */}
        <section className="bg-paper py-24">
          <div className="mx-auto max-w-shell px-6">
            <div className="max-w-2xl">
              <Eyebrow>What we deliver</Eyebrow>
              <h2 className="mt-4 font-display text-display-sm font-semibold text-ink">
                Power BI solutions your team runs on.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
                One governed model fed from the systems you already run, so every number means one
                thing and your leaders act on it.
              </p>
            </div>
            <div className="mt-11 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {analyticsSolutions.map((s, i) => (
                <a
                  key={s.title}
                  href={s.href}
                  className="hover-glow group flex flex-col rounded-2xl border border-line bg-white p-8"
                >
                  <div className="flex items-baseline gap-3.5">
                    <span className="font-sans text-sm font-semibold text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-ink group-hover:text-accent">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-3.5 flex-1 text-[15px] leading-relaxed text-ink-2">{s.body}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    See the case{' '}
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms we build (software roadmap) */}
        <section className="border-t border-line bg-mist py-24">
          <div className="mx-auto max-w-shell px-6">
            <div className="max-w-2xl">
              <Eyebrow>Service lines</Eyebrow>
              <h2 className="mt-4 font-display text-display-sm font-semibold text-ink">
                Four service lines, from dashboards to AI.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
                Power BI leads, and the rest builds on the same governed model. Start with reporting
                and grow into automation, data engineering, and AI as each earns its place.
              </p>
            </div>
            <div className="mt-11 grid gap-5 md:grid-cols-2">
              {services.map((s, i) => (
                <a
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="hover-glow group flex flex-col rounded-2xl border border-line bg-white p-8"
                >
                  <div className="flex items-baseline gap-3.5">
                    <span className="font-sans text-sm font-semibold text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-ink group-hover:text-accent">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-3.5 text-[15px] leading-relaxed text-ink-2">{s.tagline}</p>
                  <div className="mt-5 font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-3">
                    What is included
                  </div>
                  <ul className="mt-3.5 space-y-2.5">
                    {s.includes.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-sm bg-accent" />
                        <span className="text-[15px] leading-relaxed text-ink-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    Explore <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Ways to engage */}
        <section className="bg-paper py-24">
          <div className="mx-auto max-w-shell px-6">
            <div className="max-w-2xl">
              <Eyebrow>Ways to engage</Eyebrow>
              <h2 className="mt-4 font-display text-display-sm font-semibold text-ink">
                A boutique, two ways to work.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
                Begin with a Power BI assessment, then run by project or on Managed Power BI, our monthly subscription.
                Same senior US team, built in your own tenant, yours to own.
              </p>
            </div>
            <div className="mt-11 grid gap-5 md:grid-cols-3">
              {engage.map((e) => (
                <div
                  key={e.kicker}
                  className={`relative rounded-2xl p-8 ${
                    e.featured
                      ? 'bg-ink text-paper'
                      : 'border border-line bg-white text-ink shadow-card'
                  }`}
                >
                  {e.featured && (
                    <span className="absolute right-6 top-6 rounded-full bg-accent px-2.5 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-ink">
                      Best first step
                    </span>
                  )}
                  <div className="font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-accent">
                    {e.kicker}
                  </div>
                  <div className={`mt-3.5 font-display text-2xl font-semibold ${e.featured ? 'text-white' : 'text-ink'}`}>
                    {e.title}
                  </div>
                  <p className={`mt-3.5 text-[15px] leading-relaxed ${e.featured ? 'text-white/70' : 'text-ink-2'}`}>
                    {e.body}
                  </p>
                  <a
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                  >
                    {e.cta} <span aria-hidden>→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-line bg-mist py-24">
          <div className="mx-auto max-w-3xl px-6">
            <div className="mb-11 text-center">
              <Eyebrow center>FAQ</Eyebrow>
              <h2 className="mt-4 font-display text-display-sm font-semibold text-ink">
                How engagements work.
              </h2>
            </div>
            <div className="divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <div key={f.q} className="py-5">
                  <h3 className="font-display text-lg font-medium text-ink">{f.q}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Buyer's guide */}
        <HowToChoose />

        {/* Dark CTA */}
        <section className="relative overflow-hidden bg-ink text-paper">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
          <div className="pointer-events-none absolute inset-0" aria-hidden style={{ backgroundImage: 'radial-gradient(900px 500px at 50% 120%, rgba(20,92,230,.28), transparent 60%)' }} />
          <div className="relative mx-auto max-w-2xl px-6 py-28 text-center">
            <h2 className="font-display text-display-md font-semibold text-white">
              Not sure where to start?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-white/65">
              Tell us where your data lives. We will point you to the right first step, usually a
              Power BI assessment, and send a quote.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <Button href="/contact" size="lg">
                Request a quote <span aria-hidden>→</span>
              </Button>
              <a
                href="/cases"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-4 text-[15px] font-semibold text-paper transition-colors hover:border-white/50 hover:bg-white/5"
              >
                See our work
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
