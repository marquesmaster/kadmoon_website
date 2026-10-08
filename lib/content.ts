/**
 * All landing-page copy for Kadmoon, Inc.
 *
 * Kadmoon is a US software company focused 100% on foreign trade / international
 * commerce: trade ERP, CRM, inventory/WMS, customs & compliance, computer vision
 * for port and vessel security, and supply-chain & logistics software, delivered
 * as ready platforms and as custom development. We do not publish prices; every
 * engagement is scoped to the client. Do NOT invent client names or metrics.
 */

export const nav = {
  wordmark: 'Kadmoon',
  suffix: 'INC.',
  links: [
    { label: 'Solutions', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Work', href: '/cases' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
  ],
  cta: { label: 'Request a quote', href: '/contact' },
};

export const hero = {
  eyebrow: 'Software for foreign trade · United States',
  // The accent phrase is rendered in the accent color inside the H1.
  headlineBefore: 'Clear customs, move cargo, ',
  headlineAccent: 'run it all',
  headlineAfter: ' in one platform.',
  subhead:
    'Kadmoon builds the software US importers, exporters, brokers, and forwarders run on: trade ERP, customs and compliance, inventory, vessel security, and logistics. Ready platforms and custom builds, shaped to how you move goods.',
  flagship: 'Trade ERP · Customs & compliance · Inventory & WMS · Vessel security vision · Supply chain & logistics',
  ctas: [
    { label: 'Request a quote', href: '/contact', primary: true },
    { label: 'See the platform', href: '/services', primary: false },
  ],
  // What ships with a Kadmoon engagement.
  panelLabel: 'What you get',
  deliverables: [
    'Software tuned to your trade operation',
    'Customs and compliance built in',
    'Integrations to carriers, brokers, and ACE',
    'Your data in your systems',
    'US-based team and full handover',
  ],
  panelFooter: 'Built for how US trade actually runs. Yours to own, not to rent.',
};

// Positioning signals rather than fabricated metrics.
export const stats = [
  { value: '100%', label: 'foreign-trade focus' },
  { value: 'US', label: 'based and operated' },
  { value: 'End-to-end', label: 'quote to delivery' },
  { value: 'Custom', label: 'built to your flow' },
];

export const capabilities = {
  eyebrow: 'What we build',
  title: 'Every system a cross-border operation runs on.',
  sub: 'One partner for the whole trade stack: the ERP that runs operations, the compliance that keeps you clear, the inventory and logistics that move goods, and the security that protects them, built as platforms and tailored to you.',
  items: [
    {
      title: 'Trade ERP',
      body: 'Purchase orders, shipments, documents, landed cost, and finance in one system built around import and export, not bolted onto a generic ERP.',
    },
    {
      title: 'Customs & compliance',
      body: 'HTS classification, denied-party screening, duty and landed-cost calculation, and filing workflows that keep every shipment clear and auditable.',
    },
    {
      title: 'Inventory & WMS',
      body: 'Multi-warehouse inventory, bonded and FTZ handling, receiving, picking, and stock visibility across every location you move goods through.',
    },
    {
      title: 'Vessel & port security vision',
      body: 'Computer vision for cargo, container, and vessel security: anomaly detection, access and perimeter monitoring, and automated inspection support.',
    },
    {
      title: 'Supply chain & logistics',
      body: 'Freight, carrier, and shipment management with end-to-end visibility from supplier to door, and the EDI and API links that keep partners in sync.',
    },
    {
      title: 'Custom development',
      body: 'When an off-the-shelf tool does not fit how you trade, we build it: integrations, portals, and the workflows your operation actually depends on.',
    },
  ],
};

export const why = {
  eyebrow: 'Why Kadmoon',
  title: 'A software partner that speaks trade.',
  sub: 'We do one thing: software for companies that move goods across borders. That focus is why the systems fit your operation instead of forcing your operation to fit the software.',
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
      body: 'Start on a ready Kadmoon platform and tailor it, or have us build from scratch. Either way you get software shaped to how your operation really works.',
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
  title: 'How to choose a trade software partner.',
  sub: 'Six questions worth asking before you hire anyone to build the software your cross-border operation runs on, us or anyone else.',
  items: [
    {
      num: '01',
      title: 'Do they know trade?',
      body: 'Ask whether they have built customs, landed-cost, or logistics software before. Generic developers will model your operation wrong because they do not know what incoterms or a denied-party screen are.',
      answer:
        'Foreign trade is the only thing we build for. Customs, compliance, inventory, and logistics are our native vocabulary, not a new domain we are learning on your budget.',
    },
    {
      num: '02',
      title: 'Who builds it',
      body: 'Ask whether the engineers are full-time employees or rotating freelancers. The software that runs your operation needs people who still understand it a year later.',
      answer:
        'A senior, US-based in-house team. The people who scope your system build it and support it. No pass-through to third parties.',
    },
    {
      num: '03',
      title: 'Buy, build, or both',
      body: 'Ask whether you are forced into a rigid product or an endless custom build. The right answer is usually a proven platform tailored to your flow.',
      answer:
        'Both. Start on a ready Kadmoon platform and tailor it, or have us build custom. You get a shortcut where one exists and a fit where it matters.',
    },
    {
      num: '04',
      title: 'Compliance and audit',
      body: 'Confirm screening, classification, and audit trails are built in. Trade software that ignores compliance becomes a liability the first time CBP asks a question.',
      answer:
        'Compliance is part of the build: denied-party screening, HTS classification, and auditable records, so you stay clear as you scale.',
    },
    {
      num: '05',
      title: 'Integrations',
      body: 'Ask how it connects to carriers, brokers, marketplaces, and ACE. Software that cannot exchange data turns your team into a data-entry department.',
      answer:
        'We build the EDI and API links your operation needs, so ERP, compliance, inventory, and logistics stay in sync with each other and your partners.',
    },
    {
      num: '06',
      title: 'Ownership and support',
      body: 'Confirm you own the software and the data, and ask how support works after launch. Software you cannot reach or change is a trap.',
      answer:
        'You own the software and the data, with documentation and a full handover. We support and evolve it on a defined agreement after go-live.',
    },
  ],
};

export const process = {
  eyebrow: 'How we work',
  title: 'Four phases, from trade flow to live software.',
  steps: [
    {
      num: '01',
      title: 'Discovery',
      meta: 'Week 1-2',
      body: 'We map how goods, documents, and money actually move through your operation: the trade lanes, the compliance checkpoints, the systems, and where the friction is. Output: a scope and an architecture plan.',
    },
    {
      num: '02',
      title: 'Foundation',
      meta: 'Week 3-4',
      body: 'We stand up the core, a ready platform tailored to you or a custom base, with the data model, compliance rules, and integrations your flow needs. Output: the working core and first integrations.',
    },
    {
      num: '03',
      title: 'Build',
      meta: 'Ongoing cycles',
      body: 'We deliver in short cycles, each one a working piece of your operation you can validate: orders, filings, inventory, logistics, or security, wired to your partners as we go. Output: software in production.',
    },
    {
      num: '04',
      title: 'Sustain',
      meta: 'Ongoing',
      body: 'We train your team, keep integrations and compliance current as rules change, and evolve the software as your trade grows. Output: a system that keeps pace with your business.',
    },
  ],
};

export const work = {
  eyebrow: 'Selected work',
  title: 'Software behind real trade operations.',
  sub: 'The kinds of systems we build for cross-border operations. Client names and figures are illustrative and under NDA; the structure is what ships.',
  cases: [
    {
      tag: 'Customs Brokerage',
      title: 'Customs filing and compliance platform',
      body: 'HTS classification, denied-party screening, and ACE-ready filing workflows in one auditable system, replacing spreadsheets and disconnected tools.',
    },
    {
      tag: 'Importers',
      title: 'Trade ERP with landed cost',
      body: 'Purchase orders, shipments, documents, and true landed cost in one platform built around import operations, not a generic ERP.',
    },
    {
      tag: 'Ports & Security',
      title: 'Vessel and cargo security vision',
      body: 'Computer vision over yard and berth cameras for container, cargo, and perimeter monitoring, with anomaly alerts routed to the security desk.',
    },
  ],
};

// Signature-practice highlight on the homepage: customs & compliance.
// The panel is an explicitly labeled example, not a real client's figures.
export const migrationHighlight = {
  eyebrow: 'Our specialty',
  title: 'Customs and compliance, built into the software, not bolted on',
  body: 'The fastest way to lose money in trade is a shipment held at the border or a screening you cannot prove you ran. We build classification, denied-party screening, duty and landed-cost, and filing into the core of the system, so every order is clear and auditable before it ships.',
  points: [
    'HTS classification and duty calculation in the order flow',
    'Denied-party and sanctions screening on every counterparty',
    'ACE-ready filing and a full, auditable record',
  ],
  ctas: [
    { label: 'See the approach', href: '/services/customs-compliance', primary: true },
    { label: 'Talk to us', href: '#contact', primary: false },
  ],
  panel: {
    label: 'Shipment compliance',
    caption: 'example · pre-departure',
    rows: [
      { label: 'HTS classified', value: '100%', status: 'mapped' },
      { label: 'Parties screened', value: '100%', status: 'mapped' },
      { label: 'Duty & landed cost', value: 'calculated', status: 'mapped' },
      { label: 'Documents complete', value: '42 / 42', status: 'mapped' },
      { label: 'ACE filing', value: 'ready', status: 'mapped' },
      { label: 'Flags to review', value: '2', status: 'review' },
      { label: 'Audit record', value: 'complete', status: 'mapped' },
    ],
  },
};

// ---------------------------------------------------------------------------
// Case studies. Illustrative structures of systems we build for cross-border
// operations. Do NOT add client names or metrics that are not verified.
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
    slug: 'customs-filing-platform',
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
    stack: ['Web platform', 'EDI / ACE integration', 'Rules engine', 'Audit log'],
  },
  {
    slug: 'trade-erp-landed-cost',
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
    stack: ['Trade ERP', 'Integrations', 'Reporting', 'Document management'],
  },
  {
    slug: 'vessel-security-vision',
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
    stack: ['Computer vision', 'Edge / streaming', 'Alerting', 'Web console'],
  },
  {
    slug: 'freight-visibility-platform',
    sector: 'Freight & Logistics',
    title: 'Shipment visibility and logistics platform',
    summary:
      'A forwarder unified carrier, shipment, and document data into one platform with end-to-end visibility and partner integrations.',
    challenge:
      'Shipment status lived in carrier portals, email, and spreadsheets, so customers called for updates the team had to go dig up, and exceptions surfaced too late.',
    build:
      'We built a logistics platform that consolidates carrier and shipment data over EDI and API, tracks every shipment end to end, and flags exceptions early, with a portal customers can self-serve.',
    whatWeBuilt: [
      'Carrier and shipment data unified over EDI and API.',
      'End-to-end tracking from supplier to door with exception flags.',
      'A customer portal for self-service status and documents.',
    ],
    outcomes: [
      'Shipment status in one place instead of five portals.',
      'Exceptions caught early instead of at delivery.',
      'Customers self-serve instead of calling for updates.',
    ],
    stack: ['Logistics platform', 'EDI / API', 'Customer portal', 'Alerting'],
  },
];

