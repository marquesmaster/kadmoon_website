import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { services } from '@/lib/content';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services | Power BI, Fabric, and Power Platform',
  description:
    'Capabilities that carry your data from raw source to trusted decision on the Microsoft platform: Power BI, Fabric, data engineering, Power Platform, governance, and migrations. Delivered by senior practitioners, governed from day one.',
  alternates: { canonical: `${siteConfig.url}/services` },
};

const engage = [
  {
    kicker: 'Assessment',
    title: 'Fixed scope · 2 weeks',
    body: 'A costed roadmap, architecture review, and prioritized backlog, so you decide with a plan, not a pitch.',
    cta: 'Book an assessment',
    featured: true,
  },
  {
    kicker: 'Build & migrate',
    title: 'Project-based',
    body: 'We design, build, and migrate in short, reviewable increments, with validation and enablement at every step.',
    cta: 'Scope a project',
    featured: false,
  },
  {
    kicker: 'Managed enablement',
    title: 'Monthly retainer',
    body: 'Governance, optimization, and hands-on support after go-live, so your platform keeps getting better.',
    cta: 'Talk retainers',
    featured: false,
  },
];

const faqs = [
  { q: 'Do you offer fixed-price engagements?', a: 'Yes. Most work starts with a fixed-scope, fixed-price assessment, so you know the cost and timeline before any build begins.' },
  { q: 'Can you work alongside our internal team?', a: 'Absolutely. We embed with your data and IT teams, and enablement is built into every engagement so ownership transfers to you.' },
  { q: 'What size projects do you take on?', a: 'From a single Power BI model to a full Fabric platform build or a multi-tenant migration. If it runs on Microsoft data tooling, it is in scope.' },
  { q: 'Do you provide ongoing support after go-live?', a: 'Yes, through a managed enablement retainer covering governance, optimization, and support once your platform is in production.' },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-paper">
          <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-60" aria-hidden />
          <div className="relative mx-auto max-w-4xl px-6 pb-14 pt-36 md:pt-40">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-mist px-3.5 py-2 font-mono text-sm tracking-[0.04em] text-ink">
              <span aria-hidden className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              Services
            </span>
            <h1 className="mt-6 max-w-3xl font-display text-display-lg font-semibold text-ink">
              Everything we build runs on Microsoft.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
              Capabilities that carry your data from raw source to trusted decision, delivered by
              senior practitioners, governed from day one, and handed over for your team to own.
            </p>
          </div>
        </section>

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

        {/* Dark CTA */}
        <section className="relative overflow-hidden bg-ink text-paper">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
          <div className="pointer-events-none absolute inset-0" aria-hidden style={{ backgroundImage: 'radial-gradient(900px 500px at 50% 120%, rgba(240,85,59,.24), transparent 60%)' }} />
          <div className="relative mx-auto max-w-2xl px-6 py-28 text-center">
            <h2 className="font-display text-display-md font-semibold text-white">
              Not sure where to start?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-white/65">
              Book a discovery call. We will point you to the right first step, usually a fixed-scope
              assessment.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <Button href="/contact" size="lg">
                Book a discovery call <span aria-hidden>→</span>
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
