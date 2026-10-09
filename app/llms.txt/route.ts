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
    `Kadmoon is a US analytics firm focused entirely on foreign trade, based in ${siteConfig.city}, ${siteConfig.regionCode}. We turn the data in a cross-border operation's customs, logistics, and ERP systems into decisions: landed cost and margin, duty and tariff exposure, shipment visibility and OTIF, customs and compliance analytics, inventory and warehouse analytics, and an executive control tower. Data comes from the systems clients already run (SAP, Microsoft, Oracle, NetSuite, broker and carrier systems, EDI and ACE, or spreadsheets), and analytics is delivered on the Microsoft stack (Fabric, Power BI, Azure) inside the client's own tenant. We also build the trade platforms (customs filing, trade ERP, inventory, security vision) as engagements deepen. Senior US-based team; you own the model and the data.`,
  );
  lines.push('');
  lines.push('## Key pages');
  lines.push(`- [Home](${siteConfig.url}/): positioning, what we deliver, four-phase process, how to choose a trade analytics partner`);
  lines.push(
    `- [Solutions](${siteConfig.url}/services): analytics (landed cost, duty exposure, shipment visibility and OTIF, customs and compliance analytics, inventory, executive control tower) plus the platforms we build`,
  );
  lines.push(
    `- [Cases](${siteConfig.url}/cases): illustrative analytics case studies across importers, customs brokers, forwarders, 3PLs, manufacturers, and ports, plus a few software builds`,
  );
  lines.push(
    `- [Docs](${siteConfig.url}/docs): methodology, engagement models, data integration, security and tenant model, KPI library, and glossary`,
  );
  lines.push('');
  lines.push('## Platforms we build');
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
