import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { PageHero } from '@/components/sections/PageHero';
import { Comparison } from '@/components/sections/Comparison';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About | A US software company built for foreign trade',
  description:
    'Kadmoon is a US software company focused entirely on foreign trade. Senior, US-based engineers who speak customs, logistics, and compliance, building software you own.',
  alternates: { canonical: `${siteConfig.url}/about` },
};

const principles = [
  { n: '01', t: 'Foreign trade is all we do', d: 'Deep in one domain instead of shallow across ten. It shows in software that fits how you trade.' },
  { n: '02', t: 'Senior, US-based teams', d: 'The people who scope your system build and support it. No rotating subcontractors.' },
  { n: '03', t: 'Compliance by default', d: 'Screening, classification, and audit trails are part of the build, not bolted on after the fact.' },
  { n: '04', t: 'You own it', d: 'Your software, your data, documented and handed over. No black boxes, no lock-in.' },
];

const steps = [
  { n: '1', t: 'Discover', d: 'A call to understand how goods, documents, and money move through your operation and where the friction is.', last: false },
  { n: '2', t: 'Scope & plan', d: 'A short discovery that produces a scope and an architecture plan you can act on.', last: false },
  { n: '3', t: 'Foundation', d: 'A ready platform tailored to you or a custom base, with your data model, compliance rules, and integrations.', last: false },
  { n: '4', t: 'Build', d: 'Delivery in short cycles, each one a working piece of your operation wired to your partners.', last: false },
  { n: '5', t: 'Sustain', d: 'Training, support, and compliance kept current as rules and partners change and your trade grows.', last: true },
];

const team = [
  { mono: 'TA', role: 'Trade Solutions Architect', desc: 'Owns the system design and keeps it coherent from sourcing to delivery.' },
  { mono: 'CC', role: 'Customs & Compliance Lead', desc: 'Builds classification, screening, and filing that keep shipments clear and auditable.' },
  { mono: 'IN', role: 'Integrations Lead', desc: 'Connects carriers, brokers, ACE, and marketplaces so data flows instead of being retyped.' },
  { mono: 'CV', role: 'Computer Vision Lead', desc: 'Builds the security vision over cargo, containers, and the perimeter.' },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <PageHero eyebrow="About Kadmoon" title="A US software company built for foreign trade.">
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
            We do one thing, and we do it deeply: build the software that moves goods across borders,
            for the companies that do it.
          </p>
        </PageHero>

        {/* Why we exist */}
        <section className="bg-paper py-24">
          <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-3">
            <div>
              <Eyebrow>Why we exist</Eyebrow>
              <h2 className="mt-4 font-display text-display-sm font-semibold text-ink">
                Trade software, built by people who speak trade.
              </h2>
            </div>
            <div className="space-y-5 md:col-span-2">
              <p className="text-lg leading-relaxed text-ink-2">
                Most trade operations run on generic ERPs and spreadsheets that were never built for
                customs, landed cost, or bonded inventory, so the software fights the operation
                instead of fitting it.
              </p>
              <p className="text-lg leading-relaxed text-ink-2">
                Kadmoon is a US software company with a deliberately narrow focus: foreign trade, and
                nothing else. That focus lets us model your operation correctly, move faster, and
                stand behind every system we build.
              </p>
              <p className="text-lg leading-relaxed text-ink-2">
                Every engagement is run by senior, US-based engineers and handed over with
                documentation and training. Our goal is not to become a dependency, it is to leave
                you owning software you trust.
              </p>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="border-t border-line bg-mist py-24">
          <div className="mx-auto max-w-shell px-6">
            <div className="max-w-2xl">
              <Eyebrow>Principles</Eyebrow>
              <h2 className="mt-4 font-display text-display-sm font-semibold text-ink">
                How we choose to work.
              </h2>
            </div>
            <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((p, i) => (
                <Reveal
                  as="article"
                  key={p.n}
                  delay={(i % 4) * 70}
                  className="rounded-2xl border border-line bg-white p-7 shadow-card"
                >
                  <div className="font-sans text-sm font-semibold text-accent">{p.n}</div>
                  <h3 className="mt-3.5 font-display text-xl font-semibold text-ink">{p.t}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-ink-2">{p.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How we work timeline */}
        <section className="bg-paper py-24">
          <div className="mx-auto max-w-3xl px-6">
            <div className="mb-12 max-w-2xl">
              <Eyebrow>How we work</Eyebrow>
              <h2 className="mt-4 font-display text-display-sm font-semibold text-ink">
                From first call to running platform.
              </h2>
            </div>
            <div className="relative">
              <div aria-hidden className="absolute bottom-8 left-[19px] top-2 w-0.5 bg-ink/15" />
              {steps.map((s) => (
                <div key={s.n} className={`relative flex gap-6 ${s.last ? '' : 'pb-9'}`}>
                  <div
                    className={`z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full font-sans text-[15px] font-semibold ${
                      s.last ? 'bg-accent text-white' : 'bg-ink text-accent'
                    }`}
                  >
                    {s.n}
                  </div>
                  <div>
                    <h3 className="mt-1.5 font-display text-xl font-semibold text-ink">{s.t}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="border-t border-line bg-mist py-24">
          <div className="mx-auto max-w-shell px-6">
            <div className="max-w-2xl">
              <Eyebrow>The team you get</Eyebrow>
              <h2 className="mt-4 font-display text-display-sm font-semibold text-ink">
                Senior specialists, not a rotating bench.
              </h2>
            </div>
            <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((m) => (
                <div key={m.mono} className="rounded-2xl border border-line bg-white p-7 shadow-card">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 font-sans text-base font-bold tracking-[0.04em] text-accent" style={{ height: 52, width: 52 }}>
                    {m.mono}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">{m.role}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-ink-2">{m.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[13px] text-ink-3">
              Roles shown reflect the team you work with. Real names and photos go here when you are
              ready.
            </p>
          </div>
        </section>

        {/* How we compare */}
        <Comparison />

        {/* Dark CTA */}
        <section className="relative overflow-hidden bg-ink text-paper">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
          <div className="pointer-events-none absolute inset-0" aria-hidden style={{ backgroundImage: 'radial-gradient(900px 500px at 50% 120%, rgba(20,92,230,.28), transparent 60%)' }} />
          <div className="relative mx-auto max-w-2xl px-6 py-28 text-center">
            <h2 className="font-display text-display-md font-semibold text-white">
              Let us talk about your trade operation.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-white/65">
              A short call is a simple way to see whether we are a fit and where to start.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <Button href={siteConfig.bookingsUrl} size="lg">
                Book a meeting <span aria-hidden>→</span>
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
