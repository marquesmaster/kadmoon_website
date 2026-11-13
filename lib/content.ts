/**
 * All landing-page copy for Kadmoon, Inc.
 *
 * Kadmoon is a US Microsoft data & analytics consultancy led by Power BI
 * services: dashboards and governed semantic models, Power BI migration, and
 * embedded analytics, plus Power Platform automation, Fabric & Azure data
 * engineering, and Copilot & AI, all delivered in the client's own Microsoft
 * tenant. The market is the United States, in English. We do not publish prices;
 * every engagement is scoped to the client. Do NOT invent client names or
 * metrics, and do NOT reference Brazil or Portuguese.
 */

export type NavLink = { label: string; href: string; desc?: string };
export type NavGroup = { title: string; items: NavLink[] };
export type NavFeatured = {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  cta: string;
};
export type NavItem =
  | { label: string; href: string }
  | { label: string; panel: { groups: NavGroup[]; featured?: NavFeatured } };

// Mega-menu navigation (full-width panels on desktop, accordion on mobile).
// Every href points to a page that exists, so the menu never dead-ends.
export const navMenu: NavItem[] = [
  {
    label: 'Services',
    panel: {
      groups: [
        {
          title: 'Power BI',
          items: [
            { label: 'Dashboards & reports', href: '/services/power-bi', desc: 'Built on a governed model' },
            { label: 'Semantic models & governance', href: '/services/power-bi', desc: 'One definition per metric, RLS' },
            { label: 'Power BI migration', href: '/services/power-bi', desc: 'Legacy BI and spreadsheets to Power BI' },
            { label: 'Embedded analytics', href: '/services/power-bi', desc: 'Power BI inside your own apps' },
          ],
        },
        {
          title: 'Around Power BI',
          items: [
            { label: 'Power Platform', href: '/services/power-platform', desc: 'Power Apps and Power Automate' },
            { label: 'Data engineering', href: '/services/data-engineering', desc: 'Microsoft Fabric and Azure' },
            { label: 'Copilot & AI', href: '/services/copilot-ai', desc: 'Copilot in Power BI, natural-language Q&A' },
            { label: 'All services', href: '/services', desc: 'How we scope and deliver' },
          ],
        },
      ],
      featured: {
        eyebrow: 'Start here',
        title: 'A Power BI assessment',
        body: 'A short, fixed-scope engagement that delivers first dashboards in about two weeks, with a clear next step and a quote.',
        href: '/contact',
        cta: 'Request a quote',
      },
    },
  },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'Industries',
    panel: {
      groups: [
        {
          title: 'Who we serve',
          items: [
            { label: 'Finance & operations', href: '/industries', desc: 'Close, cash, and the operating P&L' },
            { label: 'Retail & e-commerce', href: '/industries', desc: 'Sales, margin, and inventory' },
            { label: 'Healthcare', href: '/industries', desc: 'Access, utilization, and cost' },
            { label: 'Manufacturing', href: '/industries', desc: 'Throughput, quality, and OEE' },
          ],
        },
        {
          title: 'More sectors',
          items: [
            { label: 'Professional services', href: '/industries', desc: 'Utilization and project margin' },
            { label: 'SaaS & technology', href: '/industries', desc: 'Product, revenue, and retention' },
            { label: 'Nonprofit & education', href: '/industries', desc: 'Programs, grants, and outcomes' },
          ],
        },
      ],
      featured: {
        eyebrow: 'All industries',
        title: 'Power BI for your sector',
        body: 'Every team measures itself differently. See how we model the metrics yours runs on.',
        href: '/industries',
        cta: 'Explore industries',
      },
    },
  },
  { label: 'Cases', href: '/cases' },
  {
    label: 'Docs',
    panel: {
      groups: [
        {
          title: 'Get started',
          items: [
            { label: 'Overview', href: '/docs', desc: 'What the docs cover' },
            { label: 'Methodology', href: '/docs/methodology', desc: 'How we scope and deliver' },
            { label: 'Engagement models', href: '/docs/engagement-models', desc: 'Project, squad, or managed' },
          ],
        },
        {
          title: 'Reference',
          items: [
            { label: 'Data integration', href: '/docs/data-integration', desc: 'SQL Server, Dynamics, SAP, APIs' },
            { label: 'Security & your tenant', href: '/docs/security', desc: 'Where data lives and who can see it' },
            { label: 'Metric library', href: '/docs/kpi-library', desc: 'The measures we model in Power BI' },
            { label: 'Glossary', href: '/docs/glossary', desc: 'Power BI and data terms' },
          ],
        },
      ],
      featured: {
        eyebrow: 'Documentation',
        title: 'How we work, in the open',
        body: 'Our methodology, data integration, security model, and the measures we build, documented.',
        href: '/docs',
        cta: 'Open the docs',
      },
    },
  },
  {
    label: 'Company',
    panel: {
      groups: [
        {
          title: 'Company',
          items: [
            { label: 'About', href: '/about', desc: 'A US Microsoft data team' },
            { label: 'Process', href: '/process', desc: 'Four phases, value from week two' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'Blog', href: '/blog', desc: 'Notes on Power BI and the data stack' },
            { label: 'Cases', href: '/cases', desc: 'Dashboards and models we have built' },
            { label: 'Contact', href: '/contact', desc: 'Request a quote' },
          ],
        },
      ],
    },
  },
];

export const nav = {
  wordmark: 'Kadmoon',
  suffix: 'INC.',
  menu: navMenu,
  // Secondary top-bar action for existing clients. The analytics run in the
  // client's own Microsoft tenant, so "access" is signing in to Power BI, not a
  // Kadmoon login. Prospects use "Request a quote" instead.
  access: { label: 'Client sign-in', href: 'https://app.powerbi.com' },
  cta: { label: 'Request a quote', href: '/contact' },
};

export const hero = {
  eyebrow: 'Microsoft data & analytics · United States',
  // The accent phrase is rendered in the accent color inside the H1.
  headlineBefore: 'Turn your business data into ',
  headlineAccent: 'Power BI',
  headlineAfter: ' your team actually uses.',
  subhead:
    'Kadmoon is a US Microsoft data and analytics firm. We connect the systems you already run, build a governed model, and deliver Power BI dashboards, Power Platform automation, and Fabric data engineering in your own tenant. You own all of it.',
  flagship: 'Power BI · Semantic models & governance · Power Platform · Microsoft Fabric & Azure · Copilot & AI',
  ctas: [
    { label: 'Request a quote', href: '/contact', primary: true },
    { label: 'See case studies', href: '/cases', primary: false },
  ],
  // What ships with a Kadmoon Power BI engagement.
  panelLabel: 'What you get',
  deliverables: [
    'A governed semantic model, one definition per metric',
    'Power BI dashboards your leaders open daily',
    'Data from SQL Server, Dynamics, SAP, Excel, and your apps',
    'Everything built in your own Microsoft tenant',
    'US-based team and a full handover',
  ],
  panelFooter: 'Built in your tenant. You own the model and the data.',
};

