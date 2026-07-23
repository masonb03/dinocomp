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
    <div className={`bg-surface border rounded-xl overflow-hidden cursor-pointer transition-all duration-200 hover:border-acid/30 ${
      inTray ? 'border-acid/60' : 'border-white/8'
    }`}>

      {/* art area */}
      <div
        onClick={() => navigate(`/species/${species.id}`)}
        className="bg-bg-deep border-b border-white/8 p-4 cursor-pointer"
      >
        {species.imageUrl ? (
          <img
            src={species.imageUrl}
            alt={species.commonName}
            className="w-full h-48 object-contain"
          />
        ) : (
          <div className="w-full h-48 flex items-center justify-center">
            <i className="ti ti-bone text-stone text-2xl" aria-hidden="true" />
          </div>
        )}
      </div>

      {/* card body */}
      <div
        onClick={() => navigate(`/species/${species.id}`)}
        className="p-4 cursor-pointer"
      >
        <h2 className="font-display font-bold text-xl text-bone uppercase">{species.commonName}</h2>
        <p className="text-stone italic text-sm mt-1">{species.scientificName}</p>

        <div className="flex justify-between items-center mt-3">
          <p
            style={{
              color: periodColors[species.period],
              borderColor: periodColors[species.period],
              backgroundColor: periodColors[species.period] + '18',
            }}
            className="border rounded text-xs font-mono py-1 px-2 uppercase tracking-wide"
          >
            {species.period}
          </p>
          <p className="font-mono text-sm text-bone">{species.lengthM}m</p>
        </div>
      </div>

      {/* add button */}
      <button
        key={inTray ? 'in-tray' : 'not-in-tray'}
        className={`check-pop w-full p-3 border-t text-xs font-mono uppercase tracking-widest transition-all duration-200 ${
          inTray
            ? 'border-acid/40 bg-acid/10 text-acid hover:bg-acid/20'
            : 'border-white/8 text-stone hover:bg-white/5 hover:text-acid'
        }`}
        onClick={(e) => {
          e.stopPropagation();
          dispatch(inTray ? removeSpecies(species.id) : addSpecies(species));
        }}
      >
        {inTray ? '✓ In tray' : '+ Add'}
      </button>
    </div>
  )
}

export default SpeciesCard