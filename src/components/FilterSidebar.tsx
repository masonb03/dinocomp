import type {Species} from "../types/species";

type FilterCategory = 'clade' | 'period' | 'diet' | 'continent';

type FilterSidebarProps = {
    searchQuery: string,
    selectedFilter: {
        period: Species['period'][],
        clade: Species['clade'][],
        diet: Species['diet'][],
        continent: string[]
    }
    onSearchChange: (value: string) => void;
    onFilterChange: (category: FilterCategory, value: string) => void
}

const FilterSidebar = ({ searchQuery, selectedFilter, onSearchChange, onFilterChange }: FilterSidebarProps) => {

    return (
    <div className="bg-neutral-800 p-4 rounded-xl">
        <input 
        type="text" 
        placeholder="Search..." 
        className="w-full p-2 mb-4 border border-neutral-600 rounded-xl bg-neutral-800 text-white" 
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        />
        <div className="mb-4">
            <h3 className="text-neutral-500 font-bold mb-2">Period</h3>
            <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                    <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={selectedFilter.period.includes("Cretaceous")}
                    onChange={() => onFilterChange("period", "Cretaceous")}
                    />
                    <span className="text-white">Cretaceous</span>
                </label>
                <label className="flex items-center gap-2">
                    <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={selectedFilter.period.includes("Jurassic")}
                    onChange={() => onFilterChange("period", "Jurassic")}
                    />
                    <span className="text-white">Jurassic</span>
                </label>
                <label className="flex items-center gap-2">
                    <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={selectedFilter.period.includes("Triassic")}
                    onChange={() => onFilterChange("period", "Triassic")}
                    />
                    <span className="text-white">Triassic</span>
                </label>
            </div>
        </div>
        <div className="mb-4">
            <h3 className="text-neutral-500 font-bold mb-2">Clade</h3>
            <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                    <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={selectedFilter.clade.includes("theropod")}
                    onChange={() => onFilterChange("clade", "theropod")}
                    />
                    <span className="text-white">Theropod</span>
                </label>
                <label className="flex items-center gap-2">
                    <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={selectedFilter.clade.includes("sauropod")}
                    onChange={() => onFilterChange("clade", "sauropod")}
                    />
                    <span className="text-white">Sauropod</span>
                </label>
                <label className="flex items-center gap-2">
                    <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={selectedFilter.clade.includes("ornithischian")}
                    onChange={() => onFilterChange("clade", "ornithischian")}
                    />
                    <span className="text-white">Ornithichian</span>
                </label>
            </div>
        </div>
        <div className='mb-4'>
            <h3 className="text-neutral-500 font-bold mb-2">Diet</h3>
            <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                    <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={selectedFilter.diet.includes("carnivore")}
                    onChange={() => onFilterChange("diet", "carnivore")}
                    />
                    <span className="text-white">Carnivore</span>
                </label>
                <label className="flex items-center gap-2">
                    <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={selectedFilter.diet.includes("herbivore")}
                    onChange={() => onFilterChange("diet", "herbivore")}
                    />
                    <span className="text-white">Herbivore</span>
                </label>
                <label className="flex items-center gap-2">
                    <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={selectedFilter.diet.includes("omnivore")}
                    onChange={() => onFilterChange("diet", "omnivore")}
                    />
                    <span className="text-white">Omnivore</span>
                </label>
            </div>
        </div>
        <div className='mb-4'>
            <h3 className="text-neutral-500 font-bold mb-2">Continent</h3>
            <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                    <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={selectedFilter.continent.includes("North America")}
                    onChange={() => onFilterChange("continent", "North America")}
                    />
                    <span className="text-white">North America</span>
                </label>
                <label className="flex items-center gap-2">
                    <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={selectedFilter.continent.includes("South America")}
                    onChange={() => onFilterChange("continent", "South America")}
                    />
                    <span className="text-white">South America</span>
                </label>
                <label className="flex items-center gap-2">
                    <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={selectedFilter.continent.includes("Asia")}
                    onChange={() => onFilterChange("continent", "Asia")}
                    />
                    <span className="text-white">Asia</span>
                </label>
                <label className="flex items-center gap-2">
                    <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={selectedFilter.continent.includes("Africa")}
                    onChange={() => onFilterChange("continent", "Africa")}
                    />
                    <span className="text-white">Africa</span>
                </label>
            </div>
        </div>
    </div>
  )
}

export default FilterSidebar