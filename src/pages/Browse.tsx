import SpeciesCard from "../components/SpeciesCard"
import { useEffect, useState } from "react"
import type { Species } from "../types/species";
import { fetchSpecies } from "../services/speciesService";
import FilterSidebar from "../components/FilterSidebar";
import SkeletonCard from "../components/SkeletonCard";
import CompareTray from '../components/CompareTray'


type FilterCategory = 'clade' | 'period' | 'diet' | 'continent';

type SelectedFilters = {
  period: Species['period'][],
  clade: Species['clade'][],
  diet: Species['diet'][],
  continent: string[]
}

const Browse = () => {
  const [loading, setLoading] = useState(true);
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
    setLoading(true);
    fetchSpecies().then(data => {
      setSpecies(data);
      setLoading(false);
    });
  }, []);

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
  <div className="h-screen flex flex-col bg-bg-deep">
    <div className="p-10 pb-4">
      <h1 className="font-display font-bold text-5xl text-bone uppercase">Browse Species</h1>
      <p className="text-lg text-stone w-1/4 mt-2">
        Forty species across periods, clades, and continents. Filter, search, and add up to four to the comparator.
      </p>
    </div>

    <div className="flex flex-1 overflow-hidden">
      <div className="w-64 shrink-0 overflow-y-auto h-full [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scrollbar-width p-4 pb-35">
        <FilterSidebar
          searchQuery={searchQuery}
          selectedFilter={selectedFilter}
          onSearchChange={setSearchQuery}
          onFilterChange={handledFilterChange}
          species={species}
        />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden p-4">
        <div className="flex items-center mb-4 gap-2">
          <span className="text-stone/50 text-lg font-mono">{sortedSpecies.length} species</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'name' | 'lengthM' | 'massKg')}
            className="bg-surface border border-neutral-600 text-white text-lg font-light font-mono rounded-lg p-2 w-80"
          >
            <option value="name">Name A-Z</option>
            <option value="lengthM">Length</option>
            <option value="massKg">Mass</option>
          </select>
        </div>

        <div className="flex-1 overflow-y-auto [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden p-4 pb-20">
          <div className="grid grid-cols-3 gap-4">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
              : sortedSpecies.map(s => <SpeciesCard key={s.id} species={s} />)}
          </div>
        </div>
      </div>
    </div>

    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-700 bg-neutral-900/95 backdrop-blur">
      <CompareTray />
    </div>
  </div>
)
}

export default Browse