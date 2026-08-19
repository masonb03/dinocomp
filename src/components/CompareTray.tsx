import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../redux/store'
import { removeSpecies } from '../redux/quereSlice'
import { useNavigate } from 'react-router-dom'

const CompareTray = () => {
  const dispatch = useDispatch()
  const queue = useSelector((state: RootState) => state.queue.species)
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-stretch gap-4 px-4 py-4 sm:px-6 bg-surface border-t border-white/8 md:flex-row md:items-center">
      
      <div className="flex flex-col shrink-0">
        <span className="font-mono text-xs uppercase tracking-widest text-stone">Comparator</span>
        <span className="font-mono text-xs text-stone/50 mt-0.5">Add up to 4 species</span>
      </div>

      <div className="grid grid-cols-2 gap-3 flex-1 md:grid-cols-4">
        {[0, 1, 2, 3].map(i => (
          <div key={queue[i]?.id ?? `empty-${i}`} className="min-w-0">
            {queue[i] ? (
              <div className="slot-in flex items-center justify-between border border-acid/40 bg-acid/8 rounded px-3 py-2.5">
                <span className="font-display font-bold text-sm text-bone uppercase truncate">
                  {queue[i].commonName}
                </span>
                <button
                  onClick={() => dispatch(removeSpecies(queue[i].id))}
                  aria-label={`Remove ${queue[i].commonName}`}
                  className="text-stone hover:text-bone ml-2 shrink-0 cursor-pointer bg-transparent border-none transition-colors duration-150"
                > X
                  <i className="ti ti-x text-sm" aria-hidden="true" />
                </button>
              </div>
            ) : (
              <div className="border border-dashed border-white/12 rounded px-3 py-2.5 text-stone/40 text-xs font-mono text-center">
                + empty slot
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-stretch shrink-0 gap-1 md:items-end">
        <button
          className="w-full bg-acid text-bg-deep font-mono text-xs uppercase tracking-widest font-bold px-6 py-3 rounded transition-all duration-200 hover:bg-acid/90 hover:-translate-y-0.5 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:translate-y-0 md:w-auto"
          onClick={() => navigate('/compare')}
          disabled={queue.length < 2}
        >
          Compare →
        </button>
        {queue.length < 2 && (
          <span className="font-mono text-xs text-stone/40">Select at least 2 species</span>
        )}
      </div>

    </div>
  )
}

export default CompareTray