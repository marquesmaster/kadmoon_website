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

const M12 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const K = 1000;

// ===========================================================================
// Case 01 · CFO Board Pack
// ===========================================================================

const boardpack: DashboardSpec = {
  caseLabel: 'Case 01 · CFO Board Pack',
  pages: [
    {
      name: 'Executive Summary',
      title: 'Executive Summary',
      period: 'YTD October 2026',
      slicers: [
        { label: 'Period', options: ['YTD Oct 2026'] },
        { label: 'Entity', options: ['All entities'] },
        { label: 'Compare', options: ['Prior year · Budget'] },
      ],
      visuals: [
        {
          type: 'kpis',
          items: [
            { label: 'Net revenue', value: '$164.2M', delta: { text: '+5.8% vs PY', good: true }, sub: '-1.9% vs Budget' },
            { label: 'Gross margin', value: '25.4%', delta: { text: '-2.7 pts vs PY', good: false }, sub: '-2.9 pts vs Bud' },
            { label: 'EBITDA', value: '$4.5M', delta: { text: '-48% vs PY', good: false }, sub: '-49% vs Bud' },
            { label: 'EBITDA margin', value: '2.7%', sub: 'PY 5.6% · Bud 5.2%' },
            { label: 'Net income', value: '$158K', sub: 'PY $3.8M · Bud $4.0M' },
            { label: 'Cash conversion cycle', value: '87 days', delta: { text: '+22 days vs Oct 2025', good: false } },
          ],
        },
        {
          type: 'clusteredColumn',
          title: 'EBITDA by month',
          subtitle: '2026 actual vs 2025 actual and 2026 budget · $',
          labels: M12,
          yFormat: 'usd',
          series: [
            { name: '2026 actual', color: 'violet', points: [120 * K, -120 * K, 700 * K, 750 * K, 350 * K, 420 * K, -480 * K, 650 * K, 600 * K, 1200 * K, 0, 0] },
            { name: '2025 actual', color: 'slate', points: [150 * K, 60 * K, 780 * K, 820 * K, 900 * K, 950 * K, 1250 * K, 760 * K, 1400 * K, 1600 * K, 620 * K, 860 * K] },
          ],
          line: { name: '2026 budget', color: 'grape', points: [200 * K, 110 * K, 840 * K, 880 * K, 950 * K, 1000 * K, 1300 * K, 800 * K, 1450 * K, 1150 * K, 700 * K, 900 * K] },
        },
        {
          type: 'waterfallV',
          title: 'EBITDA bridge: YTD 2025 → YTD 2026',
          subtitle: 'What moved EBITDA · $',
          yFormat: 'usd',
          bars: [
            { k: 'YTD 2025', kind: 'total', value: 8.7e6 },
            { k: 'Product margin', kind: 'up', value: 1.1e6 },
            { k: 'Freight & fuel', kind: 'down', value: 1.9e6 },
            { k: 'Inventory', kind: 'down', value: 0.985e6 },
            { k: 'People', kind: 'down', value: 1.6e6 },
            { k: 'Other opex', kind: 'down', value: 0.792e6 },
            { k: 'YTD 2026', kind: 'total', value: 4.5e6 },
          ],
        },
        {
          type: 'matrix',
          span: 2,
          title: 'Performance by entity',
          subtitle: 'YTD Oct 2026 · variance vs budget and prior year',
          cols: ['Entity', 'Net revenue', 'vs Bud', 'vs PY', 'GM %', 'EBITDA', 'EBITDA %', 'vs Bud'],
          rows: [
            { cells: ['Columbus', '$99.2M', { v: '-1.7%', tone: 'bad' }, { v: '+5.5%', tone: 'good' }, '25.2%', '$2.91M', '2.9%', { v: '-$1.85M', tone: 'bad' }] },
            { cells: ['Dallas', '$48.0M', { v: '+6.9%', tone: 'good' }, { v: '+15.9%', tone: 'good' }, '26.6%', '$3.28M', '6.8%', { v: '-$494K', tone: 'bad' }] },
            { cells: ['Reno', '$17.0M', { v: '-21.0%', tone: 'bad' }, { v: '-13.9%', tone: 'bad' }, '23.2%', { v: '-$1.70M', tone: 'bad' }, '-10.0%', { v: '-$1.94M', tone: 'bad' }] },
            { cells: ['Consolidated', '$164.2M', { v: '-1.9%', tone: 'bad' }, { v: '+5.8%', tone: 'good' }, '25.4%', '$4.49M', '2.7%', { v: '-$4.28M', tone: 'bad' }], strong: true },
          ],
        },
        {
          type: 'notes',
          span: 2,
          title: 'Key messages for the board',
          items: [
            'Revenue grew 5.8% but EBITDA fell 48%: margin, not volume, is the issue.',
            'Freight and fuel cost $1.9M more than last year; the fuel surcharge alone is $2.5M vs $992K.',
            'Cobalt Ridge West (Reno) is 21% below budget after losing its largest account in March.',
            'Working capital absorbed cash: the revolver rose from $6.0M to $16.5M in twelve months.',
            'The full-year EBITDA forecast is now $4.7M against a $10.2M budget.',
          ],
        },
      ],
    },
    {
      name: 'P&L vs Budget & PY',
      title: 'P&L vs Budget & Prior Year',
      period: 'YTD October 2026',
      slicers: [
        { label: 'Period', options: ['YTD Oct 2026'] },
        { label: 'Entity', options: ['All entities'] },
      ],
      visuals: [
        {
          type: 'matrix',
          span: 2,
          title: 'Income statement',
          subtitle: 'YTD · actual vs budget and prior year · $M',
          cols: ['Line', 'Actual', 'Budget', 'Variance', 'Prior year'],
          rows: [
            { cells: ['Net revenue', '164.2', '167.4', { v: '-3.2', tone: 'bad' }, '155.2'] },
            { cells: ['Cost of sales', '-122.5', '-120.0', { v: '-2.5', tone: 'bad' }, '-111.6'] },
            { cells: ['Gross profit', '41.7', '47.4', { v: '-5.7', tone: 'bad' }, '43.6'], strong: true },
            { cells: ['Operating expenses', '-37.2', '-38.6', { v: '+1.4', tone: 'good' }, '-34.9'] },
            { cells: ['EBITDA', '4.49', '8.77', { v: '-4.28', tone: 'bad' }, '8.71'], strong: true },
            { cells: ['D&A, interest, tax', '-4.33', '-4.72', { v: '+0.39', tone: 'good' }, '-4.92'] },
            { cells: ['Net income', '0.16', '4.05', { v: '-3.89', tone: 'bad' }, '3.79'], strong: true },
          ],
        },
        {
          type: 'multiLine',
          title: 'Gross margin % by month',
          subtitle: 'Actual vs budget',
          labels: M12,
          yFormat: 'pct',
          series: [
            { name: 'Actual', color: 'violet', points: seg(28.2, 25.0, 10, 0.6).concat([25.2, 25.4]), endLabel: 'Actual 25.4%' },
            { name: 'Budget', color: 'slate', points: seg(28.3, 28.3, 12, 0), dashed: true, endLabel: 'Budget 28.3%' },
          ],
        },
        {
          type: 'divergingBarsH',
          title: 'Top account variances vs budget',
          subtitle: 'YTD · favorable right, unfavorable left · $M',
          xFormat: 'usd',
          rows: [
            { k: 'Product sales', v: -3.27e6 },
            { k: 'Outbound freight & fuel', v: -1.81e6 },
            { k: 'Inventory costs', v: -0.835e6 },
            { k: 'Returns & discounts', v: -0.42e6 },
            { k: 'Other operating expenses', v: -0.33e6 },
            { k: 'People costs', v: 1.86e6 },
          ],
        },
      ],
    },
    {
      name: 'Balance Sheet & Liquidity',
      title: 'Balance Sheet & Liquidity',
      period: 'As of October 31, 2026',
      slicers: [
        { label: 'Period', options: ['Oct 2026'] },
        { label: 'Entity', options: ['All entities'] },
      ],
      visuals: [
        {
          type: 'kpis',
          items: [
            { label: 'Cash', value: '$3.2M', sub: 'a year earlier $4.1M' },
            { label: 'Revolver drawn', value: '$16.5M', delta: { text: '+$10.5M vs Oct 2025', good: false } },
            { label: 'Net debt', value: '$27.3M', sub: 'a year earlier $16.9M' },
            { label: 'DSO', value: '55.9 days', delta: { text: '+9.4 vs PY', good: false } },
            { label: 'DIO', value: '74.4 days', delta: { text: '+6.1 vs PY', good: false } },
            { label: 'DPO', value: '43.2 days', delta: { text: '-6.3 vs PY', good: false } },
          ],
        },
        {
          type: 'multiLine',
          title: 'Receivables, inventory and payables',
          subtitle: 'Month-end balances · $M',
          labels: M12,
          yFormat: 'usd',
          series: [
            { name: 'Receivables', color: 'violet', points: seg(22e6, 28e6, 12, 0.6e6), endLabel: 'AR $28M' },
            { name: 'Inventory', color: 'teal', points: seg(30e6, 33e6, 12, 0.5e6), endLabel: 'Inv $33M' },
            { name: 'Payables', color: 'amber', points: seg(18e6, 17e6, 12, 0.5e6), endLabel: 'AP $17M' },
          ],
        },
        {
          type: 'multiLine',
          title: 'Daily revolver balance',
          subtitle: 'End-of-day drawn · $M',
          labels: M12,
          yFormat: 'usd',
          series: [{ name: 'Revolver', color: 'violet', points: seg(6e6, 16.5e6, 12, 0.6e6), endLabel: 'Revolver $16.5M' }],
        },
        {
          type: 'matrix',
          title: 'Condensed consolidated balance sheet',
          subtitle: '$M · vs the same date last year',
          cols: ['Line', 'Oct 2026', 'Oct 2025'],
          rows: [
            { cells: ['Cash', '3.2', '4.1'] },
            { cells: ['Accounts receivable', '28.0', '22.3'] },
            { cells: ['Inventory, net', '33.0', '30.1'] },
            { cells: ['Accounts payable', '17.0', '18.4'] },
            { cells: ['Revolver', '16.5', '6.0'] },
            { cells: ['Term loan', '14.0', '15.0'] },
            { cells: ['Net debt', '27.3', '16.9'], strong: true },
          ],
        },
      ],
    },
  ],
};

