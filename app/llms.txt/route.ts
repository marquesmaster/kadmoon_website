import { siteConfig } from '@/lib/site';
import { getAllPostMeta, getCategories } from '@/lib/blog';
import { services, industryPages } from '@/lib/content';

export const dynamic = 'force-static';

// llms.txt: a plain-text map of the site for LLMs / AI search engines.
// Spec: https://llmstxt.org/
export function GET() {
  const posts = getAllPostMeta();
  const categories = getCategories();

  const lines: string[] = [];
  lines.push(`# ${siteConfig.legalName}`);
  lines.push('');
  lines.push(`> ${siteConfig.description}`);
  lines.push('');
  lines.push(
    `Kadmoon is a US Power BI and Microsoft Power Platform consultancy based in ${siteConfig.city}, ${siteConfig.regionCode}. We turn scattered data into decisions on the Microsoft stack: Power BI, Microsoft Fabric, Azure Synapse and Data Factory, Power Platform (Power Apps, Power Automate, Power Pages, Copilot Studio), Dataverse, Azure Machine Learning, and Microsoft Purview. Signature work: tenant-to-tenant migrations and legacy BI migrations (Tableau, Qlik, Cognos) to Power BI and Fabric. Senior in-house team, one definition per KPI, governed by default, and everything built in your own tenant.`,
  );
  lines.push('');
  lines.push('## Key pages');
  lines.push(`- [Home](${siteConfig.url}/): positioning, what we do, four-phase process, how to choose a data partner`);
  lines.push(
    `- [Dashboards](${siteConfig.url}/dashboards): ten interactive Power BI dashboard demos with three-level drill-down, granular tables, and cross-cut matrices (illustrative data, real structure)`,
  );
  lines.push(
    `- [Cases](${siteConfig.url}/cases): BI and migration case studies (QlikView to Power BI, Fabric data platform, executive OEE BI, predictive analytics, S&OP, logistics OTIF, management P&L, and more), each with its dashboard`,
  );
  lines.push('');
  lines.push('## Services');
  for (const s of services) {
    lines.push(`- [${s.title}](${siteConfig.url}/services/${s.slug}): ${s.tagline}`);
  }
  lines.push('');
  lines.push('## Industries');
  for (const i of industryPages) {
    lines.push(`- [${i.name}](${siteConfig.url}/industries/${i.slug})`);
  }
  lines.push('');
  lines.push(`- [Blog](${siteConfig.url}/blog): ${posts.length} in-depth articles`);
  lines.push(`- Contact: ${siteConfig.email}`);
  lines.push('');
  lines.push('## Blog topics');
  for (const cat of categories) {
    lines.push(`- ${cat.name} (${cat.count} articles)`);
  }
  lines.push('');
  lines.push('## Articles');
  for (const p of posts) {
    lines.push(`- [${p.title}](${siteConfig.url}/blog/${p.slug}): ${p.description}`);
  }
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
