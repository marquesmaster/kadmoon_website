import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Packages | Fixed-scope Power BI and Fabric engagements',
  description:
    'Productized Microsoft data engagements with a clear scope, timeline, and deliverables: Power BI health check, legacy BI migration, Fabric foundation, Premium-to-Fabric readiness, and managed BI. Fixed price agreed upfront, no hourly surprises.',
  alternates: { canonical: `${siteConfig.url}/packages` },
};

const steps = [
  { n: '01', t: 'Scope', d: 'A 30-minute call to confirm the outcome, the data, and the fit.' },
  { n: '02', t: 'Fixed price', d: 'You get scope, timeline, and investment in one business day. No hourly surprises.' },
  { n: '03', t: 'Deliver', d: 'Senior engineers ship in short, reviewable increments you validate as we go.' },
  { n: '04', t: 'You own it', d: 'Built in your tenant, with documentation and training. No lock-in.' },
];

type Pkg = {
  tag: string;
  name: string;
  tagline: string;
  timeline: string;
  bestFor: string;
  includes: string[];
  deliverable: string;
  featured?: boolean;
};

const packages: Pkg[] = [
  {
    tag: 'Best first step',
    name: 'Power BI Health Check',
    tagline: 'Find where your Power BI estate leaks trust, speed, and money.',
    timeline: '1–2 weeks',
    bestFor: 'You already have Power BI, but reports disagree and nobody fully trusts them.',
    includes: [
      'Inventory of reports, datasets, and workspaces',
      'KPI-conflict audit (where the numbers disagree)',
      'Performance and refresh review',
      'Security and row-level security review',
      'Prioritized fix roadmap',
    ],
    deliverable: 'A scored assessment and a ranked plan to fix it.',
    featured: true,
  },
  {
    tag: 'Start from the decision',
    name: 'Data & BI Assessment',
    tagline: 'A costed architecture plan before you build anything.',
    timeline: '2 weeks',
    bestFor: 'You are starting from scattered data with no single source of truth.',
    includes: [
      'Business-question and KPI mapping',
      'Source and data-quality assessment',
      'Target architecture on Fabric, Synapse, or Azure SQL',
      'Effort and cost estimate by phase',
    ],
    deliverable: 'An architecture plan and a phased, costed roadmap.',
  },
  {
    tag: 'Cut BI license cost',
    name: 'Legacy BI Migration',
    tagline: 'Move off Tableau, Qlik, or Cognos onto Power BI, without losing history.',
    timeline: 'Phased, by report volume',
    bestFor: 'You want to retire expensive legacy BI and standardize on Power BI.',
    includes: [
      'Full inventory and dependency mapping',
      'Report rationalization (keep what earns its place)',
      'Phased rebuild on a governed model',
      'Number-by-number parity validation',
    ],
    deliverable: 'A migrated, governed Power BI estate with no information blackout.',
  },
  {
    tag: 'One source of truth',
    name: 'Fabric Foundation',
    tagline: 'A governed data platform and your first trusted dashboards, live.',
    timeline: '6 weeks',
    bestFor: 'You need one platform feeding every report, built to best practice.',
    includes: [
      'OneLake lakehouse and medallion pipelines',
      'A governed semantic model with one definition per KPI',
      'Direct Lake for fast reports without copies',
      'First executive dashboards in production',
    ],
    deliverable: 'A Microsoft Fabric platform in production, your team can run.',
  },
  {
    tag: 'Beat the deadline',
    name: 'Premium → Fabric Readiness',
    tagline: 'A clear plan for the Power BI Premium to Fabric transition.',
    timeline: '1–2 weeks',
    bestFor: 'You are on Power BI Premium and need to plan the move to Fabric capacity.',
    includes: [
      'Capacity usage analysis',
      'F-SKU sizing and cost model',
      'Workload and workspace migration plan',
      'Risk and cutover sequencing',
    ],
    deliverable: 'A costed, sequenced Fabric transition plan.',
  },
  {
    tag: 'After go-live',
    name: 'Managed BI',
    tagline: 'We run and evolve your BI estate so it keeps earning its keep.',
    timeline: 'Monthly retainer',
    bestFor: 'Your platform is live and you want it healthy, governed, and improving.',
    includes: [
      'Defined SLA for issues and refreshes',
      'Ongoing RLS and Microsoft Purview governance',
      'New reports and measures as needs change',
      'A quarterly evolution roadmap',
    ],
    deliverable: 'A healthy, governed BI estate that keeps pace with the business.',
  },
];

