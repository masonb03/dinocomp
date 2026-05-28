import { fetchSpecies } from '../services/speciesService'
import { useState, useEffect } from 'react'
import type { Species } from '../types/species'
import { periodColors } from '../types/species'

const SpeciesCard = () => {
    const [species, setSpecies] = useState<Species[]>([]);

    useEffect(() => {
        fetchSpecies().then(data => setSpecies(data))
    }, [])

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
        {species.map(s => (
            <div key={s.id} className=" bg-neutral-800 border border-neutral-600 rounded-xl p-4 cursor-pointer">
                <div className="w-full h-56 bg-neutral-700 rounded-md flex items-center justify-center mb-4">
                    <i className="ti ti-bone text-neutral-500 text-2xl" aria-hidden="true"></i>
                </div>
                <h2 className="text-white font-bold text-lg">{s.commonName}</h2>
                <p className="text-neutral-400 italic">{s.scientificName}</p>
                <div className="flex justify-between items-center mt-2 mb-3">
                    <p style={{ 
                        color: periodColors[s.period], 
                        borderColor: periodColors[s.period], 
                        backgroundColor: periodColors[s.period] + '20'}} className="text-neutral-400 border border-white rounded-xl py-1 px-3 font-bold">{s.period}</p>
                    <p className="text-neutral-400">{s.lengthM}m</p>
                </div>
                <button className=" flex justify-center m-auto w-full p-2 border border-neutral-500 rounded-xl cursor-pointer text-white font-bold hover:bg-neutral-900 transition duration-300">+ Add</button>
            </div>
        ))}
    </div>
  )
}

export default SpeciesCard