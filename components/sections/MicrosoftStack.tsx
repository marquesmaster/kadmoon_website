import { microsoftStack } from '@/lib/content';
import { Eyebrow } from '../Eyebrow';
import { Reveal } from '../Reveal';

// Brand-neutral geometric glyphs drawn in our ocean palette. These evoke the
// Microsoft design language (tiles, bars, a cloud mark) without reproducing any
// official logo or color, so there is no trademark or partnership implication.
function StackGlyph({ mark }: { mark: string }) {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', 'aria-hidden': true } as const;
  if (mark === 'fabric') {
    // Overlapping tiles → a unified data fabric.
    return (
      <svg {...common} fill="none">
        <rect x="3" y="3" width="8" height="8" rx="2" fill="currentColor" opacity="0.9" />
        <rect x="13" y="3" width="8" height="8" rx="2" fill="currentColor" opacity="0.45" />
        <rect x="3" y="13" width="8" height="8" rx="2" fill="currentColor" opacity="0.45" />
        <rect x="13" y="13" width="8" height="8" rx="2" fill="currentColor" opacity="0.7" />
      </svg>
    );
  }
  if (mark === 'powerbi') {
    // Ascending bars → reports and dashboards.
    return (
      <svg {...common} fill="none">
        <rect x="3" y="13" width="4.5" height="8" rx="1.3" fill="currentColor" opacity="0.5" />
        <rect x="9.75" y="8" width="4.5" height="13" rx="1.3" fill="currentColor" opacity="0.75" />
        <rect x="16.5" y="3" width="4.5" height="18" rx="1.3" fill="currentColor" />
      </svg>
    );
  }
  // azure: an abstract cloud/chevron mark.
  return (
    <svg {...common} fill="none">
      <path d="M11 4 L19 20 H13 L9.5 12.5 L12 11 Z" fill="currentColor" opacity="0.9" />
      <path d="M8.5 9 L13 20 H3 Z" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

// A compact 2x2 grid of Fluent tiles with micro-visuals: the "Power BI in your
// tenant" motif, distinct from the full report cards elsewhere on the page.
function TileMotif() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* KPI tile */}
      <div className="fluent-tile rounded-xl p-3.5">
        <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink-3">On-time</div>
        <div className="mt-1 font-display text-2xl font-bold tracking-tight text-ink">94%</div>
        <div className="mt-0.5 font-mono text-[9px] text-success">+2.1 pts</div>
      </div>
      {/* Bars tile */}
      <div className="fluent-tile rounded-xl p-3.5">
        <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink-3">Duty by line</div>
        <div className="mt-3 flex h-10 items-end gap-1.5">
          {[40, 62, 34, 80, 54, 70].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-sm bg-accent"
              style={{ height: `${h}%`, opacity: 0.55 + (i % 3) * 0.15 }}
            />
          ))}
        </div>
      </div>
      {/* Line/area tile */}
      <div className="fluent-tile rounded-xl p-3.5">
        <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink-3">Landed cost</div>
        <svg viewBox="0 0 100 34" className="mt-2 h-10 w-full" aria-hidden preserveAspectRatio="none">
          <path d="M0 26 L18 20 L36 24 L54 12 L72 16 L100 6" fill="none" stroke="rgb(var(--navy))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M0 26 L18 20 L36 24 L54 12 L72 16 L100 6 L100 34 L0 34 Z" fill="rgb(var(--accent) / 0.1)" />
        </svg>
      </div>
      {/* Gauge/donut tile */}
      <div className="fluent-tile rounded-xl p-3.5">
        <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink-3">Clearance</div>
        <div className="mt-2 flex items-center gap-2.5">
          <svg viewBox="0 0 36 36" className="h-10 w-10" aria-hidden>
            <circle cx="18" cy="18" r="15" fill="none" stroke="rgb(var(--line))" strokeWidth="5" />
            <circle
              cx="18" cy="18" r="15" fill="none" stroke="rgb(var(--accent))" strokeWidth="5"
              strokeLinecap="round" strokeDasharray="94.2" strokeDashoffset="24" transform="rotate(-90 18 18)"
            />
          </svg>
          <div>
            <div className="font-display text-lg font-bold leading-none text-ink">1.4d</div>
            <div className="mt-0.5 font-mono text-[9px] text-ink-3">avg</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MicrosoftStack() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-mist">
      <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-50" aria-hidden />
      <div className="relative mx-auto grid max-w-shell gap-12 px-6 py-16 md:grid-cols-[1fr_0.9fr] md:items-center md:gap-16 md:py-20">
        {/* Left: the message */}
        <Reveal>
          <Eyebrow>{microsoftStack.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-display-sm font-semibold tracking-[-0.02em] text-ink">
            {microsoftStack.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-2">{microsoftStack.lead}</p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {microsoftStack.points.map((p) => (
              <div key={p.title} className="rounded-xl border border-line bg-white/70 p-4">
                <dt className="font-display text-[14px] font-semibold text-ink">{p.title}</dt>
                <dd className="mt-1.5 text-[13px] leading-relaxed text-ink-2">{p.body}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 max-w-xl text-[13px] leading-relaxed text-ink-3">{microsoftStack.note}</p>
        </Reveal>

        {/* Right: the Fluent "acrylic" workspace panel */}
        <Reveal delay={120}>
          <div className="fluent-acrylic rounded-[1.25rem] p-5 md:p-6">
            <div className="flex items-center gap-2">
              <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-accent/70" />
              <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-ink-3/40" />
              <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-ink-3/40" />
              <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
                Your tenant · Power BI
              </span>
            </div>

            <div className="mt-5">
              <TileMotif />
            </div>

            <div className="mt-5 grid gap-2.5 border-t border-line/80 pt-5 sm:grid-cols-3">
              {microsoftStack.stack.map((s) => (
                <div key={s.name} className="flex items-start gap-2.5">
                  <span className="mt-0.5 grid h-8 w-8 flex-none place-items-center rounded-lg bg-navy/5 text-navy">
                    <StackGlyph mark={s.mark} />
                  </span>
                  <div className="min-w-0">
                    <div className="truncate font-display text-[13px] font-semibold text-ink">{s.name}</div>
                    <div className="mt-0.5 text-[11px] leading-snug text-ink-3">{s.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
