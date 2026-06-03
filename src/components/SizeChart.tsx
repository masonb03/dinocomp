import type { Species } from '../types/species'

const SizeChart = ({ queue }: { queue: Species[] }) => {
  const maxLength = Math.max(...queue.map(s => s.lengthM))
  const maxHeight = 160
  const sorted = [...queue].sort((a, b) => b.lengthM - a.lengthM)

  return (
    <div className="mx-4 mb-4 mt-2 p-4 bg-neutral-900 border border-neutral-700 rounded-xl">
      <p className="text-xs font-bold text-neutral-500 uppercase tracking-wide mb-10">Size comparison</p>
      <div className="flex items-end gap-4 h-48 border-b border-neutral-700 pb-3 mb-4">
        {sorted.map(s => {
          const imgHeight = (s.lengthM / maxLength) * maxHeight
          return (
            <div key={s.id} className="flex flex-col items-center justify-end flex-1">
              {s.imageUrl && (
                <img
                  src={s.imageUrl}
                  alt={s.commonName}
                  style={{ height: `${imgHeight}px`, width: 'auto' }}
                  className="object-contain w-full"
                />
              )}
              <p className="text-neutral-500 text-xs mt-2 truncate w-full text-center">{s.commonName}</p>
              <p className="text-neutral-400 text-xs font-bold">{s.lengthM}m</p>
            </div>
          )
        })}
      </div>
      <div className="flex items-center gap-2 text-xs text-neutral-600">
        <i className="ti ti-ruler" aria-hidden="true"></i>
        <span>Silhouettes scaled proportionally by length</span>
      </div>
    </div>
  )
}

export default SizeChart