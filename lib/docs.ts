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
    slug: 'methodology',
    title: 'Methodology',
    group: 'Get started',
    order: 1,
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
    order: 2,
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
