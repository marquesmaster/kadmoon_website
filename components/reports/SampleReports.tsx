import type { ReactNode } from 'react';

// ---------------------------------------------------------------------------
// Illustrative "built reports" for the platform page. These are sample views
// of the analytics Kadmoon ships, not real client data. Every card is labeled
// "Sample" and the section carries an "illustrative figures" note. Figures are
// chosen to be realistic in structure, never presented as verified results.
//
// Charts are plain inline SVG / HTML in the ocean palette: single-series where
// possible (accent for the mark, ink tokens for text, line token for the grid),
// so identity never rests on color alone.
// ---------------------------------------------------------------------------

/** Window-chrome wrapper so each report reads as a real console view. */
function ReportChrome({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
      <div className="flex items-center gap-2 border-b border-line px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-line" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-line" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-line" aria-hidden />
        <span className="ml-2 font-sans text-[12px] font-semibold text-ink">{title}</span>
        <span className="ml-auto rounded-full bg-mist px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-ink-3">
          Sample
        </span>
      </div>
      <div className="p-5 md:p-6">{children}</div>
    </div>
  );
}

/** Headline KPI tiles. A stat row is the right "chart" for single numbers. */
export function KpiTiles() {
  const tiles = [
    { k: 'Revenue', v: '$2.48M', sub: 'this month, +2.1% vs plan' },
    { k: 'Gross margin', v: '39.0%', sub: 'blended, all product lines' },
    { k: 'Net retention', v: '112%', sub: 'trailing twelve months' },
    { k: 'Forecast accuracy', v: '96%', sub: 'vs actuals' },
  ];
  return (
    <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {tiles.map((t) => (
        <div key={t.k} className="rounded-2xl border border-line bg-white p-5 shadow-card">
          <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">{t.k}</dt>
          <dd className="mt-2 font-display text-3xl font-bold tracking-tight tabular-nums text-ink">
            {t.v}
          </dd>
          <div className="mt-1 text-[12px] leading-snug text-ink-3">{t.sub}</div>
        </div>
      ))}
    </dl>
  );
}

