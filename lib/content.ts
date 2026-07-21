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
    { label: 'Capabilities', href: '/#capabilities' },
    { label: 'Why Kadmoon', href: '/#why' },
    { label: 'How to Choose', href: '/#how-to-choose' },
    { label: 'Process', href: '/#process' },
    { label: 'Industries', href: '/#industries' },
    { label: 'Blog', href: '/blog' },
  ],
  cta: { label: 'Start a project', href: '/#contact' },
};

export const hero = {
  eyebrow: 'Custom software firm · Austin, TX',
  // The accent phrase is rendered in orange inside the H1.
  headlineBefore: 'The custom software your operation runs on—built for ',
  headlineAccent: 'your process',
  headlineAfter: ', owned by you.',
  subhead:
    'Kadmoon builds bespoke enterprise systems, SaaS platforms, mobile apps, and AI into a single delivery—concept to production—with a senior in-house team. No off-the-shelf compromises. You own every line.',
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
  sub: 'Six competencies that cover the full lifecycle of enterprise software—each spec’d with measurable acceptance criteria and delivered in validated sprints.',
  items: [
    {
      title: 'Enterprise Systems',
      body: 'ERPs, CRMs, and operational platforms designed around how your business actually runs—not generic software bent to fit. Every module is spec’d with measurable acceptance criteria.',
    },
    {
      title: 'SaaS Platforms',
      body: 'Multi-tenant products with recurring billing, white-label onboarding, analytics dashboards, and documented public APIs—architected to scale from 10 to 10,000 customers without a rewrite.',
    },
    {
      title: 'Mobile Apps',
      body: 'Native and cross-platform (React Native) apps for iOS and Android—product-grade UX, offline-first when needed, and direct integration with your backend.',
    },
    {
      title: 'Integrations & APIs',
      body: 'We connect your ecosystem: legacy ERPs, US Customs/ACE, payment gateways, marketplaces, and any third-party REST/SOAP API. Resilient middleware with retry, dead-letter, and full observability.',
    },
    {
      title: 'Data & AI',
      body: 'Ingestion pipelines, data warehouses, BI dashboards, ML models for forecasting and classification, and LLMs via RAG for semantic search, report generation, and intelligent automation—built into the system, not bolted on.',
    },
    {
      title: 'Legacy Modernization',
      body: 'Migration of COBOL, Delphi, VB6, and legacy .NET/PHP to a modern stack. Monolith-to-microservices refactoring, cloud migration, and elimination of critical technical debt.',
    },
  ],
};

export const why = {
  eyebrow: 'Why Kadmoon',
  title: 'Not just another software house.',
  sub: 'Each of these is an engineering and management decision we made so your project ships with quality, predictability, and no surprises.',
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
      body: 'Every feature is described with measurable acceptance criteria in the contract. You know exactly what you’ll get, when, and how to validate it. No ambiguity, no “that was technically in scope.”',
    },
    {
      title: 'AI built into every project',
      body: 'Not a generic chatbot bolted on at the end. Predictive analysis, report generation, anomaly detection, and decision automation—engineered into the architecture from day one.',
    },
    {
      title: 'Modern stack, zero legacy',
      body: 'React, Next.js, Node.js, Python, TypeScript, PostgreSQL, Kubernetes, Terraform. No project of ours is born with technical debt—stack chosen on merit: performance, security, long-term maintainability.',
    },
    {
      title: 'Continuous delivery with demos',
      body: 'Two-week sprints with a working demo at the end of every cycle. You track progress in real time and never wait months to see software running.',
    },
  ],
};

export const howToChoose = {
  eyebrow: 'Buyer’s guide',
  title: 'How to evaluate a software partner.',
  sub: 'After 50+ delivered projects in regulated verticals, these are the six criteria we’d use ourselves to vet a vendor. Use it as a checklist before signing any contract—with Kadmoon or anyone else.',
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
      title: 'What’s in the contract',
      body: 'Demand measurable acceptance criteria per feature—not promises that it’ll “turn out well.” If scope is vague, real cost becomes a black box.',
      answer:
        'Every deliverable has a defined, verifiable acceptance criterion in the contract. You know what you get, when, and how to validate it.',
    },
    {
      num: '03',
      title: 'Real portfolio, not logos',
      body: 'Ask for concrete cases with problem, solution, and result—ideally in your vertical. A wall of logos without context proves nothing.',
      answer:
        '50+ projects across 10+ industries, with detailed cases—including trade, logistics, and enterprise systems.',
    },
    {
      num: '04',
      title: 'Ownership & lock-in',
      body: 'Confirm who owns the code, architecture, and infrastructure. If you don’t receive the repo and credentials, you’re hostage to the vendor.',
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
      meta: 'Weeks 2–3',
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
  sub: 'Cases from our team’s track record. The first US-specific case will join them as it lands.',
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

export const industries = {
  eyebrow: 'Industries',
  title: 'Custom software for 10+ sectors.',
  sub: 'Every vertical carries its own regulatory, integration, and UX requirements. We’ve shipped across all of them.',
  items: [
    {
      name: 'Trade & Supply Chain',
      flagship: true,
      body: 'Customs and trade operations, import/export, shipment tracking, landed cost, and end-to-end supply chain—integrated into one system.',
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
      a: 'Start with who writes the code. Ask whether the engineers are full-time employees or freelancers pulled in per project, because subcontracting is where quality and timelines usually slip. Then read the contract for acceptance criteria on each feature instead of vague promises. Ask for real cases in your vertical, with the problem, the solution, and the result. Confirm you receive the code, credentials, and documentation on delivery so you are not locked in. And ask how often you will see working software, plus what support looks like after go-live. The buyer’s guide above walks through all six criteria in detail.',
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
      q: 'What’s a typical delivery timeline?',
      a: 'Discovery takes about a week. Architecture and design run two to three weeks. After that, development moves in two-week sprints with a working demo at the end of each one, so you see software running inside the first month. A first production release usually lands in a few months depending on scope. We plan the sprints up front with per-module estimates, so the timeline is not a guess.',
    },
    {
      q: 'How does your delivery methodology work?',
      a: 'Two-week sprints with continuous delivery and a working demo every cycle. Your feedback goes straight into the backlog. Code review is mandatory, and we pair on the critical modules. Automated tests run at the unit, integration, and end-to-end levels, with manual QA each sprint and sign-off before anything ships. Deploys go through CI/CD with automatic rollback.',
    },
    {
      q: 'Who’s on the team that works on my project?',
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
    '1–50 employees',
    '51–200 employees',
    '201–1,000 employees',
    '1,000+ employees',
  ],
};

export const footer = {
  tagline:
    'A US custom-software firm building enterprise systems, SaaS platforms, and AI—engineered for how your business actually runs.',
  columns: [
    {
      heading: 'Company',
      links: [
        { label: 'Capabilities', href: '/#capabilities' },
        { label: 'Why Kadmoon', href: '/#why' },
        { label: 'How to Choose', href: '/#how-to-choose' },
        { label: 'Process', href: '/#process' },
      ],
    },
    {
      heading: 'Explore',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Work', href: '/#work' },
        { label: 'Industries', href: '/#industries' },
        { label: 'Start a project', href: '/#contact' },
      ],
    },
  ],
};
