import { siteConfig } from '@/lib/site';
import { getAllPostMeta, getCategories } from '@/lib/blog';
import { services } from '@/lib/content';

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
    `Kadmoon is a US consultancy that builds Power BI and Microsoft Fabric for finance and operations teams, a ${siteConfig.region} corporation serving clients nationwide. We connect the systems a business already runs, build one governed Power BI model, and deliver the dashboards finance and operations open daily, with fixed scope and fixed price. Data comes from the systems clients already run (QuickBooks, NetSuite, Dynamics 365 Business Central, Sage Intacct, SQL Server, Salesforce, Excel, SharePoint, or APIs), and the analytics is delivered on the Microsoft stack (Power BI, Fabric, Azure) inside the client's own Microsoft tenant. You own the model and the data.`,
  );
  lines.push('');
  lines.push('## Key pages');
  lines.push(`- [Home](${siteConfig.url}/): positioning, what we deliver, four-phase process, how to choose a Power BI partner`);
  lines.push(
    `- [Services](${siteConfig.url}/services): Power BI (dashboards, semantic models, migration, embedded) and data engineering on Microsoft Fabric and Azure`,
  );
  lines.push(
    `- [Power BI for Finance](${siteConfig.url}/power-bi-for-finance): month-end close, budget vs actual, margin, and cash for finance and operations teams`,
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
