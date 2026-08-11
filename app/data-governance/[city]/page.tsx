import type { Metadata } from 'next';
import { getLocalSolution } from '@/lib/local-solutions';
import { LocationView, locationMetadata, locationStaticParams } from '@/components/city/location';

const sol = getLocalSolution('data-governance')!;

export function generateStaticParams() {
  return locationStaticParams();
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  return locationMetadata(sol, params.city);
}

export default function Page({ params }: { params: { city: string } }) {
  return <LocationView sol={sol} slug={params.city} />;
}
