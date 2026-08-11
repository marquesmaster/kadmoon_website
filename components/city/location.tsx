import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getAllCities,
  getAllStates,
  getCityBySlug,
  getStateBySlug,
} from '@/lib/cities-utils';
import type { LocalSolution } from '@/lib/local-solutions';
import { siteConfig } from '@/lib/site';
import { SolutionCityPage, solutionCityMetadata } from './SolutionCityPage';
import { SolutionStatePage } from './SolutionStatePage';

/**
 * A single `[city]` dynamic segment serves both state hubs (/power-bi/texas)
 * and city pages (/power-bi/austin-tx). State slugs are full names ('texas');
 * city slugs always carry a state suffix ('austin-tx'), so they never collide.
 */
export function locationStaticParams(): { city: string }[] {
  return [
    ...getAllStates().map((s) => ({ city: s.slug })),
    ...getAllCities().map((c) => ({ city: c.slug })),
  ];
}

export function locationMetadata(sol: LocalSolution, slug: string): Metadata {
  const state = getStateBySlug(slug);
  if (state) {
    const url = `${siteConfig.url}/${sol.slug}/${state.slug}`;
    const title = `${sol.h1} in ${state.state}`;
    return {
      title,
      description: `Kadmoon delivers ${sol.label} for companies across ${state.state}. ${sol.blurb} Get a proposal in a few business days.`,
      keywords: [
        ...sol.keywordStems.map((k) => `${k} ${state.state}`),
        `${sol.label} ${state.state}`,
      ],
      alternates: { canonical: url },
      openGraph: {
        title: `${title} | Kadmoon`,
        description: `${sol.label} for companies across ${state.state}. Built by a senior, Microsoft-certified in-house team, in your tenant.`,
        url,
        type: 'website',
      },
    };
  }
  const city = getCityBySlug(slug);
  if (city) return solutionCityMetadata(sol, city);
  return {};
}

export function LocationView({ sol, slug }: { sol: LocalSolution; slug: string }) {
  const state = getStateBySlug(slug);
  if (state) return <SolutionStatePage sol={sol} st={state} />;
  const city = getCityBySlug(slug);
  if (city) return <SolutionCityPage sol={sol} city={city} />;
  notFound();
}
