import { assessment } from '@/lib/content';
import { Button } from '../Button';

// Productized paid on-ramp as a single highlighted panel: the pitch on the
// left, the fixed scope and deliverables on the right. Data lives in
// lib/content `assessment`.
export function Assessment() {
  const a = assessment;
  return (
    <section className="mx-auto max-w-shell px-6 py-16 md:py-20">
      <div className="overflow-hidden rounded-3xl border border-accent/30 bg-white shadow-card-hover ring-1 ring-accent/15">
        <div className="grid md:grid-cols-[1.1fr_1fr]">
          {/* Left: the pitch */}
          <div className="border-b border-line p-8 md:border-b-0 md:border-r md:p-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">{a.eyebrow}</span>
            <h2 className="mt-4 font-display text-display-sm font-semibold text-ink">{a.name}</h2>
            <p className="mt-2 font-display text-lg text-ink-2">{a.tagline}</p>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-2">{a.body}</p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="rounded-full border border-line bg-mist px-3 py-1.5 font-mono text-[11px] text-ink-2">
                {a.timebox}
              </span>
              <span className="rounded-full border border-line bg-mist px-3 py-1.5 font-mono text-[11px] text-ink-2">
                {a.price}
              </span>
            </div>
            <div className="mt-7">
              <Button href={a.cta.href} size="lg">
                {a.cta.label} <span aria-hidden>→</span>
              </Button>
            </div>
          </div>

          {/* Right: fixed scope and deliverables */}
          <div className="bg-mist p-8 md:p-10">
            <div className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-3">
              {a.includesLabel}
            </div>
            <ul className="mt-3.5 space-y-2.5">
              {a.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-ink-2">
                  <span aria-hidden className="mt-1.5 h-1.5 w-1.5 flex-none rounded-sm bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7 font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-3">
              {a.deliverLabel}
            </div>
            <ul className="mt-3.5 space-y-2.5">
              {a.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-ink-2">
                  <span aria-hidden className="mt-1.5 h-1.5 w-1.5 flex-none rounded-sm bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[12.5px] leading-relaxed text-ink-3">{a.footnote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
