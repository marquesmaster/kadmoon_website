import type { DashboardSpec } from '@/components/reports/dashboard/types';

// ---------------------------------------------------------------------------
// Navigable dashboard specs per case, re-skinned to the site's violet palette
// from the real Kadmoon report structure and figures (synthetic demo data).
// Representative product UI, not a specific client's real result.
// Deterministic helpers only (no Math.random) so SSR and CSR markup match.
// ---------------------------------------------------------------------------

function seg(from: number, to: number, n: number, amp = 0): number[] {
  return Array.from({ length: n }, (_, i) => {
    const t = n === 1 ? 0 : i / (n - 1);
    return +(from + (to - from) * t + amp * Math.sin(i * 1.3)).toFixed(2);
  });
}
function curve(start: number, end: number, n: number): number[] {
  return Array.from({ length: n }, (_, i) => +(start + (end - start) * Math.sqrt(i / (n - 1))).toFixed(1));
}
const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function mlabels(y0: number, n: number, m0 = 0): string[] {
  return Array.from({ length: n }, (_, i) => {
    const idx = m0 + i;
    const m = idx % 12;
    const y = y0 + Math.floor(idx / 12);
    return m === 0 || i === 0 ? `${MON[m]} ${String(y).slice(2)}` : MON[m];
  });
}
const M25 = mlabels(2025, 22); // Jan 25 .. Oct 26
const M24 = mlabels(2024, 31); // Jan 24 .. Jul 26
const M34 = mlabels(2024, 34); // Jan 24 .. Oct 26

// ===========================================================================
// Case 13 · DTC acquisition & LTV
// ===========================================================================

const dtcTotals = [1700, 1850, 1950, 1800, 1750, 1900, 2050, 2200, 2100, 2300, 2600, 3100, 2200, 2050, 2600, 3000, 3200, 3400, 4200, 3600, 3100, 2500];
const dtcChan = (r: number) => dtcTotals.map((t) => Math.round(t * r));

