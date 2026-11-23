'use client';

import { useId, useState } from 'react';
import type { ColorKey, DashboardSpec, Kpi, Page, Visual, YFormat } from './types';

// ---------------------------------------------------------------------------
// Navigable product-UI dashboard engine. Renders a DashboardSpec as a Power BI
// style report in the site's violet palette: a dark report header, a slicer
// row (the first slicer drives the figures), a KPI strip, a responsive grid of
// visuals with hover tooltips, and page tabs the viewer clicks between.
// Representative product UI, not a specific client's real result.
// ---------------------------------------------------------------------------

// Exact colors from the real Kadmoon report theme (KadmoonTheme.json).
const COLOR: Record<ColorKey, string> = {
  violet: '#7C3AED',
  violet2: '#A78BFA',
  teal: '#0E9F96',
  amber: '#E39A1E',
  pink: '#E0607E',
  slate: '#AEB4C2',
  lilac: '#CBBEF7',
  grape: '#5B21B6',
  good: '#1E7B34',
  bad: '#C93A3A',
  budget: '#CBD5E1',
};
const INK = '#0B1020';
const INK3 = '#6E7891';
const GRID = '#E6E8F0';
const GOOD = '#1E7B34';
const BAD = '#C93A3A';
const HEADER_BG = '#0B1020';

function ax(v: number, f?: YFormat): string {
  if (f === 'pct') return `${Math.round(v)}%`;
  if (f === 'ratio') return `${v.toFixed(2)}x`;
  if (f === 'usd2') return `$${v.toFixed(2)}`;
  if (f === 'usd') {
    const a = Math.abs(v);
    const s = v < 0 ? '-' : '';
    if (a >= 1e6) return `${s}$${(a / 1e6).toFixed(a >= 1e7 ? 0 : 1)}M`;
    if (a >= 1e3) return `${s}$${Math.round(a / 1e3)}K`;
    return `${s}$${Math.round(a)}`;
  }
  return Math.round(v).toLocaleString('en-US');
}

function ticks(min: number, max: number, n = 4): number[] {
  if (min === max) return [min];
  const step = (max - min) / n;
  return Array.from({ length: n + 1 }, (_, i) => min + step * i);
}

function labelEvery(len: number) {
  return Math.max(1, Math.ceil(len / 8));
}

// --- Panel -----------------------------------------------------------------

function Panel({
  title,
  subtitle,
  span,
  note,
  legend,
  children,
}: {
  title: string;
  subtitle?: string;
  span?: 1 | 2;
  note?: string;
  legend?: { name: string; color: ColorKey; line?: boolean }[];
  children: React.ReactNode;
}) {
  return (
    <div className={`flex min-w-0 flex-col rounded-xl border border-line bg-white p-4 shadow-sm ${span === 2 ? 'md:col-span-2' : ''}`}>
      <div className="font-sans text-[13px] font-semibold leading-tight text-ink">{title}</div>
      {subtitle ? <div className="mt-0.5 text-[11px] leading-snug text-ink-3">{subtitle}</div> : null}
      {legend ? (
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
          {legend.map((l) => (
            <span key={l.name} className="flex items-center gap-1.5 text-[11px] text-ink-2">
              <span
                className="inline-block rounded-sm"
                style={l.line ? { width: 12, height: 3, background: COLOR[l.color] } : { width: 10, height: 10, background: COLOR[l.color] }}
                aria-hidden
              />
              {l.name}
            </span>
          ))}
        </div>
      ) : null}
      <div className="mt-3 flex-1">{children}</div>
      {note ? <p className="mt-3 border-t border-line pt-2.5 text-[11px] leading-relaxed text-ink-3">{note}</p> : null}
    </div>
  );
}

// --- KPI strip -------------------------------------------------------------