// Positioning signals, each one plainly true and free of invented client counts.
export const stats = [
  { value: '100%', label: 'Microsoft data stack' },
  { value: 'US', label: 'based and operated' },
  { value: 'Week 2', label: 'first dashboards' },
  { value: 'Your tenant', label: 'you own it' },
];

export const capabilities = {
  eyebrow: 'What we deliver',
  title: 'From scattered data to the decision.',
  sub: 'We build the Power BI a business runs on: governed dashboards on a single model, fed from the systems you already use, with automation and AI on top.',
  items: [
    {
      title: 'Power BI dashboards & reports',
      body: 'The reports your leaders open every morning, built on a governed model so every number means one thing and drills to the record behind it.',
    },
    {
      title: 'Semantic models & governance',
      body: 'One definition per measure, row-level security, workspaces, and lineage, so reporting stays trustworthy as more people and data come on.',
    },
    {
      title: 'Power BI migration',
      body: 'Legacy BI, hand-built spreadsheets, and tool sprawl consolidated into Power BI, with the old numbers reconciled so the business trusts the move.',
    },
    {
      title: 'Power Platform automation',
      body: 'Power Apps and Power Automate on top of the data: input screens, approvals, and alerts that turn a dashboard into an action, not just a view.',
    },
    {
      title: 'Data engineering on Fabric & Azure',
      body: 'Lakehouse, pipelines, and the modeling layer Power BI sits on, built on Microsoft Fabric and Azure so refreshes are reliable and fast.',
    },
    {
      title: 'Copilot & AI on your data',
      body: 'Copilot in Power BI and natural-language questions over your governed model, so people get answers without waiting on a new report.',
    },
  ],
};

export const why = {
  eyebrow: 'Why Kadmoon',
  title: 'A team that lives in the Microsoft stack.',
  sub: 'We build data and analytics only on Microsoft: Power BI, the Power Platform, Fabric, and Azure. That focus is why what we deliver fits how your business already works.',
  items: [
    {
      title: 'Microsoft is all we do',
      body: 'Power BI, Power Platform, Fabric, and Azure, every day. We are not a generalist shop learning the stack on your budget.',
    },
    {
      title: 'A senior, US-based team',
      body: 'The people who scope your model are the ones who build and support it. No rotating subcontractors, no handoff to a team that has never seen your data.',
    },
    {
      title: 'Governed models, not just charts',
      body: 'We build a semantic layer with one definition per measure and row-level security, so reporting holds up as more people and data come on.',
    },
    {
      title: 'We read your real systems',
      body: 'SQL Server, Dynamics 365, SAP, Oracle, NetSuite, Salesforce, Excel, SharePoint, and APIs, connected to one model instead of exported by hand.',
    },
    {
      title: 'You own it, in your tenant',
      body: 'Your data, your model, your reports, built in your own Microsoft tenant with documentation and a full handover. No lock-in and no dependency on us.',
    },
    {
      title: 'From dashboards to automation and AI',
      body: 'Power BI is the lead, and we build on it: Power Platform apps and automation, and Copilot and AI over the same governed model.',
    },
  ],
};

export const howToChoose = {
  eyebrow: 'Buyer\'s guide',
  title: 'How to choose a Power BI partner.',
  sub: 'Six questions worth asking before you hire anyone to build the Power BI your business runs on, us or anyone else.',
  items: [
    {
      num: '01',
      title: 'Do they build governed models?',
      body: 'Ask whether they build a semantic model with defined measures, or just wire charts to tables. Without a model you end up with three versions of revenue in one meeting.',
      answer:
        'We build a governed semantic model so every measure means one thing across every report, with row-level security and lineage from day one.',
    },
    {
      num: '02',
      title: 'Who builds it',
      body: 'Ask whether the people are full-time employees or rotating freelancers. The model that runs your reporting needs people who still understand it a year later.',
      answer:
        'A senior, US-based in-house team. The people who scope your model build it and support it. No pass-through to third parties.',
    },
    {
      num: '03',
      title: 'Is it only Power BI, or the whole stack?',
      body: 'Ask whether they can take you past dashboards: automation, data engineering, and AI. A charts-only shop leaves the rest of the problem on your desk.',
      answer:
        'Power BI is the lead, built on the whole Microsoft stack: Power Platform automation, Fabric and Azure data engineering, and Copilot and AI on the same model.',
    },
    {
      num: '04',
      title: 'Which systems they read',
      body: 'Confirm they can read your real sources: SQL Server, Dynamics, SAP, Salesforce, Excel, and your APIs. Analytics that cannot reach your data becomes another spreadsheet.',
      answer:
        'We read from the system of record wherever it runs, SQL Server, Dynamics 365, SAP, Oracle, NetSuite, Salesforce, Excel, SharePoint, and APIs, into one governed model.',
    },
    {
      num: '05',
      title: 'Ownership and your tenant',
      body: 'Confirm everything is built in your own Microsoft tenant. If the model and reports live somewhere you cannot reach, you are hostage to the vendor.',
      answer:
        'Everything is built in your own tenant: your data, your model, your reports. You own it, with documentation and a full handover. No lock-in.',
    },
    {
      num: '06',
      title: 'Governance and support',
      body: 'Ask how they handle row-level security, workspaces, lineage, and support after go-live. Ungoverned Power BI becomes a risk as it scales.',
      answer:
        'Governance is part of the build: row-level security, workspace structure, lineage, and access that follows your identity provider, with managed support after go-live.',
    },
  ],
};