const dtc: DashboardSpec = {
  caseLabel: 'Case 13 · DTC CAC & LTV',
  pages: [
    {
      name: 'Acquisition & CAC',
      title: 'Acquisition, CAC & ROAS',
      period: 'YTD October 2026',
      slicers: [
        { label: 'Period', options: ['Oct 2026'] },
        { label: 'Channel', options: ['All'] },
        { label: 'Region', options: ['All'] },
      ],
      visuals: [
        {
          type: 'kpis',
          items: [
            { label: 'Net revenue · YTD', value: '$11.4M', delta: { text: '+31.0% vs PY', good: true } },
            { label: 'New customers · YTD', value: '28,558', delta: { text: '+15.2% vs PY', good: true } },
            { label: 'Ad spend · YTD', value: '$2.7M', sub: '+74.7% vs PY' },
            { label: 'Blended CAC · YTD', value: '$93', sub: 'PY $61 · all new customers' },
            { label: 'MER · YTD', value: '4.8x', sub: 'net sales / ad spend · PY 6.4x' },
            { label: 'First-order contribution ROAS', value: '0.42x', sub: 'platforms report 2.5x · PY 0.67x' },
          ],
        },
        {
          type: 'multiLine',
          title: 'CAC by platform, monthly',
          subtitle: 'Ad spend ÷ new customers acquired through the platform',
          labels: M25,
          yFormat: 'usd',
          series: [
            { name: 'Meta', color: 'violet', points: seg(105, 120, 12, 3).concat(seg(145, 142, 10, 3)), endLabel: 'Meta $142' },
            { name: 'Google', color: 'teal', points: seg(78, 82, 12, 1.5).concat(seg(90, 88, 10, 1.5)), endLabel: 'Google $88' },
            { name: 'TikTok', color: 'amber', points: seg(118, 130, 12, 2).concat(seg(138, 137, 10, 2)), endLabel: 'TikTok $137' },
            { name: 'Affiliates', color: 'pink', points: seg(50, 51, 12, 1).concat(seg(52, 52, 10, 1)), endLabel: 'Affiliates $52' },
          ],
        },
        {
          type: 'clusteredBarsH',
          title: 'ROAS: what platforms report vs what first orders earn',
          subtitle: 'Year to date',
          xFormat: 'ratio',
          cats: ['Meta', 'Google', 'TikTok', 'Affiliates'],
          series: [
            { name: 'Platform-reported', color: 'slate', values: [2.31, 2.51, 2.79, 3.82] },
            { name: 'First-order revenue', color: 'teal', values: [1.21, 2.0, 1.04, 3.46] },
            { name: 'First-order contribution', color: 'violet', values: [0.37, 0.6, 0.22, 1.04] },
          ],
        },
        {
          type: 'matrix',
          title: 'Paid platforms',
          subtitle: 'Year to date · revenue and contribution of first orders',
          cols: ['Platform', 'Spend', 'New cust.', 'CAC', 'CAC PY', 'Reported', 'Rev ROAS', 'Contrib.', '1st returns'],
          rows: [
            { cells: ['Meta', '$1.2M', '8,459', '$146', '$110', '2.31x', '1.21x', { v: '0.37x', tone: 'bad' }, '10.3%'] },
            { cells: ['Google', '$693K', '7,888', '$88', '$75', '2.51x', '2.00x', '0.60x', '10.9%'] },
            { cells: ['TikTok', '$616K', '4,475', '$138', '$118', '2.79x', '1.04x', { v: '0.22x', tone: 'bad' }, { v: '21.0%', tone: 'bad' }] },
            { cells: ['Affiliates', '$115K', '2,249', '$51', '$48', '3.82x', '3.46x', '1.04x', '10.5%'] },
            { cells: ['Total', '$2.7M', '23,071', '$115', '', '2.54x', '1.47x', '0.42x', ''], strong: true },
          ],
        },
        {
          type: 'divergingColumn',
          title: 'New customers by acquisition channel',
          subtitle: 'Monthly',
          yFormat: 'num',
          labels: M25,
          series: [
            { name: 'Meta', color: 'violet', points: dtcChan(0.3) },
            { name: 'Google', color: 'teal', points: dtcChan(0.26) },
            { name: 'TikTok', color: 'amber', points: dtcChan(0.14) },
            { name: 'Affiliates', color: 'pink', points: dtcChan(0.08) },
            { name: 'Organic', color: 'slate', points: dtcChan(0.22) },
          ],
        },
      ],
    },
    {
      name: 'Retention & LTV',
      title: 'Retention, LTV & Returns',
      period: 'YTD October 2026',
      slicers: [
        { label: 'Period', options: ['Oct 2026'] },
        { label: 'Channel', options: ['All'] },
        { label: 'Category', options: ['All'] },
      ],
      visuals: [
        {
          type: 'kpis',
          items: [
            { label: '90-day repeat rate', value: '16.4%', delta: { text: '-6.1 pts vs PY', good: false }, sub: 'cohorts to Jul 31' },
            { label: 'New customers on a promo order', value: '30.1%', sub: '+9.9 pts vs PY' },
            { label: 'Revenue from returning customers', value: '62.0%', sub: '+9.2 pts vs PY' },
            { label: 'Return rate · YTD', value: '11.1%', delta: { text: '+1.1 pts vs PY', good: false } },
            { label: 'Refunds · YTD', value: '$1.4M', delta: { text: '+46.6% vs PY', good: false } },
            { label: 'Contribution margin · YTD', value: '35.5%', delta: { text: '-2.1 pts vs PY', good: false } },
          ],
        },
        {
          type: 'multiLine',
          title: '90-day repeat rate by month of first order',
          subtitle: 'Promo first orders vs full price',
          labels: M24,
          yFormat: 'pct',
          series: [
            { name: 'Full price', color: 'violet', points: seg(25, 24.5, 12, 0.7).concat(seg(24, 18.7, 19, 0.7)), endLabel: 'Full price 18.7%' },
            { name: 'Promo', color: 'amber', points: seg(12, 11.5, 12, 0.6).concat(seg(11.5, 10, 19, 0.6)), endLabel: 'Promo 10.0%' },
          ],
        },
        {
          type: 'multiLine',
          title: 'Cumulative contribution per customer',
          subtitle: 'Customers acquired Jul–Dec 2025 · months since first order',
          labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
          yFormat: 'usd',
          series: [
            { name: 'Organic', color: 'slate', points: curve(60, 100, 10), endLabel: 'Organic $100' },
            { name: 'Google', color: 'teal', points: curve(60, 96, 10), endLabel: 'Google $96' },
            { name: 'Meta', color: 'violet', points: curve(60, 90, 10), endLabel: 'Meta $90' },
            { name: 'Affiliates', color: 'pink', points: curve(59, 87, 10), endLabel: 'Affiliates $87' },
            { name: 'TikTok', color: 'amber', points: curve(30, 46, 10), endLabel: 'TikTok $46' },
          ],
        },
        {
          type: 'matrix',
          title: 'Acquisition cohorts, July – December 2025',
          subtitle: 'First 10 months of each customer · LTV = cumulative contribution',
          cols: ['Channel', 'Customers', '90-day repeat', 'Orders / cust.', '10-mo LTV', 'CAC', 'LTV : CAC', 'Return rate'],
          rows: [
            { cells: ['Meta', '4,876', '16.9%', '1.49', '$90', '$110', { v: '0.82', tone: 'bad' }, '9.7%'] },
            { cells: ['Google', '4,418', '20.1%', '1.56', '$96', '$75', '1.27', '10.8%'] },
            { cells: ['TikTok', '1,539', '8.3%', '1.19', '$46', '$119', { v: '0.38', tone: 'bad' }, { v: '20.7%', tone: 'bad' }] },
            { cells: ['Affiliates', '1,353', '18.2%', '1.48', '$87', '$48', '1.80', '11.1%'] },
            { cells: ['Organic & direct', '4,364', '22.3%', '1.68', '$100', '—', '—', '10.8%'] },
          ],
        },
        {
          type: 'clusteredBarsH',
          title: 'Return rate by category',
          subtitle: 'Refunds ÷ net sales · YTD vs same months last year',
          xFormat: 'pct',
          cats: ['Apparel', 'Footwear', 'Packs', 'Tents & shelter', 'Camp kitchen', 'Accessories'],
          series: [
            { name: '2026', color: 'violet', values: [24.6, 13.8, 5.7, 5.4, 5.1, 4.1] },
            { name: '2025', color: 'slate', values: [18.9, 12.3, 5.0, 5.1, 4.5, 3.6] },
          ],
        },
      ],
    },
  ],
};

// ===========================================================================
// Case 10 · SaaS ARR & retention
// ===========================================================================

const price = Array(22).fill(0);
price[13] = 1.7e6; // Feb 2026 SMB price increase

