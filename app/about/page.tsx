import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { PageHero } from '@/components/sections/PageHero';
import { Comparison } from '@/components/sections/Comparison';
import { groupExperience } from '@/lib/content';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About | A US analytics firm built for foreign trade',
  description:
    'Kadmoon is a US analytics firm focused entirely on foreign trade, built by a team with six years and 2,000+ Microsoft analytics solutions behind it. Senior, US-based engineers who speak customs, logistics, and compliance, turning your data into decisions in your own tenant.',
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: { url: `${siteConfig.url}/about`, type: 'website', images: ['/opengraph-image'] },
};

const principles = [
  { n: '01', t: 'Foreign trade is all we do', d: 'Deep in one domain instead of shallow across ten. It shows in metrics modeled the way trade actually works.' },
  { n: '02', t: 'Senior, US-based teams', d: 'The people who scope your model build and support it. No rotating subcontractors.' },
  { n: '03', t: 'One definition per KPI', d: 'Landed cost, OTIF, and duty exposure each mean one thing across every report, governed and documented.' },
  { n: '04', t: 'You own it', d: 'Your model, your reports, your data, in your own tenant, documented and handed over. No lock-in.' },
];

const steps = [
  { n: '1', t: 'Discover', d: 'A call to understand the decisions your leaders need to make, the questions behind them, and where the numbers live.', last: false },
  { n: '2', t: 'Scope & plan', d: 'A short assessment that produces a scope and an architecture plan you can act on, with first dashboards in about two weeks.', last: false },
  { n: '3', t: 'Foundation', d: 'We land your data in your tenant and build the semantic layer that gives one definition per KPI.', last: false },
  { n: '4', t: 'Build', d: 'Delivery in short cycles, each one a dashboard validated with the area that uses it.', last: false },
  { n: '5', t: 'Sustain', d: 'Training, support, and governance kept current as rules and partners change and your trade grows.', last: true },
];

const team = [
  { mono: 'TA', role: 'Trade Analytics Lead', desc: 'Owns the metrics and keeps them coherent from sourcing to delivery.' },
  { mono: 'DE', role: 'Data Engineering Lead', desc: 'Builds the pipelines and semantic model that feed every report from clean data.' },
  { mono: 'CC', role: 'Customs & Compliance Lead', desc: 'Models classification, screening, and clearance so the numbers hold up to an audit.' },
  { mono: 'PL', role: 'Platform Lead', desc: 'Builds the trade software, customs, ERP, and inventory, that grows out of the analytics.' },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <PageHero eyebrow="About Kadmoon" title="A US analytics firm built for foreign trade.">
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
            We do one thing: turn the data behind cross-border trade into decisions. The focus is
            new; the team behind it has built analytics on the Microsoft stack for years.
          </p>
        </PageHero>

        {/* Why we exist */}
        <section className="bg-paper py-16 md:py-24">
          <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-3">
            <div>
              <Eyebrow>Why we exist</Eyebrow>
              <h2 className="mt-4 font-display text-display-sm font-semibold text-ink">
                Trade analytics, built by people who speak trade.
              </h2>
            </div>
            <div className="space-y-5 md:col-span-2">
              <p className="text-lg leading-relaxed text-ink-2">
                Most trade operations read their numbers off generic BI and spreadsheets that were
                never built for customs, landed cost, or bonded inventory, so every team walks into
                the meeting with a different figure.
              </p>
              <p className="text-lg leading-relaxed text-ink-2">
                Kadmoon is a new name, not a new team. For six years we have built data platforms and
                Power BI analytics on the Microsoft stack for more than 50 organizations across
                government, education, sports, real estate, and technology. We know how to land messy
                data in one tenant and turn it into numbers people act on.
              </p>
              <p className="text-lg leading-relaxed text-ink-2">
                Kadmoon points that practice at one domain and nothing else: foreign trade. That
                focus lets us arrive with the trade data model and KPIs ready, move faster, and stand
                behind every number we ship, in your own tenant, documented and handed over so you
                own it.
              </p>
            </div>
          </div>
        </section>

        {/* Track record of the team/group behind Kadmoon */}
        <section className="relative overflow-hidden bg-ink text-paper">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden
            style={{ backgroundImage: 'radial-gradient(900px 480px at 50% -10%, rgba(20,92,230,.26), transparent 62%)' }}
          />
          <div className="relative mx-auto max-w-shell px-6 py-16 md:py-24">
            <div className="max-w-2xl">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#8FB8FF]">
                {groupExperience.eyebrow}
              </span>
              <h2 className="mt-4 font-display text-display-sm font-semibold text-white">
                A proven team behind a focused firm.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/70">{groupExperience.line}</p>
            </div>

            <dl className="mt-11 grid gap-6 sm:grid-cols-3">
              {groupExperience.stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/12 bg-white/5 p-7">
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block font-display text-5xl font-bold tracking-tight tabular-nums text-white">
                      {s.value}
                    </span>
                    <span className="mt-2 block text-[14px] leading-snug text-white/65">{s.label}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-9">
              {groupExperience.orgs.map((org) => (
                <li
                  key={org}
                  className="font-display text-[15px] font-semibold tracking-[-0.01em] text-white/45"
                >
                  {org}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.1em] text-white/40">
              {groupExperience.note}
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="border-t border-line bg-mist py-16 md:py-24">
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
        <section className="bg-paper py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <div className="mb-12 max-w-2xl">
              <Eyebrow>How we work</Eyebrow>
              <h2 className="mt-4 font-display text-display-sm font-semibold text-ink">
                From first call to live dashboards.
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
        <section className="border-t border-line bg-mist py-16 md:py-24">
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
              Roles shown reflect the team you work with on an engagement. We introduce the named
              specialists during scoping.
            </p>
          </div>
        </section>

        {/* How we compare */}
        <Comparison />

        {/* Dark CTA */}
        <section className="relative overflow-hidden bg-ink text-paper">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
          <div className="pointer-events-none absolute inset-0" aria-hidden style={{ backgroundImage: 'radial-gradient(900px 500px at 50% 120%, rgba(20,92,230,.28), transparent 60%)' }} />
          <div className="relative mx-auto max-w-2xl px-6 py-20 text-center md:py-28">
            <h2 className="font-display text-display-md font-semibold text-white">
              Let us talk about your trade operation.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-white/65">
              A short call is a simple way to see whether we are a fit and where to start.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <Button href="/contact" size="lg">
                Request a quote <span aria-hidden>→</span>
              </Button>
              <a
                href="/platform"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-4 text-[15px] font-semibold text-paper transition-colors hover:border-white/50 hover:bg-white/5"
              >
                See the platform
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