// ===========================================================================
// Case 02 · Budget vs Actual & Forecast
// ===========================================================================

const budget: DashboardSpec = {
  caseLabel: 'Case 02 · Budget vs Actual & Forecast',
  pages: [
    {
      name: 'Variance Overview',
      title: 'Variance Overview',
      period: 'YTD October 2026',
      slicers: [
        { label: 'Period', options: ['YTD Oct 2026'] },
        { label: 'Version', options: ['Budget 2026'] },
        { label: 'Entity', options: ['All'] },
      ],
      visuals: [
        {
          type: 'kpis',
          items: [
            { label: 'Revenue vs budget', value: '-$3.2M', delta: { text: '-1.9%', good: false } },
            { label: 'Gross profit vs budget', value: '-$5.7M', delta: { text: '-12.0%', good: false } },
            { label: 'Opex vs budget', value: '+$1.4M', delta: { text: 'favorable', good: true } },
            { label: 'EBITDA vs budget', value: '-$4.28M', delta: { text: '-49%', good: false } },
            { label: 'Headcount vs plan', value: '378 / 404', sub: '26 open positions' },
            { label: 'FY EBITDA forecast (9+3)', value: '$4.7M', sub: 'budget $10.2M' },
          ],
        },
        {
          type: 'divergingBarsH',
          title: 'EBITDA variance by driver vs budget',
          subtitle: 'YTD · favorable right, unfavorable left · $M',
          xFormat: 'usd',
          rows: [
            { k: 'Product sales', v: -3.27e6 },
            { k: 'Outbound freight & fuel', v: -1.81e6 },
            { k: 'Inventory costs', v: -0.835e6 },
            { k: 'Returns & discounts', v: -0.31e6 },
            { k: 'Other operating expenses', v: -0.28e6 },
            { k: 'People', v: 1.86e6 },
          ],
        },
        {
          type: 'clusteredColumn',
          title: 'Monthly EBITDA, actual vs budget',
          subtitle: '$',
          labels: M12,
          yFormat: 'usd',
          series: [
            { name: 'Actual', color: 'violet', points: [120 * K, -120 * K, 700 * K, 750 * K, 350 * K, 420 * K, -480 * K, 650 * K, 600 * K, 1200 * K, 0, 0] },
            { name: 'Budget', color: 'slate', points: [200 * K, 110 * K, 840 * K, 880 * K, 950 * K, 1000 * K, 1300 * K, 800 * K, 1450 * K, 1150 * K, 700 * K, 900 * K] },
          ],
        },
        {
          type: 'matrix',
          title: 'EBITDA variance by entity and P&L group',
          subtitle: 'YTD vs budget · favorable +',
          cols: ['P&L group', 'Columbus', 'Dallas', 'Reno', 'Total'],
          rows: [
            { cells: ['Revenue', { v: '-$1.1M', tone: 'bad' }, { v: '+$0.6M', tone: 'good' }, { v: '-$2.7M', tone: 'bad' }, { v: '-$3.2M', tone: 'bad' }] },
            { cells: ['Gross margin', { v: '-$2.1M', tone: 'bad' }, { v: '-$0.3M', tone: 'bad' }, { v: '-$1.4M', tone: 'bad' }, { v: '-$3.8M', tone: 'bad' }] },
            { cells: ['People', { v: '+$0.9M', tone: 'good' }, { v: '+$0.4M', tone: 'good' }, { v: '+$0.6M', tone: 'good' }, { v: '+$1.86M', tone: 'good' }] },
            { cells: ['Other opex', { v: '-$0.6M', tone: 'bad' }, { v: '-$0.2M', tone: 'bad' }, { v: '-$0.1M', tone: 'bad' }, { v: '-$0.9M', tone: 'bad' }] },
            { cells: ['EBITDA', { v: '-$1.85M', tone: 'bad' }, { v: '-$0.49M', tone: 'bad' }, { v: '-$1.94M', tone: 'bad' }, { v: '-$4.28M', tone: 'bad' }], strong: true },
          ],
        },
      ],
    },
    {
      name: 'Forecast 2026',
      title: 'Forecast 2026',
      period: 'YTD October 2026',
      slicers: [{ label: 'Period', options: ['Oct 2026'] }],
      visuals: [
        {
          type: 'kpis',
          cols: 3,
          items: [
            { label: 'FY EBITDA · 9+3 forecast', value: '$4.7M', sub: 'budget $10.2M' },
            { label: 'Change since 6+6 forecast', value: '-$2.0M', delta: { text: 'from $6.7M', good: false } },
            { label: 'October accuracy', value: '+22%', sub: 'EBITDA vs forecast · revenue +3.7%' },
          ],
        },
        {
          type: 'clusteredColumn',
          title: 'Full-year EBITDA by version',
          subtitle: '$M',
          labels: ['Budget', 'FC 3+9', 'FC 6+6', 'FC 9+3'],
          yFormat: 'usd',
          showValues: true,
          series: [{ name: 'FY EBITDA', color: 'violet', points: [10.2e6, 10.2e6, 6.7e6, 4.7e6] }],
        },
        {
          type: 'multiLine',
          title: 'Cumulative EBITDA by version',
          subtitle: '$M, through the year',
          labels: M12,
          yFormat: 'usd',
          series: [
            { name: 'Budget', color: 'slate', points: curve(0.8e6, 10.2e6, 12), dashed: true, endLabel: 'Budget $10.2M' },
            { name: 'FC 6+6', color: 'teal', points: curve(0.6e6, 6.7e6, 12), endLabel: 'FC 6+6 $6.7M' },
            { name: 'FC 9+3', color: 'violet', points: curve(0.5e6, 4.7e6, 12), endLabel: 'FC 9+3 $4.7M' },
          ],
        },
        {
          type: 'notes',
          title: 'What changed between versions',
          items: [
            'The 3+9 forecast kept the budget freight assumptions and missed the fuel increase that started in April.',
            '6+6 cut the full-year landing to $6.7M after the Q2 margin miss.',
            '9+3 reflects the lost Reno account and sets the year at $4.7M.',
          ],
        },
      ],
    },
  ],
};

