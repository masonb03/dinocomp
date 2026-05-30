import type { Species } from '../types/species'
import { periodColors } from '../types/species'

type SpeciesCardProps = {
    species: Species
}

const SpeciesCard = ({species}: SpeciesCardProps) => {

  return (
            <div className=" bg-neutral-800 border border-neutral-600 rounded-xl p-4 cursor-pointer">
                <div className="w-full h-56 bg-neutral-700 rounded-md flex items-center justify-center mb-4">
                    <i className="ti ti-bone text-neutral-500 text-2xl" aria-hidden="true"></i>
                </div>
                <h2 className="text-white font-bold text-lg">{species.commonName}</h2>
                <p className="text-neutral-400 italic">{species.scientificName}</p>
                <div className="flex justify-between items-center mt-2 mb-3">
                    <p className="text-neutral-400 border border-white rounded-xl py-1 px-3 font-bold">{species.period}</p>
                    <p className="text-neutral-400">{species.lengthM}m</p>
                </div>
                <button className=" flex justify-center m-auto w-full p-2 border border-neutral-500 rounded-xl cursor-pointer text-white font-bold hover:bg-neutral-900 transition duration-300">+ Add</button>
            </div>
  )
}

export default SpeciesCard