function KpiStrip({ items, cols = 6 }: { items: Kpi[]; cols?: number }) {
  const grid = cols === 3 ? 'grid-cols-1 sm:grid-cols-3' : cols === 4 ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6';
  return (
    <div className={`grid gap-3 ${grid}`}>
      {items.map((t) => (
        <div key={t.label} className="rounded-xl border border-line bg-white p-3.5 shadow-sm">
          <div className="text-[11px] leading-snug" style={{ color: INK3 }}>{t.label}</div>
          <div className="mt-1 font-display text-[26px] font-bold leading-none tabular-nums" style={{ color: INK }}>{t.value}</div>
          <div className="mt-1.5 flex flex-wrap items-center gap-x-1.5 text-[11px] leading-snug">
            {t.delta ? (
              <span className="font-semibold tabular-nums" style={{ color: t.delta.good ? GOOD : BAD }}>
                {t.delta.good ? '▲' : '▼'} {t.delta.text}
              </span>
            ) : null}
            {t.sub ? <span style={{ color: INK3 }}>{t.sub}</span> : null}
          </div>
        </div>
      ))}
    </div>
  );
}

// --- Multi-series line -----------------------------------------------------

function MultiLine({ v }: { v: Extract<Visual, { type: 'multiLine' }> }) {
  const all = v.series.flatMap((s) => s.points).concat(v.target ? [v.target.v] : []);
  let min = Math.min(...all);
  let max = Math.max(...all);
  const padv = (max - min) * 0.08 || 1;
  min -= padv;
  max += padv;
  if (v.yFormat === 'pct' && min > 0 && min < 20) min = Math.max(0, min);
  const W = 560;
  const H = 240;
  const pad = { t: 10, r: 94, b: 24, l: 42 };
  const pw = W - pad.l - pad.r;
  const ph = H - pad.t - pad.b;
  const n = v.labels.length;
  const x = (i: number) => pad.l + (i / (n - 1)) * pw;
  const y = (val: number) => pad.t + (1 - (val - min) / (max - min)) * ph;

  // end-label de-collision
  const ends = v.series
    .map((s, si) => ({ si, y: y(s.points[s.points.length - 1]), label: s.endLabel, color: s.color }))
    .filter((e) => e.label)
    .sort((a, b) => a.y - b.y);
  for (let i = 1; i < ends.length; i++) if (ends[i].y - ends[i - 1].y < 13) ends[i].y = ends[i - 1].y + 13;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={v.title}>
      {ticks(min, max).map((g, i) => (
        <g key={i}>
          <line x1={pad.l} x2={W - pad.r} y1={y(g)} y2={y(g)} stroke={GRID} strokeWidth={1} />
          <text x={pad.l - 5} y={y(g) + 3} textAnchor="end" fill={INK3} fontSize={9} fontFamily="monospace">
            {ax(g, v.yFormat)}
          </text>
        </g>
      ))}
      {v.target ? (
        <>
          <line x1={pad.l} x2={W - pad.r} y1={y(v.target.v)} y2={y(v.target.v)} stroke={COLOR.violet} strokeWidth={1.3} strokeDasharray="4 4" />
          <text x={W - pad.r} y={y(v.target.v) - 4} textAnchor="end" fill={COLOR.violet} fontSize={9} fontFamily="monospace">
            {v.target.label}
          </text>
        </>
      ) : null}
      {v.series.map((s) => (
        <polyline
          key={s.name}
          points={s.points.map((val, i) => `${x(i).toFixed(1)},${y(val).toFixed(1)}`).join(' ')}
          fill="none"
          stroke={COLOR[s.color]}
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeDasharray={s.dashed ? '5 4' : undefined}
        >
          <title>{`${s.name}${s.endLabel ? `: ${s.endLabel}` : ''}`}</title>
        </polyline>
      ))}
      {v.series.map((s) => {
        const lx = x(n - 1);
        const ly = y(s.points[s.points.length - 1]);
        return <circle key={s.name} cx={lx} cy={ly} r={2.8} fill={COLOR[s.color]} />;
      })}
      {ends.map((e) => (
        <text key={e.si} x={W - pad.r + 6} y={e.y + 3} fill={COLOR[e.color]} fontSize={9.5} fontWeight={600}>
          {e.label}
        </text>
      ))}
      {v.labels.map((l, i) =>
        i % labelEvery(n) === 0 ? (
          <text key={i} x={x(i)} y={H - 7} textAnchor="middle" fill={INK3} fontSize={8.5} fontFamily="monospace">
            {l}
          </text>
        ) : null
      )}
    </svg>
  );
}

