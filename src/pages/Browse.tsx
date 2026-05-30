import SpeciesCard from "../components/SpeciesCard"
import { useEffect, useState } from "react"
import type { Species } from "../types/species";
import { fetchSpecies } from "../services/speciesService";
import FilterSidebar from "../components/FilterSidebar";

type FilterCategory = 'clade' | 'period' | 'diet' | 'continent';

type SelectedFilters = {
  period: Species['period'][],
  clade: Species['clade'][],
  diet: Species['diet'][],
  continent: string[]
}

const Browse = () => {
  const [species, setSpecies] = useState<Species[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<SelectedFilters>({
    clade: [],
    period: [],
    diet: [],
    continent: []
  });

  useEffect(() => {
    fetchSpecies().then(data => setSpecies(data))
  }, [])

  const filteredSpecies = species.filter(s => {
    const matchesSearch = s.commonName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPeriod = selectedFilter.period.length === 0 || selectedFilter.period.includes(s.period);
    const matchesClade = selectedFilter.clade.length === 0 || selectedFilter.clade.includes(s.clade);
    const matchesDiet = selectedFilter.diet.length === 0 || selectedFilter.diet.includes(s.diet);
    const matchesContinent = selectedFilter.continent.length === 0 || selectedFilter.continent.includes(s.continent);

    return matchesSearch && matchesPeriod && matchesClade && matchesDiet && matchesContinent;
  });


  const handledFilterChange = (category: FilterCategory, value: string) => {
    setSelectedFilter(prev => ({
        ...prev,
        [category]: prev[category].includes(value)
            ? prev[category].filter(v => v !== value)
            : [...prev[category], value]
    }));
}

  return (
    <div className="flex h-[calc(100vh-60px)]">
      <div className="w-48 flex-shrink-0 overflow-y-auto p-4">
        <FilterSidebar
          searchQuery={searchQuery}
          selectedFilter={selectedFilter}
          onSearchChange={setSearchQuery}
          onFilterChange={handledFilterChange}
        />
      </div>
      <div className="flex-1 overflow-y-auto-hidden p-4">
        <div className="grid grid-cols-3 gap-4">
          {filteredSpecies.map(s => (
            <SpeciesCard key={s.id} species={s} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Browse