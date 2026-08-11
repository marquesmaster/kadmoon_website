import { cities, type City } from './cities';

export type { City };

export function getAllCities(): City[] {
  return cities;
}

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

/**
 * Nearby cities for internal linking: same region, closest by economic rank,
 * excluding the city itself.
 */
export function getNearbyCities(city: City, limit = 6): City[] {
  return cities
    .filter((c) => c.slug !== city.slug && c.region === city.region)
    .sort((a, b) => Math.abs(a.rank - city.rank) - Math.abs(b.rank - city.rank))
    .slice(0, limit);
}

export function citiesByState(): { state: string; stateAbbr: string; cities: City[] }[] {
  const map = new Map<string, City[]>();
  for (const c of cities) {
    const arr = map.get(c.state) ?? [];
    arr.push(c);
    map.set(c.state, arr);
  }
  return [...map.entries()]
    .map(([state, list]) => ({
      state,
      stateAbbr: list[0].stateAbbr,
      cities: list.sort((a, b) => a.rank - b.rank),
    }))
    .sort((a, b) => a.state.localeCompare(b.state));
}

export type StateGroup = {
  state: string;
  stateAbbr: string;
  slug: string;
  cities: City[];
  region: City['region'];
  population: number;
  industries: string[];
};

function slugifyState(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

/** States that have at least `min` cities, so a state hub is not near-empty. */
export function getAllStates(min = 2): StateGroup[] {
  return citiesByState()
    .filter((s) => s.cities.length >= min)
    .map((s) => {
      // The most common industries across the state's cities, most frequent first.
      const counts = new Map<string, number>();
      for (const c of s.cities) {
        for (const ind of c.industries) counts.set(ind, (counts.get(ind) ?? 0) + 1);
      }
      const industries = [...counts.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([ind]) => ind);
      return {
        state: s.state,
        stateAbbr: s.stateAbbr,
        slug: slugifyState(s.state),
        cities: s.cities,
        region: s.cities[0].region,
        population: s.cities.reduce((sum, c) => sum + c.population, 0),
        industries,
      };
    });
}

export function getStateBySlug(slug: string): StateGroup | undefined {
  return getAllStates().find((s) => s.slug === slug);
}

export function citiesByRegion(): { region: string; cities: City[] }[] {
  const order = ['Northeast', 'Midwest', 'South', 'West'];
  const map = new Map<string, City[]>();
  for (const c of cities) {
    const arr = map.get(c.region) ?? [];
    arr.push(c);
    map.set(c.region, arr);
  }
  return order
    .filter((r) => map.has(r))
    .map((region) => ({
      region,
      cities: (map.get(region) ?? []).sort((a, b) => a.rank - b.rank),
    }));
}
