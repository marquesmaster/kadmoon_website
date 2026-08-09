/**
 * All landing-page copy for Kadmoon, Inc.
 *
 * The marketing copy (hero, capabilities, why, buyer's guide, process,
 * industries) is the final, approved English from the build brief and is used
 * verbatim. The FAQ answers were written for this build in a plain, specific
 * voice. Placeholders that the founder must confirm are marked with `TODO`
 * comments so they are easy to find and swap.
 */

export const nav = {
  wordmark: 'Kadmoon',
  suffix: 'INC.',
  links: [
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Cases', href: '/cases' },
    { label: 'Dashboards', href: '/dashboards' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
  ],
  cta: { label: 'Start a project', href: '/#contact' },
};

export const hero = {
  eyebrow: '100% Microsoft ecosystem · Austin, TX',
  // The accent phrase is rendered in orange inside the H1.
  headlineBefore: 'Data intelligence that becomes ',
  headlineAccent: 'decisions',
  headlineAfter: '.',
  subhead:
    'Kadmoon is a Power BI and Microsoft Power Platform consultancy. We take scattered raw data to the dashboard your leadership opens every Monday, on a governed foundation of Microsoft Fabric, Synapse, and Azure.',
  flagship: 'Signature practice: tenant-to-tenant and legacy BI migrations.',
  ctas: [
    { label: 'Talk to an expert', href: '#contact', primary: true },
    { label: 'See dashboards', href: '/dashboards', primary: false },
  ],
};

// TODO(founder): replace with real, defensible figures (clients, dashboards
// delivered, migrations, years) before launch.
export const stats = [
  { value: '100%', label: 'Microsoft ecosystem' },
  { value: 'Week 2', label: 'first dashboards live' },
  { value: '0%', label: 'turnover in operation' },
  { value: 'SLA', label: 'managed BI support' },
];

export const capabilities = {
  eyebrow: 'What we do',
  title: 'From raw data to the decision, in the Microsoft ecosystem.',
  sub: 'We cover the full data value chain: foundation, visualization, automation, intelligence, and support, with the depth of a team that has shipped on Power BI, Fabric, and Azure.',
  items: [
    {
      title: 'Power BI',
      body: 'From raw, scattered data to the dashboard your leadership opens every Monday. Governed models, one definition per KPI, and reports people actually use.',
    },
    {
      title: 'Tenant-to-tenant migration',
      body: 'Move your whole Microsoft environment to a new tenant without erasing years of BI and automation history. Inventoried, remapped, and cut over in phases.',
    },
    {
      title: 'Power Platform',
      body: 'Power Apps, Power Automate, Power Pages, and Copilot Studio: low-code apps and automations that solve real processes, governed from day one.',
    },
    {
      title: 'Data engineering',
      body: 'The foundation that makes BI stop lying. Pipelines and warehouses on Microsoft Fabric, Azure Synapse, and Data Factory, with a semantic layer over clean data.',
    },
    {
      title: 'Analytics & AI',
      body: 'From what happened to what will happen, and what to do about it. Forecasting and classification models, Azure ML, and Copilot where it earns its place.',
    },
    {
      title: 'Data governance',
      body: 'Scale BI without turning data into risk. Row-level security, Microsoft Purview, workspace and DLP policy, and a Power Platform Center of Excellence.',
    },
  ],
};

export const why = {
  eyebrow: 'Why Kadmoon',
  title: 'A data partner you can build decisions on.',
  sub: 'Each of these is a decision we made so your BI stops being a pile of conflicting reports and becomes a source of truth the whole company trusts.',
  items: [
    {
      title: 'One definition per KPI',
      body: 'We build a semantic layer so revenue, margin, and churn mean the same thing in every report. No more three versions of the truth in one meeting.',
    },
    {
      title: 'Senior in-house team, 0% turnover',
      body: 'No subcontractors. The Power BI, data, and Power Platform engineers who start your project are the ones who ship it and support it.',
    },
    {
      title: 'Value from week two',
      body: 'We start from the decision, not the tool. You see working dashboards early instead of waiting months for a data project with nothing to show.',
    },
    {
      title: 'Governed by default',
      body: 'Row-level security, Microsoft Purview, workspace structure, and DLP policy are part of the build, not a cleanup later. BI that scales without becoming a risk.',
    },
    {
      title: '100% Microsoft ecosystem',
      body: 'Power BI, Microsoft Fabric, Azure Synapse and Data Factory, Power Platform, and Dataverse. Deep in one stack instead of shallow across five.',
    },
    {
      title: 'You own it',
      body: 'Everything is built in your tenant: your data, your workspaces, your reports, your Power Platform environments. No lock-in and no dependency on us to keep the lights on.',
    },
  ],
};

export const howToChoose = {
  eyebrow: 'Buyer\'s guide',
  title: 'How to choose a Power BI and data partner.',
  sub: 'These are the six questions we would ask before hiring any BI or Power Platform consultancy. Use them as a checklist before you sign, with Kadmoon or anyone else.',
  items: [
    {
      num: '01',
      title: 'Who builds it',
      body: 'Ask whether the Power BI and data engineers are full-time employees or rotating freelancers. Data projects live or die on the people who understand your model six months later.',
      answer:
        '100% in-house, full-time senior team. No pass-through to third parties. 0% turnover in operation.',
    },
    {
      num: '02',
      title: 'The semantic model',
      body: 'Ask whether they define one source of truth per KPI, or just wire charts to tables. Without a governed semantic layer you end up with three versions of revenue in one meeting.',
      answer:
        'We build a governed semantic layer so revenue, margin, and churn mean one thing across every report.',
    },
    {
      num: '03',
      title: 'Real dashboards, not logos',
      body: 'Ask to see actual dashboards and the outcomes they drove in your sector. A wall of logos without a report behind it proves nothing.',
      answer:
        'Sector dashboards you can open at /dashboards, plus detailed cases under NDA. The structure is what shipped.',
    },
    {
      num: '04',
      title: 'Ownership and your tenant',
      body: 'Confirm everything is built in your own Microsoft tenant. If the models and workspaces live somewhere you cannot reach, you are hostage to the vendor.',
      answer:
        'Everything is built in your tenant: your data, workspaces, reports, and Power Platform environments. No lock-in.',
    },
    {
      num: '05',
      title: 'Cadence and visibility',
      body: 'Data projects fail when they start from the available data and disappear for months. Ask when you will see a working dashboard.',
      answer:
        'We start from the decision. First dashboards are live by week two and validated with each area every cycle.',
    },
    {
      num: '06',
      title: 'Governance and support',
      body: 'Ask how they handle row-level security, workspace structure, and support after go-live. Ungoverned BI becomes a risk as it scales.',
      answer:
        'Governance is part of the build (RLS, Purview, DLP, a CoE), with managed BI support on a defined SLA after go-live.',
    },
  ],
};

export const process = {
  eyebrow: 'How we work',
  title: 'Four phases, working dashboards from week two.',
  steps: [
    {
      num: '01',
      title: 'Discovery',
      meta: 'Week 1-2',
      body: 'We start from the decision, not the tool. We map the business questions that need data, the sources, the indicators, and the owner of each number. Output: a diagnosis and an architecture plan.',
    },
    {
      num: '02',
      title: 'Foundation',
      meta: 'Week 3-4',
      body: 'We build the right foundation for your volume, whether that is a warehouse, a lakehouse, or Microsoft Fabric, plus the semantic layer that gives one definition per KPI. Output: the data model and first indicators.',
    },
    {
      num: '03',
      title: 'Build',
      meta: 'Week 5-8',
      body: 'We deliver in short cycles: reliable pipelines, DAX measures, and dashboards validated with each area as we go. No multi-month project with nothing to show. Output: governed dashboards in production.',
    },
    {
      num: '04',
      title: 'Sustain',
      meta: 'Ongoing',
      body: 'We train the users, measure real usage, and support the environment with an SLA. A data project does not end at go-live, that is where it starts. Output: evolution and a support SLA.',
    },
  ],
};

export const work = {
  eyebrow: 'Selected work',
  title: 'The report behind each engagement.',
  sub: 'Sector dashboards we have built. Client names and figures are illustrative and under NDA; the structure is what shipped.',
  cases: [
    {
      tag: 'Business Intelligence',
      title: 'QlikView to Power BI migration',
      body: 'Legacy BI migrated to Power BI with full inventory and dependency mapping, rebuilt on a governed model with no information blackout.',
    },
    {
      tag: 'Retail',
      title: 'Single source of truth on Microsoft Fabric',
      body: 'Sales, inventory, and margin from stores and e-commerce consolidated in OneLake and served to Power BI via Direct Lake.',
    },
    {
      tag: 'Manufacturing',
      title: 'Executive OEE and cost BI',
      body: 'MES and ERP data crossed for OEE, loss, and cost per line and product, refreshed for the people on the shop floor.',
    },
  ],
};

// ---------------------------------------------------------------------------
// Case studies. These come from our engineering team's delivered work
// (originally shipped under our Brazil-based practice) and are framed honestly.
// Only the public-sector case carries hard figures, which are already approved
// for use on the site. Do NOT add client names or metrics that are not verified.
// ---------------------------------------------------------------------------

export type CaseStudy = {
  slug: string;
  sector: string;
  title: string;
  summary: string;
  challenge: string;
  build: string;
  whatWeBuilt: string[];
  outcomes: string[];
  stack: string[];
  result?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'migracao-qlik-powerbi',
    sector: 'Business Intelligence',
    title: 'QlikView to Power BI migration',
    summary:
      'A full legacy BI estate moved to Power BI with inventory, dependency mapping, and a rebuild on a governed model, with no information blackout.',
    challenge:
      'A large report estate on legacy BI was expensive to license and hard to trust, and the business needed to move to Power BI without losing years of logic or leaving users without reports mid-migration.',
    build:
      'We inventoried every report, mapped dependencies, and rebuilt the estate in Power BI over a governed semantic model, migrating in waves so each business unit kept working the whole way through.',
    whatWeBuilt: [
      'A full inventory and dependency map of the legacy estate before moving a single report.',
      'A governed Power BI semantic model so KPIs carry one definition.',
      'A phased, wave-by-wave cutover with parity validation at each step.',
    ],
    outcomes: [
      'Reports rebuilt on a governed model instead of copied one for one.',
      'Migration in waves with no information blackout.',
      'Lower licensing cost on the Microsoft stack.',
    ],
    stack: ['Power BI', 'Azure Synapse', 'DAX', 'Power Query'],
  },
  {
    slug: 'plataforma-dados-fabric-varejo',
    sector: 'Retail',
    title: 'A single source of truth on Microsoft Fabric',
    summary:
      'Sales, inventory, and margin from stores and e-commerce consolidated in OneLake and served to Power BI through Direct Lake.',
    challenge:
      'An omnichannel retailer had three versions of the truth, with sales, inventory, and margin living in separate systems for physical stores and e-commerce, so no report agreed.',
    build:
      'We consolidated the sources into OneLake on Microsoft Fabric and served Power BI through Direct Lake, so store and online data meet on one governed model with fast reports.',
    whatWeBuilt: [
      'A consolidated data platform in OneLake on Microsoft Fabric.',
      'A governed model unifying store and e-commerce sales, inventory, and margin.',
      'Power BI on Direct Lake for fast reports without a copy step.',
    ],
    outcomes: [
      'One source of truth in place of three conflicting ones.',
      'Store and online performance on the same page.',
      'Reports that stay fast as data grows.',
    ],
    stack: ['Microsoft Fabric', 'OneLake', 'Direct Lake', 'Power BI'],
  },
  {
    slug: 'bi-executivo-industria-oee',
    sector: 'Manufacturing',
    title: 'Executive OEE and cost BI',
    summary:
      'MES and ERP data crossed for OEE, loss, and cost per line and product, refreshed for the people on the shop floor.',
    challenge:
      'A multi-plant manufacturer could not see OEE and cost per line in time to act, because machine data and financials lived apart and reports arrived days late.',
    build:
      'We brought MES and sensor data together with the ERP financials on a governed model and built executive Power BI dashboards for OEE, loss, and cost per line and product.',
    whatWeBuilt: [
      'A pipeline joining MES and sensor data with ERP financials.',
      'OEE, availability, performance, and quality by line, plant, and shift.',
      'Cost and loss per line and product in one executive view.',
    ],
    outcomes: [
      'OEE and cost visible in time to react.',
      'Shop floor and finance on the same numbers.',
      'Loss traced to the line and product that caused it.',
    ],
    stack: ['Power BI', 'Azure Data Factory', 'Azure Synapse', 'DAX'],
  },
  {
    slug: 'automacao-power-platform-aprovacoes',
    sector: 'Corporate Processes',
    title: 'Purchasing and approvals on Power Platform',
    summary:
      'A purchasing and approval workflow rebuilt on Power Apps and Power Automate, with a live view of every request from intake to sign-off.',
    challenge:
      'A purchasing process ran on email and spreadsheets, so requests stalled, approvals were hard to track, and no one could see where a given order actually was.',
    build:
      'We rebuilt the flow on Power Apps and Power Automate with a governed environment, and put a Power BI view on top so leaders can see volume, aging, and bottlenecks by stage.',
    whatWeBuilt: [
      'A Power Apps intake and a Power Automate approval flow.',
      'Governed environments and DLP policy from day one.',
      'A Power BI view of requests by stage and age.',
    ],
    outcomes: [
      'Requests move through a defined flow instead of email.',
      'Every order is trackable from intake to sign-off.',
      'Bottlenecks by stage are visible and fixable.',
    ],
    stack: ['Power Apps', 'Power Automate', 'Dataverse', 'Power BI'],
  },
  {
    slug: 'analytics-preditivo-inadimplencia',
    sector: 'Financial Services',
    title: 'Predictive credit risk and collections',
    summary:
      'A predictive score and a collections ladder built on Azure ML and Power BI, so the team acts on the accounts most likely to slip.',
    challenge:
      'A lender managed a large portfolio with a rear-view mirror, seeing delinquency only after it happened, and could not prioritize collections by real risk.',
    build:
      'We built the data foundation, trained a risk model on Azure Machine Learning, and served the score and a collections ladder through Power BI so the team works the highest-risk accounts first.',
    whatWeBuilt: [
      'A governed portfolio data model by cohort and aging bucket.',
      'A predictive risk score trained on Azure Machine Learning.',
      'A Power BI collections ladder that ranks accounts by risk.',
    ],
    outcomes: [
      'Collections effort aimed at the accounts most likely to slip.',
      'Delinquency seen ahead of time, not after.',
      'Portfolio risk visible by cohort and aging bucket.',
    ],
    stack: ['Azure Machine Learning', 'Microsoft Fabric', 'Power BI', 'DAX'],
  },
  {
    slug: 'sop-planejamento-demanda-supply',
    sector: 'Supply Chain',
    title: 'S&OP and demand planning',
    summary:
      'A demand and supply planning view that measures forecast accuracy by family and horizon, so the S&OP cycle argues from one set of numbers.',
    challenge:
      'An S&OP process ran on disconnected spreadsheets, so forecast accuracy was unknown and every function came to the meeting with a different number.',
    build:
      'We built a governed planning model and Power BI dashboards that track demand, supply, and forecast accuracy by product family and horizon, giving the S&OP cycle one shared view.',
    whatWeBuilt: [
      'A governed planning model over demand and supply data.',
      'Forecast accuracy by family and planning horizon.',
      'A shared S&OP dashboard for every function.',
    ],
    outcomes: [
      'One set of numbers for the S&OP cycle.',
      'Forecast accuracy measured instead of assumed.',
      'Demand and supply lined up by horizon.',
    ],
    stack: ['Power BI', 'Microsoft Fabric', 'Azure Data Factory', 'DAX'],
  },
  {
    slug: 'bi-logistica-frete-otif',
    sector: 'Transport and Distribution',
    title: 'Freight cost and OTIF service-level BI',
    summary:
      'Freight cost and on-time in-full performance by carrier and region, so distribution decisions run on service level and cost, not anecdotes.',
    challenge:
      'A distribution network could not tell which carriers and regions were hurting service and cost, because tracking, freight, and orders lived in separate systems.',
    build:
      'We consolidated carrier, freight, and order data on a governed model and built Power BI dashboards for OTIF and freight cost by carrier, lane, and region.',
    whatWeBuilt: [
      'A consolidated model over carrier, freight, and order data.',
      'OTIF and freight cost by carrier, lane, and region.',
      'Drill-down to the delivery behind every number.',
    ],
    outcomes: [
      'Service and cost problems traced to the carrier and region.',
      'Freight cost visible against service level.',
      'Distribution decisions on data, not anecdotes.',
    ],
    stack: ['Power BI', 'Azure Synapse', 'Power Query', 'DAX'],
  },
  {
    slug: 'dre-gerencial-multiempresa',
    sector: 'Finance',
    title: 'Management P&L across entities',
    summary:
      'A waterfall management P&L consolidated across entities, with actual versus budget and variance the finance team can trust.',
    challenge:
      'A group with several entities closed a management P&L by hand each month, so it arrived late, differed by preparer, and was hard to trust or drill into.',
    build:
      'We built a governed financial model and a Power BI waterfall P&L that consolidates entities, compares actual to budget, and drills from the statement line to the transaction.',
    whatWeBuilt: [
      'A governed consolidation model across entities.',
      'A waterfall management P&L with actual, budget, and variance.',
      'Drill-down from the statement line to detail.',
    ],
    outcomes: [
      'A management P&L that is the same every month.',
      'Actual versus budget with explainable variance.',
      'Consolidation without a manual close.',
    ],
    stack: ['Power BI', 'Microsoft Fabric', 'DAX', 'Power Query'],
  },
  {
    slug: 'bi-educacional-matriculas-evasao',
    sector: 'Education',
    title: 'Enrollment and dropout BI',
    summary:
      'Enrollment, dropout, and results by program and term, so an education network can see risk early instead of at the end of the semester.',
    challenge:
      'An education network saw enrollment and dropout only after the term closed, too late to intervene, with data spread across academic and financial systems.',
    build:
      'We built a governed model over the academic and financial data and Power BI dashboards for enrollment, dropout, and results by campus, program, and term, with early-risk signals.',
    whatWeBuilt: [
      'A governed model over academic and financial data.',
      'Enrollment, dropout, and results by campus, program, and term.',
      'Early-risk signals to act before the term ends.',
    ],
    outcomes: [
      'Dropout risk visible early, not after the fact.',
      'Enrollment and results on one governed model.',
      'Intervention while it still matters.',
    ],
    stack: ['Power BI', 'Azure Synapse', 'DAX', 'Power Query'],
  },
  {
    slug: 'bi-hospitalar-glosas-permanencia',
    sector: 'Healthcare',
    title: 'Claims denial and length-of-stay BI',
    summary:
      'Clinical operations and billing on one model, tracking claim denials by payer and reason and length of stay by unit and specialty.',
    challenge:
      'A hospital network lost revenue to claim denials it could not explain and could not see length of stay in time to manage capacity, with clinical and billing data apart.',
    build:
      'We brought clinical operations and billing onto a governed model and built Power BI dashboards for claim denials by payer and reason and length of stay by unit and specialty, built with HIPAA in mind.',
    whatWeBuilt: [
      'A governed model joining clinical operations and billing.',
      'Claim denials by payer and reason.',
      'Length of stay by unit and specialty.',
    ],
    outcomes: [
      'Denials traced to payer and reason so they can be worked.',
      'Length of stay visible in time to manage capacity.',
      'Clinical and billing on the same numbers.',
    ],
    stack: ['Power BI', 'Microsoft Fabric', 'DAX', 'Microsoft Purview'],
  },
];

