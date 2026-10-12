import { Reveal } from '../Reveal';

// Mid-page conversion band: a strong, self-contained call to action placed
// partway down a long page so convinced readers can act without scrolling to
// the end.
export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{ backgroundImage: 'radial-gradient(900px 440px at 50% 120%, rgba(20,92,230,.3), transparent 60%)' }}
      />
      <Reveal className="relative mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
          Ready when you are
        </p>
        <h2 className="mt-4 font-display text-display-md font-semibold text-white">
          Turn your trade data into decisions.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/70">
          Start with a trade data assessment: first dashboards in about two weeks, in your own
          tenant, with a clear next step and a quote.
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
      </Reveal>
    </section>
  );
}
