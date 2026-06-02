import { useDispatch, useSelector } from 'react-redux'
import type { Species } from '../types/species'
import { periodColors } from '../types/species'
import { addSpecies, removeSpecies } from '../redux/quereSlice'
import type { RootState } from '../redux/store'
import { useNavigate} from 'react-router-dom'

type SpeciesCardProps = {
    species: Species
}

const SpeciesCard = ({species}: SpeciesCardProps) => {
    
    const queue = useSelector((state: RootState) => state.queue.species);
    const inTray = queue.some(q => q.id === species.id);
    const dispatch = useDispatch();
    const navigate = useNavigate();

  return (
      <div className={inTray ? " bg-neutral-800 border border-green-600 rounded-xl p-4 cursor-pointer" : 'bg-neutral-800 border border-neutral-600 rounded-xl p-4 cursor-pointer'}>
            <div onClick={() => navigate(`/species/${species.id}`)}>
                <div className="w-full h-56 bg-neutral-700 rounded-md flex items-center justify-center mb-4">
                    <i className="ti ti-bone text-neutral-500 text-2xl" aria-hidden="true"></i>
                </div>
                <h2 className="text-white font-bold text-lg">{species.commonName}</h2>
                <p className="text-neutral-400 italic">{species.scientificName}</p>
                <div className="flex justify-between items-center mt-2 mb-3">
                    <p  style={{
                        color: periodColors[species.period],
                        borderColor: periodColors[species.period],
                        backgroundColor: periodColors[species.period] + '20' }} 
                        className="border rounded-xl py-1 px-3 font-bold">
                        {species.period}
                    </p>
                    <p className="text-neutral-400">{species.lengthM}m</p>
                </div>
                </div>
                <button 
                className={inTray ? `flex justify-center m-auto w-full p-2 border border-neutral-500 rounded-xl cursor-pointer text-white font-bold hover:bg-neutral-900 transition duration-300` : `flex justify-center m-auto w-full p-2 border border-neutral-500 rounded-xl cursor-pointer text-neutral-400 font-bold hover:bg-neutral-700 transition duration-300`} 
                onClick={() => {
                    dispatch(inTray ? removeSpecies(species.id) : addSpecies(species));}}>
                    {inTray ? '✓In tray' : '+ Add'}
                </button>
            </div>
  )
}

export default SpeciesCard