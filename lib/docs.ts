// ---------------------------------------------------------------------------
// Documentation hub content. A methodology and knowledge base for how Kadmoon
// delivers analytics for foreign trade: how we scope and build, where data
// comes from, how it is secured, the KPIs we model, and the terms we use.
//
// Authored as structured data so the docs pages, the sidebar, and the search
// index all read from one source. No client names, no unverified figures.
// ---------------------------------------------------------------------------

export type DocBlock =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'h2'; id: string; text: string };

export type Doc = {
  slug: string;
  title: string;
  group: 'Get started' | 'Reference';
  order: number;
  description: string;
  intro: string;
  blocks: DocBlock[];
};

// Plain-text extract of a doc, for the search index.
export function docText(doc: Doc): string {
  const parts = [doc.title, doc.description, doc.intro];
  for (const b of doc.blocks) {
    if (b.type === 'p' || b.type === 'h2') parts.push(b.text);
    if (b.type === 'list') parts.push(b.items.join(' '));
  }
  return parts.join(' ');
}

// Headings for the "On this page" rail.
export function docHeadings(doc: Doc): { id: string; text: string }[] {
  return doc.blocks.filter((b): b is Extract<DocBlock, { type: 'h2' }> => b.type === 'h2').map((b) => ({ id: b.id, text: b.text }));
}

