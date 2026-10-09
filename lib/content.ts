/**
 * All landing-page copy for Kadmoon, Inc.
 *
 * Kadmoon is a US software company focused 100% on foreign trade / international
 * commerce: trade ERP, CRM, inventory/WMS, customs & compliance, computer vision
 * for port and vessel security, and supply-chain & logistics software, delivered
 * as ready platforms and as custom development. We do not publish prices; every
 * engagement is scoped to the client. Do NOT invent client names or metrics.
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
    label: 'Solutions',
    panel: {
      groups: [
        {
          title: 'Analytics',
          items: [
            { label: 'Landed cost & margin', href: '/cases/landed-cost-analytics', desc: 'Freight, duty, and fees to the unit' },
            { label: 'Duty & tariff exposure', href: '/cases/tariff-duty-exposure', desc: 'Model a rate change the same day' },
            { label: 'Shipment visibility & OTIF', href: '/cases/shipment-visibility-analytics', desc: 'Milestones unified over EDI and API' },
            { label: 'Customs & compliance analytics', href: '/cases/entry-throughput-analytics', desc: 'Throughput, clearance, exceptions' },
          ],
        },
        {
          title: 'Platforms we build',
          items: [
            { label: 'Trade ERP', href: '/services/trade-erp', desc: 'The operating system for trade' },
            { label: 'Customs & compliance', href: '/services/customs-compliance', desc: 'Classification, screening, filing' },
            { label: 'Inventory & WMS', href: '/services/inventory-wms', desc: 'Bonded and FTZ handling' },
            { label: 'Supply chain & logistics', href: '/services/supply-chain-logistics', desc: 'Freight and shipment management' },
          ],
        },
      ],
      featured: {
        eyebrow: 'Start here',
        title: 'A trade data assessment',
        body: 'First dashboards in about two weeks, scoped and fixed. You get a clear next step and a quote.',
        href: '/contact',
        cta: 'Request a quote',
      },
    },
  },
  {
    label: 'Industries',
    panel: {
      groups: [
        {
          title: 'Who we serve',
          items: [
            { label: 'Importers & exporters', href: '/industries/importers-exporters', desc: 'Landed cost, margin, compliance' },
            { label: 'Customs brokers', href: '/industries/customs-brokers', desc: 'Throughput, screening, filing' },
            { label: 'Freight forwarders', href: '/industries/freight-forwarders', desc: 'Visibility, OTIF, cost per lane' },
            { label: 'Third-party logistics', href: '/industries/third-party-logistics', desc: 'Inventory and fulfillment' },
          ],
        },
        {
          title: 'More sectors',
          items: [
            { label: 'Ports & terminals', href: '/industries/ports-terminals', desc: 'Dwell time and throughput' },
            { label: 'Manufacturers & distributors', href: '/industries/manufacturers-distributors', desc: 'S&OP and product P&L' },
            { label: 'Shipping & carriers', href: '/industries/shipping-carriers', desc: 'Fleet and service analytics' },
          ],
        },
      ],
      featured: {
        eyebrow: 'All industries',
        title: 'Built for the trade chain',
        body: 'Every link in the trade chain measures itself differently. See how we fit each one.',
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
            { label: 'Data integration', href: '/docs/data-integration', desc: 'SAP, Microsoft, Oracle, EDI, ACE' },
            { label: 'Security & your tenant', href: '/docs/security', desc: 'Where data lives and who can see it' },
            { label: 'KPI library', href: '/docs/kpi-library', desc: 'The trade metrics we model' },
            { label: 'Glossary', href: '/docs/glossary', desc: 'Trade analytics terms' },
          ],
        },
      ],
      featured: {
        eyebrow: 'Documentation',
        title: 'How we work, in the open',
        body: 'Our methodology, data integration, security model, and the KPIs we build, documented.',
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
            { label: 'About', href: '/about', desc: 'A US firm built for trade' },
            { label: 'Process', href: '/process', desc: 'Four phases, value from week two' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'Blog', href: '/blog', desc: 'Notes on the business of trade' },
            { label: 'Cases', href: '/cases', desc: 'Analytics we have built' },
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
  // Secondary top-bar action: access is provisioned per engagement, so this
  // routes to contact rather than a login nobody can complete yet.
  access: { label: 'Request access', href: '/contact' },
  cta: { label: 'Request a quote', href: '/contact' },
};

export const hero = {
  eyebrow: 'Foreign-trade analytics · United States',
  // The accent phrase is rendered in the accent color inside the H1.
  headlineBefore: 'The numbers your ',
  headlineAccent: 'import and export',
  headlineAfter: ' operation can finally trust.',
  subhead:
    'Kadmoon turns the data buried in your customs, logistics, and ERP systems into decisions: landed cost, duty exposure, shipment visibility, and compliance. Delivered on the Microsoft stack, in your own tenant.',
  flagship: 'Landed cost · Duty exposure · Shipment visibility & OTIF · Customs analytics · Executive control tower',
  ctas: [
    { label: 'Request a quote', href: '/contact', primary: true },
    { label: 'See case studies', href: '/cases', primary: false },
  ],
  // What ships with a Kadmoon analytics engagement.
  panelLabel: 'What you get',
  deliverables: [
    'A governed model with one definition per KPI',
    'Dashboards your leaders open and trust',
    'Data from SAP, Microsoft, and the systems you run',
    'Everything built in your own tenant',
    'US-based team and full handover',
  ],
  panelFooter: 'Built in your tenant. You own the model and the data.',
};

// Positioning signals and the one metric we can state plainly: client volume.
export const stats = [
  { value: '100%', label: 'foreign-trade focus' },
  { value: '35+', label: 'clients served' },
  { value: 'US', label: 'based and operated' },
  { value: 'Week 2', label: 'first dashboards' },
];

export const capabilities = {
  eyebrow: 'What we deliver',
  title: 'From scattered data to the decision.',
  sub: 'We build the analytics a cross-border operation runs on: landed cost, duty exposure, visibility, compliance, and inventory, on one governed model fed from the systems you already use.',
  items: [
    {
      title: 'Landed cost & margin',
      body: 'Freight, duty, insurance, and brokerage allocated to the unit from SAP and freight invoices, so margin by SKU, supplier, and shipment is a daily number, not a monthly spreadsheet.',
    },
    {
      title: 'Duty & tariff exposure',
      body: 'Duty owed by HTS code, origin, and product line, with a scenario layer that reprices your import book the same day a tariff changes.',
    },
    {
      title: 'Shipment visibility & OTIF',
      body: 'Carrier milestones unified over EDI and API into one planned-versus-actual view, with OTIF, dwell, and delay measured by lane and carrier.',
    },
    {
      title: 'Customs & compliance analytics',
      body: 'Clearance time, entry throughput, classification consistency, and screening coverage, with an audit trail that answers a regulator from a report.',
    },
    {
      title: 'Inventory & warehouse analytics',
      body: 'Days on hand, aging, and fill rate across sites, bonded and FTZ stock included, so cash and space tied up in the wrong inventory become visible.',
    },
    {
      title: 'Executive control tower',
      body: 'Cost, service, risk, and compliance in one governed executive view, every KPI defined once and drillable to the shipment, entry, or order behind it.',
    },
  ],
};

export const why = {
  eyebrow: 'Why Kadmoon',
  title: 'A software team that knows trade.',
  sub: 'We build software only for companies that move goods across borders. That focus is why the systems match how your operation works.',
  items: [
    {
      title: 'Foreign trade is all we do',
      body: 'Customs, landed cost, incoterms, bonded inventory, denied-party screening. We build from the vocabulary and rules of cross-border trade, not a generic template.',
    },
    {
      title: 'A senior, US-based team',
      body: 'The engineers who scope your system are the ones who build and support it. No rotating subcontractors, no handoff to a team that has never seen a customs filing.',
    },
    {
      title: 'Platforms plus custom',
      body: 'Start on a ready Kadmoon platform and tailor it, or have us build from scratch. Either way you get software built to match how your operation works.',
    },
    {
      title: 'Compliance by default',
      body: 'Screening, classification, and audit trails are part of the build, not an afterthought. Software that keeps you clear with CBP and your partners as you scale.',
    },
    {
      title: 'Integrated end to end',
      body: 'ERP, compliance, inventory, and logistics talk to each other and to the outside world: carriers, brokers, marketplaces, and ACE, so data flows instead of being retyped.',
    },
    {
      title: 'You own it',
      body: 'Your software, your data, your systems. Documentation and a full handover in every engagement. No lock-in and no dependency on us to keep operating.',
    },
  ],
};

export const howToChoose = {
  eyebrow: 'Buyer\'s guide',
  title: 'How to choose a trade analytics partner.',
  sub: 'Six questions worth asking before you hire anyone to build the analytics your cross-border operation runs on, us or anyone else.',
  items: [
    {
      num: '01',
      title: 'Do they know trade?',
      body: 'Ask whether they have modeled landed cost, duty, OTIF, or customs before. A generic BI shop will define your metrics wrong because it does not know what an incoterm or a denied-party screen is.',
      answer:
        'Foreign trade is the only thing we build analytics for. Landed cost, duty, OTIF, and customs are the metrics we model every day, not a new domain we learn on your budget.',
    },
    {
      num: '02',
      title: 'Who builds it',
      body: 'Ask whether the analytics engineers are full-time employees or rotating freelancers. The model that runs your reporting needs people who still understand it a year later.',
      answer:
        'A senior, US-based in-house team. The people who scope your model build it and support it. No pass-through to third parties.',
    },
    {
      num: '03',
      title: 'One definition per KPI',
      body: 'Ask whether they build one governed definition per KPI or just wire charts to tables. Without a semantic layer you end up with three versions of landed cost in one meeting.',
      answer:
        'We build a governed semantic layer so landed cost, margin, OTIF, and duty exposure each mean one thing across every report.',
    },
    {
      num: '04',
      title: 'Which systems they read',
      body: 'Confirm they can read your real sources: SAP, Oracle, NetSuite, carrier EDI, and ACE. Analytics that cannot reach your data becomes another spreadsheet.',
      answer:
        'We read from the system of record wherever it runs, SAP, Microsoft, Oracle, NetSuite, EDI, ACE, and carrier feeds, and parse EDI and customs messages into measurable events.',
    },
    {
      num: '05',
      title: 'Ownership and your tenant',
      body: 'Confirm everything is built in your own tenant. If the model and reports live somewhere you cannot reach, you are hostage to the vendor.',
      answer:
        'Everything is built in your own tenant: your data, your model, your reports. You own it, with documentation and a full handover. No lock-in.',
    },
    {
      num: '06',
      title: 'Governance and support',
      body: 'Ask how they handle row-level security, lineage, and support after go-live. Ungoverned analytics becomes a risk as it scales.',
      answer:
        'Governance is part of the build: row-level security, lineage, and access that follows your identity provider, with managed support on a defined agreement after go-live.',
    },
  ],
};

// Analytics offerings for the Solutions page: what we deliver today. Each links
// to a representative case study, so nothing dead-ends.
export const analyticsSolutions = [
  {
    title: 'Landed cost & margin',
    body: 'Freight, duty, insurance, and brokerage allocated to the unit, so margin by SKU, supplier, and shipment is known at receipt instead of at month end.',
    href: '/cases/landed-cost-analytics',
  },
  {
    title: 'Duty & tariff exposure',
    body: 'Duty owed by HTS code, origin, and product line, with a scenario layer that reprices your import book the same day a rate changes.',
    href: '/cases/tariff-duty-exposure',
  },
  {
    title: 'Shipment visibility & OTIF',
    body: 'Carrier milestones unified over EDI and API into one planned-versus-actual view, with OTIF, dwell, and delay measured by lane and carrier.',
    href: '/cases/shipment-visibility-analytics',
  },
  {
    title: 'Customs & compliance analytics',
    body: 'Clearance time, entry throughput, classification consistency, and screening coverage, with an audit trail that answers a regulator from a report.',
    href: '/cases/entry-throughput-analytics',
  },
  {
    title: 'Inventory & warehouse analytics',
    body: 'Days on hand, aging, and fill rate across sites, bonded and FTZ stock included, so cash and space in the wrong inventory become visible.',
    href: '/cases/multi-warehouse-inventory-analytics',
  },
  {
    title: 'Executive control tower',
    body: 'Cost, service, risk, and compliance in one governed executive view, every KPI defined once and drillable to the shipment, entry, or order behind it.',
    href: '/cases/trade-control-tower',
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
      body: 'We land your data in your tenant and build the semantic layer that gives one definition per KPI, fed from SAP, Microsoft, EDI, ACE, and the rest. Output: the data model and first dashboards.',
    },
    {
      num: '03',
      title: 'Build',
      meta: 'Ongoing cycles',
      body: 'We deliver in short cycles, validating each report with the area that uses it: landed cost, visibility, compliance, or inventory. Output: governed dashboards in production.',
    },
    {
      num: '04',
      title: 'Sustain',
      meta: 'Ongoing',
      body: 'We train your team, keep refreshes and governance current as rules and partners change, and evolve the analytics as your trade grows. Output: analytics that keeps pace with your business.',
    },
  ],
};

export const work = {
  eyebrow: 'Selected work',
  title: 'Analytics behind real trade operations.',
  sub: 'The analytics we build for cross-border operations, drawing on SAP, Microsoft, and the systems you already run. Client names and figures are illustrative and under NDA; the structure is what ships.',
  cases: [
    {
      tag: 'Importers',
      title: 'Landed cost by SKU and supplier',
      body: 'Freight, duty, and fees allocated to the unit from SAP and freight invoices, so margin by product is a daily number instead of a monthly spreadsheet.',
    },
    {
      tag: 'Customs Brokers',
      title: 'Entry throughput and clearance time',
      body: 'Entry volume, clearance time, and exceptions by client, port, and filer, so problem lanes and staffing are managed on evidence.',
    },
    {
      tag: 'Freight Forwarders',
      title: 'Shipment visibility and milestones',
      body: 'Carrier milestones unified over EDI and API into one planned-versus-actual view, with exceptions flagged before delivery.',
    },
  ],
};

// Signature-practice highlight on the homepage: customs & compliance.
// The panel is an explicitly labeled example, not a real client's figures.
export const migrationHighlight = {
  eyebrow: 'Our specialty',
  title: 'True landed cost, in one model your team trusts',
  body: 'Most importers rebuild landed cost by hand each month, so margin by product is a lagging guess and pricing runs on stale numbers. We allocate freight, duty, and fees to the unit from the systems you already run, so landed cost and margin are known at receipt, not at month end.',
  points: [
    'Freight, duty, insurance, and brokerage allocated to the unit',
    'Margin by SKU, supplier, and shipment, refreshed daily',
    'Sourced from SAP, freight invoices, and duty tables',
  ],
  ctas: [
    { label: 'See the case', href: '/cases/landed-cost-analytics', primary: true },
    { label: 'Talk to us', href: '#contact', primary: false },
  ],
  panel: {
    label: 'Landed cost',
    caption: 'example · per shipment',
    rows: [
      { label: 'Product cost', value: '$84,200', status: 'mapped' },
      { label: 'Ocean freight', value: '$6,480', status: 'mapped' },
      { label: 'Duty (HTS)', value: '$5,910', status: 'mapped' },
      { label: 'Brokerage & fees', value: '$1,240', status: 'mapped' },
      { label: 'Landed cost', value: '$97,830', status: 'mapped' },
      { label: 'Margin at receipt', value: '27.4%', status: 'mapped' },
      { label: 'Variance vs quote', value: '+1.2%', status: 'review' },
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
  title: 'Built for the companies that move goods.',
  sub: 'Every link in the trade chain measures itself differently. We build the analytics tuned to how each one operates.',
  items: [
    {
      name: 'Importers & exporters',
      flagship: true,
      body: 'Landed cost by SKU and supplier, duty exposure, and margin, drawn from your ERP and freight invoices into one model.',
      count: 'Landed cost',
    },
    {
      name: 'Customs brokers',
      body: 'Entry throughput, clearance time, classification consistency, and screening coverage, with an audit trail on every entry.',
      count: 'Compliance',
    },
    {
      name: 'Freight forwarders',
      body: 'Shipment visibility, OTIF, cost per lane, and demurrage, with carrier milestones unified over EDI and API.',
      count: 'Visibility',
    },
    {
      name: '3PL & warehousing',
      body: 'Inventory across sites, bonded and FTZ included, with aging, fill rate, and dock-to-stock throughput measured.',
      count: 'Inventory',
    },
    {
      name: 'Ports & terminals',
      body: 'Dwell time, gate and berth throughput, and congestion flags, so the yard is managed on evidence instead of feel.',
      count: 'Throughput',
    },
    {
      name: 'Manufacturers & distributors',
      body: 'S&OP, forecast accuracy, and product P&L with true landed cost in COGS, across the cross-border network.',
      count: 'S&OP',
    },
    {
      name: 'Ocean & shipping carriers',
      body: 'Service, cost, and utilization analytics for the companies that carry the cargo, tied to partners and terminals.',
      count: 'Service',
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
      a: 'We are a US analytics firm focused entirely on foreign trade. We turn the data buried in your customs, logistics, and ERP systems into decisions: landed cost and margin, duty and tariff exposure, shipment visibility and OTIF, customs and compliance analytics, inventory, and an executive control tower. Everything is built on a governed model, delivered on the Microsoft stack, and lives in your own tenant.',
    },
    {
      q: 'Do we have to be a Microsoft shop?',
      a: 'No. Your data can live anywhere: SAP, Oracle, NetSuite, Microsoft Dynamics, broker and carrier systems, EDI and ACE, or spreadsheets. We read from the system of record wherever it runs. We deliver the analytics on the Microsoft stack, Fabric, Power BI, and Azure, because it is a strong, governed place to build, but the platform is the how, not the point.',
    },
    {
      q: 'Why only foreign trade?',
      a: 'Because trade analytics fails when it is built by people who do not know trade. Landed cost, duty, incoterms, bonded inventory, HTS classification, denied-party screening, and ACE are not edge cases to us, they are the metrics we model every day. That focus is why we arrive with the trade data model and KPIs ready instead of learning your business on your budget.',
    },
    {
      q: 'Where does the data come from?',
      a: 'From the systems you already run. We land raw data in your tenant, shape it into a governed semantic model, and feed the dashboards from there. Carrier EDI and customs messages are parsed into structured events, so milestones, exceptions, and filings become data you can measure instead of documents you have to read. The data integration doc goes into detail.',
    },
    {
      q: 'How does a project start?',
      a: 'Usually with a trade data assessment: a short, fixed-scope engagement that maps your decisions and data and delivers first dashboards in about two weeks. It de-risks the larger build and produces a scope and a quote grounded in your real data. You leave with working analytics, not a slide deck.',
    },
    {
      q: 'Do you build software too?',
      a: 'Yes, and it grows out of the analytics. Living in a client’s trade data is where our software starts: once we understand the operation, we build the systems that run it, customs filing, trade ERP, inventory, and security vision. Analytics is what we lead with and deliver today; the software is what we build as the relationship deepens.',
    },
    {
      q: 'Do we own the analytics and the data?',
      a: 'Yes. Everything we build is yours: the semantic model, the reports, and the data, all inside your own tenant, with documentation and a full handover. Access is provisioned per engagement against your identity provider and policies. We support and evolve it on a defined agreement after launch, but you are never locked in or dependent on us to keep operating.',
    },
    {
      q: 'Which regions and company sizes do you serve?',
      a: 'We are a US firm serving American importers, exporters, brokers, forwarders, 3PLs, ports, and the manufacturers and distributors that trade across borders. We work with growing operations and established enterprises alike; the common thread is that moving goods across borders is central to the business and the numbers have to be right.',
    },
  ],
};

export const contact = {
  eyebrow: 'Request a quote',
  title: 'Tell us what you move. Get a quote.',
  sub: 'Share how your operation works and where the friction is. Within one business day you get a response with a clear path forward and a quote, no obligation.',
  needOptions: [
    'Landed cost & margin analytics',
    'Duty & tariff exposure',
    'Shipment visibility & OTIF',
    'Customs & compliance analytics',
    'Inventory & warehouse analytics',
    'Executive control tower',
    'Software build (ERP, customs, WMS)',
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
    'A US analytics firm focused 100% on foreign trade. We turn the data in your customs, logistics, and ERP systems into decisions, on the Microsoft stack and in your own tenant, for the companies that move goods across borders.',
  columns: [
    {
      heading: 'Company',
      links: [
        { label: 'Solutions', href: '/services' },
        { label: 'Industries', href: '/industries' },
        { label: 'Cases', href: '/cases' },
        { label: 'Docs', href: '/docs' },
        { label: 'Blog', href: '/blog' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      heading: 'Analytics',
      links: [
        { label: 'Landed cost & margin', href: '/cases/landed-cost-analytics' },
        { label: 'Duty & tariff exposure', href: '/cases/tariff-duty-exposure' },
        { label: 'Shipment visibility & OTIF', href: '/cases/shipment-visibility-analytics' },
        { label: 'Customs & compliance analytics', href: '/cases/entry-throughput-analytics' },
        { label: 'Methodology', href: '/docs/methodology' },
        { label: 'Platforms we build', href: '/services' },
      ],
    },
    {
      heading: 'Industries',
      links: [
        { label: 'Importers & exporters', href: '/industries/importers-exporters' },
        { label: 'Customs brokers', href: '/industries/customs-brokers' },
        { label: 'Freight forwarders', href: '/industries/freight-forwarders' },
        { label: '3PL & warehousing', href: '/industries/third-party-logistics' },
        { label: 'Ports & terminals', href: '/industries/ports-terminals' },
        { label: 'Start a project', href: '/contact' },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Additional homepage sections (richer detail)
// ---------------------------------------------------------------------------

export const techStack = {
  eyebrow: 'The platform',
  title: 'One connected system, from quote to delivery.',
  sub: 'Our software spans the whole trade operation and ties into the systems and partners around it, so data flows instead of being retyped.',
  groups: [
    { label: 'Operations', items: ['Trade ERP', 'CRM', 'Documents', 'Landed cost'] },
    { label: 'Compliance', items: ['HTS classification', 'Denied-party screening', 'Duty calculation', 'ACE filing'] },
    { label: 'Inventory & logistics', items: ['Multi-warehouse WMS', 'Bonded / FTZ', 'Freight & carriers', 'Shipment visibility'] },
    { label: 'Security & integration', items: ['Computer vision', 'EDI', 'Carrier & broker APIs', 'Marketplace links'] },
  ],
  // Flattened for the marquee.
  marquee: [
    'Trade ERP', 'CRM', 'Landed cost', 'HTS classification', 'Denied-party screening', 'Duty calculation',
    'ACE filing', 'Multi-warehouse WMS', 'Bonded / FTZ', 'Freight & carriers', 'Shipment visibility',
    'Computer vision', 'EDI', 'Carrier APIs', 'Broker integration', 'Marketplace links',
  ],
};

export const engagement = {
  eyebrow: 'How we engage',
  title: 'Three ways to work with us.',
  sub: 'Every model runs on the same senior, US-based team, clear acceptance criteria, and analytics you own in your tenant.',
  models: [
    {
      name: 'Trade data assessment',
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
  eyebrow: 'Trade analytics vs the alternatives',
  title: 'Why trade-native analytics wins.',
  sub: 'A generic BI shop or a stack of spreadsheets can draw a chart, but they leave landed cost, duty, and customs to manual work and let every team walk in with a different number.',
  columns: ['Kadmoon (trade-native)', 'Generic BI', 'Spreadsheets'],
  rows: [
    { label: 'One definition per KPI', values: ['yes', 'partial', 'no'] },
    { label: 'Trade-native metrics (landed cost, OTIF, duty)', values: ['yes', 'no', 'partial'] },
    { label: 'Reads SAP, EDI, ACE, and carriers', values: ['yes', 'partial', 'no'] },
    { label: 'Governed and row-level secure', values: ['yes', 'partial', 'no'] },
    { label: 'Lives in your own tenant', values: ['yes', 'partial', 'yes'] },
    { label: 'First dashboards in about two weeks', values: ['yes', 'partial', 'partial'] },
  ],
};

export const credibility = {
  text: 'Kadmoon is a US analytics firm focused entirely on foreign trade, run by a senior, US-based team, with more than 35 clients served. We turn the data in your customs, logistics, and ERP systems into decisions, delivered on the Microsoft stack in your own tenant. The dashboards shown on the site are illustrative of what we ship; detailed client work is available under NDA.',
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
    slug: 'trade-erp',
    title: 'Trade ERP',
    tagline: 'The operating system for an import and export business.',
    intro:
      'Generic ERPs do not understand trade. They cannot model freight, duty, and fees, so landed cost becomes a spreadsheet and margin is a guess. We build a trade ERP around how you source, ship, and sell across borders, with purchase orders, shipments, documents, and true landed cost in one place.',
    includes: [
      'Purchase orders, shipments, and document management built for trade',
      'Landed-cost allocation of freight, duty, and fees to the unit',
      'Supplier and customer management across borders',
      'Real-time margin by product, supplier, and shipment',
      'Finance, invoicing, and multi-currency',
      'Integrations to carriers, brokers, and marketplaces',
    ],
    outcomes: [
      'Landed cost and margin known in real time, not at month end',
      'One system from PO to stock instead of ERP plus spreadsheets',
      'An operation built around trade, not forced into a generic tool',
    ],
    blogCategory: 'Trade ERP',
  },
  {
    slug: 'customs-compliance',
    title: 'Customs & compliance',
    tagline: 'Keep every shipment clear, screened, and auditable.',
    intro:
      'A shipment held at the border or a screening you cannot prove you ran costs real money. We build classification, denied-party screening, duty and landed-cost, and filing into the core of the system, so every order is compliant and documented before it ships.',
    includes: [
      'HTS classification and duty calculation in the order flow',
      'Denied-party and sanctions screening on every counterparty',
      'ACE-ready filing workflows',
      'Document management and recordkeeping per entry',
      'A complete, auditable compliance trail',
      'Rule updates as regulations change',
    ],
    outcomes: [
      'Every shipment classified, screened, and documented before departure',
      'A provable compliance record instead of scattered files',
      'Fewer holds, faster clearance, and audit-ready records',
    ],
    blogCategory: 'Compliance',
  },
  {
    slug: 'inventory-wms',
    title: 'Inventory & WMS',
    tagline: 'Stock visibility across every location you move goods through.',
    intro:
      'Trade inventory is not just a warehouse count. It spans bonded zones, FTZs, in-transit goods, and multiple locations, each with its own rules. We build inventory and warehouse management that tracks it all, so you always know what you have, where it is, and what it is worth.',
    includes: [
      'Multi-warehouse and multi-location inventory',
      'Bonded and Foreign-Trade Zone handling',
      'Receiving, putaway, picking, and shipping',
      'Lot, serial, and in-transit tracking',
      'Stock valuation with landed cost',
      'Barcode and scanner workflows',
    ],
    outcomes: [
      'One accurate view of stock across every location',
      'Bonded and FTZ goods handled by the rules',
      'Inventory valued at true landed cost',
    ],
    blogCategory: 'Inventory',
  },
  {
    slug: 'vessel-security-vision',
    title: 'Vessel & port security vision',
    tagline: 'Computer vision that watches cargo, containers, and the perimeter.',
    intro:
      'Security teams cannot watch dozens of camera feeds at once, so incidents at the yard, the berth, or the perimeter get caught late or missed. We layer computer vision over your existing cameras to detect anomalies and events in real time and route alerts to the people who can act.',
    includes: [
      'Computer-vision models over yard, berth, and perimeter cameras',
      'Container, cargo, and vehicle detection',
      'Unauthorized access and perimeter-breach alerts',
      'Anomaly detection with real-time notification',
      'An incident console with clip, location, and audit trail',
      'Integration with existing camera and access systems',
    ],
    outcomes: [
      'Incidents caught in real time instead of after the fact',
      'A watch team that acts on alerts instead of scanning feeds',
      'An auditable record of every flagged event',
    ],
    blogCategory: 'Security',
  },
  {
    slug: 'supply-chain-logistics',
    title: 'Supply chain & logistics',
    tagline: 'End-to-end visibility from supplier to door.',
    intro:
      'When shipment status lives in carrier portals, email, and spreadsheets, customers call for updates and exceptions surface too late. We build logistics software that consolidates carrier and shipment data, tracks every move end to end, and flags problems early.',
    includes: [
      'Freight, carrier, and shipment management',
      'End-to-end tracking from supplier to door',
      'Exception detection and early alerts',
      'Carrier and partner integration over EDI and API',
      'A customer portal for self-service status and documents',
      'Freight cost and service-level reporting',
    ],
    outcomes: [
      'Shipment status in one place instead of five portals',
      'Exceptions caught early instead of at delivery',
      'Customers self-serve instead of calling for updates',
    ],
    blogCategory: 'Logistics',
  },
  {
    slug: 'trade-crm',
    title: 'Trade CRM',
    tagline: 'Manage suppliers, customers, and deals across borders.',
    intro:
      'Cross-border relationships are more than a contact list: quotes, terms, incoterms, credit, and compliance all ride on them. We build a CRM around trade, so your team manages suppliers and customers with the context that matters in international commerce.',
    includes: [
      'Supplier and customer management with trade context',
      'Quotes and terms with incoterms and currency',
      'Pipeline and deal tracking',
      'Credit, documents, and compliance per party',
      'Integration with the trade ERP and compliance',
      'Activity, email, and task tracking',
    ],
    outcomes: [
      'Relationships managed with the trade context that matters',
      'Quotes and terms consistent across the team',
      'CRM connected to operations, not a separate island',
    ],
    blogCategory: 'Trade CRM',
  },
  {
    slug: 'custom-development',
    title: 'Custom development',
    tagline: 'When off-the-shelf does not fit how you trade, we build it.',
    intro:
      'Some operations are genuinely different, or need software no product covers. We build custom trade software from scratch: the integrations, portals, and workflows your operation depends on, by a team that already knows customs, logistics, and compliance.',
    includes: [
      'Custom trade software built to your operation',
      'Integrations with carriers, brokers, ACE, and marketplaces',
      'Partner and customer portals',
      'Workflow automation across your systems',
      'Modernization of legacy trade software',
      'A senior, US-based team from scope to support',
    ],
    outcomes: [
      'Software built to match how you work',
      'The integrations and workflows no product covers',
      'A partner who already speaks trade',
    ],
    blogCategory: 'Custom software',
  },
  {
    slug: 'trade-integrations',
    title: 'Trade integrations',
    tagline: 'Connect your systems, your partners, and the government.',
    intro:
      'Trade runs on data moving between parties. When it does not flow, your team becomes a manual data entry and errors multiply. We build the EDI and API connections that keep your ERP, compliance, inventory, and logistics in sync with each other and the outside world.',
    includes: [
      'EDI with carriers, brokers, and partners',
      'ACE and government-system integration',
      'Carrier and marketplace APIs',
      'System-to-system data sync across your stack',
      'Error handling, monitoring, and reconciliation',
      'Mapping and onboarding of new partners',
    ],
    outcomes: [
      'Data flows between systems instead of being retyped',
      'Partners and government systems connected and in sync',
      'Fewer errors and less manual reconciliation',
    ],
    blogCategory: 'Integrations',
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