const saas: DashboardSpec = {
  caseLabel: 'Case 10 · SaaS ARR & Retention',
  pages: [
    {
      name: 'ARR & Retention',
      title: 'ARR & Retention',
      period: 'October 31, 2026',
      slicers: [
        { label: 'Period', options: ['Oct 2026'] },
        { label: 'Segment', options: ['All'] },
        { label: 'Plan', options: ['All'] },
        { label: 'Region', options: ['All'] },
      ],
      visuals: [
        {
          type: 'kpis',
          items: [
            { label: 'ARR', value: '$50.9M', delta: { text: '+16.1% vs a year earlier', good: true } },
            { label: 'Net new ARR · YTD', value: '$5.4M', sub: 'same months last year $8.2M' },
            { label: 'Net revenue retention · TTM', value: '105.5%', delta: { text: '-4.7 pts vs a year earlier', good: false } },
            { label: 'Gross revenue retention · TTM', value: '89.4%', delta: { text: '-1.9 pts vs a year earlier', good: false } },
            { label: 'Logo churn · TTM', value: '24.9%', sub: 'a year earlier 14.8%' },
            { label: 'Customers', value: '3,295', sub: 'a year earlier 3,502' },
          ],
        },
        {
          type: 'divergingColumn',
          title: 'ARR movements by month',
          subtitle: 'New, expansion and price increase add ARR; contraction and churn remove it',
          labels: M25,
          yFormat: 'usd',
          series: [
            { name: 'New', color: 'violet', points: seg(0.55e6, 0.42e6, 22, 0.05e6) },
            { name: 'Expansion', color: 'teal', points: seg(0.5e6, 0.45e6, 22, 0.04e6) },
            { name: 'Price increase', color: 'amber', points: price },
            { name: 'Contraction', color: 'pink', points: seg(-0.12e6, -0.18e6, 22, 0.02e6) },
            { name: 'Churn', color: 'bad', points: seg(-0.35e6, -0.6e6, 22, 0.06e6) },
          ],
        },
        {
          type: 'multiLine',
          title: 'Net and gross revenue retention',
          subtitle: 'Trailing 12 months, at each month end',
          labels: M34,
          yFormat: 'pct',
          series: [
            { name: 'NRR', color: 'violet', points: seg(112, 105.5, 34, 0.6), endLabel: 'NRR 105.5%' },
            { name: 'GRR', color: 'slate', points: seg(91, 89.4, 34, 0.4), endLabel: 'GRR 89.4%' },
          ],
        },
        {
          type: 'matrix',
          title: 'Retention by segment and plan',
          subtitle: 'Trailing 12 months at Oct 31, 2026',
          cols: ['Segment', 'Plan', 'Customers', 'ARR', 'NRR', 'GRR', 'Logo churn', 'Churn PY'],
          rows: [
            { cells: ['Enterprise', 'Enterprise', '162', '$19.9M', '111.9%', '97.0%', '3.4%', '2.3%'] },
            { cells: ['Mid-Market', 'Growth', '279', '$8.7M', '106.4%', '91.0%', { v: '7.2%', tone: 'bad' }, '5.2%'] },
            { cells: ['Mid-Market', 'Scale', '342', '$12.4M', '111.0%', '93.0%', '8.0%', '9.8%'] },
            { cells: ['SMB', 'Growth', '987', '$3.9M', { v: '84.8%', tone: 'bad' }, '68.8%', { v: '30.3%', tone: 'bad' }, '16.0%'] },
            { cells: ['SMB', 'Starter', '1,525', '$6.0M', { v: '89.4%', tone: 'bad' }, '72.1%', { v: '29.0%', tone: 'bad' }, '17.6%'] },
            { cells: ['Total', '', '3,295', '$50.9M', '105.5%', '89.4%', '24.9%', '14.8%'], strong: true },
          ],
        },
        {
          type: 'multiLine',
          title: 'Monthly logo churn by segment',
          subtitle: 'Accounts lost ÷ accounts at the prior month end',
          labels: M24,
          yFormat: 'pct',
          series: [
            { name: 'SMB', color: 'violet', points: seg(1.6, 1.7, 14, 0.4).concat(seg(3.2, 3.5, 17, 0.4)), endLabel: 'SMB 3.5%' },
            { name: 'Enterprise', color: 'amber', points: seg(1.0, 1.2, 31, 0.3), endLabel: 'Ent 1.2%' },
            { name: 'Mid-Market', color: 'teal', points: seg(0.6, 0.5, 31, 0.3), endLabel: 'Mid-Mkt 0.5%' },
          ],
        },
      ],
    },
    {
      name: 'Account Health & Efficiency',
      title: 'Account Health & Acquisition Efficiency',
      period: 'YTD October 2026',
      slicers: [
        { label: 'Period', options: ['Oct 2026'] },
        { label: 'Channel', options: ['All'] },
      ],
      visuals: [
        {
          type: 'kpis',
          items: [
            { label: 'New ARR · YTD', value: '$4.2M', delta: { text: '-19.8% vs PY', good: false } },
            { label: 'S&M spend · YTD', value: '$6.0M', delta: { text: '+37.3% vs PY', good: false } },
            { label: 'CAC payback · YTD', value: '22.0 months', sub: 'same months last year 12.9' },
            { label: 'Activation rate, new accounts', value: '56.2%', delta: { text: '-15.4 pts vs PY', good: false }, sub: 'within 60 days' },
            { label: 'ARR at risk', value: '$2.7M', sub: '427 accounts using < 40% of seats' },
            { label: 'Churned ARR · YTD', value: '$4.7M', sub: 'same months last year $2.7M' },
          ],
        },
        {
          type: 'clusteredColumn',
          title: 'Churn within 12 months, by activation',
          subtitle: 'Accounts started Jan 2024 – Oct 2025 · activated = core workflow live within 60 days',
          labels: ['SMB', 'Mid-Market'],
          yFormat: 'pct',
          showValues: true,
          series: [
            { name: 'Not activated', color: 'violet', points: [46, 22] },
            { name: 'Activated', color: 'teal', points: [18, 6] },
          ],
        },
        {
          type: 'multiLine',
          title: 'CAC payback, months',
          subtitle: 'Trailing 3 months · S&M ÷ (new ARR × gross margin) × 12',
          labels: mlabels(2024, 31, 3),
          yFormat: 'num',
          series: [{ name: 'Payback', color: 'violet', points: seg(12.5, 13, 16, 1.2).concat([16, 14, 13, 19, 26, 20, 19, 21, 22, 23, 23.5, 23, 22, 22.5, 23]), endLabel: 'Payback 23.0' }],
        },
        {
          type: 'matrix',
          title: 'Accounts at risk — using fewer than 40% of seats',
          subtitle: 'Oct 31, 2026 · largest ARR first',
          cols: ['Account', 'Segment', 'Plan', 'ARR', 'Seats', 'Active', 'Seat util.', 'Users vs 3mo', 'P1 90d'],
          rows: [
            { cells: ['Maplefield Labs', 'Enterprise', 'Enterprise', '$95K', '526', '189', '36%', { v: '-15%', tone: 'bad' }, '1'] },
            { cells: ['Lumenridge Partners', 'Enterprise', 'Enterprise', '$81K', '453', '115', '25%', '+11%', '1'] },
            { cells: ['Rivercrest Partners', 'Enterprise', 'Enterprise', '$79K', '438', '131', '30%', { v: '-14%', tone: 'bad' }, '1'] },
            { cells: ['Driftcrest Labs', 'Mid-Market', 'Scale', '$55K', '355', '131', '37%', '+0%', '0'] },
            { cells: ['Keystoneview Supply', 'Mid-Market', 'Scale', '$46K', '296', '101', '34%', '+29%', '0'] },
            { cells: ['Irongate Health', 'Mid-Market', 'Growth', '$46K', '293', '99', '34%', '+36%', '0'] },
            { cells: ['Pioneer Clinics', 'Mid-Market', 'Scale', '$43K', '277', '77', '28%', '+64%', '1'] },
            { cells: ['Timbercrest Builders', 'Mid-Market', 'Scale', '$40K', '257', '68', '26%', '+26%', '1'] },
          ],
        },
        {
          type: 'clusteredBarsH',
          title: 'Program spend per new customer, by channel',
          subtitle: 'YTD vs same months last year · excludes sales team',
          xFormat: 'usd',
          cats: ['Paid search', 'Paid social', 'Organic & content', 'Outbound', 'Partners'],
          series: [
            { name: '2026', color: 'violet', values: [6000, 4000, 1000, 4000, 2000] },
            { name: '2025', color: 'slate', values: [2400, 2800, 800, 2600, 1600] },
          ],
        },
      ],
    },
  ],
};