// Power BI solution lines for the Services page: what we deliver. Each links to
// the cases index for now; deep links are restored as cases are rebuilt.
export const analyticsSolutions = [
  {
    title: 'Executive dashboards',
    body: 'One governed view of the business: revenue, margin, cash, and the operating KPIs your leaders check daily, each drillable to the record behind it.',
    href: '/cases',
  },
  {
    title: 'Finance & operations analytics',
    body: 'The close, cash flow, budget versus actual, and the operating P&L, modeled once from your ERP so finance and operations read the same numbers.',
    href: '/cases',
  },
  {
    title: 'Sales & revenue analytics',
    body: 'Pipeline, bookings, win rate, and net revenue retention from your CRM and billing, so go-to-market decisions run on one trusted model.',
    href: '/cases',
  },
  {
    title: 'Semantic models & governance',
    body: 'A governed model with one definition per measure, row-level security, workspaces, and lineage, so reporting stays trustworthy as it scales.',
    href: '/cases',
  },
  {
    title: 'Power Platform automation',
    body: 'Power Apps and Power Automate on top of the data: input screens, approvals, and alerts that turn a dashboard into an action, not just a view.',
    href: '/cases',
  },
  {
    title: 'Data engineering on Fabric',
    body: 'Lakehouse, pipelines, and the modeling layer Power BI sits on, built on Microsoft Fabric and Azure so refreshes are reliable and fast.',
    href: '/cases',
  },
];

export const process = {
  eyebrow: 'How we work',
  title: 'Four phases, dashboards from week two.',
  steps: [
    {
      num: '01',
      title: 'Discovery',
      meta: 'Week 1-2',
      body: 'We start from the decisions your leaders need to make, then map the questions behind them, the source systems, and the owner of each number. Output: a diagnosis and an architecture plan.',
    },
    {
      num: '02',
      title: 'Foundation',
      meta: 'Week 3-4',
      body: 'We land your data in your tenant and build the semantic model that gives one definition per measure, fed from SQL Server, Dynamics, SAP, Excel, and the rest. Output: the data model and first dashboards.',
    },
    {
      num: '03',
      title: 'Build',
      meta: 'Ongoing cycles',
      body: 'We deliver in short cycles, validating each report with the area that uses it: finance, sales, operations, or leadership. Output: governed dashboards in production.',
    },
    {
      num: '04',
      title: 'Sustain',
      meta: 'Ongoing',
      body: 'We train your team, keep refreshes and governance current as your data and users grow, and evolve the reporting as the business changes. Output: analytics that keeps pace with your business.',
    },
  ],
};

export const work = {
  eyebrow: 'What we build',
  title: 'Power BI that runs the business.',
  sub: 'The dashboards and models we build, drawing on SQL Server, Dynamics, SAP, and the systems you already run. Figures are illustrative of the structure we ship.',
  cases: [
    {
      tag: 'Leadership',
      title: 'Executive revenue & margin',
      body: 'Revenue, gross margin, and cash in one governed view, each number drillable to the invoice or order behind it, refreshed daily instead of rebuilt monthly.',
    },
    {
      tag: 'Finance',
      title: 'Budget vs actual, modeled once',
      body: 'The close, budget versus actual, and the operating P&L from your ERP, so finance and operations stop arguing over whose number is right.',
    },
    {
      tag: 'Revenue',
      title: 'Pipeline and net retention',
      body: 'Pipeline, win rate, and net revenue retention from CRM and billing, so go-to-market runs on one trusted model instead of exported spreadsheets.',
    },
  ],
};

// Signature-practice highlight on the homepage: the governed semantic model.
// The panel is an explicitly labeled example, not a real client's figures.
export const migrationHighlight = {
  eyebrow: 'Our specialty',
  title: 'One governed model your whole team trusts',
  body: 'Most teams rebuild the same numbers by hand in rival spreadsheets, so every meeting opens with an argument over whose figure is right. We model each measure once in Power BI, fed from the systems you already run, so revenue, margin, and cash mean one thing everywhere.',
  points: [
    'One definition per measure, governed and documented',
    'Row-level security, so people see only their numbers',
    'Sourced from SQL Server, Dynamics, SAP, and Excel',
  ],
  ctas: [
    { label: 'See case studies', href: '/cases', primary: true },
    { label: 'Talk to us', href: '#contact', primary: false },
  ],
  panel: {
    label: 'Revenue & margin',
    caption: 'example · this month',
    rows: [
      { label: 'Revenue', value: '$2,480,000', status: 'mapped' },
      { label: 'Cost of goods sold', value: '$1,512,000', status: 'mapped' },
      { label: 'Gross margin', value: '39.0%', status: 'mapped' },
      { label: 'Operating expenses', value: '$610,000', status: 'mapped' },
      { label: 'EBITDA', value: '$358,000', status: 'mapped' },
      { label: 'vs budget', value: '+2.1%', status: 'review' },
    ],
  },
};

// ---------------------------------------------------------------------------
// Case studies live in lib/cases/studies.ts (30+ analytics cases plus a few
// software builds). Re-exported here so existing imports keep working.
// ---------------------------------------------------------------------------
export type { CaseStudy, CaseMetric } from './cases/studies';
export { caseStudies } from './cases/studies';

