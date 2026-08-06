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
const SOLUTIONS: HubLink = { label: 'Software solutions we build', href: '/solutions' };
const TRADE: HubLink = {
  label: 'Trade and supply chain software',
  href: '/industries/trade-and-supply-chain',
};

// Solution pages
const CUSTOM_ERP: HubLink = { label: 'Custom ERP development', href: '/solutions/custom-erp-development' };
const CUSTOM_CRM: HubLink = { label: 'Custom CRM development', href: '/solutions/custom-crm-development' };
const WMS: HubLink = { label: 'Warehouse management software', href: '/solutions/warehouse-management-software' };

// Engagement / hire pages
const STAFF_AUG: HubLink = { label: 'IT staff augmentation', href: '/staff-augmentation' };
const DEDICATED_TEAM: HubLink = { label: 'Dedicated development team', href: '/dedicated-development-team' };
const HIRE_AI: HubLink = { label: 'Hire AI engineers', href: '/hire-ai-engineers' };

const byCategory: Record<string, HubLink[]> = {
  'Trade & Supply Chain': [TRADE, WMS, CASES],
  'Custom Software': [CUSTOM_ERP, CUSTOM_CRM, CUSTOM_CO],
  "Buyer's Guide": [
    SOFTWARE_HOUSE,
    { label: 'How to choose a software partner', href: '/#how-to-choose' },
    CASES,
  ],
  'Cost & Pricing': [CUSTOM_CO, SOLUTIONS, CASES],
  'Software House': [SOFTWARE_HOUSE, STAFF_AUG, DEDICATED_TEAM],
  'SaaS Development': [
    SAAS_CO,
    { label: 'SaaS platforms we build', href: '/services/saas-platforms' },
    CASES,
  ],
  'Data & AI': [
    { label: 'Data and AI engineering', href: '/services/data-and-ai' },
    HIRE_AI,
    CASES,
  ],
  'Mobile Apps': [
    { label: 'Mobile app development company', href: '/mobile-app-development-company' },
    { label: 'Mobile app development', href: '/services/mobile-apps' },
    CASES,
  ],
  'Legacy Modernization': [
    { label: 'Legacy modernization', href: '/services/legacy-modernization' },
    { label: 'Enterprise software development', href: '/enterprise-software-development' },
    CASES,
  ],
  'Integrations & APIs': [
    { label: 'Integrations and APIs', href: '/services/integrations-and-apis' },
    WMS,
    CASES,
  ],
  'Industry Guides': [SOLUTIONS, INDUSTRIES, CASES],
  'Process & Delivery': [PROCESS, DEDICATED_TEAM, CASES],
  Comparisons: [SOFTWARE_HOUSE, STAFF_AUG, CUSTOM_CO],
  'Tech Stack': [SERVICES, SOLUTIONS, CASES],
};

export function hubsForCategory(category: string): HubLink[] {
  return byCategory[category] ?? [SOFTWARE_HOUSE, SOLUTIONS, CASES];
}
