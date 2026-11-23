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
  // Keys of the product-UI dashboards to show on the case page, from the
  // finance report set: 'kpi', 'budget-vs-actual', 'working-capital',
  // 'month-end-close'. Rendered as representative product UI, not a client's
  // real result.
  dashboards?: string[];
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
    dashboards: ['kpi', 'budget-vs-actual'],
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
    dashboards: ['budget-vs-actual', 'month-end-close'],
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
    dashboards: ['working-capital', 'kpi'],
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
    dashboards: ['month-end-close', 'kpi'],
  },
  {
    slug: 'margin-analytics',
    kind: 'analytics',
    sector: 'Commercial',
    title: 'Gross margin, split by price, volume, mix, and cost',
    summary:
      'A commercial team put its margin reporting on a Power BI model that explains the change in gross margin as price, volume, mix, and cost, by product, customer, and channel.',
    challenge:
      'Margin moved every month and nobody could say why, because sales, cost, and discount lived in different extracts and the bridge between last month and this one was rebuilt by hand, if at all.',
    build:
      'We modeled sales lines, cost, and discounts into a governed model, defined the price, volume, mix, and cost effects as measures once, and built a margin bridge that drills from the headline movement to the products and customers behind it.',
    whatWeBuilt: [
      'A governed model over sales lines, cost, and discounts.',
      'A price-volume-mix-cost bridge defined once as measures.',
      'Gross margin by product, customer, channel, and distribution center.',
    ],
    outcomes: [
      'The monthly margin change explained, not just reported.',
      'Price and discount leakage visible by customer and channel.',
      'Pricing and mix decisions made on the real drivers.',
    ],
    metrics: [
      { label: 'Gross margin', value: '41.2%', sub: 'blended' },
      { label: 'Margin bridge', value: 'PVM + cost', sub: 'defined once' },
      { label: 'Drill path', value: 'To product', sub: 'and customer' },
      { label: 'Rebuild by hand', value: 'Removed', sub: 'per cycle' },
    ],
    dataSources: ['SQL Server', 'Dynamics 365', 'Excel price lists', 'Billing system'],
    stack: ['Power BI', 'Microsoft Fabric', 'Semantic model', 'Dataflows'],
    result:
      'Margin stopped being a number that moved for unknown reasons and became a bridge the commercial team reads to see exactly where price, volume, mix, and cost took it.',
    dashboards: ['margin-bridge', 'kpi'],
  },
  {
    slug: 'inventory-supply',
    kind: 'analytics',
    sector: 'Distribution',
    title: 'Stock cover, excess, and dead stock in one view',
    summary:
      'A distributor moved its inventory reporting onto a governed Power BI model that shows days of stock cover, excess and dead stock, and supplier performance, so operations and finance read the same numbers.',
    challenge:
      'The stock report was a monthly spreadsheet that was stale the day it was made, so cash sat in slow and dead stock nobody could see while fast lines ran short, and finance and operations argued from different copies.',
    build:
      'We modeled on-hand, demand, and purchasing into a governed model, defined stock cover and the excess and dead-stock rules as measures once, and built an inventory view that reconciles to both the stock system and the ledger.',
    whatWeBuilt: [
      'A governed model over on-hand, demand, and purchasing.',
      'Days of stock cover by item, category, and location.',
      'Excess and dead-stock flags, with supplier performance alongside.',
    ],
    outcomes: [
      'Cash in slow and dead stock surfaced as a worklist.',
      'Fast lines short of cover caught before they stock out.',
      'Operations and finance on one inventory number.',
    ],
    metrics: [
      { label: 'Excess & dead stock', value: '$1.8M', sub: '12% of on-hand' },
      { label: 'Avg stock cover', value: '46 days', sub: 'band 30–60' },
      { label: 'Aging', value: 'Live', sub: 'from monthly export' },
      { label: 'Reconciles to', value: 'Stock + GL', sub: 'one model' },
    ],
    dataSources: ['NetSuite', 'Dynamics 365 Business Central', 'SQL Server', 'Excel'],
    stack: ['Power BI', 'Microsoft Fabric', 'Semantic model', 'Dataflows'],
    result:
      'Inventory became one live view that frees working capital deliberately, instead of a stale spreadsheet that hid the cash tied up in stock.',
    dashboards: ['inventory-cover'],
  },
  {
    slug: 'plant-performance',
    kind: 'analytics',
    sector: 'Manufacturing',
    title: 'OEE, downtime, and scrap across the plant',
    summary:
      'A manufacturer put plant performance on a Power BI model that breaks OEE into availability, performance, and quality, with a downtime Pareto and scrap, consistent across lines and shifts.',
    challenge:
      'Each line and shift counted output and downtime its own way, so OEE could not be compared across the plant and the biggest losses stayed hidden in machine logs nobody consolidated.',
    build:
      'We modeled production, downtime, and scrap into a governed model, defined availability, performance, quality, and OEE as measures once, and built a losses view where downtime is ranked by reason and read the same way everywhere.',
    whatWeBuilt: [
      'A governed model over production, downtime, and scrap.',
      'OEE split into availability, performance, and quality.',
      'A downtime Pareto by reason, plus scrap and cost variance.',
    ],
    outcomes: [
      'OEE compared fairly across lines and shifts.',
      'The biggest downtime causes ranked, not buried in logs.',
      'Scrap and cost variance read next to the output they cost.',
    ],
    metrics: [
      { label: 'OEE', value: '85.3%', sub: 'at target' },
      { label: 'Availability', value: '91.2%', sub: '' },
      { label: 'Top loss', value: 'Changeover', sub: '34% of downtime' },
      { label: 'Measured once', value: 'All lines', sub: 'and shifts' },
    ],
    dataSources: ['MES / machine data', 'SQL Server', 'Dynamics 365', 'Excel'],
    stack: ['Power BI', 'Microsoft Fabric', 'Azure Data Factory', 'Semantic model'],
    result:
      'OEE and downtime became one consistent view the plant reads to compare lines fairly and go after the losses that actually cost the most.',
    dashboards: ['oee'],
  },
  {
    slug: 'job-cost-wip',
    kind: 'analytics',
    sector: 'Construction',
    title: 'Job cost, WIP, and margin at completion',
    summary:
      'A contractor moved job costing onto a Power BI model that projects margin at completion against the bid, tracks WIP, and surfaces change orders, by job and in total.',
    challenge:
      'Job cost lived in accounting and progress lived in the field, so the question that matters, will this job finish at the margin we bid, could not be answered until it was too late to do anything about it.',
    build:
      'We modeled committed cost, budget, and change orders into a governed model, defined percent complete and projected margin at completion as measures once, and built a WIP view that flags jobs eroding their margin while there is still time.',
    whatWeBuilt: [
      'A governed model over job cost, budget, and change orders.',
      'Projected margin at completion against the bid, by job.',
      'WIP, percent complete, and change-order aging in one view.',
    ],
    outcomes: [
      'Margin erosion caught mid-job, not at closeout.',
      'Change orders tracked against the cost they cover.',
      'WIP and margin read together across every active job.',
    ],
    metrics: [
      { label: 'Margin at completion', value: 'Projected', sub: 'vs bid, by job' },
      { label: 'WIP', value: '$4.2M', sub: 'tracked' },
      { label: 'Change orders', value: 'By age', sub: 'and job' },
      { label: 'Early warning', value: 'Mid-job', sub: 'not closeout' },
    ],
    dataSources: ['Sage Intacct', 'SQL Server', 'Excel budgets', 'Field reports'],
    stack: ['Power BI', 'Microsoft Fabric', 'Semantic model', 'Dataflows'],
    result:
      'The contractor can finally see each job finishing at a margin, so a job drifting below its bid is caught while something can still be done about it.',
    dashboards: ['job-cost'],
  },
  {
    slug: 'utilization-realization',
    kind: 'analytics',
    sector: 'Professional services',
    title: 'Billable utilization, realization, and WIP',
    summary:
      'A services firm put utilization and realization on a Power BI model that ties time, invoices, and payments together, by consultant, team, and engagement.',
    challenge:
      'Utilization came out of the time system, realization out of billing, and WIP out of a spreadsheet, so the firm could not see which engagements and people were actually profitable until the quarter closed.',
    build:
      'We modeled time, invoices, and payments into a governed model, defined billable utilization, realization, and WIP as measures once, and built a view that reads profitability by consultant, team, and engagement.',
    whatWeBuilt: [
      'A governed model over time, invoices, and payments.',
      'Billable utilization against target, by person and team.',
      'Realization and unbilled WIP by engagement.',
    ],
    outcomes: [
      'Utilization and realization read together, not apart.',
      'Low-realization engagements caught during the quarter.',
      'WIP and billing managed on current numbers.',
    ],
    metrics: [
      { label: 'Realization', value: '92%', sub: 'billed / standard' },
      { label: 'Utilization', value: '79%', sub: 'vs 75% target' },
      { label: 'WIP', value: '$0.9M', sub: 'unbilled' },
      { label: 'By', value: 'Person + team', sub: 'and engagement' },
    ],
    dataSources: ['Time system', 'Billing system', 'SQL Server', 'Excel'],
    stack: ['Power BI', 'Microsoft Fabric', 'Semantic model', 'Dataflows'],
    result:
      'Utilization, realization, and WIP became one view the firm runs on, so the engagements and people that make or lose money are visible while the quarter is still open.',
    dashboards: ['utilization'],
  },
  {
    slug: 'saas-arr-retention',
    kind: 'analytics',
    sector: 'SaaS',
    title: 'The ARR bridge, net revenue retention, and churn',
    summary:
      'A software company moved its ARR reporting onto a governed Power BI model that walks starting ARR to ending ARR through new, expansion, contraction, and churn, with net and gross retention.',
    challenge:
      'ARR was a single net number in a board slide, so growth and leakage cancelled each other out and nobody could see whether the base was expanding or quietly churning underneath.',
    build:
      'We modeled account-level ARR, support, and acquisition spend into a governed model, defined the ARR bridge and net and gross retention as measures once, and built a retention view that reads growth and leakage separately.',
    whatWeBuilt: [
      'A governed model over account-level ARR and activity.',
      'An ARR bridge: new, expansion, contraction, and churn.',
      'Net and gross retention, with account health alongside.',
    ],
    outcomes: [
      'Growth and churn read separately, not as one net figure.',
      'Quiet contraction in the base made visible.',
      'Retention tracked the same way every board cycle.',
    ],
    metrics: [
      { label: 'Net retention', value: '106%', sub: 'trailing 12 mo' },
      { label: 'Gross retention', value: '93%', sub: '' },
      { label: 'ARR bridge', value: 'Full walk', sub: 'start to end' },
      { label: 'Account health', value: 'Alongside', sub: 'support + usage' },
    ],
    dataSources: ['Billing system', 'Product database', 'Salesforce', 'SQL Server'],
    stack: ['Power BI', 'Microsoft Fabric', 'Azure Data Factory', 'Semantic model'],
    result:
      'ARR stopped being one net number and became a bridge the company reads to see new, expansion, contraction, and churn separately, so the leakage underneath the growth is finally visible.',
    dashboards: ['arr-retention'],
  },
  {
    slug: 'revenue-cycle',
    kind: 'analytics',
    sector: 'Healthcare',
    title: 'Claims, denials, and days in AR by payer',
    summary:
      'A healthcare provider moved revenue-cycle reporting onto a governed Power BI model that tracks clean claim rate, denials by reason, and days in AR by payer.',
    challenge:
      'Denials were worked as they came, with no view of which reasons and payers drove most of the lost revenue, so the same denial causes kept recurring and cash sat in aged AR nobody prioritized.',
    build:
      'We modeled claims, denials, and AR into a governed model, defined clean claim rate, denial rate, and days in AR as measures once, and built a view that ranks denials by reason and payer so the biggest causes get worked first.',
    whatWeBuilt: [
      'A governed model over claims, denials, and AR aging.',
      'Clean claim rate and denial rate, defined once.',
      'Denials ranked by reason and payer, with days in AR.',
    ],
    outcomes: [
      'The few denial causes behind most lost revenue made visible.',
      'Aged AR prioritized by payer instead of worked at random.',
      'Recurring denial reasons fixed at the source.',
    ],
    metrics: [
      { label: 'Clean claim rate', value: '94%', sub: '' },
      { label: 'Days in AR', value: '38', sub: 'by payer' },
      { label: 'Denial rate', value: '6.2%', sub: 'by reason' },
      { label: 'Top cause', value: 'Eligibility', sub: '28% of denials' },
    ],
    dataSources: ['Practice management', 'Clearinghouse', 'SQL Server', 'Excel'],
    stack: ['Power BI', 'Microsoft Fabric', 'Semantic model', 'Dataflows'],
    result:
      'The revenue cycle moved onto one governed view that shows where denials and aged AR actually come from, so the team works the causes that recover the most cash.',
    dashboards: ['revenue-cycle'],
  },
  {
    slug: 'restaurant-prime-cost',
    kind: 'analytics',
    sector: 'Hospitality',
    title: 'Prime cost by store: food plus labor against target',
    summary:
      'A restaurant group moved its prime-cost reporting onto a governed Power BI model that reads food and labor together as a share of sales, by store and day part, against target.',
    challenge:
      'Food cost lived in one weekly report and labor in another, so prime cost, the number that decides whether a store makes money, was only assembled long after the week it could have been fixed.',
    build:
      'We modeled daily sales, food cost, and labor into a governed model, defined food percent, labor percent, and prime cost as measures once, and built a view that reads every store against the prime-cost target while the week is still live.',
    whatWeBuilt: [
      'A governed model over sales, food cost, and labor.',
      'Prime cost as food plus labor, by store and day part.',
      'Comps and sales trend alongside, against the target.',
    ],
    outcomes: [
      'Food and labor read as one prime-cost number.',
      'Stores over target caught during the week, not after.',
      'Trade-offs between food and labor managed deliberately.',
    ],
    metrics: [
      { label: 'Prime cost target', value: '60%', sub: 'of sales' },
      { label: 'Read', value: 'Food + labor', sub: 'together' },
      { label: 'By', value: 'Store + day part', sub: '' },
      { label: 'Timing', value: 'Live week', sub: 'not after close' },
    ],
    dataSources: ['POS system', 'Scheduling system', 'SQL Server', 'Excel'],
    stack: ['Power BI', 'Microsoft Fabric', 'Semantic model', 'Dataflows'],
    result:
      'Prime cost became one live number each store manages during the week, so food and labor are kept in balance against target while it still makes a difference.',
    dashboards: ['prime-cost'],
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
