// Internal-linking hubs. Maps each blog category to the most relevant service
// pages so every article links out to them in a contextual "Related" block,
// concentrating internal link equity on the pages we want to rank.
// All routes here are valid Power BI / Microsoft-stack pages.

export type HubLink = { label: string; href: string };

const POWER_BI: HubLink = { label: 'Power BI', href: '/services/power-bi' };
const POWER_PLATFORM: HubLink = { label: 'Power Platform', href: '/services/power-platform' };
const DATA_ENG: HubLink = { label: 'Data engineering', href: '/services/data-engineering' };
const COPILOT: HubLink = { label: 'Copilot & AI', href: '/services/copilot-ai' };
const SERVICES: HubLink = { label: 'All services', href: '/services' };
const CASES: HubLink = { label: 'Case studies', href: '/cases' };

const byCategory: Record<string, HubLink[]> = {
  'Power BI': [POWER_BI, DATA_ENG, SERVICES],
  'Power Platform': [POWER_PLATFORM, POWER_BI, SERVICES],
  'Data Engineering': [DATA_ENG, POWER_BI, SERVICES],
  'Copilot & AI': [COPILOT, POWER_BI, SERVICES],
  'Analytics Strategy': [POWER_BI, SERVICES, CASES],
};

export function hubsForCategory(category: string): HubLink[] {
  return byCategory[category] ?? [POWER_BI, SERVICES, CASES];
}
