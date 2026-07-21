import { siteConfig } from '@/lib/site';
import { getAllPostMeta, getCategories } from '@/lib/blog';
import { getAllCities } from '@/lib/cities-utils';

export const dynamic = 'force-static';

// llms.txt: a plain-text map of the site for LLMs / AI search engines.
// Spec: https://llmstxt.org/
export function GET() {
  const posts = getAllPostMeta();
  const categories = getCategories();
  const cities = getAllCities();

  const lines: string[] = [];
  lines.push(`# ${siteConfig.legalName}`);
  lines.push('');
  lines.push(`> ${siteConfig.description}`);
  lines.push('');
  lines.push(
    `Kadmoon is a US custom-software engineering firm based in ${siteConfig.city}, ${siteConfig.regionCode}. It builds bespoke enterprise systems (ERP/CRM), SaaS platforms, mobile apps, integrations and APIs, data and AI, and legacy modernization. Flagship practice: Trade & Supply Chain software (US Customs/CBP/ACE, logistics, import/export, landed cost). Senior in-house team, two-week sprints, measurable acceptance criteria, and the client owns 100% of the IP.`,
  );
  lines.push('');
  lines.push('## Key pages');
  lines.push(`- [Home](${siteConfig.url}/): positioning, capabilities, process, how to choose a partner`);
  lines.push(`- [Blog](${siteConfig.url}/blog): ${posts.length} in-depth, data-backed articles`);
  lines.push(
    `- [Locations](${siteConfig.url}/custom-software-development): custom software development across ${cities.length}+ US cities`,
  );
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