// --- Diverging stacked column (e.g. ARR movements) -------------------------

function DivergingColumn({ v }: { v: Extract<Visual, { type: 'divergingColumn' }> }) {
  const n = v.labels.length;
  const posSum = Array.from({ length: n }, (_, i) => v.series.reduce((s, ser) => s + Math.max(ser.points[i], 0), 0));
  const negSum = Array.from({ length: n }, (_, i) => v.series.reduce((s, ser) => s + Math.min(ser.points[i], 0), 0));
  const max = Math.max(...posSum, 0) * 1.05;
  const min = Math.min(...negSum, 0) * 1.05;
  const W = 560;
  const H = 240;
  const pad = { t: 10, r: 12, b: 24, l: 42 };
  const pw = W - pad.l - pad.r;
  const ph = H - pad.t - pad.b;
  const y = (val: number) => pad.t + (1 - (val - min) / (max - min)) * ph;
  const bw = (pw / n) * 0.62;
  const cx = (i: number) => pad.l + (i + 0.5) * (pw / n);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={v.title}>
      {ticks(min, max).map((g, i) => (
        <g key={i}>
          <line x1={pad.l} x2={W - pad.r} y1={y(g)} y2={y(g)} stroke={GRID} strokeWidth={1} />
          <text x={pad.l - 5} y={y(g) + 3} textAnchor="end" fill={INK3} fontSize={9} fontFamily="monospace">
            {ax(g, v.yFormat)}
          </text>
        </g>
      ))}
      <line x1={pad.l} x2={W - pad.r} y1={y(0)} y2={y(0)} stroke={INK3} strokeWidth={1} />
      {v.labels.map((_, i) => {
        let up = 0;
        let dn = 0;
        return (
          <g key={i}>
            {v.series.map((ser) => {
              const val = ser.points[i];
              if (val === 0) return null;
              let y0: number;
              let y1: number;
              if (val > 0) {
                y1 = y(up + val);
                y0 = y(up);
                up += val;
              } else {
                y1 = y(dn);
                y0 = y(dn + val);
                dn += val;
              }
              return (
                <rect key={ser.name} x={cx(i) - bw / 2} y={Math.min(y0, y1)} width={bw} height={Math.abs(y1 - y0)} fill={COLOR[ser.color]}>
                  <title>{`${v.labels[i]} · ${ser.name}: ${ax(val, v.yFormat)}`}</title>
                </rect>
              );
            })}
          </g>
        );
      })}
      {v.labels.map((l, i) =>
        i % labelEvery(n) === 0 ? (
          <text key={i} x={cx(i)} y={H - 7} textAnchor="middle" fill={INK3} fontSize={8.5} fontFamily="monospace">
            {l}
          </text>
        ) : null
      )}
    </svg>
  );
}

// --- Clustered column (actual vs budget) -----------------------------------

