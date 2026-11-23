// ---------------------------------------------------------------------------
// Case studies. Representative structures of the Power BI and Microsoft-stack
// work we deliver. All clients are anonymized; figures are representative of the
// structure we ship, labeled as such everywhere they appear, and never
// presented as verified client results.
//
// Data can originate anywhere the business already runs: SQL Server, Dynamics
// 365, SAP, Oracle, NetSuite, Salesforce, Excel, SharePoint, or APIs. The
// analytics is delivered on the Microsoft stack (Power BI, Fabric, Azure) in
// the client's own tenant.
// ---------------------------------------------------------------------------

export type CaseMetric = {
  label: string;
  value: string;
  sub?: string;
};

export type CaseStudy = {
  slug: string;
  kind: 'analytics' | 'software';
  sector: string;
  title: string;
  summary: string;
  challenge: string;
  build: string;
  whatWeBuilt: string[];
  outcomes: string[];
  metrics: CaseMetric[];
  dataSources: string[];
  stack: string[];
  result?: string;
};

export const caseStudies: CaseStudy[] = [
  // ----- Power BI reporting ----------------------------------------------
  {
    slug: 'executive-revenue-dashboard',
    kind: 'analytics',
    sector: 'Leadership',
    title: 'Executive revenue and margin control tower',
    summary:
      'A leadership team moved its monthly board pack off hand-built spreadsheets into one governed Power BI model with revenue, margin, and cash in a single view.',
    challenge:
      'Every function arrived at the leadership meeting with its own numbers, built in rival spreadsheets, so half the meeting was spent reconciling figures instead of deciding anything.',
    build:
      'We modeled revenue, cost, and cash once from the ERP and billing system into a governed semantic model, then built an executive report where every number drills to the invoice or order behind it.',
    whatWeBuilt: [
      'A governed semantic model with one definition per measure.',
      'An executive dashboard for revenue, margin, cash, and the operating KPIs.',
      'Drill-through from every headline number to the record behind it.',
    ],
    outcomes: [
      'One set of numbers the whole leadership team trusts.',
      'The board pack produced from a report instead of rebuilt by hand.',
      'Meetings spent on decisions, not on reconciling figures.',
    ],
    metrics: [
      { label: 'Revenue', value: '$2.48M', sub: 'this month' },
      { label: 'Gross margin', value: '39.0%', sub: 'blended' },
      { label: 'Close to report', value: '2 days', sub: 'from 10' },
      { label: 'Sources unified', value: '5', sub: 'into one model' },
    ],
    dataSources: ['SQL Server', 'Dynamics 365 Finance', 'Billing system', 'Excel budgets'],
    stack: ['Power BI', 'Microsoft Fabric', 'Azure Data Factory', 'Semantic model'],
    result:
      'Revenue, margin, and cash became one governed view the leadership team opens daily, instead of a monthly reconstruction nobody fully trusted.',
  },
  {
    slug: 'finance-close-analytics',
    kind: 'analytics',
    sector: 'Finance',
    title: 'Budget versus actual and the monthly close',
    summary:
      'A finance team replaced a spreadsheet close with a Power BI model that ties budget, actual, and the operating P&L back to the general ledger.',
    challenge:
      'Budget versus actual lived in a workbook that broke every time the chart of accounts changed, so finance spent the first week of each month rebuilding it instead of explaining variances.',
    build:
      'We built a governed model over the ERP general ledger, mapped budgets and the account hierarchy once, and delivered a close dashboard with variance analysis down to the cost center.',
    whatWeBuilt: [
      'A governed P&L model tied to the general ledger.',
      'Budget versus actual with variance down to the cost center.',
      'A close checklist and a report that reconciles to finance.',
    ],
    outcomes: [
      'The close runs on a report, not a fragile workbook.',
      'Variances explained on day two, not day seven.',
      'One P&L finance and operations both read.',
    ],
    metrics: [
      { label: 'Close time', value: '3 days', sub: 'from 8' },
      { label: 'Variance to budget', value: '+2.1%', sub: '' },
      { label: 'Accounts modeled', value: 'Full COA', sub: 'hierarchy' },
      { label: 'Manual rework', value: 'Removed', sub: 'per cycle' },
    ],
    dataSources: ['Dynamics 365 Finance', 'SQL Server', 'Excel budgets', 'SharePoint'],
    stack: ['Power BI', 'Microsoft Fabric', 'Semantic model', 'Dataflows'],
    result:
      'The monthly close moved from a week of spreadsheet rebuilding to a governed report finance trusts and explains from.',
  },
  {
    slug: 'cash-working-capital',
    kind: 'analytics',
    sector: 'Finance',
    title: 'Cash, working capital, and AR aging in one view',
    summary:
      'A finance team brought cash position, receivables aging, and the working-capital cycle into one governed Power BI view, so collections and cash decisions run on current data instead of a stale spreadsheet.',
    challenge:
      'The AR aging report was a spreadsheet exported once a month, so by the time anyone worked the list it was out of date, and cash position lived in a separate workbook nobody fully trusted.',
    build:
      'We modeled open receivables and the ledger into a governed model, built the aging buckets and the DSO, DIO, DPO, and cash conversion cycle as measures defined once, and made every bucket drill to the invoices behind it.',
    whatWeBuilt: [
      'A governed model over open receivables and the general ledger.',
      'AR aging buckets with drill-through to the overdue invoices.',
      'DSO, DIO, DPO, and the cash conversion cycle as one definition each.',
    ],
    outcomes: [
      'Collections work a current list, not last month’s export.',
      'Cash and receivables read together, not in rival workbooks.',
      'Working capital managed on today’s position.',
    ],
    metrics: [
      { label: 'DSO', value: '44 days', sub: '' },
      { label: 'Cash conversion', value: '63 days', sub: 'DSO + DIO − DPO' },
      { label: 'AR past due', value: '7%', sub: 'of open' },
      { label: 'Aging', value: 'Live', sub: 'from monthly export' },
    ],
    dataSources: ['NetSuite', 'SQL Server', 'Excel', 'Billing system'],
    stack: ['Power BI', 'Microsoft Fabric', 'Semantic model', 'Dataflows'],
    result:
      'Cash position and AR aging became one live view the finance team manages working capital from, instead of a spreadsheet that was already out of date when it was made.',
  },
  {
    slug: 'month-end-close',
    kind: 'analytics',
    sector: 'Finance',
    title: 'The month-end close, tracked to a business-day target',
    summary:
      'A finance team put its month-end close on a Power BI model that tracks days to close against a business-day target, task completion, and post-close entries, so the close gets shorter and steadier.',
    challenge:
      'The close ran long and the team could not say why, because task status lived in a checklist, late entries lived in the ledger, and nobody had the two side by side to see where the time went.',
    build:
      'We modeled the close tasks and the ledger together, defined days to close against the business-day target, on-time task completion, and post-close entries as measures, and built a close dashboard the controller runs each cycle.',
    whatWeBuilt: [
      'A governed model joining close tasks to the general ledger.',
      'Days to close against a business-day target, tracked every cycle.',
      'On-time task completion and post-close entries in one view.',
    ],
    outcomes: [
      'The close gets shorter and steadier, cycle over cycle.',
      'Late tasks and post-close entries visible where they happen.',
      'The controller sees where the close actually spends its time.',
    ],
    metrics: [
      { label: 'Days to close', value: '5.5', sub: 'toward BD5 target' },
      { label: 'On-time tasks', value: 'Tracked', sub: 'per cycle' },
      { label: 'Post-close entries', value: 'Monitored', sub: 'by entity' },
      { label: 'Trend', value: 'Shorter', sub: 'over the year' },
    ],
    dataSources: ['Dynamics 365 Finance', 'SQL Server', 'Close checklist', 'SharePoint'],
    stack: ['Power BI', 'Microsoft Fabric', 'Semantic model'],
    result:
      'The close moved from a long cycle nobody could explain to a tracked process that gets shorter and steadier against its business-day target.',
  },
  {
    slug: 'sales-pipeline-analytics',
    kind: 'analytics',
    sector: 'Sales',
    title: 'Pipeline, win rate, and net revenue retention',
    summary:
      'A go-to-market team unified CRM and billing into one Power BI model for pipeline, win rate, and net revenue retention.',
    challenge:
      'Pipeline reports came out of the CRM, revenue out of billing, and the two never matched, so forecasting was an argument and renewals slipped through unseen.',
    build:
      'We joined CRM opportunities to billed revenue in a governed model, defined each sales measure once, and built a revenue dashboard the team runs its weekly review on.',
    whatWeBuilt: [
      'A model joining CRM pipeline to billed and recurring revenue.',
      'Win rate, sales cycle, and net revenue retention measures.',
      'A weekly review dashboard with drill-through to the account.',
    ],
    outcomes: [
      'Forecasting on one trusted model instead of two reports.',
      'Renewals and churn visible before they happen.',
      'The weekly review runs on live data, not exports.',
    ],
    metrics: [
      { label: 'Net retention', value: '112%', sub: 'trailing 12 mo' },
      { label: 'Win rate', value: '24%', sub: 'by stage' },
      { label: 'Forecast accuracy', value: '96%', sub: 'vs actuals' },
      { label: 'Systems joined', value: 'CRM + billing', sub: 'one model' },
    ],
    dataSources: ['Salesforce', 'Billing system', 'Dynamics 365 Sales', 'Excel targets'],
    stack: ['Power BI', 'Microsoft Fabric', 'Azure Data Factory', 'Semantic model'],
    result:
      'Pipeline and revenue finally reconciled in one model, so go-to-market decisions and the forecast ran on numbers the team believed.',
  },
  {
    slug: 'retail-margin-analytics',
    kind: 'analytics',
    sector: 'Retail',
    title: 'Sales and margin across channels and stores',
    summary:
      'A retailer brought point of sale, e-commerce, and inventory into one Power BI model for sales, margin, and sell-through by channel and store.',
    challenge:
      'Store, marketplace, and web sales were reported in three different tools, so nobody could see true margin by product once returns and fees were counted.',
    build:
      'We consolidated the sales channels and inventory into a governed model, modeled true margin after fees and returns, and built a merchandising dashboard by channel, category, and store.',
    whatWeBuilt: [
      'A model unifying POS, e-commerce, and inventory.',
      'True margin after fees, discounts, and returns.',
      'Sell-through and stock cover by channel, category, and store.',
    ],
    outcomes: [
      'One margin number across every channel.',
      'Buying and markdown decisions on real sell-through.',
      'Stock cover visible before a line runs out or piles up.',
    ],
    metrics: [
      { label: 'Channels unified', value: '3', sub: 'into one model' },
      { label: 'Gross margin', value: '44%', sub: 'after fees' },
      { label: 'Sell-through', value: 'Weekly', sub: 'by SKU' },
      { label: 'Report latency', value: 'Next day', sub: 'from weekly' },
    ],
    dataSources: ['POS system', 'E-commerce platform', 'Inventory system', 'Payment fees'],
    stack: ['Power BI', 'Microsoft Fabric', 'Dataflows', 'Semantic model'],
    result:
      'Merchandising decisions moved onto one governed view of sales and true margin, across every channel and store.',
  },
  {
    slug: 'power-bi-migration',
    kind: 'analytics',
    sector: 'BI modernization',
    title: 'Legacy BI and spreadsheet consolidation into Power BI',
    summary:
      'An organization consolidated a sprawl of legacy BI reports and spreadsheets into a single governed Power BI estate, with the old numbers reconciled.',
    challenge:
      'Reporting was split across an aging BI tool, dozens of spreadsheets, and conflicting definitions, so the same metric meant three things and trust in the numbers was gone.',
    build:
      'We inventoried the existing reports, rebuilt the important ones on a governed semantic model, reconciled every number to the legacy source, and retired the duplicates.',
    whatWeBuilt: [
      'A governed semantic model replacing scattered report logic.',
      'Rebuilt core reports reconciled to the legacy numbers.',
      'Workspace structure, row-level security, and lineage.',
    ],
    outcomes: [
      'One governed Power BI estate instead of tool sprawl.',
      'Each measure defined once and reconciled to the old world.',
      'Licensing and maintenance on a single platform.',
    ],
    metrics: [
      { label: 'Reports retired', value: '60%', sub: 'as duplicates' },
      { label: 'Definitions', value: 'One per KPI', sub: 'governed' },
      { label: 'Reconciliation', value: 'Tied out', sub: 'to legacy' },
      { label: 'Tools consolidated', value: 'Into Power BI', sub: 'one estate' },
    ],
    dataSources: ['Legacy BI tool', 'SQL Server', 'Excel workbooks', 'SharePoint'],
    stack: ['Power BI', 'Microsoft Fabric', 'Azure', 'Semantic model'],
    result:
      'A fractured reporting estate became one governed Power BI model, with every migrated number reconciled so the business trusted the move.',
  },
  // ----- Builds on the Microsoft stack -----------------------------------
  {
    slug: 'fabric-lakehouse-platform',
    kind: 'software',
    sector: 'Data engineering',
    title: 'Lakehouse and pipelines on Microsoft Fabric',
    summary:
      'A company replaced brittle overnight exports with a Microsoft Fabric lakehouse and pipelines that keep Power BI fast and in sync with the source systems.',
    challenge:
      'Dashboards ran on nightly spreadsheet exports that broke often and were always a day behind, so reporting could not be trusted for anything time sensitive.',
    build:
      'We built a Fabric lakehouse with pipelines from the ERP, CRM, and APIs, added incremental refresh and data quality checks, and pointed the governed semantic model at it.',
    whatWeBuilt: [
      'A Fabric lakehouse as the single data foundation.',
      'Pipelines from ERP, CRM, and APIs with incremental refresh.',
      'Data quality checks, monitoring, and alerting.',
    ],
    outcomes: [
      'Reporting fed from reliable, scheduled pipelines.',
      'Refreshes in minutes instead of a nightly batch.',
      'A data foundation the client owns and can maintain.',
    ],
    metrics: [
      { label: 'Refresh', value: 'Near real time', sub: 'from nightly' },
      { label: 'Pipeline failures', value: 'Monitored', sub: 'with alerts' },
      { label: 'Sources', value: 'ERP + CRM + API', sub: 'one lakehouse' },
      { label: 'Ownership', value: 'In your tenant', sub: 'documented' },
    ],
    dataSources: ['Dynamics 365', 'Salesforce', 'SQL Server', 'REST APIs'],
    stack: ['Microsoft Fabric', 'Azure Data Factory', 'Lakehouse', 'Power BI'],
    result:
      'Brittle overnight exports became reliable Fabric pipelines, so the reporting on top was fast, fresh, and trustworthy.',
  },
  {
    slug: 'embedded-analytics-portal',
    kind: 'software',
    sector: 'SaaS',
    title: 'Embedded Power BI inside a customer portal',
    summary:
      'A software company embedded Power BI into its own product, so customers get governed analytics in-app without a separate login.',
    challenge:
      'Customers wanted analytics in the product, but building charts by hand was slow and every new metric meant engineering work the team could not spare.',
    build:
      'We built a governed model with row-level security per tenant and embedded Power BI into the product, so each customer sees only their own data inside the app.',
    whatWeBuilt: [
      'A multi-tenant model with row-level security per customer.',
      'Power BI embedded into the product UI.',
      'A path to add new reports without engineering each one.',
    ],
    outcomes: [
      'Governed analytics shipped inside the product.',
      'Each customer sees only their own data.',
      'New metrics added in the model, not in code.',
    ],
    metrics: [
      { label: 'Analytics', value: 'In-app', sub: 'no second login' },
      { label: 'Isolation', value: 'Per tenant', sub: 'row-level security' },
      { label: 'New reports', value: 'No code', sub: 'in the model' },
      { label: 'Time to ship', value: 'Weeks', sub: 'not quarters' },
    ],
    dataSources: ['Product database', 'SQL Server', 'Azure', 'APIs'],
    stack: ['Power BI Embedded', 'Microsoft Fabric', 'Azure', 'Semantic model'],
    result:
      'Customers got governed, self-service analytics inside the product, with each tenant safely seeing only its own data.',
  },
];
