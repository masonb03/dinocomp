import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { Species } from '../types/species'
import { fetchSpeciesById } from '../services/speciesService'
import { useNavigate } from 'react-router-dom'
import { periodColors } from '../types/species'
import type { RootState } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { addSpecies, removeSpecies } from '../redux/quereSlice'

const SpeciesDetail = () => {

  const { id } = useParams();
  const [species, setSpecies] = useState<Species | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queue = useSelector((state: RootState) => state.queue.species);
  const inTray = species ? queue.some(q => q.id === species.id) : false;

  useEffect(() => {
    if (id) {
      fetchSpeciesById(id).then(data => setSpecies(data));
    }
  }, [id]);

  if (!species) return <div className="text-bone p-4 font-mono text-sm">Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen bg-bg-deep lg:h-full lg:min-h-0">

      {/* Header */}
      <div className="
        flex
        items-center
        gap-4
        p-4
        sm:p-5
        border-b
        border-border
      ">
        <button
          className="
            font-mono
            text-xs
            sm:text-sm
            font-semibold
            uppercase
            tracking-wider
            border
            border-border
            hover:border-stone
            hover:bg-surface
            transition
            text-bone
            px-4
            sm:px-5
            py-2.5
            rounded-full
            whitespace-nowrap
            cursor-pointer
          "
          onClick={() => navigate('/browse')}
        >
          ← Browse
        </button>

        <p className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-stone">
          Browse / <span className="text-bone">Species Details</span>
        </p>
      </div>

      {/* Content */}
      <div className="
        flex-1
        min-h-0
        overflow-y-auto
        flex
        flex-col
        md:flex-row
        md:items-stretch
        gap-8
        sm:gap-10
        p-6
        sm:p-10
        lg:p-12
        max-w-[1600px]
        mx-auto
        w-full
      ">

        {/* Image panel */}
        <div className="
          w-full
          md:w-[44%]
          md:max-w-155
          flex-shrink-0
          flex
          flex-col
          border
          border-border
          rounded-3xl
          overflow-hidden
          bg-surface
        ">
          <div className="relative flex-1 min-h-105 flex items-center justify-center p-8 sm:p-12">
            <span className="
              absolute
              top-5
              left-5
              font-mono
              text-[10.5px]
              uppercase
              tracking-widest
              text-stone
              border
              border-border
              rounded-full
              px-3
              py-1.5
            ">
              Discovered {species.discoveryYear}
            </span>

            {species.imageUrl ? (
              <img
                src={species.imageUrl}
                alt={species.commonName}
                className="w-full h-full object-contain opacity-90"
              />
            ) : (
              <i className="ti ti-bone text-stone text-5xl" aria-hidden="true"></i>
            )}
          </div>

          <div className="p-5 sm:p-6 border-t border-border">
            <button
              className={`
                w-full
                font-mono
                text-sm
                font-semibold
                uppercase
                tracking-wider
                py-4
                rounded-full
                border
                border-acid
                transition
                cursor-pointer
                ${inTray
                  ? 'bg-acid text-bg-deep'
                  : 'bg-transparent text-acid hover:bg-acid/10'}
              `}
              onClick={() => dispatch(inTray ? removeSpecies(species.id) : addSpecies(species))}
            >
              {inTray ? '✓ In Comparator' : '+ Add to Comparator'}
            </button>
          </div>
        </div>

        {/* Detail panel */}
        <div className="flex-1 min-w-0 flex flex-col justify-center px-1 sm:px-2">
          <h1 className="font-display font-extrabold uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95] text-bone mb-2.5">
            {species.commonName}
          </h1>
          <p className="font-sans italic text-base sm:text-lg text-stone mb-8">
            {species.scientificName}
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <span
              className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider px-4 sm:px-4.5 py-2 sm:py-2.5 rounded-full border"
              style={{
                color: periodColors[species.period],
                borderColor: periodColors[species.period],
                backgroundColor: periodColors[species.period] + '20',
              }}
            >
              {species.period}
            </span>
            <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider px-4 sm:px-4.5 py-2 sm:py-2.5 rounded-full border border-border text-stone">
              {species.clade}
            </span>
            <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider px-4 sm:px-4.5 py-2 sm:py-2.5 rounded-full border border-border text-stone">
              {species.diet}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 mb-10 sm:mb-11">
            <div className="bg-surface border border-border rounded-3xl px-6 sm:px-7 py-5 sm:py-6">
              <p className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-stone mb-2.5">Length</p>
              <span className="font-mono text-2xl sm:text-3xl lg:text-4xl font-semibold text-bone">{species.lengthM} m</span>
            </div>
            <div className="bg-surface border border-border rounded-3xl px-6 sm:px-7 py-5 sm:py-6">
              <p className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-stone mb-2.5">Mass</p>
              <span className="font-mono text-2xl sm:text-3xl lg:text-4xl font-semibold text-bone">{species.massKg} kg</span>
            </div>
            <div className="bg-surface border border-border rounded-3xl px-6 sm:px-7 py-5 sm:py-6">
              <p className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-stone mb-2.5">Continent</p>
              <span className="font-mono text-2xl sm:text-3xl lg:text-4xl font-semibold text-bone">{species.continent}</span>
            </div>
            <div className="bg-surface border border-border rounded-3xl px-6 sm:px-7 py-5 sm:py-6">
              <p className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-stone mb-2.5">Discovered</p>
              <span className="font-mono text-2xl sm:text-3xl lg:text-4xl font-semibold text-bone">{species.discoveryYear}</span>
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-stone mb-3.5">Description</p>
            <p className="font-sans text-base sm:text-lg leading-relaxed text-bone max-w-[62ch]">
              {species.description}
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SpeciesDetail