import { boutiqueEdge } from '@/lib/content';

// Anti-big-firm / enablement band. Dark band to carry the punch; matches the
// site's other dark bands. Data lives in lib/content `boutiqueEdge`.
export function BoutiqueEdge() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{ backgroundImage: 'radial-gradient(900px 480px at 50% -10%, rgba(20,92,230,.22), transparent 62%)' }}
      />
      <div className="relative mx-auto max-w-shell px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#8FB8FF]">
            {boutiqueEdge.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-display-sm font-semibold text-white">{boutiqueEdge.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">{boutiqueEdge.lead}</p>
        </div>
        <div className="mt-11 grid gap-6 sm:grid-cols-2">
          {boutiqueEdge.points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/12 bg-white/5 p-7">
              <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-white/70">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
