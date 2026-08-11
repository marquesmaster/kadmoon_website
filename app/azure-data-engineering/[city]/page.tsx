import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllCities, getCityBySlug } from '@/lib/cities-utils';
import { getLocalSolution } from '@/lib/local-solutions';
import { SolutionCityPage, solutionCityMetadata } from '@/components/city/SolutionCityPage';

const sol = getLocalSolution('azure-data-engineering')!;

export function generateStaticParams() {
  return getAllCities().map((c) => ({ city: c.slug }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const city = getCityBySlug(params.city);
  if (!city) return {};
  return solutionCityMetadata(sol, city);
}

export default function Page({ params }: { params: { city: string } }) {
  const city = getCityBySlug(params.city);
  if (!city) notFound();
  return <SolutionCityPage sol={sol} city={city} />;
}
