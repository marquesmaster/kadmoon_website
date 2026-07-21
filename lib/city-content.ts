import type { City } from './cities';

/**
 * Per-city page copy. Content is composed from the city's real fields
 * (industries, economy, metro, region) plus a small set of rotating template
 * variants seeded by the city rank, so pages read differently rather than being
 * carbon copies. The goal is genuine local relevance, not thin duplication.
 */

function pick<T>(arr: T[], seed: number): T {
  return arr[seed % arr.length];
}

function listPhrase(items: string[]): string {
  if (items.length <= 1) return items[0] ?? '';
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`;
}

export function cityIntro(city: City): string {
  const industries = listPhrase(city.industries.slice(0, 3));
  const variants = [
    `Kadmoon builds custom software for companies in ${city.name}, ${city.stateAbbr}. ${capitalize(
      city.name,
    )} is ${lowerFirst(city.economy)} Its ${industries} employers run on operations that off-the-shelf tools rarely fit, which is exactly where a bespoke system earns its keep.`,
    `We build bespoke software for ${city.name} businesses that have outgrown generic SaaS. With a local economy shaped by ${industries}, teams in ${city.name} often need software mapped to their own process rather than someone else's product roadmap.`,
    `Companies across ${city.name}, ${city.stateAbbr} come to Kadmoon when the software they can buy no longer fits how they work. The ${city.metro} area leans on ${industries}, and those operations reward systems built for the exact workflow, not bent to fit one.`,
  ];
  return pick(variants, city.rank);
}

export function cityWhyLocal(city: City): { title: string; body: string } {
  const bodies = [
    `You do not need a vendor on your street to get software built right, but you do need one that understands the operations behind ${city.name}'s ${listPhrase(
      city.industries.slice(0, 2),
    )} sectors. Kadmoon works with US clients from our Austin base: senior engineers, US business hours, and delivery you can track from the first sprint.`,
    `Whether your team sits downtown or across the ${city.metro} metro, the model is the same: a senior in-house team, contracts with measurable acceptance criteria, and code you own outright. No offshore handoffs, no rotating freelancers on your ${city.name} project.`,
    `Kadmoon serves ${city.name} companies the way a serious buyer expects: full-time engineers, a working demo every two weeks, and a system that ships with the repo, credentials, and runbook in your hands. You are never locked into us.`,
  ];
  return {
    title: `Custom software built for how ${city.name} companies actually run`,
    body: pick(bodies, city.rank + 1),
  };
}

export function cityIndustryAngle(city: City): string {
  const primary = city.industries[0] ?? 'enterprise';
  const angles: Record<string, string> = {
    Technology: `In a tech-heavy market like ${city.name}, the bar for product quality is high. We build SaaS platforms, internal tools, and data products that hold up under real load.`,
    Finance: `${city.name}'s financial employers deal with reconciliation, reporting, and compliance that generic tools handle poorly. We build platforms with the audit trails and controls those teams need.`,
    'Financial Services': `${city.name}'s financial employers deal with reconciliation, reporting, and compliance that generic tools handle poorly. We build platforms with the audit trails and controls those teams need.`,
    Energy: `Energy operations in ${city.name} generate data at scale. We build the ingestion pipelines, dashboards, and forecasting models that turn that data into decisions.`,
    Healthcare: `Healthcare teams in ${city.name} run in regulated environments where records, workflows, and integrations have to be right. We build clinical and operational systems for exactly that.`,
    Logistics: `${city.name} is a logistics market, and logistics is where our flagship trade and supply chain practice does its best work: tracking, landed cost, and operations in one system.`,
    Manufacturing: `Manufacturers in ${city.name} run production, inventory, and floor operations that off-the-shelf ERP rarely fits. We build the modules around the real process.`,
    Government: `Public-sector and enterprise work in ${city.name} rewards vendors who ship on a schedule and document everything. That is how we deliver by default.`,
    Retail: `Retail operations in ${city.name} need POS, inventory, and integrations that actually talk to each other. We build the connective tissue and the systems on top.`,
    Trade: `${city.name}'s trade and import/export activity is our home turf: US Customs and ACE integration, customs workflows, and end-to-end supply chain visibility.`,
  };
  return (
    angles[primary] ??
    `Whatever drives ${city.name}'s economy, the pattern repeats: real operations outgrow generic software. We build the system that fits your process instead.`
  );
}

export function cityFaqs(city: City): { q: string; a: string }[] {
  return [
    {
      q: `Do you build custom software for companies in ${city.name}?`,
      a: `Yes. Kadmoon works with clients across the United States, including ${city.name}, ${city.state}, from our engineering base in Austin, TX. We handle discovery, architecture, build, QA, and go-live, all with a senior in-house team on US business hours.`,
    },
    {
      q: `What kinds of software do you build for ${city.name} businesses?`,
      a: `Enterprise systems like ERPs and CRMs, multi-tenant SaaS products, mobile apps, integrations and APIs, data and AI features, and legacy modernization. Trade and supply chain is our flagship practice. Every system is custom and owned by you.`,
    },
    {
      q: `Do we own the code you build?`,
      a: `Completely. On delivery you receive the Git repository, CI/CD pipelines, infrastructure credentials, and an operational runbook. No lock-in and no permanent dependency on us, in ${city.name} or anywhere else.`,
    },
    {
      q: `How fast can a ${city.name} project start?`,
      a: `Tell us about the project and you get a technical proposal within one business day, covering scope, architecture, timeline, and investment. Discovery usually starts within a week or two of a signed scope.`,
    },
  ];
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function lowerFirst(s: string): string {
  return s.charAt(0).toLowerCase() + s.slice(1);
}
