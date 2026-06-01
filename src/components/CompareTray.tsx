import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../redux/store'
import { removeSpecies } from '../redux/quereSlice'
import { useNavigate } from 'react-router-dom'

const CompareTray = () => {
  const dispatch = useDispatch()
  const queue = useSelector((state: RootState) => state.queue.species)
  const navigate = useNavigate()

  return (
    <div className='flex items-center gap-4 p-4 bg-neutral-800 border border-neutral-600 rounded-xl'>
      <h2 className='text-neutral-600 text-sm whitespace-nowrap'>Comparator</h2>
      <div className='flex gap-3 flex-1'>
        {[0, 1, 2, 3].map(i => (
          <div key={i} className='flex-1'>
            {queue[i] ? (
              <div className='flex items-center justify-between border border-neutral-500 rounded-xl p-3 text-sm text-white'>
                <span className='truncate'>{queue[i].commonName}</span>
                <button onClick={() => dispatch(removeSpecies(queue[i].id))} aria-label={`Remove ${queue[i].commonName}`}>
                  <i className='ti ti-x text-neutral-400 text-medium cursor-pointer' aria-hidden="true">X</i>
                </button>
              </div>
            ) : (
              <div className='border border-dashed border-neutral-500 rounded-xl p-3 text-neutral-600 text-sm text-center'>
                + empty slot
              </div>
            )}
          </div>
        ))}
      </div>
      <button className='border border-neutral-500 hover:bg-neutral-700 transition text-white font-bold p-3 px-5 rounded-xl whitespace-nowrap'
      onClick={() => navigate('/compare')}>
        Compare →
      </button>
    </div>
  )
}

export default CompareTray