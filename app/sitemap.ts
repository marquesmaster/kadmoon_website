import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { getAllPostMeta, getCategories } from '@/lib/blog';
import { services, industryPages, caseStudies } from '@/lib/content';
import { caseDashboards } from '@/lib/cases/dashboards';
import { getAllCities, getAllStates } from '@/lib/cities-utils';
import { localSolutions } from '@/lib/local-solutions';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date('2026-06-01');

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/tableau-to-power-bi-migration`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/qlik-to-power-bi-migration`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/cognos-to-power-bi-migration`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/synapse-to-fabric-migration`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/industries`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/cases`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/dashboards`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/process`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...industryPages.map((i) => ({
      url: `${base}/industries/${i.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...caseStudies.map((c) => ({
      url: `${base}/cases/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...caseDashboards.map((d) => ({
      url: `${base}/dashboards#${d.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ];

  const posts: MetadataRoute.Sitemap = getAllPostMeta().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const categories: MetadataRoute.Sitemap = getCategories().map((c) => ({
    url: `${base}/blog/category/${c.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.5,
  }));

  // Local solution hubs (one per solution), the per-state hubs, and the full
  // solution x city matrix.
  const allCities = getAllCities();
  const allStates = getAllStates();
  const solutionHubs: MetadataRoute.Sitemap = localSolutions.map((s) => ({
    url: `${base}/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
  const stateHubs: MetadataRoute.Sitemap = localSolutions.flatMap((s) =>
    allStates.map((st) => ({
      url: `${base}/${s.slug}/${st.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  );
  const cities: MetadataRoute.Sitemap = localSolutions.flatMap((s) =>
    allCities.map((c) => ({
      url: `${base}/${s.slug}/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  );

  return [...staticRoutes, ...solutionHubs, ...stateHubs, ...posts, ...categories, ...cities];
}
