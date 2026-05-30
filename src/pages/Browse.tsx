import SpeciesCard from "../components/SpeciesCard"
import { useEffect, useState } from "react"
import type { Species } from "../types/species";
import { fetchSpecies } from "../services/speciesService";

const Browse = () => {
  const [species, setSpecies] = useState<Species[]>([]);
  
  useEffect(() => {
    fetchSpecies().then(data => setSpecies(data))
  }, [])

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
    {species.map(s => (
      <SpeciesCard key={s.id} species={s} />
    ))}
  </div>
  )
}

export default Browse