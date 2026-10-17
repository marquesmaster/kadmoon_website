import { microsoftStack } from '@/lib/content';

// A Fluent-style "acrylic" workspace panel framed like Power BI in your tenant:
// a window chrome, a 2x2 grid of mini dashboard tiles, and the three delivery
// technologies named with brand-neutral glyphs. Shared by the home Microsoft
// band (light) and the platform tenant band (dark). No official logos are used.

type Tone = 'light' | 'dark';

// Brand-neutral geometric glyphs drawn in currentColor. They evoke the Microsoft
// design language (tiles, bars, a cloud mark) without reproducing any logo.
function StackGlyph({ mark }: { mark: string }) {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', 'aria-hidden': true } as const;
  if (mark === 'fabric') {
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
    return (
      <svg {...common} fill="none">
        <rect x="3" y="13" width="4.5" height="8" rx="1.3" fill="currentColor" opacity="0.5" />
        <rect x="9.75" y="8" width="4.5" height="13" rx="1.3" fill="currentColor" opacity="0.75" />
        <rect x="16.5" y="3" width="4.5" height="18" rx="1.3" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg {...common} fill="none">
      <path d="M11 4 L19 20 H13 L9.5 12.5 L12 11 Z" fill="currentColor" opacity="0.9" />
      <path d="M8.5 9 L13 20 H3 Z" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function FluentWorkspace({ tone = 'light' }: { tone?: Tone }) {
  const dark = tone === 'dark';
  const panel = dark ? 'fluent-acrylic-dark' : 'fluent-acrylic';
  const tile = dark ? 'fluent-tile-dark' : 'fluent-tile';
  const chromeLabel = dark ? 'text-white/50' : 'text-ink-3';
  const label = dark ? 'text-white/45' : 'text-ink-3';
  const num = dark ? 'text-white' : 'text-ink';
  const divider = dark ? 'border-white/10' : 'border-line/80';
  const glyphWrap = dark ? 'bg-white/10 text-[#8FB8FF]' : 'bg-navy/5 text-navy';
  const stackName = dark ? 'text-white' : 'text-ink';
  const stackRole = dark ? 'text-white/55' : 'text-ink-3';
  const lineStroke = dark ? '#8FB8FF' : 'rgb(var(--navy))';
  const gaugeTrack = dark ? 'rgb(255 255 255 / 0.15)' : 'rgb(var(--line))';

  return (
    <div className={`${panel} rounded-[1.25rem] p-5 md:p-6`}>
      <div className="flex items-center gap-2">
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span aria-hidden className={`h-2.5 w-2.5 rounded-full ${dark ? 'bg-white/25' : 'bg-ink-3/40'}`} />
        <span aria-hidden className={`h-2.5 w-2.5 rounded-full ${dark ? 'bg-white/25' : 'bg-ink-3/40'}`} />
        <span className={`ml-2 font-mono text-[10px] uppercase tracking-[0.14em] ${chromeLabel}`}>
          Your tenant · Power BI
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {/* KPI tile */}
        <div className={`${tile} rounded-xl p-3.5`}>
          <div className={`font-mono text-[9px] uppercase tracking-[0.12em] ${label}`}>On-time</div>
          <div className={`mt-1 font-display text-2xl font-bold tracking-tight ${num}`}>94%</div>
          <div className="mt-0.5 font-mono text-[9px] text-success">+2.1 pts</div>
        </div>
        {/* Bars tile */}
        <div className={`${tile} rounded-xl p-3.5`}>
          <div className={`font-mono text-[9px] uppercase tracking-[0.12em] ${label}`}>Duty by line</div>
          <div className="mt-3 flex h-10 items-end gap-1.5">
            {[40, 62, 34, 80, 54, 70].map((h, i) => (
              <span key={i} className="flex-1 rounded-sm bg-accent" style={{ height: `${h}%`, opacity: 0.55 + (i % 3) * 0.15 }} />
            ))}
          </div>
        </div>
        {/* Line/area tile */}
        <div className={`${tile} rounded-xl p-3.5`}>
          <div className={`font-mono text-[9px] uppercase tracking-[0.12em] ${label}`}>Landed cost</div>
          <svg viewBox="0 0 100 34" className="mt-2 h-10 w-full" aria-hidden preserveAspectRatio="none">
            <path d="M0 26 L18 20 L36 24 L54 12 L72 16 L100 6" fill="none" stroke={lineStroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M0 26 L18 20 L36 24 L54 12 L72 16 L100 6 L100 34 L0 34 Z" fill="rgb(var(--accent) / 0.12)" />
          </svg>
        </div>
        {/* Gauge tile */}
        <div className={`${tile} rounded-xl p-3.5`}>
          <div className={`font-mono text-[9px] uppercase tracking-[0.12em] ${label}`}>Clearance</div>
          <div className="mt-2 flex items-center gap-2.5">
            <svg viewBox="0 0 36 36" className="h-10 w-10" aria-hidden>
              <circle cx="18" cy="18" r="15" fill="none" stroke={gaugeTrack} strokeWidth="5" />
              <circle cx="18" cy="18" r="15" fill="none" stroke="rgb(var(--accent))" strokeWidth="5" strokeLinecap="round" strokeDasharray="94.2" strokeDashoffset="24" transform="rotate(-90 18 18)" />
            </svg>
            <div>
              <div className={`font-display text-lg font-bold leading-none ${num}`}>1.4d</div>
              <div className={`mt-0.5 font-mono text-[9px] ${label}`}>avg</div>
            </div>
          </div>
        </div>
      </div>

      <div className={`mt-5 grid gap-2.5 border-t ${divider} pt-5 sm:grid-cols-3`}>
        {microsoftStack.stack.map((s) => (
          <div key={s.name} className="flex items-start gap-2.5">
            <span className={`mt-0.5 grid h-8 w-8 flex-none place-items-center rounded-lg ${glyphWrap}`}>
              <StackGlyph mark={s.mark} />
            </span>
            <div className="min-w-0">
              <div className={`truncate font-display text-[13px] font-semibold ${stackName}`}>{s.name}</div>
              <div className={`mt-0.5 text-[11px] leading-snug ${stackRole}`}>{s.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