export const industries = {
  eyebrow: 'Industries',
  title: 'Business intelligence for your sector.',
  sub: 'Every sector measures itself differently. We build the governed Power BI model and the dashboards that fit how yours actually runs.',
  items: [
    {
      name: 'Retail',
      flagship: true,
      body: 'Sales, inventory, and margin from stores and e-commerce on one governed model your buyers and finance both trust.',
      count: 'Power BI',
    },
    {
      name: 'Financial services',
      body: 'Portfolio, risk, and reconciliation with one definition per KPI and an audit trail that holds up.',
      count: 'Power BI',
    },
    {
      name: 'Manufacturing',
      body: 'OEE, loss, and cost per line and product, with the shop floor and finance reading the same numbers.',
      count: 'Fabric',
    },
    {
      name: 'Logistics and transport',
      body: 'Freight cost and OTIF service level by carrier, lane, and region, drillable to the delivery behind it.',
      count: 'Power BI',
    },
    {
      name: 'Healthcare',
      body: 'Claim denials by payer and reason and length of stay by unit, built with HIPAA in mind.',
      count: 'Power BI',
    },
    {
      name: 'Education',
      body: 'Enrollment, dropout, and results by campus, program, and term, with risk visible early.',
      count: 'Power BI',
    },
    {
      name: 'Supply chain',
      body: 'S&OP and demand planning with forecast accuracy measured by family and horizon.',
      count: 'Fabric',
    },
    {
      name: 'Corporate finance',
      body: 'A waterfall management P&L consolidated across entities, with actual versus budget you can explain.',
      count: 'Power BI',
    },
  ],
};