export const docs: Doc[] = [
  {
    slug: 'platform-overview',
    title: 'Platform overview',
    group: 'Get started',
    order: 1,
    description:
      'What Kadmoon Trade Intelligence is: a governed trade data model, a KPI library, connectors, and reports, delivered in your own Microsoft tenant.',
    intro:
      'Kadmoon Trade Intelligence is the productized core of what we deliver: one governed model over the systems you already run, with the trade KPIs, connectors, and reports built on top. This page explains what it is, how it is put together, where it runs, and what you own. It is the conceptual overview; the reference pages that follow go deeper on data, security, and the KPIs.',
    blocks: [
      { type: 'h2', id: 'what-it-is', text: 'What it is' },
      {
        type: 'p',
        text: 'The platform is four things delivered as one: a governed data model of your trade, a library of trade KPIs defined a single time, the connectors that feed the model from your source systems, and the reports and alerts built on top. The important word is governed, every metric has one definition and every number traces back to its source. It is not a BI tool, which draws charts but knows nothing about trade, and it is not an application you install. It is a productized analytics layer, assembled and kept current, that runs on the Microsoft stack inside your own tenant.',
      },
      {
        type: 'p',
        text: 'Analytics is the lead offer, because it is what the model makes possible immediately. Software that we build on top of the same data, trade ERP, customs, warehouse, and security vision, is a roadmap introduced as a client needs it, not the headline. The platform is the analytics; the software grows from it.',
      },
      { type: 'h2', id: 'architecture', text: 'How it is put together' },
      {
        type: 'p',
        text: 'The platform follows the same four steps in every deployment. The data stays where it lives; we meet it there rather than asking you to move it.',
      },
      {
        type: 'list',
        items: [
          'Connect. Read from the systems you already run: SAP, Oracle, NetSuite, Microsoft, broker and carrier systems, EDI and ACE, and spreadsheets. The sources are left in place.',
          'Model. Build one governed trade data model where each KPI is defined once, with landed cost, duty, HTS, origin, and incoterms built in rather than rebuilt per report.',
          'Decide. Deliver landed cost, duty exposure, visibility, compliance, and inventory as governed reports and alerts, each number drillable to the shipment, entry, or order behind it.',
          'Run. Operate it in your own Microsoft tenant, or in a dedicated tenant we provision and manage, with the data isolated, documented, and yours.',
        ],
      },
      { type: 'h2', id: 'modules', text: 'What is in it' },
      {
        type: 'p',
        text: 'The subscription is scoped to the analytics domains you need. Each is built on the same model, so a number in one lines up with the same number in another.',
      },
      {
        type: 'list',
        items: [
          'Landed cost and margin. Freight, duty, insurance, and brokerage allocated to the unit, so margin by SKU, supplier, and shipment is known at receipt.',
          'Duty and tariff exposure. Duty owed by HTS code, origin, and product line, with a scenario layer that reprices the import book the day a rate changes.',
          'Shipment visibility and OTIF. Carrier milestones unified over EDI and API into one planned-versus-actual view, with OTIF, dwell, and delay by lane and carrier.',
          'Customs and compliance. Clearance time, entry throughput, classification consistency, and screening coverage, with an audit trail that answers a regulator from a report.',
          'Inventory and warehouse. Days on hand, aging, and fill rate across sites, bonded and FTZ stock included.',
          'Executive control tower. Cost, service, risk, and compliance in one governed view, every KPI defined once and drillable to the record behind it.',
        ],
      },
      { type: 'h2', id: 'tenant', text: 'Where it runs, and what you own' },
      {
        type: 'p',
        text: 'The analytics is delivered on Microsoft Fabric, Power BI, and Azure, inside your own tenant, so your trade data never leaves your control. If you already run Microsoft, it runs there. If you do not, we provision and manage a dedicated tenant for you, and the Microsoft capacity can be billed on one invoice with the platform through the managed Microsoft add-on.',
      },
      {
        type: 'p',
        text: 'The data, the model, and the reports are yours, documented and handed over. The subscription keeps them current and supported, but the asset lives in your tenant, so you are never locked in to keep operating. That is the point of running it in your environment rather than ours.',
      },
      { type: 'h2', id: 'governance', text: 'Governance, lineage, and security' },
      {
        type: 'p',
        text: 'One governed semantic layer gives each KPI a single definition, and every number carries lineage back to its source, so a figure questioned by an auditor, an executive, or a customs authority can be traced rather than reconstructed. Data quality is measured on the fields that drive duty and cost, classification, origin, and value, rather than assumed. Security follows the controls of your own Microsoft tenant; the Security reference page covers this in detail.',
      },
      { type: 'h2', id: 'engagement', text: 'How you start' },
      {
        type: 'p',
        text: 'The usual path is to start small, prove it, then run on it. The assessment is a fixed-scope engagement; the platform is a subscription; managed Microsoft is an optional add-on. The Engagement models page describes each in full.',
      },
      {
        type: 'list',
        items: [
          'Trade data assessment. A short, fixed-price engagement that maps your decisions and data and ships first reports in about two weeks. The fee credits toward the subscription.',
          'Trade intelligence subscription. The platform as a monthly or annual subscription: connectors, the model, the KPI library, and the reports kept current, with governance and support, scoped to what you run.',
          'Managed Microsoft. Optional. We provision and bill the Microsoft capacity the analytics runs on, so licensing and cloud arrive on one invoice with the platform.',
        ],
      },
      { type: 'h2', id: 'roadmap', text: 'Software built on the data' },
      {
        type: 'p',
        text: 'Once the governed model exists, operational software can be built on top of it: trade ERP, customs and compliance tools, inventory and warehouse workflows, and port and vessel security vision. These reuse the same data rather than starting over, and we build them when the analytics has shown where they pay off. They are a roadmap, not the lead offer. If a platform is on your horizon, say so in a quote request and we will scope it.',
      },
    ],
  },
  {
    slug: 'methodology',
    title: 'Methodology',
    group: 'Get started',
    order: 2,
    description: 'How we scope, build, and deliver trade analytics, and why value shows up by week two.',
    intro:
      'We start from the decision a leader needs to make, not from the tool. Every engagement follows the same arc: understand the questions, build the foundation, deliver in short cycles, and sustain what ships. This page describes that arc.',
    blocks: [
      { type: 'h2', id: 'principle', text: 'The operating principle' },
      {
        type: 'p',
        text: 'Analytics earns its keep when it changes a decision. So we begin by naming the decisions: what a buyer, a controller, or an operations lead needs to see, how often, and what they will do differently once they see it. Everything downstream, the data model and the reports, serves those decisions.',
      },
      { type: 'h2', id: 'phases', text: 'The four phases' },
      {
        type: 'p',
        text: 'A typical engagement moves through four phases. The first two are short on purpose, so the operation sees working analytics early rather than waiting on a long data project with nothing to show.',
      },
      {
        type: 'list',
        items: [
          'Discovery. We map the decisions, the questions behind them, the source systems, and the owner of each number. Output: a diagnosis and an architecture plan.',
          'Foundation. We build the right data foundation for your volume and the semantic layer that gives one definition per KPI. Output: the data model and first indicators.',
          'Build. We deliver in short cycles, validating each report with the area that uses it. Output: governed dashboards in production.',
          'Sustain. We train users, measure real usage, and keep the analytics current as rules, partners, and data change. Output: an evolution roadmap and a support agreement.',
        ],
      },
      { type: 'h2', id: 'semantic-layer', text: 'One definition per KPI' },
      {
        type: 'p',
        text: 'The most common failure in trade reporting is three versions of the same number in one meeting. We build a governed semantic layer so landed cost, margin, OTIF, and duty exposure each mean one thing across every report. Definitions are documented and owned, not rebuilt per analyst.',
      },
      { type: 'h2', id: 'acceptance', text: 'Acceptance and ownership' },
      {
        type: 'p',
        text: 'Every deliverable has acceptance criteria agreed before the build, so you know what ships, when, and how to validate it. Everything is built in your own tenant and handed over with documentation, so the analytics is yours to run with or without us.',
      },
    ],
  },
  {
    slug: 'engagement-models',
    title: 'Engagement models',
    group: 'Get started',
    order: 3,
    description: 'Three ways to work with us: a fixed-scope project, an embedded squad, or managed analytics.',
    intro:
      'The same senior team, acceptance criteria, and code you own run through every model. What changes is how the work is shaped and billed. Most clients start with an assessment, then pick the model that fits where they are.',
    blocks: [
      { type: 'h2', id: 'assessment', text: 'Trade data assessment' },
      {
        type: 'p',
        text: 'The usual first step. A short, fixed-scope engagement that maps your decisions and data and delivers first dashboards in about two weeks. It de-risks the larger build and produces a scope and a quote grounded in your real data.',
      },
      { type: 'h2', id: 'fixed-scope', text: 'Fixed-scope project' },
      {
        type: 'p',
        text: 'Best when the outcome is well defined. A defined build from data foundation to dashboards, with acceptance criteria per deliverable and milestone-based billing. You know exactly what you get, when, and how to validate it.',
      },
      { type: 'h2', id: 'squad', text: 'Dedicated analytics squad' },
      {
        type: 'p',
        text: 'Best for an evolving roadmap. Senior analytics engineers embedded on your priorities, working in two-week cycles against a backlog you control. The people who build your models stay to evolve them.',
      },
      { type: 'h2', id: 'managed', text: 'Managed analytics' },
      {
        type: 'p',
        text: 'Best after go-live. We run and evolve your analytics estate on a defined service agreement: refreshes, governance, new reports as needs change, and a roadmap for what comes next.',
      },
    ],
  },
  {
    slug: 'data-integration',
    title: 'Data integration',
    group: 'Reference',
    order: 3,
    description: 'Where the data comes from and how we bring SAP, Microsoft, Oracle, EDI, ACE, and more into one model.',
    intro:
      'Trade data is scattered by nature: an ERP, a broker portal, carrier feeds, a warehouse system, and spreadsheets each hold part of the picture. We bring them into one governed model without asking you to replace any of them.',
    blocks: [
      { type: 'h2', id: 'sources', text: 'Sources we connect' },
      {
        type: 'p',
        text: 'Data can originate anywhere your operation already runs. We read from the system of record rather than asking teams to rekey anything.',
      },
      {
        type: 'list',
        items: [
          'ERP: SAP S/4HANA and ECC, Oracle, NetSuite, Microsoft Dynamics 365, Infor.',
          'Customs and trade: ACE and ABI, broker filing systems, HTS and duty schedules, denied-party lists.',
          'Logistics: TMS and WMS, ocean and air carrier EDI, tracking APIs, freight invoices.',
          'Finance and other: accounts payable, treasury and FX feeds, Salesforce, and spreadsheets where they are still the source.',
        ],
      },
      { type: 'h2', id: 'ingestion', text: 'How ingestion works' },
      {
        type: 'p',
        text: 'We land raw data in your tenant, then shape it in layers: a raw copy for lineage, a cleaned and conformed layer, and a semantic model the reports read from. Pipelines run on a schedule or near real time where the source and the decision justify it.',
      },
      { type: 'h2', id: 'edi', text: 'EDI and ACE' },
      {
        type: 'p',
        text: 'Carrier EDI and customs messages are parsed into structured events so milestones, exceptions, and filings become data you can measure, not documents you have to read. We map the message types your partners actually send and validate against them.',
      },
      { type: 'h2', id: 'platform', text: 'The delivery platform' },
      {
        type: 'p',
        text: 'We deliver analytics on the Microsoft stack, Fabric, Power BI, and Azure, inside your own tenant. The platform is the how, not the point: the goal is one trusted set of numbers, and the sources above feed it whatever tools they run on.',
      },
    ],
  },
  {
    slug: 'security',
    title: 'Security & your tenant',
    group: 'Reference',
    order: 4,
    description: 'Where your data lives, who can see it, and how governance ships with the build.',
    intro:
      'Analytics over trade data touches cost, suppliers, and compliance, so security is part of the build rather than a cleanup after an audit. The guiding rule is simple: your data stays yours.',
    blocks: [
      { type: 'h2', id: 'tenant', text: 'Built in your tenant' },
      {
        type: 'p',
        text: 'Models, pipelines, and reports are built in your own cloud tenant. We do not hold your data in ours. When an engagement ends, nothing has to move, because it was always in your environment and under your control.',
      },
      { type: 'h2', id: 'access', text: 'Access and row-level security' },
      {
        type: 'p',
        text: 'Row-level security restricts what each person sees to the data they should, so a regional manager, a broker client, or a supplier portal each see only their slice of the same model. Access follows your identity provider and groups.',
      },
      { type: 'h2', id: 'governance', text: 'Governance and lineage' },
      {
        type: 'p',
        text: 'Cataloging and lineage make it possible to trace any number back to its source, which matters when an auditor or a leader asks where a figure came from. Data loss prevention and workspace policy are applied as part of the build.',
      },
      { type: 'h2', id: 'client-access', text: 'How client access is provisioned' },
      {
        type: 'p',
        text: 'There is no public login, because access is provisioned per engagement inside your tenant with your own credentials and policies. If you are an existing client and need access or a new report, request it and we will set it up against your environment.',
      },
    ],
  },
  {
    slug: 'kpi-library',
    title: 'KPI library',
    group: 'Reference',
    order: 5,
    description: 'The trade metrics we model, with one definition each, from landed cost to dwell time.',
    intro:
      'These are the metrics that come up most often in trade analytics. Each is modeled with a single definition so it reads the same in every report. The list is a starting point, not a limit.',
    blocks: [
      { type: 'h2', id: 'cost', text: 'Cost and margin' },
      {
        type: 'list',
        items: [
          'Landed cost: unit cost with freight, duty, insurance, and brokerage allocated to it.',
          'Duty exposure: duty owed by HTS code, country of origin, and product line.',
          'Realized margin: margin after every deduction, from list price to the bottom line.',
          'Freight cost per lane: normalized freight spend by lane, mode, and accessorial.',
          'Effective duty rate: total duties and fees over total entered value, the blended rate you actually pay.',
          'Duty as % of value: duty over customs value, a measure of exposure intensity.',
          'Tariff stack contribution: duty split by regime (base, Section 301, Section 232, AD/CVD) to show what drives it.',
          'MPF efficiency: merchandise processing fee per unit against the fee cap, a consolidation signal.',
          'Deposited vs liquidated duty variance: open duty exposure until an entry is finalized.',
        ],
      },
      { type: 'h2', id: 'service', text: 'Service and logistics' },
      {
        type: 'list',
        items: [
          'OTIF: on-time in-full delivery against the customer requirement, with miss cause attributed.',
          'Transit time and variance: planned versus actual transit by lane and carrier.',
          'Demurrage and detention: charges tied to container events and the free-time clock.',
          'Dwell time: how long containers sit at a terminal, by type and area.',
          'Entry throughput: entries or lines processed per period, a workload and capacity measure.',
        ],
      },
      { type: 'h2', id: 'compliance', text: 'Compliance and customs' },
      {
        type: 'list',
        items: [
          'Clearance time: time from entry to release, by port, client, and filer.',
          'Screening coverage: the share of parties screened against watchlists, with an audit trail.',
          'Classification consistency: how consistently similar goods carry the same HTS code.',
          'Drawback recovery: refundable duty on exported goods matched back to imports.',
          'FTA qualification rate: the share of eligible value actually claimed under a trade agreement.',
          'ISF and EEI timeliness: on-time filing rate for import security and export filings, a penalty exposure.',
          'Exam and hold rate: the share of entries examined or held, by agency, origin, and HTS.',
        ],
      },
      { type: 'h2', id: 'inventory', text: 'Inventory and planning' },
      {
        type: 'list',
        items: [
          'Days on hand: inventory cover by SKU and site, including bonded and FTZ stock.',
          'Forecast accuracy: forecast versus actual by product family and horizon.',
          'Fill rate: order lines shipped complete, by client and zone.',
          'Dead stock: inventory with no movement over a defined window and its carrying cost.',
          'In-transit inventory value: capital tied up in goods still moving through the pipeline.',
          'Inventory turns: cost of goods sold over average inventory, how fast stock cycles.',
        ],
      },
    ],
  },
  {
    slug: 'glossary',
    title: 'Glossary',
    group: 'Reference',
    order: 6,
    description: 'Plain definitions of the trade and analytics terms used across the site.',
    intro:
      'A short reference for the terms that come up in trade analytics. Where a term has a strict regulatory meaning, the definition here is the working one we use in reporting.',
    blocks: [
      { type: 'h2', id: 'trade', text: 'Trade and customs' },
      {
        type: 'list',
        items: [
          'HTS: the Harmonized Tariff Schedule code that classifies a good and sets its duty rate.',
          'ACE: the Automated Commercial Environment, the US system brokers file entries through.',
          'Denied-party screening: checking counterparties against sanctions and restricted-party lists.',
          'Duty drawback: a refund of duty paid on imported goods that are later exported.',
          'Bonded and FTZ: inventory held under customs control where duty is deferred or suspended.',
          'Landed cost: the full cost of a good delivered, freight, duty, and fees included.',
          'CBP: US Customs and Border Protection, which administers imports and collects duty.',
          'Country of origin: where a good is from for tariff and preference purposes; it drives which tariff regime applies.',
          'ISF (10+2): the importer security filing required before an ocean shipment loads.',
          'Entry summary (7501): the filing that reports classification, value, origin, and duty on an import.',
          'Liquidation: CBP’s final determination of duty owed, which closes an entry.',
          'Incoterms: the standard terms (2020 edition) that set who bears cost and risk and who clears import.',
          'USMCA: the US-Mexico-Canada free-trade agreement, with rules of origin for duty-free treatment.',
        ],
      },
      { type: 'h2', id: 'tariffs', text: 'Tariffs and duties' },
      {
        type: 'list',
        items: [
          'Customs value: the value duties are assessed on, usually the transaction value plus statutory additions.',
          'Section 301: tariffs on unfair trade practices, imposed by the USTR; the China program is the main example.',
          'Section 232: tariffs on national-security grounds, originally steel and aluminum, expanded to more goods since.',
          'AD/CVD: antidumping and countervailing duties on dumped or subsidized goods, specific to order and producer.',
          'MPF and HMF: the merchandise processing fee (ad valorem, with a floor and cap) and harbor maintenance fee (ocean imports).',
          'De minimis: the low-value import exemption, historically $800, significantly curtailed in recent US policy.',
          'Effective duty rate: total duties and fees over total entered value, the blended rate actually paid.',
        ],
      },
      { type: 'h2', id: 'logistics', text: 'Logistics' },
      {
        type: 'list',
        items: [
          'OTIF: on-time in-full, a delivery met in both timing and quantity.',
          'Demurrage: a charge for keeping a container at the terminal beyond free time.',
          'Detention: a charge for keeping carrier equipment beyond the agreed window.',
          'EDI: electronic data interchange, the message standard carriers and partners exchange.',
          '3PL: a third-party logistics provider that runs warehousing or transport for others.',
        ],
      },
      { type: 'h2', id: 'analytics', text: 'Analytics' },
      {
        type: 'list',
        items: [
          'Semantic model: the governed layer that defines each KPI once for every report.',
          'Row-level security: a rule set that limits each viewer to the rows they may see.',
          'Lineage: the traceable path from a reported number back to its source data.',
          'Lakehouse: a storage pattern that keeps raw and modeled data in one governed place.',
        ],
      },
    ],
  },
];

export function getDoc(slug: string): Doc | undefined {
  return docs.find((d) => d.slug === slug);
}
