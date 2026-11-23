// ---------------------------------------------------------------------------
// Types for the navigable product-UI dashboards. A DashboardSpec describes a
// Power BI style report the way Kadmoon builds them: a dark report header, a
// slicer row, a KPI strip, a grid of visuals, and named pages the viewer tabs
// between. The engine (Dashboard.tsx) renders these in the site's violet
// palette, re-skinned from the real Kadmoon report theme.
//
// Representative product UI, anonymized, not a specific client's real result.
// Figures mirror the structure of the real reports.
// ---------------------------------------------------------------------------

export type ColorKey =
  | 'violet'
  | 'teal'
  | 'amber'
  | 'pink'
  | 'slate'
  | 'violet2'
  | 'lilac'
  | 'grape'
  | 'good'
  | 'bad'
  | 'budget';

export type YFormat = 'pct' | 'usd' | 'num' | 'usd2' | 'ratio';

export type Delta = { text: string; good?: boolean };
export type Kpi = { label: string; value: string; sub?: string; delta?: Delta };

export type Series = { name: string; color: ColorKey; points: number[]; endLabel?: string; dashed?: boolean };

export type Cell = string | number | { v: string | number; tone?: 'good' | 'bad' };
export type MatrixRow = { cells: Cell[]; strong?: boolean };

export type Visual =
  | { type: 'kpis'; items: Kpi[]; itemsByPeriod?: Record<string, Kpi[]> }
  | {
      type: 'multiLine';
      span?: 1 | 2;
      title: string;
      subtitle?: string;
      labels: string[];
      series: Series[];
      yFormat?: YFormat;
      target?: { v: number; label: string };
      note?: string;
    }
  | {
      type: 'divergingColumn';
      span?: 1 | 2;
      title: string;
      subtitle?: string;
      labels: string[];
      series: { name: string; color: ColorKey; points: number[] }[]; // signed; + stacks up, − stacks down
      yFormat?: YFormat;
      note?: string;
    }
  | {
      type: 'clusteredColumn';
      span?: 1 | 2;
      title: string;
      subtitle?: string;
      labels: string[];
      series: { name: string; color: ColorKey; points: number[]; colors?: ColorKey[] }[];
      yFormat?: YFormat;
      showValues?: boolean;
      note?: string;
    }
  | {
      type: 'clusteredBarsH';
      span?: 1 | 2;
      title: string;
      subtitle?: string;
      cats: string[];
      series: { name: string; color: ColorKey; values: number[] }[];
      xFormat?: YFormat;
      note?: string;
    }
  | {
      type: 'divergingBarsH';
      span?: 1 | 2;
      title: string;
      subtitle?: string;
      rows: { k: string; v: number; show?: string }[];
      xFormat?: YFormat;
      note?: string;
    }
  | {
      type: 'barsH';
      span?: 1 | 2;
      title: string;
      subtitle?: string;
      rows: { k: string; v: number; highlight?: boolean; show?: string }[];
      xFormat?: YFormat;
      note?: string;
    }
  | {
      type: 'waterfallV';
      span?: 1 | 2;
      title: string;
      subtitle?: string;
      bars: { k: string; kind: 'total' | 'up' | 'down'; value: number }[];
      yFormat?: YFormat;
      note?: string;
    }
  | {
      type: 'matrix';
      span?: 1 | 2;
      title: string;
      subtitle?: string;
      cols: string[];
      align?: ('l' | 'r')[];
      rows: MatrixRow[];
      note?: string;
    };

export type Slicer = { label: string; options: string[]; active?: string };

export type Page = {
  name: string;
  title: string; // header line, e.g. "Acquisition, CAC & ROAS"
  period?: string; // e.g. "YTD October 2026"
  slicers?: Slicer[]; // first one with >1 option drives itemsByPeriod
  visuals: Visual[];
};

export type DashboardSpec = {
  caseLabel: string; // e.g. "Case 13 · DTC CAC & LTV"
  pages: Page[];
};