function ClusteredColumn({ v }: { v: Extract<Visual, { type: 'clusteredColumn' }> }) {
  const n = v.labels.length;
  const all = v.series.flatMap((s) => s.points).concat(v.line ? v.line.points : []).concat(v.target ? [v.target.v] : []);
  let min = Math.min(0, ...all);
  let max = Math.max(...all);
  const padv = (max - min) * 0.08 || 1;
  max += padv;
  if (min < 0) min -= padv;
  const W = 560;
  const H = 240;
  const pad = { t: 12, r: 12, b: 24, l: 42 };
  const pw = W - pad.l - pad.r;
  const ph = H - pad.t - pad.b;
  const y = (val: number) => pad.t + (1 - (val - min) / (max - min)) * ph;
  const zero = y(0);
  const group = (pw / n) * 0.7;
  const bw = group / v.series.length;
  const gx = (i: number) => pad.l + (i + 0.5) * (pw / n) - group / 2;
  const cx = (i: number) => pad.l + (i + 0.5) * (pw / n);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={v.title}>
      {ticks(min, max).map((g, i) => (
        <g key={i}>
          <line x1={pad.l} x2={W - pad.r} y1={y(g)} y2={y(g)} stroke={g === 0 ? INK3 : GRID} strokeWidth={1} />
          <text x={pad.l - 5} y={y(g) + 3} textAnchor="end" fill={INK3} fontSize={9} fontFamily="monospace">
            {ax(g, v.yFormat)}
          </text>
        </g>
      ))}
      {v.target ? (
        <>
          <line x1={pad.l} x2={W - pad.r} y1={y(v.target.v)} y2={y(v.target.v)} stroke={COLOR.violet} strokeWidth={1.3} strokeDasharray="4 4" />
          <text x={W - pad.r} y={y(v.target.v) - 4} textAnchor="end" fill={COLOR.violet} fontSize={8.5} fontFamily="monospace">
            {v.target.label}
          </text>
        </>
      ) : null}
      {v.labels.map((l, i) => (
        <g key={i}>
          {v.series.map((ser, si) => {
            const col = ser.colors?.[i] ?? ser.color;
            const yv = y(ser.points[i]);
            return (
              <g key={ser.name}>
                <rect x={gx(i) + si * bw + bw * 0.1} y={Math.min(yv, zero)} width={bw * 0.8} height={Math.max(Math.abs(yv - zero), 1)} fill={COLOR[col]} rx={1}>
                  <title>{`${l} · ${ser.name}: ${ax(ser.points[i], v.yFormat)}`}</title>
                </rect>
                {v.showValues ? (
                  <text x={gx(i) + si * bw + bw * 0.5} y={yv - 3} textAnchor="middle" fill={INK} fontSize={8.5} fontWeight={600}>
                    {ax(ser.points[i], v.yFormat)}
                  </text>
                ) : null}
              </g>
            );
          })}
        </g>
      ))}
      {v.line ? (
        <polyline
          points={v.line.points.map((val, i) => `${cx(i).toFixed(1)},${y(val).toFixed(1)}`).join(' ')}
          fill="none"
          stroke={COLOR[v.line.color]}
          strokeWidth={1.6}
          strokeDasharray="5 4"
          strokeLinejoin="round"
        />
      ) : null}
      {v.labels.map((l, i) =>
        i % labelEvery(n) === 0 ? (
          <text key={i} x={cx(i)} y={H - 7} textAnchor="middle" fill={INK3} fontSize={8.5} fontFamily="monospace">
            {l}
          </text>
        ) : null
      )}
    </svg>
  );
}

function Notes({ v }: { v: Extract<Visual, { type: 'notes' }> }) {
  return (
    <ol className="space-y-2.5">
      {v.items.map((t, i) => (
        <li key={i} className="flex items-start gap-2.5 text-[12.5px] leading-snug text-ink-2">
          <span className="mt-px flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white" style={{ background: COLOR.violet }}>
            {i + 1}
          </span>
          {t}
        </li>
      ))}
    </ol>
  );
}

// --- Vertical waterfall (e.g. NOI bridge) ----------------------------------

