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
  lines.push(
    `- [Software house](${siteConfig.url}/software-house): what a software house is and how Kadmoon works as a US software house`,
  );
  lines.push(
    `- [Custom software development company](${siteConfig.url}/custom-software-development-company): what a custom software development company delivers, cost, and how to choose one`,
  );
  lines.push(
    `- [SaaS development company](${siteConfig.url}/saas-development-company): building multi-tenant SaaS platforms (tenancy, billing, auth, APIs) you own`,
  );
  lines.push(
    `- [Software development company](${siteConfig.url}/software-development-company): what a software development company does, how to choose one, in-house vs offshore, cost`,
  );
  lines.push(
    `- [Mobile app development company](${siteConfig.url}/mobile-app-development-company): native and React Native apps for iOS and Android, native vs cross-platform, cost, ownership`,
  );
  lines.push(
    `- [Enterprise software development](${siteConfig.url}/enterprise-software-development): ERPs, CRMs, integrations, security and compliance, and legacy modernization at enterprise scale`,
  );
  lines.push(
    `- [Solutions](${siteConfig.url}/solutions): custom software solutions we build (ERP, CRM, warehouse management, fleet management, hospital management, school management)`,
  );
  lines.push(
    `- [Cases](${siteConfig.url}/cases): case studies our engineering team has delivered (public sector, education, logistics, healthcare, trade, enterprise)`,
  );
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
