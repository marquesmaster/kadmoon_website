import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { getAllPostMeta, getCategories } from '@/lib/blog';
import { getAllCities } from '@/lib/cities-utils';
import { services, industryPages, caseStudies } from '@/lib/content';
import { solutions } from '@/lib/solutions';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date('2026-06-01');

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    {
      url: `${base}/custom-software-development`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    { url: `${base}/software-house`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    {
      url: `${base}/custom-software-development-company`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/saas-development-company`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/software-development-company`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/mobile-app-development-company`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/enterprise-software-development`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/solutions`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/industries`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/cases`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/process`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
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
      priority: 0.6,
    })),
    ...solutions.map((s) => ({
      url: `${base}/solutions/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];

  const posts: MetadataRoute.Sitemap = getAllPostMeta().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const categories: MetadataRoute.Sitemap = getCategories().map((c) => ({
    url: `${base}/blog/category/${c.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.5,
  }));

  const cities: MetadataRoute.Sitemap = getAllCities().map((c) => ({
    url: `${base}/custom-software-development/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...posts, ...categories, ...cities];
}
