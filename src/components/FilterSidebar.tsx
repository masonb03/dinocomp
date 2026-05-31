import type { Species } from "../types/species";

type FilterCategory = 'clade' | 'period' | 'diet' | 'continent';

type FilterSidebarProps = {
    searchQuery: string,
    selectedFilter: {
        period: Species['period'][],
        clade: Species['clade'][],
        diet: Species['diet'][],
        continent: string[],
    }
    onSearchChange: (value: string) => void;
    onFilterChange: (category: FilterCategory, value: string) => void
    species: Species[]
}

const FilterSidebar = ({ searchQuery, selectedFilter, onSearchChange, onFilterChange, species }: FilterSidebarProps) => {

    return (
    <div className="bg-neutral-800 p-4 rounded-xl">
        <input 
        type="text" 
        placeholder="Search..." 
        className="w-full p-3 mb-4 border border-neutral-600 rounded-xl bg-neutral-800 text-white" 
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        />
        <div className="mb-4">
            <h3 className="text-neutral-500 font-bold mb-2">Period</h3>
            <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 w-full">
                    <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={selectedFilter.period.includes("Cretaceous")}
                    onChange={() => onFilterChange("period", "Cretaceous")}
                    />
                    <span className="text-white flex-1">Cretaceous</span>
                    <span className=' bg-neutral-600 rounded-full px-2 py-1 text-sm'>{species.filter(s => s.period === "Cretaceous").length}</span>
                </label>
                <label className="flex items-center gap-2 w-full">
                    <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={selectedFilter.period.includes("Jurassic")}
                    onChange={() => onFilterChange("period", "Jurassic")}
                    />
                    <span className="text-white flex-1">Jurassic</span>
                    <span className='bg-neutral-600 rounded-full px-2 py-1 text-sm'>{species.filter(s => s.period === "Jurassic").length}</span>
                </label>
                <label className="flex items-center gap-2 w-full">
                    <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={selectedFilter.period.includes("Triassic")}
                    onChange={() => onFilterChange("period", "Triassic")}
                    />
                    <span className="text-white flex-1">Triassic</span>
                    <span className='bg-neutral-600 rounded-full px-2 py-1 text-sm'>{species.filter(s => s.period === "Triassic").length}</span>
                </label>
            </div>
        </div>
        <div className="mb-4">
            <h3 className="text-neutral-500 font-bold mb-2">Clade</h3>
            <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 w-full">
                    <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={selectedFilter.clade.includes("theropod")}
                    onChange={() => onFilterChange("clade", "theropod")}
                    />
                    <span className="text-white flex-1">Theropod</span>
                    <span className='bg-neutral-600 rounded-full px-2 py-1 text-sm'>{species.filter(s => s.clade === "theropod").length}</span>
                </label>
                <label className="flex items-center gap-2 w-full">
                    <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={selectedFilter.clade.includes("sauropod")}
                    onChange={() => onFilterChange("clade", "sauropod")}
                    />
                    <span className="text-white flex-1">Sauropod</span>
                    <span className='bg-neutral-600 rounded-full px-2 py-1 text-sm'>{species.filter(s => s.clade === "sauropod").length}</span>
                </label>
                <label className="flex items-center gap-2 w-full">
                    <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={selectedFilter.clade.includes("ornithischian")}
                    onChange={() => onFilterChange("clade", "ornithischian")}
                    />
                    <span className="text-white flex-1">Ornithichian</span>
                    <span className='bg-neutral-600 rounded-full px-2 py-1 text-sm'>{species.filter(s => s.clade === "ornithischian").length}</span>
                </label>
            </div>
        </div>
        <div className='mb-4'>
            <h3 className="text-neutral-500 font-bold mb-2">Diet</h3>
            <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 w-full">
                    <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={selectedFilter.diet.includes("carnivore")}
                    onChange={() => onFilterChange("diet", "carnivore")}
                    />
                    <span className="text-white flex-1">Carnivore</span>
                    <span className='bg-neutral-600 rounded-full px-2 py-1 text-sm'>{species.filter(s => s.diet === "carnivore").length}</span>
                </label>
                <label className="flex items-center gap-2 w-full">
                    <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={selectedFilter.diet.includes("herbivore")}
                    onChange={() => onFilterChange("diet", "herbivore")}
                    />
                    <span className="text-white flex-1">Herbivore</span>
                    <span className='bg-neutral-600 rounded-full px-2 py-1 text-sm'>{species.filter(s => s.diet === "herbivore").length}</span>
                </label>
                <label className="flex items-center gap-2 w-full">
                    <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={selectedFilter.diet.includes("omnivore")}
                    onChange={() => onFilterChange("diet", "omnivore")}
                    />
                    <span className="text-white flex-1">Omnivore</span>
                    <span className='bg-neutral-600 rounded-full px-2 py-1 text-sm'>{species.filter(s => s.diet === "omnivore").length}</span>
                </label>
            </div>
        </div>
        <div className='mb-4'>
            <h3 className="text-neutral-500 font-bold mb-2">Continent</h3>
            <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 w-full">
                    <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={selectedFilter.continent.includes("North America")}
                    onChange={() => onFilterChange("continent", "North America")}
                    />
                    <span className="text-white flex-1">North America</span>
                    <span className='bg-neutral-600 rounded-full px-2 py-1 text-sm'>{species.filter(s => s.continent === "North America").length}</span>
                </label>
                <label className="flex items-center gap-2 w-full">
                    <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={selectedFilter.continent.includes("South America")}
                    onChange={() => onFilterChange("continent", "South America")}
                    />
                    <span className="text-white flex-1">South America</span>
                    <span className='bg-neutral-600 rounded-full px-2 py-1 text-sm'>{species.filter(s => s.continent === "South America").length}</span>
                </label>
                <label className="flex items-center gap-2 w-full">
                    <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={selectedFilter.continent.includes("Asia")}
                    onChange={() => onFilterChange("continent", "Asia")}
                    />
                    <span className="text-white flex-1">Asia</span>
                    <span className='bg-neutral-600 rounded-full px-2 py-1 text-sm'>{species.filter(s => s.continent === "Asia").length}</span>
                </label>
                <label className="flex items-center gap-2 w-full">
                    <input 
                    type="checkbox" 
                    className="form-checkbox" 
                    checked={selectedFilter.continent.includes("Africa")}
                    onChange={() => onFilterChange("continent", "Africa")}
                    />
                    <span className="text-white flex-1">Africa</span>
                    <span className='bg-neutral-600 rounded-full px-2 py-1 text-sm'>{species.filter(s => s.continent === "Africa").length}</span>
                </label>
            </div>
        </div>
    </div>
  )
}

export default FilterSidebar