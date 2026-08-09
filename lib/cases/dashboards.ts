// Fynx — dados dos painéis exibidos em cada case.
//
// IMPORTANTE: todos os clientes estão sob NDA. Nada aqui é dado real.
// Os números são gerados por um PRNG com semente fixa, para que o painel
// seja idêntico em todo build (server e client) e não gere hydration mismatch.
//
// A estrutura (hierarquia de 3 níveis, colunas da tabela, matriz de recorte)
// reproduz o modelo semântico entregue em cada projeto.

export type Tone = 'ok' | 'warn' | 'bad' | 'brand' | 'mute';

export type Cell = {
  text: string;
  align: 'left' | 'right' | 'center';
  tone?: Tone;
  bold?: boolean;
  mono?: boolean;
  sub?: string;
  bar?: number; // 0..1
  barColor?: string;
};

export type LeafRow = {
  name: string;
  seg: string;
  value: number;
  cells: Cell[];
  stat: { a: number; b: number; c: number };
};

export type Kpi = { label: string; value: string; sub: string; delta: string; up: boolean };
export type Slicer = { label: string; value: string };
export type Col = { label: string; align: 'left' | 'right' | 'center' };
export type Read = { kicker: string; tone: string; text: string };

export type MatrixDef = {
  title: string;
  sub: string;
  scale: 'brand' | 'risk';
  fmt: 'pct' | 'int';
  legendLo: string;
  legendHi: string;
  rows: string[];
  heads: string[];
  neutralCol?: number;
  val: (ri: number, ci: number, r: () => number) => number;
  reads: Read[];
};

export type DashboardDef = {
  slug: string;
  badge: string;
  vertical: string;
  color: string;
  report: string;
  dataset: string;
  refreshed: string;
  levels: [string, string, string];
  slicers: Slicer[];
  pages: string[];
  /** um por página; omitido = ['overview','detail','matrix','compose','pareto','quality'] */
  pageKinds?: PageKind[];
  kpis: Kpi[];
  kpis2: { label: string; value: string }[];
  /** colunas empilhadas da página "composição" */
  compose: { title: string; sub: string; unit: 'money' | 'int'; base: number; ramp?: 'sequential'; lo?: number; swing?: number };
  /** peso relativo de cada segmento (mesma ordem de chips.slice(1)) */
  segWeights: number[];
  pareto: { title: string; sub: string; unit: string; items: { n: string; v: number }[] };
  quality: {
    gov: { label: string; value: string }[];
    lineage: string[];
    sources: { n: string; t: string; rows: string; fresh: string; st: Status }[];
    checks: { n: string; st: Status; d: string }[];
  };
  trend: {
    title: string;
    sub: string;
    fmt: 'money' | 'pct' | 'int';
    xl: string[];
    s1: Series;
    s2: Series;
  };
  bars: { title: string; sub: string; hint: string };
  l1: { n: string; v: number }[];
  l2: Record<string, string[]>;
  table: { title: string; sub: string; grid: string; cols: Col[] };
  chipLabel: string;
  chips: string[];
  leaf: (r: () => number, ctx: LeafCtx) => LeafRow;
  detail: { title: string; sub: string; footer: string };
  stats: { label: string; k: 'count' | 'avgA' | 'sumB' | 'avgC' | 'sumC'; fmt?: StatFmt }[];
  matrix: MatrixDef;
  /** DRE em cascata — só nos cases que têm demonstrativo */
  statement?: StatementDef;
};

export type PageKind = 'overview' | 'detail' | 'matrix' | 'compose' | 'pareto' | 'quality' | 'statement';

export type StatementDef = {
  title: string;
  sub: string;
  rows: { n: string; v: number; o: number; k: 'in' | 'out' | 'sub' | 'total' }[];
  notes: Read[];
};

export type Status = 'ok' | 'warn' | 'bad';

type Series = { name: string; base: number; drift: number; noise: number };
type LeafCtx = { l1: string; l2: string; i: number; share: number; maxShare: number };
type StatFmt = 'pc' | 'pc0' | 'money' | 'h' | 'd' | 'int';

/* ---------------------------------------------------------------- utils */

function hash(s: string): number {
  let x = 2166136261;
  for (let i = 0; i < s.length; i++) {
    x ^= s.charCodeAt(i);
    x = Math.imul(x, 16777619);
  }
  return x >>> 0;
}