export const industries = {
  eyebrow: 'Who we serve',
  title: 'Power BI for the teams that run on data.',
  sub: 'Every team measures itself differently. We build the governed model and the dashboards tuned to how each one operates.',
  items: [
    {
      name: 'Finance & operations',
      flagship: true,
      body: 'The close, cash flow, budget versus actual, and the operating P&L, modeled once from your ERP so every leader reads the same numbers.',
      count: 'Finance',
    },
    {
      name: 'Retail & e-commerce',
      body: 'Sales, margin, and inventory across channels and stores, with basket, cohort, and sell-through measured on one model.',
      count: 'Retail',
    },
    {
      name: 'Healthcare',
      body: 'Access, utilization, length of stay, and cost of care, with row-level security so each team sees only what it should.',
      count: 'Care',
    },
    {
      name: 'Manufacturing',
      body: 'Throughput, yield, OEE, and product P&L across lines and sites, fed from the ERP and the systems on the floor.',
      count: 'Operations',
    },
    {
      name: 'Professional services',
      body: 'Utilization, realization, and project margin from your PSA and finance systems, so staffing and pricing run on evidence.',
      count: 'Services',
    },
    {
      name: 'SaaS & technology',
      body: 'ARR, net revenue retention, pipeline, and product usage from CRM, billing, and the product, modeled in one place.',
      count: 'SaaS',
    },
    {
      name: 'Nonprofit & education',
      body: 'Programs, grants, enrollment, and outcomes, with the reporting funders and boards expect built on governed data.',
      count: 'Programs',
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
      a: 'We are a US Microsoft data and analytics firm led by Power BI services. We connect the systems you already run, build a governed semantic model, and deliver the dashboards your team opens every day. On top of that we build Power Platform automation, Fabric and Azure data engineering, and Copilot and AI. Everything lives in your own Microsoft tenant, and you own it.',
    },
    {
      q: 'Do we have to be a Microsoft shop?',
      a: 'No. Your data can live anywhere: SQL Server, Dynamics 365, SAP, Oracle, NetSuite, Salesforce, Excel, SharePoint, or your own APIs. We read from the system of record wherever it runs and deliver the analytics on Power BI and the Microsoft cloud, because it is a strong, governed place to build and most teams already have the licensing.',
    },
    {
      q: 'Why only the Microsoft stack?',
      a: 'Because depth beats breadth. Power BI, the Power Platform, Fabric, and Azure are what we build on every day, so we arrive with patterns, a governance model, and reusable components instead of learning a new toolset on your budget. One stack, end to end, also means fewer seams between your dashboards, your automation, and your data pipelines.',
    },
    {
      q: 'Where does the data come from?',
      a: 'From the systems you already run. We land raw data in your tenant, shape it into a governed semantic model, and feed the dashboards from there, with refreshes you can rely on. Connections to your ERP, CRM, finance, and line-of-business systems are built once so numbers come from the source instead of a re-keyed export. The data integration doc goes into detail.',
    },
    {
      q: 'How does a project start?',
      a: 'Usually with a Power BI assessment: a short, fixed-scope engagement that maps your decisions and data and delivers first dashboards in about two weeks. It de-risks the larger build and produces a scope and a quote grounded in your real data. You leave with working reports, not a slide deck.',
    },
    {
      q: 'Do you do more than dashboards?',
      a: 'Yes. Power BI is the lead, and we build on the same governed model: Power Apps and Power Automate for input screens, approvals, and alerts; Microsoft Fabric and Azure for the data engineering underneath; and Copilot and AI so people can ask questions in plain language. You can start with reporting and grow into automation and AI when it earns its place.',
    },
    {
      q: 'Do we own the analytics and the data?',
      a: 'Yes. Everything we build is yours: the semantic model, the reports, and the data, all inside your own tenant, with documentation and a full handover. Access is provisioned per engagement against your identity provider and policies. We support and evolve it on a defined agreement after launch, but you are never locked in or dependent on us to keep operating.',
    },
    {
      q: 'Which regions and company sizes do you serve?',
      a: 'We are a US firm serving American businesses, from growing companies to established enterprises, across finance, retail, healthcare, manufacturing, professional services, technology, and the public and nonprofit sectors. The common thread is that decisions depend on data in Microsoft systems and the numbers have to be right.',
    },
  ],
};

