import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/sections/PageHero';
import { KpiTiles, LandedCostCard, DutyExposureCard, OtifCard } from '@/components/reports/SampleReports';
import { platform } from '@/lib/content';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Platform | Kadmoon Trade Intelligence',
  description:
    'Kadmoon Trade Intelligence connects your ERP, broker, carrier, EDI and ACE, and spreadsheets into one governed model, and delivers landed cost, duty exposure, visibility, and compliance reports in your own Microsoft tenant.',
  alternates: { canonical: `${siteConfig.url}/platform` },
};

const sources = ['SAP', 'Oracle', 'NetSuite', 'Microsoft', 'Broker & carrier', 'EDI / ACE', 'Spreadsheets'];

export default function PlatformPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow={platform.eyebrow}
          title={platform.title}
          breadcrumbs={<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Platform' }]} />}
        >
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">{platform.lead}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {platform.ctas.map((cta) => (
              <Button key={cta.href} href={cta.href} size="lg" variant={cta.primary ? 'primary' : 'ghost'}>
                {cta.label}
                {cta.primary && <span aria-hidden>→</span>}
              </Button>
            ))}
          </div>
          <div className="mt-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">
              Reads from the systems you already run
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {sources.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-line bg-white px-3 py-1.5 font-mono text-[11px] text-ink-2"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </PageHero>

        {/* How it works — four pillars */}
        <section className="mx-auto max-w-shell px-6 py-16 md:py-20">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {platform.pillars.map((p, i) => (
              <Reveal
                as="div"
                key={p.step}
                delay={(i % 4) * 70}
                className="group flex flex-col bg-paper p-6 md:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy/5 text-navy transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs text-ink-3">{p.step}</span>
                </div>
                <h2 className="mt-5 font-display text-lg font-semibold tracking-[-0.02em] text-ink">
                  {p.title}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Built reports showcase */}
        <section className="bg-mist py-16 md:py-24">
          <div className="mx-auto max-w-shell px-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
              {platform.reports.eyebrow}
            </span>
            <h2 className="mt-4 max-w-2xl font-display text-display-sm text-ink">
              {platform.reports.title}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-2">{platform.reports.sub}</p>

            <div className="mt-10">
              <KpiTiles />
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              <Reveal as="div">
                <LandedCostCard />
              </Reveal>
              <Reveal as="div" delay={90}>
                <DutyExposureCard />
              </Reveal>
              <Reveal as="div" delay={180}>
                <OtifCard />
              </Reveal>
            </div>

            <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-ink-3">
              {platform.reports.disclaimer}
            </p>
          </div>
        </section>

        {/* Engagement model */}
        <section className="mx-auto max-w-shell px-6 py-16 md:py-20">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
            {platform.engage.eyebrow}
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-display-sm text-ink">
            {platform.engage.title}
          </h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {platform.engage.steps.map((s, i) => (
              <li
                key={s.name}
                className="flex flex-col rounded-2xl border border-line bg-paper p-6 shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-semibold tracking-[-0.03em] text-navy/20">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="rounded-full border border-line bg-mist px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-2">
                    {s.meta}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{s.name}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-[14px] leading-relaxed text-ink-3">{platform.engage.note}</p>
        </section>

        {/* Closing CTA */}
        <section className="relative overflow-hidden bg-navy">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden
            style={{ backgroundImage: 'radial-gradient(900px 440px at 50% 120%, rgba(20,92,230,.3), transparent 60%)' }}
          />
          <div className="relative mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
            <h2 className="font-display text-display-md font-semibold text-white">{platform.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/70">
              {platform.cta.body}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3.5">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent/90"
              >
                Request a quote <span aria-hidden>→</span>
              </a>
              <a
                href="/cases"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-4 text-[15px] font-semibold text-paper transition-colors hover:border-white/50 hover:bg-white/5"
              >
                See case studies
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
