// ---------------------------------------------------------------------------
// Case studies. Illustrative structures of the analytics we deliver for
// cross-border trade operations, plus a few software builds. All clients are
// anonymized. Figures are illustrative of the structure we ship, labeled as
// such everywhere they appear, and never presented as verified client results.
//
// Data can originate anywhere the operation already runs: SAP, Microsoft,
// Oracle, NetSuite, broker and carrier systems, EDI and ACE, or spreadsheets.
// Analytics is delivered on the Microsoft stack (Fabric, Power BI, Azure) in
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
  // ----- Importers & exporters -------------------------------------------
  {
    slug: 'landed-cost-analytics',
    kind: 'analytics',
    sector: 'Importers',
    title: 'Landed cost analytics by SKU and supplier',
    summary:
      'An importer moved landed cost off a monthly spreadsheet into a model that allocates freight, duty, and fees to every unit as goods arrive.',
    challenge:
      'Landed cost was rebuilt by hand each month from freight invoices, duty tables, and ERP exports, so margin by product was always a lagging guess and pricing decisions ran on stale numbers.',
    build:
      'We pulled purchase orders from SAP, freight invoices from the forwarder, and duty rates from customs tables into one model that allocates every cost to the unit, surfaced in a governed set of reports.',
    whatWeBuilt: [
      'A semantic model that allocates freight, duty, insurance, and brokerage to the unit.',
      'Landed cost and margin by SKU, supplier, and shipment, refreshed daily.',
      'A variance view comparing quoted cost to actual at receipt.',
    ],
    outcomes: [
      'Landed cost known at receipt instead of at month end.',
      'Pricing and sourcing decisions made on current margin.',
      'The monthly spreadsheet retired.',
    ],
    metrics: [
      { label: 'Landed cost accuracy', value: '98%', sub: 'vs actuals at receipt' },
      { label: 'Close time', value: '3 days', sub: 'from 12' },
      { label: 'Margin granularity', value: 'Per SKU', sub: 'and supplier' },
      { label: 'Sources unified', value: '6', sub: 'into one model' },
    ],
    dataSources: ['SAP S/4HANA', 'Forwarder freight invoices', 'Customs duty tables', 'FX rates'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure Data Factory', 'Semantic model'],
    result:
      'Margin by product and supplier became a daily number the commercial team could act on, instead of a monthly reconstruction.',
  },
  {
    slug: 'tariff-duty-exposure',
    kind: 'analytics',
    sector: 'Importers',
    title: 'Tariff and duty exposure modeling',
    summary:
      'With tariffs shifting, an importer needed to see duty exposure by product and country and model the cost of a rate change before it landed.',
    challenge:
      'When a tariff changed, finance scrambled through spreadsheets to estimate the hit, and the answer arrived days later with no way to test sourcing alternatives.',
    build:
      'We built a duty exposure model over HTS codes, country of origin, and spend, with a scenario layer that reprices the book under a proposed tariff and compares sourcing options.',
    whatWeBuilt: [
      'Duty exposure by HTS code, country of origin, supplier, and product line.',
      'A scenario tool that models a rate change and reprices the import book.',
      'A sourcing comparison that ranks alternatives by total landed cost.',
    ],
    outcomes: [
      'Exposure to any tariff change is known the same day it is announced.',
      'Sourcing alternatives are compared on landed cost, not list price.',
      'Finance answers leadership with a number, not an estimate.',
    ],
    metrics: [
      { label: 'Exposure updated', value: 'Same day', sub: 'on a rate change' },
      { label: 'HTS codes modeled', value: '2,400+', sub: 'across the book' },
      { label: 'Scenario run time', value: 'Minutes', sub: 'from days' },
      { label: 'Duty spend covered', value: '100%', sub: 'of imports' },
    ],
    dataSources: ['SAP ECC', 'HTS and tariff schedules', 'Supplier master', 'Country-of-origin data'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure SQL', 'What-if parameters'],
    result:
      'A proposed tariff change could be priced into the sourcing decision within the hour instead of after the quarter closed.',
  },
  {
    slug: 'supplier-performance-analytics',
    kind: 'analytics',
    sector: 'Importers',
    title: 'Supplier performance and lead-time analytics',
    summary:
      'An importer consolidated supplier data to see lead-time reliability, defect rates, and total cost by vendor in one place.',
    challenge:
      'Supplier scorecards lived in separate spreadsheets per buyer, so there was no shared view of which vendors were slow, costly, or inconsistent across the whole book.',
    build:
      'We unified purchase orders, receipts, and quality records into a supplier model that tracks promised versus actual lead time, defect rate, and total landed cost per vendor.',
    whatWeBuilt: [
      'A supplier scorecard with lead-time reliability and variance.',
      'Defect and return rates tied back to each vendor and product.',
      'Total cost of ownership by supplier, landed cost included.',
    ],
    outcomes: [
      'Underperforming suppliers are visible across the whole book, not per buyer.',
      'Negotiations open with data on reliability and true cost.',
      'Sourcing is rebalanced toward vendors that actually deliver.',
    ],
    metrics: [
      { label: 'Suppliers scored', value: '340', sub: 'on one model' },
      { label: 'Lead-time variance', value: 'Tracked', sub: 'promised vs actual' },
      { label: 'On-time delivery', value: '+14 pts', sub: 'after rebalancing' },
      { label: 'View', value: 'Shared', sub: 'across buyers' },
    ],
    dataSources: ['Oracle ERP', 'Receiving records', 'Quality management system', 'Spreadsheets'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure Data Factory', 'Row-level security'],
  },
  {
    slug: 'import-margin-analytics',
    kind: 'analytics',
    sector: 'Importers',
    title: 'Import margin erosion analysis',
    summary:
      'An importer traced where margin leaked between quoted cost and the money that actually reached the bottom line.',
    challenge:
      'Gross margin looked healthy on paper but kept eroding by the time orders were delivered, and nobody could point to where it went: freight surcharges, duty, fees, or discounts.',
    build:
      'We built a margin bridge from quoted price to realized margin, decomposing every deduction so leadership could see the cause and size of each leak.',
    whatWeBuilt: [
      'A margin waterfall from list price to realized margin.',
      'Each deduction named: freight, duty, fees, rebates, and write-offs.',
      'Drill-down to the order and shipment behind every variance.',
    ],
    outcomes: [
      'The source of margin erosion is named instead of guessed at.',
      'Freight surcharges and fee creep are caught and challenged.',
      'Discount policy is set with its margin impact visible.',
    ],
    metrics: [
      { label: 'Margin bridge', value: 'End to end', sub: 'quote to realized' },
      { label: 'Leak identified', value: '3.8 pts', sub: 'recovered focus' },
      { label: 'Drill depth', value: 'To the order', sub: 'per variance' },
      { label: 'Refresh', value: 'Daily', sub: 'governed model' },
    ],
    dataSources: ['SAP S/4HANA', 'Freight invoices', 'Rebate and pricing files', 'Duty tables'],
    stack: ['Microsoft Fabric', 'Power BI', 'DAX measures', 'Semantic model'],
  },
  {
    slug: 'po-to-receipt-cycle-analytics',
    kind: 'analytics',
    sector: 'Importers',
    title: 'Purchase order to receipt cycle analytics',
    summary:
      'An importer measured where time was lost between placing an order and having goods on the shelf, stage by stage.',
    challenge:
      'The order-to-receipt cycle crossed procurement, the forwarder, customs, and the warehouse, and no single system measured the handoffs, so delays were only felt, never located.',
    build:
      'We stitched milestones from the ERP, the forwarder, and customs into one timeline and measured the duration of every stage against its target.',
    whatWeBuilt: [
      'A stage-by-stage cycle time from PO to shelf.',
      'Bottleneck analysis by lane, supplier, and customs path.',
      'Aging alerts on orders stalled at any stage.',
    ],
    outcomes: [
      'Delays are located at the stage that causes them.',
      'Chronic bottlenecks at customs or a lane are addressed with data.',
      'Planning uses real cycle times instead of optimistic defaults.',
    ],
    metrics: [
      { label: 'Cycle measured', value: 'Per stage', sub: 'PO to shelf' },
      { label: 'Cycle time', value: '-9 days', sub: 'after fixes' },
      { label: 'Stalled orders', value: 'Flagged', sub: 'in real time' },
      { label: 'Handoffs tracked', value: '5', sub: 'across systems' },
    ],
    dataSources: ['NetSuite', 'Forwarder milestones', 'ACE / ABI', 'WMS receipts'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure Data Factory', 'Alerting'],
  },
  {
    slug: 'fx-impact-on-import-cost',
    kind: 'analytics',
    sector: 'Importers',
    title: 'Currency impact on import cost',
    summary:
      'An importer buying in several currencies made the effect of exchange rate moves on landed cost and margin visible.',
    challenge:
      'Purchases settled in multiple currencies, but cost reporting used a single booked rate, so margin swings driven by currency were invisible until the hedging desk reconciled much later.',
    build:
      'We modeled cost at both booked and market rates, isolating the currency component of each purchase and its effect on landed cost and margin.',
    whatWeBuilt: [
      'Cost and margin split into operating and currency components.',
      'Exposure by currency, supplier, and settlement window.',
      'A view that ties realized currency impact back to hedging decisions.',
    ],
    outcomes: [
      'Currency-driven margin swings are separated from operating performance.',
      'Exposure by currency is visible before settlement.',
      'Hedging and pricing decisions share one set of numbers.',
    ],
    metrics: [
      { label: 'Currencies modeled', value: '7', sub: 'settlement books' },
      { label: 'FX component', value: 'Isolated', sub: 'from margin' },
      { label: 'Exposure view', value: 'Forward', sub: 'by window' },
      { label: 'Refresh', value: 'Daily', sub: 'with market rates' },
    ],
    dataSources: ['SAP S/4HANA', 'Treasury system', 'Market FX feed', 'Purchase ledger'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure SQL', 'Semantic model'],
  },
  {
    slug: 'import-demand-forecasting',
    kind: 'analytics',
    sector: 'Importers',
    title: 'Import demand and reorder analytics',
    summary:
      'An importer with long lead times built a forecast that accounts for transit and customs so reorders happen before stock runs out.',
    challenge:
      'Reorder points assumed domestic lead times, but goods took weeks in transit and days at customs, so the business swung between stockouts and overstock tying up cash.',
    build:
      'We built a demand forecast tied to real transit and clearance times, with reorder recommendations that factor in the full import lead time by supplier and lane.',
    whatWeBuilt: [
      'A demand forecast by product with seasonality and trend.',
      'Reorder points set from real transit and clearance times.',
      'Stockout and overstock risk flagged per SKU.',
    ],
    outcomes: [
      'Reorders are placed in time for the full import lead time.',
      'Stockouts and overstock both fall as the forecast reflects reality.',
      'Working capital tied up in excess stock is freed.',
    ],
    metrics: [
      { label: 'Stockouts', value: '-31%', sub: 'illustrative' },
      { label: 'Excess stock', value: '-18%', sub: 'working capital freed' },
      { label: 'Lead time', value: 'Real', sub: 'transit and customs' },
      { label: 'Forecast', value: 'Per SKU', sub: 'and lane' },
    ],
    dataSources: ['Microsoft Dynamics 365', 'Historical sales', 'Forwarder transit times', 'ACE clearance'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure Machine Learning', 'Semantic model'],
  },

  // ----- Customs brokers --------------------------------------------------
  {
    slug: 'entry-throughput-analytics',
    kind: 'analytics',
    sector: 'Customs Brokers',
    title: 'Entry throughput and clearance-time analytics',
    summary:
      'A customs broker measured entry volume, clearance time, and exceptions across the team to find where entries stalled.',
    challenge:
      'Volume was growing but the broker could not see clearance time or where entries got stuck, so staffing and problem lanes were managed on instinct.',
    build:
      'We pulled entry and status data from the filing system into a model that tracks throughput, clearance time, and exception reasons by team, client, and port.',
    whatWeBuilt: [
      'Entry volume and clearance time by client, port, and filer.',
      'Exception analysis by reason, with trend over time.',
      'A daily operating view for the clearance team.',
    ],
    outcomes: [
      'Clearance time is measured instead of estimated.',
      'Problem ports and clients are visible and worked down.',
      'Staffing follows real volume and complexity.',
    ],
    metrics: [
      { label: 'Clearance time', value: '-22%', sub: 'illustrative' },
      { label: 'Entries tracked', value: 'All', sub: 'across ports' },
      { label: 'Exception reasons', value: 'Categorized', sub: 'and trended' },
      { label: 'Operating view', value: 'Daily', sub: 'for the team' },
    ],
    dataSources: ['Broker filing system', 'ACE / ABI', 'Client master', 'Port reference data'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure Data Factory', 'Row-level security'],
  },
  {
    slug: 'hts-classification-analytics',
    kind: 'analytics',
    sector: 'Customs Brokers',
    title: 'HTS classification accuracy analytics',
    summary:
      'A broker surfaced classification patterns and exceptions to reduce reclassifications and the penalties that follow them.',
    challenge:
      'Classification quality varied by filer and client, and errors only surfaced when customs pushed back, by which point a shipment was held or a penalty was in play.',
    build:
      'We analyzed historical entries to flag inconsistent HTS usage for similar goods, classification changes over time, and clients with elevated exception rates.',
    whatWeBuilt: [
      'Consistency analysis of HTS codes used for similar goods.',
      'Reclassification and rejection rates by filer and client.',
      'An early-warning list of entries that match known error patterns.',
    ],
    outcomes: [
      'Inconsistent classifications are caught before filing, not after a hold.',
      'Training focuses on the filers and goods that need it.',
      'Penalty and reclassification exposure falls.',
    ],
    metrics: [
      { label: 'Reclassifications', value: '-27%', sub: 'illustrative' },
      { label: 'Entries analyzed', value: '180k', sub: 'historical' },
      { label: 'Error patterns', value: 'Flagged', sub: 'pre-filing' },
      { label: 'Exposure', value: 'Reduced', sub: 'penalty risk' },
    ],
    dataSources: ['Broker filing system', 'ACE / ABI', 'HTS schedules', 'Historical entries'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure SQL', 'DAX measures'],
  },
  {
    slug: 'denied-party-screening-analytics',
    kind: 'analytics',
    sector: 'Customs Brokers',
    title: 'Denied-party screening audit analytics',
    summary:
      'A broker made its screening coverage provable, with an auditable record that every party on every entry was checked.',
    challenge:
      'Screening happened across tools and inboxes, so proving that every counterparty had been checked meant a manual hunt whenever an auditor or client asked.',
    build:
      'We consolidated screening events against entries and parties into one model that shows coverage, hits, and the disposition of every match, with a complete audit trail.',
    whatWeBuilt: [
      'Screening coverage tied to every party on every entry.',
      'Hit and false-positive analysis with disposition tracking.',
      'An audit view that reconstructs any screening decision on demand.',
    ],
    outcomes: [
      'Screening coverage is provable instead of assumed.',
      'Audits are answered from a report, not a manual hunt.',
      'False-positive handling is measured and tuned.',
    ],
    metrics: [
      { label: 'Coverage', value: '100%', sub: 'parties and entries' },
      { label: 'Audit answer', value: 'Minutes', sub: 'from days' },
      { label: 'Match disposition', value: 'Tracked', sub: 'end to end' },
      { label: 'Trail', value: 'Complete', sub: 'per decision' },
    ],
    dataSources: ['Screening service logs', 'Broker filing system', 'Denied-party lists', 'Party master'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure SQL', 'Audit model'],
  },
  {
    slug: 'broker-productivity-sla',
    kind: 'analytics',
    sector: 'Customs Brokers',
    title: 'Broker productivity and client SLA dashboard',
    summary:
      'A broker measured productivity per filer and SLA attainment per client to protect service as volume grew.',
    challenge:
      'Client service agreements set clearance and response targets, but attainment was only reviewed after a client complained, and workload across filers was uneven and unseen.',
    build:
      'We built a productivity and SLA model that tracks entries per filer, response and clearance times against each client target, and breach risk before it happens.',
    whatWeBuilt: [
      'Productivity by filer, team, and entry type.',
      'SLA attainment per client with breach-risk alerts.',
      'Workload balancing view across the clearance team.',
    ],
    outcomes: [
      'SLA risk is seen before a breach, not after a complaint.',
      'Workload is balanced on evidence instead of instinct.',
      'Client reviews run on a shared, trusted scorecard.',
    ],
    metrics: [
      { label: 'SLA attainment', value: '+11 pts', sub: 'illustrative' },
      { label: 'Breach risk', value: 'Flagged', sub: 'before due' },
      { label: 'Productivity', value: 'Per filer', sub: 'and type' },
      { label: 'Clients covered', value: 'All', sub: 'on SLA' },
    ],
    dataSources: ['Broker filing system', 'Client SLA definitions', 'Time tracking', 'ACE / ABI'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure Data Factory', 'Row-level security'],
  },
  {
    slug: 'duty-drawback-analytics',
    kind: 'analytics',
    sector: 'Customs Brokers',
    title: 'Duty drawback opportunity analytics',
    summary:
      'A broker identified exported goods eligible for duty drawback that were going unclaimed across its client base.',
    challenge:
      'Drawback eligibility required matching imports to later exports across disconnected records, so most of the refundable duty was never identified, let alone claimed.',
    build:
      'We matched import entries to export records to surface drawback-eligible transactions and quantify the refundable duty per client and period.',
    whatWeBuilt: [
      'Import-to-export matching against drawback rules.',
      'Refundable duty quantified by client, product, and period.',
      'A claim worklist prioritized by recoverable value.',
    ],
    outcomes: [
      'Refundable duty that was invisible is now quantified.',
      'Claims are prioritized by value and filed before deadlines.',
      'A new service line is backed by data the client can see.',
    ],
    metrics: [
      { label: 'Refund identified', value: '$1.4M', sub: 'illustrative' },
      { label: 'Eligible entries', value: 'Matched', sub: 'import to export' },
      { label: 'Worklist', value: 'By value', sub: 'prioritized' },
      { label: 'Deadlines', value: 'Tracked', sub: 'per claim' },
    ],
    dataSources: ['Broker filing system', 'Export records', 'ACE / ABI', 'Duty tables'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure SQL', 'Matching logic'],
  },
  {
    slug: 'ace-filing-error-analytics',
    kind: 'analytics',
    sector: 'Customs Brokers',
    title: 'ACE filing error and rejection analytics',
    summary:
      'A broker analyzed ACE rejections to find the recurring causes and cut the rework that slowed clearance.',
    challenge:
      'ACE rejections were handled one at a time with no view of the patterns, so the same avoidable errors kept returning and quietly added days to clearance.',
    build:
      'We categorized rejection messages and tied them to filer, client, and entry type, surfacing the handful of causes behind most of the rework.',
    whatWeBuilt: [
      'Rejection categorization by message, filer, and client.',
      'Pareto of the causes behind most rejections.',
      'A trend view that confirms whether fixes are working.',
    ],
    outcomes: [
      'The few causes behind most rejections are named and fixed.',
      'Rework and the delay it adds to clearance both fall.',
      'Filing quality is monitored instead of assumed.',
    ],
    metrics: [
      { label: 'Rejections', value: '-34%', sub: 'illustrative' },
      { label: 'Causes', value: 'Categorized', sub: 'and ranked' },
      { label: 'Rework', value: 'Reduced', sub: 'at clearance' },
      { label: 'Monitoring', value: 'Continuous', sub: 'with trend' },
    ],
    dataSources: ['ACE / ABI', 'Broker filing system', 'Rejection logs', 'Entry master'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure Data Factory', 'DAX measures'],
  },

  // ----- Freight forwarders & 3PL ----------------------------------------
  {
    slug: 'shipment-visibility-analytics',
    kind: 'analytics',
    sector: 'Freight Forwarders',
    title: 'Shipment visibility and milestone analytics',
    summary:
      'A forwarder unified milestone data from carriers and portals so status, delays, and exceptions sat in one place.',
    challenge:
      'Shipment status lived in carrier portals, EDI feeds, and email, so customers called for updates the team had to assemble by hand and exceptions surfaced too late to act.',
    build:
      'We consolidated milestone events from ocean and air carriers over EDI and API into one model that tracks every shipment against its plan and flags exceptions early.',
    whatWeBuilt: [
      'Milestone data from carriers unified over EDI and API.',
      'Planned-versus-actual tracking per shipment with exception flags.',
      'Dwell and delay analysis by lane, carrier, and port.',
    ],
    outcomes: [
      'Status sits in one place instead of across several portals.',
      'Exceptions are caught early instead of at delivery.',
      'Delay patterns by lane and carrier are addressed with data.',
    ],
    metrics: [
      { label: 'Visibility', value: 'End to end', sub: 'one view' },
      { label: 'Exceptions', value: 'Early', sub: 'before delivery' },
      { label: 'Carriers', value: 'Ocean and air', sub: 'unified' },
      { label: 'Update latency', value: 'Near real time', sub: 'from feeds' },
    ],
    dataSources: ['Ocean carrier EDI', 'Air and tracking APIs', 'TMS', 'Port reference data'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure Data Factory', 'Semantic model'],
  },
  {
    slug: 'otif-performance-analytics',
    kind: 'analytics',
    sector: 'Freight Forwarders',
    title: 'On-time in-full performance analytics',
    summary:
      'A 3PL measured OTIF by lane, carrier, and customer to see where service was failing and why.',
    challenge:
      'Customers measured OTIF their own way and the 3PL had no matching view, so service disputes came down to whose spreadsheet to believe.',
    build:
      'We defined OTIF consistently over shipment and delivery data and built a model that attributes every miss to a cause, by lane, carrier, and customer.',
    whatWeBuilt: [
      'One OTIF definition applied across lanes and customers.',
      'Miss attribution by cause: late, short, or both.',
      'Carrier and lane performance ranked and trended.',
    ],
    outcomes: [
      'Service conversations run on one agreed number.',
      'The causes of failure are named instead of argued.',
      'Carriers and lanes are managed on evidence.',
    ],
    metrics: [
      { label: 'OTIF', value: '+9 pts', sub: 'illustrative' },
      { label: 'Definition', value: 'Single', sub: 'agreed' },
      { label: 'Miss cause', value: 'Attributed', sub: 'per shipment' },
      { label: 'Scope', value: 'All lanes', sub: 'and customers' },
    ],
    dataSources: ['TMS', 'Carrier EDI', 'Customer delivery requirements', 'WMS'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure SQL', 'DAX measures'],
  },
  {
    slug: 'freight-spend-analytics',
    kind: 'analytics',
    sector: 'Freight Forwarders',
    title: 'Freight spend and cost-per-lane analytics',
    summary:
      'A shipper brought freight spend from several carriers and invoices into one model to see true cost by lane and mode.',
    challenge:
      'Freight spend was spread across carrier invoices in different formats, so cost per lane and mode was never comparable and rate negotiations lacked leverage.',
    build:
      'We normalized freight invoices across carriers into one cost model with spend by lane, mode, carrier, and accessorial, benchmarked against contracted rates.',
    whatWeBuilt: [
      'Freight invoices normalized across carriers and modes.',
      'Cost per lane, mode, and accessorial with trend.',
      'Contracted-versus-billed rate comparison.',
    ],
    outcomes: [
      'Cost per lane is finally comparable across carriers.',
      'Accessorial creep is visible and challenged.',
      'Rate negotiations open with real spend data.',
    ],
    metrics: [
      { label: 'Spend unified', value: 'All carriers', sub: 'one model' },
      { label: 'Cost per lane', value: 'Comparable', sub: 'across modes' },
      { label: 'Accessorials', value: 'Surfaced', sub: 'and trended' },
      { label: 'Savings focus', value: '6%', sub: 'illustrative' },
    ],
    dataSources: ['Carrier invoices', 'TMS', 'Rate contracts', 'Spreadsheets'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure Data Factory', 'Semantic model'],
  },
  {
    slug: 'demurrage-detention-analytics',
    kind: 'analytics',
    sector: 'Freight Forwarders',
    title: 'Demurrage and detention cost analytics',
    summary:
      'An importer and its forwarder found where demurrage and detention charges came from and cut the avoidable ones.',
    challenge:
      'Demurrage and detention charges arrived weeks later with no context, so the team paid them without knowing which were avoidable or who caused them.',
    build:
      'We tied charge records to container events and the free-time clock, attributing each charge to a cause and an owner so avoidable fees could be prevented.',
    whatWeBuilt: [
      'Charges tied to container events and free-time windows.',
      'Attribution by cause: late pickup, congestion, or documents.',
      'Avoidable-charge alerts as free time runs down.',
    ],
    outcomes: [
      'Avoidable charges are prevented instead of paid.',
      'The causes behind recurring fees are named and fixed.',
      'Disputes are backed by a timeline, not a guess.',
    ],
    metrics: [
      { label: 'D&D charges', value: '-29%', sub: 'illustrative' },
      { label: 'Free time', value: 'Tracked', sub: 'per container' },
      { label: 'Cause', value: 'Attributed', sub: 'and owned' },
      { label: 'Alerts', value: 'Before', sub: 'charges hit' },
    ],
    dataSources: ['Ocean carrier EDI', 'Terminal events', 'TMS', 'Invoice records'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure SQL', 'Alerting'],
  },
  {
    slug: 'container-utilization-analytics',
    kind: 'analytics',
    sector: 'Freight Forwarders',
    title: 'Container utilization and consolidation analytics',
    summary:
      'A forwarder analyzed container fill and consolidation opportunities to move the same goods in fewer boxes.',
    challenge:
      'Containers shipped under-filled because booking decisions were made in isolation, and no one could see where orders could have been consolidated.',
    build:
      'We modeled volume and weight utilization per container and identified consolidation opportunities by origin, destination, and time window.',
    whatWeBuilt: [
      'Fill rate by volume and weight per container and lane.',
      'Consolidation opportunities by origin, destination, and window.',
      'Trend on utilization against target.',
    ],
    outcomes: [
      'Under-filled containers are visible and reduced.',
      'Consolidation opportunities are acted on before booking.',
      'Freight cost per unit shipped falls.',
    ],
    metrics: [
      { label: 'Fill rate', value: '+12 pts', sub: 'illustrative' },
      { label: 'Consolidation', value: 'Identified', sub: 'pre-booking' },
      { label: 'Cost per unit', value: 'Lower', sub: 'per shipment' },
      { label: 'Lanes covered', value: 'All', sub: 'major' },
    ],
    dataSources: ['TMS', 'Booking records', 'Order data', 'Carrier EDI'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure Data Factory', 'DAX measures'],
  },
  {
    slug: 'carrier-scorecard-analytics',
    kind: 'analytics',
    sector: 'Freight Forwarders',
    title: 'Carrier scorecard and rate benchmarking',
    summary:
      'A shipper ranked carriers on reliability, cost, and transit so allocation went to the carriers that earned it.',
    challenge:
      'Carrier allocation ran on relationships and gut feel because there was no consistent scorecard tying reliability and transit time to what each carrier actually cost.',
    build:
      'We built a carrier scorecard combining on-time performance, transit variance, damage, and cost per lane, benchmarked across the carrier base.',
    whatWeBuilt: [
      'A weighted scorecard across reliability, transit, and cost.',
      'Rate benchmarking by lane across carriers.',
      'Allocation recommendations grounded in the score.',
    ],
    outcomes: [
      'Allocation follows performance, not habit.',
      'Weak carriers are identified and managed or replaced.',
      'Rate talks use benchmarked data by lane.',
    ],
    metrics: [
      { label: 'Carriers scored', value: 'All', sub: 'one model' },
      { label: 'On-time', value: '+8 pts', sub: 'after reallocation' },
      { label: 'Rate benchmark', value: 'By lane', sub: 'across carriers' },
      { label: 'Allocation', value: 'Data-led', sub: 'not habit' },
    ],
    dataSources: ['TMS', 'Carrier EDI', 'Rate contracts', 'Claims records'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure SQL', 'Semantic model'],
  },

  // ----- 3PL / warehousing ------------------------------------------------
  {
    slug: 'multi-warehouse-inventory-analytics',
    kind: 'analytics',
    sector: '3PL & Warehousing',
    title: 'Multi-warehouse and bonded inventory analytics',
    summary:
      'A 3PL unified inventory across warehouses, including bonded and FTZ stock, into one accurate, real-time view.',
    challenge:
      'Each warehouse ran its own view of stock and bonded and FTZ inventory was tracked separately, so there was no single accurate picture of what was where and under what status.',
    build:
      'We consolidated WMS data across sites into one inventory model that respects bonded and FTZ status, with real-time positions and movement history.',
    whatWeBuilt: [
      'Inventory across sites in one model with location and status.',
      'Bonded and FTZ stock tracked distinctly from general stock.',
      'Movement and adjustment history for every SKU.',
    ],
    outcomes: [
      'One accurate view of stock across every site.',
      'Bonded and FTZ positions are clear and auditable.',
      'Decisions use real positions instead of per-site guesses.',
    ],
    metrics: [
      { label: 'Sites unified', value: 'All', sub: 'one model' },
      { label: 'Accuracy', value: 'Real time', sub: 'vs daily batch' },
      { label: 'Bonded / FTZ', value: 'Distinct', sub: 'and auditable' },
      { label: 'History', value: 'Full', sub: 'per SKU' },
    ],
    dataSources: ['WMS (multiple sites)', 'SAP EWM', 'Bonded and FTZ records', 'Movement logs'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure Data Factory', 'Row-level security'],
  },
  {
    slug: 'receiving-throughput-analytics',
    kind: 'analytics',
    sector: '3PL & Warehousing',
    title: 'Receiving and putaway throughput analytics',
    summary:
      'A warehouse measured dock-to-stock time to find where inbound goods waited before they were available to pick.',
    challenge:
      'Inbound containers piled up at the dock and goods sat before putaway, but with no measurement the delay was managed by walking the floor.',
    build:
      'We measured each step from dock to stock using WMS events, exposing throughput, queue time, and labor alignment by shift and dock.',
    whatWeBuilt: [
      'Dock-to-stock time broken into receive, check, and putaway.',
      'Queue and wait analysis by shift, dock, and product type.',
      'Labor-versus-volume alignment across the day.',
    ],
    outcomes: [
      'Inbound bottlenecks are located and cleared.',
      'Goods reach pickable stock faster.',
      'Labor is planned against real inbound volume.',
    ],
    metrics: [
      { label: 'Dock-to-stock', value: '-26%', sub: 'illustrative' },
      { label: 'Queue time', value: 'Measured', sub: 'per dock' },
      { label: 'Labor fit', value: 'To volume', sub: 'by shift' },
      { label: 'Steps tracked', value: '3', sub: 'receive to putaway' },
    ],
    dataSources: ['WMS', 'Labor management system', 'Appointment scheduling', 'ASN / EDI'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure SQL', 'DAX measures'],
  },
  {
    slug: 'fulfillment-accuracy-analytics',
    kind: 'analytics',
    sector: '3PL & Warehousing',
    title: 'Order fulfillment and pick accuracy analytics',
    summary:
      'A 3PL tracked fulfillment accuracy and cycle time by client to hold service levels as order volume rose.',
    challenge:
      'Mispicks and short ships drove client complaints, but errors were only counted after a claim, with no view of where in the pick-pack-ship flow they came from.',
    build:
      'We modeled order flow from pick to ship, measuring accuracy, cycle time, and error source by client, zone, and picker.',
    whatWeBuilt: [
      'Accuracy and cycle time by client, zone, and picker.',
      'Error source analysis across pick, pack, and ship.',
      'A client-facing service view with trend.',
    ],
    outcomes: [
      'Errors are located at the step that causes them.',
      'Accuracy is measured continuously, not after a claim.',
      'Client reviews run on a shared service view.',
    ],
    metrics: [
      { label: 'Pick accuracy', value: '99.4%', sub: 'illustrative' },
      { label: 'Error source', value: 'Located', sub: 'per step' },
      { label: 'Cycle time', value: 'Tracked', sub: 'pick to ship' },
      { label: 'View', value: 'Per client', sub: 'shared' },
    ],
    dataSources: ['WMS', 'Order management system', 'Shipping manifests', 'Returns data'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure Data Factory', 'Semantic model'],
  },
  {
    slug: 'inventory-aging-analytics',
    kind: 'analytics',
    sector: '3PL & Warehousing',
    title: 'Inventory aging and dead-stock analytics',
    summary:
      'A distributor surfaced slow and dead stock across sites to free the cash and space it was consuming.',
    challenge:
      'Slow-moving stock accumulated quietly across sites, tying up cash and space, and nobody saw it until a warehouse ran short of room.',
    build:
      'We built an aging model with days-on-hand, last-movement, and carrying cost by SKU and site, flagging dead and at-risk stock early.',
    whatWeBuilt: [
      'Aging buckets with days-on-hand and last movement by SKU.',
      'Carrying cost and space consumed by slow stock.',
      'Early flags for stock trending toward dead.',
    ],
    outcomes: [
      'Slow and dead stock is visible before it fills the warehouse.',
      'Cash and space tied up in excess inventory are recovered.',
      'Markdown and liquidation decisions are made on time.',
    ],
    metrics: [
      { label: 'Dead stock', value: '-21%', sub: 'illustrative' },
      { label: 'Carrying cost', value: 'Quantified', sub: 'per SKU' },
      { label: 'At-risk stock', value: 'Flagged', sub: 'early' },
      { label: 'Sites covered', value: 'All', sub: 'one view' },
    ],
    dataSources: ['WMS', 'NetSuite', 'Sales history', 'Cost master'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure SQL', 'DAX measures'],
  },

  // ----- Manufacturers & distributors ------------------------------------
  {
    slug: 'sop-demand-planning-analytics',
    kind: 'analytics',
    sector: 'Manufacturers & Distributors',
    title: 'S&OP and demand planning analytics',
    summary:
      'A manufacturer that imports components built an S&OP view tying demand, supply, and import lead times into one plan.',
    challenge:
      'Sales, operations, and procurement each planned off their own numbers, so the monthly S&OP meeting argued about data instead of deciding on it.',
    build:
      'We unified demand, supply, and inventory with import lead times into one planning model, with forecast accuracy measured by family and horizon.',
    whatWeBuilt: [
      'One demand, supply, and inventory view for S&OP.',
      'Forecast accuracy by product family and horizon.',
      'Import lead time built into the supply plan.',
    ],
    outcomes: [
      'The S&OP meeting decides instead of debating whose number is right.',
      'Forecast accuracy is measured and improved.',
      'Supply plans account for real import lead times.',
    ],
    metrics: [
      { label: 'Forecast accuracy', value: '+13 pts', sub: 'illustrative' },
      { label: 'Planning view', value: 'Single', sub: 'shared' },
      { label: 'Lead time', value: 'In the plan', sub: 'import-aware' },
      { label: 'Horizon', value: 'By family', sub: 'and period' },
    ],
    dataSources: ['SAP IBP', 'Sales history', 'Supplier lead times', 'Inventory data'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure Machine Learning', 'Semantic model'],
  },
  {
    slug: 'product-pnl-landed-cost',
    kind: 'analytics',
    sector: 'Manufacturers & Distributors',
    title: 'Product P&L with landed cost in COGS',
    summary:
      'A distributor built a product-level P&L that put true landed cost into COGS so margin by product was real.',
    challenge:
      'Product margin used a standard cost that ignored freight and duty, so the products that looked most profitable were sometimes the ones quietly losing money.',
    build:
      'We built a product P&L that folds landed cost into COGS and carries it through to margin by product, channel, and customer.',
    whatWeBuilt: [
      'Landed cost folded into COGS at the product level.',
      'Margin by product, channel, and customer.',
      'Comparison of standard cost against true landed cost.',
    ],
    outcomes: [
      'Product margin reflects real cost, freight and duty included.',
      'Loss-making products hidden by standard cost are exposed.',
      'Pricing and assortment decisions use true margin.',
    ],
    metrics: [
      { label: 'COGS', value: 'Landed', sub: 'freight and duty in' },
      { label: 'Margin', value: 'Per product', sub: 'and channel' },
      { label: 'Hidden losses', value: 'Exposed', sub: 'vs standard cost' },
      { label: 'Refresh', value: 'Daily', sub: 'governed' },
    ],
    dataSources: ['SAP S/4HANA', 'Freight and duty records', 'Sales ledger', 'Cost master'],
    stack: ['Microsoft Fabric', 'Power BI', 'DAX measures', 'Semantic model'],
  },
  {
    slug: 'export-compliance-analytics',
    kind: 'analytics',
    sector: 'Manufacturers & Distributors',
    title: 'Export order and compliance analytics',
    summary:
      'An exporter made license usage, screening, and documentation status visible across export orders in one view.',
    challenge:
      'Export compliance steps were tracked in separate checklists, so a missing license or screening gap on an order surfaced late, holding the shipment or risking a violation.',
    build:
      'We consolidated export orders with license, screening, and document status into one model that flags gaps before an order ships.',
    whatWeBuilt: [
      'Export orders with license, screening, and document status.',
      'Gap flags on orders missing a compliance step.',
      'License usage tracking against limits.',
    ],
    outcomes: [
      'Compliance gaps are caught before an order ships.',
      'License usage is tracked against its limits.',
      'Export holds and violation risk both fall.',
    ],
    metrics: [
      { label: 'Compliance gaps', value: 'Pre-ship', sub: 'flagged' },
      { label: 'License usage', value: 'Tracked', sub: 'vs limit' },
      { label: 'Orders covered', value: 'All', sub: 'export' },
      { label: 'Holds', value: 'Reduced', sub: 'illustrative' },
    ],
    dataSources: ['Oracle ERP', 'Export license records', 'Screening logs', 'Document management'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure SQL', 'Audit model'],
  },
  {
    slug: 'cross-border-inventory-positioning',
    kind: 'analytics',
    sector: 'Manufacturers & Distributors',
    title: 'Cross-border inventory positioning analytics',
    summary:
      'A distributor with stock on both sides of the border analyzed where to hold inventory to balance duty, freight, and service.',
    challenge:
      'Inventory was positioned by habit, so the business paid duty and freight to move stock that would have served the customer better from a different location.',
    build:
      'We modeled demand, duty, freight, and service by location to recommend where each product should be held across the cross-border network.',
    whatWeBuilt: [
      'Demand and service modeled by location and product.',
      'Duty and freight cost of each positioning option.',
      'Positioning recommendations that balance cost and service.',
    ],
    outcomes: [
      'Stock is positioned on cost and service, not habit.',
      'Duty and freight spent moving the wrong stock is cut.',
      'Service levels hold with less inventory in the network.',
    ],
    metrics: [
      { label: 'Positioning', value: 'Optimized', sub: 'cost vs service' },
      { label: 'Freight and duty', value: 'Lower', sub: 'illustrative' },
      { label: 'Service', value: 'Held', sub: 'with less stock' },
      { label: 'Network', value: 'Both sides', sub: 'of the border' },
    ],
    dataSources: ['NetSuite', 'Demand data', 'Duty tables', 'Freight rates'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure Machine Learning', 'Semantic model'],
  },

  // ----- Ports, finance, and executive -----------------------------------
  {
    slug: 'terminal-dwell-time-analytics',
    kind: 'analytics',
    sector: 'Ports & Terminals',
    title: 'Terminal throughput and dwell-time analytics',
    summary:
      'A terminal operator measured container dwell and gate throughput to ease congestion and move boxes faster.',
    challenge:
      'Congestion built up at the gate and in the yard, but the operator had no measured view of dwell time or throughput to act on before it became gridlock.',
    build:
      'We modeled gate, yard, and berth events into throughput and dwell-time analytics by container type, shift, and area.',
    whatWeBuilt: [
      'Dwell time by container type, status, and yard area.',
      'Gate and berth throughput by shift and hour.',
      'Congestion flags before the yard locks up.',
    ],
    outcomes: [
      'Dwell and congestion are measured instead of felt.',
      'Throughput bottlenecks are addressed before gridlock.',
      'Yard and gate resources follow real demand.',
    ],
    metrics: [
      { label: 'Dwell time', value: '-17%', sub: 'illustrative' },
      { label: 'Throughput', value: 'Per shift', sub: 'and hour' },
      { label: 'Congestion', value: 'Flagged', sub: 'early' },
      { label: 'Areas covered', value: 'Gate to berth', sub: 'full yard' },
    ],
    dataSources: ['Terminal operating system', 'Gate events', 'Vessel schedules', 'EDI'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure Data Factory', 'DAX measures'],
  },
  {
    slug: 'freight-invoice-audit-analytics',
    kind: 'analytics',
    sector: 'Trade Finance',
    title: 'Freight invoice audit and recovery analytics',
    summary:
      'A shipper audited freight invoices against contracted rates at scale to catch overcharges before they were paid.',
    challenge:
      'Freight invoices were approved on trust because checking each one against the contract by hand was impossible at volume, so overcharges were paid and rarely recovered.',
    build:
      'We matched every invoice line to the contracted rate and expected accessorials, flagging discrepancies for review before payment.',
    whatWeBuilt: [
      'Line-level matching of invoices to contracted rates.',
      'Discrepancy flags by carrier, lane, and charge type.',
      'A recovery worklist ranked by disputed value.',
    ],
    outcomes: [
      'Overcharges are caught before payment, not after.',
      'Recurring billing errors by carrier are surfaced and fixed.',
      'Recovered and prevented charges are quantified.',
    ],
    metrics: [
      { label: 'Overcharges caught', value: 'Pre-payment', sub: 'at scale' },
      { label: 'Invoices audited', value: '100%', sub: 'vs sampling' },
      { label: 'Recovery', value: '$640k', sub: 'illustrative' },
      { label: 'Worklist', value: 'By value', sub: 'ranked' },
    ],
    dataSources: ['Carrier invoices', 'Rate contracts', 'TMS', 'Accounts payable'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure SQL', 'Matching logic'],
  },
  {
    slug: 'trade-control-tower',
    kind: 'analytics',
    sector: 'Executive',
    title: 'Executive trade control tower',
    summary:
      'A trading group pulled cost, risk, service, and compliance into one executive view across the whole trade operation.',
    challenge:
      'Leadership read the trade operation through a stack of disconnected reports, so a complete picture of cost, service, and compliance risk was never in one place at one time.',
    build:
      'We built a control tower over the trade estate: landed cost, shipment status, compliance coverage, and service KPIs in one governed executive view with drill-down to the source.',
    whatWeBuilt: [
      'One executive view across cost, service, risk, and compliance.',
      'Drill-down from any KPI to the shipment, entry, or order behind it.',
      'Alerts on the metrics leadership chooses to watch.',
    ],
    outcomes: [
      'Leadership reads the operation from one view, not a stack of reports.',
      'Problems are seen and traced to their source in minutes.',
      'Every number carries one agreed definition.',
    ],
    metrics: [
      { label: 'Executive view', value: 'Single', sub: 'governed' },
      { label: 'Drill-down', value: 'To source', sub: 'any KPI' },
      { label: 'Domains', value: 'Cost to risk', sub: 'unified' },
      { label: 'Definition', value: 'One per KPI', sub: 'shared' },
    ],
    dataSources: ['SAP S/4HANA', 'TMS and WMS', 'Broker and ACE data', 'Carrier feeds'],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure Data Factory', 'Semantic model'],
    result:
      'The weekly leadership review moved from assembling reports to acting on one shared view of the trade operation.',
  },

  // ----- Software builds (a few; not the lead offer) ----------------------
  {
    slug: 'customs-filing-platform',
    kind: 'software',
    sector: 'Customs Brokerage',
    title: 'Customs filing and compliance platform',
    summary:
      'A customs broker moved off spreadsheets and disconnected tools onto one auditable platform for classification, screening, and filing.',
    challenge:
      'Entries were prepared across spreadsheets and email, screening was manual and hard to prove, and a single missed step could hold a shipment at the border or trigger a penalty.',
    build:
      'We built one platform that classifies goods, screens every party, calculates duty and landed cost, and produces an ACE-ready filing with a complete audit trail, wired to the systems the broker already used.',
    whatWeBuilt: [
      'HTS classification with duty and landed-cost calculation in the entry flow.',
      'Automated denied-party and sanctions screening on every counterparty.',
      'ACE-ready filing workflows with a full, auditable record per entry.',
    ],
    outcomes: [
      'Every entry classified, screened, and documented before it ships.',
      'A provable compliance record instead of scattered spreadsheets.',
      'Fewer holds and faster clearance.',
    ],
    metrics: [
      { label: 'Entry prep', value: 'One system', sub: 'vs spreadsheets' },
      { label: 'Screening', value: 'Every party', sub: 'automated' },
      { label: 'Audit record', value: 'Complete', sub: 'per entry' },
      { label: 'Holds', value: 'Reduced', sub: 'illustrative' },
    ],
    dataSources: ['ACE / ABI', 'EDI (X12)', 'HTS schedules', 'Denied-party lists'],
    stack: ['Web platform', 'EDI / ACE integration', 'Rules engine', 'Audit log'],
  },
  {
    slug: 'trade-erp-landed-cost',
    kind: 'software',
    sector: 'Importers',
    title: 'Trade ERP with true landed cost',
    summary:
      'An importer replaced a generic ERP and spreadsheets with a platform built around purchase orders, shipments, and landed cost.',
    challenge:
      'A generic ERP could not model freight, duty, and fees, so landed cost was a monthly spreadsheet exercise and margin by product was always a guess.',
    build:
      'We built a trade ERP around the import flow: purchase orders, shipments, and documents, with freight, duty, and fees allocated to every unit so landed cost and margin are known in real time.',
    whatWeBuilt: [
      'Purchase order, shipment, and document management built for import.',
      'Landed-cost allocation of freight, duty, and fees to the unit.',
      'Real-time margin by product, supplier, and shipment.',
    ],
    outcomes: [
      'Landed cost known at receipt, not at month end.',
      'Margin by product and supplier instead of a guess.',
      'One system from PO to stock instead of ERP plus spreadsheets.',
    ],
    metrics: [
      { label: 'Landed cost', value: 'At receipt', sub: 'real time' },
      { label: 'Margin', value: 'Per product', sub: 'and supplier' },
      { label: 'Systems', value: 'One', sub: 'PO to stock' },
      { label: 'Month-end', value: 'No rebuild', sub: 'illustrative' },
    ],
    dataSources: ['Supplier and PO data', 'Freight invoices', 'Duty tables', 'Banking / FX'],
    stack: ['Trade ERP', 'Integrations', 'Reporting', 'Document management'],
  },
  {
    slug: 'shipment-visibility-portal',
    kind: 'software',
    sector: 'Freight Forwarders',
    title: 'Shipment visibility and customer portal',
    summary:
      'A forwarder unified carrier, shipment, and document data into one platform with end-to-end visibility and a self-service portal.',
    challenge:
      'Shipment status lived in carrier portals, email, and spreadsheets, so customers called for updates the team had to dig up, and exceptions surfaced too late.',
    build:
      'We built a platform that consolidates carrier and shipment data over EDI and API, tracks every shipment end to end, and flags exceptions early, with a portal customers can self-serve.',
    whatWeBuilt: [
      'Carrier and shipment data unified over EDI and API.',
      'End-to-end tracking from supplier to door with exception flags.',
      'A customer portal for self-service status and documents.',
    ],
    outcomes: [
      'Shipment status in one place instead of several portals.',
      'Exceptions caught early instead of at delivery.',
      'Customers self-serve instead of calling for updates.',
    ],
    metrics: [
      { label: 'Status', value: 'One place', sub: 'vs portals' },
      { label: 'Exceptions', value: 'Early', sub: 'before delivery' },
      { label: 'Customers', value: 'Self-serve', sub: 'portal' },
      { label: 'Integration', value: 'EDI + API', sub: 'carriers' },
    ],
    dataSources: ['Ocean and air carrier EDI', 'Tracking APIs', 'TMS', 'Document store'],
    stack: ['Logistics platform', 'EDI / API', 'Customer portal', 'Alerting'],
  },
  {
    slug: 'denied-party-screening-service',
    kind: 'software',
    sector: 'Compliance',
    title: 'Denied-party screening service',
    summary:
      'A trading company built an in-flow screening service that checks every counterparty against watchlists as orders are created.',
    challenge:
      'Screening ran as a separate manual step on a periodic list, so new counterparties could transact before they were ever checked.',
    build:
      'We built a screening service wired into the order and party flow that checks every counterparty against watchlists in real time, records the result, and routes matches for review.',
    whatWeBuilt: [
      'Real-time screening of every counterparty as records are created.',
      'Match review and disposition with a complete record.',
      'Scheduled re-screening as watchlists change.',
    ],
    outcomes: [
      'No counterparty transacts before it is screened.',
      'Match handling is recorded and auditable.',
      'Re-screening catches a party newly added to a list.',
    ],
    metrics: [
      { label: 'Screening', value: 'In flow', sub: 'real time' },
      { label: 'Coverage', value: 'Every party', sub: 'at creation' },
      { label: 'Re-screen', value: 'Scheduled', sub: 'on list change' },
      { label: 'Record', value: 'Complete', sub: 'per match' },
    ],
    dataSources: ['Denied-party and sanctions lists', 'ERP party master', 'Order system', 'Audit store'],
    stack: ['Screening service', 'API integration', 'Review workflow', 'Audit log'],
  },
  {
    slug: 'bonded-ftz-wms',
    kind: 'software',
    sector: '3PL & Warehousing',
    title: 'Bonded and FTZ warehouse module',
    summary:
      'A 3PL added bonded and FTZ handling to its warehouse operation with the inventory and reporting those statuses require.',
    challenge:
      'Bonded and FTZ stock carried obligations a general WMS did not model, so compliance was maintained in side spreadsheets that drifted from the real inventory.',
    build:
      'We built a bonded and FTZ module over the warehouse flow that tracks status, movements, and the reporting those regimes require, tied to the live inventory.',
    whatWeBuilt: [
      'Bonded and FTZ status tracked on live inventory.',
      'Receiving, movement, and withdrawal rules for each regime.',
      'Reporting prepared from the inventory of record.',
    ],
    outcomes: [
      'Bonded and FTZ obligations are met from the live inventory.',
      'Compliance stops living in drifting spreadsheets.',
      'Reporting is produced from one source of record.',
    ],
    metrics: [
      { label: 'Status', value: 'On live stock', sub: 'not a sheet' },
      { label: 'Regimes', value: 'Bonded + FTZ', sub: 'modeled' },
      { label: 'Reporting', value: 'From record', sub: 'one source' },
      { label: 'Movements', value: 'Rule-checked', sub: 'per regime' },
    ],
    dataSources: ['WMS', 'Customs bonded records', 'FTZ reporting', 'ERP inventory'],
    stack: ['WMS module', 'Compliance rules', 'Reporting', 'Integrations'],
  },
  {
    slug: 'vessel-security-vision',
    kind: 'software',
    sector: 'Ports & Security',
    title: 'Vessel and cargo security vision',
    summary:
      'A terminal operator added computer vision over existing cameras for container, cargo, and perimeter monitoring with real-time alerts.',
    challenge:
      'Security relied on staff watching dozens of camera feeds, so incidents at the perimeter, on the yard, or at the berth were caught late or missed entirely.',
    build:
      'We layered computer vision over the existing camera network to detect anomalies, unauthorized access, and cargo events, routing real-time alerts to the security desk with the clip and location attached.',
    whatWeBuilt: [
      'Computer-vision models over yard, berth, and perimeter cameras.',
      'Anomaly, access, and cargo-event detection with real-time alerts.',
      'An incident console with clip, location, and audit trail.',
    ],
    outcomes: [
      'Incidents caught in real time instead of after the fact.',
      'A watch team that acts on alerts instead of scanning feeds.',
      'An auditable record of every flagged event.',
    ],
    metrics: [
      { label: 'Monitoring', value: 'Real time', sub: 'vs manual watch' },
      { label: 'Cameras', value: 'Existing', sub: 'reused' },
      { label: 'Alerts', value: 'With clip', sub: 'and location' },
      { label: 'Record', value: 'Auditable', sub: 'per event' },
    ],
    dataSources: ['Camera network (RTSP)', 'Access control', 'Yard / berth systems', 'Event store'],
    stack: ['Computer vision', 'Edge / streaming', 'Alerting', 'Web console'],
  },
];