function WaterfallV({ v }: { v: Extract<Visual, { type: 'waterfallV' }> }) {
  let cum = 0;
  const segs = v.bars.map((b) => {
    let lo: number;
    let hi: number;
    if (b.kind === 'total') {
      lo = 0;
      hi = b.value;
      cum = b.value;
    } else if (b.kind === 'up') {
      lo = cum;
      hi = cum + b.value;
      cum = hi;
    } else {
      hi = cum;
      lo = cum - b.value;
      cum = lo;
    }
    return { ...b, lo, hi, top: Math.max(lo, hi), bot: Math.min(lo, hi) };
  });
  const vals = segs.flatMap((s) => [s.lo, s.hi]);
  let min = Math.min(...vals);
  let max = Math.max(...vals);
  const pv = (max - min) * 0.12 || 1;
  min = Math.max(0, min - pv);
  max += pv;
  const n = segs.length;
  const W = 560;
  const H = 250;
  const pad = { t: 18, r: 12, b: 42, l: 44 };
  const pw = W - pad.l - pad.r;
  const ph = H - pad.t - pad.b;
  const y = (val: number) => pad.t + (1 - (val - min) / (max - min)) * ph;
  const bw = (pw / n) * 0.56;
  const cx = (i: number) => pad.l + (i + 0.5) * (pw / n);
  const fill = (k: string) => (k === 'total' ? INK : k === 'up' ? COLOR.violet : COLOR.bad);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={v.title}>
      {ticks(min, max).map((g, i) => (
        <g key={i}>
          <line x1={pad.l} x2={W - pad.r} y1={y(g)} y2={y(g)} stroke={GRID} strokeWidth={1} />
          <text x={pad.l - 5} y={y(g) + 3} textAnchor="end" fill={INK3} fontSize={9} fontFamily="monospace">
            {ax(g, v.yFormat)}
          </text>
        </g>
      ))}
      {segs.map((s, i) => (
        <g key={s.k}>
          {i > 0 ? <line x1={cx(i - 1)} x2={cx(i)} y1={y(segs[i - 1].kind === 'down' ? segs[i - 1].bot : segs[i - 1].top)} y2={y(segs[i - 1].kind === 'down' ? segs[i - 1].bot : segs[i - 1].top)} stroke={INK3} strokeWidth={1} strokeDasharray="2 2" /> : null}
          <rect x={cx(i) - bw / 2} y={y(s.top)} width={bw} height={Math.max(y(s.bot) - y(s.top), 1.5)} fill={fill(s.kind)} rx={1}>
            <title>{`${s.k}: ${ax(s.kind === 'down' ? -s.value : s.value, v.yFormat)}`}</title>
          </rect>
          <text x={cx(i)} y={y(s.top) - 4} textAnchor="middle" fill={s.kind === 'down' ? COLOR.bad : INK} fontSize={8.5} fontWeight={600}>
            {s.kind === 'total' ? ax(s.value, v.yFormat) : `${s.kind === 'up' ? '+' : '−'}${ax(s.value, v.yFormat)}`}
          </text>
          <text x={cx(i)} y={H - 8} textAnchor="middle" fill={INK3} fontSize={8}>
            {s.k}
          </text>
        </g>
      ))}
    </svg>
  );
}

// --- Horizontal bars (simple) ----------------------------------------------

function BarsH({ v }: { v: Extract<Visual, { type: 'barsH' }> }) {
  const max = Math.max(...v.rows.map((r) => r.v));
  return (
    <ul className="space-y-2">
      {v.rows.map((r) => (
        <li key={r.k} className="grid grid-cols-[minmax(84px,34%)_1fr_auto] items-center gap-3">
          <span className={`truncate text-[12px] ${r.highlight ? 'font-semibold text-ink' : 'text-ink-2'}`}>{r.k}</span>
          <div className="h-3 overflow-hidden rounded-sm bg-mist" title={`${r.k}: ${r.show ?? ax(r.v, v.xFormat)}`}>
            <div className="h-full rounded-sm" style={{ width: `${Math.max((r.v / max) * 100, 2)}%`, background: r.highlight ? COLOR.bad : COLOR.violet }} />
          </div>
          <span className="w-14 text-right font-mono text-[12px] tabular-nums text-ink">{r.show ?? ax(r.v, v.xFormat)}</span>
        </li>
      ))}
    </ul>
  );
}

