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
