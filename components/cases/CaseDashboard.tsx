'use client';

import { useMemo, useState } from 'react';
import {
  allLeaves,
  aggregate,
  buildCompose,
  buildMatrix,
  buildPareto,
  buildStatement,
  buildTrend,
  formatStat,
  getDashboard,
  hexA,
  leavesOf,
  nf,
  nodesL1,
  nodesL2,
  rankTitles,
  leafFormatter,
  nodeFormatter,
  statusDot,
  statusLabel,
  statusTone,
  toneColor,
  type Cell,
  type DashboardDef,
  type LeafRow,
} from '@/lib/cases/dashboards';

type Props = {
  /** slug do case (mesmo de lib/cases) */
  slug: string;
  /** linhas exibidas na página "detalhe granular" */
  rows?: number;
  /** moldura escura estilo ferramenta de BI */
  chrome?: 'misto' | 'fynx';
  className?: string;
};

export function CaseDashboard({ slug, rows = 24, chrome = 'misto', className = '' }: Props) {
  const cs = getDashboard(slug);
  const [page, setPage] = useState(0);
  const [drill, setDrill] = useState<string[]>([]);
  const [chip, setChip] = useState(0);
  const [hp, setHp] = useState(-1);

  const trend = useMemo(() => (cs ? buildTrend(cs) : null), [cs]);
  const matrix = useMemo(() => (cs ? buildMatrix(cs) : null), [cs]);
  const compose = useMemo(() => (cs ? buildCompose(cs) : null), [cs]);
  const pareto = useMemo(() => (cs ? buildPareto(cs) : null), [cs]);
  const statement = useMemo(() => (cs ? buildStatement(cs) : null), [cs]);
  const leaves = useMemo(() => (cs ? allLeaves(cs) : []), [cs]);

  if (!cs || !trend || !matrix || !compose || !pareto) return null;

  const accent = cs.color;
  const dark = chrome !== 'fynx';

  /* --------------------------------------------------------- drill-down */
  const barNodes =
    drill.length === 0
      ? nodesL1(cs)
      : drill.length === 1
        ? nodesL2(cs, drill[0])
        : leavesOf(cs, drill[0], drill[1]).map((l) => ({ name: l.name, v: l.value, leaf: true as const }));
  const barMax = Math.max(...barNodes.map((b) => b.v));
  const leafBarFmt = leafFormatter(cs);
  const barFmt = drill.length === 2 ? leafBarFmt : nodeFormatter(cs);
  const kinds = cs.pageKinds || (['overview', 'detail', 'matrix', 'compose', 'pareto', 'quality'] as const);
  const kind = kinds[page] || 'overview';

  const root =
    cs.levels[0] === 'Plant' ? 'All plants' : cs.levels[0] === 'Region' ? 'All regions' : `All · ${cs.levels[0].toLowerCase()}`;
  const chain = [root, ...drill];

  /* ------------------------------------------------------------ tabelas */
  let sample: LeafRow[];
  if (drill.length === 2) sample = leavesOf(cs, drill[0], drill[1]);
  else if (drill.length === 1)
    sample = nodesL2(cs, drill[0]).flatMap((b) => leavesOf(cs, drill[0], b.name).slice(0, 2));
  else sample = nodesL1(cs).flatMap((a) => leavesOf(cs, a.name, nodesL2(cs, a.name)[0].name).slice(0, 2));
  sample = sample.slice(0, 8);

  const filtered = chip > 0 ? leaves.filter((l) => l.seg === cs.chips[chip]) : leaves;
  const detailRows = filtered.slice(0, Math.max(8, Math.min(60, rows)));
  const agg = aggregate(filtered);

  const scopeNote =
    drill.length === 0 ? `${cs.levels[0]} · consolidated` : drill.length === 1 ? `${cs.levels[1]} in ${drill[0]}` : `${cs.levels[2]} in ${drill[1]}`;

  const sorted = [...leaves].sort((a, b) => b.value - a.value);
  const rankMax = sorted[0]?.value || 1;
  const mkRank = (arr: LeafRow[], color: string) =>
    arr.map((l, i) => ({
      pos: String(i + 1).padStart(2, '0'),
      name: l.name,
      value: leafBarFmt(l.value),
      pct: `${Math.round(Math.max(4, (l.value / rankMax) * 100))}%`,
      color,
    }));
  const rankTop = mkRank(sorted.slice(0, 6), accent);
  const rankBottom = mkRank(sorted.slice(-6).reverse(), cs.slug === 'bi-executivo-industria-oee' ? '#F59E0B' : '#CDD2E0');
  const titles = rankTitles[cs.slug];
  const okCount = `${cs.quality.checks.filter((c) => c.st === 'ok').length} of ${cs.quality.checks.length} checks passing`;

  return (
    <div className={`overflow-hidden rounded-3xl border border-border bg-bg-card shadow-card ${className}`}>
      {/* chrome */}
      <div
        className="flex h-14 items-center gap-4 border-b px-5"
        style={{ background: dark ? '#0B1020' : '#FFFFFF', borderColor: dark ? '#0B1020' : '#E6E8F0' }}
      >
        {dark && (
          <span className="flex flex-none gap-[7px]">
            <span className="h-[11px] w-[11px] rounded-full bg-white/20" />
            <span className="h-[11px] w-[11px] rounded-full bg-white/[.14]" />
            <span className="h-[11px] w-[11px] rounded-full bg-white/10" />
          </span>
        )}
        <span className="flex min-w-0 items-baseline gap-3">
          <span className={`truncate font-display text-sm font-semibold tracking-[-0.01em] ${dark ? 'text-white' : 'text-text-primary'}`}>
            {cs.report}
          </span>
          <span className={`whitespace-nowrap font-mono text-[11px] ${dark ? 'text-white/50' : 'text-text-muted'}`}>{cs.dataset}</span>
        </span>
        <span className="flex-1" />
        <span className={`flex items-center gap-1.5 whitespace-nowrap font-mono text-[11px] ${dark ? 'text-white/50' : 'text-text-muted'}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          Refreshed {cs.refreshed}
        </span>
        <span className="flex-none rounded-full border border-warning/40 bg-warning/[.14] px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.08em] text-warning">
          Illustrative data
        </span>
      </div>

      <div className="grid min-h-[720px] min-w-[1180px] grid-cols-[224px_1fr]">
        {/* rail */}
        <div className="flex flex-col gap-7 border-r border-border bg-bg-soft/60 p-5">
          <div>
            <div className="px-2 pb-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">Report pages</div>
            <div className="flex flex-col gap-0.5">
              {cs.pages.map((n, i) => (
                <button
                  key={n}
                  onClick={() => { setPage(i); setHp(-1); }}
                  className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors ${i === page ? 'bg-bg-card' : 'hover:bg-bg-soft'}`}
                >
                  <span className="flex-none font-mono text-[10.5px] font-semibold" style={{ color: i === page ? accent : '#B9C0D0' }}>
                    {'0' + (i + 1)}
                  </span>
                  <span className={`text-[13px] leading-tight ${i === page ? 'font-semibold text-text-primary' : 'text-text-secondary'}`}>{n}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="px-2 pb-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">Filters</div>
            <div className="flex flex-col gap-2 px-1">
              {cs.slicers.map((s) => (
                <div key={s.label} className="rounded-lg border border-border bg-bg-card px-2.5 py-2">
                  <div className="text-[10.5px] text-text-muted">{s.label}</div>
                  <div className="mt-0.5 flex items-center justify-between gap-2">
                    <span className="text-[12.5px] font-medium leading-tight text-text-primary">{s.value}</span>
                    <span className="text-[9px] text-text-muted">▼</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto border-t border-border px-2.5 pt-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">Hierarchy</div>
            <div className="mt-2 flex flex-col gap-1.5">
              {cs.levels.map((n, i) => (
                <div key={n} className="flex items-center gap-2 text-[11.5px]" style={{ color: i <= drill.length ? '#0C1024' : '#8A93A8' }}>
                  <span className="h-[5px] w-[5px] flex-none rounded-full" style={{ background: i <= drill.length ? accent : '#D8DCE7' }} />
                  {n}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* canvas */}
        <div className="min-w-0 bg-[#F7F8FC] px-5 pb-6 pt-4">
          <div className="mb-4 flex flex-wrap items-center gap-2.5">
            {chain.map((label, i) => (
              <span key={label + i} className="flex items-center gap-2.5">
                <button
                  onClick={() => setDrill(drill.slice(0, i))}
                  className={`rounded-lg border px-2.5 py-1.5 text-[12.5px] transition-colors ${
                    i === chain.length - 1 ? 'border-border bg-bg-card font-semibold text-text-primary' : 'border-transparent text-text-muted hover:border-border'
                  }`}
                >
                  {label}
                </button>
                {i < chain.length - 1 && <span className="text-[11px] text-border-strong">›</span>}
              </span>
            ))}
            <span className="flex-1" />
            <span className="font-mono text-[11px] text-text-muted">{scopeNote}</span>
          </div>

          {/* ------------------------------------------------ p1: visão geral */}
          {kind === 'overview' && (
            <div className="flex flex-col gap-3.5">
              <div className="grid grid-cols-4 gap-3.5">
                {cs.kpis.map((k) => (
                  <div key={k.label} className="rounded-2xl border border-border bg-bg-card p-4 shadow-card">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11.5px] font-medium leading-tight text-text-muted">{k.label}</span>
                      <span
                        className="whitespace-nowrap rounded-full px-1.5 py-0.5 font-mono text-[10.5px] font-semibold"
                        style={{ color: k.up ? '#0F766E' : '#B45309', background: k.up ? 'rgba(16,185,129,.12)' : 'rgba(245,158,11,.14)' }}
                      >
                        {k.delta}
                      </span>
                    </div>
                    <div className="mt-2 font-display text-[29px] font-bold leading-none tracking-[-0.028em] text-text-primary">{k.value}</div>
                    <div className="mt-1.5 text-[11.5px] leading-snug text-text-muted">{k.sub}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border bg-[#F0F2F7] shadow-card">
                {cs.kpis2.map((k) => (
                  <div key={k.label} className="bg-bg-card px-4 py-3">
                    <div className="text-[11px] leading-tight text-text-muted">{k.label}</div>
                    <div className="mt-1 font-mono text-base font-semibold tracking-[-0.01em] text-text-primary">{k.value}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-[1.35fr_1fr] gap-3.5">
                {/* trend */}
                <div className="rounded-2xl border border-border bg-bg-card p-4 shadow-card">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-[15px] font-semibold tracking-[-0.01em] text-text-primary">{cs.trend.title}</h3>
                      <p className="mt-0.5 text-[11.5px] text-text-muted">{cs.trend.sub}</p>
                    </div>
                    <div className="flex flex-none gap-3">
                      {[
                        { name: cs.trend.s1.name, color: accent },
                        { name: cs.trend.s2.name, color: '#B9C0D0' },
                      ].map((lg) => (
                        <span key={lg.name} className="flex items-center gap-1.5 text-[11.5px] text-text-secondary">
                          <span className="h-[3px] w-[9px] rounded-sm" style={{ background: lg.color }} />
                          {lg.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3.5 flex gap-2.5">
                    <div className="flex h-[186px] flex-none flex-col justify-between text-right">
                      {trend.yl.map((l, i) => (
                        <span key={i} className="font-mono text-[10px] leading-none text-text-muted">{l}</span>
                      ))}
                    </div>
                    <div className="relative min-w-0 flex-1">
                      <svg viewBox="0 0 620 186" preserveAspectRatio="none" className="block h-[186px] w-full">
                        {[1, 62, 123].map((y) => <line key={y} x1="0" y1={y} x2="620" y2={y} stroke="#EDEFF5" strokeWidth="1" />)}
                        <line x1="0" y1="185" x2="620" y2="185" stroke="#E6E8F0" strokeWidth="1" />
                        <polyline points={trend.p2} fill="none" stroke="#B9C0D0" strokeWidth="2" strokeDasharray="5 4" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                        <polygon points={trend.area} fill={hexA(accent, 0.09)} />
                        <polyline points={trend.p1} fill="none" stroke={accent} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                      </svg>
                      <div className="absolute inset-0 flex">
                        {cs.trend.xl.map((_, i) => (
                          <div key={i} className="flex-1" onMouseEnter={() => setHp(i)} onMouseLeave={() => setHp(-1)} style={{ borderLeft: i ? '1px solid rgba(230,232,240,.5)' : 'none' }} />
                        ))}
                      </div>
                      {hp >= 0 && (
                        <div
                          className="pointer-events-none absolute top-1.5 z-10 -translate-x-1/2 whitespace-nowrap rounded-lg bg-bg-ink px-2.5 py-2 text-text-onink shadow-lg"
                          style={{ left: `${(hp / (cs.trend.xl.length - 1)) * 100}%` }}
                        >
                          <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-onink/55">{cs.trend.xl[hp]}</div>
                          <div className="mt-1 text-[13px] font-semibold">{cs.trend.s1.name}: {trend.fmtV(trend.a1[hp])}</div>
                          <div className="mt-0.5 text-[12px] text-text-onink/70">{cs.trend.s2.name}: {trend.fmtV(trend.a2[hp])}</div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="ml-[52px] mt-2 flex justify-between">
                    {cs.trend.xl.map((l) => <span key={l} className="font-mono text-[10px] text-text-muted">{l}</span>)}
                  </div>
                </div>

                {/* drill bars */}
                <div className="flex flex-col rounded-2xl border border-border bg-bg-card p-4 shadow-card">
                  <h3 className="font-display text-[15px] font-semibold tracking-[-0.01em] text-text-primary">
                    {drill.length === 0 ? cs.bars.title : drill.length === 1 ? `${cs.levels[1]} · ${drill[0]}` : `${cs.levels[2]} · ${drill[1]}`}
                  </h3>
                  <p className="mt-0.5 text-[11.5px] text-text-muted">{drill.length < 2 ? cs.bars.sub : 'Leaf level: no further levels below'}</p>
                  <div className="mt-4 flex flex-col gap-2.5">
                    {barNodes.map((b) => {
                      const leaf = 'leaf' in b;
                      return (
                        <button
                          key={b.name}
                          onClick={() => { if (!leaf && drill.length < 2) setDrill([...drill, b.name]); }}
                          className="block w-full text-left transition-opacity hover:opacity-80"
                        >
                          <span className="flex items-baseline justify-between gap-2.5">
                            <span className="truncate text-[12.5px] font-medium text-text-primary">{b.name}</span>
                            <span className="flex-none font-mono text-[12px] font-semibold text-text-secondary">{barFmt(b.v)}</span>
                          </span>
                          <span className="mt-1.5 block h-[9px] overflow-hidden rounded-full bg-[#F0F2F7]">
                            <span className="block h-[9px] rounded-full" style={{ width: `${Math.max(6, (b.v / barMax) * 100)}%`, background: leaf ? hexA(accent, 0.55) : accent }} />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-auto pt-3.5 text-[11.5px] leading-relaxed text-text-muted">{cs.bars.hint}</div>
                </div>
              </div>

              <DataTable cs={cs} rows={sample} title={cs.table.title} sub={cs.table.sub} count={`${sample.length} of ${nf(leaves.length)} rows`} />
            </div>
          )}

          {/* ------------------------------------------ p2: detalhe granular */}
          {kind === 'detail' && (
            <div className="flex flex-col gap-3.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="mr-1 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">{cs.chipLabel}</span>
                {cs.chips.map((label, i) => (
                  <button
                    key={label}
                    onClick={() => setChip(i)}
                    className="rounded-full border px-3 py-1.5 text-xs transition-colors"
                    style={{
                      background: i === chip ? hexA(accent, 0.1) : '#FFFFFF',
                      borderColor: i === chip ? hexA(accent, 0.45) : '#E6E8F0',
                      color: i === chip ? '#0C1024' : '#55607A',
                      fontWeight: i === chip ? 600 : 400,
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-4 gap-3.5">
                {cs.stats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-border bg-bg-card px-4 py-3">
                    <div className="text-[11px] text-text-muted">{s.label}</div>
                    <div className="mt-1 font-display text-[21px] font-bold tracking-[-0.02em]" style={{ color: s.k === 'count' ? '#0C1024' : accent }}>
                      {s.k === 'count' ? nf(agg.count) : formatStat(agg[s.k], s.fmt)}
                    </div>
                  </div>
                ))}
              </div>

              <DataTable
                cs={cs}
                rows={detailRows}
                title={cs.detail.title}
                sub={cs.detail.sub}
                count={`${detailRows.length} of ${nf(filtered.length)} rows`}
                footer={cs.detail.footer}
                scroll
              />
            </div>
          )}

          {/* ---------------------------------------------------- p3: matriz */}
          {kind === 'matrix' && (
            <div className="rounded-2xl border border-border bg-bg-card p-5 shadow-card">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="font-display text-base font-semibold tracking-[-0.012em] text-text-primary">{cs.matrix.title}</h3>
                  <p className="mt-1 max-w-[640px] text-[12.5px] leading-relaxed text-text-secondary">{cs.matrix.sub}</p>
                </div>
                <div className="flex flex-none items-center gap-2">
                  <span className="text-[11px] text-text-muted">{cs.matrix.legendLo}</span>
                  <span className="block h-[9px] w-[104px] rounded-full" style={{ background: `linear-gradient(90deg, ${hexA(matrix.ramp, 0.1)}, ${hexA(matrix.ramp, 0.92)})` }} />
                  <span className="text-[11px] text-text-muted">{cs.matrix.legendHi}</span>
                </div>
              </div>

              <div className="mt-4 overflow-x-auto">
                <div className="grid min-w-[640px] gap-1" style={{ gridTemplateColumns: `176px repeat(${cs.matrix.heads.length}, minmax(88px, 1fr))` }}>
                  <div />
                  {cs.matrix.heads.map((h) => (
                    <div key={h} className="pb-1 text-center font-mono text-[10.5px] uppercase leading-tight tracking-[0.06em] text-text-muted">{h}</div>
                  ))}
                </div>
                {matrix.rows.map((mr) => (
                  <div key={mr.name} className="mt-1 grid min-w-[640px] gap-1" style={{ gridTemplateColumns: `176px repeat(${cs.matrix.heads.length}, minmax(88px, 1fr))` }}>
                    <div className="flex items-center pr-2.5 text-[12.5px] font-medium leading-tight text-text-primary">{mr.name}</div>
                    {mr.cells.map((mc, ci) => (
                      <div
                        key={ci}
                        className="rounded-lg px-1.5 py-3 text-center font-mono text-[12.5px] transition-transform hover:scale-[1.04]"
                        style={{ background: mc.bg, color: mc.fg, fontWeight: mc.bold ? 600 : 500 }}
                      >
                        {mc.text}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-3 gap-4 border-t border-border pt-4">
                {cs.matrix.reads.map((rd) => (
                  <div key={rd.kicker}>
                    <div className="font-mono text-[10px] uppercase tracking-[0.12em]" style={{ color: rd.tone }}>{rd.kicker}</div>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-text-secondary">{rd.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ------------------------------------- p4: composição e ranking */}
          {kind === 'compose' && (
            <div className="flex flex-col gap-3.5">
              <div className="grid grid-cols-[1.5fr_1fr] gap-3.5">
                <div className="rounded-2xl border border-border bg-bg-card p-4 shadow-card">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-[15px] font-semibold tracking-[-0.01em] text-text-primary">{cs.compose.title}</h3>
                      <p className="mt-0.5 text-[11.5px] text-text-muted">{cs.compose.sub}</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {compose.legend.map((lg) => (
                        <span key={lg.name} className="flex items-center gap-1.5 text-[11.5px] text-text-secondary">
                          <span className="h-[9px] w-[9px] rounded-[3px]" style={{ background: lg.color }} />
                          {lg.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex h-[260px] items-end gap-3 border-b border-border pb-0.5">
                    {compose.cols.map((col) => (
                      <div key={col.label} className="flex h-full min-w-0 flex-1 flex-col justify-end">
                        <div className="mb-1.5 truncate text-center font-mono text-[10px] text-text-muted">{col.total}</div>
                        <div className="flex flex-col overflow-hidden rounded-t-md" style={{ height: col.hOuter }}>
                          {col.segs.map((sg, i) => <div key={i} style={{ height: sg.h, background: sg.color }} />)}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 flex gap-3">
                    {compose.cols.map((col) => (
                      <div key={col.label} className="min-w-0 flex-1 text-center font-mono text-[10px] text-text-muted">{col.label}</div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col rounded-2xl border border-border bg-bg-card p-4 shadow-card">
                  <h3 className="font-display text-[15px] font-semibold tracking-[-0.01em] text-text-primary">Share of total</h3>
                  <p className="mt-0.5 text-[11.5px] text-text-muted">{compose.donutSub}</p>
                  <div className="mt-3.5 flex items-center gap-4">
                    <div className="relative h-[150px] w-[150px] flex-none">
                      <svg viewBox="0 0 140 140" className="block h-[150px] w-[150px]">
                        <g transform="rotate(-90 70 70)">
                          <circle cx="70" cy="70" r="54" fill="none" stroke="#F0F2F7" strokeWidth="17" />
                          {compose.donut.map((d) => (
                            <circle key={d.name} cx="70" cy="70" r="54" fill="none" stroke={d.color} strokeWidth="17" strokeDasharray={d.dash} strokeDashoffset={d.offset} />
                          ))}
                        </g>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted">{compose.donutLabel}</span>
                        <span className="mt-0.5 font-display text-base font-bold tracking-[-0.02em] text-text-primary">{compose.donutTotal}</span>
                      </div>
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col gap-2">
                      {compose.donut.map((d) => (
                        <div key={d.name} className="flex min-w-0 items-center gap-2">
                          <span className="h-[9px] w-[9px] flex-none rounded-[3px]" style={{ background: d.color }} />
                          <span className="flex-1 truncate text-xs text-text-primary">{d.name}</span>
                          <span className="flex-none font-mono text-xs font-semibold text-text-secondary">{d.pct}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                {[
                  { title: titles[0], sub: titles[1], items: rankTop },
                  { title: titles[2], sub: titles[3], items: rankBottom },
                ].map((blk) => (
                  <div key={blk.title} className="rounded-2xl border border-border bg-bg-card p-4 shadow-card">
                    <h3 className="font-display text-[15px] font-semibold tracking-[-0.01em] text-text-primary">{blk.title}</h3>
                    <p className="mt-0.5 text-[11.5px] text-text-muted">{blk.sub}</p>
                    <div className="mt-3.5 flex flex-col gap-2.5">
                      {blk.items.map((rk) => (
                        <div key={rk.pos + rk.name} className="flex min-w-0 items-center gap-2.5">
                          <span className="flex-none font-mono text-[11px] text-[#B9C0D0]">{rk.pos}</span>
                          <span className="min-w-0 flex-1">
                            <span className="flex items-baseline justify-between gap-2.5">
                              <span className="truncate text-[12.5px] font-medium text-text-primary">{rk.name}</span>
                              <span className="flex-none font-mono text-[11.5px] font-semibold text-text-secondary">{rk.value}</span>
                            </span>
                            <span className="mt-1 block h-1.5 overflow-hidden rounded-full bg-[#F0F2F7]">
                              <span className="block h-1.5 rounded-full" style={{ width: rk.pct, background: rk.color }} />
                            </span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ----------------------------------------------- p5: pareto */}
          {kind === 'pareto' && (
            <div className="rounded-2xl border border-border bg-bg-card p-5 shadow-card">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="font-display text-base font-semibold tracking-[-0.012em] text-text-primary">{cs.pareto.title}</h3>
                  <p className="mt-1 max-w-[660px] text-[12.5px] leading-relaxed text-text-secondary">{cs.pareto.sub}</p>
                </div>
                <div className="flex-none text-right">
                  <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">Total</div>
                  <div className="mt-0.5 font-display text-[22px] font-bold tracking-[-0.02em] text-text-primary">{pareto.total}</div>
                  <div className="text-[11px] text-text-muted">{cs.pareto.unit}</div>
                </div>
              </div>

              <div className="relative mt-5 h-[240px] border-b border-border">
                <div className="absolute inset-0 flex items-end gap-3.5">
                  {pareto.cols.map((pcol) => (
                    <div key={pcol.name} className="flex h-full min-w-0 flex-1 flex-col justify-end">
                      <div className="mb-1.5 text-center font-mono text-[11px] font-semibold text-text-primary">{pcol.value}</div>
                      <div className="rounded-t-md" style={{ height: pcol.h, background: pcol.color }} />
                    </div>
                  ))}
                </div>
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full">
                  <line x1="0" y1="20" x2="100" y2="20" stroke="#CDD2E0" strokeWidth="1" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" />
                  <polyline points={pareto.line} fill="none" stroke="#0C1024" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                </svg>
                <span className="absolute right-0.5 top-1.5 font-mono text-[10px] text-text-muted">80% cutoff</span>
              </div>
              <div className="mt-2.5 flex gap-3.5">
                {pareto.cols.map((pcol) => (
                  <div key={pcol.name} className="min-w-0 flex-1 text-center">
                    <div className="text-[11px] leading-snug text-text-secondary">{pcol.name}</div>
                    <div className="mt-0.5 font-mono text-[10px] text-text-muted">{pcol.share} · cum. {pcol.cum}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2.5 border-t border-border pt-3.5">
                <span className="h-[9px] w-[9px] flex-none rounded-[3px]" style={{ background: accent }} />
                <span className="text-[12.5px] text-text-secondary">
                  {pareto.cutNote} The dark line is the cumulative percentage; the dashed line marks the 80% cutoff.
                </span>
              </div>
            </div>
          )}

          {/* --------------------------------- p6: qualidade e governança */}
          {kind === 'quality' && (
            <div className="flex flex-col gap-3.5">
              <div className="grid grid-cols-4 gap-3.5">
                {cs.quality.gov.map((g) => (
                  <div key={g.label} className="rounded-xl border border-border bg-bg-card px-4 py-3">
                    <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">{g.label}</div>
                    <div className="mt-1 text-sm font-semibold text-text-primary">{g.value}</div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-border bg-bg-card p-4 shadow-card">
                <h3 className="font-display text-[15px] font-semibold tracking-[-0.01em] text-text-primary">Data lineage</h3>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {cs.quality.lineage.map((n, i) => {
                    const last = i === cs.quality.lineage.length - 1;
                    return (
                      <span key={n} className="flex items-center gap-2">
                        <span
                          className="rounded-lg border px-3 py-2 text-[12.5px] font-medium text-text-primary"
                          style={{ borderColor: last ? hexA(accent, 0.4) : '#E6E8F0', background: last ? hexA(accent, 0.12) : '#FFFFFF' }}
                        >
                          {n}
                        </span>
                        {!last && <span className="text-xs text-border-strong">→</span>}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-[1.25fr_1fr] gap-3.5">
                <div className="overflow-hidden rounded-2xl border border-border bg-bg-card shadow-card">
                  <div className="px-5 pb-3 pt-4">
                    <h3 className="font-display text-[15px] font-semibold tracking-[-0.01em] text-text-primary">Sources and refresh</h3>
                    <p className="mt-0.5 text-[11.5px] text-text-muted">What feeds the model and how often</p>
                  </div>
                  <div className="grid grid-cols-[1.5fr_1fr_1.05fr_.95fr] border-b border-border px-5 pb-2 font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted">
                    <div className="px-1.5">Source</div>
                    <div className="px-1.5">Type</div>
                    <div className="px-1.5 text-right">Volume</div>
                    <div className="px-1.5 text-right">Refresh</div>
                  </div>
                  {cs.quality.sources.map((s) => (
                    <div key={s.n} className="grid grid-cols-[1.5fr_1fr_1.05fr_.95fr] items-center border-b border-[#F2F4F8] px-5">
                      <div className="flex min-w-0 items-center gap-2 px-1.5 py-2.5">
                        <span className="h-[7px] w-[7px] flex-none rounded-full" style={{ background: statusDot[s.st] }} />
                        <span className="truncate text-[12.5px] font-medium text-text-primary">{s.n}</span>
                      </div>
                      <div className="truncate px-1.5 py-2.5 text-xs text-text-muted">{s.t}</div>
                      <div className="px-1.5 py-2.5 text-right font-mono text-xs text-text-secondary">{s.rows}</div>
                      <div className="px-1.5 py-2.5 text-right font-mono text-xs" style={{ color: toneColor[statusTone[s.st]] }}>{s.fresh}</div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-border bg-bg-card px-5 pb-5 pt-4 shadow-card">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-[15px] font-semibold tracking-[-0.01em] text-text-primary">Automated checks</h3>
                    <span className="font-mono text-[11px] text-text-muted">{okCount}</span>
                  </div>
                  <div className="mt-3.5 flex flex-col gap-2.5">
                    {cs.quality.checks.map((c) => (
                      <div key={c.n} className="flex items-start gap-2.5">
                        <span
                          className="mt-px flex-none rounded-full px-2 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-[0.06em]"
                          style={{ background: hexA(statusDot[c.st], 0.12), color: toneColor[statusTone[c.st]] }}
                        >
                          {statusLabel[c.st]}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[12.5px] font-medium leading-snug text-text-primary">{c.n}</span>
                          <span className="mt-0.5 block text-[11.5px] leading-relaxed text-text-muted">{c.d}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* ------------------------------------------- DRE em cascata */}
          {kind === 'statement' && statement && (
            <div className="rounded-2xl border border-border bg-bg-card p-5 shadow-card">
              <h3 className="font-display text-base font-semibold tracking-[-0.012em] text-text-primary">{statement.title}</h3>
              <p className="mt-1 max-w-[680px] text-[12.5px] leading-relaxed text-text-secondary">{statement.sub}</p>

              <div className="mt-4 grid grid-cols-[2.2fr_1.6fr_1fr_1fr_.8fr_.7fr] border-b border-border px-1 pb-2 font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted">
                <div className="px-2">Statement line</div>
                <div className="px-2">Weight</div>
                <div className="px-2 text-right">Actual</div>
                <div className="px-2 text-right">Budget</div>
                <div className="px-2 text-right">Var.</div>
                <div className="px-2 text-right">% of total</div>
              </div>
              {statement.rows.map((sr) => (
                <div key={sr.name} className="grid grid-cols-[2.2fr_1.6fr_1fr_1fr_.8fr_.7fr] items-center border-b border-[#F2F4F8] px-1" style={{ background: sr.bg }}>
                  <div className="py-2.5 pr-2 leading-snug text-text-primary" style={{ paddingLeft: 8 + sr.indent, fontSize: sr.size, fontWeight: sr.weight }}>{sr.name}</div>
                  <div className="px-2 py-2.5">
                    <span className="block h-2 overflow-hidden rounded-full bg-[#F0F2F7]">
                      <span className="block h-2 rounded-full" style={{ width: sr.bar, background: sr.barColor }} />
                    </span>
                  </div>
                  <div className="px-2 py-2.5 text-right font-mono text-[12.5px] text-text-primary" style={{ fontWeight: sr.weight }}>{sr.value}</div>
                  <div className="px-2 py-2.5 text-right font-mono text-[12.5px] text-text-muted">{sr.budget}</div>
                  <div className="px-2 py-2.5 text-right font-mono text-[12.5px] font-semibold" style={{ color: sr.varFg }}>{sr.varc}</div>
                  <div className="px-2 py-2.5 text-right font-mono text-xs text-text-muted">{sr.av}</div>
                </div>
              ))}

              <div className="mt-4 grid grid-cols-3 gap-4 border-t border-border pt-4">
                {statement.notes.map((nt) => (
                  <div key={nt.kicker}>
                    <div className="font-mono text-[10px] uppercase tracking-[0.12em]" style={{ color: nt.tone }}>{nt.kicker}</div>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-text-secondary">{nt.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ subcomponente */

function DataTable({
  cs,
  rows,
  title,
  sub,
  count,
  footer,
  scroll,
}: {
  cs: DashboardDef;
  rows: LeafRow[];
  title: string;
  sub: string;
  count: string;
  footer?: string;
  scroll?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-bg-card shadow-card">
      <div className="flex items-center justify-between gap-4 px-5 pb-3 pt-4">
        <div>
          <h3 className="font-display text-[15px] font-semibold tracking-[-0.01em] text-text-primary">{title}</h3>
          <p className="mt-0.5 text-[11.5px] text-text-muted">{sub}</p>
        </div>
        <span className="font-mono text-[11px] text-text-muted">{count}</span>
      </div>
      <div className="grid border-b border-border px-5 pb-2" style={{ gridTemplateColumns: cs.table.grid }}>
        {cs.table.cols.map((c) => (
          <div key={c.label} className="px-2 font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted" style={{ textAlign: c.align }}>
            {c.label}
          </div>
        ))}
      </div>
      <div className={scroll ? 'max-h-[520px] overflow-auto' : undefined}>
        {rows.map((r, i) => (
          <div
            key={r.name + i}
            className="grid items-center border-b border-[#F2F4F8] px-5 transition-colors hover:bg-bg-soft/60"
            style={{ gridTemplateColumns: cs.table.grid }}
          >
            {r.cells.map((cell, ci) => <TableCell key={ci} cell={cell} />)}
          </div>
        ))}
      </div>
      {footer && <div className="bg-bg-soft/60 px-5 py-3 text-[11.5px] text-text-muted">{footer}</div>}
    </div>
  );
}

function TableCell({ cell }: { cell: Cell }) {
  return (
    <div className="min-w-0 px-2 py-2.5" style={{ textAlign: cell.align }}>
      <span
        className="block truncate text-[12.5px]"
        style={{
          color: cell.tone ? toneColor[cell.tone] : '#0C1024',
          fontWeight: cell.bold ? 600 : 400,
          fontFamily: cell.mono ? 'var(--font-mono), monospace' : undefined,
        }}
      >
        {cell.text}
      </span>
      {typeof cell.bar === 'number' && (
        <span className="mt-1 block h-1 overflow-hidden rounded-full bg-[#F0F2F7]">
          <span className="block h-1 rounded-full" style={{ width: `${Math.round(cell.bar * 100)}%`, background: cell.barColor || '#7C3AED' }} />
        </span>
      )}
      {cell.sub && <span className="mt-0.5 block truncate text-[10.5px] text-text-muted">{cell.sub}</span>}
    </div>
  );
}

export default CaseDashboard;