// ===========================================================================
// Case 11 · Revenue cycle
// ===========================================================================

const arTot = seg(1.0e6, 1.25e6, 22, 0.03e6);
const arAge = (r: number) => arTot.map((t) => Math.round(t * r));
const denTot = seg(40000, 42000, 13, 3000).concat(seg(78000, 66000, 9, 3000)); // prior-auth spike from Apr26

const revcycle: DashboardSpec = {
  caseLabel: 'Case 11 · Revenue Cycle',
  pages: [
    {
      name: 'Revenue Cycle',
      title: 'Revenue Cycle',
      period: 'October 31, 2026',
      slicers: [
        { label: 'Period', options: ['Oct 2026'] },
        { label: 'Clinic', options: ['All'] },
        { label: 'Payer type', options: ['All'] },
      ],
      visuals: [
        {
          type: 'kpis',
          items: [
            { label: 'Net collections · YTD', value: '$7.6M', delta: { text: '+4.4% vs PY', good: true } },
            { label: 'Net collection rate · YTD', value: '95.6%', delta: { text: '-1.8 pts vs PY', good: false } },
            { label: 'Days in A/R', value: '46.5 days', delta: { text: '+4.2 days vs a year earlier', good: false } },
            { label: 'A/R over 90 days', value: '18.4%', sub: 'a year earlier 15.9%' },
            { label: 'Charge lag · YTD', value: '2.5 days', sub: 'same months last year 1.6' },
            { label: 'Unbilled visits', value: '$96K', sub: 'not yet billed · PY $89K' },
          ],
        },
        {
          type: 'divergingColumn',
          title: 'A/R by age, month end',
          subtitle: 'Days since date of service · contracted amount',
          labels: M25,
          yFormat: 'usd',
          series: [
            { name: '0–30', color: 'lilac', points: arAge(0.55) },
            { name: '31–60', color: 'violet2', points: arAge(0.2) },
            { name: '61–90', color: 'violet', points: arAge(0.12) },
            { name: '91–120', color: 'grape', points: arAge(0.07) },
            { name: '120+', color: 'bad', points: arAge(0.06) },
          ],
        },
        {
          type: 'multiLine',
          title: 'Charge lag by month',
          subtitle: 'Visit to charge entry · three clinics moved to a new EHR in June 2026',
          labels: M25,
          yFormat: 'num',
          series: [
            { name: 'Migrated clinics', color: 'violet', points: seg(1.6, 1.7, 17, 0.1).concat([8.5, 7.8, 7.0, 6.5, 6.1]), endLabel: 'Migrated 6.1' },
            { name: 'Other clinics', color: 'slate', points: seg(1.7, 1.7, 22, 0.1), endLabel: 'Other 1.7' },
          ],
        },
        {
          type: 'matrix',
          title: 'Clinics',
          subtitle: 'Year to date · charge lag over the last 90 days · A/R at Oct 31, 2026',
          cols: ['Clinic', 'Visits', 'Collections', 'NCR', 'Denial', 'Charge lag', 'Days A/R', 'A/R > 90'],
          rows: [
            { cells: ['Clearwater', '9,518', '$1.0M', '95.4%', '8.4%', '1.6', '47.4', '18.4%'] },
            { cells: ['Bradenton', '6,231', '$648K', '95.8%', '8.5%', { v: '6.5', tone: 'bad' }, '47.4', { v: '20.9%', tone: 'bad' }] },
            { cells: ['Largo', '6,998', '$736K', '95.5%', '8.7%', '1.6', '46.8', '15.2%'] },
            { cells: ['Lakeland', '6,389', '$660K', '95.3%', '9.0%', { v: '6.6', tone: 'bad' }, '46.7', { v: '20.2%', tone: 'bad' }] },
            { cells: ['Brandon', '7,386', '$792K', '95.7%', '7.9%', '1.7', '46.7', '16.7%'] },
            { cells: ['St. Petersburg', '8,879', '$954K', '95.3%', '8.3%', '1.6', '46.5', '18.8%'] },
            { cells: ['Sarasota', '7,977', '$829K', '95.8%', '8.1%', { v: '6.5', tone: 'bad' }, '46.1', { v: '20.0%', tone: 'bad' }] },
            { cells: ['Tampa North', '8,363', '$887K', '95.7%', '8.3%', '1.7', '45.9', '18.6%'] },
          ],
        },
        {
          type: 'barsH',
          title: 'A/R by payer',
          subtitle: 'Oct 31, 2026 · open balance',
          xFormat: 'usd',
          rows: [
            { k: 'Northstar Insurance', v: 318000, highlight: true, show: '$318K' },
            { k: 'Medicare', v: 264000, show: '$264K' },
            { k: 'Keystone Health Plan', v: 224000, show: '$224K' },
            { k: "Workers' compensation", v: 175000, show: '$175K' },
            { k: 'Harborline Health', v: 163000, show: '$163K' },
            { k: 'Medicaid Plan', v: 88000, show: '$88K' },
            { k: 'Self-pay', v: 56000, show: '$56K' },
          ],
        },
      ],
    },
    {
      name: 'Denials & Payers',
      title: 'Denials, Underpayments & Payers',
      period: 'YTD October 2026',
      slicers: [
        { label: 'Period', options: ['Oct 2026'] },
        { label: 'Clinic', options: ['All'] },
        { label: 'Payer', options: ['All'] },
      ],
      visuals: [
        {
          type: 'kpis',
          items: [
            { label: 'First-pass denial rate · YTD', value: '8.4%', delta: { text: '+3.2 pts vs PY', good: false } },
            { label: 'Denied · YTD', value: '$690K', sub: 'same months last year $392K' },
            { label: 'Prior-auth denials · YTD', value: '$321K', sub: 'same months last year $40K' },
            { label: 'Denials recovered on appeal', value: '55.1%', delta: { text: '-3.1 pts vs PY', good: false } },
            { label: 'Denials written off · YTD', value: '$235K', sub: 'same months last year $152K' },
            { label: 'Underpaid vs contract · YTD', value: '$83K', sub: 'same months last year $16K' },
          ],
        },
        {
          type: 'divergingColumn',
          title: 'Denied claims by month and reason',
          subtitle: 'Contracted amount · by date of service',
          labels: M25,
          yFormat: 'usd',
          series: [
            { name: 'Prior authorization', color: 'violet', points: Array(13).fill(3000).concat([34000, 33000, 31000, 30000, 29000, 28000, 27000, 26000, 25000]) },
            { name: 'Eligibility', color: 'teal', points: arAge(0).map((_, i) => (i < 13 ? 10000 : 11000)) },
            { name: 'Coding / modifier', color: 'amber', points: Array(22).fill(9000) },
            { name: 'Medical necessity', color: 'pink', points: Array(22).fill(6000) },
            { name: 'Timely filing', color: 'slate', points: Array(22).fill(2500) },
            { name: 'Duplicate claim', color: 'grape', points: Array(22).fill(3500) },
          ],
        },
        {
          type: 'clusteredBarsH',
          title: 'First-pass denial rate by payer',
          subtitle: 'Year to date vs same months last year',
          xFormat: 'pct',
          cats: ['Northstar Insurance', "Workers' comp", 'Medicaid Plan', 'Harborline Health', 'Medicare', 'Keystone Health Plan', 'Self-pay'],
          series: [
            { name: '2026', color: 'violet', values: [22.4, 10.3, 8.3, 5.2, 4.7, 4.3, 0.1] },
            { name: '2025', color: 'slate', values: [5.0, 8.9, 9.1, 5.1, 4.8, 4.3, 0.0] },
          ],
        },
        {
          type: 'matrix',
          title: 'Payers',
          subtitle: 'Year to date · A/R at Oct 31, 2026',
          cols: ['Payer', 'Type', 'Claims', 'Denial', 'PY', 'Days to pay', 'A/R', 'A/R > 90', 'Underpaid'],
          rows: [
            { cells: ['Northstar Insurance', 'Commercial', '12,928', { v: '22.4%', tone: 'bad' }, '4.7%', '40.9', '$318K', { v: '26.3%', tone: 'bad' }, '$3K'] },
            { cells: ["Workers' comp", 'Other', '4,190', '10.3%', '8.9%', '79.8', '$175K', { v: '21.9%', tone: 'bad' }, '$1K'] },
            { cells: ['Gulf Coast Medicaid', 'Government', '7,025', '8.3%', '9.1%', '45.0', '$88K', '13.6%', '$1K'] },
            { cells: ['Harborline Health', 'Commercial', '8,585', '5.2%', '5.1%', '40.4', '$163K', '14.8%', '$3K'] },
            { cells: ['Medicare', 'Government', '21,248', '4.7%', '4.8%', '29.8', '$264K', '14.3%', '$5K'] },
            { cells: ['Keystone Health Plan', 'Commercial', '14,053', '4.3%', '4.3%', '35.2', '$224K', '13.4%', { v: '$69K', tone: 'bad' }] },
            { cells: ['Self-pay', 'Other', '2,924', '0.1%', '0.0%', '48.3', '$56K', { v: '20.2%', tone: 'bad' }, '$533'] },
          ],
        },
        {
          type: 'barsH',
          title: 'Underpaid vs contract, by payer',
          subtitle: 'YTD · paid more than 2% below the contracted amount',
          xFormat: 'usd',
          rows: [
            { k: 'Keystone Health Plan', v: 69000, highlight: true, show: '$69K' },
            { k: 'Medicare', v: 5000, show: '$5K' },
            { k: 'Northstar Insurance', v: 3000, show: '$3K' },
            { k: 'Harborline Health', v: 3000, show: '$3K' },
            { k: "Workers' compensation", v: 1000, show: '$1K' },
            { k: 'Medicaid Plan', v: 1000, show: '$1K' },
            { k: 'Self-pay', v: 533, show: '$533' },
          ],
        },
      ],
    },
  ],
};