// FAQ answers written for this build in a plain, specific voice.
export const faq = {
  eyebrow: 'FAQ',
  title: 'Questions a serious buyer asks.',
  items: [
    {
      q: 'What does Kadmoon do?',
      a: 'We are a Power BI and Microsoft Power Platform consultancy. We take scattered raw data to the dashboards your leadership actually opens, on a governed foundation of Microsoft Fabric, Azure Synapse, and Azure. That covers the data engineering underneath, the semantic model with one definition per KPI, the reports on top, and the Power Platform apps and automations around them. Everything is built in your tenant and owned by you.',
    },
    {
      q: 'Do you only work in the Microsoft ecosystem?',
      a: 'Yes, on purpose. We go deep in Power BI, Microsoft Fabric, Azure, Power Platform, and Dataverse rather than spreading thin across five stacks. That focus is why we can move fast, govern by default, and support what we ship. If your data lives in other systems, we connect to them, but the analytics and BI layer we build and run is Microsoft.',
    },
    {
      q: 'How much does a Power BI project cost?',
      a: 'It depends on scope: how many sources we connect, the state of the data underneath, how many dashboards and KPIs you need, and whether governance and a data platform are part of the work. A focused set of dashboards on clean data is a small fixed-scope project. A full data platform on Fabric with governance is larger. We scope it with acceptance criteria and milestone billing, so the price maps to something you can verify rather than an open estimate.',
    },
    {
      q: 'We already have Power BI but it is a mess. Can you help?',
      a: 'Yes, this is common and it is a lot of our work. We inventory the existing reports, find where KPIs disagree, and rebuild on a governed semantic layer so revenue, margin, and churn mean one thing everywhere. We add row-level security, workspace structure, and Purview where they are missing. You keep working the whole time; we fix the foundation underneath rather than starting over.',
    },
    {
      q: 'How does a project start?',
      a: 'With a one to two week discovery. We start from the decisions you need to make, not the data you happen to have, and map the business questions, the sources, the indicators, and the owner of each number. You leave discovery with a diagnosis and an architecture plan. First working dashboards are typically live by week two, then validated with each area every cycle.',
    },
    {
      q: 'What about tenant-to-tenant migration?',
      a: 'It is a signature practice for us. When you move to a new Microsoft tenant, after a merger, divestiture, or restructure, your Power BI reports, datasets, workspaces, and Power Platform environments do not come along by default. We inventory everything, remap dependencies, and cut over in phases so you do not lose years of BI and automation history or leave users without reports mid-move.',
    },
    {
      q: 'Which regions and company sizes do you serve?',
      a: 'We are based in Austin, Texas and work with clients across the United States. We deliver remotely with in-person sessions when a project calls for it. We work with mid-market companies and enterprise teams; the common thread is that data matters enough to govern it. We are a fit whether you need a first governed dashboard or a full Fabric platform with managed support.',
    },
  ],
};

