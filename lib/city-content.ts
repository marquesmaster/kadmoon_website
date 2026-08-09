import type { City } from './cities';

/**
 * Per-city page copy for the Power BI practice. Content is composed from the
 * city's real fields (industries, economy, metro, region) plus rotating
 * template variants seeded by the city rank, so pages read differently rather
 * than being carbon copies. The goal is genuine local relevance, not thin
 * duplication.
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
    `Kadmoon delivers Power BI and Microsoft data platform work for companies in ${city.name}, ${city.stateAbbr}. ${capitalize(
      city.name,
    )} is ${lowerFirst(city.economy)} Its ${industries} employers run on data that is scattered across systems, which is exactly where a governed Power BI model turns reports into decisions.`,
    `We build Power BI, Microsoft Fabric, and Power Platform for ${city.name} businesses that are tired of three versions of the truth. With a local economy shaped by ${industries}, teams in ${city.name} need one governed model where every KPI means the same thing.`,
    `Companies across ${city.name}, ${city.stateAbbr} come to Kadmoon when their reports no longer agree. The ${city.metro} area leans on ${industries}, and those operations reward a single source of truth on the Microsoft stack, from raw data to the dashboard leadership opens every Monday.`,
  ];
  return pick(variants, city.rank);
}

export function cityWhyLocal(city: City): { title: string; body: string } {
  const bodies = [
    `You do not need a consultancy on your street to get Power BI built right, but you do need one that understands the operations behind ${city.name}'s ${listPhrase(
      city.industries.slice(0, 2),
    )} sectors. Kadmoon works with US clients from our Austin base: senior data engineers, US business hours, and dashboards you can validate from the first cycle.`,
    `Whether your team sits downtown or across the ${city.metro} metro, the model is the same: a senior in-house team, one definition per KPI, and everything built in your own Microsoft tenant. No offshore handoffs, no rotating freelancers on your ${city.name} reports.`,
    `Kadmoon serves ${city.name} companies the way a serious buyer expects: full-time Power BI and data engineers, a working dashboard by week two, and a governed model that stays yours. You are never locked into us.`,
  ];
  return {
    title: `Power BI built for how ${city.name} companies actually run`,
    body: pick(bodies, city.rank + 1),
  };
}

export function cityIndustryAngle(city: City): string {
  const primary = city.industries[0] ?? 'enterprise';
  const angles: Record<string, string> = {
    Technology: `In a tech-heavy market like ${city.name}, product and revenue data grows fast. We build the semantic model, SaaS metrics, and Power BI dashboards that hold up as the numbers scale.`,
    Finance: `${city.name}'s financial employers deal with reconciliation, reporting, and controls that spreadsheets handle poorly. We build governed Power BI with row-level security and audit-ready lineage.`,
    'Financial Services': `${city.name}'s financial employers deal with reconciliation, reporting, and controls that spreadsheets handle poorly. We build governed Power BI with row-level security and audit-ready lineage.`,
    Energy: `Energy operations in ${city.name} generate data at scale. We build the Fabric and Azure pipelines, dashboards, and forecasting models that turn that data into decisions.`,
    Healthcare: `Healthcare teams in ${city.name} need claims, length of stay, and operations on one model, built with HIPAA in mind. We deliver governed Power BI on clean, secured data.`,
    Logistics: `${city.name} is a logistics market, and logistics runs on service level and cost. We build OTIF, freight cost, and supply chain dashboards on a single governed model.`,
    Manufacturing: `Manufacturers in ${city.name} need OEE and cost per line in time to act. We cross MES and ERP data into executive Power BI, not reports that arrive days late.`,
    Government: `Public-sector and enterprise work in ${city.name} rewards governance and documentation. We deliver Power BI with security, lineage, and a Center of Excellence to keep it clean.`,
    Retail: `Retail operations in ${city.name} need sales, inventory, and margin from stores and e-commerce in one place. We consolidate them in Microsoft Fabric and serve Power BI on top.`,
    Trade: `${city.name}'s trade and import/export activity generates data across customs, freight, and orders. We bring it onto one governed model with dashboards that leadership trusts.`,
  };
  return (
    angles[primary] ??
    `Whatever drives ${city.name}'s economy, the pattern repeats: data outgrows spreadsheets and reports stop agreeing. We build the governed Power BI model that fixes that.`
  );
}

export function cityFaqs(city: City): { q: string; a: string }[] {
  return [
    {
      q: `Do you do Power BI consulting for companies in ${city.name}?`,
      a: `Yes. Kadmoon works with clients across the United States, including ${city.name}, ${city.state}, from our base in Austin, TX. We handle discovery, the data foundation, the semantic model, dashboards, and managed support, all with a senior in-house team on US business hours.`,
    },
    {
      q: `What do you build for ${city.name} businesses?`,
      a: `Power BI dashboards on a governed model, Microsoft Fabric and Azure data platforms, Power Platform apps and automations, migrations from Tableau, Qlik, and Cognos, and tenant-to-tenant moves. Everything is built in your own Microsoft tenant.`,
    },
    {
      q: `Is everything built in our own tenant?`,
      a: `Yes. Your data, workspaces, reports, and Power Platform environments all live in your Microsoft tenant, in ${city.name} or anywhere else. No lock-in and no dependency on us to keep the lights on.`,
    },
    {
      q: `How fast can a ${city.name} project start?`,
      a: `Tell us your scenario and you get a diagnosis and a proposal with an investment range within a few business days. First dashboards are usually live by week two of a signed scope.`,
    },
  ];
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function lowerFirst(s: string): string {
  return s.charAt(0).toLowerCase() + s.slice(1);
}