// ===========================================================================
// Case 04 · Cash & Working Capital
// ===========================================================================

const arBuckets = (r: number) => seg(6.0e6, 9.3e6, 22, 0.1e6).map((t) => Math.round(t * r));

const cash: DashboardSpec = {
  caseLabel: 'Case 04 · Cash & Working Capital',
  pages: [
    {
      name: 'Working Capital & Receivables',
      title: 'Working Capital & Receivables',
      period: 'October 31, 2026',
      slicers: [
        { label: 'Period', options: ['Oct 2026'] },
        { label: 'Entity', options: ['All'] },
        { label: 'Segment', options: ['All'] },
      ],
      visuals: [
        {
          type: 'kpis',
          items: [
            { label: 'Cash conversion cycle', value: '87 days', delta: { text: '+22 vs PY', good: false } },
            { label: 'DSO', value: '55.9 days', delta: { text: '+9.4 vs PY', good: false } },
            { label: 'DIO', value: '74.4 days', delta: { text: '+6.1 vs PY', good: false } },
            { label: 'DPO', value: '43.2 days', delta: { text: '-6.3 vs PY', good: false } },
            { label: 'Revolver drawn', value: '$16.5M', delta: { text: '+$10.5M vs PY', good: false } },
            { label: 'Receivables past due', value: '$9.3M', delta: { text: 'from $4.2M', good: false } },
          ],
        },
        {
          type: 'divergingColumn',
          title: 'A/R by age, month end',
          subtitle: 'Current → 90+ · $',
          labels: M25,
          yFormat: 'usd',
          series: [
            { name: 'Current', color: 'lilac', points: arBuckets(0.72) },
            { name: '1–30', color: 'violet2', points: arBuckets(0.13) },
            { name: '31–60', color: 'violet', points: arBuckets(0.08) },
            { name: '61–90', color: 'grape', points: arBuckets(0.04) },
            { name: '90+', color: 'bad', points: arBuckets(0.03) },
          ],
        },
        {
          type: 'multiLine',
          title: 'Days to pay, by customer segment',
          subtitle: 'Invoice-weighted · 2026 vs 2025',
          labels: M25,
          yFormat: 'num',
          series: [
            { name: 'Healthcare', color: 'violet', points: seg(49, 66, 22, 1.2), endLabel: 'Healthcare 66' },
            { name: 'All customers', color: 'slate', points: seg(46, 52, 22, 0.8), endLabel: 'All 52' },
          ],
        },
        {
          type: 'multiLine',
          title: 'Cash conversion cycle',
          subtitle: 'DSO + DIO − DPO · days',
          labels: M25,
          yFormat: 'num',
          series: [{ name: 'CCC', color: 'violet', points: seg(65, 87, 22, 1.5), endLabel: 'CCC 87' }],
        },
      ],
    },
    {
      name: '13-Week Cash Forecast',
      title: '13-Week Cash Forecast',
      period: 'Week of October 27, 2026',
      slicers: [
        { label: 'Snapshot', options: ['Oct 27 2026'] },
        { label: 'Category', options: ['All'] },
      ],
      visuals: [
        {
          type: 'kpis',
          cols: 3,
          items: [
            { label: 'Forecast receipts bias · wk 1–4', value: '+14.5%', delta: { text: 'Q3 over-stated', good: false } },
            { label: 'Merchandise payments bias', value: '-16%', sub: 'under-stated' },
            { label: 'Revolver at week 13', value: '$18.1M', sub: 'projected' },
          ],
        },
        {
          type: 'multiLine',
          title: 'Weekly receipts: forecast vs actual',
          subtitle: 'Last 13 weeks · $M',
          labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12', 'W13'],
          yFormat: 'usd',
          series: [
            { name: 'Forecast', color: 'slate', points: seg(3.6e6, 3.9e6, 13, 0.2e6), dashed: true, endLabel: 'Forecast' },
            { name: 'Actual', color: 'violet', points: seg(3.2e6, 3.4e6, 13, 0.3e6), endLabel: 'Actual' },
          ],
        },
        {
          type: 'clusteredColumn',
          title: 'Next 13 weeks: receipts vs payments',
          subtitle: '$M',
          labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12', 'W13'],
          yFormat: 'usd',
          series: [
            { name: 'Receipts', color: 'violet', points: seg(3.4e6, 3.6e6, 13, 0.25e6) },
            { name: 'Payments', color: 'slate', points: seg(3.6e6, 3.7e6, 13, 0.2e6) },
          ],
        },
        {
          type: 'notes',
          title: 'Forecast notes',
          items: [
            'Weeks 1–4 over-stated customer receipts by +12.7% in Q2 and +14.5% in Q3 (Q1: -1.7%).',
            'Merchandise payments were under-stated by about 16%.',
            'Summit Ridge Health moved from ~49 to 103 days on Net 45 terms from January 2026.',
          ],
        },
      ],
    },
  ],
};

