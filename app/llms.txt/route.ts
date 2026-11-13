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
    `Kadmoon is a US Microsoft data and analytics consultancy led by Power BI services, a ${siteConfig.region} corporation serving clients nationwide. We turn the data in a business's ERP, CRM, and line-of-business systems into decisions: governed Power BI dashboards and semantic models, Power BI migration, and embedded analytics, plus Power Platform automation, data engineering on Microsoft Fabric and Azure, and Copilot and AI. Data comes from the systems clients already run (SQL Server, Dynamics 365, SAP, Oracle, NetSuite, Salesforce, Excel, SharePoint, or APIs), and the analytics is delivered on the Microsoft stack (Power BI, Fabric, Azure) inside the client's own tenant. Senior US-based team; you own the model and the data.`,
  );
  lines.push('');
  lines.push('## Key pages');
  lines.push(`- [Home](${siteConfig.url}/): positioning, what we deliver, four-phase process, how to choose a Power BI partner`);
  lines.push(
    `- [Services](${siteConfig.url}/services): Power BI (dashboards, semantic models, migration, embedded), Power Platform, data engineering on Fabric and Azure, and Copilot and AI`,
  );
  lines.push(
    `- [Cases](${siteConfig.url}/cases): illustrative Power BI and Microsoft-stack case studies across finance, sales, operations, retail, and SaaS`,
  );
  lines.push(
    `- [Docs](${siteConfig.url}/docs): methodology, engagement models, data integration, security and tenant model, measure library, and glossary`,
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
