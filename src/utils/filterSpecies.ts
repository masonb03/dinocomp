import type { Species } from '../types/species'

type SelectedFilters = {
    period: Species['period'][],
    clade: Species['clade'][],
    diet: Species['diet'][],
    continent: string[]
}

export function filterSpecies(
  species: Species[],
  filters: SelectedFilters,
  searchQuery: string
): Species[] {
  return species.filter(s => {
    const matchesSearch = s.commonName.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPeriod = filters.period.length === 0 || filters.period.includes(s.period)
    const matchesClade = filters.clade.length === 0 || filters.clade.includes(s.clade)
    const matchesDiet = filters.diet.length === 0 || filters.diet.includes(s.diet)
    const matchesContinent = filters.continent.length === 0 || filters.continent.includes(s.continent)
    return matchesSearch && matchesPeriod && matchesClade && matchesDiet && matchesContinent
  })
}