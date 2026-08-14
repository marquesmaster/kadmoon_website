import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About | A specialist Microsoft data partner in the US',
  description:
    'Kadmoon is a US consultancy with a deliberately narrow focus: the Microsoft data platform, and nothing else. Senior specialists, governance from day one, and you own it after we leave.',
  alternates: { canonical: `${siteConfig.url}/about` },
};

const principles = [
  { n: '01', t: 'Microsoft-only focus', d: 'Deep on one stack instead of shallow on ten. That depth shows up in cleaner builds.' },
  { n: '02', t: 'Senior-only teams', d: 'The people who scope your work are the people who build it. No juniors on your budget.' },
  { n: '03', t: 'Governance from day one', d: 'Security, lineage, and cost controls are designed in, not bolted on after the audit.' },
  { n: '04', t: 'You own it after we leave', d: 'Documentation and enablement in every engagement. No black boxes, no lock-in.' },
];

const steps = [
  { n: '1', t: 'Discover', d: 'A 30-minute call to understand your data, your Microsoft footprint, and the decisions you need to make.', last: false },
  { n: '2', t: 'Assess & roadmap', d: 'A two-week, fixed-scope assessment producing a costed, prioritized roadmap you can act on.', last: false },
  { n: '3', t: 'Design', d: 'We design the target architecture on Fabric, Synapse, and Azure SQL, with governance built in.', last: false },
  { n: '4', t: 'Build & migrate', d: 'Senior engineers deliver in short, reviewable increments: build, migrate, validate, repeat.', last: false },
  { n: '5', t: 'Enable & govern', d: 'We hand over documentation, training, and governance so your team owns the platform for good.', last: true },
];

const team = [
  { mono: 'PA', role: 'Principal Data Architect', desc: 'Owns your target architecture on Fabric and keeps it coherent from ingestion to reporting.' },
  { mono: 'BI', role: 'Power BI & Analytics Lead', desc: 'Designs the semantic models and dashboards your executives rely on every day.' },
  { mono: 'MS', role: 'Migration Specialist', desc: 'Runs tenant-to-tenant moves and legacy modernizations without the drama.' },
  { mono: 'GE', role: 'Governance & Enablement Lead', desc: 'Sets up Purview, security, and the training that hands the platform to your team.' },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Dark hero */}
        <section className="relative overflow-hidden bg-ink text-paper">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60" aria-hidden />
          <div className="pointer-events-none absolute inset-0" aria-hidden style={{ backgroundImage: 'radial-gradient(1000px 520px at 85% -20%, rgba(240,85,59,.18), transparent 60%)' }} />
          <div className="relative mx-auto max-w-4xl px-6 pb-24 pt-36 md:pt-40">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 px-4 py-2 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-white/80">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
              About Kadmoon
            </span>
            <h1 className="mt-6 max-w-3xl font-display text-display-lg font-semibold text-white">
              A specialist Microsoft data partner, based in the US.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
              We do one thing, and we do it deeply: turn the Microsoft data platform into decisions
              your business can trust.
            </p>
          </div>
        </section>

        {/* Why we exist */}
        <section className="bg-paper py-24">
          <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-3">
            <div>
              <Eyebrow>Why we exist</Eyebrow>
              <h2 className="mt-4 font-display text-display-sm font-semibold text-ink">
                Powerful licenses, a fraction of the value.
              </h2>
            </div>
            <div className="space-y-5 md:col-span-2">
              <p className="text-lg leading-relaxed text-ink-2">
                Most companies own powerful Microsoft licenses but capture a fraction of their value.
                Data sits in silos, reports disagree, and decisions wait on someone to reconcile a
                spreadsheet.
              </p>
              <p className="text-lg leading-relaxed text-ink-2">
                Kadmoon is a US-based consultancy with a deliberately narrow focus: the Microsoft
                data platform, and nothing else. That focus lets us move faster, architect cleaner,
                and stand behind every system we build.
              </p>
              <p className="text-lg leading-relaxed text-ink-2">
                Every engagement is run by senior practitioners and handed over with documentation
                and training. Our goal is not to become a dependency, it is to leave your team owning
                a platform they trust.
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

        {/* Dark CTA */}
        <section className="relative overflow-hidden bg-ink text-paper">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
          <div className="pointer-events-none absolute inset-0" aria-hidden style={{ backgroundImage: 'radial-gradient(900px 500px at 50% 120%, rgba(240,85,59,.24), transparent 60%)' }} />
          <div className="relative mx-auto max-w-2xl px-6 py-28 text-center">
            <h2 className="font-display text-display-md font-semibold text-white">
              Let us talk about your Microsoft data.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-white/65">
              A 30-minute discovery call is the fastest way to see whether we are a fit, and where
              your quickest wins are.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <Button href="/#contact" size="lg">
                Book a discovery call <span aria-hidden>→</span>
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