export const contact = {
  eyebrow: 'Start a project',
  title: 'Turn your data into decisions.',
  sub: 'Tell us what your leadership needs to see. Within one business day you get a proposal with scope, architecture, timeline, and investment.',
  needOptions: [
    'Power BI dashboards',
    'Migrate to Power BI or Fabric',
    'Data platform (Fabric/Azure)',
    'Power Platform app',
    'Managed BI / support',
    'Other',
  ],
  sizeOptions: [
    '1-50 employees',
    '51-200 employees',
    '201-1,000 employees',
    '1,000+ employees',
  ],
};

export const footer = {
  tagline:
    'A US Power BI and Microsoft Power Platform consultancy turning scattered data into decisions your leadership can trust, all on the Microsoft stack and in your tenant.',
  columns: [
    {
      heading: 'Company',
      links: [
        { label: 'Services', href: '/services' },
        { label: 'Cases', href: '/cases' },
        { label: 'Dashboards', href: '/dashboards' },
        { label: 'Industries', href: '/industries' },
        { label: 'Process', href: '/process' },
        { label: 'About', href: '/about' },
      ],
    },
    {
      heading: 'Services',
      links: [
        { label: 'Power BI', href: '/services/power-bi' },
        { label: 'Microsoft Fabric', href: '/services/microsoft-fabric' },
        { label: 'Power Platform', href: '/services/power-platform' },
        { label: 'Data engineering', href: '/services/data-engineering' },
        { label: 'Power Platform CoE', href: '/services/power-platform-coe' },
        { label: 'Managed BI', href: '/services/bi-sustainment' },
      ],
    },
    {
      heading: 'Migrations',
      links: [
        { label: 'Tableau to Power BI', href: '/tableau-to-power-bi-migration' },
        { label: 'Qlik to Power BI', href: '/qlik-to-power-bi-migration' },
        { label: 'Cognos to Power BI', href: '/cognos-to-power-bi-migration' },
        { label: 'Synapse to Fabric', href: '/synapse-to-fabric-migration' },
        { label: 'Tenant-to-tenant', href: '/services/tenant-to-tenant-migration' },
        { label: 'Start a project', href: '/#contact' },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Additional homepage sections (richer detail)
// ---------------------------------------------------------------------------

export const techStack = {
  eyebrow: 'Our stack',
  title: 'The Microsoft data stack, in depth.',
  sub: 'We go deep in one ecosystem instead of shallow across five. Visualization, Power Platform, the data foundation, and the governance and AI that hold it together, all in your tenant.',
  groups: [
    { label: 'Visualization', items: ['Power BI', 'Power BI Report Builder', 'DAX', 'Power Query'] },
    { label: 'Power Platform', items: ['Power Apps', 'Power Automate', 'Power Pages', 'Copilot Studio', 'Dataverse'] },
    { label: 'Data platform', items: ['Microsoft Fabric', 'OneLake', 'Azure Synapse', 'Azure Data Factory', 'SQL Server'] },
    { label: 'AI & governance', items: ['Azure Machine Learning', 'Microsoft Purview', 'Microsoft 365'] },
  ],
  // Flattened for the marquee.
  marquee: [
    'Power BI', 'Power BI Report Builder', 'DAX', 'Power Query', 'Power Apps', 'Power Automate',
    'Power Pages', 'Copilot Studio', 'Dataverse', 'Microsoft Fabric', 'OneLake', 'Azure Synapse',
    'Azure Data Factory', 'SQL Server', 'Azure Machine Learning', 'Microsoft Purview', 'Microsoft 365',
  ],
};

export const engagement = {
  eyebrow: 'How we engage',
  title: 'Three ways to work with us.',
  sub: 'Every model runs on the same senior in-house team, measurable acceptance criteria, and code you own.',
  models: [
    {
      name: 'Fixed-scope BI project',
      best: 'Best when the outcome is well defined',
      body: 'A defined build, from data foundation to dashboards, with measurable acceptance criteria per deliverable and milestone-based billing. You know exactly what you get, when, and how to validate it.',
      points: ['Acceptance criteria per deliverable', 'Milestone billing', 'Fixed timeline'],
    },
    {
      name: 'Dedicated data squad',
      best: 'Best for an evolving roadmap',
      body: 'Senior Power BI and data engineers embedded on your roadmap, working in two-week cycles against your priorities. The same people who build your models stay to evolve them.',
      points: ['Two-week cycles', 'Direct backlog control', 'Monthly engagement'],
    },
    {
      name: 'Managed BI and support',
      best: 'Best after go-live',
      body: 'We run and evolve your BI estate on a defined SLA: refreshes, RLS and Purview governance, new reports as needs change, and a roadmap for what comes next.',
      points: ['Defined SLA', 'RLS and Purview governance', 'Evolution roadmap'],
    },
  ],
};

export const comparison = {
  eyebrow: 'Power BI vs the alternatives',
  title: 'Why Power BI on a governed model wins.',
  sub: 'Legacy BI and spreadsheets get you a chart fast. They also let every team walk into the meeting with a different number.',
  columns: ['Governed Power BI (Kadmoon)', 'Legacy BI (Tableau/Qlik)', 'Spreadsheets'],
  rows: [
    { label: 'One definition per KPI', values: ['yes', 'partial', 'no'] },
    { label: 'Scales without a rewrite', values: ['yes', 'partial', 'no'] },
    { label: 'Row-level security and governance', values: ['yes', 'partial', 'no'] },
    { label: 'Low cost per user', values: ['yes', 'no', 'partial'] },
    { label: 'AI and Copilot built in', values: ['yes', 'partial', 'no'] },
    { label: 'Fast to a first dashboard', values: ['yes', 'partial', 'yes'] },
  ],
};

export const credibility = {
  text: 'Kadmoon is the US Microsoft data practice. The dashboards you can open at /dashboards are illustrative demos, built with the real structure we ship on live projects, and detailed client cases are available under NDA.',
};

// ---------------------------------------------------------------------------
// Dedicated pages: Services and Industries (deep content)
// ---------------------------------------------------------------------------

export type ServicePage = {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  includes: string[];
  outcomes: string[];
  blogCategory: string;
};

export const services: ServicePage[] = [
  {
    slug: 'power-bi',
    title: 'Power BI',
    tagline: 'From scattered data to the dashboard your leadership opens every Monday.',
    intro:
      'Most Power BI estates grow into a pile of conflicting reports where every team defends a different number. We build on a governed semantic layer so each KPI carries one definition, then design reports people actually use to make decisions.',
    includes: [
      'Governed semantic model with one definition per KPI',
      'Executive and operational dashboards designed for real decisions',
      'DAX measures and Power Query transformations',
      'Row-level security and workspace structure',
      'Paginated reports with Power BI Report Builder',
      'User training and adoption support',
    ],
    outcomes: [
      'One source of truth instead of three versions in a meeting',
      'First working dashboards live by week two',
      'Reports your leadership opens without asking who is right',
    ],
    blogCategory: 'Data & AI',
  },
  {
    slug: 'microsoft-fabric',
    title: 'Microsoft Fabric',
    tagline: 'The unified data platform that makes BI stop lying.',
    intro:
      'When sources disagree and refreshes crawl, the problem is the foundation, not the report. We build your data platform on Microsoft Fabric and OneLake, with Power BI served over Direct Lake so reports stay fast as the data grows.',
    includes: [
      'Lakehouse and warehouse design on OneLake',
      'Ingestion pipelines with Data Factory and Fabric',
      'Medallion architecture from raw to governed layers',
      'Power BI on Direct Lake for fast reports without copies',
      'Capacity sizing and cost management',
    ],
    outcomes: [
      'One governed foundation feeding every report',
      'Reports that stay fast as data volume grows',
      'A platform that scales without a rebuild',
    ],
    blogCategory: 'Data & AI',
  },
  {
    slug: 'tenant-to-tenant-migration',
    title: 'Tenant-to-tenant migration',
    tagline: 'Move your Microsoft environment to a new tenant without erasing your BI history.',
    intro:
      'A merger, divestiture, or restructure means a new Microsoft tenant, and your Power BI reports, datasets, workspaces, and Power Platform environments do not come along by default. We inventory everything, remap dependencies, and cut over in phases so nothing is lost.',
    includes: [
      'Full inventory of reports, datasets, workspaces, and flows',
      'Dependency mapping across BI and Power Platform',
      'Phased, wave-by-wave cutover plan',
      'Remapping of data sources, gateways, and connections',
      'Parity validation at each step',
    ],
    outcomes: [
      'Years of BI and automation history carried over intact',
      'A phased cutover with no information blackout',
      'Users working the whole way through',
    ],
    blogCategory: 'Data & AI',
  },
  {
    slug: 'power-platform',
    title: 'Power Platform',
    tagline: 'Low-code apps and automations that solve real processes, governed from day one.',
    intro:
      'Processes running on email and spreadsheets stall and hide where work actually is. We rebuild them on Power Apps, Power Automate, Power Pages, and Copilot Studio, in governed environments, with a Power BI view on top so leaders can see volume, aging, and bottlenecks.',
    includes: [
      'Power Apps for intake and internal workflows',
      'Power Automate approval and process flows',
      'Power Pages external portals',
      'Copilot Studio conversational agents',
      'Dataverse data model with governed environments',
    ],
    outcomes: [
      'Processes that run on a defined flow instead of email',
      'Every request trackable from intake to sign-off',
      'Automation governed instead of sprawling',
    ],
    blogCategory: 'Data & AI',
  },
  {
    slug: 'power-platform-coe',
    title: 'Power Platform Center of Excellence',
    tagline: 'Scale low-code across the company without losing control of it.',
    intro:
      'Once Power Platform catches on, apps and flows multiply faster than anyone can track. A Center of Excellence gives you visibility and guardrails, so citizen development accelerates the business instead of becoming shadow IT.',
    includes: [
      'CoE Starter Kit deployment and configuration',
      'Environment strategy and DLP policy',
      'App and flow inventory and monitoring',
      'Governance guardrails and maker onboarding',
      'Usage analytics in Power BI',
    ],
    outcomes: [
      'Full visibility of every app and flow in the tenant',
      'Citizen development with guardrails, not shadow IT',
      'Policy enforced by default across environments',
    ],
    blogCategory: 'Data & AI',
  },
  {
    slug: 'data-engineering',
    title: 'Data engineering',
    tagline: 'The pipelines and warehouses that make your BI trustworthy.',
    intro:
      'BI is only as good as the data underneath it. We build reliable ingestion, transformation, and warehousing on Microsoft Fabric, Azure Synapse, and Data Factory, with a semantic layer over clean, governed data.',
    includes: [
      'Ingestion pipelines from ERP, CRM, and operational systems',
      'Warehouse and lakehouse modeling',
      'Transformations on Fabric, Synapse, and Data Factory',
      'SQL Server integration and optimization',
      'Data quality checks and monitoring',
    ],
    outcomes: [
      'Reports built on clean, current, governed data',
      'Refreshes that are reliable instead of fragile',
      'A semantic layer every report can share',
    ],
    blogCategory: 'Data & AI',
  },
  {
    slug: 'analytics-and-ai',
    title: 'Analytics and AI',
    tagline: 'From what happened to what will happen, and what to do about it.',
    intro:
      'Descriptive dashboards tell you the past. We add the forecasting, classification, and Copilot features that help teams act, built on Azure Machine Learning and served where people already work, in Power BI and Power Platform.',
    includes: [
      'Forecasting and classification models on Azure ML',
      'Predictive scores served into Power BI',
      'Copilot and Copilot Studio where it earns its place',
      'Anomaly detection and alerting',
      'Decision automation tied to real workflows',
    ],
    outcomes: [
      'Signals ahead of time, not after the fact',
      'Models tied to decisions, not demos',
      'AI where it adds value, not for its own sake',
    ],
    blogCategory: 'Data & AI',
  },
  {
    slug: 'data-governance',
    title: 'Data governance',
    tagline: 'Scale BI without turning data into risk.',
    intro:
      'Ungoverned BI becomes a liability as it spreads. We build row-level security, Microsoft Purview, workspace structure, and DLP policy into the work from the start, so governance is part of the build rather than a cleanup later.',
    includes: [
      'Row-level security design and implementation',
      'Microsoft Purview cataloging and lineage',
      'Workspace structure and access model',
      'DLP policy across Power BI and Power Platform',
      'Sensitivity labeling and compliance mapping',
    ],
    outcomes: [
      'BI that scales without becoming a risk',
      'Access controlled by role, not by trust',
      'Lineage and sensitivity you can audit',
    ],
    blogCategory: 'Data & AI',
  },
  {
    slug: 'bi-sustainment',
    title: 'Managed BI and support',
    tagline: 'We run and evolve your BI estate so it keeps earning its keep.',
    intro:
      'A data project does not end at go-live; that is where it starts. We support your BI environment on a defined SLA, keep refreshes and governance healthy, and evolve the reports as your questions change.',
    includes: [
      'Defined SLA for issues and refreshes',
      'Ongoing RLS and Purview governance',
      'New reports and measures as needs change',
      'Usage monitoring and adoption support',
      'A quarterly evolution roadmap',
    ],
    outcomes: [
      'BI that stays healthy instead of drifting',
      'A defined SLA instead of best effort',
      'Reports that keep pace with the business',
    ],
    blogCategory: 'Data & AI',
  },
  {
    slug: 'discovery-assessment',
    title: 'Data and BI discovery',
    tagline: 'Start from the decision, not the data you happen to have.',
    intro:
      'Before building anything, we map the decisions your leadership needs to make, the sources behind them, and the state of what you have today. You leave with a diagnosis and an architecture plan you can act on, with or without us.',
    includes: [
      'Business question and KPI mapping',
      'Source and data quality assessment',
      'Current Power BI and Fabric estate review',
      'Target architecture and roadmap',
      'Effort and cost estimate by phase',
    ],
    outcomes: [
      'A clear diagnosis of where the data stands',
      'An architecture plan mapped to real decisions',
      'A phased roadmap with honest estimates',
    ],
    blogCategory: 'Data & AI',
  },
];

export type IndustryPage = {
  slug: string;
  name: string;
  flagship?: boolean;
  intro: string;
  systems: string[];
  integrations: string[];
  keyword: string;
};

export const industryPages: IndustryPage[] = [
  {
    slug: 'retail',
    name: 'Retail',
    flagship: true,
    intro:
      'Omnichannel retail runs on three versions of the truth, with sales, inventory, and margin living in separate systems for stores and e-commerce. We consolidate them on a governed model so buyers and finance read the same numbers.',
    systems: [
      'Sales and margin by store, channel, and category',
      'Inventory and stock cover across locations',
      'Basket, promotion, and price performance',
      'Store versus e-commerce on one governed model',
    ],
    integrations: ['Retail ERP and POS', 'E-commerce platform', 'Payment processors', 'Marketplaces'],
    keyword: 'retail',
  },
  {
    slug: 'financial-services',
    name: 'Financial Services',
    intro:
      'Regulated finance teams need one definition per KPI and an audit trail that holds up. We build governed portfolio, risk, and reconciliation reporting so the numbers agree and every figure is traceable.',
    systems: [
      'Portfolio and delinquency by cohort and aging',
      'Predictive risk scores and collections ladder',
      'Reconciliation and management reporting',
      'Compliance and audit dashboards',
    ],
    integrations: ['Core banking and ledgers', 'Payment gateways', 'CRM', 'Data warehouse'],
    keyword: 'financial',
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    intro:
      'Machine data and financials live apart, so OEE and cost per line arrive too late to act on. We cross MES and ERP on a governed model and put OEE, loss, and cost in front of the shop floor and finance at once.',
    systems: [
      'OEE, availability, performance, and quality by line',
      'Loss and downtime by cause, shift, and plant',
      'Cost per line and product',
      'Executive and shop-floor dashboards',
    ],
    integrations: ['MES and shop-floor systems', 'ERP', 'IoT and sensor data', 'SQL Server'],
    keyword: 'manufacturing',
  },
  {
    slug: 'logistics',
    name: 'Logistics and transport',
    intro:
      'When tracking, freight, and orders live in separate systems, no one can tell which carriers and regions are hurting service and cost. We consolidate them so distribution decisions run on service level and cost, not anecdotes.',
    systems: [
      'OTIF and on-time performance by carrier and lane',
      'Freight cost by carrier, region, and route',
      'Service level against cost',
      'Drill-down to the delivery behind every number',
    ],
    integrations: ['TMS and WMS', 'Telematics and GPS', 'EDI with partners', 'ERP'],
    keyword: 'logistics',
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    intro:
      'Clinical and billing data sit apart, so denials go unexplained and length of stay is invisible until it is too late. We bring them onto one governed model, built with HIPAA in mind.',
    systems: [
      'Claim denials by payer and reason',
      'Length of stay by unit and specialty',
      'Capacity and occupancy',
      'Clinical operations and billing on one model',
    ],
    integrations: ['EHR/EMR systems', 'HL7 / FHIR', 'Billing and claims', 'Scheduling systems'],
    keyword: 'healthcare',
  },
  {
    slug: 'education',
    name: 'Education',
    intro:
      'Enrollment and dropout show up only after the term closes, too late to intervene, with data spread across academic and financial systems. We build a governed model that surfaces risk early.',
    systems: [
      'Enrollment and retention by campus, program, and term',
      'Dropout risk signals ahead of the term',
      'Academic results and outcomes',
      'Academic and financial data on one model',
    ],
    integrations: ['SIS systems', 'LMS', 'Payment and billing', 'SSO and identity'],
    keyword: 'education',
  },
  {
    slug: 'supply-chain',
    name: 'Supply chain',
    intro:
      'S&OP that runs on disconnected spreadsheets means forecast accuracy is unknown and every function brings a different number. We build a governed planning model so the cycle argues from one shared view.',
    systems: [
      'Demand and supply by product family and horizon',
      'Forecast accuracy measured, not assumed',
      'Inventory and service-level trade-offs',
      'A shared S&OP dashboard for every function',
    ],
    integrations: ['ERP and planning systems', 'Data warehouse', 'Supplier and order data', 'E-commerce and demand signals'],
    keyword: 'supply chain',
  },
];

// ---------------------------------------------------------------------------
// Testimonials and client logos.
// These render ONLY when populated, so nothing fabricated is ever shown.
// TODO(founder): add REAL client quotes and logo names below to activate the
// sections on the homepage. Do not invent clients.
// ---------------------------------------------------------------------------

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  // Example shape (delete this comment and add real, approved quotes):
  // {
  //   quote: 'Kadmoon shipped a working demo in the first two weeks and never missed one after.',
  //   name: 'Jane Doe',
  //   role: 'VP of Operations',
  //   company: 'Acme Logistics',
  // },
];

// Client names to show as a logo/wordmark marquee (real, approved clients only).
export const clientLogos: string[] = [];
