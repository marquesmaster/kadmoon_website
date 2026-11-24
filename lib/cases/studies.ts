// ---------------------------------------------------------------------------
// Case studies. Representative builds that show the Power BI and Microsoft-stack
// work we deliver. Not based on specific clients; figures are representative of
// the structure we ship and are never presented as a specific client's verified
// result. Named-client work is shared only with written permission.
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
      'A board pack for a leadership team: revenue, margin, EBITDA, and cash from one governed Power BI model, by entity, against budget and last year.',
    challenge:
      'The board pack is rebuilt by hand from spreadsheets every month, so revenue, margin, and cash arrive late and each department brings a different number.',
    build:
      'The build models revenue, cost, and cash once from the ERP and billing system into a governed model, defines the board KPIs as measures, and adds an EBITDA bridge and the entity view leadership reviews each month.',
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
      { label: 'Net revenue YTD', value: '$164.2M', sub: '+5.8% vs PY' },
      { label: 'EBITDA YTD', value: '$4.49M', sub: 'budget $8.77M' },
      { label: 'EBITDA margin', value: '2.7%', sub: 'PY 5.6%' },
      { label: 'Cash conversion', value: '87 days', sub: '+22 days in a year' },
    ],
    dataSources: ['SQL Server', 'Dynamics 365 Finance', 'Billing system', 'Excel budgets'],
    stack: ['Power BI', 'Microsoft Fabric', 'Azure Data Factory', 'Semantic model'],
    result:
      'Leadership reads revenue, margin, EBITDA, and cash in one governed view, with the variances against budget and last year explained, instead of reconciling spreadsheets before the meeting.',
    dashboards: ['kpi', 'budget-vs-actual'],
  },
  {
    slug: 'finance-close-analytics',
    kind: 'analytics',
    sector: 'Finance',
    title: 'Budget versus actual and the monthly close',
    summary:
      'Budget, actual, and the rolling forecast by entity and department, tied back to the general ledger in one governed Power BI model.',
    challenge:
      'Budget versus actual is rebuilt in spreadsheets each month, so variances are explained late and the forecast keeps assumptions the year has already broken.',
    build:
      'The build maps the ledger, cost centers, and every budget and forecast version into a governed model, defines the variance once, and ranks the drivers of the gap by entity and account.',
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
      { label: 'EBITDA vs budget', value: '-$4.28M', sub: '-49% YTD' },
      { label: 'Freight and fuel', value: '-$1.81M', sub: 'vs budget' },
      { label: 'Headcount', value: '378', sub: 'vs 404 planned' },
      { label: 'Full-year forecast', value: '$4.7M', sub: 'vs $10.2M budget' },
    ],
    dataSources: ['Dynamics 365 Finance', 'SQL Server', 'Excel budgets', 'SharePoint'],
    stack: ['Power BI', 'Microsoft Fabric', 'Semantic model', 'Dataflows'],
    result:
      'Finance sees which accounts and entities drive the variance to budget, and how each forecast version moved, from one model tied to the ledger.',
    dashboards: ['budget-vs-actual', 'month-end-close'],
  },
  {
    slug: 'cash-working-capital',
    kind: 'analytics',
    sector: 'Finance',
    title: 'Cash, working capital, and AR aging in one view',
    summary:
      'Cash position, receivables and payables aging, and the cash conversion cycle in one governed Power BI view, by customer and supplier.',
    challenge:
      'Cash, receivables, and payables sit in separate reports, so a slower-paying customer or shorter supplier terms show up only when the revolver balance rises.',
    build:
      'The build models open receivables, payables, inventory, and the ledger into a governed model, defines DSO, DIO, DPO, and the cash conversion cycle once, and compares the 13-week cash forecast with actual receipts and payments.',
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
      { label: 'DSO', value: '55.9 days', sub: 'from 46.5' },
      { label: 'Cash conversion', value: '87 days', sub: 'from 65' },
      { label: 'AR past due', value: '$9.3M', sub: 'from $4.2M' },
      { label: 'Revolver', value: '$16.5M', sub: 'from $6.0M' },
    ],
    dataSources: ['NetSuite', 'SQL Server', 'Excel', 'Billing system'],
    stack: ['Power BI', 'Microsoft Fabric', 'Semantic model', 'Dataflows'],
    result:
      'Finance sees which customers and suppliers move working capital and how far the cash forecast is off, while there is still time to act.',
    dashboards: ['working-capital', 'kpi'],
  },
  {
    slug: 'month-end-close',
    kind: 'analytics',
    sector: 'Finance',
    title: 'The month-end close, tracked to a business-day target',
    summary:
      'The month-end close tracked against a business-day target: days to close, task completion, and entries posted after close, by entity.',
    challenge:
      'The close calendar lives in a spreadsheet, so nobody sees which reconciliations run late or how many entries are booked after the books close.',
    build:
      'The build models close tasks, due dates, and post-close journal entries with the ledger, defines days to close and on-time completion once, and ranks the tasks that delay each entity.',
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
      { label: 'Days to close', value: '11.6', sub: 'target 5' },
      { label: 'On-time tasks', value: '28%', sub: '67% in 2023' },
      { label: 'Post-close entries', value: '174', sub: '$4.1M in 2026' },
      { label: 'Consolidated sign-off', value: 'BD 12', sub: 'October 2026' },
    ],
    dataSources: ['Dynamics 365 Finance', 'SQL Server', 'Close checklist', 'SharePoint'],
    stack: ['Power BI', 'Microsoft Fabric', 'Semantic model'],
    result:
      'Controllers see which tasks and entities hold up the close and how many entries land after it, cycle by cycle.',
    dashboards: ['month-end-close', 'kpi'],
  },
  {
    slug: 'margin-analytics',
    kind: 'analytics',
    sector: 'Commercial',
    title: 'Gross margin, split by price, volume, mix, and cost',
    summary:
      'Gross and pocket margin explained by price, volume, mix, and cost, by product line, customer, and channel, in one governed Power BI model.',
    challenge:
      'Margin moves every month and nobody can say how much came from price, cost, mix, or freight, so contract discounts and free freight stay hidden inside the average.',
    build:
      'The build models invoice lines, standard cost, discounts, and freight into a governed model, defines the price, volume, mix, and cost bridge once, and drills from product line to customer.',
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
      { label: 'Product margin', value: '34.4%', sub: '-1.3 pts vs PY' },
      { label: 'Pocket margin', value: '28.7%', sub: '-2.2 pts vs PY' },
      { label: 'Price vs cost', value: '+$4.25M / -$4.93M', sub: 'gross profit YTD' },
      { label: 'Net freight', value: '5.7%', sub: 'of net sales' },
    ],
    dataSources: ['SQL Server', 'Dynamics 365', 'Excel price lists', 'Billing system'],
    stack: ['Power BI', 'Microsoft Fabric', 'Semantic model', 'Dataflows'],
    result:
      'The commercial team reads each change in margin as price, volume, mix, and cost, and sees the accounts and channels where pocket margin is lowest.',
    dashboards: ['margin-bridge', 'kpi'],
  },
  {
    slug: 'inventory-supply',
    kind: 'analytics',
    sector: 'Distribution',
    title: 'Stock cover, excess, and dead stock in one view',
    summary:
      'Inventory value, turns, excess stock, fill rate, and supplier on-time delivery in one governed Power BI view, by warehouse and item class.',
    challenge:
      'Inventory, sales orders, and purchasing are reported separately, so excess stock builds in one warehouse while another misses orders.',
    build:
      'The build models on-hand stock, demand, open orders, and receipts into a governed model, defines turns, excess, fill rate, and supplier OTIF once, and reads them by warehouse, category, and supplier.',
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
      { label: 'Inventory', value: '$28.5M', sub: '+$3.9M in a year' },
      { label: 'Excess stock', value: '$9.1M', sub: 'from $6.4M' },
      { label: 'Unfilled demand', value: '$6.0M', sub: 'at selling price, 2026' },
      { label: 'Supplier OTIF', value: '85.7%', sub: '2026' },
    ],
    dataSources: ['NetSuite', 'Dynamics 365 Business Central', 'SQL Server', 'Excel'],
    stack: ['Power BI', 'Microsoft Fabric', 'Semantic model', 'Dataflows'],
    result:
      'Operations sees where cash is tied up in excess stock, where orders go unfilled, and which suppliers cause it.',
    dashboards: ['inventory-cover'],
  },
  {
    slug: 'plant-performance',
    kind: 'analytics',
    sector: 'Manufacturing',
    title: 'OEE, downtime, and scrap across the plant',
    summary:
      'OEE broken into availability, performance, and quality, with downtime by reason, scrap by defect, and cost variance against standard, by plant, press, and shift.',
    challenge:
      'Each plant and shift counts output and downtime its own way, so OEE cannot be compared and the biggest losses stay in machine logs nobody consolidates.',
    build:
      'The build models production, downtime events, scrap, and standard cost into a governed model, defines availability, performance, quality, and OEE once, and ranks losses by reason, press, and shift.',
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
      { label: 'OEE', value: '66.5%', sub: 'from 71.8%' },
      { label: 'Availability', value: '77.1%', sub: 'from 82.2%' },
      { label: 'Largest loss', value: 'Mold changes', sub: '19,008 press-hours YTD' },
      { label: 'Cost vs standard', value: '-$835K', sub: 'YTD' },
    ],
    dataSources: ['MES / machine data', 'SQL Server', 'Dynamics 365', 'Excel'],
    stack: ['Power BI', 'Microsoft Fabric', 'Azure Data Factory', 'Semantic model'],
    result:
      'The plant reads OEE, downtime, scrap, and cost variance the same way across lines and shifts, and sees which losses cost the most.',
    dashboards: ['oee'],
  },
  {
    slug: 'job-cost-wip',
    kind: 'analytics',
    sector: 'Construction',
    title: 'Job cost, WIP, and margin at completion',
    summary:
      'Job cost and WIP with projected margin at completion against the bid, change orders by age, and labor productivity, by job, division, and project manager.',
    challenge:
      'Job cost lives in accounting and progress in the field, so the question that matters, will this job finish at the margin it was bid, is answered only at closeout.',
    build:
      'The build models cost to date, budget, earned value, and change orders into a governed model, defines percent complete and projected margin at completion once, and flags jobs fading from their bid.',
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
      { label: 'Projected margin', value: '13.5%', sub: 'bid 17.1%' },
      { label: 'Margin fade', value: '-$7.4M', sub: 'since bid' },
      { label: 'Pending change orders', value: '$7.9M', sub: '$2.4M over 90 days' },
      { label: 'Labor over estimate', value: '25,230 h', sub: 'active jobs' },
    ],
    dataSources: ['Sage Intacct', 'SQL Server', 'Excel budgets', 'Field reports'],
    stack: ['Power BI', 'Microsoft Fabric', 'Semantic model', 'Dataflows'],
    result:
      'The contractor sees each job\'s projected margin against its bid while there is still time to act, with the change orders and labor hours behind the fade.',
    dashboards: ['job-cost'],
  },
  {
    slug: 'utilization-realization',
    kind: 'analytics',
    sector: 'Professional services',
    title: 'Billable utilization, realization, and WIP',
    summary:
      'Billable utilization against target, realization, unbilled WIP, and lockup, by person, practice, engagement, and partner.',
    challenge:
      'Utilization comes from the time system, realization from billing, and WIP from a spreadsheet, so unprofitable engagements and idle capacity show up after the quarter closes.',
    build:
      'The build models weekly time, standard rates, invoices, and payments into a governed model, defines utilization, realization, WIP, and lockup once, and reads them by person, practice, and engagement.',
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
      { label: 'Utilization', value: '74.2%', sub: 'target 78.5%' },
      { label: 'Realization', value: '90.6%', sub: 'from 93.7%' },
      { label: 'Unbilled WIP', value: '$17.0M', sub: '+40% in a year' },
      { label: 'Lockup', value: '116 days', sub: 'from 94' },
    ],
    dataSources: ['Time system', 'Billing system', 'SQL Server', 'Excel'],
    stack: ['Power BI', 'Microsoft Fabric', 'Semantic model', 'Dataflows'],
    result:
      'The firm sees where capacity sits idle, which engagements are written down, and which partners hold unbilled WIP, while the quarter is still open.',
    dashboards: ['utilization'],
  },
  {
    slug: 'saas-arr-retention',
    kind: 'analytics',
    sector: 'SaaS',
    title: 'The ARR bridge, net revenue retention, and churn',
    summary:
      'ARR walked from start to end through new, expansion, price increase, contraction, and churn, with net and gross retention by segment and the account health behind them.',
    challenge:
      'ARR is reported as one net number and churn as one rate, so the segments losing customers and the reasons behind them stay hidden.',
    build:
      'The build models a monthly account snapshot, product usage, support tickets, and acquisition spend into a governed model, classifies every ARR movement, and defines NRR, GRR, logo churn, and CAC payback once.',
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
      { label: 'Net revenue retention', value: '105.5%', sub: 'trailing 12 mo' },
      { label: 'Gross revenue retention', value: '89.4%', sub: 'TTM' },
      { label: 'ARR bridge', value: 'Full walk', sub: 'start to end' },
      { label: 'Account health', value: 'Alongside', sub: 'support + usage' },
    ],
    dataSources: ['Billing system', 'Product database', 'Salesforce', 'SQL Server'],
    stack: ['Power BI', 'Microsoft Fabric', 'Azure Data Factory', 'Semantic model'],
    result:
      'The company reads where ARR comes from and where it goes, which segments churn, and which accounts use too few of their seats to renew.',
    dashboards: ['arr-retention'],
  },
  {
    slug: 'revenue-cycle',
    kind: 'analytics',
    sector: 'Healthcare',
    title: 'Claims, denials, and days in AR by payer',
    summary:
      'Net collections, denials by payer and reason, days in A/R, charge lag, and underpayments against contract, by clinic and payer.',
    challenge:
      'Denials are worked claim by claim and A/R aging comes from the practice management system once a month, so payer rule changes and underpayments are found late.',
    build:
      'The build models every claim with its service, submission, denial, payment, and write-off dates into a governed model, rebuilds A/R at any month end, and compares each payment with the contracted rate.',
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
      { label: 'Net collection rate', value: '95.6%', sub: 'YTD' },
      { label: 'Days in A/R', value: '46.5', sub: 'by payer' },
      { label: 'First-pass denial rate', value: '8.4%', sub: 'by reason' },
      { label: 'Top denial cause', value: 'Prior auth', sub: '$321K YTD' },
    ],
    dataSources: ['Practice management', 'Clearinghouse', 'SQL Server', 'Excel'],
    stack: ['Power BI', 'Microsoft Fabric', 'Semantic model', 'Dataflows'],
    result:
      'The billing team sees which payers deny or underpay, for what reason, and where A/R is aging, by clinic and payer.',
    dashboards: ['revenue-cycle'],
  },
  {
    slug: 'restaurant-prime-cost',
    kind: 'analytics',
    sector: 'Hospitality',
    title: 'Prime cost by store: food plus labor against target',
    summary:
      'Same-store sales and traffic, channel mix, and prime cost (food plus labor) against sales of the same weeks, by store and metro.',
    challenge:
      'Sales come from the POS weekly and prime cost from the P&L after month end, so a store\'s food cost gap or overtime surfaces weeks after it could be fixed.',
    build:
      'The build models daily sales by channel, weekly actual and theoretical food cost, and weekly labor into a governed model, defines same-store sales and prime cost once, and compares each store with its theoretical food cost.',
    whatWeBuilt: [
      'A governed model over sales, food cost, and labor.',
      'Prime cost as food plus labor, by store and week.',
      'Comps and sales trend alongside, against the target.',
    ],
    outcomes: [
      'Food and labor read as one prime-cost number.',
      'Stores over target caught during the week, not after.',
      'Trade-offs between food and labor managed deliberately.',
    ],
    metrics: [
      { label: 'Prime cost', value: '59.4%', sub: 'from 56.1%' },
      { label: 'Same-store sales', value: '+1.2%', sub: 'traffic -5.5%' },
      { label: 'Food over theoretical', value: '$698K', sub: 'YTD' },
      { label: '3P delivery', value: '23.7%', sub: 'of sales' },
    ],
    dataSources: ['POS system', 'Scheduling system', 'SQL Server', 'Excel'],
    stack: ['Power BI', 'Microsoft Fabric', 'Semantic model', 'Dataflows'],
    result:
      'Operations sees which stores lose margin on food or labor each week, and whether growth comes from price, traffic, delivery, or new stores.',
    dashboards: ['prime-cost'],
  },
  {
    slug: 'dtc-cac-ltv',
    kind: 'analytics',
    sector: 'Direct-to-consumer',
    title: 'DTC acquisition: CAC, ROAS, retention and LTV',
    summary:
      'Acquisition cost, ROAS measured on contribution, repeat rate, and LTV by acquisition cohort and channel.',
    challenge:
      'The growth team steers by the ROAS each ad platform reports, and contribution after returns, shipping, and fees appears only in the monthly P&L.',
    build:
      'The build models order lines with product cost, shipping, fees, discounts, and returns into a governed model, ties every customer to the channel that acquired them, and defines contribution ROAS, repeat rate, and cohort LTV once.',
    whatWeBuilt: [
      'A governed model over orders, order lines, customers, products, and ad spend.',
      'Contribution per order, customer, and channel, after returns, shipping, and fees.',
      'Repeat rate and cumulative contribution (LTV) by acquisition cohort and channel.',
    ],
    outcomes: [
      'Acquisition read on first-order contribution, not platform-reported ROAS.',
      'Promo dependence and its weaker repeat behavior made visible.',
      'Returns sized by product line and category, where the margin leaks.',
    ],
    metrics: [
      { label: 'Net revenue YTD', value: '$11.4M', sub: '+31.0% vs PY' },
      { label: 'Blended CAC', value: '$93', sub: 'from $61' },
      { label: 'Contribution ROAS', value: '0.42x', sub: 'platforms report 2.5x' },
      { label: '90-day repeat', value: '16.4%', sub: 'from 22.5%' },
    ],
    dataSources: ['Shopify', 'Meta / Google / TikTok ad APIs', 'ERP (product cost)', 'Affiliate platform'],
    stack: ['Power BI', 'Microsoft Fabric', 'Azure Data Factory', 'Semantic model'],
    result:
      'The brand reads what each customer costs and earns, by channel and cohort, next to what the platforms claim.',
  },
  {
    slug: 'trucking-lanes-fleet',
    kind: 'analytics',
    sector: 'Transportation',
    title: 'Trucking: lane and customer profitability, fleet and drivers',
    summary:
      'Operating ratio, revenue and margin per mile by lane and customer, deadhead, detention, fuel surcharge recovery, maintenance by truck age, and driver turnover.',
    challenge:
      'Revenue per mile comes from the TMS and cost from the P&L, so lanes, customers, and trucks that lose money are never seen at the load level.',
    build:
      'The build models load-level revenue, miles, wait time, fuel, and driver pay into a governed model, allocates fleet cost per mile, and adds maintenance by truck and productivity by driver tenure.',
    whatWeBuilt: [
      'A governed model over loads, maintenance, and fixed costs.',
      'Margin per loaded mile by lane and customer, with deadhead and detention.',
      'Maintenance by truck model year and driver turnover by tenure.',
    ],
    outcomes: [
      'Lanes and customers that lose money made visible, load by load.',
      'Unbilled detention and weak fuel-surcharge recovery sized.',
      'The cost of an aging fleet and driver churn read directly.',
    ],
    metrics: [
      { label: 'Operating ratio', value: '98.9%', sub: 'from 90.8%' },
      { label: 'Deadhead', value: '18.1%', sub: 'from 13.7%' },
      { label: 'Unbilled detention', value: '$685K', sub: 'YTD' },
      { label: 'Driver turnover', value: '99%', sub: 'from 80%' },
    ],
    dataSources: ['TMS (McLeod / TMW)', 'Telematics (Samsara / Motive)', 'Fuel card files', 'Maintenance system'],
    stack: ['Power BI', 'Microsoft Fabric', 'Azure Data Factory', 'Semantic model'],
    result:
      'The carrier sees which lanes, customers, and trucks make money, load by load, and what deadhead, unbilled detention, and turnover cost.',
  },
  {
    slug: 'multifamily-noi',
    kind: 'analytics',
    sector: 'Real estate',
    title: 'Multifamily: leasing, occupancy and NOI versus budget',
    summary:
      'Occupancy, renewals, trade-out, make-ready and vacancy days, bad debt, and NOI against budget with a bridge by driver, by community.',
    challenge:
      'Each community sends a monthly operating statement and a rent roll in Excel, so the NOI variance is reviewed without the leasing and operations behind it.',
    build:
      'The build models a monthly unit-level snapshot, leases, expirations, turns, and the operating statement with budget into a governed model, and maps each line to a driver in the NOI bridge.',
    whatWeBuilt: [
      'A governed model over unit-months, leases, turns, and the GL.',
      'Occupancy, renewal conversion, trade-out, make-ready, and bad debt.',
      'An NOI bridge by driver that ties out to the budget variance.',
    ],
    outcomes: [
      'Every NOI variance traced to the leasing or expense line behind it.',
      'Falling occupancy explained by renewals, trade-out, and turn times.',
      'Bad debt and make-ready outliers isolated by community.',
    ],
    metrics: [
      { label: 'NOI vs budget', value: '-$3.7M', sub: '-5.2% YTD' },
      { label: 'Occupancy', value: '93.6%', sub: 'from 95.6%' },
      { label: 'Renewal conversion', value: '46.3%', sub: 'from 56.3%' },
      { label: 'Days vacant per turn', value: '42 days', sub: 'from 35' },
    ],
    dataSources: ['Yardi / RealPage', 'Rent roll & lease events', 'Make-ready work orders', 'GL & budget'],
    stack: ['Power BI', 'Microsoft Fabric', 'Semantic model', 'Dataflows'],
    result:
      'The asset team reads NOI against budget with the leasing and operations behind every variance, community by community.',
  },
  {
    slug: 'field-service',
    kind: 'analytics',
    sector: 'Home services',
    title: 'Field service: technicians, booking and memberships',
    summary:
      'First-time fix and return trips, technician utilization, replacement close rate by advisor, call booking, and membership renewals, by branch and technician.',
    challenge:
      'Branch managers see revenue and job counts every week, but not first-time fix, return trips, close rate by advisor, or how many calls turn into jobs.',
    build:
      'The build models jobs, replacement opportunities, calls, memberships, renewals, and paid hours into one governed model shared by service work and replacement sales.',
    whatWeBuilt: [
      'A governed model over jobs, opportunities, calls, memberships, and hours.',
      'First-time fix, return trips, and utilization by branch and technician.',
      'Booking and abandonment, replacement close rate, and membership renewals.',
    ],
    outcomes: [
      'Calls that fail to book and the revenue behind them made visible.',
      'A first-time-fix drop traced to one branch and system change.',
      'Failed membership payments isolated as the renewal problem.',
    ],
    metrics: [
      { label: 'First-time fix', value: '84.5%', sub: 'from 87.3%' },
      { label: 'Booking rate', value: '70.0%', sub: 'from 78.1%' },
      { label: 'Renewal rate', value: '60.7%', sub: 'from 78.7%' },
      { label: 'Member revenue', value: '42.1%', sub: 'of total' },
    ],
    dataSources: ['ServiceTitan / Housecall Pro', 'Call center', 'Payroll (paid hours)', 'Payment processor'],
    stack: ['Power BI', 'Microsoft Fabric', 'Azure Data Factory', 'Semantic model'],
    result:
      'The business sees the calls, visits, and memberships that leak revenue, by branch and technician.',
  },
  // ----- Builds on the Microsoft stack -----------------------------------
  {
    slug: 'fabric-lakehouse-platform',
    kind: 'software',
    sector: 'Data engineering',
    title: 'Lakehouse and pipelines on Microsoft Fabric',
    summary:
      'A Microsoft Fabric lakehouse and pipelines that replace overnight exports and keep Power BI in sync with the source systems.',
    challenge:
      'Reports depend on overnight exports that break, so dashboards open with stale or missing data and nobody knows until a user asks.',
    build:
      'The build sets up a Fabric lakehouse with pipelines from the ERP, CRM, and APIs, adds incremental refresh and failure alerts, and puts the governed Power BI model on top.',
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
      'Reporting runs on monitored pipelines instead of overnight exports, so dashboards are current and failures are caught before users see them.',
  },
  {
    slug: 'embedded-analytics-portal',
    kind: 'software',
    sector: 'SaaS',
    title: 'Embedded Power BI inside a customer portal',
    summary:
      'Power BI embedded in a software company\'s product, so its customers get governed analytics in the app without a separate login.',
    challenge:
      'Customers ask for reporting inside the product, and the team exports data to spreadsheets on request.',
    build:
      'The build creates a governed model with row-level security per tenant and embeds Power BI reports in the product with app-owned data.',
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
      'Customers get self-service analytics inside the product, and each tenant sees only its own data.',
  },
];
