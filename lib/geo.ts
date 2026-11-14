// Local Power BI landing pages: the service angles (several per city) and the
// hand-written local content for the most competitive metros. Everywhere else
// a page falls back to its regional context, which is fine for the long tail.
// The hand-written entries give a page a genuine local-economy angle, local
// sector anchors, and an extra local FAQ, so it is unique enough to earn its
// position instead of reading as one of many clones.
//
// US framing only (HIPAA, SOC 2, CCPA, data residency in your own tenant). No
// Brazil, no LGPD on this site.

import { type USCity, US_REGION_CONTEXT, US_TIER_LABEL, getUSCityBySlug } from './us-cities';

export type AngleKey = 'consulting' | 'dashboards' | 'migration' | 'managed';

export interface Angle {
  key: AngleKey;
  base: string; // route segment, e.g. 'power-bi-consulting'
  nav: string; // short label
  noun: string; // "Power BI consulting", used in copy
  metaTitle: (c: USCity) => string;
  metaDescription: (c: USCity) => string;
  h1: (c: USCity) => string;
  lead: (c: USCity) => string;
  deliverTitle: string;
  deliver: string[];
  faqs: (c: USCity) => { question: string; answer: string }[];
}

const quoteFaq = {
  question: 'How much does a Power BI project cost?',
  answer:
    'It depends on your data, your sources, and the decisions you need to support, so we quote per engagement rather than off a price list. Most clients start with a fixed-scope Power BI assessment that ships first dashboards in about two weeks and produces a scope and a fixed quote for the full build. From there you run by project or on Managed Power BI, our monthly subscription.',
};

const ownershipFaq = {
  question: 'Who owns the reports and the data?',
  answer:
    'You do. Everything is built in your own Microsoft tenant: the semantic model, the reports, and the data, with documentation and a full handover. Access follows your identity provider, and you keep operating with or without us. No lock-in.',
};

function remoteFaq(c: USCity) {
  return {
    question: `Do you work with companies in ${c.name}?`,
    answer: `Yes. We are a US Microsoft data and analytics firm and we work with ${c.name}-area companies across ${c.region === 'Northeast' ? 'the Northeast' : c.region === 'West' ? 'the West' : c.region === 'South' ? 'the South' : 'the Midwest'}, remote or on site as the engagement needs. A senior, US-based team scopes, builds, and supports your Power BI, delivered inside your own Microsoft tenant.`,
  };
}