/** Revenue broken into segments, each a share of the total. */
export function LandedCostCard() {
  const total = 2480000;
  const rows = [
    { k: 'Enterprise', v: 1240000, highlight: true },
    { k: 'Mid-market', v: 760000 },
    { k: 'SMB', v: 360000 },
    { k: 'Services', v: 120000 },
  ];
  const max = Math.max(...rows.map((r) => r.v));
  const fmt = (n: number) => `$${n.toLocaleString('en-US')}`;
  return (
    <ReportChrome title="Revenue by segment · this month">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
          Total revenue
        </span>
        <span className="font-display text-2xl font-bold tabular-nums text-ink">{fmt(total)}</span>
      </div>
      <ul className="mt-5 space-y-3.5">
        {rows.map((r) => (
          <li key={r.k}>
            <div className="flex items-center justify-between text-[13px]">
              <span className={r.highlight ? 'font-semibold text-ink' : 'text-ink-2'}>{r.k}</span>
              <span className="font-mono tabular-nums text-ink-2">{fmt(r.v)}</span>
            </div>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-mist" aria-hidden>
              <div
                className={`h-full rounded-full ${r.highlight ? 'bg-accent' : 'bg-ink-3/45'}`}
                style={{ width: `${Math.max((r.v / max) * 100, 3)}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-5 border-t border-line pt-3 text-[12px] leading-relaxed text-ink-3">
        Revenue attributed to each segment from your CRM and billing, reconciled to the general
        ledger so the total ties to finance.
      </p>
    </ReportChrome>
  );
}

/** Gross margin by product line, highest margin highlighted. */
export function DutyExposureCard() {
  const rows = [
    { k: 'Platform', v: 44.0, highlight: true },
    { k: 'Services', v: 38.0 },
    { k: 'Support', v: 31.0 },
    { k: 'Add-ons', v: 28.0 },
    { k: 'Hardware', v: 22.0 },
  ];
  const max = Math.max(...rows.map((r) => r.v));
  return (
    <ReportChrome title="Gross margin · by product line">
      <ul className="space-y-3.5">
        {rows.map((r) => (
          <li key={r.k} className="grid grid-cols-[120px_1fr_auto] items-center gap-3">
            <span
              className={`truncate text-[13px] ${r.highlight ? 'font-semibold text-ink' : 'text-ink-2'}`}
            >
              {r.k}
            </span>
            <div className="h-2.5 overflow-hidden rounded-full bg-mist" aria-hidden>
              <div
                className={`h-full rounded-full ${r.highlight ? 'bg-accent' : 'bg-ink-3/45'}`}
                style={{ width: `${Math.max((r.v / max) * 100, 3)}%` }}
              />
            </div>
            <span className="w-12 text-right font-mono text-[13px] tabular-nums text-ink">
              {r.v}%
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-5 flex items-start gap-2 border-t border-line pt-3 text-[12px] leading-relaxed text-ink-2">
        <span aria-hidden className="mt-1.5 h-1.5 w-1.5 flex-none rounded-sm bg-accent" />
        <span>
          Platform carries the highest margin at <strong>44%</strong>, so shifting mix toward it
          lifts blended margin the fastest.
        </span>
      </p>
    </ReportChrome>
  );
}

/** On-time delivery over twelve months, with a target reference line. */
export function OtifCard() {
  const data = [86, 88, 87, 90, 91, 89, 92, 93, 92, 94, 93, 94];
  const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  const target = 95;
  const min = 80;
  const max = 100;

  const W = 520;
  const H = 200;
  const pad = { top: 14, right: 14, bottom: 26, left: 32 };
  const plotW = W - pad.left - pad.right;
  const plotH = H - pad.top - pad.bottom;
  const x = (i: number) => pad.left + (i / (data.length - 1)) * plotW;
  const y = (v: number) => pad.top + (1 - (v - min) / (max - min)) * plotH;

  const gridVals = [80, 85, 90, 95, 100];
  const line = data.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const areaD = `M ${x(0).toFixed(1)},${(pad.top + plotH).toFixed(1)} L ${data
    .map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`)
    .join(' L ')} L ${x(data.length - 1).toFixed(1)},${(pad.top + plotH).toFixed(1)} Z`;

  return (
    <ReportChrome title="Operations · on-time delivery by month">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
          On-time delivery
        </span>
        <span className="font-display text-2xl font-bold tabular-nums text-ink">
          94% <span className="text-[13px] font-semibold text-success">+8 pts YTD</span>
        </span>
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mt-3 w-full"
        role="img"
        aria-label="On-time delivery rose from 86% in January to 94% in December, against a 95% target."
      >
        {gridVals.map((g) => (
          <g key={g}>
            <line
              x1={pad.left}
              x2={W - pad.right}
              y1={y(g)}
              y2={y(g)}
              className="stroke-line"
              strokeWidth={1}
            />
            <text x={4} y={y(g) + 3} className="fill-ink-3 font-mono text-[9px]">
              {g}
            </text>
          </g>
        ))}
        {/* Target line */}
        <line
          x1={pad.left}
          x2={W - pad.right}
          y1={y(target)}
          y2={y(target)}
          className="stroke-ink-3"
          strokeWidth={1.5}
          strokeDasharray="4 4"
        />
        <text x={W - pad.right} y={y(target) - 5} textAnchor="end" className="fill-ink-3 font-mono text-[9px]">
          Target 95%
        </text>
        {/* Area + line */}
        <path d={areaD} className="fill-accent/10" />
        <polyline points={line} fill="none" className="stroke-accent" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
        {data.map((v, i) => (
          <circle key={i} cx={x(i)} cy={y(v)} r={3} className="fill-accent">
            <title>{`${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][i]}: ${v}% on time`}</title>
          </circle>
        ))}
        {months.map((m, i) => (
          <text key={i} x={x(i)} y={H - 8} textAnchor="middle" className="fill-ink-3 font-mono text-[9px]">
            {m}
          </text>
        ))}
      </svg>
      <p className="mt-2 border-t border-line pt-3 text-[12px] leading-relaxed text-ink-3">
        Delivery milestones from your ERP and operations systems in one planned-versus-actual view,
        measured by site and team.
      </p>
    </ReportChrome>
  );
}
