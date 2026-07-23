import type { Species } from "../types/species";

type FilterCategory = 'clade' | 'period' | 'diet' | 'continent';

type FilterSidebarProps = {
  searchQuery: string;
  selectedFilter: {
    period: Species['period'][];
    clade: Species['clade'][];
    diet: Species['diet'][];
    continent: string[];
  };
  onSearchChange: (value: string) => void;
  onFilterChange: (category: FilterCategory, value: string) => void;
  species: Species[];
};

type FilterRowProps = {
  label: string;
  checked: boolean;
  count: number;
  onChange: () => void;
};

const FilterRow = ({ label, checked, count, onChange }: FilterRowProps) => (
  <label className="flex items-center gap-3 cursor-pointer group py-1">
    <div className="relative flex items-center shrink-0">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={onChange}
      />
      <div className="w-4 h-4 rounded-sm border border-white/20 bg-transparent
        peer-checked:bg-acid peer-checked:border-acid
        transition-all duration-150 flex items-center justify-center">
        {checked && (
          <svg className="w-2.5 h-2.5 text-bg-deep" viewBox="0 0 10 10" fill="none">
            <path d="M1.5 5L4 7.5L8.5 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
    </div>
    <span className={`flex-1 text-sm transition-colors duration-150 ${checked ? 'text-bone' : 'text-stone group-hover:text-bone'}`}>
      {label}
    </span>
    <span className="font-mono text-xs text-stone/50 tabular-nums">{count}</span>
  </label>
);

type FilterGroupProps = {
  title: string;
  children: React.ReactNode;
};

const FilterGroup = ({ title, children }: FilterGroupProps) => (
  <div className="mb-6">
    <div className="flex items-center gap-3 mb-3">
      <h3 className="font-mono text-xs uppercase tracking-widest text-rust shrink-0">{title}</h3>
      <div className="flex-1 h-px bg-white/8" />
    </div>
    <div className="flex flex-col gap-0.5">
      {children}
    </div>
  </div>
);

const FilterSidebar = ({ searchQuery, selectedFilter, onSearchChange, onFilterChange, species }: FilterSidebarProps) => {
  const count = (key: keyof Species, value: string) =>
    species.filter(s => s[key] === value).length;

  return (
    <div className="p-4 border-r border-white/8">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-3 mb-6 border border-white/10 rounded bg-surface text-bone text-sm font-sans placeholder:text-stone/40 focus:outline-none focus:border-acid/40 transition-colors duration-150"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <FilterGroup title="Period">
        {(['Cretaceous', 'Jurassic', 'Triassic'] as Species['period'][]).map(p => (
          <FilterRow
            key={p}
            label={p}
            checked={selectedFilter.period.includes(p)}
            count={count('period', p)}
            onChange={() => onFilterChange('period', p)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Clade">
        {(['theropod', 'sauropod', 'ornithischian'] as Species['clade'][]).map(c => (
          <FilterRow
            key={c}
            label={c.charAt(0).toUpperCase() + c.slice(1)}
            checked={selectedFilter.clade.includes(c)}
            count={count('clade', c)}
            onChange={() => onFilterChange('clade', c)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Diet">
        {(['carnivore', 'herbivore', 'omnivore'] as Species['diet'][]).map(d => (
          <FilterRow
            key={d}
            label={d.charAt(0).toUpperCase() + d.slice(1)}
            checked={selectedFilter.diet.includes(d)}
            count={count('diet', d)}
            onChange={() => onFilterChange('diet', d)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Continent">
        {(['North America', 'South America', 'Asia', 'Africa'].map(c => (
          <FilterRow
            key={c}
            label={c}
            checked={selectedFilter.continent.includes(c)}
            count={species.filter(s => s.continent === c).length}
            onChange={() => onFilterChange('continent', c)}
          />
        )))}
      </FilterGroup>
    </div>
  );
};

export default FilterSidebar;