/** PRNG determinístico (mulberry32) — mesma saída em todo build. */
export function rng(seed: string): () => number {
  let a = hash(seed);
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function nf(n: number, d = 0): string {
  return Number(n).toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
}

export function money(n: number): string {
  const m = Math.abs(n);
  if (m >= 1e6) return '$' + nf(n / 1e6, m >= 1e8 ? 0 : m >= 1e7 ? 1 : 2) + 'M';
  if (m >= 1e3) return '$' + nf(n / 1e3, 0) + 'K';
  return '$' + nf(n, 2);
}

export function pc(n: number, d = 1): string {
  return nf(n, d) + '%';
}

export function hexA(c: string, a: number): string {
  const n = parseInt(c.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}

export const toneColor: Record<Tone, string> = {
  ok: '#0F766E',
  warn: '#B45309',
  bad: '#BE123C',
  brand: '#5B21B6',
  mute: '#8A93A8',
};

function cell(text: string, align: Cell['align'] = 'left', o: Partial<Cell> = {}): Cell {
  return { text, align, ...o };
}

function pick<T>(arr: T[], r: () => number): T {
  return arr[Math.floor(r() * arr.length) % arr.length];
}

function split(total: number, n: number, r: () => number): number[] {
  const w: number[] = [];
  let s = 0;
  for (let i = 0; i < n; i++) {
    const v = 0.6 + r() * 0.9;
    w.push(v);
    s += v;
  }
  return w.map((v) => (total * v) / s);
}

/* ------------------------------------------------------------- datasets */

export const caseDashboards: DashboardDef[] = [
  {
    slug: 'migracao-qlik-powerbi',
    badge: 'Platform Migration',
    vertical: 'Business Intelligence',
    color: '#7C3AED',
    report: 'Migration Cockpit · QlikView → Power BI',
    dataset: 'ctl_migracao · Import',
    refreshed: '07/08 06:12',
    levels: ['Business unit', 'Area', 'Report'],
    slicers: [
      { label: 'Wave', value: 'Waves 1 to 8' },
      { label: 'Status', value: 'All' },
      { label: 'Criticality', value: 'High and medium' },
    ],
    pages: ['Migration overview', 'Report-by-report inventory', 'Wave × area', 'Composition and ranking', 'Rework causes', 'Quality and governance'],
    kpis2: [
      { label: 'Reports retired', value: '65' },
      { label: 'DAX measures created', value: '3,412' },
      { label: 'Active users/month', value: '1,860' },
      { label: 'Average load time', value: '4.2 min' },
    ],
    compose: { title: 'Reports delivered per month', sub: 'Composition of what went live, colored by cutover wave', unit: 'int', base: 110, ramp: 'sequential' },
    segWeights: [0.28, 0.3, 0.24, 0.18],
    pareto: {
      title: 'Rework causes in the rebuild',
      sub: 'What sent a report back to the queue after being rebuilt. Undocumented business rules alone account for a third.',
      unit: 'reports',
      items: [
        { n: 'Undocumented business rule', v: 34 },
        { n: 'Granularity mismatch', v: 26 },
        { n: 'Unstable or unavailable source', v: 19 },
        { n: 'No direct DAX equivalent', v: 14 },
        { n: 'Implicit filter in QlikView', v: 11 },
        { n: 'Formatting and locale', v: 7 },
        { n: 'Other', v: 5 },
      ],
    },
    quality: {
      gov: [
        { label: 'RLS', value: '12 roles' },
        { label: 'Endorsement', value: '84 certified' },
        { label: 'Catalog', value: '1,247 items' },
        { label: 'Retention', value: '7 years' },
      ],
      lineage: ['Legacy QlikView', 'Azure staging', 'Synapse DW', 'Semantic model', 'Report'],
      sources: [
        { n: 'QlikView (QVD)', t: 'Legacy', rows: '1,312 apps', fresh: 'frozen', st: 'warn' },
        { n: 'Corporate ERP', t: 'SQL Server', rows: '184 M rows', fresh: 'D+0 04:10', st: 'ok' },
        { n: 'Azure Synapse', t: 'Data warehouse', rows: '612 M rows', fresh: 'D+0 05:00', st: 'ok' },
        { n: 'Supporting spreadsheets', t: 'SharePoint', rows: '46 files', fresh: 'manual', st: 'warn' },
        { n: 'Migration catalog', t: 'Dataverse', rows: '1,312 items', fresh: 'continuous', st: 'ok' },
      ],
      checks: [
        { n: 'Number parity vs QlikView', st: 'ok', d: '1,229 of 1,247 reports with deviation under 0.1%.' },
        { n: 'Complete lineage back to source', st: 'ok', d: 'Every semantic model traces back to the DW table.' },
        { n: 'Duplicate DAX measures', st: 'warn', d: '38 measures with equivalent definitions awaiting consolidation.' },
        { n: 'Naming convention', st: 'ok', d: '97% compliance across the catalog.' },
        { n: 'Reports with no access in 90 days', st: 'warn', d: '22 retirement candidates for the next review.' },
      ],
    },
    kpis: [
      { label: 'Reports migrated', value: '1,247', sub: 'of 1,312 after rationalization', delta: '+96 this wave', up: true },
      { label: 'Parity validated', value: '98.6%', sub: 'checked number by number', delta: '+1.4 p.p.', up: true },
      { label: 'Current wave', value: '6 of 8', sub: 'phased cutover, no blackout', delta: 'on track', up: true },
      { label: 'Cumulative effort', value: '4,180 h', sub: 'Fynx team + client squad', delta: '-12% vs plan', up: true },
    ],
    trend: {
      title: 'Reports migrated per month',
      sub: 'Cumulative by wave, against contracted target',
      fmt: 'int',
      xl: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      s1: { name: 'Migrated', base: 60, drift: 1.16, noise: 0.12 },
      s2: { name: 'Plan', base: 72, drift: 1.13, noise: 0.04 },
    },
    bars: {
      title: 'Reports by business unit',
      sub: 'Click to drill down the hierarchy',
      hint: 'Rationalization retired 65 reports unused over the last 12 months.',
    },
    l1: [
      { n: 'Finance', v: 268 },
      { n: 'Sales', v: 241 },
      { n: 'Operations', v: 206 },
      { n: 'Procurement', v: 158 },
      { n: 'HR and Controllership', v: 114 },
    ],
    l2: {
      Finance: ['Accounting', 'Accounts payable', 'Treasury', 'Tax'],
      Sales: ['Sales', 'Pricing', 'CRM', 'Trade marketing'],
      Operations: ['Production', 'Logistics', 'Maintenance', 'Quality'],
      Procurement: ['Purchasing', 'Suppliers', 'Inventory', 'Contracts'],
      'HR and Controllership': ['Payroll', 'Headcount', 'Budget', 'Audit'],
    },
    table: {
      title: 'Reports in scope',
      sub: 'One row per report rebuilt in Power BI',
      grid: '2fr 1.05fr .55fr .9fr .9fr .75fr 1.3fr',
      cols: [
        { label: 'Report', align: 'left' },
        { label: 'Area', align: 'left' },
        { label: 'Wave', align: 'center' },
        { label: 'DAX measures', align: 'right' },
        { label: 'Parity', align: 'right' },
        { label: 'Effort', align: 'right' },
        { label: 'Status', align: 'left' },
      ],
    },
    chipLabel: 'Wave',
    chips: ['All', 'Wave 5', 'Wave 6', 'Wave 7', 'Wave 8'],
    leaf(r, ctx) {
      const pool = ['Monthly close', 'Management P&L', 'Cash flow', 'Receivables aging', 'Budget vs actual', 'Profitability by customer', 'ABC analysis', 'Inventory position', 'Open orders', 'Productivity by shift', 'Sales pipeline', 'Discount granted', 'Margin by SKU', 'Service level', 'Maintenance backlog', 'Cost by center', 'Taxes assessed', 'Headcount by area', 'Inventory turnover', 'Average payment term'];
      const wave = 5 + Math.floor(r() * 4);
      const dax = 4 + Math.floor(r() * 58);
      const par = 96 + r() * 4;
      const eff = 6 + Math.floor(r() * 84);
      const st: [string, Tone] = par > 99.4 ? ['Approved', 'ok'] : par > 98 ? ['In validation', 'warn'] : ['In progress', 'mute'];
      const name = 'RPT-' + (1040 + Math.floor(r() * 920)) + ' · ' + pick(pool, r);
      return {
        name,
        seg: 'Wave ' + wave,
        value: eff,
        cells: [
          cell(name, 'left', { bold: true, sub: ctx.l2 }),
          cell(ctx.l1, 'left', { tone: 'mute' }),
          cell(String(wave), 'center', { mono: true }),
          cell(String(dax), 'right', { mono: true }),
          cell(pc(par), 'right', { mono: true, bold: true, tone: par > 99 ? 'ok' : 'warn' }),
          cell(eff + ' h', 'right', { mono: true }),
          cell(st[0], 'left', { tone: st[1], bold: true }),
        ],
        stat: { a: par, b: eff, c: dax },
      };
    },
    detail: {
      title: 'Report inventory',
      sub: 'Leaf level: each report with its parity validation and actual effort',
      footer: 'Source: migration catalog (ctl_migracao). Fictitious numbers.',
    },
    stats: [
      { label: 'Reports in sample', k: 'count' },
      { label: 'Average parity', k: 'avgA', fmt: 'pc' },
      { label: 'Sampled effort', k: 'sumB', fmt: 'h' },
      { label: 'DAX measures in sample', k: 'sumC', fmt: 'int' },
    ],
    matrix: {
      title: 'Reports migrated by wave and business unit',
      sub: 'Where the volume was and how it was distributed across the phased cutover. Waves 5 and 6 concentrated Finance and Sales, the areas with the most business logic trapped in QlikView.',
      scale: 'brand',
      fmt: 'int',
      legendLo: 'few',
      legendHi: 'many',
      rows: ['Finance', 'Sales', 'Operations', 'Procurement', 'HR and Controllership'],
      heads: ['Wave 1-2', 'Wave 3', 'Wave 4', 'Wave 5', 'Wave 6', 'Wave 7-8'],
      val(ri, ci) {
        const tot = [268, 241, 206, 158, 114][ri];
        const f = [
          [0.08, 0.1, 0.12, 0.28, 0.24, 0.18],
          [0.1, 0.12, 0.14, 0.22, 0.26, 0.16],
          [0.14, 0.16, 0.18, 0.18, 0.18, 0.16],
          [0.18, 0.18, 0.16, 0.16, 0.16, 0.16],
          [0.22, 0.2, 0.18, 0.14, 0.14, 0.12],
        ][ri];
        return Math.round(tot * f[ci]);
      },
      reads: [
        { kicker: 'Concentration', tone: '#5B21B6', text: 'Finance and Sales accounted for 41% of the migrated inventory.' },
        { kicker: 'Rationalization', tone: '#B45309', text: '65 reports entered the inventory and left scope for lack of use.' },
        { kicker: 'Cutover', tone: '#0F766E', text: 'No wave was cut over without parity approved by the owning area.' },
      ],
    },
  },

  {
    slug: 'plataforma-dados-fabric-varejo',
    badge: 'Data Platform',
    vertical: 'Retail',
    color: '#0891B2',
    report: 'Commercial Results · Omnichannel Network',
    dataset: 'gold_vendas_v3 · Direct Lake',
    refreshed: '07/08 06:12',
    levels: ['Region', 'Store', 'SKU'],
    slicers: [
      { label: 'Period', value: 'MTD · Aug/2026' },
      { label: 'Channel', value: 'All channels' },
      { label: 'Banner', value: 'All' },
    ],
    pages: ['Results for the day', 'Detail by SKU', 'Stockout by category and channel', 'Mix and store ranking', 'Stockout causes', 'Quality and governance'],
    kpis2: [
      { label: 'Receipts in period', value: '218.4K' },
      { label: 'Items per receipt', value: '6.4' },
      { label: 'Returns', value: '1.8%' },
      { label: 'Stock cover', value: '22 days' },
    ],
    compose: { title: 'Net sales by category', sub: 'Daily mix of the top categories, consolidated across the four channels', unit: 'money', base: 600000 },
    segWeights: [0.34, 0.22, 0.18, 0.16, 0.1],
    pareto: {
      title: 'Stockout causes at the POS',
      sub: 'Why the SKU was not on the shelf. Supplier delay and inventory error explain more than half the occurrences.',
      unit: 'occurrences',
      items: [
        { n: 'Supplier delay', v: 31 },
        { n: 'Inventory error (phantom stock)', v: 24 },
        { n: 'Order below actual turnover', v: 18 },
        { n: 'Store replenishment failure', v: 13 },
        { n: 'Outdated demand profile', v: 9 },
        { n: 'Shrinkage and breakage', v: 6 },
        { n: 'Other', v: 4 },
      ],
    },
    quality: {
      gov: [
        { label: 'RLS', value: 'by banner and store' },
        { label: 'Endorsement', value: 'gold certified' },
        { label: 'Direct Lake', value: 'no fallback' },
        { label: 'Retention', value: '5 years' },
      ],
      lineage: ['ERP · POS · e-commerce', 'OneLake bronze', 'Silver curated', 'Gold modeled', 'Direct Lake'],
      sources: [
        { n: 'Corporate ERP', t: 'Oracle', rows: '92 M rows', fresh: 'D+0 03:40', st: 'ok' },
        { n: 'Store POS', t: 'File + API', rows: '1.4 B receipts', fresh: 'D+0 05:10', st: 'ok' },
        { n: 'E-commerce platform', t: 'REST API', rows: '38 M orders', fresh: '15 min', st: 'ok' },
        { n: 'Marketplaces', t: 'Partner API', rows: '11 M orders', fresh: 'D+0 06:00', st: 'warn' },
        { n: 'Product master', t: 'MDM', rows: '184K SKUs', fresh: 'continuous', st: 'ok' },
      ],
      checks: [
        { n: 'Sales reconciliation vs ERP', st: 'ok', d: '0.03% deviation at the prior-day close.' },
        { n: 'Duplicate key in silver', st: 'ok', d: 'No occurrences in the last 30 loads.' },
        { n: 'SKU sold without MDM record', st: 'warn', d: '412 SKUs in quarantine, 0.2% of sales.' },
        { n: 'Load delay above SLA', st: 'ok', d: 'Marketplace was late once in 30 days.' },
        { n: 'Direct Lake fallback to DirectQuery', st: 'bad', d: '3 occurrences at Saturday peak; partitioning under review.' },
      ],
    },
    kpis: [
      { label: 'Net sales', value: '$18.42M', sub: 'MTD, net of returns', delta: '+6.2% LY', up: true },
      { label: 'Gross margin', value: '27.8%', sub: 'with logistics allocation', delta: '-0.4 p.p.', up: false },
      { label: 'Stockout', value: '4.1%', sub: 'SKU-store out of stock at the POS', delta: '-1.3 p.p.', up: true },
      { label: 'Average ticket', value: '$84.20', sub: 'consolidated omnichannel receipt', delta: '+2.8%', up: true },
    ],
    trend: {
      title: 'Daily net sales',
      sub: 'Brick-and-mortar, app, marketplace and telesales consolidated',
      fmt: 'money',
      xl: ['01', '04', '07', '10', '13', '16', '19', '22', '25', '28', '31'],
      s1: { name: '2026', base: 540000, drift: 1.03, noise: 0.22 },
      s2: { name: '2025', base: 512000, drift: 1.02, noise: 0.18 },
    },
    bars: {
      title: 'Net sales by region',
      sub: 'Click to open store by store',
      hint: 'Southeast concentrates 44% of sales and 51% of perishable stockouts.',
    },
    l1: [
      { n: 'Southeast', v: 8120000 },
      { n: 'South', v: 3480000 },
      { n: 'Northeast', v: 3060000 },
      { n: 'Midwest', v: 2290000 },
      { n: 'North', v: 1470000 },
    ],
    l2: {
      Southeast: ['SP · Store 042 Morumbi', 'SP · Store 118 Campinas', 'RJ · Store 067 Barra', 'MG · Store 203 Savassi'],
      South: ['PR · Store 311 Batel', 'RS · Store 288 Moinhos', 'SC · Store 340 Trindade', 'PR · Store 356 Maringá'],
      Northeast: ['PE · Store 412 Boa Viagem', 'BA · Store 428 Itaigara', 'CE · Store 455 Aldeota', 'RN · Store 470 Tirol'],
      Midwest: ['DF · Store 501 Asa Sul', 'GO · Store 523 Bueno', 'MT · Store 544 Cuiabá', 'DF · Store 560 Águas Claras'],
      North: ['AM · Store 610 Adrianópolis', 'PA · Store 632 Nazaré', 'TO · Store 651 Palmas', 'RO · Store 664 Porto Velho'],
    },
    table: {
      title: 'SKUs in the slice',
      sub: 'SKU-store-day granularity, served over Direct Lake',
      grid: '2.1fr 1fr 1.1fr .9fr .95fr .8fr .95fr',
      cols: [
        { label: 'SKU', align: 'left' },
        { label: 'Category', align: 'left' },
        { label: 'Net sales', align: 'right' },
        { label: 'Margin', align: 'right' },
        { label: 'Stockout', align: 'right' },
        { label: 'Turnover', align: 'right' },
        { label: 'Stock', align: 'right' },
      ],
    },
    chipLabel: 'Category',
    chips: ['All', 'Grocery', 'Beverages', 'Cleaning', 'Perishables', 'Personal care'],
    leaf(r, ctx) {
      const pool: [string, string][] = [['Roasted coffee 500g', 'Grocery'], ['Rice type 1 5kg', 'Grocery'], ['Carioca beans 1kg', 'Grocery'], ['Soybean oil 900ml', 'Grocery'], ['UHT milk 1L', 'Perishables'], ['Mozzarella cheese kg', 'Perishables'], ['Frozen chicken kg', 'Perishables'], ['Soda 2L', 'Beverages'], ['Beer can 350ml', 'Beverages'], ['Mineral water 1.5L', 'Beverages'], ['Powder detergent 1.6kg', 'Cleaning'], ['Dish soap 500ml', 'Cleaning'], ['Fabric softener 2L', 'Cleaning'], ['Toilet paper 12ct', 'Personal care'], ['Shampoo 350ml', 'Personal care'], ['Diapers M 40ct', 'Personal care'], ['Filled cookies 130g', 'Grocery'], ['Pasta 500g', 'Grocery']];
      const it = pick(pool, r);
      const vend = ctx.share / 12;
      const mg = 18 + r() * 20;
      const rup = r() * 11;
      const giro = 4 + r() * 26;
      const est = Math.floor(40 + r() * 1800);
      const name = 78900000 + Math.floor(r() * 99999) + ' · ' + it[0];
      return {
        name,
        seg: it[1],
        value: vend,
        cells: [
          cell(name, 'left', { bold: true, sub: ctx.l2 }),
          cell(it[1], 'left', { tone: 'mute' }),
          cell(money(vend), 'right', { mono: true, bold: true, bar: Math.min(1, ctx.share / ctx.maxShare), barColor: '#0891B2' }),
          cell(pc(mg), 'right', { mono: true, tone: mg < 22 ? 'warn' : 'ok' }),
          cell(pc(rup), 'right', { mono: true, bold: rup > 6, tone: rup > 6 ? 'bad' : rup > 3 ? 'warn' : 'ok' }),
          cell(nf(giro, 0) + ' d', 'right', { mono: true }),
          cell(nf(est, 0), 'right', { mono: true, tone: 'mute' }),
        ],
        stat: { a: mg, b: vend, c: rup },
      };
    },
    detail: {
      title: 'SKU × store detail',
      sub: 'The most granular row of the model: this is where the store manager acts on the day',
      footer: 'gold_vendas_v3 read via Direct Lake, no copy. Fictitious numbers.',
    },
    stats: [
      { label: 'SKUs in sample', k: 'count' },
      { label: 'Average margin', k: 'avgA', fmt: 'pc' },
      { label: 'Sampled sales', k: 'sumB', fmt: 'money' },
      { label: 'Average stockout', k: 'avgC', fmt: 'pc' },
    ],
    matrix: {
      title: 'Stockout by category and channel',
      sub: 'Where stock is missing and through which channel. Perishables on the marketplace is the intersection that costs the most sales, because the delivery promise has already been made to the customer.',
      scale: 'risk',
      fmt: 'pct',
      legendLo: '0%',
      legendHi: '12%',
      rows: ['Grocery', 'Beverages', 'Cleaning', 'Personal care', 'Perishables', 'Bakery', 'General merchandise'],
      heads: ['Brick-and-mortar', 'App', 'Marketplace', 'Telesales'],
      val(ri, ci, r) {
        const base = [4.2, 3.4, 2.1, 3.8, 7.6, 5.1, 1.6][ri];
        const m = [1, 0.85, 1.68, 1.12][ci];
        return Math.max(0.3, base * m + (r() - 0.5) * 0.9);
      },
      reads: [
        { kicker: 'Worst intersection', tone: '#BE123C', text: 'Perishables on the marketplace: stockout above 9% in three regions.' },
        { kicker: 'Under control', tone: '#0F766E', text: 'General merchandise and cleaning stayed below 2% across all channels.' },
        { kicker: 'Action', tone: '#5B21B6', text: 'An automatic alert fires to the store when a SKU passes 6%.' },
      ],
    },
  },

  {
    slug: 'bi-executivo-industria-oee',
    badge: 'Executive BI',
    vertical: 'Manufacturing',
    color: '#0D9488',
    report: 'OEE and Manufacturing Cost · Multi-plant',
    dataset: 'fato_producao · MES + ERP',
    refreshed: '07/08 05:48',
    levels: ['Plant', 'Line', 'Production order'],
    slicers: [
      { label: 'Period', value: 'Last 30 days' },
      { label: 'Shift', value: 'A, B and C' },
      { label: 'Family', value: 'All' },
    ],
    pages: ['Executive view', 'Production orders', 'OEE by line and shift', 'Production and line ranking', 'Downtime Pareto', 'Quality and governance'],
    kpis2: [
      { label: 'Scrap in period', value: '2.7%' },
      { label: 'Unplanned downtime', value: '412 h' },
      { label: 'Cost per unit', value: '$3.42' },
      { label: 'Average setup', value: '38 min' },
    ],
    compose: { title: 'Good parts by shift', sub: 'Consolidated daily production, split by work shift', unit: 'int', base: 42000 },
    segWeights: [0.38, 0.34, 0.28],
    pareto: {
      title: 'Pareto of unplanned downtime',
      sub: 'Where the hours are lost. Setup and tool changes alone are worth 3.1 points of OEE in the consolidated figure.',
      unit: 'downtime hours',
      items: [
        { n: 'Setup and tool change', v: 128 },
        { n: 'Mechanical failure', v: 96 },
        { n: 'Material shortage on the line', v: 71 },
        { n: 'Quality adjustment', v: 54 },
        { n: 'Electrical failure', v: 33 },
        { n: 'Cleaning outside window', v: 21 },
        { n: 'Other', v: 9 },
      ],
    },
    quality: {
      gov: [
        { label: 'RLS', value: 'by plant' },
        { label: 'Endorsement', value: 'fato_producao' },
        { label: 'Frequency', value: '15 minutes' },
        { label: 'Retention', value: '3 years' },
      ],
      lineage: ['MES · sensors', 'Azure IoT Hub', 'Fabric bronze', 'Gold production', 'Shift dashboard'],
      sources: [
        { n: 'Plant MES', t: 'SQL + API', rows: '62 M entries', fresh: '15 min', st: 'ok' },
        { n: 'Line sensors', t: 'Azure IoT', rows: '1.2 B readings', fresh: 'real time', st: 'ok' },
        { n: 'Manual entry', t: 'Form', rows: '184K records', fresh: 'per shift', st: 'warn' },
        { n: 'ERP (cost and order)', t: 'SAP', rows: '9 M rows', fresh: 'D+0 04:00', st: 'ok' },
        { n: 'Product and cycle master', t: 'PLM', rows: '3,410 items', fresh: 'weekly', st: 'warn' },
      ],
      checks: [
        { n: 'Production order open more than 48 h', st: 'warn', d: '17 open orders distort OEE at Betim.' },
        { n: 'Standard cycle registered', st: 'warn', d: '96% of products; 138 items without a standard use historical average.' },
        { n: 'Sensor offline in period', st: 'ok', d: '99.4% availability in collection.' },
        { n: 'Cost allocation reconciled with ERP', st: 'ok', d: '0.4% deviation at the monthly close.' },
        { n: 'Invalid shift in entry', st: 'bad', d: '2,140 records without a shift; imputation rule under review.' },
      ],
    },
    kpis: [
      { label: 'Consolidated OEE', value: '74.3%', sub: 'corporate target 80%', delta: '+2.1 p.p.', up: true },
      { label: 'Availability', value: '88.1%', sub: 'planned downtime excluded', delta: '+1.4 p.p.', up: true },
      { label: 'Performance', value: '91.4%', sub: 'actual cycle vs standard cycle', delta: '-0.6 p.p.', up: false },
      { label: 'Quality', value: '92.3%', sub: '2.7% scrap in the period', delta: '+0.9 p.p.', up: true },
    ],
    trend: {
      title: 'Consolidated daily OEE',
      sub: 'All plants, against the 80% target',
      fmt: 'pct',
      xl: ['01', '04', '07', '10', '13', '16', '19', '22', '25', '28', '30'],
      s1: { name: 'Actual OEE', base: 72, drift: 1.004, noise: 0.07 },
      s2: { name: 'Target', base: 80, drift: 1, noise: 0 },
    },
    bars: {
      title: 'OEE by plant',
      sub: 'Click to open line by line',
      hint: 'Betim drags the consolidated figure down: 61% availability on the extrusion line.',
    },
    l1: [
      { n: 'Jundiaí Plant', v: 81.2 },
      { n: 'Joinville Plant', v: 78.6 },
      { n: 'Camaçari Plant', v: 74.1 },
      { n: 'Cabo Plant', v: 70.4 },
      { n: 'Betim Plant', v: 66.9 },
    ],
    l2: {
      'Jundiaí Plant': ['Line 01 · Extrusion', 'Line 02 · Injection', 'Line 03 · Assembly', 'Line 04 · Packaging'],
      'Joinville Plant': ['Line 11 · Extrusion', 'Line 12 · Lamination', 'Line 13 · Cutting', 'Line 14 · Packaging'],
      'Camaçari Plant': ['Line 21 · Injection', 'Line 22 · Blow molding', 'Line 23 · Assembly', 'Line 24 · Palletizing'],
      'Cabo Plant': ['Line 31 · Extrusion', 'Line 32 · Cutting', 'Line 33 · Assembly', 'Line 34 · Packaging'],
      'Betim Plant': ['Line 41 · Extrusion', 'Line 42 · Injection', 'Line 43 · Machining', 'Line 44 · Packaging'],
    },
    table: {
      title: 'Orders in the slice',
      sub: 'One row per closed production order',
      grid: '1.7fr 1.35fr 1fr .85fr 1fr .95fr .95fr',
      cols: [
        { label: 'Order', align: 'left' },
        { label: 'Product', align: 'left' },
        { label: 'Good parts', align: 'right' },
        { label: 'Scrap', align: 'right' },
        { label: 'OEE', align: 'right' },
        { label: 'Downtime', align: 'right' },
        { label: 'Cost/unit', align: 'right' },
      ],
    },
    chipLabel: 'Shift',
    chips: ['All', 'Shift A', 'Shift B', 'Shift C'],
    leaf(r, ctx) {
      const prods = ['PVC profile 60mm', 'HDPE pipe 110mm', 'Laminated sheet 2mm', 'PP coil 800mm', 'Connector Ø32', 'Technical film 45µ', 'Flex cable 2.5mm', 'Composite batten'];
      const turno = ['Shift A', 'Shift B', 'Shift C'][Math.floor(r() * 3)];
      const oee = 52 + r() * 36;
      const ref = 0.4 + r() * 6.2;
      const boas = Math.floor(2200 + r() * 18000);
      const par = Math.floor(r() * 260);
      const cst = 1.9 + r() * 3.4;
      const name = 'OP-26-' + (10000 + Math.floor(r() * 89999));
      return {
        name,
        seg: turno,
        value: oee,
        cells: [
          cell(name, 'left', { bold: true, mono: true, sub: ctx.l2 + ' · ' + turno }),
          cell(pick(prods, r), 'left', { tone: 'mute' }),
          cell(nf(boas, 0), 'right', { mono: true }),
          cell(pc(ref), 'right', { mono: true, tone: ref > 4 ? 'bad' : ref > 2.5 ? 'warn' : 'ok' }),
          cell(pc(oee), 'right', { mono: true, bold: true, bar: oee / 100, barColor: oee < 70 ? '#F59E0B' : '#0D9488' }),
          cell(par + ' min', 'right', { mono: true, tone: par > 150 ? 'warn' : 'mute' }),
          cell('$' + nf(cst, 2), 'right', { mono: true }),
        ],
        stat: { a: oee, b: boas, c: ref },
      };
    },
    detail: {
      title: 'Production orders',
      sub: 'From the business-unit consolidated view down to the order the supervisor opens on the shift',
      footer: 'fato_producao cross-references MES entries, sensors and ERP. Fictitious numbers.',
    },
    stats: [
      { label: 'Orders in sample', k: 'count' },
      { label: 'Average OEE', k: 'avgA', fmt: 'pc' },
      { label: 'Good parts in sample', k: 'sumB', fmt: 'int' },
      { label: 'Average scrap', k: 'avgC', fmt: 'pc' },
    ],
    matrix: {
      title: 'OEE by line and shift',
      sub: 'The slice the spreadsheet could never build. Shift C consistently loses performance on the extrusion lines, a setup pattern and not a machine one.',
      scale: 'brand',
      fmt: 'pct',
      legendLo: '55%',
      legendHi: '90%',
      rows: ['Line 01 · Extrusion', 'Line 02 · Injection', 'Line 03 · Assembly', 'Line 11 · Extrusion', 'Line 22 · Blow molding', 'Line 41 · Extrusion'],
      heads: ['Shift A', 'Shift B', 'Shift C', 'Weekend'],
      val(ri, ci, r) {
        const base = [84, 86, 80, 83, 79, 71][ri];
        const ext = [0, 3, 5].indexOf(ri) >= 0;
        const d = [2, 0, ext ? -12 : -6, -5][ci];
        return Math.max(50, base + d + (r() - 0.5) * 2.4);
      },
      reads: [
        { kicker: 'Pattern detected', tone: '#B45309', text: 'Extrusion on shift C: 11 p.p. below shift A, same across three plants.' },
        { kicker: 'Benchmark', tone: '#0F766E', text: 'Line 02 holds 86% across all shifts and became the setup benchmark.' },
        { kicker: 'Cost', tone: '#5B21B6', text: 'Each point of OEE recovered is worth $0.08 in cost per unit.' },
      ],
    },
  },

  {
    slug: 'automacao-power-platform-aprovacoes',
    badge: 'Power Platform',
    vertical: 'Corporate Processes',
    color: '#6D28D9',
    report: 'Purchasing and Approvals · End-to-end cycle',
    dataset: 'dataverse_compras · Import',
    refreshed: '07/08 07:05',
    levels: ['Business unit', 'Cost center', 'Request'],
    slicers: [
      { label: 'Period', value: 'Last 90 days' },
      { label: 'Stage', value: 'All stages' },
      { label: 'Approval tier', value: 'All' },
    ],
    pages: ['Approval cycle', 'Open requests', 'Stage × age', 'Volume and cost-center ranking', 'Delay causes', 'Quality and governance'],
    kpis2: [
      { label: 'Requests per month', value: '1,316' },
      { label: 'Active automations', value: '24' },
      { label: 'Hours saved/month', value: '310 h' },
      { label: 'Rejection rate', value: '7.4%' },
    ],
    compose: { title: 'Requests by stage', sub: 'Weekly volume split by the stage the request entered the flow', unit: 'int', base: 62 },
    segWeights: [0.42, 0.26, 0.2, 0.12],
    pareto: {
      title: 'Causes of approval delay',
      sub: 'What holds a request beyond SLA. An absent approver leads even after automatic escalation.',
      unit: 'delayed requests',
      items: [
        { n: 'Approver absent or on vacation', v: 42 },
        { n: 'Incomplete document or quote', v: 31 },
        { n: 'Amount above the manager tier', v: 24 },
        { n: 'Supplier without an ERP record', v: 16 },
        { n: 'Incorrect cost center', v: 11 },
        { n: 'ERP integration failure', v: 6 },
        { n: 'Other', v: 3 },
      ],
    },
    quality: {
      gov: [
        { label: 'Environments', value: 'dev · uat · prod' },
        { label: 'DLP policies', value: '3 active' },
        { label: 'Connectors', value: '11 approved' },
        { label: 'Retention', value: '5 years' },
      ],
      lineage: ['Power Apps', 'Dataverse', 'Power Automate', 'ERP via API / RPA', 'Power BI dashboard'],
      sources: [
        { n: 'Dataverse (requests)', t: 'Dataverse', rows: '48K records', fresh: 'real time', st: 'ok' },
        { n: 'ERP · posting', t: 'REST API', rows: '41K documents', fresh: '5 min', st: 'ok' },
        { n: 'Desktop RPA (legacy)', t: 'Power Automate', rows: '6K runs', fresh: 'per batch', st: 'warn' },
        { n: 'Corporate directory', t: 'Entra ID', rows: '2,840 users', fresh: 'daily', st: 'ok' },
        { n: 'Attachments and quotes', t: 'SharePoint', rows: '112K files', fresh: 'real time', st: 'ok' },
      ],
      checks: [
        { n: 'DLP policy applied to the environment', st: 'ok', d: 'No connector outside the approved list.' },
        { n: 'Flows failed in the last 24 h', st: 'warn', d: '2 RPA runs failed due to ERP timeout.' },
        { n: 'Orphan apps without an owner', st: 'ok', d: 'All 24 apps have a declared owner and backup.' },
        { n: 'Approval tier checked against the directory', st: 'ok', d: 'Authority matrix synced daily.' },
        { n: 'Request without an approval trail', st: 'bad', d: '9 records migrated from the old email, no history.' },
      ],
    },
    kpis: [
      { label: 'Open', value: '312', sub: 'requests live in the flow', delta: '-18% this month', up: true },
      { label: 'Cycle time', value: '2.4 d', sub: 'from request to ERP posting', delta: 'was 9.1 d', up: true },
      { label: 'SLA on time', value: '91.3%', sub: 'with automatic escalation', delta: '+22 p.p.', up: true },
      { label: 'Amount in approval', value: '$6.84M', sub: 'sum of open requests', delta: '+$410K', up: false },
    ],
    trend: {
      title: 'Requests completed per week',
      sub: 'Since the go-live of the Power Apps app',
      fmt: 'int',
      xl: ['W1', 'W3', 'W5', 'W7', 'W9', 'W11', 'W13', 'W15', 'W17', 'W19', 'W21'],
      s1: { name: 'Completed', base: 48, drift: 1.06, noise: 0.16 },
      s2: { name: 'Open', base: 62, drift: 1.02, noise: 0.14 },
    },
    bars: {
      title: 'Requests by business unit',
      sub: 'Click to open by cost center',
      hint: 'Facilities accounts for 28% of requests and 6% of value: high volume, low ticket.',
    },
    l1: [
      { n: 'Operations', v: 412 },
      { n: 'Facilities', v: 356 },
      { n: 'Sales', v: 238 },
      { n: 'IT', v: 184 },
      { n: 'Marketing', v: 126 },
    ],
    l2: {
      Operations: ['CC 1042 · Maintenance', 'CC 1055 · Logistics', 'CC 1071 · Production', 'CC 1090 · Quality'],
      Facilities: ['CC 2010 · Building', 'CC 2024 · Cleaning', 'CC 2038 · Security', 'CC 2051 · Fleet'],
      Sales: ['CC 3011 · Sales SP', 'CC 3027 · Sales NE', 'CC 3044 · Trade', 'CC 3060 · After-sales'],
      IT: ['CC 4008 · Infrastructure', 'CC 4019 · Licenses', 'CC 4033 · Projects', 'CC 4047 · Support'],
      Marketing: ['CC 5006 · Events', 'CC 5015 · Digital', 'CC 5029 · Content', 'CC 5040 · Brand'],
    },
    table: {
      title: 'Requests in the slice',
      sub: 'One row per request, with the stage and the SLA clock',
      grid: '1.5fr 1.3fr 1.25fr 1.05fr .8fr 1.15fr .9fr',
      cols: [
        { label: 'Request', align: 'left' },
        { label: 'Supplier', align: 'left' },
        { label: 'Stage', align: 'left' },
        { label: 'Amount', align: 'right' },
        { label: 'Age', align: 'right' },
        { label: 'Approver', align: 'left' },
        { label: 'SLA', align: 'left' },
      ],
    },
    chipLabel: 'Stage',
    chips: ['All', 'Triage', 'Tier 1', 'Tier 2', 'ERP posting'],
    leaf(r, ctx) {
      const forn = ['Alfa Serviços', 'Beta Suprimentos', 'Cedro Engenharia', 'Delta TI', 'Epsilon Facilities', 'Fênix Logística', 'Gama Consultoria', 'Horizonte Materiais'];
      const aprov = ['A. Ribeiro', 'C. Nunes', 'M. Tavares', 'R. Beltrão', 'J. Ferraz', 'L. Aguiar', 'P. Sanches'];
      const etapas = ['Triage', 'Tier 1', 'Tier 2', 'ERP posting'];
      const et = etapas[Math.floor(r() * 4)];
      const val = 1800 + r() * 148000;
      const age = Math.floor(r() * 22);
      const sla: [string, Tone] = age <= 3 ? ['On time', 'ok'] : age <= 7 ? ['Warning', 'warn'] : ['Overdue', 'bad'];
      const name = 'SC-2026-' + (4000 + Math.floor(r() * 5999));
      return {
        name,
        seg: et,
        value: val,
        cells: [
          cell(name, 'left', { bold: true, mono: true, sub: ctx.l2 }),
          cell(pick(forn, r), 'left', { tone: 'mute' }),
          cell(et, 'left'),
          cell(money(val), 'right', { mono: true, bold: true, bar: Math.min(1, val / 150000), barColor: '#6D28D9' }),
          cell(age + ' d', 'right', { mono: true, tone: age > 7 ? 'bad' : 'mute' }),
          cell(pick(aprov, r), 'left', { tone: 'mute' }),
          cell(sla[0], 'left', { tone: sla[1], bold: true }),
        ],
        stat: { a: age, b: val, c: age <= 3 ? 100 : 0 },
      };
    },
    detail: {
      title: 'Open requests',
      sub: 'Full traceability: where each request stands and for how long',
      footer: 'Dataverse base of the purchasing app, integrated with the ERP. Fictitious numbers.',
    },
    stats: [
      { label: 'Requests in sample', k: 'count' },
      { label: 'Average age', k: 'avgA', fmt: 'd' },
      { label: 'Sampled amount', k: 'sumB', fmt: 'money' },
      { label: 'On time', k: 'avgC', fmt: 'pc0' },
    ],
    matrix: {
      title: 'Requests by stage and age',
      sub: 'The funnel that did not exist before the dashboard. The pile-up of requests older than 8 days in tier 2 is the real bottleneck: a single approver for amounts above $50K.',
      scale: 'risk',
      fmt: 'int',
      legendLo: 'few',
      legendHi: 'many',
      rows: ['Triage', 'Tier 1', 'Tier 2', 'ERP posting', 'Awaiting supplier'],
      heads: ['0-1 day', '2-3 days', '4-7 days', '8-15 days', '> 15 days'],
      val(ri, ci) {
        return [
          [186, 42, 16, 7, 2],
          [74, 58, 31, 14, 5],
          [38, 44, 52, 47, 14],
          [62, 21, 9, 4, 1],
          [12, 19, 27, 23, 9],
        ][ri][ci];
      },
      reads: [
        { kicker: 'Bottleneck', tone: '#BE123C', text: 'Tier 2 piles up 61 requests stalled for more than 8 days.' },
        { kicker: 'Automation', tone: '#0F766E', text: 'Triage clears 74% of requests same-day, with no human touch.' },
        { kicker: 'Escalation', tone: '#5B21B6', text: 'After 3 days Power Automate reroutes to the backup approver.' },
      ],
    },
  },

  {
    slug: 'analytics-preditivo-inadimplencia',
    badge: 'Analytics & AI',
    vertical: 'Financial Services',
    color: '#4F46E5',
    report: 'Credit Risk · Predictive score and collections ladder',
    dataset: 'mart_credito · Azure ML scoring',
    refreshed: '07/08 04:30',
    levels: ['Portfolio', 'Cohort', 'Contract'],
    slicers: [
      { label: 'Period', value: 'Position Aug/2026' },
      { label: 'Portfolio', value: 'All' },
      { label: 'PD band', value: 'All bands' },
    ],
    pages: ['Portfolio risk', 'Prioritized contracts', 'Cohort × aging bucket', 'Composition and ranking', 'Default reasons', 'Model and governance'],
    kpis2: [
      { label: 'Gini', value: '0.61' },
      { label: 'Contracts scored', value: '84.2K' },
      { label: 'Recovered this month', value: '$12.4M' },
      { label: 'PSI (drift)', value: '0.03' },
    ],
    compose: { title: 'Balance by aging bucket', sub: 'Monthly evolution of the portfolio composition, from current to 90+', unit: 'money', base: 410000000, lo: 0.955, swing: 0.09 },
    segWeights: [0.62, 0.16, 0.1, 0.07, 0.05],
    pareto: {
      title: 'Default reasons stated in collections',
      sub: 'What the customer reports when contacted. Income loss and over-indebtedness explain two thirds, and are exactly the ones the score anticipates best.',
      unit: '% of 90+ contracts',
      items: [
        { n: 'Income loss or unemployment', v: 38 },
        { n: 'Over-indebtedness', v: 27 },
        { n: 'Oversight or operational error', v: 14 },
        { n: 'Charge dispute', v: 9 },
        { n: 'Confirmed fraud', v: 6 },
        { n: 'Change of account holder', v: 4 },
        { n: 'Other', v: 2 },
      ],
    },
    quality: {
      gov: [
        { label: 'Masking', value: 'ID number and name' },
        { label: 'Access', value: 'audited trail' },
        { label: 'Retraining', value: 'quarterly' },
        { label: 'Retention', value: '10 years' },
      ],
      lineage: ['Credit base', 'External bureau', 'Feature store', 'Azure ML scoring', 'Power BI + ladder'],
      sources: [
        { n: 'Credit base', t: 'Azure SQL', rows: '84.2K contracts', fresh: 'D+0 02:00', st: 'ok' },
        { n: 'External bureau', t: 'API', rows: '62K lookups/month', fresh: 'on demand', st: 'ok' },
        { n: 'Collections history', t: 'Fabric', rows: '4.1 M events', fresh: 'D+0 03:30', st: 'ok' },
        { n: 'Feature store', t: 'Azure ML', rows: '214 features', fresh: 'daily', st: 'ok' },
        { n: 'Collections ladder', t: 'In-house system', rows: '18K actions/month', fresh: 'real time', st: 'warn' },
      ],
      checks: [
        { n: 'PSI of the main features', st: 'ok', d: '0.03 in the period; alert threshold is 0.10.' },
        { n: 'Score coverage across the portfolio', st: 'ok', d: '98.7% of active contracts have a valid score.' },
        { n: 'Nulls in a critical feature', st: 'warn', d: 'Stated income missing in 4.2% of the 2026-Q2 cohort.' },
        { n: 'Retraining within the window', st: 'ok', d: 'Last retraining 41 days ago, KS stable at 0.52.' },
        { n: 'Access to sensitive data without justification', st: 'ok', d: 'No off-policy access in the last 90 days.' },
      ],
    },
    kpis: [
      { label: 'Average 12m PD', value: '6.8%', sub: 'probability predicted by the model', delta: '-0.7 p.p.', up: true },
      { label: '90+ delinquency', value: '4.2%', sub: 'realized on balance', delta: '-1.1 p.p.', up: true },
      { label: 'Active portfolio', value: '$412M', sub: 'total outstanding balance', delta: '+3.4%', up: true },
      { label: 'Model KS', value: '0.52', sub: 'monitored at each retraining', delta: 'stable', up: true },
    ],
    trend: {
      title: 'Delinquency predicted vs realized',
      sub: 'The model anticipates by three months what the old ladder only saw later',
      fmt: 'pct',
      xl: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      s1: { name: 'Realized', base: 5.6, drift: 0.985, noise: 0.06 },
      s2: { name: 'Predicted', base: 5.8, drift: 0.984, noise: 0.03 },
    },
    bars: {
      title: 'Balance at risk by portfolio',
      sub: 'Click to open by cohort',
      hint: 'Auto financing concentrates 34% of the balance and the widest PD dispersion across cohorts.',
    },
    l1: [
      { n: 'Auto financing', v: 141000000 },
      { n: 'Payroll loan', v: 98000000 },
      { n: 'Personal loan', v: 74000000 },
      { n: 'Card', v: 58000000 },
      { n: 'Business', v: 41000000 },
    ],
    l2: {
      'Auto financing': ['Cohort 2025-Q1', 'Cohort 2025-Q3', 'Cohort 2026-Q1', 'Cohort 2026-Q2'],
      'Payroll loan': ['Cohort 2025-Q1', 'Cohort 2025-Q3', 'Cohort 2026-Q1', 'Cohort 2026-Q2'],
      'Personal loan': ['Cohort 2025-Q2', 'Cohort 2025-Q4', 'Cohort 2026-Q1', 'Cohort 2026-Q2'],
      Card: ['Cohort 2025-Q2', 'Cohort 2025-Q4', 'Cohort 2026-Q1', 'Cohort 2026-Q2'],
      Business: ['Cohort 2025-Q1', 'Cohort 2025-Q4', 'Cohort 2026-Q1', 'Cohort 2026-Q2'],
    },
    table: {
      title: 'Contracts in the slice',
      sub: 'Score per contract, with the action the collections ladder triggers',
      grid: '1.5fr .95fr 1.05fr .8fr 1.05fr .75fr 1.5fr',
      cols: [
        { label: 'Contract', align: 'left' },
        { label: 'Cohort', align: 'left' },
        { label: 'Balance', align: 'right' },
        { label: 'PD 12m', align: 'right' },
        { label: 'Aging', align: 'left' },
        { label: 'Score', align: 'right' },
        { label: 'Ladder action', align: 'left' },
      ],
    },
    chipLabel: 'Aging bucket',
    chips: ['All', 'Current', '1-30', '31-60', '61-90', '90+'],
    leaf(r, ctx) {
      const faixas = ['Current', '1-30', '31-60', '61-90', '90+'];
      const acoes = ['None · monitor', 'Automatic SMS', 'Active contact D+2', 'Preventive negotiation', 'Specialized collection', 'Renegotiation offer'];
      const fx = faixas[Math.min(4, Math.floor(Math.pow(r(), 1.8) * 5))];
      const pd = 1 + Math.pow(r(), 1.5) * 38;
      const saldo = 9000 + Math.pow(r(), 1.6) * 248000;
      const score = Math.round(980 - pd * 13 - r() * 60);
      const acao = pd > 22 ? acoes[5] : pd > 14 ? acoes[4] : pd > 8 ? acoes[3] : pd > 4 ? acoes[2] : pd > 2 ? acoes[1] : acoes[0];
      const name = 'CT-' + (8400000 + Math.floor(r() * 599999));
      return {
        name,
        seg: fx,
        value: saldo,
        cells: [
          cell(name, 'left', { bold: true, mono: true, sub: 'Customer ' + (1000 + Math.floor(r() * 8999)) + ' · masked' }),
          cell(ctx.l2.replace('Cohort ', ''), 'left', { tone: 'mute' }),
          cell(money(saldo), 'right', { mono: true, bold: true }),
          cell(pc(pd), 'right', { mono: true, bold: true, tone: pd > 14 ? 'bad' : pd > 6 ? 'warn' : 'ok', bar: Math.min(1, pd / 40), barColor: pd > 14 ? '#F59E0B' : '#4F46E5' }),
          cell(fx, 'left', { tone: fx === 'Current' ? 'ok' : fx === '90+' ? 'bad' : 'warn' }),
          cell(String(score), 'right', { mono: true }),
          cell(acao, 'left', { tone: 'mute' }),
        ],
        stat: { a: pd, b: saldo, c: score },
      };
    },
    detail: {
      title: 'Contracts prioritized by score',
      sub: 'The ladder stopped treating everyone the same: each contract gets the action the risk justifies',
      footer: 'Personal data masked per LGPD policy. Fictitious numbers.',
    },
    stats: [
      { label: 'Contracts in sample', k: 'count' },
      { label: 'Average PD', k: 'avgA', fmt: 'pc' },
      { label: 'Sampled balance', k: 'sumB', fmt: 'money' },
      { label: 'Average score', k: 'avgC', fmt: 'int' },
    ],
    matrix: {
      title: 'Portfolio distribution by cohort and aging bucket',
      sub: 'The 2025-Q3 cohort came in with looser underwriting and shows up shifted entirely to the right. It was the finding that changed the credit policy, not the collections one.',
      scale: 'risk',
      fmt: 'pct',
      legendLo: '0%',
      legendHi: 'high',
      rows: ['Cohort 2025-Q1', 'Cohort 2025-Q2', 'Cohort 2025-Q3', 'Cohort 2025-Q4', 'Cohort 2026-Q1', 'Cohort 2026-Q2'],
      heads: ['Current', '1-30', '31-60', '61-90', '90+'],
      neutralCol: 0,
      val(ri, ci) {
        return [
          [88, 6, 3.1, 1.9, 1],
          [85, 7.2, 4, 2.1, 1.7],
          [71.6, 11.4, 6.8, 5.1, 5.1],
          [86, 7, 3.9, 2, 1.1],
          [91, 5.1, 2.2, 1, 0.7],
          [94, 4.1, 1.1, 0.5, 0.3],
        ][ri][ci];
      },
      reads: [
        { kicker: 'Problem cohort', tone: '#BE123C', text: '2025-Q3 has double the 90+ balance versus the average of the others.' },
        { kicker: 'Anticipation', tone: '#0F766E', text: 'The score flagged the drift three months before it showed up in 90+.' },
        { kicker: 'LGPD', tone: '#5B21B6', text: 'Identity masked; access to raw data through an audited trail.' },
      ],
    },
  },
];

/* ------------------------------------- setores adicionais (mesma estrutura) */

caseDashboards.push(
  {
    slug: 'sop-planejamento-demanda-supply',
    badge: 'S&OP and Planning',
    vertical: 'Supply Chain',
    color: '#B45309',
    report: 'Demand and Supply Planning · S&OP cycle',
    dataset: 'gold_sop · Fabric',
    refreshed: '07/08 05:20',
    levels: ['Family', 'Supplier', 'Item'],
    slicers: [
      { label: 'Cycle', value: 'S&OP Aug/2026' },
      { label: 'Horizon', value: 'M+1 to M+6' },
      { label: 'Curve', value: 'A, B and C' },
    ],
    pages: ['S&OP cycle', 'Items and coverage', 'Accuracy by horizon', 'Composition and ranking', 'Shortage causes', 'Quality and governance'],
    kpis: [
      { label: 'Forecast accuracy', value: '78.4%', sub: '1 - value-weighted MAPE', delta: '+6.2 p.p.', up: true },
      { label: 'Average coverage', value: '34 days', sub: 'stock over forecast demand', delta: '-5 days', up: true },
      { label: 'Supplier OTIF', value: '91.2%', sub: 'on time and in quantity', delta: '+3.8 p.p.', up: true },
      { label: 'Inventory capital', value: '$84.6M', sub: 'all families', delta: '-$6.1M', up: true },
    ],
    kpis2: [
      { label: 'Class A items', value: '1,284' },
      { label: 'Input stockout', value: '3.4%' },
      { label: 'Obsolete stock', value: '$4.2M' },
      { label: 'Average lead time', value: '21 days' },
    ],
    compose: { title: 'Inventory capital by curve', sub: 'Monthly evolution of idle value, split by ABC class', unit: 'money', base: 84600000, lo: 0.955, swing: 0.09 },
    segWeights: [0.58, 0.28, 0.14],
    trend: {
      title: 'Forecast accuracy',
      sub: '1 - MAPE for the cycle, against the 80% target',
      fmt: 'pct',
      xl: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      s1: { name: 'Accuracy', base: 70, drift: 1.009, noise: 0.05 },
      s2: { name: 'Target', base: 80, drift: 1, noise: 0 },
    },
    bars: { title: 'Inventory capital by family', sub: 'Click to open by supplier', hint: 'Imported inputs account for 5% of value and 31% of shortages: risk concentrated in lead time.' },
    l1: [
      { n: 'Raw material', v: 32400000 },
      { n: 'Finished goods', v: 21600000 },
      { n: 'Packaging', v: 18200000 },
      { n: 'MRO and maintenance', v: 7800000 },
      { n: 'Imported input', v: 4600000 },
    ],
    l2: {
      'Raw material': ['Química Andrade', 'Polimer Sul', 'Resinas Ipê', 'Basalto Insumos'],
      'Finished goods': ['DC Cajamar', 'DC Extrema', 'DC Recife', 'DC Canoas'],
      Packaging: ['Cartonagem Vale', 'Flexpack Brasil', 'Rótulos Aurora', 'Vidros Marajó'],
      'MRO and maintenance': ['Ferramentaria Norte', 'Rolamentos Delta', 'Elétrica Vega', 'Lubrificantes Ária'],
      'Imported input': ['Shenzhen Materials', 'Nordic Chem', 'Andes Trading', 'Kansai Supply'],
    },
    table: {
      title: 'Items in the slice',
      sub: 'One row per item planned in the cycle',
      grid: '1.9fr 1.15fr 1.05fr .85fr .95fr .8fr .7fr',
      cols: [
        { label: 'Item', align: 'left' }, { label: 'Supplier', align: 'left' }, { label: 'Stock', align: 'right' },
        { label: 'Coverage', align: 'right' }, { label: 'Accuracy', align: 'right' }, { label: 'Lead time', align: 'right' }, { label: 'Curve', align: 'center' },
      ],
    },
    chipLabel: 'ABC curve',
    chips: ['All', 'Class A', 'Class B', 'Class C'],
    leaf(r, ctx) {
      const pool = ['PP homopolymer resin', 'Antioxidant additive', 'BOPP film 20µ', 'Masterbatch colorant', 'Cardboard box 40x30', 'Adhesive label 90mm', 'PBR pallet', 'Bearing 6205', 'Hydraulic oil ISO 68', 'Solenoid valve 24V', 'Gray epoxy paint', 'Strapping band 16mm', 'Valve bag 25kg', 'Thermal label 100x50'];
      const cls = ['Class A', 'Class B', 'Class C'][Math.min(2, Math.floor(Math.pow(r(), 1.5) * 3))];
      const est = ctx.share / 8;
      const cob = 6 + r() * 70;
      const acc = 52 + r() * 44;
      const lt = 4 + Math.floor(r() * 52);
      const name = 'IT-' + (30000 + Math.floor(r() * 69999)) + ' · ' + pick(pool, r);
      return {
        name, seg: cls, value: est,
        cells: [
          cell(name, 'left', { bold: true, sub: ctx.l2 }),
          cell(ctx.l2, 'left', { tone: 'mute' }),
          cell(money(est), 'right', { mono: true, bold: true, bar: Math.min(1, ctx.share / ctx.maxShare), barColor: '#B45309' }),
          cell(nf(cob, 0) + ' d', 'right', { mono: true, tone: cob < 12 ? 'bad' : cob > 55 ? 'warn' : 'ok' }),
          cell(pc(acc), 'right', { mono: true, tone: acc < 65 ? 'warn' : 'ok' }),
          cell(lt + ' d', 'right', { mono: true, tone: lt > 35 ? 'warn' : 'mute' }),
          cell(cls.replace('Class ', ''), 'center', { mono: true, bold: true }),
        ],
        stat: { a: acc, b: est, c: cob },
      };
    },
    detail: { title: 'Items planned in the cycle', sub: 'Coverage and accuracy item by item, the level where the planner decides the order', footer: 'gold_sop cross-references statistical forecast, commercial adjustment and stock position. Fictitious numbers.' },
    stats: [
      { label: 'Items in sample', k: 'count' }, { label: 'Average accuracy', k: 'avgA', fmt: 'pc' },
      { label: 'Sampled stock', k: 'sumB', fmt: 'money' }, { label: 'Average coverage', k: 'avgC', fmt: 'd' },
    ],
    pareto: {
      title: 'Causes of input shortage',
      sub: 'Why the item was not available when production asked for it. Supplier delay and forecast error dominate, and are tackled by different paths.',
      unit: 'shortage occurrences',
      items: [
        { n: 'Supplier delay', v: 36 }, { n: 'Demand forecast error', v: 28 }, { n: 'Import lead time', v: 21 },
        { n: 'Order placed outside the window', v: 14 }, { n: 'Quality hold', v: 9 }, { n: 'Inventory discrepancy', v: 6 }, { n: 'Other', v: 3 },
      ],
    },
    matrix: {
      title: 'Forecast accuracy by family and horizon',
      sub: 'Forecast degrades with the horizon, as expected. What the dashboard exposed was the sharp drop in imported inputs from M+3 on, exactly the item with the longest lead time.',
      scale: 'brand', fmt: 'pct', legendLo: 'low', legendHi: 'high',
      rows: ['Raw material', 'Finished goods', 'Packaging', 'MRO and maintenance', 'Imported input'],
      heads: ['M+1', 'M+2', 'M+3', 'M+4', 'M+5', 'M+6'],
      val(ri, ci, r) {
        const base = [86, 82, 88, 74, 79][ri];
        const drop = [0, 4, 9, 15, 21, 27][ci] * (ri === 4 ? 1.5 : 1);
        return Math.max(38, base - drop + (r() - 0.5) * 3);
      },
      reads: [
        { kicker: 'Blind spot', tone: '#BE123C', text: 'Imported drops to 45% at M+4, below the horizon of its own lead time.' },
        { kicker: 'Solid', tone: '#0F766E', text: 'Packaging holds above 80% through M+3 and sustains the firm order.' },
        { kicker: 'Decision', tone: '#5B21B6', text: 'Items with low accuracy moved to operating on safety stock.' },
      ],
    },
    quality: {
      gov: [{ label: 'RLS', value: 'by family' }, { label: 'S&OP cycle', value: 'monthly, D-5' }, { label: 'Versioning', value: 'frozen forecast' }, { label: 'Retention', value: '5 years' }],
      lineage: ['ERP · history', 'Statistical forecast', 'Commercial adjustment', 'Constrained plan', 'S&OP dashboard'],
      sources: [
        { n: 'Demand history', t: 'ERP', rows: '214 M rows', fresh: 'D+0 02:30', st: 'ok' },
        { n: 'Statistical forecast', t: 'Python · Fabric', rows: '8,410 series', fresh: 'monthly', st: 'ok' },
        { n: 'Commercial adjustment', t: 'Power Apps', rows: '1,284 overrides', fresh: 'per cycle', st: 'warn' },
        { n: 'Stock position', t: 'WMS', rows: '46K locations', fresh: '4 h', st: 'ok' },
        { n: 'Supplier master', t: 'MDM', rows: '812 suppliers', fresh: 'weekly', st: 'ok' },
      ],
      checks: [
        { n: 'Series with a minimum 24-month history', st: 'ok', d: '94% of class A items meet the criterion.' },
        { n: 'Commercial override without justification', st: 'warn', d: '186 adjustments with no comment in the last cycle.' },
        { n: 'Registered vs actual lead time', st: 'bad', d: 'Deviation over 30% across 74 suppliers.' },
        { n: 'Stock reconciliation WMS vs ERP', st: 'ok', d: '0.2% discrepancy at close.' },
        { n: 'Forecast frozen at D-5', st: 'ok', d: 'Cycle closed on time for the last 6 months.' },
      ],
    },
  },

  {
    slug: 'bi-logistica-frete-otif',
    badge: 'Logistics BI',
    vertical: 'Transport and Distribution',
    color: '#0369A1',
    report: 'Freight Cost and Service Level · National Network',
    dataset: 'gold_transporte · TMS + ERP',
    refreshed: '07/08 06:40',
    levels: ['Region', 'Route', 'Delivery'],
    slicers: [
      { label: 'Period', value: 'Last 30 days' },
      { label: 'Mode', value: 'Road' },
      { label: 'Carrier', value: 'All' },
    ],
    pages: ['Service level', 'Deliveries in detail', 'OTIF by carrier', 'Composition and ranking', 'Delay causes', 'Quality and governance'],
    kpis: [
      { label: 'Freight cost', value: '6.8%', sub: 'as a share of net revenue', delta: '-0.9 p.p.', up: true },
      { label: 'OTIF', value: '92.4%', sub: 'on time and complete', delta: '+4.1 p.p.', up: true },
      { label: 'Vehicle utilization', value: '78.1%', sub: 'weight and cube combined', delta: '+5.2 p.p.', up: true },
      { label: 'Cost per delivery', value: '$41.20', sub: 'total freight over deliveries', delta: '-$3.80', up: true },
    ],
    kpis2: [
      { label: 'Deliveries in period', value: '184.2K' }, { label: 'Returns', value: '2.1%' },
      { label: 'Redelivery', value: '3.6%' }, { label: 'Average lead time', value: '2.8 days' },
    ],
    compose: { title: 'Freight cost by status', sub: 'Daily spend split by delivery outcome', unit: 'money', base: 1900000 },
    segWeights: [0.62, 0.18, 0.12, 0.08],
    trend: {
      title: 'Freight cost as a share of revenue',
      sub: 'Daily percentage, against the 6.5% target',
      fmt: 'pct',
      xl: ['01', '04', '07', '10', '13', '16', '19', '22', '25', '28', '30'],
      s1: { name: 'Actual', base: 7.6, drift: 0.991, noise: 0.08 },
      s2: { name: 'Target', base: 6.5, drift: 1, noise: 0 },
    },
    bars: { title: 'Freight cost by region', sub: 'Click to open route by route', hint: 'North has 6% of deliveries and 14% of cost: distance and low utilization on the return leg.' },
    l1: [
      { n: 'Southeast', v: 2840000 }, { n: 'Northeast', v: 1620000 }, { n: 'South', v: 1180000 },
      { n: 'Midwest', v: 940000 }, { n: 'North', v: 760000 },
    ],
    l2: {
      Southeast: ['SP metro · last mile', 'SP interior · line haul', 'RJ metropolitan', 'MG · triangle'],
      Northeast: ['PE · Recife and metro', 'BA · Salvador and reconcavo', 'CE · Fortaleza', 'NE interior · transshipment'],
      South: ['PR · Curitiba and coast', 'RS · Porto Alegre', 'SC · Itajaí valley', 'South interior · line haul'],
      Midwest: ['DF · Brasília', 'GO · Goiânia', 'MT · agribusiness', 'MS · corridor'],
      North: ['AM · Manaus river', 'PA · Belém', 'TO · road', 'RO/AC · long haul'],
    },
    table: {
      title: 'Deliveries in the slice',
      sub: 'One row per issued bill of lading',
      grid: '1.45fr 1.35fr 1.25fr 1fr .8fr .85fr 1.05fr',
      cols: [
        { label: 'Delivery (BoL)', align: 'left' }, { label: 'Route', align: 'left' }, { label: 'Carrier', align: 'left' },
        { label: 'Freight', align: 'right' }, { label: 'Weight', align: 'right' }, { label: 'Lead time', align: 'right' }, { label: 'Status', align: 'left' },
      ],
    },
    chipLabel: 'Status',
    chips: ['All', 'On time', 'Late', 'Returned', 'Redelivery'],
    leaf(r, ctx) {
      const tr = ['Rodoexpress', 'Vetor Cargas', 'TransAurora', 'Linha Azul Log', 'Meridiano Transportes', 'Rota Certa', 'Cabral Distribuição'];
      const st = ['On time', 'On time', 'On time', 'Late', 'Returned', 'Redelivery'][Math.floor(r() * 6)];
      const tone: Tone = st === 'On time' ? 'ok' : st === 'Late' ? 'warn' : 'bad';
      const frete = ctx.share / 9;
      const peso = 40 + r() * 3800;
      const prazo = 1 + Math.floor(r() * 7);
      const name = 'BoL ' + (520000 + Math.floor(r() * 79999));
      return {
        name, seg: st, value: frete,
        cells: [
          cell(name, 'left', { bold: true, mono: true, sub: ctx.l1 }),
          cell(ctx.l2, 'left', { tone: 'mute' }),
          cell(pick(tr, r), 'left', { tone: 'mute' }),
          cell(money(frete), 'right', { mono: true, bold: true, bar: Math.min(1, ctx.share / ctx.maxShare), barColor: '#0369A1' }),
          cell(nf(peso, 0) + ' kg', 'right', { mono: true }),
          cell(prazo + ' d', 'right', { mono: true, tone: prazo > 4 ? 'warn' : 'mute' }),
          cell(st, 'left', { tone, bold: true }),
        ],
        stat: { a: prazo, b: frete, c: st === 'On time' ? 100 : 0 },
      };
    },
    detail: { title: 'Deliveries in detail', sub: 'From the consolidated cost down to the bill of lading that ran late', footer: 'gold_transporte cross-references TMS, route planner and billing. Fictitious numbers.' },
    stats: [
      { label: 'Deliveries in sample', k: 'count' }, { label: 'Average lead time', k: 'avgA', fmt: 'd' },
      { label: 'Sampled freight', k: 'sumB', fmt: 'money' }, { label: 'Sample OTIF', k: 'avgC', fmt: 'pc0' },
    ],
    pareto: {
      title: 'Causes of delivery delay',
      sub: 'What makes a delivery miss its window. Wrong address and recipient absence make up nearly half, and are resolved before dispatch, not on the road.',
      unit: 'late deliveries',
      items: [
        { n: 'Incorrect or incomplete address', v: 34 }, { n: 'Recipient absent', v: 27 }, { n: 'Delay in DC pickup', v: 19 },
        { n: 'No vehicle available in area', v: 13 }, { n: 'Urban traffic restriction', v: 8 }, { n: 'In-transit damage', v: 5 }, { n: 'Other', v: 3 },
      ],
    },
    matrix: {
      title: 'OTIF by carrier and region',
      sub: 'Who delivers and where. Two carriers hold service level across the whole country; the rest only work in their home area, which changed the contracting policy.',
      scale: 'brand', fmt: 'pct', legendLo: 'low', legendHi: 'high',
      rows: ['Rodoexpress', 'Vetor Cargas', 'TransAurora', 'Linha Azul Log', 'Meridiano Transportes', 'Rota Certa'],
      heads: ['Southeast', 'Northeast', 'South', 'Midwest', 'North'],
      val(ri, ci, r) {
        const base = [95, 94, 88, 86, 82, 79][ri];
        const home = [0, 2, 1, 3, 4, 0][ri];
        const pen = ci === home ? 2 : -(4 + ci * 1.6);
        return Math.max(58, base + pen + (r() - 0.5) * 3);
      },
      reads: [
        { kicker: 'National', tone: '#0F766E', text: 'Rodoexpress and Vetor keep OTIF above 90% across all five regions.' },
        { kicker: 'Regional', tone: '#B45309', text: 'The rest drop 8 to 14 p.p. outside their home area.' },
        { kicker: 'Contracting', tone: '#5B21B6', text: 'The network moved to combining national on line haul and regional on last mile.' },
      ],
    },
    quality: {
      gov: [{ label: 'RLS', value: 'by region' }, { label: 'Endorsement', value: 'gold_transporte' }, { label: 'Frequency', value: '4 hours' }, { label: 'Retention', value: '5 years' }],
      lineage: ['TMS · route planner', 'Fabric ingestion', 'Silver curated', 'Gold transport', 'Logistics dashboard'],
      sources: [
        { n: 'TMS', t: 'API', rows: '184K BoLs', fresh: '4 h', st: 'ok' },
        { n: 'Route planner', t: 'File', rows: '22K routes', fresh: 'daily', st: 'ok' },
        { n: 'Tracking (telemetry)', t: 'Streaming', rows: '86 M events', fresh: 'real time', st: 'ok' },
        { n: 'Freight billing', t: 'ERP', rows: '41K invoices', fresh: 'D+1', st: 'warn' },
        { n: 'Contracted freight table', t: 'Spreadsheet', rows: '318 tiers', fresh: 'manual', st: 'warn' },
      ],
      checks: [
        { n: 'BoL without proof of delivery', st: 'warn', d: '612 documents without a scanned receipt for over 10 days.' },
        { n: 'Freight billed vs contracted table', st: 'bad', d: '$184K charged above the table; dispute open.' },
        { n: 'Route without valid geocoding', st: 'ok', d: '99.1% of addresses geocoded.' },
        { n: 'Telemetry gap greater than 1 h', st: 'ok', d: '0.4% of trips in the period.' },
        { n: 'Cubed weight reported', st: 'warn', d: '8% of deliveries without cubing, blocking the utilization calculation.' },
      ],
    },
  },

  {
    slug: 'dre-gerencial-multiempresa',
    badge: 'Management P&L',
    vertical: 'Finance',
    color: '#047857',
    report: 'Management P&L · Multi-entity',
    dataset: 'gold_financeiro · ERP + allocation',
    refreshed: '07/08 07:20',
    levels: ['Business unit', 'Cost center', 'GL account'],
    slicers: [
      { label: 'Period', value: 'Jul/2026 · closed' },
      { label: 'View', value: 'Management' },
      { label: 'Comparison', value: 'Budget' },
    ],
    pages: ['Consolidated result', 'Accounts in detail', 'Waterfall P&L', 'Composition and ranking', 'Largest variances', 'Quality and governance'],
    pageKinds: ['overview', 'detail', 'statement', 'compose', 'pareto', 'quality'],
    kpis: [
      { label: 'Net revenue', value: '$248.6M', sub: 'year to date', delta: '-1.7% vs budget', up: false },
      { label: 'Gross margin', value: '38.4%', sub: 'after COGS and COS', delta: '+0.3 p.p.', up: true },
      { label: 'EBITDA margin', value: '14.2%', sub: 'before D&A and financial', delta: '-0.6 p.p.', up: false },
      { label: 'Net income', value: '$18.9M', sub: 'after income tax', delta: '-$2.3M', up: false },
    ],
    kpis2: [
      { label: 'Expense over revenue', value: '24.2%' }, { label: 'Close cycle', value: '3 days' },
      { label: 'Allocated accounts', value: '412' }, { label: 'Budget adherence', value: '97.9%' },
    ],
    compose: { title: 'Result by nature', sub: 'Monthly composition of what comes in and what consumes revenue', unit: 'money', base: 34000000 },
    segWeights: [0.46, 0.26, 0.18, 0.1],
    trend: {
      title: 'Monthly EBITDA margin',
      sub: 'Actual against budget, as a percentage of net revenue',
      fmt: 'pct',
      xl: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      s1: { name: 'Actual', base: 13.2, drift: 1.006, noise: 0.09 },
      s2: { name: 'Budget', base: 14.8, drift: 1.002, noise: 0.02 },
    },
    bars: { title: 'Net revenue by business unit', sub: 'Click to open by cost center', hint: 'Services has 18% of revenue and 31% of EBITDA: margin the consolidated view was hiding.' },
    l1: [
      { n: 'Manufacturing', v: 104000000 }, { n: 'Distribution', v: 62000000 }, { n: 'Services', v: 44600000 },
      { n: 'Owned retail', v: 26400000 }, { n: 'Corporate', v: 11600000 },
    ],
    l2: {
      'Manufacturing': ['CC 100 · Production', 'CC 110 · Engineering', 'CC 120 · Maintenance', 'CC 130 · Quality'],
      'Distribution': ['CC 200 · Logistics', 'CC 210 · Warehousing', 'CC 220 · Fleet', 'CC 230 · Planning'],
      'Services': ['CC 300 · Projects', 'CC 310 · Support', 'CC 320 · Field service', 'CC 330 · Consulting'],
      'Owned retail': ['CC 400 · Stores SP', 'CC 410 · Stores NE', 'CC 420 · E-commerce', 'CC 430 · Marketing'],
      Corporate: ['CC 900 · Executive', 'CC 910 · Finance', 'CC 920 · People', 'CC 930 · IT'],
    },
    table: {
      title: 'Accounts in the slice',
      sub: 'Actual against budget, account by account',
      grid: '1.9fr 1.25fr 1.05fr 1.05fr .95fr .8fr 1fr',
      cols: [
        { label: 'GL account', align: 'left' }, { label: 'Cost center', align: 'left' }, { label: 'Actual', align: 'right' },
        { label: 'Budget', align: 'right' }, { label: 'Variance', align: 'right' }, { label: 'V%', align: 'right' }, { label: 'Nature', align: 'left' },
      ],
    },
    chipLabel: 'Nature',
    chips: ['All', 'Revenue', 'Cost', 'Expense', 'Financial'],
    leaf(r, ctx) {
      const contas: [string, string][] = [
        ['3.1.01 Product revenue', 'Revenue'], ['3.1.02 Service revenue', 'Revenue'], ['3.2.01 Deductions and taxes', 'Revenue'],
        ['4.1.01 Raw material', 'Cost'], ['4.1.02 Direct labor', 'Cost'], ['4.1.03 Manufacturing overhead', 'Cost'],
        ['5.1.01 Salaries and benefits', 'Expense'], ['5.1.02 Travel and entertainment', 'Expense'], ['5.1.03 Third-party services', 'Expense'],
        ['5.1.04 Rent and occupancy', 'Expense'], ['5.1.05 Marketing and advertising', 'Expense'], ['5.2.01 Technology and licenses', 'Expense'],
        ['6.1.01 Financial expenses', 'Financial'], ['6.1.02 Financial income', 'Financial'],
      ];
      const c = pick(contas, r);
      const real = ctx.share / 7;
      const orc = real * (0.86 + r() * 0.3);
      const varc = ((real - orc) / orc) * 100;
      const av = (real / (ctx.share * 1.4)) * 100;
      return {
        name: c[0] + ' · ' + ctx.l2.split(' · ')[0], seg: c[1], value: real,
        cells: [
          cell(c[0], 'left', { bold: true, sub: ctx.l2 }),
          cell(ctx.l2, 'left', { tone: 'mute' }),
          cell(money(real), 'right', { mono: true, bold: true }),
          cell(money(orc), 'right', { mono: true, tone: 'mute' }),
          cell((varc > 0 ? '+' : '') + pc(varc), 'right', { mono: true, bold: true, tone: Math.abs(varc) < 5 ? 'ok' : varc > 0 ? 'bad' : 'warn' }),
          cell(pc(av), 'right', { mono: true, tone: 'mute' }),
          cell(c[1], 'left'),
        ],
        stat: { a: varc, b: real, c: av },
      };
    },
    detail: { title: 'Accounts in detail', sub: 'The line where the controller explains the variance to the business unit', footer: 'Management view with allocation; does not replace statutory accounting. Fictitious numbers.' },
    stats: [
      { label: 'Accounts in sample', k: 'count' }, { label: 'Average variance', k: 'avgA', fmt: 'pc' },
      { label: 'Sampled actual', k: 'sumB', fmt: 'money' }, { label: 'Average V%', k: 'avgC', fmt: 'pc' },
    ],
    statement: {
      title: 'Consolidated management P&L',
      sub: 'Jul/2026 period, in millions, with budget comparison and vertical analysis over net revenue.',
      rows: [
        { n: 'Gross revenue', v: 296.4, o: 302.0, k: 'in' },
        { n: '(-) Deductions and taxes', v: -47.8, o: -49.2, k: 'out' },
        { n: 'Net revenue', v: 248.6, o: 252.8, k: 'sub' },
        { n: '(-) Cost of goods and services', v: -153.1, o: -155.4, k: 'out' },
        { n: 'Gross profit', v: 95.5, o: 97.4, k: 'sub' },
        { n: '(-) Selling expenses', v: -28.4, o: -27.1, k: 'out' },
        { n: '(-) Administrative expenses', v: -22.6, o: -23.8, k: 'out' },
        { n: '(-) Corporate personnel expenses', v: -9.2, o: -9.0, k: 'out' },
        { n: 'EBITDA', v: 35.3, o: 37.5, k: 'sub' },
        { n: '(-) Depreciation and amortization', v: -6.8, o: -6.9, k: 'out' },
        { n: '(+/-) Financial result', v: -4.1, o: -3.2, k: 'out' },
        { n: 'Pre-tax income', v: 24.4, o: 27.4, k: 'sub' },
        { n: '(-) Income tax', v: -5.5, o: -6.2, k: 'out' },
        { n: 'Net income', v: 18.9, o: 21.2, k: 'total' },
      ],
      notes: [
        { kicker: 'Where the result leaked', tone: '#BE123C', text: 'Selling expenses $1.3M over budget, concentrated in freight and commission.' },
        { kicker: 'What held up', tone: '#0F766E', text: 'COGS below budget sustained the gross margin even with lower revenue.' },
        { kicker: 'Close', tone: '#5B21B6', text: 'The cycle dropped from 11 to 3 business days, with automated allocation.' },
      ],
    },
    pareto: {
      title: 'Largest variances against budget',
      sub: 'Where actual diverged from plan in the year to date. Freight and commission alone explain half of the total expense variance.',
      unit: '$K of variance',
      items: [
        { n: 'Freight on sales', v: 1840 }, { n: 'Sales commission', v: 1210 }, { n: 'Third-party services', v: 860 },
        { n: 'Energy and utilities', v: 640 }, { n: 'Travel and entertainment', v: 410 }, { n: 'Software licenses', v: 280 }, { n: 'Other', v: 190 },
      ],
    },
    matrix: {
      title: 'EBITDA margin by unit and quarter',
      sub: 'Not all revenue turns into result.',
      scale: 'brand', fmt: 'pct', legendLo: 'low', legendHi: 'high',
      rows: ['Manufacturing', 'Distribution', 'Services', 'Owned retail', 'Corporate'],
      heads: ['2025-Q3', '2025-Q4', '2026-Q1', '2026-Q2'],
      val(ri, ci, r) {
        const base = [13.4, 8.2, 24.6, 6.1, 2.4][ri];
        return Math.max(0.5, base + (ci - 1.5) * 0.6 + (r() - 0.5) * 1.8);
      },
      reads: [
        { kicker: 'Margin engine', tone: '#0F766E', text: 'Services delivers 24% EBITDA on 18% of revenue.' },
        { kicker: 'Dilution', tone: '#B45309', text: 'Owned retail has operated near breakeven for four quarters.' },
        { kicker: 'Allocation', tone: '#5B21B6', text: 'Corporate now shows separately; before it was diluted and hid the real result.' },
      ],
    },
    quality: {
      gov: [{ label: 'RLS', value: 'by unit' }, { label: 'Approval', value: 'controller + CFO' }, { label: 'Allocation', value: '12 rules' }, { label: 'Retention', value: '10 years' }],
      lineage: ['Accounting ERP', 'Management chart of accounts', 'Allocation engine', 'Gold finance', 'P&L Power BI'],
      sources: [
        { n: 'General ledger', t: 'ERP', rows: '18 M entries', fresh: 'D+1 06:00', st: 'ok' },
        { n: 'Approved budget', t: 'Versioned spreadsheet', rows: '6,400 rows', fresh: 'annual + revision', st: 'warn' },
        { n: 'Allocation rules', t: 'Dataverse', rows: '12 rules · 412 accounts', fresh: 'monthly', st: 'ok' },
        { n: 'FX and indexes', t: 'Central bank API', rows: 'daily', fresh: 'D+0 09:00', st: 'ok' },
        { n: 'Headcount and payroll', t: 'HR', rows: '2,840 employees', fresh: 'monthly', st: 'ok' },
      ],
      checks: [
        { n: 'Ledger reconciles with the trial balance', st: 'ok', d: '$0 difference at the Jul/2026 close.' },
        { n: 'Account without management classification', st: 'warn', d: '23 new accounts awaiting the controller mapping.' },
        { n: 'Allocation on an outdated basis', st: 'warn', d: '3 rules use headcount from two months ago.' },
        { n: 'Posting in a closed period', st: 'ok', d: 'Lock active; no retroactive posting in the period.' },
        { n: 'Budget versioned and approved', st: 'ok', d: 'Version 2026-R2 approved by the committee on 12/06.' },
      ],
    },
  },

  {
    slug: 'bi-educacional-matriculas-evasao',
    badge: 'Education BI',
    vertical: 'Education',
    color: '#7E22CE',
    report: 'Enrollment, Dropout and Result · Education Network',
    dataset: 'gold_academico · Academic ERP',
    refreshed: '07/08 06:05',
    levels: ['Campus', 'Program', 'Class'],
    slicers: [
      { label: 'Cycle', value: '2026.2' },
      { label: 'Modality', value: 'All' },
      { label: 'Status', value: 'Active and on leave' },
    ],
    pages: ['Cycle overview', 'Classes in detail', 'Dropout by program and semester', 'Composition and ranking', 'Dropout reasons', 'Quality and governance'],
    kpis: [
      { label: 'Active enrollments', value: '24,180', sub: 'all modalities', delta: '+4.2% vs 2026.1', up: true },
      { label: 'Dropout in the semester', value: '11.4%', sub: 'leave and abandonment', delta: '-2.1 p.p.', up: true },
      { label: 'Delinquency', value: '8.7%', sub: 'tuition overdue 30+', delta: '-1.4 p.p.', up: true },
      { label: 'Class fill rate', value: '82.3%', sub: 'enrolled over seats', delta: '+3.6 p.p.', up: true },
    ],
    kpis2: [
      { label: 'Intake in the cycle', value: '4,216' }, { label: 'Average ticket', value: '$892' },
      { label: 'Scholarships and discounts', value: '21.4%' }, { label: 'Student NPS', value: '46' },
    ],
    compose: { title: 'Enrollments by modality', sub: 'Monthly evolution of the active base, split by teaching modality', unit: 'int', base: 24000, lo: 0.955, swing: 0.09 },
    segWeights: [0.38, 0.26, 0.24, 0.12],
    trend: {
      title: 'Active enrollments per month',
      sub: 'Live base of the cycle, against the same period last year',
      fmt: 'int',
      xl: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      s1: { name: '2026', base: 25400, drift: 0.992, noise: 0.03 },
      s2: { name: '2025', base: 24100, drift: 0.988, noise: 0.03 },
    },
    bars: { title: 'Enrollments by campus', sub: 'Click to open program by program', hint: 'The digital campus grows 18% per cycle and already accounts for a quarter of the base.' },
    l1: [
      { n: 'Downtown Campus', v: 7420 }, { n: 'North Side Campus', v: 5180 }, { n: 'Coastal Campus', v: 4260 },
      { n: 'Inland Campus', v: 3140 }, { n: 'Digital Campus', v: 4180 },
    ],
    l2: {
      'Downtown Campus': ['Business Administration', 'Law', 'Civil Engineering', 'Nursing'],
      'North Side Campus': ['Education', 'Systems Analysis', 'Logistics', 'Physical Therapy'],
      'Coastal Campus': ['Tourism and Hospitality', 'Nutrition', 'Physical Education', 'Environmental Management'],
      'Inland Campus': ['Agronomy', 'Veterinary Medicine', 'Accounting', 'Animal Science'],
      'Digital Campus': ['MBA in Management', 'Data Science', 'Digital Marketing', 'Educational Psychology'],
    },
    table: {
      title: 'Classes in the slice',
      sub: 'One row per class opened in the cycle',
      grid: '1.55fr 1.35fr .95fr .9fr .85fr 1.05fr 1fr',
      cols: [
        { label: 'Class', align: 'left' }, { label: 'Program', align: 'left' }, { label: 'Enrolled', align: 'right' },
        { label: 'Fill rate', align: 'right' }, { label: 'Dropout', align: 'right' }, { label: 'Delinquency', align: 'right' }, { label: 'Revenue/mo', align: 'right' },
      ],
    },
    chipLabel: 'Modality',
    chips: ['All', 'On campus', 'Hybrid', 'Online', 'Grad and MBA'],
    leaf(r, ctx) {
      const mod = ['On campus', 'Hybrid', 'Online', 'Grad and MBA'][Math.floor(r() * 4)];
      const turnos = ['Morning', 'Evening', 'Full-time', 'Flexible'];
      const vagas = [35, 40, 45, 50, 60][Math.floor(r() * 5)];
      const mat = Math.round(vagas * (0.52 + r() * 0.52));
      const ocup = (mat / vagas) * 100;
      const eva = 2 + Math.pow(r(), 1.4) * 26;
      const inad = 2 + Math.pow(r(), 1.3) * 22;
      const rec = mat * (640 + r() * 620);
      const name = 'T-2026.2-' + (100 + Math.floor(r() * 899)) + ' · ' + pick(turnos, r);
      return {
        name, seg: mod, value: rec,
        cells: [
          cell(name, 'left', { bold: true, sub: ctx.l1 + ' · ' + mod }),
          cell(ctx.l2, 'left', { tone: 'mute' }),
          cell(nf(mat, 0) + '/' + vagas, 'right', { mono: true }),
          cell(pc(ocup, 0), 'right', { mono: true, bold: true, bar: Math.min(1, ocup / 100), barColor: ocup < 70 ? '#F59E0B' : '#7E22CE' }),
          cell(pc(eva), 'right', { mono: true, tone: eva > 18 ? 'bad' : eva > 11 ? 'warn' : 'ok' }),
          cell(pc(inad), 'right', { mono: true, tone: inad > 14 ? 'bad' : inad > 8 ? 'warn' : 'ok' }),
          cell(money(rec), 'right', { mono: true }),
        ],
        stat: { a: eva, b: rec, c: ocup },
      };
    },
    detail: { title: 'Classes in detail', sub: 'Where the coordination acts: a class with low fill, high dropout or concentrated delinquency', footer: 'gold_academico cross-references enrollment, finance and attendance. Fictitious numbers.' },
    stats: [
      { label: 'Classes in sample', k: 'count' }, { label: 'Average dropout', k: 'avgA', fmt: 'pc' },
      { label: 'Sampled revenue', k: 'sumB', fmt: 'money' }, { label: 'Average fill rate', k: 'avgC', fmt: 'pc' },
    ],
    pareto: {
      title: 'Stated dropout reasons',
      sub: 'What the student reports when taking leave. Financial hardship leads, but schedule conflict and academic failure are the ones the institution can tackle on its own.',
      unit: '% of dropouts',
      items: [
        { n: 'Financial hardship', v: 34 }, { n: 'Schedule conflict', v: 22 }, { n: 'Failure and performance', v: 17 },
        { n: 'Relocation', v: 11 }, { n: 'Transfer to another institution', v: 8 }, { n: 'Expectation not met', v: 5 }, { n: 'Other', v: 3 },
      ],
    },
    matrix: {
      title: 'Dropout by program and semester enrolled',
      sub: 'Dropout is not uniform: it concentrates in the first and second semesters, and some programs lose almost a fifth of the class right at entry.',
      scale: 'risk', fmt: 'pct', legendLo: 'low', legendHi: 'high',
      rows: ['Business Administration', 'Law', 'Civil Engineering', 'Systems Analysis', 'Education', 'Data Science'],
      heads: ['1st sem.', '2nd sem.', '3rd sem.', '4th sem.', '5th sem. +'],
      val(ri, ci, r) {
        const base = [16, 9, 19, 14, 12, 8][ri];
        const decay = [1, 0.82, 0.52, 0.38, 0.26][ci];
        return Math.max(1.2, base * decay + (r() - 0.5) * 1.6);
      },
      reads: [
        { kicker: 'Critical window', tone: '#BE123C', text: 'Two thirds of dropouts happen in the first two semesters.' },
        { kicker: 'Retention', tone: '#0F766E', text: 'Those who pass the third semester graduate in 91% of cases.' },
        { kicker: 'Action', tone: '#5B21B6', text: 'Tutoring aimed at freshmen cut entry dropout by 2.1 p.p.' },
      ],
    },
    quality: {
      gov: [{ label: 'LGPD', value: 'minor data' }, { label: 'RLS', value: 'by campus' }, { label: 'Anonymization', value: 'in analytics' }, { label: 'Retention', value: '20 years' }],
      lineage: ['Academic ERP', 'Student finance', 'LMS · attendance', 'Gold academic', 'Coordination dashboard'],
      sources: [
        { n: 'Academic ERP', t: 'SQL', rows: '24K enrollments', fresh: 'D+0 04:00', st: 'ok' },
        { n: 'Student finance', t: 'ERP', rows: '2.1 M receivables', fresh: 'D+0 05:00', st: 'ok' },
        { n: 'LMS (virtual environment)', t: 'API', rows: '18 M logins', fresh: '6 h', st: 'ok' },
        { n: 'On-campus attendance', t: 'Turnstile', rows: '4.6 M records', fresh: 'daily', st: 'warn' },
        { n: 'Satisfaction survey', t: 'Forms', rows: '8,400 responses', fresh: 'per cycle', st: 'warn' },
      ],
      checks: [
        { n: 'Active student without a linked class', st: 'warn', d: '184 enrollments pending allocation in 2026.2.' },
        { n: 'Attendance not posted in 7 days', st: 'bad', d: '12 evening classes with overdue registers.' },
        { n: 'Financial receivable without enrollment', st: 'ok', d: 'Reconciliation with no discrepancy for the month.' },
        { n: 'Minor data masked', st: 'ok', d: 'Full compliance in shared views.' },
        { n: 'Program without a fill target', st: 'warn', d: '6 new programs without a parameter for the alert.' },
      ],
    },
  },

  {
    slug: 'bi-hospitalar-glosas-permanencia',
    badge: 'Hospital BI',
    vertical: 'Healthcare',
    color: '#BE123C',
    report: 'Clinical Operations and Billing · Hospital Network',
    dataset: 'gold_assistencial · HIS + ERP',
    refreshed: '07/08 05:35',
    levels: ['Unit', 'Specialty', 'Encounter'],
    slicers: [
      { label: 'Period', value: 'Jul/2026' },
      { label: 'Payer', value: 'All' },
      { label: 'Acuity', value: 'Elective and urgent' },
    ],
    pages: ['Clinical operations', 'Encounters in detail', 'Claim denial by payer and reason', 'Composition and ranking', 'Claim denial reasons', 'Quality and governance'],
    kpis: [
      { label: 'Occupancy rate', value: '84.6%', sub: 'operational beds', delta: '+2.4 p.p.', up: true },
      { label: 'Average length of stay', value: '4.2 days', sub: 'all specialties', delta: '-0.6 day', up: true },
      { label: 'Claim denial', value: '6.8%', sub: 'on billing submitted', delta: '-2.3 p.p.', up: true },
      { label: 'Revenue per bed-day', value: '$2,140', sub: 'net of claim denial', delta: '+$180', up: true },
    ],
    kpis2: [
      { label: 'Admissions this month', value: '3,482' }, { label: 'Readmission within 30 days', value: '7.1%' },
      { label: 'Bed turnover', value: '6.2' }, { label: 'Billed accounts', value: '18.4K' },
    ],
    compose: { title: 'Billing by encounter acuity', sub: 'Monthly composition of revenue submitted to payers', unit: 'money', base: 38000000 },
    segWeights: [0.34, 0.3, 0.22, 0.14],
    trend: {
      title: 'Claim denial over billing',
      sub: 'Monthly percentage, against the 5% target',
      fmt: 'pct',
      xl: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      s1: { name: 'Claim denial', base: 9.4, drift: 0.972, noise: 0.07 },
      s2: { name: 'Target', base: 5, drift: 1, noise: 0 },
    },
    bars: { title: 'Billing by unit', sub: 'Click to open by specialty', hint: 'The South Side unit concentrates 34% of revenue and 41% of claim denials: account audit under review.' },
    l1: [
      { n: 'South Side Hospital', v: 12900000 }, { n: 'Central Hospital', v: 9600000 }, { n: 'North Hospital', v: 7100000 },
      { n: 'East Maternity', v: 5200000 }, { n: 'West Day Clinic', v: 3200000 },
    ],
    l2: {
      'South Side Hospital': ['Cardiology', 'Orthopedics', 'Adult ICU', 'Internal medicine'],
      'Central Hospital': ['Oncology', 'Neurology', 'General surgery', 'Emergency room'],
      'North Hospital': ['Internal medicine', 'Pediatrics', 'Orthopedics', 'Adult ICU'],
      'East Maternity': ['Obstetrics', 'Neonatology', 'Gynecology', 'Neonatal ICU'],
      'West Day Clinic': ['Ambulatory surgery', 'Endoscopy', 'Ophthalmology', 'Infusion'],
    },
    table: {
      title: 'Encounters in the slice',
      sub: 'One row per hospital account submitted',
      grid: '1.5fr 1.3fr 1.25fr 1.05fr .95fr .9fr 1.05fr',
      cols: [
        { label: 'Encounter', align: 'left' }, { label: 'Specialty', align: 'left' }, { label: 'Payer', align: 'left' },
        { label: 'Billed', align: 'right' }, { label: 'Claim denial', align: 'right' }, { label: 'Length of stay', align: 'right' }, { label: 'Account status', align: 'left' },
      ],
    },
    chipLabel: 'Acuity',
    chips: ['All', 'Elective', 'Urgent', 'ICU', 'Ambulatory'],
    leaf(r, ctx) {
      const conv = ['Saúde Aliança', 'Unimed regional', 'Bradesco Saúde', 'SulAmérica', 'Amil', 'Out-of-pocket', 'Public supplemental'];
      const car = ['Elective', 'Urgent', 'ICU', 'Ambulatory'][Math.floor(r() * 4)];
      const fat = ctx.share / 9;
      const gl = Math.pow(r(), 1.6) * 22;
      const perm = car === 'Ambulatory' ? 0 : 1 + Math.pow(r(), 1.3) * 16;
      const st: [string, Tone] = gl < 1 ? ['Paid', 'ok'] : gl < 8 ? ['Partial denial', 'warn'] : ['In appeal', 'bad'];
      const name = 'ATD-' + (940000 + Math.floor(r() * 59999));
      return {
        name, seg: car, value: fat,
        cells: [
          cell(name, 'left', { bold: true, mono: true, sub: ctx.l1 + ' · ' + car }),
          cell(ctx.l2, 'left', { tone: 'mute' }),
          cell(pick(conv, r), 'left', { tone: 'mute' }),
          cell(money(fat), 'right', { mono: true, bold: true, bar: Math.min(1, ctx.share / ctx.maxShare), barColor: '#BE123C' }),
          cell(pc(gl), 'right', { mono: true, bold: true, tone: gl > 10 ? 'bad' : gl > 4 ? 'warn' : 'ok' }),
          cell(perm ? nf(perm, 1) + ' d' : '-', 'right', { mono: true, tone: perm > 9 ? 'warn' : 'mute' }),
          cell(st[0], 'left', { tone: st[1], bold: true }),
        ],
        stat: { a: gl, b: fat, c: perm },
      };
    },
    detail: { title: 'Encounters in detail', sub: 'The hospital account line by line, from billing submitted to the amount actually received', footer: 'Patient data masked per LGPD policy. Fictitious numbers.' },
    stats: [
      { label: 'Accounts in sample', k: 'count' }, { label: 'Average claim denial', k: 'avgA', fmt: 'pc' },
      { label: 'Sampled billing', k: 'sumB', fmt: 'money' }, { label: 'Average length of stay', k: 'avgC', fmt: 'd' },
    ],
    pareto: {
      title: 'Claim denial reasons',
      sub: 'Why the payer does not pay. Documentation and authorization account for more than half, and both are resolved at admission, not in the appeal.',
      unit: '% of denied amount',
      items: [
        { n: 'Incomplete documentation', v: 31 }, { n: 'Missing prior authorization', v: 26 }, { n: 'Item not covered by contract', v: 17 },
        { n: 'Fee schedule and price mismatch', v: 12 }, { n: 'Billing window exceeded', v: 8 }, { n: 'Duplicate charge', v: 4 }, { n: 'Other', v: 2 },
      ],
    },
    matrix: {
      title: 'Claim denial by payer and reason',
      sub: 'Each payer denies for a different reason. Treating them all with the same admission checklist was what kept claim denial above 9%.',
      scale: 'risk', fmt: 'pct', legendLo: 'low', legendHi: 'high',
      rows: ['Saúde Aliança', 'Unimed regional', 'Bradesco Saúde', 'SulAmérica', 'Amil', 'Public supplemental'],
      heads: ['Documentation', 'Authorization', 'Coverage', 'Fee schedule and price', 'Window'],
      val(ri, ci, r) {
        const focus = [1, 0, 3, 2, 1, 4][ri];
        const base = [7.2, 5.8, 9.1, 6.4, 8.3, 4.9][ri];
        return Math.max(0.4, (ci === focus ? base : base * 0.28) + (r() - 0.5) * 0.8);
      },
      reads: [
        { kicker: 'Pattern by payer', tone: '#BE123C', text: 'Bradesco denies on coverage; Unimed, on prior authorization.' },
        { kicker: 'Recovery', tone: '#0F766E', text: '62% of the denied amount came back after an appeal built with dashboard data.' },
        { kicker: 'Prevention', tone: '#5B21B6', text: 'A per-payer admission checklist cut claim denial from 9.1% to 6.8%.' },
      ],
    },
    quality: {
      gov: [{ label: 'LGPD', value: 'sensitive health data' }, { label: 'RLS', value: 'by unit' }, { label: 'Anonymization', value: 'in analytics' }, { label: 'Retention', value: '20 years' }],
      lineage: ['HIS · medical record', 'Billing', 'Payer response', 'Gold clinical', 'Management dashboard'],
      sources: [
        { n: 'HIS (medical record)', t: 'SQL', rows: '8.4 M encounters', fresh: '2 h', st: 'ok' },
        { n: 'Hospital billing', t: 'Health ERP', rows: '18.4K accounts', fresh: 'D+0 04:30', st: 'ok' },
        { n: 'Claim denial response (TISS)', t: 'XML', rows: '11K statements', fresh: 'per batch', st: 'warn' },
        { n: 'Bed census', t: 'HIS', rows: 'real time', fresh: '15 min', st: 'ok' },
        { n: 'Payer fee schedules', t: 'Spreadsheet', rows: '42 contracts', fresh: 'manual', st: 'bad' },
      ],
      checks: [
        { n: 'Account without diagnosis or procedure code', st: 'warn', d: '214 accounts blocked before submission to the payer.' },
        { n: 'Bed census reconciled with the HIS', st: 'ok', d: '0.1% discrepancy in the period.' },
        { n: 'TISS response processed on time', st: 'warn', d: '2 batches delayed more than 5 days.' },
        { n: 'Active payer fee schedule', st: 'bad', d: '7 contracts with an expired schedule generating price denials.' },
        { n: 'Patient identification masked', st: 'ok', d: 'No identifiable data in shared views.' },
      ],
    },
  },
);

export function getDashboard(slug: string): DashboardDef | undefined {
  return caseDashboards.find((d) => d.slug === slug);
}

/* --------------------------------------------------------- derivações */

export function nodesL1(cs: DashboardDef) {
  return cs.l1.map((x) => ({ name: x.n, v: x.v }));
}

export function nodesL2(cs: DashboardDef, l1: string) {
  const names = cs.l2[l1] || [];
  const r = rng(cs.slug + '|' + l1);
  const parent = (cs.l1.find((x) => x.n === l1) || { v: 100 }).v;
  // Métrica percentual (OEE) não se divide entre filhos: varia em torno do pai.
  const parts = cs.levels[0] === 'Planta' ? names.map(() => parent * (0.85 + r() * 0.3)) : split(parent, names.length, r);
  return names.map((n, i) => ({ name: n, v: parts[i] }));
}

export function leavesOf(cs: DashboardDef, l1: string, l2: string): LeafRow[] {
  const r = rng(cs.slug + '|' + l1 + '|' + l2);
  const parent = (nodesL2(cs, l1).find((x) => x.name === l2) || { v: 100 }).v;
  const n = 8;
  const parts = split(parent, n, r);
  const maxShare = Math.max(...parts);
  const out: LeafRow[] = [];
  for (let i = 0; i < n; i++) out.push(cs.leaf(r, { l1, l2, i, share: parts[i], maxShare }));
  return out;
}

/** Intercalado entre os nós: a tabela de detalhe abre com o recorte inteiro à vista. */
export function allLeaves(cs: DashboardDef): LeafRow[] {
  const groups: LeafRow[][] = [];
  nodesL1(cs).forEach((a) => nodesL2(cs, a.name).forEach((b) => groups.push(leavesOf(cs, a.name, b.name))));
  const out: LeafRow[] = [];
  const max = Math.max(...groups.map((g) => g.length));
  for (let i = 0; i < max; i++) groups.forEach((g) => { if (g[i]) out.push(g[i]); });
  return out;
}

export function buildTrend(cs: DashboardDef) {
  const tr = cs.trend;
  const N = tr.xl.length;
  const r = rng(cs.slug + 'trend');
  const mk = (s: Series) => {
    const out: number[] = [];
    let v = s.base;
    for (let i = 0; i < N; i++) {
      out.push(v * (1 + (r() - 0.5) * s.noise));
      v *= s.drift;
    }
    return out;
  };
  const a1 = mk(tr.s1);
  const a2 = mk(tr.s2);
  const lo = Math.min(...a1, ...a2) * 0.92;
  const hi = Math.max(...a1, ...a2) * 1.06;
  const X = (i: number) => (i / (N - 1)) * 620;
  const Y = (v: number) => 185 - ((v - lo) / (hi - lo)) * 180;
  const pts = (a: number[]) => a.map((v, i) => X(i).toFixed(1) + ',' + Y(v).toFixed(1)).join(' ');
  const fmtV = (v: number) => (tr.fmt === 'money' ? money(v) : tr.fmt === 'pct' ? pc(v) : nf(v, 0));
  return {
    a1,
    a2,
    p1: pts(a1),
    p2: pts(a2),
    area: '0,185 ' + pts(a1) + ' 620,185',
    yl: [hi, lo + (hi - lo) * 0.66, lo + (hi - lo) * 0.33, lo].map(fmtV),
    fmtV,
  };
}

export function buildMatrix(cs: DashboardDef) {
  const mx = cs.matrix;
  const raw = mx.rows.map((_, ri) => mx.heads.map((__, ci) => mx.val(ri, ci, rng(cs.slug + '|m|' + ri + '|' + ci))));
  const scored: number[] = [];
  raw.forEach((row, ri) => row.forEach((v, ci) => { if (ci !== mx.neutralCol) scored.push(v); }));
  const max = Math.max(...scored);
  const min = Math.min(...scored);
  const ramp = mx.scale === 'risk' ? '#F59E0B' : cs.color;
  const fmt = (v: number) => (mx.fmt === 'pct' ? pc(v, v >= 20 ? 0 : 1) : nf(Math.round(v), 0));
  return {
    ramp,
    rows: mx.rows.map((name, ri) => ({
      name,
      cells: mx.heads.map((_, ci) => {
        if (ci === mx.neutralCol) return { text: fmt(raw[ri][ci]), bg: '#F2F4F9', fg: '#55607A', bold: false };
        const t = (raw[ri][ci] - min) / (max - min || 1);
        return { text: fmt(raw[ri][ci]), bg: hexA(ramp, 0.07 + t * 0.82), fg: t > 0.58 ? '#FFFFFF' : '#0C1024', bold: t > 0.58 };
      }),
    })),
  };
}

export function aggregate(rows: LeafRow[]) {
  const agg = { count: rows.length, avgA: 0, sumB: 0, avgC: 0, sumC: 0 };
  rows.forEach((l) => {
    agg.avgA += l.stat.a;
    agg.sumB += l.stat.b;
    agg.avgC += l.stat.c;
    agg.sumC += l.stat.c;
  });
  if (rows.length) {
    agg.avgA /= rows.length;
    agg.avgC /= rows.length;
  }
  return agg;
}

export function formatStat(v: number, f?: StatFmt): string {
  switch (f) {
    case 'pc': return pc(v);
    case 'pc0': return pc(v, 0);
    case 'money': return money(v);
    case 'h': return nf(v, 0) + ' h';
    case 'd': return nf(v, 1) + ' d';
    default: return nf(v, 0);
  }
}

/** Página "composição e ranking": colunas empilhadas + rosca de participação. */
export function buildCompose(cs: DashboardDef) {
  const segs = cs.chips.slice(1);
  const colors = segs.map((_, i) => hexA(cs.color, 0.94 - i * 0.16));
  const unitFmt = (v: number) => (cs.compose.unit === 'money' ? money(v) : nf(v, 0));
  const r = rng(cs.slug + '|compose');
  // Ondas de cutover são sequenciais: cada segmento só existe na sua janela.
  const seqRamp = cs.compose.ramp === 'sequential';
  const nSeg = cs.segWeights.length;
  const raw = cs.trend.xl.slice(0, 8).map((label, ci) => {
    // Estoque, carteira e base de matrículas são saldos: variam pouco de um
    // período para o outro. Fluxos (venda, frete, produção) podem oscilar.
    const lo = cs.compose.lo ?? 0.74;
    const sw = cs.compose.swing ?? 0.58;
    const vals = cs.segWeights.map((w, si) => {
      let f = 1;
      if (seqRamp) {
        const center = (si + 0.5) * (8 / nSeg) - 0.5;
        f = Math.max(0, 1 - Math.abs(ci - center) / 2);
      }
      return cs.compose.base * w * f * (lo + r() * sw);
    });
    return { label, vals, sum: vals.reduce((a, b) => a + b, 0) };
  });
  const maxSum = Math.max(...raw.map((c) => c.sum));

  const totals = segs.map((_, i) => raw.reduce((a, c) => a + c.vals[i], 0));
  const grand = totals.reduce((a, b) => a + b, 0);
  // Saldo não se soma entre períodos: oito fotos de estoque viram posição média,
  // não acumulado. Fluxo (venda, frete, produção) soma normalmente.
  const isStock = cs.compose.lo !== undefined;
  const level = (v: number) => (isStock ? v / raw.length : v);
  const C = 339.292;
  let cum = 0;
  const donut = segs.map((name, i) => {
    const len = (totals[i] / grand) * C;
    const seg = { name, color: colors[i], pct: pc((totals[i] / grand) * 100), value: unitFmt(level(totals[i])), dash: `${len.toFixed(2)} ${(C - len).toFixed(2)}`, offset: -cum };
    cum += len;
    return seg;
  });

  return {
    legend: segs.map((name, i) => ({ name, color: colors[i] })),
    cols: raw.map((c) => ({
      label: c.label,
      total: unitFmt(c.sum),
      hOuter: `${((c.sum / maxSum) * 100).toFixed(1)}%`,
      segs: c.vals.map((v, i) => ({ h: `${(c.sum ? (v / c.sum) * 100 : 0).toFixed(2)}%`, color: colors[i] })),
    })),
    donut,
    donutTotal: unitFmt(level(grand)),
    donutLabel: isStock ? 'Average position' : 'Total',
    donutSub: (isStock ? 'Period average position by ' : 'Period total by ') + cs.chipLabel,
  };
}

/** Página "causas": barras + linha acumulada, corte em 80%. */
export function buildPareto(cs: DashboardDef) {
  const items = cs.pareto.items;
  const total = items.reduce((a, b) => a + b.v, 0);
  const max = items[0].v;
  let cum = 0;
  const cols = items.map((it) => {
    cum += it.v;
    const cumPct = (cum / total) * 100;
    return {
      name: it.n,
      h: `${((it.v / max) * 100).toFixed(1)}%`,
      value: nf(it.v, 0),
      share: pc((it.v / total) * 100),
      cum: pc(cumPct, 0),
      cumPct,
      color: cumPct <= 80 ? cs.color : hexA(cs.color, 0.32),
    };
  });
  const cut = cols.filter((c) => c.cumPct <= 80).length;
  return {
    cols,
    total: nf(total, 0),
    line: cols.map((c, i) => `${(((i + 0.5) / cols.length) * 100).toFixed(2)},${(100 - c.cumPct).toFixed(2)}`).join(' '),
    cutNote: `The top ${cut} causes account for 80% of the total.`,
  };
}

export const statusDot: Record<Status, string> = { ok: '#10B981', warn: '#F59E0B', bad: '#BE123C' };
export const statusLabel: Record<Status, string> = { ok: 'OK', warn: 'Warning', bad: 'Fail' };
export const statusTone: Record<Status, Tone> = { ok: 'ok', warn: 'warn', bad: 'bad' };

/** Títulos do ranking: o que é "melhor" muda com a métrica de cada case. */
export const rankTitles: Record<string, [string, string, string, string]> = {
  'migracao-qlik-powerbi': ['Reports that consumed the most effort', 'Most expensive rebuild in hours', 'Cheapest rebuild', 'Candidates for a reusable template'],
  'plataforma-dados-fabric-varejo': ['Largest sales in the slice', 'SKUs that sustain the result', 'Long tail of sales', 'Candidates for assortment review'],
  'bi-executivo-industria-oee': ['Best OEE by order', 'Setup and pace benchmark', 'Worst OEE by order', 'Where the loss concentrates'],
  'automacao-power-platform-aprovacoes': ['Largest amounts in approval', 'Requests requiring a higher tier', 'Smallest amounts in approval', 'Candidates for automatic approval'],
  'analytics-preditivo-inadimplencia': ['Largest exposed balances', 'Risk concentration by contract', 'Smallest balances', 'Low individual impact on the portfolio'],
  'sop-planejamento-demanda-supply': ['Most idle capital', 'Items locking up cash in stock', 'Least idle capital', 'Low relevance to turnover'],
  'bi-logistica-frete-otif': ['Most expensive deliveries', 'Where freight weighs per document', 'Cheapest deliveries', 'Efficient benchmark routes'],
  'dre-gerencial-multiempresa': ['Largest lines of the result', 'Accounts that move EBITDA', 'Smallest lines', 'Low materiality for analysis'],
  'bi-educacional-matriculas-evasao': ['Highest-revenue classes', 'Sustain the campus result', 'Lowest-revenue classes', 'Candidates for merge or offer review'],
  'bi-hospitalar-glosas-permanencia': ['Highest-value accounts', 'Where claim denial costs most', 'Lowest-value accounts', 'Low impact on billing'],
};

/** Formatação das barras: o nível folha mede outra coisa que o pai. */
export function leafFormatter(cs: DashboardDef): (v: number) => string {
  if (cs.slug === 'migracao-qlik-powerbi') return (v) => nf(v, 0) + ' h of effort';
  if (cs.slug === 'bi-executivo-industria-oee') return (v) => pc(v);
  if (cs.slug === 'bi-educacional-matriculas-evasao') return (v) => money(v) + '/mo';
  return money;
}

const COUNT_NODES = ['migracao-qlik-powerbi', 'automacao-power-platform-aprovacoes', 'bi-educacional-matriculas-evasao'];

export function nodeFormatter(cs: DashboardDef): (v: number) => string {
  if (cs.slug === 'bi-executivo-industria-oee') return (v) => pc(v);
  if (COUNT_NODES.includes(cs.slug)) return (v) => nf(v, 0);
  return money;
}

/** DRE em cascata: variacao negativa = desfavoravel, para receita e para despesa. */
export function buildStatement(cs: DashboardDef) {
  const stm = cs.statement;
  if (!stm) return null;
  const base = Math.abs((stm.rows.find((x) => x.k === 'sub') || stm.rows[0]).v) || 1;
  const maxAbs = Math.max(...stm.rows.map((x) => Math.abs(x.v)));
  return {
    title: stm.title,
    sub: stm.sub,
    notes: stm.notes,
    rows: stm.rows.map((x) => {
      const vr = ((x.v - x.o) / Math.abs(x.o)) * 100;
      const strong = x.k === 'sub' || x.k === 'total';
      return {
        name: x.n,
        indent: x.k === 'out' ? 18 : 0,
        bg: x.k === 'total' ? hexA(cs.color, 0.1) : x.k === 'sub' ? '#FAFBFD' : '#FFFFFF',
        weight: strong ? 600 : 400,
        size: x.k === 'total' ? 14 : 12.5,
        value: '$' + nf(x.v, 1) + 'M',
        budget: '$' + nf(x.o, 1) + 'M',
        varc: (vr > 0 ? '+' : '') + pc(vr),
        varFg: toneColor[vr >= 0 ? 'ok' : Math.abs(vr) < 3 ? 'warn' : 'bad'],
        av: pc((x.v / base) * 100),
        bar: `${Math.round((Math.abs(x.v) / maxAbs) * 100)}%`,
        barColor: x.v >= 0 ? cs.color : hexA(cs.color, 0.3),
      };
    }),
  };
}
