// Internal-linking hubs. Maps each blog category to the most relevant hub
// pages (money/authority pages) so every article links out to them in a
// contextual "Related resources" block. This concentrates internal link
// equity on the pages we want to rank and helps AI/search extractors follow
// the site structure. Anchor text is natural and specific per hub.

export type HubLink = { label: string; href: string };

const CASES: HubLink = { label: 'Case studies our team has delivered', href: '/cases' };
const SOFTWARE_HOUSE: HubLink = { label: 'How Kadmoon works as a software house', href: '/software-house' };
const CUSTOM_CO: HubLink = {
  label: 'Custom software development company',
  href: '/custom-software-development-company',
};
const SAAS_CO: HubLink = { label: 'SaaS development company', href: '/saas-development-company' };
const SERVICES: HubLink = { label: 'What we build', href: '/services' };
const INDUSTRIES: HubLink = { label: 'Industries we serve', href: '/industries' };
const PROCESS: HubLink = { label: 'How we deliver', href: '/process' };
const TRADE: HubLink = {
  label: 'Trade and supply chain software',
  href: '/industries/trade-and-supply-chain',
};

const byCategory: Record<string, HubLink[]> = {
  'Trade & Supply Chain': [
    TRADE,
    { label: 'Integrations and APIs', href: '/services/integrations-and-apis' },
    CASES,
  ],
  'Custom Software': [
    CUSTOM_CO,
    { label: 'Enterprise systems we build', href: '/services/enterprise-systems' },
    SOFTWARE_HOUSE,
  ],
  "Buyer's Guide": [
    SOFTWARE_HOUSE,
    { label: 'How to choose a software partner', href: '/#how-to-choose' },
    CASES,
  ],
  'Cost & Pricing': [CUSTOM_CO, SOFTWARE_HOUSE, CASES],
  'Software House': [SOFTWARE_HOUSE, CUSTOM_CO, CASES],
  'SaaS Development': [
    SAAS_CO,
    { label: 'SaaS platforms we build', href: '/services/saas-platforms' },
    CASES,
  ],
  'Data & AI': [
    { label: 'Data and AI engineering', href: '/services/data-and-ai' },
    SOFTWARE_HOUSE,
    CASES,
  ],
  'Mobile Apps': [
    { label: 'Mobile app development', href: '/services/mobile-apps' },
    SOFTWARE_HOUSE,
    CASES,
  ],
  'Legacy Modernization': [
    { label: 'Legacy modernization', href: '/services/legacy-modernization' },
    SOFTWARE_HOUSE,
    CASES,
  ],
  'Integrations & APIs': [
    { label: 'Integrations and APIs', href: '/services/integrations-and-apis' },
    TRADE,
    CASES,
  ],
  'Industry Guides': [INDUSTRIES, SOFTWARE_HOUSE, CASES],
  'Process & Delivery': [PROCESS, SOFTWARE_HOUSE, CASES],
  Comparisons: [SOFTWARE_HOUSE, CUSTOM_CO, CASES],
  'Tech Stack': [SERVICES, SOFTWARE_HOUSE, CASES],
};

export function hubsForCategory(category: string): HubLink[] {
  return byCategory[category] ?? [SOFTWARE_HOUSE, CUSTOM_CO, CASES];
}
