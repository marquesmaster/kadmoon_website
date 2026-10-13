import type { ReactNode } from 'react';

// ---------------------------------------------------------------------------
// Illustrative "built reports" for the platform page. These are sample views
// of the analytics Kadmoon ships, not real client data. Every card is labeled
// "Sample" and the section carries the illustrative / fictitious-client / NDA
// disclaimer. Figures are chosen to be realistic in structure, never presented
// as verified results.
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
    { k: 'Landed cost accuracy', v: '98%', sub: 'vs actuals at receipt' },
    { k: 'Effective duty rate', v: '6.2%', sub: 'blended, all entries' },
    { k: 'Duty at risk', v: '$1.4M', sub: 'modeled tariff scenario' },
    { k: 'OTIF', v: '94%', sub: 'on time, in full' },
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

/** Landed cost broken into its components, each a share of the total. */
export function LandedCostCard() {
  const total = 97830;
  const rows = [
    { k: 'Product cost', v: 84200 },
    { k: 'Ocean freight', v: 6480 },
    { k: 'Duty (HTS)', v: 5910, highlight: true },
    { k: 'Brokerage & fees', v: 1240 },
  ];
  const max = Math.max(...rows.map((r) => r.v));
  const fmt = (n: number) => `$${n.toLocaleString('en-US')}`;
  return (
    <ReportChrome title="Landed cost · shipment IM-4821">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
          Total landed cost
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
        Freight, duty, insurance, and brokerage allocated to the unit as goods arrive, from SAP and
        the forwarder&apos;s invoices.
      </p>
    </ReportChrome>
  );
}

/** Effective duty rate by product line, highest exposure highlighted. */
export function DutyExposureCard() {
  const rows = [
    { k: 'Steel fittings', v: 12.8, highlight: true },
    { k: 'Aluminum parts', v: 9.4 },
    { k: 'Textiles', v: 7.1 },
    { k: 'Electronics', v: 4.2 },
    { k: 'Machinery', v: 2.9 },
  ];
  const max = Math.max(...rows.map((r) => r.v));
  return (
    <ReportChrome title="Duty exposure · effective rate by product line">
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
          A 10-point Section 301 increase on steel fittings adds <strong>$420k/yr</strong> in duty,
          modeled the same day the rate changes.
        </span>
      </p>
    </ReportChrome>
  );
}

/** OTIF over twelve months, with a target reference line. */
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
    <ReportChrome title="Shipment visibility · OTIF by month">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
          On time, in full
        </span>
        <span className="font-display text-2xl font-bold tabular-nums text-ink">
          94% <span className="text-[13px] font-semibold text-success">+8 pts YTD</span>
        </span>
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mt-3 w-full"
        role="img"
        aria-label="OTIF rose from 86% in January to 94% in December, against a 95% target."
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
            <title>{`${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][i]}: ${v}% OTIF`}</title>
          </circle>
        ))}
        {months.map((m, i) => (
          <text key={i} x={x(i)} y={H - 8} textAnchor="middle" className="fill-ink-3 font-mono text-[9px]">
            {m}
          </text>
        ))}
      </svg>
      <p className="mt-2 border-t border-line pt-3 text-[12px] leading-relaxed text-ink-3">
        Carrier milestones unified over EDI and API into one planned-versus-actual view, measured by
        lane and carrier.
      </p>
    </ReportChrome>
  );
}