export const ANGLES: Angle[] = [
  {
    key: 'consulting',
    base: 'power-bi-consulting',
    nav: 'Power BI consulting',
    noun: 'Power BI consulting',
    metaTitle: (c) => `Power BI Consulting in ${c.name}, ${c.state} | Kadmoon`,
    metaDescription: (c) =>
      `Power BI consulting for ${c.name} businesses: governed dashboards, semantic models, migration, and governance, built in your own Microsoft tenant by a senior US team. Request a quote.`,
    h1: (c) => `Power BI consulting in ${c.name}, ${c.state}`,
    lead: (c) =>
      `Kadmoon is a US Microsoft data and analytics firm led by Power BI. We help ${c.name} companies turn the data in the systems they already run into dashboards their leaders open every day, built on a governed model inside their own Microsoft tenant.`,
    deliverTitle: 'What a Power BI engagement includes',
    deliver: [
      'A governed semantic model with one definition per measure',
      'Power BI dashboards and reports your team opens daily',
      'Connections to SQL Server, Dynamics 365, SAP, Salesforce, Excel, and your APIs',
      'Row-level security, workspaces, and lineage',
      'Everything built in your own Microsoft tenant, documented and handed over',
    ],
    faqs: (c) => [remoteFaq(c), quoteFaq, ownershipFaq],
  },
  {
    key: 'dashboards',
    base: 'power-bi-dashboards',
    nav: 'Power BI dashboards',
    noun: 'Power BI dashboards and reports',
    metaTitle: (c) => `Power BI Dashboards in ${c.name}, ${c.state} | Kadmoon`,
    metaDescription: (c) =>
      `Power BI dashboards and reports for ${c.name} teams: one governed model, trusted numbers, and reports leaders actually use. Built in your own tenant. Request a quote.`,
    h1: (c) => `Power BI dashboards and reports in ${c.name}, ${c.state}`,
    lead: (c) =>
      `We build the Power BI dashboards ${c.name} leaders open every morning: revenue, margin, operations, and the KPIs that drive decisions, on one governed model so every number means the same thing in every report.`,
    deliverTitle: 'What you get',
    deliver: [
      'Executive and operational dashboards on a single governed model',
      'One definition per measure, so reports never disagree',
      'Drill-through from the summary to the record behind it',
      'Reliable refreshes from your source systems',
      'Reports built in your own tenant, yours to own',
    ],
    faqs: (c) => [
      remoteFaq(c),
      {
        question: 'Why do our current dashboards show different numbers?',
        answer:
          'Almost always because each report defines its own measures instead of reading from one governed model. We build a single semantic model where revenue, margin, and your KPIs are defined once, so every dashboard that reads from it tells the same story.',
      },
      ownershipFaq,
    ],
  },
  {
    key: 'migration',
    base: 'power-bi-migration',
    nav: 'Power BI migration',
    noun: 'Power BI migration',
    metaTitle: (c) => `Power BI Migration in ${c.name}, ${c.state} | Kadmoon`,
    metaDescription: (c) =>
      `Move ${c.name} reporting to Power BI: from spreadsheets, legacy BI, or Tableau to a governed model, with the old numbers reconciled so the business trusts the move. Request a quote.`,
    h1: (c) => `Power BI migration in ${c.name}, ${c.state}`,
    lead: (c) =>
      `We move ${c.name} companies off hand-built spreadsheets, aging BI, and tool sprawl onto a governed Power BI model, with the legacy numbers reconciled so your team trusts the new reports from day one.`,
    deliverTitle: 'What a migration covers',
    deliver: [
      'An inventory of the reports and spreadsheets you run today',
      'A governed semantic model to replace the scattered logic',
      'Rebuilt Power BI reports, reconciled against the old numbers',
      'Migration from legacy BI, Tableau, and Excel',
      'Governance and a handover so it stays trustworthy as it grows',
    ],
    faqs: (c) => [
      remoteFaq(c),
      {
        question: 'How do we know the new numbers are right?',
        answer:
          'We reconcile the rebuilt Power BI reports against your current reports and spreadsheets line by line before cutover, and document the measure definitions. You sign off on the match, so the migration builds trust instead of eroding it.',
      },
      quoteFaq,
    ],
  },
  {
    key: 'managed',
    base: 'managed-power-bi',
    nav: 'Managed Power BI',
    noun: 'Managed Power BI',
    metaTitle: (c) => `Managed Power BI in ${c.name}, ${c.state} | Kadmoon`,
    metaDescription: (c) =>
      `Managed Power BI for ${c.name} companies: a senior team that runs and evolves your Power BI every month, refreshes, governance, new reports, and a named contact. Request a quote.`,
    h1: (c) => `Managed Power BI in ${c.name}, ${c.state}`,
    lead: (c) =>
      `Managed Power BI is our monthly subscription: a senior team that runs and evolves your Power BI every month for ${c.name} companies, so reporting stays current, governed, and trusted as the business changes.`,
    deliverTitle: 'What the subscription runs',
    deliver: [
      'Managed refreshes, monitoring, and user support',
      'New reports and model changes as needs change',
      'Row-level security and governance kept current',
      'Copilot and AI on your data as it matures',
      'A named point of contact and an optional managed Microsoft add-on',
    ],
    faqs: (c) => [
      remoteFaq(c),
      {
        question: 'Is there a long contract?',
        answer:
          'No. Managed Power BI is a monthly term you can adjust, and you own the model, the reports, and the data in your own tenant, so you are never locked in to keep operating.',
      },
      ownershipFaq,
    ],
  },
];

export function getAngle(base: string): Angle | undefined {
  return ANGLES.find((a) => a.base === base);
}

// ---------------------------------------------------------------------------
// Hand-written local content for the most competitive metros. Keys are city
// slugs. Everything else falls back to the regional context.
// ---------------------------------------------------------------------------
export interface CityLocal {
  economy: string;
  anchors: { label: string; note: string }[];
  faq?: { question: string; answer: string };
}