// ===========================================================================
// Case 06 · Month-End Close
// ===========================================================================

const monthend: DashboardSpec = {
  caseLabel: 'Case 06 · Month-End Close',
  pages: [
    {
      name: 'Close Performance',
      title: 'Close Performance',
      period: 'YTD October 2026',
      slicers: [
        { label: 'Period', options: ['2023–2026'] },
        { label: 'Entity', options: ['All'] },
      ],
      visuals: [
        {
          type: 'kpis',
          items: [
            { label: 'Days to close', value: '11.6', delta: { text: '+1.7 vs 2025', good: false }, sub: 'target 5' },
            { label: 'On-time task %', value: '28%', delta: { text: '-39 pts vs 2023', good: false } },
            { label: 'Average days late', value: '3.1', delta: { text: 'per late task', good: false } },
            { label: 'Post-close entries · YTD', value: '174', delta: { text: 'from 91', good: false } },
            { label: 'Post-close value · YTD', value: '$4.1M', sub: 'absolute' },
            { label: 'Consolidated sign-off', value: 'BD 12', sub: 'October close' },
          ],
        },
        {
          type: 'clusteredColumn',
          title: 'Days to close, by year',
          subtitle: 'Business day of consolidated sign-off',
          labels: ['2023', '2024', '2025', '2026'],
          yFormat: 'num',
          showValues: true,
          target: { v: 5, label: 'Target BD5' },
          series: [{ name: 'Days to close', color: 'violet', points: [8.2, 8.8, 9.9, 11.6] }],
        },
        {
          type: 'clusteredColumn',
          title: 'Entries posted after close, by year',
          subtitle: 'Distinct journal entries after statements issued',
          labels: ['2023', '2024', '2025', '2026 YTD'],
          yFormat: 'num',
          showValues: true,
          series: [{ name: 'Post-close entries', color: 'violet', points: [35, 38, 91, 174], colors: ['slate', 'slate', 'amber', 'bad'] }],
        },
        {
          type: 'barsH',
          title: 'Slowest tasks, 2026',
          subtitle: 'Average business days late',
          xFormat: 'num',
          rows: [
            { k: 'Inventory recon · Reno', v: 5.2, highlight: true, show: '5.2' },
            { k: 'Intercompany recon · Columbus', v: 3.7, show: '3.7' },
            { k: 'Intercompany recon · Dallas', v: 3.5, show: '3.5' },
            { k: 'Intercompany recon · Reno', v: 3.3, show: '3.3' },
            { k: 'Accruals · Reno', v: 2.6, show: '2.6' },
            { k: 'Bank recon · Columbus', v: 1.9, show: '1.9' },
          ],
        },
      ],
    },
    {
      name: 'October Close Calendar',
      title: 'October 2026 Close Calendar',
      period: 'Reno · slowest entity',
      slicers: [
        { label: 'Period', options: ['Oct 2026'] },
        { label: 'Entity', options: ['Reno'] },
      ],
      visuals: [
        {
          type: 'kpis',
          cols: 3,
          items: [
            { label: 'Entity statements issued', value: 'BD 11', sub: 'Columbus BD9 · Dallas BD9' },
            { label: 'Consolidated sign-off', value: 'BD 12', sub: 'target BD5' },
            { label: 'Tasks late', value: '12 of 28', sub: 'Reno entity' },
          ],
        },
        {
          type: 'matrix',
          span: 2,
          title: 'Close tasks — Reno, October 2026',
          subtitle: 'Due vs completed business day',
          cols: ['Task', 'Owner', 'Due BD', 'Done BD', 'Days late', 'Status'],
          rows: [
            { cells: ['Cash & bank reconciliation', 'Treasury', '3', '4', { v: '1', tone: 'bad' }, 'Late'] },
            { cells: ['AR subledger close', 'AR', '4', '7', { v: '3', tone: 'bad' }, 'Late'] },
            { cells: ['Inventory subledger-to-GL', 'Inventory', '5', '10', { v: '5', tone: 'bad' }, 'Late'] },
            { cells: ['Accruals & prepaids', 'GL', '6', '8', { v: '2', tone: 'bad' }, 'Late'] },
            { cells: ['Intercompany reconciliation', 'GL', '7', '10', { v: '3', tone: 'bad' }, 'Late'] },
            { cells: ['Entity statements issued', 'Controller', '8', '11', { v: '3', tone: 'bad' }, 'Late'] },
            { cells: ['Consolidated sign-off (CON-03)', 'Group', '9', '12', { v: '3', tone: 'bad' }, 'Late'] },
          ],
        },
        {
          type: 'barsH',
          title: 'Workload by owner',
          subtitle: 'Late tasks this close',
          xFormat: 'num',
          rows: [
            { k: 'GL team', v: 6, highlight: true, show: '6' },
            { k: 'Inventory', v: 3, show: '3' },
            { k: 'AR', v: 2, show: '2' },
            { k: 'Treasury', v: 1, show: '1' },
          ],
        },
      ],
    },
  ],
};