// ===========================================================================
// Case 14 · Trucking lanes & fleet
// ===========================================================================

const trucking: DashboardSpec = {
  caseLabel: 'Case 14 · Trucking Lanes & Fleet',
  pages: [
    {
      name: 'Lanes & Customers',
      title: 'Lanes, Customers & Revenue Quality',
      period: 'YTD October 2026',
      slicers: [
        { label: 'Period', options: ['Oct 2026'] },
        { label: 'Customer', options: ['All'] },
        { label: 'Origin', options: ['All'] },
      ],
      visuals: [
        {
          type: 'kpis',
          items: [
            { label: 'Revenue · YTD', value: '$46.1M', delta: { text: '-2.8% vs PY', good: false } },
            { label: 'Operating ratio · YTD', value: '98.9%', delta: { text: '+8.1 pts vs PY', good: false } },
            { label: 'Revenue per loaded mile · YTD', value: '$2.35', sub: '+1.2% vs PY · linehaul only' },
            { label: 'Deadhead · YTD', value: '18.1%', delta: { text: '+4.5 pts vs PY', good: false } },
            { label: 'Unbilled detention · YTD', value: '$685K', sub: 'billed 30% of eligible hours · PY 42%' },
            { label: 'Fuel surcharge recovery · YTD', value: '91.6%', delta: { text: '-5.6 pts vs PY', good: false } },
          ],
        },
        {
          type: 'multiLine',
          title: 'Revenue vs cost per total mile',
          subtitle: 'Monthly · total miles include deadhead',
          labels: M25,
          yFormat: 'usd2',
          series: [
            { name: 'Revenue per mile', color: 'violet', points: seg(2.44, 2.37, 22, 0.02), endLabel: 'Revenue $2.37' },
            { name: 'Cost per mile', color: 'bad', points: seg(2.17, 2.29, 22, 0.05), endLabel: 'Cost $2.29' },
          ],
        },
        {
          type: 'divergingBarsH',
          title: 'Margin per loaded mile, by lane',
          subtitle: 'Year to date · 12 lowest of lanes with 400+ loads',
          xFormat: 'usd2',
          rows: [
            { k: 'Indianapolis → Dallas · Harvest', v: -0.35 },
            { k: 'Houston → Atlanta · Granite', v: -0.25 },
            { k: 'Chicago → Dallas · Harvest', v: -0.24 },
            { k: 'Dallas → Atlanta · Granite', v: -0.24 },
            { k: 'Dallas → Memphis · Granite', v: -0.2 },
            { k: 'Chicago → Kansas City · Harvest', v: -0.09 },
            { k: 'Indianapolis → Dallas · Ironwood', v: -0.08 },
            { k: 'Houston → St. Louis · Westfield', v: -0.03 },
            { k: 'Memphis → San Antonio · Lakeshore', v: -0.01 },
            { k: 'Birmingham → Houston · Trident', v: 0.06 },
            { k: 'Dallas → Nashville · Crestline', v: 0.06 },
          ],
        },
        {
          type: 'matrix',
          title: 'Customers',
          subtitle: 'Year to date · largest revenue first',
          cols: ['Customer', 'Loads', 'Revenue', 'Rev / mi', 'PY', 'Deadhead', 'Margin / mi', 'Det. billed'],
          rows: [
            { cells: ['Granite Building Supply', '2,880', '$5.6M', '$2.16', '$2.16', '20.3%', { v: '-$0.23', tone: 'bad' }, '31%'] },
            { cells: ['Harvest Valley Foods', '2,551', '$5.3M', '$2.16', '$2.16', '20.5%', { v: '-$0.25', tone: 'bad' }, '27%'] },
            { cells: ['Westfield Flooring', '1,301', '$2.9M', '$2.26', '$2.20', '17.2%', { v: '-$0.03', tone: 'bad' }, '31%'] },
            { cells: ['Ironwood Furniture', '1,109', '$2.7M', '$2.21', '$2.18', '17.2%', { v: '-$0.08', tone: 'bad' }, '27%'] },
            { cells: ['Lakeshore Appliances', '1,295', '$2.4M', '$2.39', '$2.33', '17.5%', { v: '+$0.09', tone: 'good' }, '33%'] },
            { cells: ['Trident Plastics', '1,016', '$1.9M', '$2.34', '$2.29', '17.2%', { v: '+$0.06', tone: 'good' }, '25%'] },
            { cells: ['Heritage Mills', '673', '$1.8M', '$2.30', '$2.29', '17.6%', { v: '-$0.00', tone: 'bad' }, '41%'] },
            { cells: ['Redline Auto Parts', '1,067', '$1.7M', '$2.49', '$2.45', '17.3%', { v: '+$0.20', tone: 'good' }, '25%'] },
          ],
        },
        {
          type: 'clusteredColumn',
          title: 'Detention hours: eligible vs billed',
          subtitle: 'Wait time beyond 2 free hours · monthly',
          labels: M25,
          yFormat: 'num',
          series: [
            { name: 'Eligible', color: 'slate', points: seg(1550, 1350, 22, 80) },
            { name: 'Billed', color: 'violet', points: seg(650, 400, 22, 50) },
          ],
        },
      ],
    },
    {
      name: 'Fleet & Drivers',
      title: 'Fleet Maintenance & Drivers',
      period: 'YTD October 2026',
      slicers: [
        { label: 'Period', options: ['Oct 2026'] },
        { label: 'Age group', options: ['All'] },
        { label: 'Domicile', options: ['All'] },
      ],
      visuals: [
        {
          type: 'kpis',
          items: [
            { label: 'Miles per truck per week', value: '2,355', sub: 'PY 2,360 · total miles' },
            { label: 'Maintenance per mile · YTD', value: '$0.114', sub: 'PY $0.109 per total mile' },
            { label: 'Road calls · YTD', value: '143', delta: { text: '+38% vs PY', good: false } },
            { label: 'Driver turnover', value: '99%', sub: 'trailing 12 months · a year earlier 80%' },
            { label: 'Drivers hired in last 6 months', value: '37.2%', sub: 'of active drivers · a year earlier 31.4%' },
            { label: 'Miles per driver-week · YTD', value: '2,523', sub: 'PY 2,505 · weeks with loads' },
          ],
        },
        {
          type: 'clusteredColumn',
          title: 'Maintenance cost per mile, by model year',
          subtitle: 'Year to date · repairs, preventive and road calls',
          labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
          yFormat: 'usd2',
          showValues: true,
          series: [
            {
              name: 'Maintenance per mile',
              color: 'violet',
              points: [0.157, 0.184, 0.176, 0.182, 0.074, 0.068, 0.077, 0.067, 0.075, 0.07],
              colors: ['bad', 'bad', 'bad', 'bad', 'violet', 'violet', 'violet', 'violet', 'violet', 'violet'],
            },
          ],
        },
        {
          type: 'multiLine',
          title: 'Driver turnover, trailing 12 months',
          subtitle: 'At each month end',
          labels: M25,
          yFormat: 'pct',
          series: [{ name: 'Turnover', color: 'violet', points: seg(55, 99, 22, 1.5), endLabel: 'Turnover 99%' }],
        },
        {
          type: 'matrix',
          title: 'Trucks — highest maintenance cost per mile',
          subtitle: 'Year to date',
          cols: ['Truck', 'Year', 'Make', 'Miles', 'Maint.', 'Cost / mi', 'Road calls', 'Downtime h'],
          rows: [
            { cells: ['T2051', '2019', 'Freightliner Cascadia', '72,988', '$25K', { v: '$0.339', tone: 'bad' }, '0', '190'] },
            { cells: ['T2150', '2019', 'Kenworth T680', '75,119', '$25K', { v: '$0.337', tone: 'bad' }, '4', '275'] },
            { cells: ['T2015', '2018', 'International LT', '91,418', '$30K', { v: '$0.331', tone: 'bad' }, '1', '190'] },
            { cells: ['T2189', '2018', 'Volvo VNL', '106,319', '$32K', { v: '$0.300', tone: 'bad' }, '2', '236'] },
            { cells: ['T2081', '2019', 'International LT', '85,257', '$25K', { v: '$0.294', tone: 'bad' }, '2', '200'] },
            { cells: ['T2129', '2019', 'Freightliner Cascadia', '88,512', '$25K', { v: '$0.281', tone: 'bad' }, '2', '215'] },
            { cells: ['T2154', '2018', 'Volvo VNL', '95,637', '$26K', { v: '$0.276', tone: 'bad' }, '2', '220'] },
            { cells: ['T2073', '2017', 'Volvo VNL', '85,631', '$22K', { v: '$0.258', tone: 'bad' }, '6', '255'] },
          ],
        },
        {
          type: 'barsH',
          title: 'Miles per driver-week, by tenure',
          subtitle: 'Year to date · weeks with at least one load',
          xFormat: 'num',
          rows: [
            { k: '< 3 months', v: 2163, show: '2,163' },
            { k: '3–6 months', v: 2412, show: '2,412' },
            { k: '6–12 months', v: 2678, show: '2,678' },
            { k: '1–2 years', v: 2661, show: '2,661' },
            { k: '2+ years', v: 2668, show: '2,668' },
          ],
        },
      ],
    },
  ],
};

