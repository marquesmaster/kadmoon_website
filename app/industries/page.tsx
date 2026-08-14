import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { industryPages } from '@/lib/content';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Industries | Power BI and analytics by sector',
  description:
    'Power BI and Microsoft data platforms for financial services, retail, manufacturing, logistics, healthcare, education, and supply chain. Built for each sector, in your tenant.',
  alternates: { canonical: `${siteConfig.url}/industries` },
};

// Illustrative outcomes, clearly labeled. Replaced with real, cleared client
// results when the founder provides them.
const cases = [
  { metric: '-63%', title: 'Refresh time cut on a re-platformed retail estate', desc: 'Nightly reporting moved from a legacy warehouse to Microsoft Fabric, with a governed semantic layer for the exec team.', tag: 'Retail · Fabric & Power BI' },
  { metric: '6 → 1', title: 'Tenants consolidated in a global T2T migration', desc: 'Six Microsoft tenants merged into one, with Power BI workspaces, gateways, and Power Platform apps moved with lineage intact.', tag: 'Financial services · T2T migration' },
  { metric: '$1.2M', title: 'Annual run-rate saved by consolidating tooling', desc: 'Three overlapping BI and warehouse tools retired in favor of a single Synapse and Azure SQL foundation.', tag: 'Manufacturing · Synapse & Azure SQL' },
  { metric: '4×', title: 'Faster month-end close for a services firm', desc: 'Manual spreadsheet consolidation replaced with automated Fabric pipelines and a governed finance model.', tag: 'Professional services · Fabric' },
  { metric: '70+', title: 'Governed Power BI models rolled out enterprise-wide', desc: 'A workspace strategy and Purview lineage brought scattered reports under one trusted, secured framework.', tag: 'Healthcare · Power BI & Purview' },
];

export default function IndustriesPage() {
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
              Industries
            </span>
            <h1 className="mt-6 max-w-3xl font-display text-display-lg font-semibold text-white">
              Built for the industries that run on data.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
              We bring the same Microsoft-native rigor to every sector, tuned to the metrics,
              regulations, and realities of your business.
            </p>
          </div>
        </section>

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
                Outcomes we have delivered on Microsoft.
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
                  With the interactive dashboards behind each one <span aria-hidden>→</span>
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
          <div className="pointer-events-none absolute inset-0" aria-hidden style={{ backgroundImage: 'radial-gradient(900px 500px at 50% 120%, rgba(240,85,59,.24), transparent 60%)' }} />
          <div className="relative mx-auto max-w-2xl px-6 py-28 text-center">
            <h2 className="font-display text-display-md font-semibold text-white">
              Want results like these in your industry?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-white/65">
              Book a discovery call and we will share the approach that fits your sector, your data,
              and your Microsoft footprint.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <Button href="/contact" size="lg">
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
