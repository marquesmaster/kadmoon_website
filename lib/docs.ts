// ---------------------------------------------------------------------------
// Documentation hub content. A methodology and knowledge base for how Kadmoon
// delivers Power BI and the Microsoft stack: how we scope and build, where data
// comes from, how it is secured, the measures we model, and the terms we use.
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
    title: 'How we deliver',
    group: 'Get started',
    order: 1,
    description:
      'What a Kadmoon engagement delivers: a governed semantic model, Power BI reports, and the Power Platform, Fabric, and Copilot work around it, in your own Microsoft tenant.',
    intro:
      'What we deliver is one governed model over the systems you already run, with Power BI reports built on top and the rest of the Microsoft stack layered on as it earns its place. This page explains what it is, how it is put together, where it runs, and what you own. The reference pages that follow go deeper on data, security, and the measures.',
    blocks: [
      { type: 'h2', id: 'what-it-is', text: 'What it is' },
      {
        type: 'p',
        text: 'A Kadmoon engagement is four things delivered as one: a governed semantic model of your business, a set of measures defined a single time, the connections that feed the model from your source systems, and the Power BI reports and alerts built on top. The important word is governed: every measure has one definition and every number traces back to its source. We are not reselling a BI tool; we are building the model and the reports that make Power BI trustworthy in your tenant.',
      },
      {
        type: 'p',
        text: 'Power BI is the lead. On the same governed model we also build Power Platform apps and automation, data engineering on Microsoft Fabric and Azure, and Copilot and AI. These grow from the reporting as you need them, not before.',
      },
      { type: 'h2', id: 'architecture', text: 'How it is put together' },
      {
        type: 'p',
        text: 'Every engagement follows the same four steps. The data stays where it lives; we meet it there rather than asking you to move it.',
      },
      {
        type: 'list',
        items: [
          'Connect. Read from the systems you already run: SQL Server, Dynamics 365, SAP, Oracle, NetSuite, Salesforce, Excel, SharePoint, and APIs. The sources are left in place.',
          'Model. Build one governed semantic model where each measure is defined once, with the hierarchies and business rules built in rather than rebuilt per report.',
          'Decide. Deliver dashboards and reports with each number drillable to the record behind it, and alerts where a threshold matters.',
          'Run. Operate it in your own Microsoft tenant, or in a dedicated tenant we provision and manage, with the data isolated, documented, and yours.',
        ],
      },
      { type: 'h2', id: 'service-lines', text: 'The four service lines' },
      {
        type: 'p',
        text: 'The work is scoped to what you need, in this order of prominence. Each builds on the same model, so a number in one lines up with the same number in another.',
      },
      {
        type: 'list',
        items: [
          'Power BI. Governed dashboards and reports, semantic models, migration from legacy BI and spreadsheets, embedded analytics, and Power BI governance.',
          'Power Platform. Power Apps and Power Automate on the same data: input screens, approvals, and alerts that turn a report into an action.',
          'Data engineering. Lakehouse, pipelines, and the modeling layer on Microsoft Fabric and Azure, so refreshes are fast and reliable.',
          'Copilot and AI. Copilot in Power BI and natural-language question and answer over the governed model, with the same security and definitions as every report.',
        ],
      },
      { type: 'h2', id: 'tenant', text: 'Where it runs, and what you own' },
      {
        type: 'p',
        text: 'The analytics is delivered on Power BI, Microsoft Fabric, and Azure, inside your own tenant, so your data never leaves your control. If you already run Microsoft, it runs there. If you do not, we provision and manage a dedicated tenant for you, and the Microsoft capacity can be billed on one invoice through the managed Microsoft add-on.',
      },
      {
        type: 'p',
        text: 'The data, the model, and the reports are yours, documented and handed over. A support agreement keeps them current, but the asset lives in your tenant, so you are never locked in to keep operating. That is the point of running it in your environment rather than ours.',
      },
      { type: 'h2', id: 'governance', text: 'Governance, lineage, and security' },
      {
        type: 'p',
        text: 'One governed semantic model gives each measure a single definition, and every number carries lineage back to its source, so a figure questioned by an auditor or an executive can be traced rather than reconstructed. Security follows the controls of your own Microsoft tenant; the Security reference page covers this in detail.',
      },
      { type: 'h2', id: 'engagement', text: 'How you start' },
      {
        type: 'p',
        text: 'The usual path is to start small, prove it, then run on it. We are a boutique with two models: by project, or a monthly subscription. The Engagement models page describes each in full.',
      },
      {
        type: 'list',
        items: [
          'Power BI assessment. A short, fixed-price first project that maps your decisions and data and ships first dashboards in about two weeks, then leads into one of the two models.',
          'By project. A fixed-scope build with defined deliverables, acceptance criteria, and milestone billing.',
          'Monthly subscription. A recurring retainer where we run and evolve your Power BI, with an optional managed Microsoft add-on that bills the Microsoft capacity on one invoice.',
        ],
      },
    ],
  },
  {
    slug: 'methodology',
    title: 'Methodology',
    group: 'Get started',
    order: 2,
    description: 'How we scope, build, and deliver Power BI, and why value shows up by week two.',
    intro:
      'We start from the decision a leader needs to make, not from the tool. Every engagement follows the same arc: understand the questions, build the foundation, deliver in short cycles, and sustain what ships. This page describes that arc.',
    blocks: [
      { type: 'h2', id: 'principle', text: 'The operating principle' },
      {
        type: 'p',
        text: 'Analytics earns its keep when it changes a decision. So we begin by naming the decisions: what a controller, a sales leader, or an operations lead needs to see, how often, and what they will do differently once they see it. Everything downstream, the data model and the reports, serves those decisions.',
      },
      { type: 'h2', id: 'phases', text: 'The four phases' },
      {
        type: 'p',
        text: 'A typical engagement moves through four phases. The first two are short on purpose, so the business sees working reports early rather than waiting on a long data project with nothing to show.',
      },
      {
        type: 'list',
        items: [
          'Discovery. We map the decisions, the questions behind them, the source systems, and the owner of each number. Output: a diagnosis and an architecture plan.',
          'Foundation. We build the right data foundation for your volume and the semantic model that gives one definition per measure. Output: the data model and first dashboards.',
          'Build. We deliver in short cycles, validating each report with the area that uses it. Output: governed dashboards in production.',
          'Sustain. We train users, measure real usage, and keep the reporting current as the business and data change. Output: an evolution roadmap and a support agreement.',
        ],
      },
      { type: 'h2', id: 'semantic-layer', text: 'One definition per measure' },
      {
        type: 'p',
        text: 'The most common failure in reporting is three versions of the same number in one meeting. We build a governed semantic model so revenue, margin, and the KPIs your leaders watch each mean one thing across every report. Definitions are documented and owned, not rebuilt per analyst.',
      },
      { type: 'h2', id: 'acceptance', text: 'Acceptance and ownership' },
      {
        type: 'p',
        text: 'Every deliverable has acceptance criteria agreed before the build, so you know what ships, when, and how to validate it. Everything is built in your own tenant and handed over with documentation, so the reporting is yours to run with or without us.',
      },
    ],
  },
  {
    slug: 'engagement-models',
    title: 'Engagement models',
    group: 'Get started',
    order: 3,
    description: 'A boutique with two models: by project, or a monthly subscription, starting from a Power BI assessment.',
    intro:
      'Kadmoon is a boutique, so there are two ways to work with us: by project, or on a monthly subscription. The same senior team and the model you own run through both. Most clients start with a Power BI assessment, then pick the model that fits where they are.',
    blocks: [
      { type: 'h2', id: 'assessment', text: 'Start with a Power BI assessment' },
      {
        type: 'p',
        text: 'The usual first step. A short, fixed-scope first project that maps your decisions and data and delivers first dashboards in about two weeks. It de-risks the larger build, produces a scope and a quote grounded in your real data, and leads into one of the two models below.',
      },
      { type: 'h2', id: 'by-project', text: 'By project' },
      {
        type: 'p',
        text: 'Best when the outcome is well defined. A fixed-scope build from data foundation to dashboards, with acceptance criteria per deliverable and milestone billing. You know exactly what you get, when, and how to validate it. A dedicated squad against a backlog you control is a flavor of this model for a larger, evolving build.',
      },
      { type: 'h2', id: 'monthly-subscription', text: 'Monthly subscription' },
      {
        type: 'p',
        text: 'Best for ongoing work. A monthly retainer where we run and evolve your Power BI: refreshes and governance kept current, new reports as needs change, and Copilot and AI as it matures. A boutique partner on call, with an optional managed Microsoft add-on that bills the Microsoft capacity on one invoice.',
      },
    ],
  },
  {
    slug: 'data-integration',
    title: 'Data integration',
    group: 'Reference',
    order: 3,
    description: 'Where the data comes from and how we bring SQL Server, Dynamics, SAP, Salesforce, Excel, and APIs into one model.',
    intro:
      'Business data is scattered by nature: an ERP, a CRM, a finance system, a few line-of-business apps, and spreadsheets each hold part of the picture. We bring them into one governed model without asking you to replace any of them.',
    blocks: [
      { type: 'h2', id: 'sources', text: 'Sources we connect' },
      {
        type: 'p',
        text: 'Data can originate anywhere your business already runs. We read from the system of record rather than asking teams to rekey anything.',
      },
      {
        type: 'list',
        items: [
          'ERP: Dynamics 365, SAP S/4HANA and ECC, Oracle, NetSuite, Infor.',
          'CRM and go-to-market: Salesforce, Dynamics 365 Sales, HubSpot, billing and subscription systems.',
          'Databases and apps: SQL Server, Azure SQL, PostgreSQL, line-of-business APIs.',
          'Finance and other: accounts payable and treasury, Excel and SharePoint where they are still the source.',
        ],
      },
      { type: 'h2', id: 'ingestion', text: 'How ingestion works' },
      {
        type: 'p',
        text: 'We land raw data in your tenant, then shape it in layers: a raw copy for lineage, a cleaned and conformed layer, and a semantic model the reports read from. Pipelines run on a schedule or near real time where the source and the decision justify it, built on Microsoft Fabric and Azure Data Factory.',
      },
      { type: 'h2', id: 'quality', text: 'Data quality and refresh' },
      {
        type: 'p',
        text: 'We check the fields that drive the numbers, keys, amounts, and dates, rather than assume them, and use incremental refresh so large tables stay fast. Failures are monitored and alerted, so a broken pipeline is caught before it reaches a report.',
      },
      { type: 'h2', id: 'platform', text: 'The delivery platform' },
      {
        type: 'p',
        text: 'We deliver analytics on the Microsoft stack, Power BI, Fabric, and Azure, inside your own tenant. The platform is the how, not the point: the goal is one trusted set of numbers, and the sources above feed it whatever tools they run on.',
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
      'Analytics touches revenue, people, and financials, so security is part of the build rather than a cleanup after an audit. The guiding rule is simple: your data stays yours.',
    blocks: [
      { type: 'h2', id: 'tenant', text: 'Built in your tenant' },
      {
        type: 'p',
        text: 'Models, pipelines, and reports are built in your own Microsoft tenant. We do not hold your data in ours. When an engagement ends, nothing has to move, because it was always in your environment and under your control.',
      },
      { type: 'h2', id: 'access', text: 'Access and row-level security' },
      {
        type: 'p',
        text: 'Row-level security restricts what each person sees to the data they should, so a regional manager, a business unit lead, or an external customer each see only their slice of the same model. Access follows your identity provider and groups, usually Microsoft Entra ID.',
      },
      { type: 'h2', id: 'governance', text: 'Governance and lineage' },
      {
        type: 'p',
        text: 'Workspace structure, cataloging, and lineage make it possible to trace any number back to its source, which matters when an auditor or a leader asks where a figure came from. Data loss prevention and workspace policy are applied as part of the build.',
      },
      { type: 'h2', id: 'client-access', text: 'How client access is provisioned' },
      {
        type: 'p',
        text: 'There is no public login, because reports run in your own Microsoft tenant: people sign in to Power BI with your credentials and policies. If you are an existing client and need access or a new report, request it and we will set it up against your environment.',
      },
    ],
  },
  {
    slug: 'kpi-library',
    title: 'Measure library',
    group: 'Reference',
    order: 5,
    description: 'The business measures we model in Power BI, with one definition each, across finance, sales, and operations.',
    intro:
      'These are the measures that come up most often in Power BI reporting. Each is modeled with a single definition so it reads the same in every report. The list is a starting point, not a limit.',
    blocks: [
      { type: 'h2', id: 'finance', text: 'Finance and margin' },
      {
        type: 'list',
        items: [
          'Revenue: recognized revenue by period, product, and segment, reconciled to the general ledger.',
          'Gross margin: revenue less cost of goods sold, as an amount and a percentage.',
          'Budget versus actual: variance to budget and forecast, down to the cost center.',
          'EBITDA: earnings before interest, tax, depreciation, and amortization.',
          'Cash and working capital: cash position, receivables and payables aging, and days outstanding.',
          'Cost to serve: the fully loaded cost of serving a customer or segment.',
        ],
      },
      { type: 'h2', id: 'sales', text: 'Sales and revenue' },
      {
        type: 'list',
        items: [
          'Pipeline and coverage: open pipeline against the target, by stage and owner.',
          'Win rate: the share of qualified opportunities won, by segment and stage.',
          'Net revenue retention: expansion less contraction and churn across the installed base.',
          'Bookings and ARR: new, expansion, and total recurring revenue.',
          'Sales cycle: time from creation to close, by segment.',
        ],
      },
      { type: 'h2', id: 'operations', text: 'Operations and service' },
      {
        type: 'list',
        items: [
          'On-time delivery: the share delivered on time and in full against the commitment.',
          'Throughput and yield: units processed and the share that pass first time.',
          'Utilization: billable or productive time against capacity.',
          'Fill rate: order lines shipped complete, by customer and site.',
          'Backlog and aging: open work and how long it has been open.',
        ],
      },
      { type: 'h2', id: 'engineering', text: 'Analytics engineering' },
      {
        type: 'list',
        items: [
          'Refresh reliability: the share of scheduled refreshes that complete on time.',
          'Report adoption: active users and views, a signal of what is actually used.',
          'Data freshness: the lag between a source event and its appearance in a report.',
          'Model performance: query and visual response time against a target.',
        ],
      },
    ],
  },
  {
    slug: 'glossary',
    title: 'Glossary',
    group: 'Reference',
    order: 6,
    description: 'Plain definitions of the Power BI, Microsoft, and data terms used across the site.',
    intro:
      'A short reference for the terms that come up in Power BI and the Microsoft data stack. Where a term has a strict product meaning, the definition here is the working one we use in delivery.',
    blocks: [
      { type: 'h2', id: 'power-bi', text: 'Power BI' },
      {
        type: 'list',
        items: [
          'Semantic model: the governed layer that defines each measure once for every report (formerly called a dataset).',
          'Measure: a calculation defined in the model, written in DAX, that aggregates as users slice the data.',
          'DAX: Data Analysis Expressions, the formula language Power BI measures are written in.',
          'Row-level security (RLS): a rule set that limits each viewer to the rows they may see.',
          'Workspace: the container in the Power BI service where reports, models, and dashboards live and are secured.',
          'Embedded: Power BI reports surfaced inside your own application or portal.',
          'Power BI assessment: our short, fixed-scope first engagement that ships first dashboards in about two weeks.',
        ],
      },
      { type: 'h2', id: 'microsoft', text: 'Microsoft stack' },
      {
        type: 'list',
        items: [
          'Microsoft Fabric: the unified data platform (lakehouse, warehouse, pipelines) the model is built on.',
          'Azure: the Microsoft cloud your tenant and infrastructure run on.',
          'Power Platform: Power Apps and Power Automate, for apps and automation on your data.',
          'Dataverse: the managed data store behind the Power Platform.',
          'Copilot: Microsoft’s AI assistant, including Copilot in Power BI for natural-language questions.',
          'Microsoft Entra ID: the identity provider (formerly Azure Active Directory) that access follows.',
          'Tenant: your own isolated Microsoft environment, where your data, model, and reports live.',
        ],
      },
      { type: 'h2', id: 'data', text: 'Data and engineering' },
      {
        type: 'list',
        items: [
          'Lakehouse: a storage pattern that keeps raw and modeled data in one governed place.',
          'Pipeline: an automated flow that moves and transforms data from a source into the model.',
          'Incremental refresh: refreshing only the data that changed, so large tables stay fast.',
          'Lineage: the traceable path from a reported number back to its source data.',
          'Star schema: the fact-and-dimension model shape Power BI performs best on.',
          'ETL and ELT: extract, transform, and load patterns for preparing data for reporting.',
        ],
      },
    ],
  },
];

export function getDoc(slug: string): Doc | undefined {
  return docs.find((d) => d.slug === slug);
}