export const industries = {
  eyebrow: 'Who we serve',
  title: 'Built for the companies that move goods.',
  sub: 'Every link in the trade chain runs on different systems and rules. We build software tuned to how yours actually operates.',
  items: [
    {
      name: 'Importers & exporters',
      flagship: true,
      body: 'Trade ERP, landed cost, and compliance in one platform built around how you source, ship, and sell across borders.',
      count: 'Trade ERP',
    },
    {
      name: 'Customs brokers',
      body: 'Classification, screening, and ACE-ready filing in one auditable system instead of spreadsheets and disconnected tools.',
      count: 'Compliance',
    },
    {
      name: 'Freight forwarders',
      body: 'Shipment, carrier, and document management with end-to-end visibility and a portal your customers can self-serve.',
      count: 'Logistics',
    },
    {
      name: '3PL & warehousing',
      body: 'Multi-warehouse inventory with bonded and FTZ handling, receiving, picking, and stock visibility across locations.',
      count: 'WMS',
    },
    {
      name: 'Ports & terminals',
      body: 'Computer-vision security over cargo, containers, and the perimeter, with real-time alerts to the security desk.',
      count: 'Vision',
    },
    {
      name: 'Manufacturers & distributors',
      body: 'Source, import, and distribute on one system, with landed cost, inventory, and compliance connected end to end.',
      count: 'ERP',
    },
    {
      name: 'Ocean & shipping carriers',
      body: 'Operations and visibility software for the companies that carry the cargo, integrated with partners and terminals.',
      count: 'Logistics',
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
      a: 'We are a US software company focused entirely on foreign trade. We build the systems that cross-border operations run on: trade ERP, CRM, inventory and warehouse management, customs and compliance, computer vision for port and vessel security, and supply-chain and logistics software. You can start on a ready Kadmoon platform and tailor it to your operation, or have us build custom software from scratch. Either way you own the software and the data.',
    },
    {
      q: 'Do you build products or custom software?',
      a: 'Both, and most clients use a mix. We have platforms for the common trade problems, ERP, customs and compliance, inventory, logistics, so you are not paying to rebuild what already exists. Then we tailor and extend them, or build fully custom where your operation is genuinely different. The goal is software shaped to how you trade, reached by the shortest path that gets you there.',
    },
    {
      q: 'Why only foreign trade?',
      a: 'Because trade software fails when it is built by people who do not know trade. Incoterms, landed cost, bonded inventory, HTS classification, denied-party screening, and ACE filing are not edge cases to us, they are the core of what we build. That focus is why our systems model your operation correctly instead of forcing it into a generic template.',
    },
    {
      q: 'Can you integrate with our carriers, brokers, and ACE?',
      a: 'Yes, integration is central to what we do. Trade runs on data moving between parties: carriers, brokers, marketplaces, terminals, and government systems like ACE. We build the EDI and API connections so your ERP, compliance, inventory, and logistics stay in sync with each other and with your partners, instead of your team retyping the same data into five systems.',
    },
    {
      q: 'How does a project start?',
      a: 'With a short discovery, usually one to two weeks. We map how goods, documents, and money actually move through your operation: the trade lanes, the compliance checkpoints, the systems you use, and where the friction is. You leave with a scope and an architecture plan you can act on, with a clear path whether you start on a platform or build custom.',
    },
    {
      q: 'Do we own the software and the data?',
      a: 'Yes. Everything we build is yours: the software, the source, and the data, deployed in your environment with documentation and a full handover. We support and evolve it on a defined agreement after launch, but you are never locked in or dependent on us to keep operating. Software that runs your business should belong to your business.',
    },
    {
      q: 'Which regions and company sizes do you serve?',
      a: 'We are a US company serving American importers, exporters, brokers, forwarders, 3PLs, ports, and the manufacturers and distributors that trade across borders. We work with growing operations and established enterprises alike; the common thread is that moving goods across borders is central to the business and the software has to get it right.',
    },
  ],
};

