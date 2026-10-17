import { Reveal } from '../Reveal';
import { KpiTiles, LandedCostCard, DutyExposureCard, OtifCard } from '../reports/SampleReports';

// Dense, high-contrast analytics showcase placed right after the hero: real
// built reports framed inside a Fluent "acrylic" workspace panel on a navy
// ground, so the home leads with analytics and reads like Power BI in your own
// tenant. Doubles as the platform teaser.
export function ReportsBand() {
  return (
    <section id="platform" className="relative overflow-hidden border-y-2 border-accent/60 bg-navy">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{ backgroundImage: 'radial-gradient(1100px 520px at 50% -12%, rgba(20,92,230,.28), transparent 62%)' }}
      />
      <div className="relative mx-auto max-w-shell px-6 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#8FB8FF]">
              The platform · in your own tenant
            </span>
            <h2 className="mt-4 font-display text-display-sm font-semibold text-white">
              The reports your team opens every morning.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Landed cost to the unit, duty exposure by product line, and on-time performance over
              time, built on one governed model fed from the systems you already run.
            </p>
          </div>
          <a
            href="/platform"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-paper transition-colors hover:border-white/50 hover:bg-white/5"
          >
            See the platform <span aria-hidden>→</span>
          </a>
        </div>

        {/* Fluent "acrylic" workspace framing the real reports */}
        <div className="fluent-acrylic-dark mt-10 rounded-[1.5rem] p-4 md:p-6">
          <div className="flex items-center gap-2 px-1">
            <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-accent/70" />
            <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
              Your tenant · Power BI
            </span>
            <span className="ml-auto rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-white/55">
              Refreshed daily
            </span>
          </div>

          <div className="mt-5">
            <KpiTiles />
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-3">
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
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent/90"
          >
            Request a quote <span aria-hidden>→</span>
          </a>
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/45">
            Illustrative figures · fictitious client · under NDA
          </span>
        </div>
      </div>
    </section>
  );
}
