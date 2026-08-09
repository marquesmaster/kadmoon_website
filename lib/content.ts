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
    { label: 'Solutions', href: '/solutions' },
    { label: 'Industries', href: '/industries' },
    { label: 'Cases', href: '/cases' },
    { label: 'Dashboards', href: '/dashboards' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
  ],
  cta: { label: 'Start a project', href: '/#contact' },
};

export const hero = {
  eyebrow: 'Custom software firm · Austin, TX',
  // The accent phrase is rendered in orange inside the H1.
  headlineBefore: 'The custom software your operation runs on, built for ',
  headlineAccent: 'your process',
  headlineAfter: ', owned by you.',
  subhead:
    'Kadmoon builds bespoke enterprise systems, SaaS platforms, mobile apps, and AI into a single delivery, from concept to production, with a senior in-house team. No off-the-shelf compromises. You own every line.',
  flagship: 'Flagship practice: Trade & Supply Chain software.',
  ctas: [
    { label: 'Start a project', href: '#contact', primary: true },
    { label: 'See capabilities', href: '#capabilities', primary: false },
  ],
};

// TODO(founder): confirm these figures are honestly defensible before launch.
export const stats = [
  { value: '50+', label: 'systems delivered' },
  { value: '10+', label: 'industries served' },
  { value: '0%', label: 'turnover in operation' },
  { value: '100%', label: 'senior in-house team' },
];

export const capabilities = {
  eyebrow: 'What we build',
  title: 'From the core system to the model in production.',
  sub: 'Six competencies that cover the full lifecycle of enterprise software, each specified with measurable acceptance criteria and delivered in validated sprints.',
  items: [
    {
      title: 'Enterprise Systems',
      body: 'ERPs, CRMs, and operational platforms designed around how your business actually runs, not generic software bent to fit. Every module is specified with measurable acceptance criteria.',
    },
    {
      title: 'SaaS Platforms',
      body: 'Multi-tenant products with recurring billing, white-label onboarding, analytics dashboards, and documented public APIs. Architected to scale from 10 to 10,000 customers without a rewrite.',
    },
    {
      title: 'Mobile Apps',
      body: 'Native and cross-platform (React Native) apps for iOS and Android, with product-grade UX, offline-first when needed, and direct integration with your backend.',
    },
    {
      title: 'Integrations & APIs',
      body: 'We connect your ecosystem: legacy ERPs, US Customs/ACE, payment gateways, marketplaces, and any third-party REST/SOAP API. Resilient middleware with retry, dead-letter, and full observability.',
    },
    {
      title: 'Data & AI',
      body: 'Ingestion pipelines, data warehouses, BI dashboards, ML models for forecasting and classification, and LLMs via RAG for semantic search, report generation, and intelligent automation, built into the system rather than bolted on later.',
    },
    {
      title: 'Legacy Modernization',
      body: 'Migration of COBOL, Delphi, VB6, and legacy .NET/PHP to a modern stack. Monolith-to-microservices refactoring, cloud migration, and elimination of critical technical debt.',
    },
  ],
};

export const why = {
  eyebrow: 'Why Kadmoon',
  title: 'A software house you can build your business on.',
  sub: 'Each of these is an engineering and management decision we made so your project ships with quality, predictability, and full ownership.',
  items: [
    {
      title: 'You own the IP',
      body: 'Source code, architecture, documentation, and every artifact are 100% yours. On delivery you get the Git repo, CI/CD pipelines, infrastructure credentials, and an operational runbook. No lock-in, no permanent dependency.',
    },
    {
      title: 'Senior in-house team, 0% turnover',
      body: 'No subcontractors. Every engineer, designer, and architect is on our permanent team. The team that starts your project is the team that ships it.',
    },
    {
      title: 'Granular contractual scope',
      body: 'Every feature is described with measurable acceptance criteria in the contract. You know exactly what you\'ll get, when, and how to validate it. No ambiguity, no "that was technically in scope."',
    },
    {
      title: 'AI built into every project',
      body: 'Predictive analysis, report generation, anomaly detection, and decision automation, engineered into the architecture from day one instead of a generic chatbot bolted on at the end.',
    },
    {
      title: 'Modern stack, zero legacy',
      body: 'React, Next.js, Node.js, Python, TypeScript, PostgreSQL, Kubernetes, Terraform. No project of ours is born with technical debt. We choose the stack on merit: performance, security, and long-term maintainability.',
    },
    {
      title: 'Continuous delivery with demos',
      body: 'Two-week sprints with a working demo at the end of every cycle. You track progress in real time and never wait months to see software running.',
    },
  ],
};

