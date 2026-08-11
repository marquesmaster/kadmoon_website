import { getLocalSolution } from '@/lib/local-solutions';
import { SolutionCityIndex, solutionIndexMetadata } from '@/components/city/SolutionCityIndex';

const sol = getLocalSolution('copilot-consulting')!;

export const metadata = solutionIndexMetadata(sol);

export default function Page() {
  return <SolutionCityIndex sol={sol} />;
}
