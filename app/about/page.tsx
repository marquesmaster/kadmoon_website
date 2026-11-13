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
  title: 'About | A US Power BI and Microsoft data team',
  description:
    'Kadmoon is a US Microsoft data and analytics consultancy led by Power BI, built by a senior, US-based team with six years and 2,000+ Microsoft solutions behind it. We build dashboards, semantic models, and the Fabric and Azure data they sit on, all in your own Microsoft tenant.',
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: { url: `${siteConfig.url}/about`, type: 'website', images: ['/opengraph-image'] },
};

const principles = [
  { n: '01', t: 'Power BI is the lead', d: 'Dashboards, governed semantic models, and migrations are the core of the work. The rest of the Microsoft stack is built around them.' },
  { n: '02', t: 'Senior, US-based team', d: 'The people who scope your reports build and support them. No rotating subcontractors.' },
  { n: '03', t: 'One definition per KPI', d: 'Each measure means one thing across every report, governed with row-level security and documented lineage.' },
  { n: '04', t: 'You own it', d: 'Your reports, your semantic model, your data, in your own Microsoft tenant, documented and handed over. No lock-in.' },
];

const steps = [
  { n: '1', t: 'Discover', d: 'A call to understand the decisions your leaders need to make, the questions behind them, and where the numbers live.', last: false },
  { n: '2', t: 'Scope & plan', d: 'A short assessment that produces a scope and an architecture plan you can act on, with first Power BI dashboards in about two weeks.', last: false },
  { n: '3', t: 'Foundation', d: 'We connect your source systems in your tenant and build the governed semantic model that gives one definition per KPI.', last: false },
  { n: '4', t: 'Build', d: 'Delivery in short cycles, each one a report validated with the team that uses it.', last: false },
  { n: '5', t: 'Sustain', d: 'Training, support, and Power BI governance kept current as your data and your business grow.', last: true },
];

const team = [
  { mono: 'BI', role: 'Power BI & Analytics Lead', desc: 'Owns the reports and semantic models, and keeps every measure coherent across the business.' },
  { mono: 'DE', role: 'Data Engineering Lead', desc: 'Builds the lakehouse and pipelines on Fabric and Azure that feed Power BI from clean, governed data.' },
  { mono: 'PP', role: 'Power Platform Lead', desc: 'Builds the Power Apps and Power Automate workflows that act on the data behind the reports.' },
  { mono: 'EL', role: 'Engagement & Delivery Lead', desc: 'Runs scoping and delivery, and keeps each cycle aligned with the decisions you need to make.' },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <PageHero eyebrow="About Kadmoon" title="A US Power BI team that lives in the Microsoft stack.">
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
            We turn the data US businesses already run on into Power BI dashboards they can act on.
            The team behind Kadmoon has built on Power BI, Power Platform, Fabric, and Azure for
            years.
          </p>
        </PageHero>

        {/* Why we exist */}
        <section className="bg-paper py-16 md:py-24">
          <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-3">
            <div>
              <Eyebrow>Why we exist</Eyebrow>
              <h2 className="mt-4 font-display text-display-sm font-semibold text-ink">
                Power BI, built by people who build on it every day.
              </h2>
            </div>
            <div className="space-y-5 md:col-span-2">
              <p className="text-lg leading-relaxed text-ink-2">
                Most businesses read their numbers off scattered spreadsheets and aging reports, so
                every team walks into the meeting with a different figure and no one is sure which
                one is right.
              </p>
              <p className="text-lg leading-relaxed text-ink-2">
                Kadmoon is a new name, not a new team. For six years we have built data platforms and
                Power BI analytics on the Microsoft stack, more than 2,000 solutions across a range of
                sectors. We know how to pull messy data together in one tenant and turn it into
                numbers people trust.
              </p>
              <p className="text-lg leading-relaxed text-ink-2">
                We lead with Power BI: dashboards, governed semantic models, and migrations from
                legacy BI and spreadsheets. Around that we build the rest of the Microsoft stack,
                Power Apps and Power Automate, data engineering on Fabric and Azure, and Copilot on
                your data. It all runs in your own Microsoft tenant, documented and handed over so you
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
              Let us talk about your Power BI.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-white/65">
              A short call is a simple way to see whether we are a fit and where to start.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <Button href="/contact" size="lg">
                Request a quote <span aria-hidden>→</span>
              </Button>
              <a
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-4 text-[15px] font-semibold text-paper transition-colors hover:border-white/50 hover:bg-white/5"
              >
                See our services
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
