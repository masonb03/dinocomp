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
            <div 
            onClick={() => navigate(`/species/${species.id}`)} 
            className='bg-neutral-800 border border-neutral-700 rounded-xl p-4 mb-2 cursor-pointer transition-transform duration-200 hover:-translate-y-1 hover:border-neutral-400'>
                {species.imageUrl ? (
                <img src={species.imageUrl} alt={species.commonName} className="w-full h-60 object-contain p-2" />
                ) : (
                <div className="w-full h-40 bg-neutral-700 rounded-md flex items-center justify-center">
                    <i className="ti ti-bone text-neutral-500 text-2xl" aria-hidden="true"></i>
                </div>
                )}
                <h2 className="text-white font-bold text-lg">{species.commonName}</h2>
                <p className="text-neutral-400 italic">{species.scientificName}</p>
                <div className="flex justify-between items-center mt-2 mb-3">
                    <p  style={{
                        color: periodColors[species.period],
                        borderColor: periodColors[species.period],
                        backgroundColor: periodColors[species.period] + '20' }} 
                        className="badge-pulse border rounded-xl py-1 px-3 font-bold">
                        {species.period}
                    </p>
                    <p className="text-neutral-400">{species.lengthM}m</p>
                </div>
                </div>
                    <button
                    key={inTray ? 'in-tray' : 'not-in-tray'}
                    className={`check-pop flex justify-center m-auto w-full p-2 border rounded-xl cursor-pointer font-bold transition duration-300 ${
                        inTray 
                        ? 'border-green-600 bg-green-900 text-green-300 hover:bg-green-800' 
                        : 'border-neutral-500 text-white hover:bg-neutral-900'
                    }`}
                    onClick={(e) => {
                        e.stopPropagation()
                        dispatch(inTray ? removeSpecies(species.id) : addSpecies(species))
                    }}
                    >
                    {inTray ? '✓ In tray' : '+ Add'}
                    </button>
            </div>
  )
}

export default SpeciesCard