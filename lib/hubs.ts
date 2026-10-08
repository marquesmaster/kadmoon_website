// Internal-linking hubs. Maps each blog category to the most relevant solution
// pages so every article links out to them in a contextual "Related" block,
// concentrating internal link equity on the pages we want to rank.
// All routes here are valid trade-software pages.

export type HubLink = { label: string; href: string };

const CUSTOMS: HubLink = { label: 'Customs & compliance', href: '/services/customs-compliance' };
const TRADE_ERP: HubLink = { label: 'Trade ERP', href: '/services/trade-erp' };
const INVENTORY: HubLink = { label: 'Inventory & WMS', href: '/services/inventory-wms' };
const SECURITY: HubLink = { label: 'Vessel & port security vision', href: '/services/vessel-security-vision' };
const LOGISTICS: HubLink = { label: 'Supply chain & logistics', href: '/services/supply-chain-logistics' };
const INTEGRATIONS: HubLink = { label: 'Trade integrations', href: '/services/trade-integrations' };
const CUSTOM: HubLink = { label: 'Custom development', href: '/services/custom-development' };
const SERVICES: HubLink = { label: 'What we build', href: '/services' };
const CASES: HubLink = { label: 'Selected work', href: '/cases' };

const byCategory: Record<string, HubLink[]> = {
  'Customs & Compliance': [CUSTOMS, TRADE_ERP, SERVICES],
  'Trade Operations': [TRADE_ERP, CUSTOMS, INTEGRATIONS],
  Inventory: [INVENTORY, TRADE_ERP, LOGISTICS],
  Security: [SECURITY, SERVICES, CASES],
  Logistics: [LOGISTICS, INTEGRATIONS, TRADE_ERP],
  Integrations: [INTEGRATIONS, TRADE_ERP, LOGISTICS],
  'Trade CRM': [TRADE_ERP, CUSTOM, SERVICES],
  'Custom software': [CUSTOM, SERVICES, CASES],
};

export function hubsForCategory(category: string): HubLink[] {
  return byCategory[category] ?? [SERVICES, CUSTOMS, CASES];
}
