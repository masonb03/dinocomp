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
  const [selectedFilter, setSelectedFilter] = useState<SelectedFilters>
  ({
    clade: [],
    period: [],
    diet: [],
    continent: []
  });
  const [sortBy, setSortBy] = useState<'name' | 'lengthM' | 'massKg'>('name');

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

    const sortedSpecies = [...filteredSpecies].sort((a, b) => {
      if (sortBy === 'name') return a.commonName.localeCompare(b.commonName);
      if (sortBy === 'lengthM') return b.lengthM - a.lengthM;
      if (sortBy === 'massKg') return b.massKg - a.massKg;
      return 0;
    })


  const handledFilterChange = (category: FilterCategory, value: string) => {
    setSelectedFilter(prev => ({
        ...prev,
        [category]: (prev[category] as string[]).includes(value)
            ? prev[category].filter(v => v !== value)
            : [...prev[category], value]
    }));
}

  return (
    <div className="flex h-full">
      <div className="w-64 shrink-0 overflow-y-auto p-4">
        <FilterSidebar
          searchQuery={searchQuery}
          selectedFilter={selectedFilter}
          onSearchChange={setSearchQuery}
          onFilterChange={handledFilterChange}
          species={species}
        />
      </div>
      <div className='flex-1 flex flex-col overflow-hidden p-4'>
      <div className='flex justify-between items-center mb-4'>
        <span className='text-neutral-400 text-lg'>{sortedSpecies.length} species</span>
        <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as 'name' | 'lengthM' | 'massKg')}
        className='bg-neutral-800 border border-neutral-600 text-white text-lg font-semibold rounded-lg p-2 w-11/12'>
          <option value="name">Name A-Z</option>
          <option value="lengthM">Length</option>
          <option value="massKg">Mass</option>
        </select>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar:none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden p-4">
        <div className="grid grid-cols-3 gap-4">
          {sortedSpecies.map(s => (
            <SpeciesCard key={s.id} species={s} />
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Browse