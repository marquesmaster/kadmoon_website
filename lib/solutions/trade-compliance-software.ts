import type { Solution } from './types';

export const tradeComplianceSoftware: Solution = {
  slug: 'trade-compliance-software',
  name: 'Trade compliance software',
  category: 'Trade & customs',
  eyebrow: 'Trade compliance software',
  metaTitle: 'Trade Compliance Software | Kadmoon',
  metaDescription:
    'Kadmoon builds custom trade compliance software: denied party screening, export controls, HS classification, license management, and audit-ready records you own.',
  keywords: [
    'trade compliance software',
    'denied party screening software',
    'export compliance software',
    'restricted party screening',
    'hs classification software',
  ],
  tagline: 'Trade compliance software built around your products, partners, and controls.',
  heroIntro:
    'Trade compliance software screens the parties you deal with, classifies your goods, determines whether an export needs a license, and keeps a defensible record of every check. Kadmoon builds it around your actual product catalog and trade lanes, connects it to the systems where orders and shipments already live, and hands you the code and data on delivery, so screening runs on your terms and the audit trail is yours.',
  problem:
    'Manual screening and spreadsheet classification do not scale, and they miss things. A restricted party slips through because someone skipped a check under deadline pressure, a product ships under the wrong HS code, or an export goes out without a license determination on file. When an audit or an inquiry lands, the record is scattered across inboxes and shared drives, and reconstructing who screened what, against which list, and when, becomes its own project.',
  approach:
    'We start from your obligations and your data, not a generic rulebook. We map your products, counterparties, and trade lanes, define measurable acceptance criteria for each screening and determination workflow, and build in two-week sprints with a working demo each cycle. Where export controls are involved we build to support your compliance team\'s decisions and keep the record, rather than claiming to make the legal call for you.',
  highlights: [
    {
      title: 'Screening that actually runs',
      description:
        'Denied and restricted party checks against the lists you are subject to, run automatically at the points where they matter: onboarding, order entry, and shipment.',
    },
    {
      title: 'Classification kept consistent',
      description:
        'HS and HTS codes managed against your product catalog, with history and reasoning attached, so the same item is classified the same way every time.',
    },
    {
      title: 'License determination on the record',
      description:
        'Workflows that capture the export control review, the determination, and the license, with the supporting facts stored alongside the decision.',
    },
    {
      title: 'Audit trail by default',
      description:
        'Every screen, classification, and determination is timestamped, attributed, and retained, so you can show exactly what was checked and when.',
    },
    {
      title: 'Connected to your systems',
      description:
        'Integrated with your ERP, order management, and shipping tools, so compliance runs inside the existing flow instead of as a separate manual step.',
    },
    {
      title: 'You own it',
      description:
        'Source code, infrastructure, screening records, and documentation are yours on delivery. No per-seat lock-in and no vendor holding your compliance history.',
    },
  ],
  modules: [
    {
      name: 'Party screening',
      features: [
        'Denied and restricted party screening against configured watchlists',
        'Automated re-screening on list updates and record changes',
        'Match review queue with adjudication, notes, and escalation',
        'Screening at onboarding, order entry, and shipment',
      ],
    },
    {
      name: 'Classification and license management',
      features: [
        'HS and HTS classification tied to the product catalog',
        'Export control review and license determination workflows',
        'License records with validity, conditions, and usage tracking',
        'Reusable classification and determination history per product',
      ],
    },
    {
      name: 'Recordkeeping and reporting',
      features: [
        'Full audit trail of screens, classifications, and determinations',
        'Retention and retrieval built for audit and inquiry response',
        'Role-based access and segregation of duties',
        'Dashboards and exports for compliance and management review',
      ],
    },
    {
      name: 'Integrations and automation',
      features: [
        'ERP, order management, and shipping integrations',
        'Watchlist and reference data ingestion with update handling',
        'Middleware with retries, logging, and observability',
        'Alerts and holds when a check requires attention',
      ],
    },
  ],
  whoFor: [
    'Exporters and importers outgrowing manual screening and spreadsheet classification.',
    'Compliance teams that need a defensible, retrievable record for audits and inquiries.',
    'Companies whose product mix or trade lanes do not fit an off-the-shelf compliance product.',
    'Operations that want screening and classification built into their existing order and shipment flow.',
  ],
  faqs: [
    {
      q: 'What is trade compliance software?',
      a: 'Trade compliance software is a system that helps a company meet its import and export obligations by screening the parties it deals with against denied and restricted party lists, classifying goods with HS and HTS codes, determining whether exports need a license, and keeping an audit-ready record of every check. Custom trade compliance software does this around your specific products, counterparties, and trade lanes rather than as a one-size-fits-all product.',
    },
    {
      q: 'What is denied party screening software?',
      a: 'Denied party screening software checks the people and companies you do business with against government watchlists of restricted, denied, and sanctioned parties, so you can flag a match before onboarding a customer, entering an order, or releasing a shipment. Good screening runs automatically at those decision points and re-screens when the lists or your records change, with a review queue for handling potential matches.',
    },
    {
      q: 'Does the software handle EAR and ITAR export controls?',
      a: 'It is built to support your compliance team\'s work under regimes like the EAR and ITAR: capturing the export control review, recording license determinations, and retaining the supporting facts. It supports and documents your decisions rather than making the legal determination for you. The specific controls and lists it covers are configured to what your business is actually subject to.',
    },
    {
      q: 'How is this different from off-the-shelf export compliance software?',
      a: 'Packaged export compliance products are the right call when your process fits their model and their list coverage. Custom software wins when your product catalog, trade lanes, or workflows do not fit a template, when you need screening and classification embedded in your own ERP and order flow, or when you want to own the compliance record instead of renting access to it. Many teams also keep a packaged screening service and build custom workflow and recordkeeping around it.',
    },
    {
      q: 'How long does it take to build?',
      a: 'A first usable workflow, such as party screening at order entry, often ships in a few months, with a working demo every two weeks. Classification, license management, and reporting are added in phases, so you get value from the early workflows while later ones are still in progress rather than waiting for one long build.',
    },
  ],
  related: [
    { label: 'Trade and supply chain software', href: '/industries/trade-and-supply-chain' },
    { label: 'Denied party screening software', href: '/blog/denied-party-screening-software' },
    { label: 'Trade compliance automation', href: '/blog/trade-compliance-automation' },
  ],
};
