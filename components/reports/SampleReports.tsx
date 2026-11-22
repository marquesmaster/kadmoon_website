import type { ReactNode } from 'react';

// ---------------------------------------------------------------------------
// Product-UI "built reports" for the home and finance sections. These mirror
// the structure of the finance Power BI reports Kadmoon builds and demonstrates
// (CFO board pack, budget vs actual, cash and working capital, month-end close).
// They are representative product UI, not attributed to any client and not a
// specific client's real result. Figures are chosen to be coherent in structure.
//
// Charts are plain inline SVG / HTML in the violet palette: single-series where
// possible (accent for the mark, ink tokens for text, line token for the grid),
// favorable in green (success) and unfavorable in amber (warning), so identity
// never rests on color alone.
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
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card">
      <div className="flex items-center gap-2 border-b border-line px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-line" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-line" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-line" aria-hidden />
        <span className="ml-2 font-sans text-[12px] font-semibold text-ink">{title}</span>
      </div>
      <div className="flex-1 p-5 md:p-6">{children}</div>
    </div>
  );
}

/**
 * Executive summary KPIs from the CFO board pack: P&L health plus the cash
 * conversion cycle, the numbers a board reads first.
 */
export function KpiTiles() {
  const tiles = [
    { k: 'Net revenue', v: '$5.24M', sub: 'this month, +3.1% vs budget' },
    { k: 'Gross margin', v: '41.2%', sub: '+0.8 pts vs budget' },
    { k: 'EBITDA margin', v: '18.4%', sub: 'vs 17.0% budget' },
    { k: 'Cash conversion', v: '63 days', sub: 'DSO + DIO − DPO' },
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

/**
 * Budget vs actual: the P&L against plan, with favorable and unfavorable
 * variance. Mirrors the Variance Overview page. Values in USD thousands.
 */
export function BudgetVsActualCard() {
  const rows = [
    { k: 'Net revenue', actual: 5240, budget: 5080, favGood: true },
    { k: 'Gross profit', actual: 2159, budget: 2052, favGood: true },
    { k: 'Operating expenses', actual: 1195, budget: 1188, favGood: false },
    { k: 'EBITDA', actual: 964, budget: 864, favGood: true, strong: true },
  ];
  const fmt = (n: number) => n.toLocaleString('en-US');
  return (
    <ReportChrome title="Budget vs actual · P&L this month">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
          USD thousands
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
          Actual · Budget · Var
        </span>
      </div>
      <ul className="mt-4 space-y-3">
        {rows.map((r) => {
          const diff = r.actual - r.budget;
          const pct = (diff / r.budget) * 100;
          // Favorable when actual beats budget in the good direction for the line.
          const favorable = r.favGood ? diff >= 0 : diff <= 0;
          const sign = pct >= 0 ? '+' : '−';
          return (
            <li
              key={r.k}
              className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-x-3 gap-y-1 border-b border-line/70 pb-3 last:border-0 last:pb-0"
            >
              <span className={`text-[13px] ${r.strong ? 'font-semibold text-ink' : 'text-ink-2'}`}>
                {r.k}
              </span>
              <span className="w-16 text-right font-mono text-[13px] tabular-nums text-ink">
                {fmt(r.actual)}
              </span>
              <span className="w-16 text-right font-mono text-[12px] tabular-nums text-ink-3">
                {fmt(r.budget)}
              </span>
              <span
                className={`w-14 text-right font-mono text-[12px] font-semibold tabular-nums ${
                  favorable ? 'text-success' : 'text-warning'
                }`}
              >
                {sign}
                {Math.abs(pct).toFixed(1)}%
              </span>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 border-t border-line pt-3 text-[12px] leading-relaxed text-ink-3">
        Actuals from the general ledger against the budget version, one definition per line, so a
        variance drills straight to the accounts behind it.
      </p>
    </ReportChrome>
  );
}

/**
 * Cash and working capital: AR aging buckets plus the working-capital cycle.
 * Mirrors the Working Capital & Receivables page.
 */
export function WorkingCapitalCard() {
  const aging = [
    { k: 'Current', v: 62, highlight: true },
    { k: '1–30 days', v: 21 },
    { k: '31–60 days', v: 10 },
    { k: '61–90 days', v: 4 },
    { k: 'Over 90 days', v: 3, late: true },
  ];
  const cycle = [
    { k: 'DSO', v: 44 },
    { k: 'DIO', v: 58 },
    { k: 'DPO', v: 39 },
    { k: 'CCC', v: 63, strong: true },
  ];
  const max = Math.max(...aging.map((a) => a.v));
  return (
    <ReportChrome title="Cash & working capital · receivables">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
          AR aging · share of open
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
          7% past due
        </span>
      </div>
      <ul className="mt-4 space-y-2.5">
        {aging.map((r) => (
          <li key={r.k} className="grid grid-cols-[88px_1fr_auto] items-center gap-3">
            <span
              className={`truncate text-[12.5px] ${
                r.highlight ? 'font-semibold text-ink' : r.late ? 'text-warning' : 'text-ink-2'
              }`}
            >
              {r.k}
            </span>
            <div className="h-2.5 overflow-hidden rounded-full bg-mist" aria-hidden>
              <div
                className={`h-full rounded-full ${
                  r.highlight ? 'bg-accent' : r.late ? 'bg-warning' : 'bg-ink-3/45'
                }`}
                style={{ width: `${Math.max((r.v / max) * 100, 3)}%` }}
              />
            </div>
            <span className="w-10 text-right font-mono text-[12.5px] tabular-nums text-ink">
              {r.v}%
            </span>
          </li>
        ))}
      </ul>
      <dl className="mt-4 grid grid-cols-4 gap-2 border-t border-line pt-4">
        {cycle.map((c) => (
          <div key={c.k}>
            <dt className="font-mono text-[9px] uppercase tracking-[0.08em] text-ink-3">{c.k}</dt>
            <dd
              className={`mt-1 font-display text-lg font-bold tabular-nums ${
                c.strong ? 'text-accent' : 'text-ink'
              }`}
            >
              {c.v}
              <span className="ml-0.5 text-[10px] font-semibold text-ink-3">d</span>
            </dd>
          </div>
        ))}
      </dl>
    </ReportChrome>
  );
}

/**
 * Month-end close: days to close by month against the business-day-5 target.
 * Mirrors the Close Performance page.
 */
export function MonthEndCloseCard() {
  const data = [8.5, 8.0, 7.5, 7.0, 7.5, 6.5, 6.0, 6.5, 6.0, 5.5, 6.0, 5.5];
  const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  const target = 5;
  const min = 4;
  const max = 9;

  const W = 520;
  const H = 200;
  const pad = { top: 14, right: 16, bottom: 26, left: 30 };
  const plotW = W - pad.left - pad.right;
  const plotH = H - pad.top - pad.bottom;
  const x = (i: number) => pad.left + (i / (data.length - 1)) * plotW;
  const y = (v: number) => pad.top + (1 - (v - min) / (max - min)) * plotH;

  const gridVals = [4, 5, 6, 7, 8, 9];
  const line = data.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const areaD = `M ${x(0).toFixed(1)},${(pad.top + plotH).toFixed(1)} L ${data
    .map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`)
    .join(' L ')} L ${x(data.length - 1).toFixed(1)},${(pad.top + plotH).toFixed(1)} Z`;

  return (
    <ReportChrome title="Month-end close · days to close">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
          Days to close
        </span>
        <span className="font-display text-2xl font-bold tabular-nums text-ink">
          5.5 <span className="text-[13px] font-semibold text-success">−3.0 days YTD</span>
        </span>
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mt-3 w-full"
        role="img"
        aria-label="Days to close fell from 8.5 in January to 5.5 in December, against a business-day-5 target."
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
        {/* Target line: business day 5 */}
        <line
          x1={pad.left}
          x2={W - pad.right}
          y1={y(target)}
          y2={y(target)}
          className="stroke-accent"
          strokeWidth={1.5}
          strokeDasharray="4 4"
        />
        <text
          x={W - pad.right}
          y={y(target) - 5}
          textAnchor="end"
          className="fill-accent font-mono text-[9px]"
        >
          Target BD5
        </text>
        {/* Area + line */}
        <path d={areaD} className="fill-accent/10" />
        <polyline
          points={line}
          fill="none"
          className="stroke-accent"
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {data.map((v, i) => (
          <circle key={i} cx={x(i)} cy={y(v)} r={3} className="fill-accent">
            <title>{`${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}: ${v} days to close`}</title>
          </circle>
        ))}
        {months.map((m, i) => (
          <text
            key={i}
            x={x(i)}
            y={H - 8}
            textAnchor="middle"
            className="fill-ink-3 font-mono text-[9px]"
          >
            {m}
          </text>
        ))}
      </svg>
      <p className="mt-2 border-t border-line pt-3 text-[12px] leading-relaxed text-ink-3">
        Each close tracked against its business-day target, with on-time task completion and
        post-close entries, so the close gets shorter and steadier over time.
      </p>
    </ReportChrome>
  );
}
