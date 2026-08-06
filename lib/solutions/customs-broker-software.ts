import type { Solution } from './types';

export const customsBrokerSoftware: Solution = {
  slug: 'customs-broker-software',
  name: 'Customs broker software',
  category: 'Trade & customs',
  eyebrow: 'Customs broker software',
  metaTitle: 'Customs Broker Software Development | Kadmoon',
  metaDescription:
    'Kadmoon builds custom customs broker software for US brokers: ACE/ABI filing, entry and entry summary, HTS classification, duty calculation, ISF, and a client portal you own.',
  keywords: [
    'customs broker software',
    'customs brokerage software',
    'abi software',
    'ace customs software',
    'customs entry software',
  ],
  tagline: 'Customs broker software built for how your brokerage files.',
  heroIntro:
    'Customs broker software is the system a licensed US customs broker uses to file entries with CBP, classify goods, calculate duties, and clear shipments. Kadmoon builds it custom: ACE and ABI filing, entry and entry summary, HTS classification, denied party screening, ISF, and a client portal, shaped around your desk and handed over as code and infrastructure you own.',
  problem:
    'Off-the-shelf broker platforms are priced per entry or per seat, lock your data behind a vendor, and rarely match how your desk actually works. Brokers end up rekeying data between the ABI interface, spreadsheets, email, and accounting, chasing document status across inboxes, and waiting on the vendor for every rule change or new client workflow. As volume grows the per-entry fees climb while the software still does not fit.',
  approach:
    'We start from your filing process and the CBP requirements it has to meet, not a generic template. We map the entry lifecycle, define measurable acceptance criteria for each step, and build the ABI message handling, classification, and duty logic in two-week sprints with a working demo each cycle. You get software that files the way your brokers file, and you keep the code, the data, and the CBP interface on delivery.',
  highlights: [
    {
      title: 'ACE and ABI filing, done properly',
      description:
        'Direct ABI message handling for entry, entry summary, and status, built to CBP CATAIR specs with validation before transmission and clear error handling on rejects.',
    },
    {
      title: 'Classification and duty you can trust',
      description:
        'HTS lookup and classification support with duty, tax, and fee calculation driven by current tariff data, so the numbers on the entry summary match the ruling.',
    },
    {
      title: 'Document capture and automation',
      description:
        'Commercial invoices, packing lists, and permits captured, parsed, and attached to the entry, cutting the rekeying between documents and the ABI transmission.',
    },
    {
      title: 'Compliance built in',
      description:
        'Denied party and sanctions screening, ISF filing, and audit trails on every action, so due diligence is part of the workflow rather than a separate checklist.',
    },
    {
      title: 'A client portal that pulls its weight',
      description:
        'Importers see shipment and entry status, upload documents, and pull their own records, which takes status calls off your brokers.',
    },
    {
      title: 'You own it',
      description:
        'Source code, infrastructure, and documentation are yours on delivery. No per-entry fees and no lock-in.',
    },
  ],
  modules: [
    {
      name: 'Entry and CBP filing',
      features: [
        'ABI entry and entry summary creation and transmission',
        'CBP status and message processing with reject handling',
        'ISF (10+2) filing and tracking',
        'PGA and partner government agency data where required',
      ],
    },
    {
      name: 'Classification and duty',
      features: [
        'HTS classification lookup and history',
        'Duty, tax, and fee calculation from current tariff data',
        'Country of origin and trade program handling',
        'Reusable product and client classification records',
      ],
    },
    {
      name: 'Documents and compliance',
      features: [
        'Document capture, parsing, and attachment to entries',
        'Denied party and sanctions screening',
        'Audit trails and recordkeeping for CBP compliance',
        'Role-based access for brokers, clerks, and clients',
      ],
    },
    {
      name: 'Client portal and status',
      features: [
        'Importer self-service portal with entry and shipment status',
        'Client document upload and record retrieval',
        'Milestone tracking and notifications',
        'Reporting and exports for clients and internal use',
      ],
    },
  ],
  whoFor: [
    'Licensed US customs brokers outgrowing per-entry off-the-shelf platforms.',
    'Brokerages whose filing workflow does not fit a packaged product.',
    'Freight forwarders and 3PLs adding in-house brokerage capacity.',
    'Brokers who want to own their CBP interface, data, and client portal.',
  ],
  faqs: [
    {
      q: 'What is customs broker software?',
      a: 'Customs broker software is the system a licensed US customs broker uses to file entries with CBP and clear imported goods. It handles ACE and ABI transmission, entry and entry summary, HTS classification, duty and fee calculation, ISF, denied party screening, and document management, and it typically includes a client portal for importers to track status and share documents.',
    },
    {
      q: 'What is the difference between ACE and ABI software?',
      a: 'ACE (Automated Commercial Environment) is CBP\'s trade processing system, and ABI (Automated Broker Interface) is the electronic channel brokers use to transmit entries into ACE. ABI software formats and sends the CATAIR messages CBP expects and processes the responses back. In practice broker software is both: it prepares the entry data and speaks ABI to file it into ACE.',
    },
    {
      q: 'Should we build customs broker software or buy an off-the-shelf platform?',
      a: 'Buy when a packaged broker platform fits your workflow and the per-entry pricing is acceptable at your volume. Build custom when the standard product forces workarounds, when per-entry fees climb faster than the value, or when you want to own your data, CBP interface, and client portal. Many brokers also build custom automation and a portal around an existing filing core.',
    },
    {
      q: 'How much does custom customs broker software cost?',
      a: 'Cost tracks scope: the filing types you support, the depth of ABI and PGA handling, classification and duty logic, the client portal, and integrations. A focused build for one desk costs far less than a full brokerage platform. We scope the work with acceptance criteria per step so the price maps to features you can verify.',
    },
    {
      q: 'How long does it take to build customs brokerage software?',
      a: 'A first working slice, often entry creation and ABI transmission for one entry type, can ship in a few months, with a working demo every two weeks. Classification, ISF, screening, and the client portal are added in phases, so you get value from early filing capability while the rest is still in progress.',
    },
  ],
  related: [
    { label: 'Trade and supply chain software', href: '/industries/trade-and-supply-chain' },
    { label: 'Custom customs brokerage software', href: '/blog/custom-customs-brokerage-software' },
    { label: 'CBP ACE and ABI integration', href: '/blog/cbp-ace-abi-integration' },
  ],
};
