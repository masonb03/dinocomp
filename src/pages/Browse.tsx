import SpeciesCard from "../components/SpeciesCard";
import { useEffect, useState } from "react";
import type { Species } from "../types/species";
import { fetchSpecies } from "../services/speciesService";
import FilterSidebar from "../components/FilterSidebar";
import SkeletonCard from "../components/SkeletonCard";
import CompareTray from "../components/CompareTray";

type FilterCategory = 'clade' | 'period' | 'diet' | 'continent';

type SelectedFilters = {
  period: Species['period'][];
  clade: Species['clade'][];
  diet: Species['diet'][];
  continent: string[];
};

const Browse = () => {
  const [loading, setLoading] = useState(true);
  const [species, setSpecies] = useState<Species[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [selectedFilter, setSelectedFilter] =
    useState<SelectedFilters>({
      clade: [],
      period: [],
      diet: [],
      continent: []
    });

  const [sortBy, setSortBy] =
    useState<'name' | 'lengthM' | 'massKg'>('name');

  useEffect(() => {
    setLoading(true);

    fetchSpecies().then(data => {
      setSpecies(data);
      setLoading(false);
    });
  }, []);

  const filteredSpecies = species.filter(s => {
    const matchesSearch =
      s.commonName
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    const matchesPeriod =
      selectedFilter.period.length === 0 ||
      selectedFilter.period.includes(s.period);

    const matchesClade =
      selectedFilter.clade.length === 0 ||
      selectedFilter.clade.includes(s.clade);

    const matchesDiet =
      selectedFilter.diet.length === 0 ||
      selectedFilter.diet.includes(s.diet);

    const matchesContinent =
      selectedFilter.continent.length === 0 ||
      selectedFilter.continent.includes(s.continent);

    return (
      matchesSearch &&
      matchesPeriod &&
      matchesClade &&
      matchesDiet &&
      matchesContinent
    );
  });

  const sortedSpecies = [...filteredSpecies].sort((a, b) => {
    if (sortBy === 'name') {
      return a.commonName.localeCompare(b.commonName);
    }

    if (sortBy === 'lengthM') {
      return b.lengthM - a.lengthM;
    }

    if (sortBy === 'massKg') {
      return b.massKg - a.massKg;
    }

    return 0;
  });

  const handledFilterChange = (
    category: FilterCategory,
    value: string
  ) => {
    setSelectedFilter(prev => ({
      ...prev,
      [category]: (prev[category] as string[]).includes(value)
        ? prev[category].filter(v => v !== value)
        : [...prev[category], value]
    }));
  };

  return (
  <div className="min-h-screen flex flex-col bg-bg-deep">

    {/* Header */}
    <div className="px-4 sm:px-6 lg:px-10 pt-6 sm:pt-8 lg:pt-10 pb-4">
      <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-bone uppercase">
        Browse Species
      </h1>

      <p className="text-sm sm:text-base lg:text-lg text-stone max-w-2xl mt-2">
        Forty species across periods, clades, and continents. Filter, search,
        and add up to four to the comparator.
      </p>
    </div>

    {/* Content */}
    <div className="flex flex-col lg:flex-row">

      {/* Sidebar */}
      <aside className="w-full lg:w-64 lg:shrink-0 p-4">
        <FilterSidebar
          searchQuery={searchQuery}
          selectedFilter={selectedFilter}
          onSearchChange={setSearchQuery}
          onFilterChange={handledFilterChange}
          species={species}
        />
      </aside>

      {/* Main */}
      <main className="flex-1 min-w-0 p-4 sm:p-5 lg:p-4">

        {/* Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-3">
          <span className="text-stone/50 text-base sm:text-lg font-mono">
            {sortedSpecies.length} species
          </span>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value as 'name' | 'lengthM' | 'massKg'
              )
            }
            className="
              bg-surface
              border border-neutral-600
              text-white
              text-base sm:text-lg
              font-light font-mono
              rounded-lg
              p-2
              w-full sm:w-64 lg:w-80
            "
          >
            <option value="name">Name A-Z</option>
            <option value="lengthM">Length</option>
            <option value="massKg">Mass</option>
          </select>
        </div>

        {/* Species */}
        <div className="p-0 sm:p-2 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))
              : sortedSpecies.map((s) => (
                  <SpeciesCard key={s.id} species={s} />
                ))}
          </div>
        </div>

      </main>
    </div>

    {/* Compare Tray */}
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-700 bg-neutral-900/95 backdrop-blur">
      <CompareTray />
    </div>

  </div>
);
};

export default Browse;