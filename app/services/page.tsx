import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { PageHero } from '@/components/sections/PageHero';
import { HowToChoose } from '@/components/sections/HowToChoose';
import { services } from '@/lib/content';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Solutions | Trade ERP, Customs, Inventory, Security & Logistics',
  description:
    'Software for foreign trade: trade ERP and CRM, customs and compliance, inventory and WMS, vessel and port security vision, supply chain and logistics, and custom development. Built by a US team that speaks trade.',
  alternates: { canonical: `${siteConfig.url}/services` },
};

const engage = [
  {
    kicker: 'Platform + tailoring',
    title: 'Fastest start',
    body: 'Start on a ready Kadmoon platform, trade ERP, compliance, inventory, or logistics, and we tailor it to your flow and integrate it with your partners.',
    cta: 'Book a call',
    featured: true,
  },
  {
    kicker: 'Custom build',
    title: 'Built to your operation',
    body: 'A system built from scratch around how you actually trade, with clear acceptance criteria per deliverable and delivery in short, reviewable cycles.',
    cta: 'Scope a build',
    featured: false,
  },
  {
    kicker: 'Support & evolution',
    title: 'After go-live',
    body: 'We keep integrations and compliance current as rules and partners change, support the software on a defined agreement, and evolve it as your trade grows.',
    cta: 'Talk support',
    featured: false,
  },
];

const faqs = [
  { q: 'Do you build products or custom software?', a: 'Both. Start on a ready Kadmoon platform for the common trade problems and tailor it, or have us build fully custom where your operation is genuinely different. Most clients use a mix.' },
  { q: 'Can you work alongside our internal team?', a: 'Yes. We embed with your operations and IT teams, and a full handover with documentation is part of every engagement so ownership transfers to you.' },
  { q: 'What size projects do you take on?', a: 'From a single integration or module to a full trade ERP with compliance, inventory, and logistics. If it moves goods across borders, it is in scope.' },
  { q: 'Do you provide ongoing support after launch?', a: 'Yes, on a defined support agreement: integrations and compliance kept current as rules change, plus an evolution roadmap as your trade grows.' },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <PageHero eyebrow="Solutions" title="Every system a cross-border operation runs on.">
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
            Trade ERP, customs and compliance, inventory, security vision, and logistics, built as
            ready platforms and custom development, by a US team that speaks trade.
          </p>
        </PageHero>

        {/* Service cards (data-driven, linked to detail pages) */}
        <section className="bg-paper py-24">
          <div className="mx-auto grid max-w-shell gap-5 px-6 md:grid-cols-2">
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
        </section>

        {/* Ways to engage */}
        <section className="border-t border-line bg-mist py-24">
          <div className="mx-auto max-w-shell px-6">
            <div className="max-w-2xl">
              <Eyebrow>Ways to engage</Eyebrow>
              <h2 className="mt-4 font-display text-display-sm font-semibold text-ink">
                Start small, scale with confidence.
              </h2>
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
        <section className="bg-paper py-24">
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
              Book a meeting. We will point you to the right first step, usually a fixed-scope
              assessment.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <Button href={siteConfig.bookingsUrl} size="lg">
                Book a meeting <span aria-hidden>→</span>
              </Button>
              <a
                href="/dashboards"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-4 text-[15px] font-semibold text-paper transition-colors hover:border-white/50 hover:bg-white/5"
              >
                See dashboards
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