export const howToChoose = {
  eyebrow: 'Buyer\'s guide',
  title: 'How to evaluate a software partner.',
  sub: 'After 50+ delivered projects in regulated verticals, these are the six criteria we would use ourselves to vet a vendor. Use it as a checklist before signing any contract, with Kadmoon or anyone else.',
  items: [
    {
      num: '01',
      title: 'Who writes the code',
      body: 'Ask whether the team is in-house or subcontracted, and whether engineers are full-time employees or rotating freelancers. Cascading subcontracting is the #1 cause of projects that slip and lose quality.',
      answer:
        '100% in-house, full-time team. No pass-through to third parties. 0% turnover in operation.',
    },
    {
      num: '02',
      title: 'What\'s in the contract',
      body: 'Demand measurable acceptance criteria per feature, not promises that it will "turn out well." If scope is vague, real cost becomes a black box.',
      answer:
        'Every deliverable has a defined, verifiable acceptance criterion in the contract. You know what you get, when, and how to validate it.',
    },
    {
      num: '03',
      title: 'Real portfolio, not logos',
      body: 'Ask for concrete cases with problem, solution, and result, ideally in your vertical. A wall of logos without context proves nothing.',
      answer:
        '50+ projects across 10+ industries, with detailed cases including trade, logistics, and enterprise systems.',
    },
    {
      num: '04',
      title: 'Ownership & lock-in',
      body: 'Confirm who owns the code, architecture, and infrastructure. If you don\'t receive the repo and credentials, you\'re hostage to the vendor.',
      answer:
        'IP is 100% yours. On delivery you get the Git repo, credentials, runbook, and documentation. No lock-in.',
    },
    {
      num: '05',
      title: 'Cadence & visibility',
      body: 'Real software shows up early. Be wary of anyone who only reveals results at the end. Ask for frequent demos and a way to track progress.',
      answer:
        'Two-week sprints with a working demo each cycle. You see software running from the first month.',
    },
    {
      num: '06',
      title: 'What happens after go-live',
      body: 'Ask about support, SLA, and bug fixes after delivery. A project with no maintenance plan becomes technical debt in your lap.',
      answer:
        'Post-delivery support with a defined SLA and three engagement models to keep evolving the product.',
    },
  ],
};

export const process = {
  eyebrow: 'How we work',
  title: 'From the problem to software in production.',
  steps: [
    {
      num: '01',
      title: 'Discovery & Requirements',
      meta: 'Week 1',
      body: 'Immersion in the business problem. We map processes, pain points, integrations, data volumes, and regulatory constraints. Output: a validated requirements document with acceptance criteria.',
    },
    {
      num: '02',
      title: 'Architecture & Design',
      meta: 'Weeks 2-3',
      body: 'Architecture definition (microservices, modular monolith, event-driven), design system, high-fidelity prototyping, and sprint planning with per-module estimates.',
    },
    {
      num: '03',
      title: 'Development',
      meta: 'Sprint 1+',
      body: 'Two-week sprints with continuous delivery. Working demo each cycle. Client feedback goes straight into the backlog. Mandatory code review, pair programming on critical modules.',
    },
    {
      num: '04',
      title: 'Testing & QA',
      meta: 'Continuous',
      body: 'Automated unit, integration, and E2E tests. Manual QA each sprint. Nothing ships without test coverage and QA sign-off. Bug and regression report per sprint.',
    },
    {
      num: '05',
      title: 'Deploy & Go-live',
      meta: 'Milestone',
      body: 'CI/CD via GitHub Actions. Infrastructure provisioned with Terraform. Monitoring with Datadog/Grafana. Zero-downtime deploy with automatic rollback.',
    },
    {
      num: '06',
      title: 'Evolution & Support',
      meta: 'Post-delivery',
      body: 'Ongoing support with a defined SLA. P1 fixes within 4 hours. Planned evolution on a quarterly roadmap. Full handoff with documentation, runbook, and team training.',
    },
  ],
};

