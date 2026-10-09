import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { PageHero } from '@/components/sections/PageHero';
import { industryPages } from '@/lib/content';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Industries | Analytics for every link in the trade chain',
  description:
    'Analytics for importers, exporters, customs brokers, freight forwarders, 3PLs, ports, and the manufacturers and distributors that trade across borders. Built for how each one measures itself.',
  alternates: { canonical: `${siteConfig.url}/industries` },
};

// Illustrative outcomes, clearly labeled. Replaced with real, cleared client
// results when the founder provides them.
const cases = [
  { metric: '3 days', title: 'Landed cost close, down from 12', desc: 'Freight, duty, and fees allocated to the unit from SAP and freight invoices, so margin by product is a daily number.', tag: 'Importers · Landed cost' },
  { metric: '-22%', title: 'Clearance time cut', desc: 'Entry throughput, clearance time, and exceptions tracked by client, port, and filer, with an audit trail on every entry.', tag: 'Customs brokers · Compliance' },
  { metric: 'Real-time', title: 'Shipment visibility across carriers', desc: 'Carrier milestones unified over EDI and API into one planned-versus-actual view, with exceptions flagged early.', tag: 'Freight forwarders · Visibility' },
  { metric: '-29%', title: 'Demurrage and detention charges', desc: 'Charges tied to container events and the free-time clock, attributed to a cause and an owner so avoidable fees are prevented.', tag: '3PL · Logistics' },
  { metric: 'Same day', title: 'Tariff exposure on a rate change', desc: 'Duty exposure by HTS code and origin, with a scenario layer that reprices the import book the day a rate changes.', tag: 'Importers · Duty' },
];

export default function IndustriesPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <PageHero eyebrow="Industries" title="Built for the companies that move goods.">
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
            We build the analytics tuned to how each link in the trade chain measures itself, from
            importers and brokers to forwarders, 3PLs, and ports.
          </p>
        </PageHero>

        {/* Industry cards (data-driven, linked to detail pages) */}
        <section className="bg-paper py-24">
          <div className="mx-auto grid max-w-shell gap-5 px-6 md:grid-cols-2 lg:grid-cols-3">
            {industryPages.map((ind) => (
              <a
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="hover-glow group flex flex-col rounded-2xl border border-line bg-white p-8"
              >
                <h3 className="font-display text-xl font-semibold text-ink group-hover:text-accent">
                  {ind.name}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{ind.intro}</p>
                <ul className="mt-5 space-y-2.5">
                  {ind.systems.slice(0, 3).map((s) => (
                    <li key={s} className="flex items-start gap-3">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-sm bg-accent" />
                      <span className="text-[14px] leading-relaxed text-ink-2">{s}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Explore <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Case studies / results */}
        <section id="cases" className="scroll-mt-24 border-t border-line bg-mist py-24">
          <div className="mx-auto max-w-shell px-6">
            <div className="max-w-2xl">
              <Eyebrow>Case studies & results</Eyebrow>
              <h2 className="mt-4 font-display text-display-sm font-semibold text-ink">
                What the analytics delivers.
              </h2>
            </div>
            <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cases.map((c) => (
                <div key={c.title} className="rounded-2xl border border-line bg-white p-8 shadow-card">
                  <div className="font-display text-5xl font-semibold tracking-[-0.02em] text-accent">
                    {c.metric}
                  </div>
                  <div className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                    {c.title}
                  </div>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-ink-2">{c.desc}</p>
                  <div className="mt-4 font-sans text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-3">
                    {c.tag}
                  </div>
                </div>
              ))}
              <a
                href="/cases"
                className="flex flex-col justify-center rounded-2xl border border-dashed border-line bg-white/40 p-8 text-center transition-colors hover:border-accent/50"
              >
                <span className="font-display text-lg font-semibold text-ink">See the full case studies</span>
                <span className="mt-2 text-[14px] text-ink-2">
                  With the data behind each one <span aria-hidden>→</span>
                </span>
              </a>
            </div>
            <p className="mt-6 text-[13px] text-ink-3">
              Illustrative outcomes shown as placeholders. Real, cleared client results replace them
              as they are approved.
            </p>
          </div>
        </section>

        {/* Dark CTA */}
        <section className="relative overflow-hidden bg-ink text-paper">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
          <div className="pointer-events-none absolute inset-0" aria-hidden style={{ backgroundImage: 'radial-gradient(900px 500px at 50% 120%, rgba(20,92,230,.28), transparent 60%)' }} />
          <div className="relative mx-auto max-w-2xl px-6 py-28 text-center">
            <h2 className="font-display text-display-md font-semibold text-white">
              Want analytics built for your corner of trade?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-white/65">
              Request a quote and we will share the approach that fits your operation, your systems,
              and your partners.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <Button href="/contact" size="lg">
                Request a quote <span aria-hidden>→</span>
              </Button>
              <a
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-4 text-[15px] font-semibold text-paper transition-colors hover:border-white/50 hover:bg-white/5"
              >
                Explore services
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