export default function PackagesPage() {
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
              Packages
            </span>
            <h1 className="mt-6 max-w-3xl font-display text-display-lg font-semibold text-ink">
              Know the scope, the timeline, and the price before we start.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
              Fixed-scope Microsoft data engagements built to move fast and prove value. Each one has
              a clear outcome and a price agreed upfront, so you buy a result, not an open meter.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" size="lg">
                Book a scoping call <span aria-hidden>→</span>
              </Button>
              <Button href="/dashboards" size="lg" variant="ghost">
                See the dashboards
              </Button>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-y border-line bg-mist py-14">
          <div className="mx-auto max-w-shell px-6">
            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <div key={s.n}>
                  <div className="font-sans text-sm font-semibold text-accent">{s.n}</div>
                  <h3 className="mt-2.5 font-display text-lg font-semibold text-ink">{s.t}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink-2">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages grid */}
        <section className="bg-paper py-20 md:py-24">
          <div className="mx-auto max-w-shell px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {packages.map((p, i) => (
                <Reveal
                  as="article"
                  key={p.name}
                  delay={(i % 3) * 80}
                  className={`flex flex-col rounded-2xl border bg-white p-8 shadow-card ${
                    p.featured ? 'border-accent/40 ring-1 ring-accent/20' : 'border-line'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`inline-flex rounded-full px-3 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] ${
                        p.featured ? 'bg-accent text-white' : 'bg-mist text-ink-2'
                      }`}
                    >
                      {p.tag}
                    </span>
                    <span className="font-mono text-[12px] text-ink-3">{p.timeline}</span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{p.name}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-ink-2">{p.tagline}</p>

                  <p className="mt-5 text-[13px] font-medium text-ink">Best for</p>
                  <p className="mt-1 text-[14px] leading-relaxed text-ink-2">{p.bestFor}</p>

                  <p className="mt-5 font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-ink-3">
                    What is included
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {p.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-sm bg-accent" />
                        <span className="text-[14px] leading-relaxed text-ink-2">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-xl border-l-2 border-accent bg-mist p-4">
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-navy">
                      You get
                    </p>
                    <p className="mt-1 text-[14px] leading-relaxed text-ink">{p.deliverable}</p>
                  </div>

                  <div className="mt-6 flex-1" />
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent"
                  >
                    Scope this package <span aria-hidden>→</span>
                  </a>
                </Reveal>
              ))}
            </div>

            <p className="mx-auto mt-10 max-w-2xl text-center text-[14px] leading-relaxed text-ink-2">
              Every package is fixed-scope, built by a senior, Microsoft-certified team, and
              delivered in your own tenant. Not sure which one fits? Book a call and we point you to
              the right first step.
            </p>
          </div>
        </section>

        {/* Dark CTA */}
        <section className="relative overflow-hidden bg-ink text-paper">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
          <div className="pointer-events-none absolute inset-0" aria-hidden style={{ backgroundImage: 'radial-gradient(900px 500px at 50% 120%, rgba(255,106,26,.2), transparent 60%)' }} />
          <div className="relative mx-auto max-w-2xl px-6 py-28 text-center">
            <h2 className="font-display text-display-md font-semibold text-white">
              Pick a package, or tell us your scenario.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-white/65">
              Book a 30-minute scoping call. You leave with the right first step and a fixed price,
              at no cost and no obligation.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <Button href="/contact" size="lg">
                Book a scoping call <span aria-hidden>→</span>
              </Button>
              <a
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-4 text-[15px] font-semibold text-paper transition-colors hover:border-white/50 hover:bg-white/5"
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