export const work = {
  eyebrow: 'Selected work',
  title: 'Delivered by our engineering team.',
  sub: 'Cases from our team\'s track record. The first US-specific case will join them as it lands.',
  // Framed honestly as the engineering team's record. Do NOT imply Microsoft
  // was the client unless that is true. TODO(founder): add the contract value
  // for case 2 and any NDA-cleared client names when available.
  cases: [
    {
      tag: 'Microsoft Project ecosystem',
      title: 'Microsoft Project Server migration',
      body: 'Migration and customization within the Microsoft Project ecosystem (Project Web App to Project Server), delivered for an enterprise client.',
    },
    {
      tag: 'Public sector · at scale',
      title: 'Enterprise delivery at scale',
      body: '16 stalled public-sector projects delivered in 11 months, unlocking over $100M in contracts, with 0% turnover across the engagement. AI, data, and management systems, shipped by a senior in-house team.',
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
    slug: 'public-sector-delivery-at-scale',
    sector: 'Government & Enterprise',
    title: 'Sixteen stalled public-sector projects, delivered',
    summary:
      'A dedicated in-house squad took over sixteen stalled digital transformation projects and shipped all of them, unblocking a large contract pipeline.',
    challenge:
      'A top-tier IT consulting firm had sixteen public-sector digital transformation projects stalled for over a year, holding up a large pipeline of signed contracts.',
    build:
      'A dedicated in-house squad of engineers, data specialists, and AI engineers took over delivery end to end, shipping the sixteen initiatives across AI, data, and management systems while keeping the same team on the engagement the whole way through.',
    whatWeBuilt: [
      'A single senior squad that owned delivery across all sixteen initiatives instead of scattered vendors.',
      'AI, data, and management systems built to the requirements of each public-sector program.',
      'A steady sprint cadence that turned a stalled pipeline into shipped software.',
    ],
    outcomes: [
      'Sixteen initiatives delivered in eleven months.',
      'Over $100M in contracts unblocked.',
      '0% turnover across the engagement.',
    ],
    stack: ['AI / ML', 'Data pipelines', 'Management systems', 'Cloud'],
    result:
      'Sixteen initiatives delivered in eleven months, over $100M in contracts unblocked, and 0% turnover across the engagement.',
  },
  {
    slug: 'education-platform',
    sector: 'Education',
    title: 'One platform for administrators, teachers, and families',
    summary:
      'An integrated platform that replaced paper and disconnected tools, connecting administrators, teachers, and families in real time.',
    challenge:
      'Schools were running attendance, grades, and family communication across paper and disconnected tools, so information reached parents late and staff duplicated work.',
    build:
      'An integrated education platform that connects administrators, teachers, and families in real time, from a digital class diary and gradebook to report cards delivered on mobile.',
    whatWeBuilt: [
      'A digital class diary and gradebook for teachers to record attendance and grades once.',
      'A family-facing mobile experience that delivers report cards and updates in real time.',
      'An administration layer tying schedules, staff, and communication into one system.',
    ],
    outcomes: [
      'One source of truth in place of paper and scattered tools.',
      'Information reaches families in real time instead of days later.',
      'Less duplicated data entry for teachers and staff.',
    ],
    stack: ['Web app', 'Mobile app', 'Real-time sync', 'PostgreSQL'],
  },
  {
    slug: 'fleet-management',
    sector: 'Logistics',
    title: 'From vehicle location to cost per kilometer',
    summary:
      'A fleet platform that gave operators one live view of where vehicles were and what each one actually cost to run.',
    challenge:
      'Fleet operators had no single view of where vehicles were or what each one actually cost to run, so decisions were made on stale spreadsheets.',
    build:
      'A fleet management platform covering the full picture, from real-time vehicle location and route data to fuel, maintenance, and cost per kilometer driven.',
    whatWeBuilt: [
      'Real-time vehicle location and route tracking through telematics and GPS.',
      'Fuel and maintenance tracking that rolls up into cost per kilometer driven.',
      'Operator dashboards and a mobile view for the field.',
    ],
    outcomes: [
      'One live view of the fleet in place of stale spreadsheets.',
      'Cost per kilometer visible per vehicle.',
      'Decisions based on current data, not last week\'s.',
    ],
    stack: ['Real-time tracking', 'Telematics / GPS', 'Dashboards', 'Mobile app'],
  },
  {
    slug: 'electronic-health-records',
    sector: 'Healthcare',
    title: 'Interoperable electronic health records',
    summary:
      'An electronic health record system built on HL7 FHIR so scheduling and medication data moves cleanly between systems, with no closed-vendor lock-in.',
    challenge:
      'Clinical teams needed records that could schedule care and track medication without locking the organization into a rigid, closed vendor.',
    build:
      'An electronic health record system built on HL7 FHIR interoperability, covering appointment scheduling and medication dispensing, so data moves cleanly between systems.',
    whatWeBuilt: [
      'An electronic health record core for clinical data.',
      'Appointment scheduling and medication dispensing workflows.',
      'HL7 FHIR interoperability so records move between systems.',
    ],
    outcomes: [
      'Scheduling and medication data connected rather than siloed.',
      'Interoperability instead of a closed, rigid vendor.',
      'A record the organization owns and can extend.',
    ],
    stack: ['HL7 FHIR', 'Web app', 'Integrations', 'PostgreSQL'],
  },
  {
    slug: 'foreign-trade-operations',
    sector: 'Trade & Supply Chain',
    title: 'Import and export operations in one system',
    summary:
      'Trade and customs software that pulled import and export processes, landed cost, and shipment tracking out of spreadsheets and into one integrated system.',
    challenge:
      'A foreign-trade operation tracked customs steps, costs, and shipments across spreadsheets and siloed tools, which made landed cost and status hard to trust.',
    build:
      'Trade and customs operations software that brings import and export processes, landed cost calculation, and shipment tracking into one integrated system.',
    whatWeBuilt: [
      'Import and export process workflows in one place.',
      'Landed cost calculation across duties, freight, and fees.',
      'Shipment tracking tied to the same records as costs and customs steps.',
    ],
    outcomes: [
      'Landed cost and shipment status you can trust.',
      'One system in place of spreadsheets and siloed tools.',
      'Customs steps, costs, and shipments on one record.',
    ],
    stack: ['Customs / trade', 'Integrations', 'Reporting', 'Node.js'],
  },
  {
    slug: 'microsoft-project-server-migration',
    sector: 'Enterprise',
    title: 'Migration inside the Microsoft Project ecosystem',
    summary:
      'A move from Project Web App to Project Server, customized to the client\'s reporting and governance needs without losing history or disrupting active work.',
    challenge:
      'An enterprise client needed to move and customize project operations within the Microsoft Project ecosystem without losing history or disrupting active work.',
    build:
      'Migration and customization from Project Web App to Project Server, adapted to the client\'s reporting and governance needs.',
    whatWeBuilt: [
      'A migration path from Project Web App to Project Server that preserved history.',
      'Customization mapped to the client\'s reporting and governance needs.',
      'A cutover planned to avoid disrupting active project work.',
    ],
    outcomes: [
      'Project history preserved through the migration.',
      'Reporting and governance shaped to the client\'s process.',
      'No disruption to active work during cutover.',
    ],
    stack: ['Microsoft Project Server', 'Migration', '.NET', 'SQL Server'],
  },
];

export const industries = {
  eyebrow: 'Industries',
  title: 'Custom software for 10+ sectors.',
  sub: 'Every vertical carries its own regulatory, integration, and UX requirements. We\'ve shipped across all of them.',
  items: [
    {
      name: 'Trade & Supply Chain',
      flagship: true,
      body: 'Customs and trade operations, import/export, shipment tracking, landed cost, and end-to-end supply chain, integrated into one system.',
      // TODO(founder): confirm project counts per vertical.
      count: '15+ projects',
    },
    {
      name: 'Logistics',
      body: 'Fleet management, routing, real-time tracking, warehouse and transport operations.',
      count: '8+ projects',
    },
    {
      name: 'Financial Services',
      body: 'Analytics, forecasting, risk, reconciliation, compliance-heavy platforms.',
      count: '6+ projects',
    },
    {
      name: 'Healthcare',
      body: 'Clinical platforms, records, operational systems for regulated environments.',
      count: '5+ projects',
    },
    {
      name: 'Retail',
      body: 'POS, retail ERP, integrated inventory management.',
      count: '7+ projects',
    },
    {
      name: 'Manufacturing',
      body: 'Production, inventory, and operations systems built for the floor.',
      count: '5+ projects',
    },
    {
      name: 'Education',
      body: 'School/organization management platforms, LMS, parent and staff portals.',
      count: '4+ projects',
    },
    {
      name: 'Government & Enterprise',
      body: 'Transparency portals, digital transformation, analytics at scale.',
      count: '6+ projects',
    },
  ],
};

// FAQ answers written for this build in a plain, specific voice.
export const faq = {
  eyebrow: 'FAQ',
  title: 'Questions a serious buyer asks.',
  items: [
    {
      q: 'How do I choose a custom software firm, and what should I evaluate?',
      a: 'Start with who writes the code. Ask whether the engineers are full-time employees or freelancers pulled in per project, because subcontracting is where quality and timelines usually slip. Then read the contract for acceptance criteria on each feature instead of vague promises. Ask for real cases in your vertical, with the problem, the solution, and the result. Confirm you receive the code, credentials, and documentation on delivery so you are not locked in. And ask how often you will see working software, plus what support looks like after go-live. The buyer\'s guide above walks through all six criteria in detail.',
    },
    {
      q: 'What kinds of software does Kadmoon build?',
      a: 'Enterprise systems like ERPs and CRMs, multi-tenant SaaS products, native and React Native mobile apps, integrations and APIs, data and AI features, and legacy modernization. Trade and supply chain is our flagship practice, but we build across industries. Every system is custom and owned by you. We do not resell a platform.',
    },
    {
      q: 'What drives the cost of custom software?',
      a: 'Scope, mostly. The number of features, how many systems you integrate with, your data volume, regulatory constraints, and how much design and UX the product needs. A focused internal tool costs far less than a multi-tenant platform with billing and public APIs. We give you a fixed scope with acceptance criteria per feature, so the price maps to something you can verify rather than an open-ended estimate.',
    },
    {
      q: 'What\'s a typical delivery timeline?',
      a: 'Discovery takes about a week. Architecture and design run two to three weeks. After that, development moves in two-week sprints with a working demo at the end of each one, so you see software running inside the first month. A first production release usually lands in a few months depending on scope. We plan the sprints up front with per-module estimates, so the timeline is not a guess.',
    },
    {
      q: 'How does your delivery methodology work?',
      a: 'Two-week sprints with continuous delivery and a working demo every cycle. Your feedback goes straight into the backlog. Code review is mandatory, and we pair on the critical modules. Automated tests run at the unit, integration, and end-to-end levels, with manual QA each sprint and sign-off before anything ships. Deploys go through CI/CD with automatic rollback.',
    },
    {
      q: 'Who\'s on the team that works on my project?',
      a: 'Our permanent in-house team: engineers, designers, and architects who are full-time employees, not subcontractors. The people who start your project are the people who ship it, and turnover in operation is zero.',
    },
    {
      q: 'Do I own the intellectual property?',
      a: 'Yes, completely. Source code, architecture, and documentation are yours. On delivery you get the Git repository, CI/CD pipelines, infrastructure credentials, and an operational runbook. No lock-in and no permanent dependency on us.',
    },
    {
      q: 'Which regions do you serve?',
      a: 'We are based in Austin, Texas and work with clients across the United States. Our engineering team delivers remotely, with in-person sessions when a project calls for it.',
    },
  ],
};

export const contact = {
  eyebrow: 'Start a project',
  title: 'Have a project in mind?',
  sub: 'Tell us about your challenge. Within one business day you get a technical proposal with scope, architecture, timeline, and investment.',
  needOptions: [
    'New system',
    'Modernize or migrate',
    'Dedicated engineering',
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
    'A US custom-software firm building enterprise systems, SaaS platforms, and AI, engineered for how your business actually runs.',
  columns: [
    {
      heading: 'Company',
      links: [
        { label: 'Software house', href: '/software-house' },
        { label: 'Services', href: '/services' },
        { label: 'Solutions', href: '/solutions' },
        { label: 'Industries', href: '/industries' },
        { label: 'Cases', href: '/cases' },
        { label: 'Process', href: '/process' },
        { label: 'About', href: '/about' },
      ],
    },
    {
      heading: 'Explore',
      links: [
        { label: 'Custom software company', href: '/custom-software-development-company' },
        { label: 'Software development company', href: '/software-development-company' },
        { label: 'Mobile app development', href: '/mobile-app-development-company' },
        { label: 'Enterprise software', href: '/enterprise-software-development' },
        { label: 'SaaS development company', href: '/saas-development-company' },
        { label: 'Blog', href: '/blog' },
        { label: 'How to Choose', href: '/#how-to-choose' },
        { label: 'Locations', href: '/custom-software-development' },
        { label: 'Start a project', href: '/#contact' },
      ],
    },
    {
      heading: 'Hire',
      links: [
        { label: 'Staff augmentation', href: '/staff-augmentation' },
        { label: 'Dedicated team', href: '/dedicated-development-team' },
        { label: 'Hire AI engineers', href: '/hire-ai-engineers' },
        { label: 'Engagement models', href: '/#engagement' },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Additional homepage sections (richer detail)
// ---------------------------------------------------------------------------

export const techStack = {
  eyebrow: 'Our stack',
  title: 'Modern by default, chosen on merit.',
  sub: 'No project of ours is born with technical debt. We pick tools for performance, security, and long-term maintainability, not familiarity.',
  groups: [
    { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'React Native', 'Tailwind CSS'] },
    { label: 'Backend', items: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'Redis', 'GraphQL'] },
    { label: 'Data & AI', items: ['dbt', 'Airflow', 'LLMs / RAG', 'PyTorch', 'BigQuery', 'Snowflake'] },
    { label: 'Infra & DevOps', items: ['Kubernetes', 'Terraform', 'Docker', 'AWS', 'GitHub Actions', 'Datadog'] },
    { label: 'Integrations', items: ['US Customs / ACE', 'NetSuite', 'SAP', 'Dynamics', 'Stripe', 'REST / SOAP'] },
  ],
  // Flattened for the marquee.
  marquee: [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Go', 'PostgreSQL', 'Redis',
    'GraphQL', 'React Native', 'Kubernetes', 'Terraform', 'Docker', 'AWS', 'GitHub Actions',
    'Datadog', 'LLMs / RAG', 'PyTorch', 'Snowflake', 'Stripe', 'NetSuite', 'SAP', 'US Customs / ACE',
  ],
};

export const engagement = {
  eyebrow: 'How we engage',
  title: 'Three ways to work with us.',
  sub: 'Every model runs on the same senior in-house team, measurable acceptance criteria, and code you own.',
  models: [
    {
      name: 'Fixed-scope project',
      best: 'Best when the outcome is well defined',
      body: 'A defined build with measurable acceptance criteria per feature and milestone-based billing. You know exactly what you get, when, and how to validate it.',
      points: ['Per-feature acceptance criteria', 'Milestone billing', 'Fixed timeline'],
    },
    {
      name: 'Dedicated team',
      best: 'Best for an evolving roadmap',
      body: 'A senior squad embedded on your roadmap: engineers, a designer, and an architect working in two-week sprints against your priorities.',
      points: ['Two-week sprints', 'Direct backlog control', 'Monthly engagement'],
    },
    {
      name: 'Evolution & support',
      best: 'Best after go-live',
      body: 'Post-delivery support with a defined SLA, P1 fixes within 4 hours, and planned evolution on a quarterly roadmap.',
      points: ['Defined SLA', 'P1 fixes in 4 hours', 'Quarterly roadmap'],
    },
  ],
};

export const comparison = {
  eyebrow: 'Custom vs the alternatives',
  title: 'Why bespoke wins for real operations.',
  sub: 'Off-the-shelf and low-code get you started fast. They also decide what your software can and cannot do.',
  columns: ['Custom (Kadmoon)', 'Off-the-shelf SaaS', 'Low-code platform'],
  rows: [
    { label: 'You own the source code', values: ['yes', 'no', 'partial'] },
    { label: 'Fits your exact process', values: ['yes', 'no', 'partial'] },
    { label: 'Scales without a rewrite', values: ['yes', 'partial', 'no'] },
    { label: 'No per-seat lock-in', values: ['yes', 'no', 'no'] },
    { label: 'AI engineered into the core', values: ['yes', 'partial', 'no'] },
    { label: 'Fast to a first version', values: ['partial', 'yes', 'yes'] },
  ],
};

export const credibility = {
  text: 'Kadmoon is the US engineering arm of an established software house. The metrics and cases here come from our team\'s delivered work, framed honestly; the first US-specific case joins them as it lands.',
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
    slug: 'enterprise-systems',
    title: 'Enterprise Systems',
    tagline: 'ERPs, CRMs, and operational platforms built around your process.',
    intro:
      'When your operation runs on spreadsheets, disconnected tools, or an ERP that fights the way you actually work, a bespoke system pays for itself. We design the modules around your real workflow and spec each one with measurable acceptance criteria.',
    includes: [
      'Custom ERP and CRM modules mapped to your process',
      'Role-based access control and audit trails',
      'Reporting, dashboards, and export pipelines',
      'Integration with your existing systems and data',
      'Migration from legacy tools with no data loss',
    ],
    outcomes: [
      'One system of record instead of scattered tools',
      'Workflows that match how your team actually works',
      'Full ownership of the code and infrastructure',
    ],
    blogCategory: 'Custom Software',
  },
  {
    slug: 'saas-platforms',
    title: 'SaaS Platforms',
    tagline: 'Multi-tenant products engineered to scale from 10 to 10,000 customers.',
    intro:
      'Turning an idea or an internal tool into a product means solving multi-tenancy, billing, onboarding, and observability without painting yourself into an architectural corner. We build SaaS that scales without a rewrite.',
    includes: [
      'Multi-tenant architecture with tenant isolation',
      'Recurring billing and subscription management',
      'White-label onboarding and admin tooling',
      'Analytics dashboards and documented public APIs',
      'Security and compliance groundwork (SOC 2 ready)',
    ],
    outcomes: [
      'A product that scales without re-platforming',
      'Self-serve onboarding and billing',
      'A public API your customers can build on',
    ],
    blogCategory: 'SaaS Development',
  },
  {
    slug: 'mobile-apps',
    title: 'Mobile Apps',
    tagline: 'Native and cross-platform apps with product-grade UX.',
    intro:
      'Field teams, customers, and operators expect apps that work offline, sync cleanly, and talk directly to your backend. We build for iOS and Android with React Native or native where it matters.',
    includes: [
      'Native and React Native apps for iOS and Android',
      'Offline-first data and background sync',
      'Direct integration with your backend and APIs',
      'Push notifications and device features',
      'App Store and Play Store release management',
    ],
    outcomes: [
      'One codebase serving both platforms when it fits',
      'Apps that keep working with poor connectivity',
      'A release pipeline you control',
    ],
    blogCategory: 'Mobile Apps',
  },
  {
    slug: 'integrations-and-apis',
    title: 'Integrations & APIs',
    tagline: 'Resilient middleware that connects your entire ecosystem.',
    intro:
      'Most enterprise pain lives in the seams between systems. We build the connective tissue: middleware with retry, dead-letter queues, and full observability so integrations fail loudly and recover cleanly.',
    includes: [
      'Integration with legacy ERPs and third-party APIs',
      'US Customs / ACE, payment gateways, and marketplaces',
      'REST and SOAP adapters with schema validation',
      'Retry, dead-letter, and idempotency handling',
      'End-to-end monitoring and alerting',
    ],
    outcomes: [
      'Systems that stay in sync automatically',
      'Failures that are visible and recoverable',
      'One integration layer instead of brittle scripts',
    ],
    blogCategory: 'Integrations & APIs',
  },
  {
    slug: 'data-and-ai',
    title: 'Data & AI',
    tagline: 'Pipelines, dashboards, and models engineered into the system.',
    intro:
      'AI that ships value is engineered into the architecture, not bolted on at the end. We build the data foundation first, then the models and LLM features that ride on top of clean, governed data.',
    includes: [
      'Ingestion pipelines and data warehouses',
      'BI dashboards and self-serve reporting',
      'ML models for forecasting and classification',
      'LLMs via RAG for search and report generation',
      'Anomaly detection and decision automation',
    ],
    outcomes: [
      'Decisions backed by governed, current data',
      'AI features tied to real workflows',
      'Automation that removes manual review',
    ],
    blogCategory: 'Data & AI',
  },
  {
    slug: 'legacy-modernization',
    title: 'Legacy Modernization',
    tagline: 'Migrate off aging stacks without a risky big-bang rewrite.',
    intro:
      'Legacy systems run the business until they cannot. We modernize incrementally: strangle the monolith, migrate data, and eliminate the technical debt that slows every release, without stopping operations.',
    includes: [
      'Migration of COBOL, Delphi, VB6, and legacy .NET/PHP',
      'Monolith-to-microservices refactoring',
      'Cloud migration and infrastructure as code',
      'Incremental cutover with the strangler pattern',
      'Documentation and knowledge transfer',
    ],
    outcomes: [
      'A modern stack without a big-bang cutover',
      'Lower maintenance cost and faster releases',
      'Critical technical debt retired for good',
    ],
    blogCategory: 'Legacy Modernization',
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
    slug: 'trade-and-supply-chain',
    name: 'Trade & Supply Chain',
    flagship: true,
    intro:
      'Our deepest domain. We build customs and trade operations, import/export, shipment tracking, landed cost, and end-to-end supply chain visibility into one system, integrated with US Customs and ACE.',
    systems: [
      'Customs entry and brokerage software',
      'Landed cost and duty calculation',
      'Shipment tracking and supply chain visibility',
      'Trade compliance and denied-party screening',
    ],
    integrations: ['US Customs / ACE / ABI', 'Freight forwarders and carriers', 'ERPs and TMS/WMS'],
    keyword: 'trade',
  },
  {
    slug: 'logistics',
    name: 'Logistics',
    intro:
      'Fleet, routing, warehouse, and transport operations that need real-time data and tight integration. We build the systems that move goods and the visibility layer on top of them.',
    systems: ['Fleet and route management', 'Real-time tracking', 'Warehouse and transport operations', 'Drayage and 3PL software'],
    integrations: ['Telematics and GPS', 'TMS and WMS', 'EDI with partners'],
    keyword: 'logistics',
  },
  {
    slug: 'financial-services',
    name: 'Financial Services',
    intro:
      'Compliance-heavy platforms where reconciliation, reporting, and audit trails have to be right. We build analytics, forecasting, and risk systems for regulated finance teams.',
    systems: ['Reconciliation and reporting', 'Risk and forecasting', 'Compliance workflows', 'Analytics platforms'],
    integrations: ['Core banking and ledgers', 'Payment gateways', 'Data warehouses'],
    keyword: 'financial',
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    intro:
      'Clinical and operational systems for regulated environments. We build records, workflows, and integrations that hold up to HIPAA and the realities of care delivery.',
    systems: ['Clinical and records platforms', 'Operational and scheduling systems', 'Patient and staff portals', 'Analytics'],
    integrations: ['EHR/EMR systems', 'HL7 / FHIR', 'Billing and claims'],
    keyword: 'healthcare',
  },
  {
    slug: 'retail',
    name: 'Retail',
    intro:
      'POS, retail ERP, and inventory that actually talk to each other. We build the connective tissue and the systems on top so stores and e-commerce run on one source of truth.',
    systems: ['POS and retail ERP', 'Integrated inventory management', 'E-commerce integration', 'Loyalty and analytics'],
    integrations: ['Payment processors', 'Marketplaces', 'ERPs and 3PLs'],
    keyword: 'retail',
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    intro:
      'Production, inventory, and floor operations built for the way the plant actually runs, not generic ERP bent to fit. We connect the floor to the office.',
    systems: ['Production and MES', 'Inventory and operations', 'Quality and traceability', 'Floor dashboards'],
    integrations: ['PLCs and OPC-UA / MQTT', 'ERP systems', 'IoT and sensors'],
    keyword: 'manufacturing',
  },
  {
    slug: 'education',
    name: 'Education',
    intro:
      'School and organization management platforms, LMS, and portals for parents and staff. We build the systems that run programs and keep everyone informed.',
    systems: ['School/org management', 'Learning management (LMS)', 'Parent and staff portals', 'Reporting'],
    integrations: ['SIS systems', 'Payment and billing', 'SSO and identity'],
    keyword: 'education',
  },
  {
    slug: 'government-and-enterprise',
    name: 'Government & Enterprise',
    intro:
      'Transparency portals, digital transformation, and analytics at scale, delivered on a schedule with everything documented. That is how we work by default.',
    systems: ['Transparency and public portals', 'Digital transformation platforms', 'Analytics at scale', 'Management systems'],
    integrations: ['Legacy government systems', 'Identity and access', 'Data platforms'],
    keyword: 'government',
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