export const contact = {
  eyebrow: 'Request a quote',
  title: 'Tell us what you move. Get a quote.',
  sub: 'Share how your operation works and where the friction is. Within one business day you get a response with a clear path forward and a quote, no obligation.',
  needOptions: [
    'Trade ERP',
    'Customs & compliance',
    'Inventory / WMS',
    'Vessel / port security vision',
    'Supply chain & logistics',
    'Custom software',
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
    'A US software company focused 100% on foreign trade: trade ERP, customs and compliance, inventory, security vision, and logistics, built as platforms and custom development for the companies that move goods across borders.',
  columns: [
    {
      heading: 'Company',
      links: [
        { label: 'Solutions', href: '/services' },
        { label: 'Industries', href: '/industries' },
        { label: 'Work', href: '/cases' },
        { label: 'Blog', href: '/blog' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      heading: 'Solutions',
      links: [
        { label: 'Trade ERP', href: '/services/trade-erp' },
        { label: 'Customs & compliance', href: '/services/customs-compliance' },
        { label: 'Inventory & WMS', href: '/services/inventory-wms' },
        { label: 'Security vision', href: '/services/vessel-security-vision' },
        { label: 'Supply chain & logistics', href: '/services/supply-chain-logistics' },
        { label: 'Custom development', href: '/services/custom-development' },
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
  sub: 'Every model runs on the same senior, US-based team, clear acceptance criteria, and software you own.',
  models: [
    {
      name: 'Platform + tailoring',
      best: 'Best for a fast start',
      body: 'Start on a ready Kadmoon platform, trade ERP, compliance, inventory, or logistics, and we tailor it to your flow and integrate it with your partners. The shortest path to software that fits.',
      points: ['Proven core', 'Tailored to your flow', 'Live faster'],
    },
    {
      name: 'Custom build',
      best: 'Best when you are genuinely different',
      body: 'A system built from scratch around how your operation actually works, with clear acceptance criteria per deliverable and delivery in short, reviewable cycles. You know what ships and when.',
      points: ['Acceptance criteria per deliverable', 'Short delivery cycles', 'Built to your operation'],
    },
    {
      name: 'Support & evolution',
      best: 'Best after go-live',
      body: 'We keep integrations and compliance current as rules and partners change, support the software on a defined agreement, and evolve it as your trade grows.',
      points: ['Defined support agreement', 'Compliance kept current', 'Evolution roadmap'],
    },
  ],
};

export const comparison = {
  eyebrow: 'Built for trade vs the alternatives',
  title: 'Why trade-native software wins.',
  sub: 'A generic ERP or a stack of point tools can get you running. They also leave compliance, landed cost, and the border to spreadsheets and hope.',
  columns: ['Kadmoon (trade-native)', 'Generic ERP', 'Spreadsheets & point tools'],
  rows: [
    { label: 'Customs & compliance built in', values: ['yes', 'no', 'no'] },
    { label: 'True landed cost', values: ['yes', 'partial', 'partial'] },
    { label: 'Carrier, broker & ACE integration', values: ['yes', 'partial', 'no'] },
    { label: 'Bonded / FTZ inventory', values: ['yes', 'partial', 'no'] },
    { label: 'Tailored to your trade flow', values: ['yes', 'partial', 'yes'] },
    { label: 'You own the software and data', values: ['yes', 'partial', 'yes'] },
  ],
};

export const credibility = {
  text: 'Kadmoon is a US software company focused entirely on foreign trade, run by a senior, US-based team. We build trade ERP, customs and compliance, inventory, security vision, and logistics software as ready platforms and custom development. The systems shown on the site are illustrative of what we build; detailed client work is available under NDA.',
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
      'Generic ERPs do not understand trade. They cannot model freight, duty, and fees, so landed cost becomes a spreadsheet and margin is a guess. We build a trade ERP around how you actually source, ship, and sell across borders, with purchase orders, shipments, documents, and true landed cost in one place.',
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
      'Cross-border relationships are more than a contact list: quotes, terms, incoterms, credit, and compliance all ride on them. We build a CRM around trade, so your team manages suppliers and customers with the context that actually matters in international commerce.',
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
      'Software shaped to how you actually work',
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
      'Trade runs on data moving between parties. When it does not flow, your team becomes a data-entry department and errors multiply. We build the EDI and API connections that keep your ERP, compliance, inventory, and logistics in sync with each other and the outside world.',
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
      'Importers and exporters run on landed cost, compliance, and timing, and generic tools get all three wrong. We build trade ERP, compliance, and inventory into one platform tuned to how you source, ship, and sell across borders.',
    systems: [
      'Purchase orders, shipments, and documents in one place',
      'True landed cost and margin by product and shipment',
      'Customs classification and screening built in',
      'Inventory across warehouses, bonded zones, and FTZs',
    ],
    integrations: ['Carriers and freight forwarders', 'Customs brokers and ACE', 'Marketplaces', 'Accounting systems'],
    keyword: 'importers and exporters',
  },
  {
    slug: 'customs-brokers',
    name: 'Customs Brokers',
    intro:
      'Brokers live and die on accuracy and speed, and spreadsheets cannot keep up. We build classification, screening, and ACE-ready filing into one auditable platform so every entry is right, provable, and fast.',
    systems: [
      'HTS classification and duty calculation',
      'Denied-party and sanctions screening on every party',
      'ACE-ready filing workflows',
      'A complete, auditable record per entry',
    ],
    integrations: ['ACE / CBP systems', 'Client ERPs', 'Carriers', 'Document systems'],
    keyword: 'customs brokers',
  },
  {
    slug: 'freight-forwarders',
    name: 'Freight Forwarders',
    intro:
      'When shipment status lives in a dozen carrier portals and inboxes, service suffers and exceptions surface late. We build shipment, carrier, and document management with end-to-end visibility and a portal your customers can self-serve.',
    systems: [
      'Shipment and carrier management end to end',
      'Real-time visibility with exception flags',
      'Document management per shipment',
      'A self-service customer portal',
    ],
    integrations: ['Carriers over EDI and API', 'Customs brokers', 'Terminals and ports', 'Accounting'],
    keyword: 'freight forwarders',
  },
  {
    slug: 'third-party-logistics',
    name: '3PL & Warehousing',
    intro:
      'Trade inventory spans bonded zones, FTZs, and multiple locations, each with its own rules. We build warehouse management that tracks it all accurately, from receiving to shipping, valued at true landed cost.',
    systems: [
      'Multi-warehouse and multi-client inventory',
      'Bonded and Foreign-Trade Zone handling',
      'Receiving, putaway, picking, and shipping',
      'Stock valuation with landed cost',
    ],
    integrations: ['Client ERPs and marketplaces', 'Carriers', 'Scanners and devices', 'Billing systems'],
    keyword: 'third-party logistics',
  },
  {
    slug: 'ports-terminals',
    name: 'Ports & Terminals',
    intro:
      'Security teams cannot watch every feed, and operations data is scattered. We build computer-vision security over your existing cameras and the operational software that keeps cargo, containers, and the perimeter under control.',
    systems: [
      'Computer vision over yard, berth, and perimeter cameras',
      'Container, cargo, and vehicle detection',
      'Access and perimeter-breach alerts in real time',
      'An incident console with clip, location, and audit trail',
    ],
    integrations: ['Existing camera and access systems', 'Terminal operating systems', 'Security desks', 'Alerting channels'],
    keyword: 'ports and terminals',
  },
  {
    slug: 'manufacturers-distributors',
    name: 'Manufacturers & Distributors',
    intro:
      'Companies that source abroad and distribute at home straddle two worlds of software. We build one system that spans import, inventory, and distribution, with landed cost and compliance connected end to end.',
    systems: [
      'Sourcing and import on one platform',
      'Landed cost flowing into pricing and margin',
      'Inventory across warehouses and zones',
      'Distribution and fulfillment connected to trade',
    ],
    integrations: ['Suppliers overseas', 'Carriers and brokers', 'Marketplaces and EDI', 'Accounting and ERP'],
    keyword: 'manufacturers and distributors',
  },
  {
    slug: 'shipping-carriers',
    name: 'Ocean & Shipping Carriers',
    intro:
      'The companies that carry the cargo need operations and visibility software that integrates with terminals, partners, and customers. We build it around how carriers actually run.',
    systems: [
      'Operations and booking management',
      'Shipment and cargo visibility',
      'Partner and terminal integration',
      'Customer-facing tracking',
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
