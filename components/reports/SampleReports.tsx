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

// ---------------------------------------------------------------------------
// Shared building blocks for the operations and sector report cards below.
// ---------------------------------------------------------------------------

/** Horizontal bar list in the violet palette, one tone per row. */
function MiniBars({
  rows,
  max,
  suffix,
  labelW = 'minmax(96px,auto)',
}: {
  rows: { k: string; v: number; tone?: 'accent' | 'success' | 'warning' | 'muted'; strong?: boolean; show?: string }[];
  max: number;
  suffix: string;
  labelW?: string;
}) {
  const bar = (t?: string) =>
    t === 'success' ? 'bg-success' : t === 'warning' ? 'bg-warning' : t === 'muted' ? 'bg-ink-3/40' : 'bg-accent';
  const txt = (t?: string) =>
    t === 'warning' ? 'text-warning' : t === 'success' ? 'text-success' : 'text-ink';
  return (
    <ul className="space-y-2.5">
      {rows.map((r) => (
        <li
          key={r.k}
          className="grid items-center gap-3"
          style={{ gridTemplateColumns: `${labelW} 1fr auto` }}
        >
          <span className={`truncate text-[12.5px] ${r.strong ? 'font-semibold text-ink' : 'text-ink-2'}`}>
            {r.k}
          </span>
          <div className="h-2.5 overflow-hidden rounded-full bg-mist" aria-hidden>
            <div
              className={`h-full rounded-full ${bar(r.tone)}`}
              style={{ width: `${Math.max((r.v / max) * 100, 3)}%` }}
            />
          </div>
          <span className={`w-14 text-right font-mono text-[12.5px] tabular-nums ${txt(r.tone)}`}>
            {r.show ?? `${r.v}${suffix}`}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Compact stat tiles for a report header strip. */
function StatStrip({
  items,
  cols = 3,
}: {
  items: { k: string; v: string; sub?: string; tone?: 'ink' | 'success' | 'warning' | 'accent' }[];
  cols?: number;
}) {
  const txt = (t?: string) =>
    t === 'warning' ? 'text-warning' : t === 'success' ? 'text-success' : t === 'accent' ? 'text-accent' : 'text-ink';
  return (
    <dl className="grid gap-3" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))` }}>
      {items.map((t) => (
        <div key={t.k}>
          <dt className="font-mono text-[9px] uppercase tracking-[0.08em] text-ink-3">{t.k}</dt>
          <dd className={`mt-1 font-display text-xl font-bold tabular-nums ${txt(t.tone)}`}>{t.v}</dd>
          {t.sub ? <div className="text-[11px] leading-snug text-ink-3">{t.sub}</div> : null}
        </div>
      ))}
    </dl>
  );
}

/** Floating-bar waterfall (margin bridge, ARR bridge). */
function WaterfallChart({
  title,
  legendLeft,
  legendRight,
  rows,
  max,
  note,
}: {
  title: string;
  legendLeft: string;
  legendRight: string;
  rows: { k: string; lo: number; hi: number; kind: 'base' | 'up' | 'down'; label: string }[];
  max: number;
  note: string;
}) {
  const fill = (kind: string) =>
    kind === 'up' ? 'bg-success' : kind === 'down' ? 'bg-warning' : 'bg-accent';
  const txt = (kind: string) =>
    kind === 'up' ? 'text-success' : kind === 'down' ? 'text-warning' : 'text-ink';
  return (
    <ReportChrome title={title}>
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">{legendLeft}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">{legendRight}</span>
      </div>
      <ul className="mt-4 space-y-2.5">
        {rows.map((r) => (
          <li key={r.k} className="grid grid-cols-[104px_1fr_auto] items-center gap-3">
            <span
              className={`truncate text-[12.5px] ${r.kind === 'base' ? 'font-semibold text-ink' : 'text-ink-2'}`}
            >
              {r.k}
            </span>
            <div className="relative h-3 rounded-full bg-mist" aria-hidden>
              <div
                className={`absolute top-0 h-full rounded-full ${fill(r.kind)}`}
                style={{ left: `${(r.lo / max) * 100}%`, width: `${Math.max(((r.hi - r.lo) / max) * 100, 1.5)}%` }}
              />
            </div>
            <span className={`w-16 text-right font-mono text-[12.5px] tabular-nums ${txt(r.kind)}`}>
              {r.label}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 border-t border-line pt-3 text-[12px] leading-relaxed text-ink-3">{note}</p>
    </ReportChrome>
  );
}

/**
 * Margin analytics: price-volume-mix bridge from prior to current gross margin.
 * Mirrors the PVM / margin-bridge page. Values in USD thousands.
 */
export function MarginBridgeCard() {
  return (
    <WaterfallChart
      title="Margin bridge · price, volume, mix, cost"
      legendLeft="USD thousands"
      legendRight="Prior → current GM"
      max={2327}
      rows={[
        { k: 'Prior margin', lo: 0, hi: 2052, kind: 'base', label: '2,052' },
        { k: 'Price', lo: 2052, hi: 2232, kind: 'up', label: '+180' },
        { k: 'Volume', lo: 2232, hi: 2327, kind: 'up', label: '+95' },
        { k: 'Mix', lo: 2267, hi: 2327, kind: 'down', label: '−60' },
        { k: 'Cost', lo: 2159, hi: 2267, kind: 'down', label: '−108' },
        { k: 'Current margin', lo: 0, hi: 2159, kind: 'base', label: '2,159' },
      ]}
      note="Gross margin movement split into price, volume, mix, and cost, by product and channel, so the change is explained, not just reported."
    />
  );
}

/**
 * Inventory and supply: weeks of cover by category plus excess and dead stock.
 * Mirrors the stock-cover / excess page.
 */
export function InventoryCoverCard() {
  return (
    <ReportChrome title="Inventory · days of stock cover">
      <StatStrip
        cols={2}
        items={[
          { k: 'Excess & dead stock', v: '$1.8M', sub: '12% of on-hand', tone: 'warning' },
          { k: 'Avg stock cover', v: '46 days', sub: 'healthy band 30–60', tone: 'ink' },
        ]}
      />
      <div className="mt-4 border-t border-line pt-4">
        <div className="mb-3 flex items-baseline justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
            Cover by category
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">days</span>
        </div>
        <MiniBars
          max={210}
          suffix="d"
          labelW="104px"
          rows={[
            { k: 'Fast movers', v: 18, tone: 'warning', show: '18d' },
            { k: 'Core lines', v: 42, tone: 'accent', strong: true, show: '42d' },
            { k: 'Seasonal', v: 96, tone: 'warning', show: '96d' },
            { k: 'Spares / slow', v: 210, tone: 'muted', show: '210d' },
          ]}
        />
      </div>
      <p className="mt-4 border-t border-line pt-3 text-[12px] leading-relaxed text-ink-3">
        Stock cover is on-hand against demand, so a fast line short of cover and a slow line burying
        cash both surface by item and location.
      </p>
    </ReportChrome>
  );
}

/**
 * Plant performance: OEE broken into availability, performance, and quality,
 * plus a downtime Pareto. Mirrors the OEE / losses page.
 */
export function OeeCard() {
  return (
    <ReportChrome title="Plant OEE · availability × performance × quality">
      <div className="flex items-end justify-between">
        <StatStrip
          cols={3}
          items={[
            { k: 'Availability', v: '77.1%' },
            { k: 'Performance', v: '87.8%' },
            { k: 'Quality', v: '98.3%' },
          ]}
        />
        <div className="shrink-0 pl-4 text-right">
          <div className="font-mono text-[9px] uppercase tracking-[0.08em] text-ink-3">OEE</div>
          <div className="font-display text-3xl font-bold tabular-nums text-accent">66.5%</div>
          <div className="text-[11px] font-semibold text-warning">71.8% last year</div>
        </div>
      </div>
      <div className="mt-4 border-t border-line pt-4">
        <div className="mb-3 flex items-baseline justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
            Downtime by reason
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
            share of lost time
          </span>
        </div>
        <MiniBars
          max={53}
          suffix="%"
          labelW="132px"
          rows={[
            { k: 'Mold change', v: 53, tone: 'accent', strong: true },
            { k: 'Hydraulic failure', v: 12, tone: 'warning' },
            { k: 'Ejector / mold', v: 6, tone: 'muted' },
            { k: 'Resin moisture', v: 5, tone: 'muted' },
            { k: 'Other', v: 24, tone: 'muted' },
          ]}
        />
      </div>
    </ReportChrome>
  );
}

/**
 * Job cost and WIP: projected margin at completion against the bid, by job,
 * with percent complete. Mirrors the WIP / margin page.
 */
export function JobCostCard() {
  const jobs = [
    { k: 'Job 1420', pct: 82, proj: 18.5, bid: 20.0 },
    { k: 'Job 1515', pct: 46, proj: 22.1, bid: 21.0 },
    { k: 'Job 1388', pct: 95, proj: 15.2, bid: 19.0 },
    { k: 'Job 1602', pct: 28, proj: 24.0, bid: 23.5 },
  ];
  return (
    <ReportChrome title="Job cost · margin at completion">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
          % complete · projected / bid margin
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">WIP $4.2M</span>
      </div>
      <ul className="mt-4 space-y-3">
        {jobs.map((j) => {
          const ahead = j.proj >= j.bid;
          return (
            <li key={j.k} className="grid grid-cols-[72px_1fr_auto] items-center gap-3">
              <span className="text-[12.5px] font-semibold text-ink">{j.k}</span>
              <div className="flex items-center gap-2">
                <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-mist" aria-hidden>
                  <div className="h-full rounded-full bg-accent" style={{ width: `${j.pct}%` }} />
                </div>
                <span className="w-9 text-right font-mono text-[11px] tabular-nums text-ink-3">
                  {j.pct}%
                </span>
              </div>
              <span className="w-24 text-right font-mono text-[12px] tabular-nums">
                <span className={ahead ? 'text-success' : 'text-warning'}>{j.proj.toFixed(1)}%</span>
                <span className="text-ink-3"> / {j.bid.toFixed(1)}%</span>
              </span>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 border-t border-line pt-3 text-[12px] leading-relaxed text-ink-3">
        Committed cost and change orders projected to completion against the bid, so a job eroding its
        margin shows while there is still time to act.
      </p>
    </ReportChrome>
  );
}

/**
 * Utilization and realization: billable utilization by team against target,
 * with the realization rate. Mirrors the utilization page.
 */
export function UtilizationCard() {
  return (
    <ReportChrome title="Billable utilization · vs 75% target">
      <StatStrip
        cols={3}
        items={[
          { k: 'Realization', v: '92%', sub: 'billed / standard', tone: 'success' },
          { k: 'Utilization', v: '79%', sub: 'billable / available', tone: 'ink' },
          { k: 'WIP', v: '$0.9M', sub: 'unbilled', tone: 'ink' },
        ]}
      />
      <div className="mt-4 border-t border-line pt-4">
        <div className="mb-3 flex items-baseline justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">By team</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
            target 75%
          </span>
        </div>
        <MiniBars
          max={100}
          suffix="%"
          labelW="88px"
          rows={[
            { k: 'Strategy', v: 82, tone: 'success' },
            { k: 'Delivery', v: 78, tone: 'success' },
            { k: 'Design', v: 71, tone: 'warning' },
            { k: 'Data', v: 85, tone: 'success' },
          ]}
        />
      </div>
    </ReportChrome>
  );
}

/**
 * SaaS ARR and retention: the ARR bridge from starting to ending ARR, with net
 * and gross retention. Mirrors the ARR / retention page. Values in USD millions.
 */
export function ArrRetentionCard() {
  return (
    <>
      <WaterfallChart
        title="ARR bridge · new, expansion, contraction, churn"
        legendLeft="USD millions"
        legendRight="NRR 106% · GRR 93%"
        max={5.14}
        rows={[
          { k: 'Starting ARR', lo: 0, hi: 4.2, kind: 'base', label: '4.20' },
          { k: 'New', lo: 4.2, hi: 4.62, kind: 'up', label: '+0.42' },
          { k: 'Expansion', lo: 4.62, hi: 5.14, kind: 'up', label: '+0.52' },
          { k: 'Contraction', lo: 5.04, hi: 5.14, kind: 'down', label: '−0.10' },
          { k: 'Churn', lo: 4.86, hi: 5.04, kind: 'down', label: '−0.18' },
          { k: 'Ending ARR', lo: 0, hi: 4.86, kind: 'base', label: '4.86' },
        ]}
        note="Starting ARR walked to ending ARR through new, expansion, contraction, and churn, so growth and leakage are read in one view rather than a single net number."
      />
    </>
  );
}

/**
 * Revenue cycle: denials by reason plus the headline RCM measures. Mirrors the
 * revenue-cycle / denials page.
 */
export function RevenueCycleCard() {
  return (
    <ReportChrome title="Revenue cycle · denials by reason">
      <StatStrip
        cols={3}
        items={[
          { k: 'Clean claim rate', v: '94%', tone: 'success' },
          { k: 'Days in AR', v: '38', sub: 'by payer' },
          { k: 'Denial rate', v: '6.2%', tone: 'warning' },
        ]}
      />
      <div className="mt-4 border-t border-line pt-4">
        <div className="mb-3 flex items-baseline justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
            Denials by reason
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
            share of denied
          </span>
        </div>
        <MiniBars
          max={28}
          suffix="%"
          labelW="104px"
          rows={[
            { k: 'Eligibility', v: 28, tone: 'accent', strong: true },
            { k: 'Coding', v: 22, tone: 'muted' },
            { k: 'Authorization', v: 18, tone: 'muted' },
            { k: 'Timely filing', v: 16, tone: 'warning' },
            { k: 'Other', v: 16, tone: 'muted' },
          ]}
        />
      </div>
      <p className="mt-4 border-t border-line pt-3 text-[12px] leading-relaxed text-ink-3">
        Denials sized by reason and payer, so the few causes behind most of the lost revenue are the
        ones that get worked first.
      </p>
    </ReportChrome>
  );
}

/**
 * Restaurant prime cost: food plus labor as a share of sales, by store, against
 * the 60% target. Mirrors the prime-cost page.
 */
export function PrimeCostCard() {
  const stores = [
    { k: 'Downtown', food: 29, labor: 29 },
    { k: 'Midtown', food: 31, labor: 31 },
    { k: 'Airport', food: 28, labor: 28 },
    { k: 'Mall', food: 32, labor: 29 },
  ];
  const target = 60;
  const scaleMax = 70;
  return (
    <ReportChrome title="Prime cost by store · food + labor vs 60%">
      <div className="flex items-center gap-4 text-[11px] text-ink-3">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-accent" aria-hidden /> Food
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-accent/45" aria-hidden /> Labor
        </span>
        <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.1em]">target 60%</span>
      </div>
      <ul className="mt-4 space-y-3">
        {stores.map((s) => {
          const total = s.food + s.labor;
          const over = total > target;
          return (
            <li key={s.k} className="grid grid-cols-[80px_1fr_auto] items-center gap-3">
              <span className="truncate text-[12.5px] text-ink-2">{s.k}</span>
              <div className="relative h-3.5 overflow-hidden rounded-full bg-mist" aria-hidden>
                <div className="flex h-full">
                  <div className="h-full bg-accent" style={{ width: `${(s.food / scaleMax) * 100}%` }} />
                  <div className="h-full bg-accent/45" style={{ width: `${(s.labor / scaleMax) * 100}%` }} />
                </div>
                <span
                  className="absolute top-0 h-full w-px bg-ink"
                  style={{ left: `${(target / scaleMax) * 100}%` }}
                />
              </div>
              <span
                className={`w-12 text-right font-mono text-[12.5px] font-semibold tabular-nums ${
                  over ? 'text-warning' : 'text-success'
                }`}
              >
                {total}%
              </span>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 border-t border-line pt-3 text-[12px] leading-relaxed text-ink-3">
        Food and labor read together as prime cost against target, by store and week, since the
        two move against each other and only matter as one number.
      </p>
    </ReportChrome>
  );
}