// --- Clustered horizontal bars (grouped per category) ----------------------

function ClusteredBarsH({ v }: { v: Extract<Visual, { type: 'clusteredBarsH' }> }) {
  const max = Math.max(...v.series.flatMap((s) => s.values)) * 1.02;
  return (
    <ul className="space-y-3">
      {v.cats.map((c, ci) => (
        <li key={c}>
          <div className="mb-1 text-[12px] text-ink-2">{c}</div>
          <div className="space-y-1">
            {v.series.map((s) => (
              <div key={s.name} className="grid grid-cols-[1fr_auto] items-center gap-2" title={`${c} · ${s.name}: ${ax(s.values[ci], v.xFormat)}`}>
                <div className="h-2.5 overflow-hidden rounded-sm bg-mist">
                  <div className="h-full rounded-sm" style={{ width: `${Math.max((s.values[ci] / max) * 100, 2)}%`, background: COLOR[s.color] }} />
                </div>
                <span className="w-12 text-right font-mono text-[11px] tabular-nums text-ink-2">{ax(s.values[ci], v.xFormat)}</span>
              </div>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

// --- Diverging horizontal bars (negative left / positive right) ------------

function DivergingBarsH({ v }: { v: Extract<Visual, { type: 'divergingBarsH' }> }) {
  const lo = Math.min(0, ...v.rows.map((r) => r.v));
  const hi = Math.max(0, ...v.rows.map((r) => r.v));
  const span = hi - lo || 1;
  const zero = (-lo / span) * 100;
  return (
    <ul className="space-y-1.5">
      {v.rows.map((r) => {
        const neg = r.v < 0;
        const wpct = (Math.abs(r.v) / span) * 100;
        const left = neg ? zero - wpct : zero;
        return (
          <li key={r.k} className="grid grid-cols-[minmax(120px,42%)_1fr_auto] items-center gap-2">
            <span className="truncate text-right text-[11px] text-ink-2">{r.k}</span>
            <div className="relative h-3 rounded-sm bg-mist" title={`${r.k}: ${r.show ?? ax(r.v, v.xFormat)}`}>
              <span className="absolute top-[-2px] h-[calc(100%+4px)] w-px bg-ink-3/50" style={{ left: `${zero}%` }} aria-hidden />
              <div className="absolute top-0 h-full rounded-sm" style={{ left: `${left}%`, width: `${Math.max(wpct, 0.6)}%`, background: neg ? COLOR.bad : COLOR.violet }} />
            </div>
            <span className="w-14 text-right font-mono text-[11px] tabular-nums" style={{ color: neg ? BAD : INK }}>
              {r.show ?? ax(r.v, v.xFormat)}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

// --- Matrix ----------------------------------------------------------------

function Matrix({ v }: { v: Extract<Visual, { type: 'matrix' }> }) {
  const align = (i: number) => v.align?.[i] ?? (i === 0 ? 'l' : 'r');
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-[12px]">
        <thead>
          <tr className="border-b border-line">
            {v.cols.map((c, i) => (
              <th key={c} className={`px-1 py-1.5 font-mono text-[9.5px] font-semibold uppercase tracking-[0.05em] text-ink-3 ${align(i) === 'l' ? 'text-left' : 'text-right'}`}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {v.rows.map((r, ri) => (
            <tr key={ri} className="border-b border-line/60 last:border-0">
              {r.cells.map((cell, ci) => {
                const obj = typeof cell === 'object' && cell !== null;
                const raw = obj ? (cell as { v: string | number }).v : (cell as string | number);
                const tone = obj ? (cell as { tone?: 'good' | 'bad' }).tone : undefined;
                return (
                  <td
                    key={ci}
                    className={`px-1 py-1.5 tabular-nums ${align(ci) === 'l' ? 'text-left' : 'text-right font-mono'} ${
                      ci === 0 ? (r.strong ? 'font-semibold text-ink' : 'text-ink-2') : 'text-ink'
                    } ${tone ? 'font-semibold' : ''}`}
                    style={tone ? { color: tone === 'good' ? GOOD : BAD } : undefined}
                  >
                    {typeof raw === 'number' ? raw.toLocaleString('en-US') : raw}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// --- Visual dispatch -------------------------------------------------------

/**
 * Effective column span per visual for a 2-column grid: KPI strips and span-2
 * visuals take a full row; any span-1 visual that would be left alone in a row
 * (before a full-width visual or at the end) is promoted to full width, so the
 * canvas never leaves a half-empty cell.
 */
function computeSpans(visuals: Visual[]): (1 | 2)[] {
  const spans: (1 | 2)[] = visuals.map((v) => (v.type === 'kpis' || (v as { span?: number }).span === 2 ? 2 : 1));
  let open = -1;
  for (let i = 0; i < spans.length; i++) {
    if (spans[i] === 2) {
      if (open >= 0) {
        spans[open] = 2;
        open = -1;
      }
      continue;
    }
    if (open < 0) open = i;
    else open = -1;
  }
  if (open >= 0) spans[open] = 2;
  return spans;
}

function VisualView({ v, period, span }: { v: Visual; period: string; span: 1 | 2 }) {
  switch (v.type) {
    case 'kpis': {
      const items = v.itemsByPeriod?.[period] ?? v.items;
      return (
        <div className="md:col-span-2">
          <KpiStrip items={items} cols={v.cols} />
        </div>
      );
    }
    case 'multiLine':
      return (
        <Panel title={v.title} subtitle={v.subtitle} span={span} note={v.note} legend={v.series.map((s) => ({ name: s.name, color: s.color, line: true }))}>
          <MultiLine v={v} />
        </Panel>
      );
    case 'divergingColumn':
      return (
        <Panel title={v.title} subtitle={v.subtitle} span={span} note={v.note} legend={v.series.map((s) => ({ name: s.name, color: s.color }))}>
          <DivergingColumn v={v} />
        </Panel>
      );
    case 'clusteredColumn':
      return (
        <Panel
          title={v.title}
          subtitle={v.subtitle}
          span={span}
          note={v.note}
          legend={[...v.series.map((s) => ({ name: s.name, color: s.color })), ...(v.line ? [{ name: v.line.name, color: v.line.color, line: true }] : [])]}
        >
          <ClusteredColumn v={v} />
        </Panel>
      );
    case 'notes':
      return (
        <Panel title={v.title} subtitle={v.subtitle} span={span}>
          <Notes v={v} />
        </Panel>
      );
    case 'clusteredBarsH':
      return (
        <Panel title={v.title} subtitle={v.subtitle} span={span} note={v.note} legend={v.series.map((s) => ({ name: s.name, color: s.color }))}>
          <ClusteredBarsH v={v} />
        </Panel>
      );
    case 'divergingBarsH':
      return (
        <Panel title={v.title} subtitle={v.subtitle} span={span} note={v.note}>
          <DivergingBarsH v={v} />
        </Panel>
      );
    case 'barsH':
      return (
        <Panel title={v.title} subtitle={v.subtitle} span={span} note={v.note}>
          <BarsH v={v} />
        </Panel>
      );
    case 'waterfallV':
      return (
        <Panel title={v.title} subtitle={v.subtitle} span={span} note={v.note}>
          <WaterfallV v={v} />
        </Panel>
      );
    case 'matrix':
      return (
        <Panel title={v.title} subtitle={v.subtitle} span={span} note={v.note}>
          <Matrix v={v} />
        </Panel>
      );
    default:
      return null;
  }
}

// --- Report frame ----------------------------------------------------------

function SlicerBar({ page, period, setPeriod }: { page: Page; period: string; setPeriod: (s: string) => void }) {
  if (!page.slicers || page.slicers.length === 0) return null;
  const driver = page.slicers.find((s) => s.options.length > 1);
  return (
    <div className="flex flex-wrap items-center gap-2 border-b border-line bg-white px-3 py-2.5 sm:px-4">
      {page.slicers.map((s) => {
        const isDriver = s === driver;
        if (isDriver) {
          return (
            <div key={s.label} className="flex items-center gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink-3">{s.label}</span>
              <div className="flex gap-1">
                {s.options.map((o) => (
                  <button
                    key={o}
                    type="button"
                    onClick={() => setPeriod(o)}
                    aria-pressed={o === period}
                    className={`rounded-md border px-2 py-1 text-[11px] font-medium transition ${
                      o === period ? 'border-accent bg-accent/10 text-accent' : 'border-line bg-white text-ink-2 hover:border-ink-3/40'
                    }`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>
          );
        }
        return (
          <span key={s.label} className="inline-flex items-center gap-1 rounded-md border border-line bg-white px-2.5 py-1 text-[11px] text-ink-2">
            <span className="text-ink-3">{s.label}:</span> {s.active ?? s.options[0]}
            <span className="text-ink-3" aria-hidden>▾</span>
          </span>
        );
      })}
    </div>
  );
}

export function Dashboard({ spec, className = '' }: { spec: DashboardSpec; className?: string }) {
  const [active, setActive] = useState(0);
  const page = spec.pages[active];
  const driver = page.slicers?.find((s) => s.options.length > 1);
  const [period, setPeriod] = useState(driver?.active ?? driver?.options[0] ?? '');
  const uid = useId();

  function go(i: number) {
    setActive(i);
    const d = spec.pages[i].slicers?.find((s) => s.options.length > 1);
    setPeriod(d?.active ?? d?.options[0] ?? '');
  }

  return (
    <div className={`overflow-hidden rounded-2xl border border-line bg-white shadow-card ${className}`}>
      {/* Report header */}
      <div className="px-4 py-3 text-white sm:px-5" style={{ background: HEADER_BG, borderBottom: `3px solid ${COLOR.violet}` }}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-display text-[15px] font-bold tracking-tight">KADMOON</span>
          <span className="hidden text-[11px] text-white/55 sm:inline">Business Intelligence</span>
          <span className="hidden h-3.5 w-px bg-white/25 sm:inline" aria-hidden />
          <span className="min-w-0 text-[10.5px] text-white/60">{spec.caseLabel}</span>
        </div>
        <div className="mt-0.5 flex flex-wrap items-baseline gap-x-2">
          <h3 className="font-display text-[17px] font-bold leading-tight">{page.title}</h3>
          {page.period ? <span className="text-[12px] text-white/60">— {page.period}</span> : null}
        </div>
      </div>

      <SlicerBar page={page} period={period} setPeriod={setPeriod} />

      {/* Canvas */}
      <div className="grid grid-cols-1 gap-3 bg-mist p-3 md:grid-cols-2 md:p-4">
        {(() => {
          const spans = computeSpans(page.visuals);
          return page.visuals.map((v, i) => (
            <VisualView key={`${uid}-${active}-${i}`} v={v} period={period} span={spans[i]} />
          ));
        })()}
      </div>

      {/* Page tabs */}
      <div className="flex items-center gap-1 overflow-x-auto border-t border-line bg-white px-3 py-2.5" role="tablist" aria-label="Report pages">
        {spec.pages.map((p, i) => (
          <button
            key={p.name}
            role="tab"
            type="button"
            aria-selected={i === active}
            onClick={() => go(i)}
            className={`shrink-0 rounded-md px-3 py-1.5 text-[12px] font-medium transition ${
              i === active ? 'text-white' : 'text-ink-2 hover:bg-mist'
            }`}
            style={i === active ? { background: HEADER_BG } : undefined}
          >
            {p.name}
          </button>
        ))}
      </div>
    </div>
  );
}
