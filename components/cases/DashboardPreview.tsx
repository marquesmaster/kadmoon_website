'use client';

import { buildTrend, getDashboard, hexA, nodesL1 } from '@/lib/cases/dashboards';

/**
 * Miniatura estática do painel do case, para os cards de /cases e da home.
 * Sem interação e sem texto legível: é uma prova visual, não um relatório.
 */
export function DashboardPreview({ slug, className = '' }: { slug: string; className?: string }) {
  const cs = getDashboard(slug);
  if (!cs) return null;
  const trend = buildTrend(cs);
  const bars = nodesL1(cs);
  const max = Math.max(...bars.map((b) => b.v));
  const accent = cs.color;

  return (
    <div className={`overflow-hidden rounded-xl border border-white/15 bg-white/95 p-2.5 shadow-lg ${className}`} aria-hidden>
      <div className="flex gap-2">
        <div className="flex w-1/3 flex-col gap-1">
          {bars.slice(0, 5).map((b) => (
            <div key={b.name} className="h-1.5 overflow-hidden rounded-full bg-[#F0F2F7]">
              <div className="h-1.5 rounded-full" style={{ width: `${Math.max(12, (b.v / max) * 100)}%`, background: accent }} />
            </div>
          ))}
        </div>
        <svg viewBox="0 0 620 186" preserveAspectRatio="none" className="h-12 flex-1">
          <polygon points={trend.area} fill={hexA(accent, 0.12)} />
          <polyline points={trend.p1} fill="none" stroke={accent} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="mt-2 grid grid-cols-4 gap-1">
        {cs.kpis.map((k) => (
          <div key={k.label} className="rounded-md bg-bg-soft px-1.5 py-1">
            <div className="truncate font-display text-[9px] font-bold leading-none text-text-primary">{k.value}</div>
            <div className="mt-0.5 truncate text-[7px] leading-none text-text-muted">{k.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardPreview;
