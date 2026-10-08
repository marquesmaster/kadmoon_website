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
    `Kadmoon is a US software company focused entirely on foreign trade, based in ${siteConfig.city}, ${siteConfig.regionCode}. We build the software that cross-border operations run on: trade ERP, CRM, inventory and warehouse management, customs and compliance (HTS classification, denied-party screening, duty and landed cost, ACE-ready filing), computer vision for vessel and port security, and supply-chain and logistics software. We offer ready platforms and custom development, with integrations to carriers, brokers, marketplaces, and ACE. Senior US-based team; you own the software and the data.`,
  );
  lines.push('');
  lines.push('## Key pages');
  lines.push(`- [Home](${siteConfig.url}/): positioning, what we build, four-phase process, how to choose a trade software partner`);
  lines.push(
    `- [Solutions](${siteConfig.url}/services): trade ERP, customs and compliance, inventory and WMS, vessel and port security vision, supply chain and logistics, trade CRM, custom development, and integrations`,
  );
  lines.push(
    `- [Work](${siteConfig.url}/cases): illustrative case studies of trade software we build (customs filing platform, trade ERP with landed cost, vessel security vision, shipment visibility)`,
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