// ===========================================================================
// Case 15 · Multifamily leasing & NOI
// ===========================================================================

const multifamily: DashboardSpec = {
  caseLabel: 'Case 15 · Multifamily Leasing & NOI',
  pages: [
    {
      name: 'Leasing & Occupancy',
      title: 'Leasing, Renewals & Occupancy',
      period: 'October 31, 2026',
      slicers: [
        { label: 'Period', options: ['Oct 2026'] },
        { label: 'Market', options: ['All'] },
        { label: 'Property', options: ['All'] },
        { label: 'Class', options: ['All'] },
      ],
      visuals: [
        {
          type: 'kpis',
          items: [
            { label: 'Occupancy, stabilized', value: '93.6%', delta: { text: '-2.0 pts vs a year earlier', good: false } },
            { label: 'Renewal conversion · YTD', value: '46.3%', delta: { text: '-10.0 pts vs PY', good: false } },
            { label: 'New-lease trade-out · YTD', value: '-3.7%', sub: 'same months last year -0.8%' },
            { label: 'Renewal increase · YTD', value: '+6.5%', sub: 'same months last year +4.0%' },
            { label: 'Make-ready days · YTD', value: '10.7 days', sub: 'same months last year 8.6' },
            { label: 'Days vacant per turn · YTD', value: '42.2 days', sub: 'same months last year 34.6' },
          ],
        },
        {
          type: 'multiLine',
          title: 'Occupancy at month end',
          subtitle: 'Stabilized communities vs lease-ups',
          labels: M24,
          yFormat: 'pct',
          series: [
            { name: 'Stabilized', color: 'violet', points: seg(98, 93.6, 31, 0.6), endLabel: 'Stabilized 93.6%' },
            { name: 'Lease-up', color: 'teal', points: seg(20, 60, 16, 2).concat(seg(70, 91.6, 15, 2)), endLabel: 'Lease-up 91.6%' },
          ],
        },
        {
          type: 'clusteredColumn',
          title: 'Lease expirations: renewed vs moved out',
          subtitle: 'Monthly',
          labels: M25,
          yFormat: 'num',
          series: [
            { name: 'Renewed', color: 'violet', points: seg(230, 200, 22, 20) },
            { name: 'Moved out', color: 'slate', points: seg(190, 240, 22, 25) },
          ],
        },
        {
          type: 'matrix',
          title: 'Communities — lowest occupancy first',
          subtitle: 'Occupancy at Oct 31, 2026 · other figures year to date',
          cols: ['Community', 'Class', 'Market', 'Occupancy', 'Yr earlier', 'Renewal', 'Make-ready', 'Bad debt'],
          rows: [
            { cells: ['Harlow Yards', 'A', 'DFW', '88.9%', '—', '42.1%', '8.3', '1.6%'] },
            { cells: ['Memorial Pines', 'B', 'Houston', { v: '88.9%', tone: 'bad' }, '93.9%', '45.3%', { v: '17.3', tone: 'bad' }, '1.6%'] },
            { cells: ['Windsor Bend', 'B', 'Austin', { v: '90.2%', tone: 'bad' }, '95.8%', '44.5%', '8.7', '1.7%'] },
            { cells: ['Katy Crossing', 'C', 'Houston', { v: '90.9%', tone: 'bad' }, '96.6%', '36.4%', { v: '15.8', tone: 'bad' }, '1.7%'] },
            { cells: ['Oak Lawn Residences', 'B', 'DFW', { v: '92.5%', tone: 'bad' }, '95.0%', '45.5%', '8.8', '1.6%'] },
            { cells: ['Trinity Bend', 'B', 'DFW', { v: '92.5%', tone: 'bad' }, '94.7%', '43.0%', '9.0', '1.6%'] },
            { cells: ['Falls Lake Commons', 'B', 'Raleigh', { v: '92.9%', tone: 'bad' }, '96.9%', '45.5%', '9.2', '1.7%'] },
            { cells: ['Pecan Grove', 'B', 'Austin', { v: '93.1%', tone: 'bad' }, '95.7%', '47.0%', '8.2', '1.7%'] },
          ],
        },
        {
          type: 'barsH',
          title: 'Make-ready days, by community',
          subtitle: 'Year to date · 12 highest',
          xFormat: 'num',
          rows: [
            { k: 'Bellaire Commons', v: 17.6, highlight: true, show: '17.6' },
            { k: 'Stone Oak Terrace', v: 17.3, highlight: true, show: '17.3' },
            { k: 'Riverside Flats', v: 17.3, highlight: true, show: '17.3' },
            { k: 'Memorial Pines', v: 17.3, highlight: true, show: '17.3' },
            { k: 'Heights Station', v: 16.9, highlight: true, show: '16.9' },
            { k: 'Katy Crossing', v: 15.8, highlight: true, show: '15.8' },
            { k: 'Falls Lake Commons', v: 9.2, show: '9.2' },
            { k: 'Maple Court', v: 9.1, show: '9.1' },
            { k: 'Trinity Bend', v: 9.0, show: '9.0' },
            { k: 'Durant Station', v: 8.9, show: '8.9' },
            { k: 'Crabtree Hill', v: 8.8, show: '8.8' },
            { k: 'Oak Lawn Residences', v: 8.8, show: '8.8' },
          ],
        },
      ],
    },
    {
      name: 'NOI & Operations',
      title: 'NOI vs Budget',
      period: 'YTD October 2026',
      slicers: [
        { label: 'Period', options: ['Oct 2026'] },
        { label: 'Market', options: ['All'] },
        { label: 'Property', options: ['All'] },
      ],
      visuals: [
        {
          type: 'kpis',
          items: [
            { label: 'NOI · YTD', value: '$66.8M', delta: { text: '-$3.7M vs budget (-5.2%)', good: false } },
            { label: 'Revenue · YTD', value: '$101.3M', delta: { text: '-$3.0M vs budget (-2.9%)', good: false } },
            { label: 'Operating expenses · YTD', value: '$34.5M', delta: { text: '+$668K vs budget (+2.0%)', good: false } },
            { label: 'Concessions · YTD', value: '$2.2M', delta: { text: '+$1.1M vs budget (+103.0%)', good: false } },
            { label: 'Bad debt · YTD', value: '$2.0M', sub: '2.0% of rent · PY 1.6%' },
            { label: 'Insurance · YTD', value: '$2.9M', delta: { text: '+$388K vs budget (+15.3%)', good: false } },
          ],
        },
        {
          type: 'waterfallV',
          title: 'NOI: budget to actual',
          subtitle: 'Year to date · variance by driver',
          yFormat: 'usd',
          bars: [
            { k: 'Budget NOI', kind: 'total', value: 70.4e6 },
            { k: 'Rent', kind: 'down', value: 1.2e6 },
            { k: 'Vacancy', kind: 'up', value: 0.39e6 },
            { k: 'Concess.', kind: 'down', value: 1.1e6 },
            { k: 'Bad debt', kind: 'down', value: 1.1e6 },
            { k: 'Other inc.', kind: 'down', value: 0.16e6 },
            { k: 'Make-rdy', kind: 'down', value: 0.29e6 },
            { k: 'Utilities', kind: 'down', value: 0.301e6 },
            { k: 'Insurance', kind: 'down', value: 0.388e6 },
            { k: 'Other exp.', kind: 'up', value: 0.05e6 },
            { k: 'Actual NOI', kind: 'total', value: 66.8e6 },
          ],
        },
        {
          type: 'clusteredColumn',
          title: 'NOI by month, actual vs budget',
          subtitle: 'All communities',
          labels: M25,
          yFormat: 'usd',
          series: [
            { name: 'Actual', color: 'violet', points: seg(6.5e6, 6.7e6, 22, 0.2e6) },
            { name: 'Budget', color: 'slate', points: seg(6.6e6, 7.0e6, 22, 0.15e6) },
          ],
        },
        {
          type: 'matrix',
          title: 'Operating statement by driver',
          subtitle: 'Year to date · deductions and expenses negative',
          cols: ['Driver', 'Actual', 'Budget', 'Variance', 'Var %', 'PY'],
          rows: [
            { cells: ['Rent levels', '$108.2M', '$109.3M', { v: '-$1.2M', tone: 'bad' }, '-1.1%', '$102.4M'] },
            { cells: ['Vacancy', '-$7.5M', '-$7.9M', { v: '+$390K', tone: 'good' }, '+4.9%', '-$9.1M'] },
            { cells: ['Concessions', '-$2.2M', '-$1.1M', { v: '-$1.1M', tone: 'bad' }, '-103.0%', '-$1.8M'] },
            { cells: ['Bad debt', '-$2.0M', '-$893K', { v: '-$1.1M', tone: 'bad' }, '-119.1%', '-$1.5M'] },
            { cells: ['Other income', '$4.8M', '$4.9M', { v: '-$16K', tone: 'bad' }, '-0.3%', '$4.4M'] },
            { cells: ['Make-ready', '-$3.7M', '-$3.7M', { v: '-$29K', tone: 'bad' }, '-0.8%', '-$2.8M'] },
            { cells: ['Utilities', '-$4.3M', '-$4.0M', { v: '-$301K', tone: 'bad' }, '-7.5%', '-$3.6M'] },
            { cells: ['Insurance', '-$2.9M', '-$2.5M', { v: '-$388K', tone: 'bad' }, '-15.3%', '-$2.2M'] },
            { cells: ['NOI', '$66.8M', '$70.4M', { v: '-$3.7M', tone: 'bad' }, '-5.2%', '$64.1M'], strong: true },
          ],
        },
        {
          type: 'barsH',
          title: 'Bad debt, by community',
          subtitle: 'Year to date · % of rent charged · 10 highest',
          xFormat: 'pct',
          rows: [
            { k: 'Maple Court', v: 9.1, highlight: true, show: '9.1%' },
            { k: 'Riverside Flats', v: 8.8, highlight: true, show: '8.8%' },
            { k: 'Katy Crossing', v: 1.7, show: '1.7%' },
            { k: 'Windsor Bend', v: 1.7, show: '1.7%' },
            { k: 'Mission Park', v: 1.7, show: '1.7%' },
            { k: 'Heights Station', v: 1.7, show: '1.7%' },
            { k: 'Falls Lake Commons', v: 1.7, show: '1.7%' },
            { k: 'Pecan Grove', v: 1.6, show: '1.6%' },
            { k: 'Barton Hollow', v: 1.6, show: '1.6%' },
            { k: 'Oak Lawn Residences', v: 1.6, show: '1.6%' },
          ],
        },
      ],
    },
  ],
};

export const caseDashboards: Record<string, DashboardSpec> = {
  'dtc-cac-ltv': dtc,
  'saas-arr-retention': saas,
  'revenue-cycle': revcycle,
  'trucking-lanes-fleet': trucking,
  'multifamily-noi': multifamily,
};
