import type { Solution } from './types';

export const freightForwardingSoftware: Solution = {
  slug: 'freight-forwarding-software',
  name: 'Freight forwarding software',
  category: 'Trade & customs',
  eyebrow: 'Freight forwarding software',
  metaTitle: 'Freight Forwarding Software | Kadmoon',
  metaDescription:
    'Kadmoon builds custom freight forwarding software: quoting, bookings, shipment tracking, documents, customs coordination, carrier integrations, and margins you own. Senior in-house team, code you keep.',
  keywords: [
    'freight forwarding software',
    'freight forwarder software',
    'freight forwarding system',
    'freight management software',
    'custom freight forwarding software',
  ],
  tagline: 'Freight forwarding software built around how you move shipments.',
  heroIntro:
    'Freight forwarding software runs a forwarder\'s operation end to end: quoting, bookings, shipment tracking, documents like the bill of lading and commercial invoice, customs coordination, and the margin on every file. Kadmoon builds it around your lanes, your partners, and your paperwork, integrates the carriers and systems you already use, and hands you the code and infrastructure on delivery.',
  problem:
    'Most forwarders run on a mix of email, spreadsheets, and a generic tool that fits ocean but not air, or air but not customs. Quotes live in one person\'s inbox, document versions drift, tracking updates get copied by hand, and no one can see the real margin on a file until it closes. As volume grows, the manual re-entry between quoting, booking, and accounting becomes the thing that caps how much freight the team can handle.',
  approach:
    'We start from your actual files, not a template. We map how a shipment moves from quote to booking to delivery and invoice, define measurable acceptance criteria per module, and build in two-week sprints with a working demo each cycle. Carrier and partner integrations are built properly with retries and monitoring, so you see the system take shape from the first month instead of at a reveal at the end.',
  highlights: [
    {
      title: 'One file, quote to invoice',
      description:
        'A quote becomes a booking becomes a shipment becomes an invoice on the same record, so nothing is re-keyed and the margin is visible the whole way.',
    },
    {
      title: 'Ocean, air, and road together',
      description:
        'FCL, LCL, air, and road handled in one system with the fields and documents each mode actually needs, not a form bent to fit.',
    },
    {
      title: 'Documents that stay in sync',
      description:
        'Bill of lading, commercial invoice, packing list, and arrival notices generated from the shipment data, so versions match and nothing is retyped.',
    },
    {
      title: 'Carrier and partner integrations',
      description:
        'Connected to carriers, tracking feeds, customs brokers, and your accounting system, built with retries and observability so updates are not copied by hand.',
    },
    {
      title: 'Margins you can see per file',
      description:
        'Buy rates, sell rates, accruals, and actuals on every shipment, so profit is known before a file closes, not after.',
    },
    {
      title: 'You own it',
      description:
        'Source code, infrastructure, and documentation are yours on delivery. No per-shipment fees, no per-seat lock-in.',
    },
  ],
  modules: [
    {
      name: 'Quoting and bookings',
      features: [
        'Rate management and multi-mode quotes',
        'Quote to booking conversion',
        'Carrier and space bookings',
        'Role-based access and audit trails',
      ],
    },
    {
      name: 'Operations and tracking',
      features: [
        'Shipment files across ocean, air, and road',
        'Milestone and container tracking',
        'Exception alerts and status updates',
        'Customs coordination and broker handoff',
      ],
    },
    {
      name: 'Documents and compliance',
      features: [
        'Bill of lading, commercial invoice, and packing list generation',
        'Arrival notices and delivery orders',
        'Document versioning and shared file storage',
      ],
    },
    {
      name: 'Accounting and margins',
      features: [
        'Buy and sell rates, accruals, and actuals per file',
        'Client invoicing and accounts payable',
        'Margin reporting and accounting integration',
      ],
    },
    {
      name: 'Client portal and integrations',
      features: [
        'Client portal for quotes, tracking, and documents',
        'Carrier, tracking, and customs integrations',
        'Middleware with retries and monitoring',
      ],
    },
  ],
  whoFor: [
    'Freight forwarders outgrowing spreadsheets, email, and a generic forwarding tool.',
    'NVOCCs and customs brokers that need quoting, operations, documents, and accounting in one place.',
    'Forwarders whose lanes, partners, or paperwork do not fit an off-the-shelf product.',
  ],
  faqs: [
    {
      q: 'What is freight forwarding software?',
      a: 'Freight forwarding software is the system a forwarder uses to run shipments end to end: quoting, bookings, tracking, shipping documents, customs coordination, invoicing, and margins. It keeps quotes, bookings, and files on one record so information is not re-entered between steps, and it connects to carriers, tracking feeds, and accounting.',
    },
    {
      q: 'Is custom freight forwarding software better than an off-the-shelf product?',
      a: 'It depends on your operation. Packaged forwarding tools are the right call when your lanes and process fit their model closely. Custom software wins when the product forces workarounds across modes, when your documents or partner integrations do not fit, or when per-shipment fees climb faster than the value. Some forwarders also keep a packaged system and build custom modules around it.',
    },
    {
      q: 'How much does custom freight forwarding software cost?',
      a: 'Cost tracks scope: the modes you handle, the number of carrier and customs integrations, document types, and how deep the accounting and margin reporting go. A focused quoting and operations tool costs far less than a full quote-to-invoice platform with a client portal. We scope the build with acceptance criteria per module so the price maps to something you can verify.',
    },
    {
      q: 'How long does it take to build?',
      a: 'A first usable module, often quoting or shipment files, ships in a few months with a working demo every two weeks. The full system grows in phases rather than one long build, so the operations team gets value from early modules while customs, documents, and accounting are still in progress.',
    },
    {
      q: 'Can it integrate with carriers, tracking, and our accounting system?',
      a: 'Yes. We build integrations to carriers, container and milestone tracking feeds, customs brokers, and your accounting or ERP system, so status updates and invoices are not copied by hand. Each integration is built with retries and monitoring, and we handle the ones that lack clean APIs rather than leaving gaps for manual re-entry.',
    },
  ],
  related: [
    { label: 'Logistics software we build', href: '/industries/logistics' },
    { label: 'Transportation management system', href: '/solutions/transportation-management-system' },
    { label: 'Freight forwarding software guide', href: '/blog/freight-forwarding-software' },
  ],
};
