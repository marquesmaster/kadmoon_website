import { getLocalSolution } from '@/lib/local-solutions';
import { SolutionCityIndex, solutionIndexMetadata } from '@/components/city/SolutionCityIndex';

const sol = getLocalSolution('power-platform')!;

export const metadata = solutionIndexMetadata(sol);

export default function Page() {
  return <SolutionCityIndex sol={sol} />;
}