// ===========================================================================
// Case 16 · Field Service
// ===========================================================================

const fieldservice: DashboardSpec = {
  caseLabel: 'Case 16 · Field Service Performance',
  pages: [
    {
      name: 'Technician Performance',
      title: 'Technician Performance & Replacements',
      period: 'YTD October 2026',
      slicers: [
        { label: 'Period', options: ['Oct 2026'] },
        { label: 'Branch', options: ['All'] },
        { label: 'Inventory system', options: ['All'] },
        { label: 'Trade', options: ['All'] },
      ],
      visuals: [
        {
          type: 'kpis',
          items: [
            { label: 'Revenue · YTD', value: '$47.2M', delta: { text: '-3.2% vs PY', good: false } },
            { label: 'First-time fix · YTD', value: '84.5%', delta: { text: '-2.8 pts vs PY', good: false } },
            { label: 'Return trips · YTD', value: '7,930', delta: { text: '+18% vs PY', good: false } },
            { label: 'Average service ticket', value: '$493', sub: 'service calls · PY $493' },
            { label: 'Technician utilization · YTD', value: '60.4%', delta: { text: '-2.1 pts vs PY', good: false } },
            { label: 'Replacement close rate · YTD', value: '37.2%', delta: { text: '-1.8 pts vs PY', good: false }, sub: '$17.0M sold' },
          ],
        },
        {
          type: 'multiLine',
          title: 'First-time fix rate by month',
          subtitle: 'Branches on the new inventory system (March 2026) vs legacy',
          labels: M24,
          yFormat: 'pct',
          series: [
            { name: 'Legacy', color: 'slate', points: seg(87, 86.8, 31, 0.6), endLabel: 'Legacy 86.8%' },
            { name: 'New system', color: 'violet', points: seg(87, 86, 14, 0.6).concat(seg(73, 72.9, 17, 0.6)), endLabel: 'New system 72.9%' },
          ],
        },
        {
          type: 'clusteredBarsH',
          title: 'First-time fix rate by branch',
          subtitle: 'Year to date vs same months last year',
          xFormat: 'pct',
          cats: ['Mesa', 'Las Vegas South', 'Albuquerque', 'Scottsdale', 'Phoenix East', 'Las Vegas North', 'Henderson', 'Phoenix West', 'Tucson'],
          series: [
            { name: '2026', color: 'violet', values: [76, 77, 85, 86, 86, 87, 88, 88, 89] },
            { name: '2025', color: 'slate', values: [87, 87, 85, 86, 86, 87, 88, 88, 89] },
          ],
        },
        {
          type: 'barsH',
          title: 'Replacement close rate, by comfort advisor',
          subtitle: 'Year to date · 12 lowest of 18 advisors',
          xFormat: 'pct',
          rows: [
            { k: 'Alex Santos (Mesa)', v: 24.2, highlight: true, show: '24%' },
            { k: 'Alex Castro (LV North)', v: 27, highlight: true, show: '27%' },
            { k: 'Hugo Lopez (Henderson)', v: 30, highlight: true, show: '30%' },
            { k: 'Tony Castro (Albuquerque)', v: 33, show: '33%' },
            { k: 'Eli Flores (Henderson)', v: 33, show: '33%' },
            { k: 'Ray Zamora (LV North)', v: 34, show: '34%' },
            { k: 'Ray Bennett (LV South)', v: 35, show: '35%' },
            { k: 'Andre Flores (Phoenix East)', v: 35, show: '35%' },
            { k: 'Isaac Diaz (Tucson)', v: 36, show: '36%' },
            { k: 'Derek Flores (Phoenix West)', v: 40, show: '40%' },
            { k: 'Pete Ellis (Phoenix East)', v: 41, show: '41%' },
          ],
        },
      ],
    },
    {
      name: 'Demand & Memberships',
      title: 'Demand, Booking & Memberships',
      period: 'YTD October 2026',
      slicers: [
        { label: 'Period', options: ['Oct 2026'] },
        { label: 'Branch', options: ['All'] },
        { label: 'Trade', options: ['All'] },
      ],
      visuals: [
        {
          type: 'kpis',
          items: [
            { label: 'Booking rate · YTD', value: '70.0%', delta: { text: '-8.1 pts vs PY', good: false } },
            { label: 'Abandon rate · July', value: '26.2%', delta: { text: 'heat wave', good: false } },
            { label: 'Replacement sales · YTD', value: '$17.0M', delta: { text: 'from $18.3M', good: false } },
            { label: 'Membership renewal rate', value: '60.7%', delta: { text: '-18.0 pts vs PY', good: false } },
            { label: 'Active members', value: '16,045', delta: { text: 'from 16,751', good: false } },
            { label: 'Member share of revenue', value: '42.1%', sub: 'members & plans' },
          ],
        },
        {
          type: 'multiLine',
          title: 'Booking rate by month',
          subtitle: 'Booked jobs ÷ inbound calls',
          labels: M25,
          yFormat: 'pct',
          series: [
            { name: '2026', color: 'violet', points: seg(78, 74, 6, 1).concat([56.2]).concat(seg(70, 70, 15, 1)), endLabel: '2026 70.0%' },
            { name: '2025', color: 'slate', points: seg(78, 78, 22, 1), dashed: true, endLabel: '2025 78.1%' },
          ],
        },
        {
          type: 'clusteredColumn',
          title: 'Inbound calls vs booked jobs',
          subtitle: 'Monthly',
          labels: M25,
          yFormat: 'num',
          series: [
            { name: 'Inbound calls', color: 'slate', points: seg(3200, 3600, 22, 180) },
            { name: 'Booked jobs', color: 'violet', points: seg(2500, 2520, 22, 150) },
          ],
        },
        {
          type: 'barsH',
          title: 'Membership renewal outcomes · YTD',
          subtitle: 'Share of memberships reaching renewal',
          xFormat: 'pct',
          rows: [
            { k: 'Renewed', v: 60.7, show: '60.7%' },
            { k: 'Payment failed', v: 18.6, highlight: true, show: '18.6%' },
            { k: 'Cancelled', v: 20.7, show: '20.7%' },
          ],
        },
      ],
    },
  ],
};

export const caseDashboards: Record<string, DashboardSpec> = {
  'executive-revenue-dashboard': boardpack,
  'finance-close-analytics': budget,
  'cash-working-capital': cash,
  'month-end-close': monthend,
  'field-service': fieldservice,
  'dtc-cac-ltv': dtc,
  'saas-arr-retention': saas,
  'revenue-cycle': revcycle,
  'trucking-lanes-fleet': trucking,
  'multifamily-noi': multifamily,
};

export const heroDashboard = boardpack;