export const contact = {
  eyebrow: 'Request a quote',
  title: 'Tell us what you need to see. Get a quote.',
  sub: 'Share how your team works and where the reporting hurts today. Within one business day you get a response with a clear path forward and a quote, no obligation.',
  needOptions: [
    'Power BI dashboards & reports',
    'Semantic model & governance',
    'Power BI migration',
    'Embedded analytics',
    'Power Platform automation',
    'Data engineering (Fabric & Azure)',
    'Copilot & AI on our data',
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
    'A US Microsoft data and analytics firm led by Power BI services. We turn the data in your ERP, CRM, and line-of-business systems into decisions, on the Microsoft stack and in your own tenant.',
  columns: [
    {
      heading: 'Company',
      links: [
        { label: 'Services', href: '/services' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Industries', href: '/industries' },
        { label: 'Cases', href: '/cases' },
        { label: 'Docs', href: '/docs' },
        { label: 'Blog', href: '/blog' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      heading: 'Services',
      links: [
        { label: 'Power BI', href: '/services/power-bi' },
        { label: 'Power Platform', href: '/services/power-platform' },
        { label: 'Data engineering', href: '/services/data-engineering' },
        { label: 'Copilot & AI', href: '/services/copilot-ai' },
        { label: 'Methodology', href: '/docs/methodology' },
        { label: 'All services', href: '/services' },
      ],
    },
    {
      heading: 'Industries',
      links: [
        { label: 'Finance & operations', href: '/industries' },
        { label: 'Retail & e-commerce', href: '/industries' },
        { label: 'Healthcare', href: '/industries' },
        { label: 'Manufacturing', href: '/industries' },
        { label: 'SaaS & technology', href: '/industries' },
        { label: 'Start a project', href: '/contact' },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Additional homepage sections (richer detail)
// ---------------------------------------------------------------------------

export const techStack = {
  eyebrow: 'The stack',
  title: 'One governed stack, from source to decision.',
  sub: 'We build on the Microsoft data platform end to end and tie into the systems around it, so numbers come from the source instead of a re-keyed export.',
  groups: [
    { label: 'Power BI', items: ['Dashboards & reports', 'Semantic models', 'Row-level security', 'Embedded'] },
    { label: 'Power Platform', items: ['Power Apps', 'Power Automate', 'Dataverse', 'Approvals & alerts'] },
    { label: 'Data engineering', items: ['Microsoft Fabric', 'Azure Data Factory', 'Lakehouse', 'Dataflows'] },
    { label: 'Sources & AI', items: ['SQL Server', 'Dynamics 365', 'SAP & Salesforce', 'Copilot & AI'] },
  ],
  // Flattened for the marquee.
  marquee: [
    'Power BI', 'Semantic models', 'Row-level security', 'Embedded analytics', 'Power Apps', 'Power Automate',
    'Dataverse', 'Microsoft Fabric', 'Azure', 'Lakehouse', 'SQL Server', 'Dynamics 365',
    'SAP', 'Salesforce', 'Copilot', 'Natural-language Q&A',
  ],
};

export const engagement = {
  eyebrow: 'How we engage',
  title: 'Three ways to work with us.',
  sub: 'Every model runs on the same senior, US-based team, clear acceptance criteria, and analytics you own in your tenant.',
  models: [
    {
      name: 'Power BI assessment',
      best: 'Best first step',
      body: 'A short, fixed-scope engagement that maps your decisions and data and delivers first dashboards in about two weeks. It de-risks the larger build and produces a scope and a quote grounded in your real data.',
      points: ['Fixed scope', 'First dashboards in ~2 weeks', 'Scope and quote'],
    },
    {
      name: 'Fixed-scope project',
      best: 'Best when the outcome is defined',
      body: 'A defined build from data foundation to dashboards, with acceptance criteria per deliverable and milestone billing. You know exactly what you get, when, and how to validate it.',
      points: ['Acceptance criteria per deliverable', 'Milestone billing', 'Fixed timeline'],
    },
    {
      name: 'Managed analytics',
      best: 'Best after go-live',
      body: 'We run and evolve your analytics estate on a defined agreement: refreshes, governance, new reports as needs change, and a roadmap for what comes next.',
      points: ['Defined service agreement', 'Governance kept current', 'Evolution roadmap'],
    },
  ],
};

export const comparison = {
  eyebrow: 'Power BI done right vs the alternatives',
  title: 'Why a governed Power BI build wins.',
  sub: 'A generalist BI shop or a pile of spreadsheets can draw a chart, but they leave the model ungoverned and let every team walk into the meeting with a different number.',
  columns: ['Kadmoon (Microsoft-native)', 'Generalist BI', 'Spreadsheets'],
  rows: [
    { label: 'One definition per measure', values: ['yes', 'partial', 'no'] },
    { label: 'Governed semantic model & row-level security', values: ['yes', 'partial', 'no'] },
    { label: 'Reads SQL Server, Dynamics, SAP, and APIs', values: ['yes', 'partial', 'no'] },
    { label: 'Power Platform & Fabric on the same stack', values: ['yes', 'no', 'no'] },
    { label: 'Lives in your own Microsoft tenant', values: ['yes', 'partial', 'yes'] },
    { label: 'First dashboards in about two weeks', values: ['yes', 'partial', 'partial'] },
  ],
};

export const credibility = {
  eyebrow: 'Why Kadmoon',
  title: 'Power BI built by a senior Microsoft team.',
  lead: 'A senior, US-based team that lives in the Microsoft stack. We turn the data in your ERP, CRM, and line-of-business systems into decisions, delivered on Power BI in your own tenant.',
  points: [
    { title: 'One definition per measure', body: 'Revenue, margin, and the KPIs your leaders watch mean one thing across every report.' },
    { title: 'Built in your tenant', body: 'Your data, your model, your reports. You own it, with no lock-in.' },
    { title: 'Senior, US-based team', body: 'Six years and more than 2,000 Microsoft analytics solutions behind the people who scope, build, and support your model.' },
  ],
  // Full statement, kept for reference and any schema use.
  text: 'Kadmoon is a US Microsoft data and analytics firm led by Power BI services, run by a senior, US-based team. We turn the data in your ERP, CRM, and line-of-business systems into decisions, delivered on Power BI, the Power Platform, and Microsoft Fabric in your own tenant. The dashboards shown on the site are illustrative of what we ship.',
};

// ---------------------------------------------------------------------------
// "Built on the Microsoft cloud" band. The analytics is delivered on the
// Microsoft data stack, inside the client's own tenant. We name the stack
// factually (we build on it); this is not a partnership or certification
// claim, and no Microsoft logos are used.
// ---------------------------------------------------------------------------

export const microsoftStack = {
  eyebrow: 'Built on the Microsoft cloud',
  title: 'Enterprise analytics, delivered in your own Microsoft tenant.',
  lead:
    'The analytics runs on the Microsoft data stack you may already pay for, inside your tenant, under your own security and access controls. Your data never leaves your environment, and the model, reports, and data are yours.',
  // The three Microsoft technologies the platform is delivered on. `mark` picks
  // a brand-neutral geometric glyph we draw ourselves (see MicrosoftStack.tsx).
  stack: [
    { mark: 'fabric', name: 'Microsoft Fabric', role: 'The unified data foundation your semantic model is built on.' },
    { mark: 'powerbi', name: 'Power BI', role: 'The governed reports and dashboards your team signs in to.' },
    { mark: 'azure', name: 'Azure', role: 'The cloud your tenant runs on, with your own controls.' },
  ],
  points: [
    { title: 'Your tenant, your data', body: 'Everything stays inside your Microsoft environment, isolated under your controls, not pooled in a vendor platform.' },
    { title: 'Enterprise security & governance', body: 'One governed model, lineage to source, and the security posture of your own tenant.' },
    { title: 'No lock-in', body: 'You own the model, the reports, and the data, so you keep operating with or without us.' },
  ],
  note: 'Delivered on the Microsoft stack. If you do not run Microsoft yet, we provision and manage a dedicated tenant for you.',
};

// ---------------------------------------------------------------------------
// Dedicated pages: Solutions and Industries (deep content)
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
    tagline: 'The dashboards and reports your team opens every day.',
    intro:
      'Power BI is only as good as the model under it. We build the governed semantic model, connect it to the systems you already run, and design reports people actually use, with one definition per measure and security that holds as the audience grows.',
    includes: [
      'Governed semantic model with one definition per measure',
      'Dashboards and reports designed for the people who use them',
      'Row-level security, workspaces, and lineage',
      'Migration from legacy BI, Excel, and tool sprawl',
      'Embedded Power BI inside your own apps and portals',
      'Scheduled refresh and performance tuning',
    ],
    outcomes: [
      'Reports your leaders open daily and trust',
      'One version of each number across every team',
      'Reporting that stays governed as it scales',
    ],
    blogCategory: 'Power BI',
  },
  {
    slug: 'power-platform',
    title: 'Power Platform',
    tagline: 'Apps and automation on top of the same data.',
    intro:
      'A dashboard shows the problem; the Power Platform lets people act on it. We build Power Apps and Power Automate on the same governed data, so input screens, approvals, and alerts turn reporting into a workflow instead of a slide.',
    includes: [
      'Power Apps for data entry, review, and operations',
      'Power Automate flows for approvals and alerts',
      'Dataverse modeling and integration',
      'Apps wired to the same governed Power BI model',
      'Role-based access against your identity provider',
      'Governance and an application lifecycle you can maintain',
    ],
    outcomes: [
      'People act on the data instead of exporting it',
      'Manual steps and email approvals automated away',
      'Apps and reports that share one source of truth',
    ],
    blogCategory: 'Power Platform',
  },
  {
    slug: 'data-engineering',
    title: 'Data engineering',
    tagline: 'The governed model your reporting sits on, built on Fabric and Azure.',
    intro:
      'Reliable reporting needs reliable data underneath. We build the lakehouse, pipelines, and modeling layer on Microsoft Fabric and Azure, so your Power BI refreshes are fast, your sources stay in sync, and the model is documented and owned by you.',
    includes: [
      'Lakehouse and warehouse on Microsoft Fabric',
      'Pipelines from SQL Server, Dynamics, SAP, Salesforce, and APIs',
      'Incremental refresh and reliable scheduling',
      'A documented, governed semantic model',
      'Data quality checks and monitoring',
      'Azure infrastructure in your own tenant',
    ],
    outcomes: [
      'Refreshes that are fast and reliable',
      'Sources in sync instead of exported by hand',
      'A data foundation you own and can maintain',
    ],
    blogCategory: 'Data engineering',
  },
  {
    slug: 'copilot-ai',
    title: 'Copilot & AI',
    tagline: 'Answers in plain language, on your governed data.',
    intro:
      'Once the model is governed, AI can safely sit on top of it. We set up Copilot in Power BI and natural-language question and answer over your data, so people get answers without waiting on a new report, with the same security and definitions as everything else.',
    includes: [
      'Copilot in Power BI, configured on your model',
      'Natural-language question and answer over your data',
      'AI-assisted summaries and narrative insights',
      'Guardrails so answers respect row-level security',
      'Grounding on your governed measures, not guesses',
      'Rollout and training for the people who will use it',
    ],
    outcomes: [
      'Answers in plain language, without a new report',
      'AI grounded on governed data, not a black box',
      'Security and definitions carried through to AI',
    ],
    blogCategory: 'Copilot & AI',
  },
];

// Analytics tie-in per platform: the analytics we deliver first, which is where
// each platform grows from. `cases` are slugs in lib/cases/studies.ts; titles
// are resolved at render time so labels never drift.
export const serviceAnalytics: Record<string, { note: string; cases: string[] }> = {
  'power-bi': {
    note: 'Power BI is only as good as the model under it. We start by modeling the numbers your leaders watch, revenue, margin, and the operating KPIs, so every report is built on a foundation the business already trusts.',
    cases: ['executive-revenue-dashboard', 'finance-close-analytics', 'sales-pipeline-analytics'],
  },
  'power-platform': {
    note: 'Automation works best when it acts on numbers you trust. We model the data first, then build the Power Apps and Power Automate flows that turn what a dashboard shows into an action.',
    cases: ['power-platform-approvals', 'executive-revenue-dashboard'],
  },
  'data-engineering': {
    note: 'Reliable reporting needs reliable data underneath. We build the Fabric lakehouse and pipelines that feed the governed model, so refreshes are fast and the numbers come from the source.',
    cases: ['fabric-lakehouse-platform', 'finance-close-analytics'],
  },
  'copilot-ai': {
    note: 'AI is only safe on top of a governed model. We prepare the semantic model and its definitions first, then layer Copilot and natural-language Q&A so answers respect the same security and meaning as every report.',
    cases: ['copilot-self-service', 'executive-revenue-dashboard'],
  },
};

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
    slug: 'importers-exporters',
    name: 'Importers & Exporters',
    flagship: true,
    intro:
      'Importers and exporters run on landed cost, duty, and timing, and generic BI gets all three wrong. We model landed cost and margin, duty exposure, and supplier performance from the systems you already run, so leadership decides on current numbers.',
    systems: [
      'Landed cost and margin by SKU, supplier, and shipment',
      'Duty and tariff exposure with same-day scenario modeling',
      'Supplier lead-time reliability and total cost',
      'Purchase-order to receipt cycle time by stage',
    ],
    integrations: ['SAP, Oracle, NetSuite', 'Freight invoices', 'Customs duty tables and ACE', 'FX and treasury feeds'],
    keyword: 'importers and exporters',
  },
  {
    slug: 'customs-brokers',
    name: 'Customs Brokers',
    intro:
      'Brokers live and die on accuracy and speed, and spreadsheets cannot show where entries stall. We model throughput, clearance time, classification quality, and screening coverage, with an audit trail on every entry.',
    systems: [
      'Entry throughput and clearance time by client, port, and filer',
      'Classification consistency and reclassification rates',
      'Denied-party screening coverage with an audit trail',
      'ACE rejection causes, ranked and trended',
    ],
    integrations: ['Broker filing systems', 'ACE / ABI', 'Client ERPs', 'HTS and denied-party lists'],
    keyword: 'customs brokers',
  },
  {
    slug: 'freight-forwarders',
    name: 'Freight Forwarders',
    intro:
      'When shipment status lives in a dozen carrier portals, service suffers and exceptions surface late. We unify carrier milestones into one view and measure OTIF, cost per lane, and demurrage, so the operation runs on evidence.',
    systems: [
      'Shipment visibility and milestones unified over EDI and API',
      'OTIF and transit variance by lane and carrier',
      'Freight spend and cost per lane, normalized across carriers',
      'Demurrage and detention attributed to a cause and owner',
    ],
    integrations: ['Ocean and air carrier EDI', 'Tracking APIs', 'TMS', 'Rate contracts and invoices'],
    keyword: 'freight forwarders',
  },
  {
    slug: 'third-party-logistics',
    name: '3PL & Warehousing',
    intro:
      'Trade inventory spans bonded zones, FTZs, and multiple sites, each with its own rules. We model inventory, throughput, and fulfillment across all of it, so cash and space tied up in the wrong stock become visible.',
    systems: [
      'Inventory across sites, bonded and FTZ included',
      'Receiving and dock-to-stock throughput',
      'Fulfillment accuracy and cycle time by client',
      'Inventory aging and dead-stock with carrying cost',
    ],
    integrations: ['WMS across sites', 'Client ERPs', 'Order management', 'Billing systems'],
    keyword: 'third-party logistics',
  },
  {
    slug: 'ports-terminals',
    name: 'Ports & Terminals',
    intro:
      'Congestion builds before anyone can see it, and operations data is scattered. We model dwell time, gate and berth throughput, and congestion so the yard is managed on evidence, with security vision available where it fits.',
    systems: [
      'Container dwell time by type, status, and yard area',
      'Gate and berth throughput by shift and hour',
      'Congestion flags before the yard locks up',
      'Security vision over yard and perimeter cameras, where it fits',
    ],
    integrations: ['Terminal operating systems', 'Gate and vessel events', 'EDI', 'Camera and access systems'],
    keyword: 'ports and terminals',
  },
  {
    slug: 'manufacturers-distributors',
    name: 'Manufacturers & Distributors',
    intro:
      'Companies that source abroad and distribute at home straddle two worlds of data. We model S&OP, forecast accuracy, and product P&L with true landed cost in COGS, across the cross-border network.',
    systems: [
      'S&OP with demand, supply, and import lead times in one plan',
      'Forecast accuracy by product family and horizon',
      'Product P&L with landed cost folded into COGS',
      'Cross-border inventory positioning by cost and service',
    ],
    integrations: ['SAP IBP and ERP', 'Sales and demand history', 'Supplier lead times', 'Duty and freight rates'],
    keyword: 'manufacturers and distributors',
  },
  {
    slug: 'shipping-carriers',
    name: 'Ocean & Shipping Carriers',
    intro:
      'The companies that carry the cargo need service, cost, and utilization measured against partners and terminals. We build the analytics around how carriers run.',
    systems: [
      'Service and on-time performance by lane and partner',
      'Cost and utilization across the fleet',
      'Shipment and cargo visibility',
      'Customer-facing service metrics',
    ],
    integrations: ['Terminals and ports', 'Freight forwarders', 'EDI partners', 'Customer systems'],
    keyword: 'shipping carriers',
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

export const testimonials: Testimonial[] = [];

// Client names to show as a logo/wordmark marquee (real, approved clients only).
export const clientLogos: string[] = [];

// ---------------------------------------------------------------------------
// Group experience band. Framed as the track record of the TEAM/GROUP behind
// Kadmoon (delivered-for and partner organizations), NOT as Kadmoon's own
// foreign-trade clients. Names are shown as text wordmarks; swap for approved
// logo assets when provided, and only display organizations that have given
// permission. This intentionally references organizations outside the US and
// outside foreign trade, a deliberate exception to the no-Brazil site rule,
// per an explicit positioning decision.
// ---------------------------------------------------------------------------
export const groupExperience = {
  eyebrow: 'Experience behind Kadmoon',
  line: 'The team behind Kadmoon has spent six years building data, analytics, and Microsoft platforms for organizations across government, education, sports, real estate, and technology. Kadmoon brings that practice to foreign trade.',
  stats: [
    { value: '6', label: 'years building data & analytics' },
    { value: '50+', label: 'organizations served' },
    { value: '2,000+', label: 'Microsoft solutions shipped' },
  ],
  note: 'The track record of the team and group behind Kadmoon, across sectors.',
  orgs: [
    'Ministério da Educação',
    'Paraná Educação',
    'Santos FC',
    'Sky HDTV',
    'Tecnisa',
    'ESPM',
    'CREA-SP',
    'Finep',
    'APAS',
    'Autodoc',
    'Brasoftware',
    'Xertica',
  ],
};

// ---------------------------------------------------------------------------
// Pricing / engagement page. No public prices: every engagement is scoped and
// quoted. The page explains the model, what each subscription scope includes,
// and the Microsoft add-on, and routes to "Request a quote".
// ---------------------------------------------------------------------------
export const pricing = {
  eyebrow: 'Pricing',
  title: 'Priced to the scope of your trade, not a seat count.',
  lead: 'Every engagement is scoped to the systems you run and the decisions you need, so you pay for the analytics you use. Here is how it works and what each level includes. We quote per engagement; tell us what you move and you get a number within one business day.',
  model: [
    {
      name: 'Trade data assessment',
      meta: 'Fixed scope · ~2 weeks',
      body: 'A short, fixed-price engagement that maps your decisions and data and ships the first reports. You leave with a scope and a quote, and the fee credits toward the subscription.',
    },
    {
      name: 'Trade intelligence subscription',
      meta: 'Monthly · the core',
      body: 'The platform as a subscription: connectors, the trade data model, the KPI library, and the reports kept current, with governance and support. Scoped by the domains, data sources, and users you need.',
    },
    {
      name: 'Managed Microsoft',
      meta: 'Optional add-on',
      body: 'We provision and bill the Microsoft capacity the analytics runs on (Fabric, Power BI, Azure), so licensing and cloud arrive on one invoice with your platform.',
    },
  ],
  scopes: [
    {
      name: 'Starter',
      best: 'A growing operation, one priority',
      includes: [
        'One analytics domain (e.g. landed cost or visibility)',
        'Up to ~3 data sources connected',
        'One KPI pack, refreshed daily',
        'Support during business hours',
      ],
    },
    {
      name: 'Growth',
      best: 'Multiple domains across the operation',
      includes: [
        'Two to three analytics domains',
        'More sources and multiple KPI packs',
        'Alerts and exception monitoring',
        'A stronger response SLA',
      ],
      featured: true,
    },
    {
      name: 'Control Tower',
      best: 'Enterprise, the full suite',
      includes: [
        'The full suite: landed cost, duty, visibility, compliance, inventory, executive',
        'Dedicated governance and a success manager',
        'Quarterly reviews and roadmap',
        'Priority support',
      ],
    },
  ],
  faq: [
    {
      q: 'Do you publish prices?',
      a: 'No. Trade operations differ too much for a sticker price to be honest. We scope to your data and decisions and quote per engagement, usually within one business day of a first conversation.',
    },
    {
      q: 'How does billing work?',
      a: 'The assessment is a fixed price. The platform is a monthly or annual subscription scoped to what you use. If you take managed Microsoft, the Microsoft capacity is billed with it on one invoice.',
    },
    {
      q: 'Is there a long contract?',
      a: 'The assessment stands alone. The subscription is a defined term you agree up front; you own the model, the reports, and the data in your own tenant, so you are never locked in to keep operating.',
    },
    {
      q: 'What about dedicated capacity or enterprise terms?',
      a: 'We scope those in a conversation, not off a page. If you want a dedicated team or custom terms, tell us in the quote request and we will put together a proposal.',
    },
  ],
  cta: {
    title: 'Tell us what you move. Get a number.',
    body: 'A short description of your operation is enough for a scoped plan and a quote within one business day.',
  },
};

// ---------------------------------------------------------------------------
// Platform page ("Kadmoon Trade Intelligence", the EIP). The productized core:
// connectors + one governed trade data model + a KPI library + the reports and
// alerts, delivered in the client's tenant or provisioned and run by us.
// ---------------------------------------------------------------------------
export const platform = {
  eyebrow: 'The platform',
  title: 'One trade intelligence layer over the systems you already run.',
  lead:
    'Kadmoon Trade Intelligence reads from your ERP, broker, carrier, EDI and ACE, and spreadsheets, builds one governed model of your trade, and delivers the reports and alerts your team acts on. It runs in your own Microsoft tenant, or we provision and run it for you.',
  ctas: [
    { label: 'Request a quote', href: '/contact', primary: true },
    { label: 'See case studies', href: '/cases', primary: false },
  ],
  pillars: [
    {
      step: '01',
      icon: 'integrations',
      title: 'Connect your systems',
      body: 'We read from SAP, Oracle, NetSuite, Microsoft, broker and carrier systems, EDI and ACE, and spreadsheets. The data stays where it lives; we meet it there.',
    },
    {
      step: '02',
      icon: 'stack',
      title: 'Model it once',
      body: 'One governed trade data model, every KPI defined a single time, with landed cost, duty, HTS, origin, and incoterms built in instead of rebuilt per report.',
    },
    {
      step: '03',
      icon: 'dataai',
      title: 'Decide from it',
      body: 'Landed cost, duty exposure, shipment visibility, compliance, and inventory as governed reports and alerts, each number drillable to the shipment or entry behind it.',
    },
    {
      step: '04',
      icon: 'qa',
      title: 'Run it your way',
      body: 'In your own Microsoft tenant, or in a dedicated tenant we provision and manage for you. Your data stays isolated, documented, and yours.',
    },
  ],
  modules: {
    eyebrow: 'What is in it',
    title: 'Six analytics domains, one governed model underneath.',
    sub: 'The subscription is scoped to the domains you need. Each is built on the same model, so a number in one lines up with the same number in another, and every figure drills to the shipment, entry, or order behind it.',
    items: [
      {
        icon: 'target',
        name: 'Landed cost & margin',
        body: 'Freight, duty, insurance, and brokerage allocated to the unit, so margin by SKU, supplier, and shipment is known at receipt, not at month end.',
      },
      {
        icon: 'bolt',
        name: 'Duty & tariff exposure',
        body: 'Duty owed by HTS code, origin, and product line, with a scenario layer that reprices your import book the same day a rate changes.',
      },
      {
        icon: 'delivery',
        name: 'Shipment visibility & OTIF',
        body: 'Carrier milestones unified over EDI and API into one planned-versus-actual view, with OTIF, dwell, and delay by lane and carrier.',
      },
      {
        icon: 'contract',
        name: 'Customs & compliance',
        body: 'Clearance time, entry throughput, classification consistency, and screening coverage, with an audit trail that answers a regulator from a report.',
      },
      {
        icon: 'stack',
        name: 'Inventory & warehouse',
        body: 'Days on hand, aging, and fill rate across sites, bonded and FTZ stock included, so cash and space in the wrong inventory become visible.',
      },
      {
        icon: 'enterprise',
        name: 'Executive control tower',
        body: 'Cost, service, risk, and compliance in one governed executive view, every KPI defined once and drillable to the record behind it.',
      },
    ],
  },
  reports: {
    eyebrow: 'Built reports',
    title: 'The reports your team opens every morning.',
    sub: 'A sample of what ships: landed cost to the unit, duty exposure by product line, and on-time performance over time. Figures are illustrative; the structure is what you get.',
    disclaimer: 'Sample reports · figures are illustrative',
  },
  tenant: {
    eyebrow: 'Where it runs',
    title: 'In your own Microsoft tenant. The data, the model, and the reports are yours.',
    sub: 'The analytics runs on the Microsoft stack you may already pay for, inside your own tenant, so your trade data never leaves your control. If you do not run Microsoft yet, we provision and manage a dedicated tenant for you.',
    points: [
      {
        icon: 'key',
        title: 'Your tenant, your data',
        body: 'Everything lives in your Microsoft tenant on Fabric, Power BI, and Azure. Your data stays isolated and under your access controls, not pooled in a vendor platform.',
      },
      {
        icon: 'architecture',
        title: 'Governed and documented',
        body: 'One model, one definition per KPI, with lineage from each number back to its source. The model and its documentation are handed over, not held hostage.',
      },
      {
        icon: 'saas',
        title: 'No lock-in',
        body: 'Because you own the model, the reports, and the data, you can keep operating if you ever leave. The subscription keeps it current; it does not hold it ransom.',
      },
    ],
  },
  roadmap: {
    eyebrow: 'What grows on top',
    title: 'Software is the roadmap, built on the data once the model exists.',
    sub: 'The analytics comes first, because it is what the model makes possible immediately. The platforms below are what we build on top of that same governed data as a client needs them. They are a roadmap, not the lead offer, and they reuse the model rather than starting over.',
    items: [
      { name: 'Trade ERP', body: 'Operational trade workflows fed by the same governed data, so execution and analytics share one source.', href: '/services/trade-erp' },
      { name: 'Customs & compliance software', body: 'Filing, classification, and screening tools built on the compliance model already in place.', href: '/services/customs-compliance' },
      { name: 'Inventory & WMS', body: 'Warehouse and bonded-stock workflows on top of the inventory model, not a separate silo.', href: '/services/inventory-wms' },
      { name: 'Security vision', body: 'Port and vessel computer vision that feeds the same control tower as the rest of the trade data.', href: '/services/vessel-security-vision' },
    ],
    note: 'We build these when the analytics has shown where they pay off, not before. Ask in a quote request if a platform is on your horizon.',
  },
  faq: {
    eyebrow: 'Questions',
    title: 'What the platform is, and is not.',
    items: [
      {
        q: 'Is this a product I log into?',
        a: 'The reports run in Power BI in your own Microsoft tenant, so you sign in there, not to a Kadmoon login. The platform is the governed data model, the KPI library, the connectors, and the reports and alerts built on them, kept current as a subscription. It is a productized layer we assemble and run, delivered on the Microsoft stack, not a separate application to adopt.',
      },
      {
        q: 'Do we need Microsoft to use it?',
        a: 'The analytics is delivered on the Microsoft stack, Fabric, Power BI, and Azure. If you already run Microsoft, it runs in your tenant. If you do not, we provision and manage a dedicated tenant for you, and the Microsoft capacity can be billed on one invoice with the platform through the managed Microsoft add-on.',
      },
      {
        q: 'How is this different from a BI tool?',
        a: 'A BI tool draws charts; it does not know what landed cost or duty exposure mean for foreign trade. The platform arrives with the trade data model, the KPIs, and the connectors already built, so you are not starting from an empty canvas. The difference is the governed trade model underneath, which is what makes the numbers consistent, trustworthy, and specific to cross-border operations.',
      },
      {
        q: 'What do we actually own?',
        a: 'The data, the model, and the reports, all in your own tenant. The subscription keeps them current and supported, but the asset is yours, documented and handed over, so you are never locked in to keep operating. That is the point of running it in your tenant rather than in ours.',
      },
    ],
  },
  engage: {
    eyebrow: 'How an engagement works',
    title: 'Start small, prove it, then run on it.',
    steps: [
      {
        name: 'Trade data assessment',
        meta: 'Fixed scope · ~2 weeks',
        body: 'A short, fixed-price engagement that maps your decisions and data and delivers the first reports. You leave with a scope and a quote, and the fee credits toward the subscription.',
      },
      {
        name: 'Trade intelligence subscription',
        meta: 'Monthly · the core',
        body: 'The platform as a subscription: connectors, the trade data model, the KPI library, and the reports kept current, with governance and support. Scoped to the domains and data you run.',
      },
      {
        name: 'Managed Microsoft',
        meta: 'Optional add-on',
        body: 'We provision and bill the Microsoft capacity the analytics runs on, so licensing and cloud arrive on one invoice with your platform instead of a separate project.',
      },
    ],
    note: 'Dedicated capacity and enterprise terms are scoped in a conversation, not sold off a page.',
  },
  cta: {
    title: 'See it on your own data.',
    body: 'Tell us where your trade data lives. You get a scoped plan and a quote within one business day, and first reports in about two weeks.',
  },
};