export const cityLocal: Record<string, CityLocal> = {
  'new-york': {
    economy:
      'New York runs on financial services, insurance, media, and professional services, where the reporting has to be right and auditable. Teams here already sit on Microsoft, but the numbers live in trading, policy, billing, and CRM systems that rarely agree. Kadmoon builds one governed Power BI model on top of them, so a figure questioned by a regulator or a partner can be traced to its source instead of reconstructed.',
    anchors: [
      { label: 'Financial services and insurance', note: 'Governed models, row-level security, and lineage for numbers under scrutiny.' },
      { label: 'Media and advertising', note: 'Revenue, campaign, and audience reporting on one trusted model.' },
      { label: 'Professional services', note: 'Utilization, realization, and pipeline from the systems you already run.' },
    ],
    faq: {
      question: 'Can you meet financial-services governance expectations?',
      answer:
        'Yes. Everything runs inside your own Microsoft tenant under your controls, with row-level security, documented lineage, and access tied to your identity provider. We build for SOC 2 and audit expectations rather than bolt governance on later.',
    },
  },
  'los-angeles': {
    economy:
      'Los Angeles spans media and entertainment, healthcare, logistics around the ports, and a deep consumer and technology base. The common problem is data spread across production, ERP, and CRM systems that each tell a different story. Kadmoon builds a governed Power BI model that reads from all of them, so leaders across a large, distributed operation work from the same numbers.',
    anchors: [
      { label: 'Media and entertainment', note: 'Revenue, title, and audience reporting on a governed model.' },
      { label: 'Healthcare', note: 'Operational and financial dashboards with HIPAA-aware access in your tenant.' },
      { label: 'Logistics and trade', note: 'Throughput, cost, and margin across the ports and distribution.' },
    ],
  },
  'san-francisco': {
    economy:
      'The San Francisco Bay Area is built on technology, SaaS, biotech, and venture-backed growth, where the reporting question is usually how fast you can trust a number as the company scales. Kadmoon builds a governed Power BI model over product, finance, and go-to-market systems, so metrics hold up from Series B through the board deck instead of being rebuilt per analyst.',
    anchors: [
      { label: 'SaaS and technology', note: 'ARR, retention, and unit economics on one governed model.' },
      { label: 'Biotech and healthcare', note: 'R&D, operations, and finance reporting in your own tenant.' },
      { label: 'Finance and operations', note: 'A model that scales with headcount instead of breaking.' },
    ],
  },
  seattle: {
    economy:
      'Seattle combines cloud and software, aerospace and manufacturing, logistics, and retail. Microsoft is already the default here, so the work is less about the platform and more about governance: one model, defined measures, and security that holds as more teams come on. Kadmoon builds that governed Power BI foundation so reporting scales cleanly.',
    anchors: [
      { label: 'Software and cloud', note: 'Product and revenue analytics on a governed semantic model.' },
      { label: 'Manufacturing and aerospace', note: 'Operations, supply chain, and quality dashboards.' },
      { label: 'Retail and logistics', note: 'Margin, inventory, and fulfillment from your source systems.' },
    ],
  },
  houston: {
    economy:
      'Houston is energy, chemicals, healthcare, and logistics, industries where a reporting error is expensive and the data lives in large ERP and operational systems. Kadmoon builds a governed Power BI model on top of SAP, Oracle, Dynamics, and the systems around them, so operations and finance read from one trusted source.',
    anchors: [
      { label: 'Energy and chemicals', note: 'Production, cost, and margin reporting on a governed model.' },
      { label: 'Healthcare', note: 'Operational and financial dashboards with access in your own tenant.' },
      { label: 'Logistics and manufacturing', note: 'Throughput, inventory, and supply-chain analytics.' },
    ],
  },
  dallas: {
    economy:
      'Dallas-Fort Worth is a broad base of financial services, telecom, logistics, manufacturing, and corporate headquarters. The reporting problem is scale: many business units, many systems, and numbers that drift apart. Kadmoon builds one governed Power BI model so a large organization works from a single version of each KPI.',
    anchors: [
      { label: 'Financial services', note: 'Governed models with row-level security and lineage.' },
      { label: 'Logistics and manufacturing', note: 'Operations and supply-chain dashboards on one model.' },
      { label: 'Corporate and shared services', note: 'Finance and HR analytics across business units.' },
    ],
  },
  atlanta: {
    economy:
      'Atlanta is logistics and supply chain, fintech and payments, healthcare, and a growing corporate base. Reporting tends to sprawl across ERP, payments, and CRM systems. Kadmoon builds a governed Power BI model that ties them together, so the business sees across the operation instead of per system.',
    anchors: [
      { label: 'Logistics and supply chain', note: 'Throughput, cost, and service-level dashboards.' },
      { label: 'Fintech and payments', note: 'Governed reporting with security in your own tenant.' },
      { label: 'Healthcare', note: 'Operational and financial analytics with HIPAA-aware access.' },
    ],
  },
  miami: {
    economy:
      'Miami runs on trade and logistics, financial services, real estate, healthcare, and a fast-growing technology scene, much of it operating across borders and currencies. Kadmoon builds a governed Power BI model that consolidates the reporting, so a multi-entity business reads one set of numbers.',
    anchors: [
      { label: 'Trade and logistics', note: 'Margin and throughput across entities and currencies.' },
      { label: 'Financial and professional services', note: 'Governed models with lineage and row-level security.' },
      { label: 'Real estate and healthcare', note: 'Portfolio and operational dashboards in your own tenant.' },
    ],
  },
  boston: {
    economy:
      'Boston is healthcare and life sciences, higher education, financial services, and deep tech. The reporting bar is high and the data is sensitive. Kadmoon builds a governed Power BI model inside your own tenant, with the security and lineage that regulated, research-driven organizations expect.',
    anchors: [
      { label: 'Life sciences and healthcare', note: 'Research, operations, and finance with HIPAA-aware access.' },
      { label: 'Higher education', note: 'Enrollment, finance, and operations on one governed model.' },
      { label: 'Financial services', note: 'Governed reporting with row-level security and lineage.' },
    ],
  },
  washington: {
    economy:
      'Washington is government, contracting, associations, and professional services, where reporting has to be defensible and access tightly controlled. Kadmoon builds a governed Power BI model inside your own Microsoft tenant, with security and lineage that stand up to scrutiny.',
    anchors: [
      { label: 'Government and contracting', note: 'Auditable reporting with controlled access in your tenant.' },
      { label: 'Associations and nonprofits', note: 'Membership, finance, and program dashboards.' },
      { label: 'Professional services', note: 'Utilization, pipeline, and project margin on one model.' },
    ],
  },
  chicago: {
    economy:
      'Chicago spans finance and trading, manufacturing, logistics, insurance, and healthcare. The reporting problem is a large, multi-system operation where numbers disagree across units. Kadmoon builds one governed Power BI model so finance and operations across the business read from the same source.',
    anchors: [
      { label: 'Finance and trading', note: 'Governed models with security and lineage for numbers under scrutiny.' },
      { label: 'Manufacturing and logistics', note: 'Operations, supply-chain, and margin dashboards.' },
      { label: 'Insurance and healthcare', note: 'Policy, claims, and operational analytics in your tenant.' },
    ],
  },
  austin: {
    economy:
      'Austin is technology and SaaS, semiconductors, and a fast-growing corporate base relocating to Texas. The reporting question is keeping metrics trustworthy while the company grows quickly. Kadmoon builds a governed Power BI model over product, finance, and go-to-market systems so the numbers scale with the business.',
    anchors: [
      { label: 'Technology and SaaS', note: 'ARR, retention, and unit economics on a governed model.' },
      { label: 'Semiconductors and hardware', note: 'Operations and supply-chain dashboards.' },
      { label: 'Finance and operations', note: 'A model that scales with headcount instead of breaking.' },
    ],
  },
};

export function getCityLocal(slug: string): CityLocal | undefined {
  return cityLocal[slug];
}

// Convenience re-exports for page files.
export { US_REGION_CONTEXT, US_TIER_LABEL, getUSCityBySlug };
