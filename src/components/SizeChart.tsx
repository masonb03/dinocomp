import type { Species } from '../types/species'

const SizeChart = ({ queue }: { queue: Species[] }) => {
  const maxLength = Math.max(...queue.map(s => s.lengthM))
  const maxHeight = 160
  const sorted = [...queue].sort((a, b) => b.lengthM - a.lengthM)

  const valueColor = (index: number) => {
    if (index === 0) return 'text-acid'
    if (index === 1) return 'text-rust'
    return 'text-stone'
  }

  return (
    <div className="mx-2 sm:mx-4 mb-4 mt-2 p-4 sm:p-6 bg-surface border border-border rounded-2xl">
      <p className="font-mono text-[11px] text-stone uppercase tracking-widest mb-8 sm:mb-10">
        Size comparison
      </p>
      <div className="flex items-end gap-4 h-48 border-b border-border pb-3 mb-4">
        {sorted.map((s, i) => {
          const imgHeight = (s.lengthM / maxLength) * maxHeight
          return (
            <div key={s.id} className="flex flex-col items-center justify-end flex-1">
              {s.imageUrl && (
                <img
                  src={s.imageUrl}
                  alt={s.commonName}
                  style={{ height: `${imgHeight}px`, width: 'auto' }}
                  className="object-contain w-full opacity-90 hover:opacity-100 transition"
                />
              )}
              <p className="font-mono text-stone text-[10px] sm:text-xs mt-2 truncate w-full text-center uppercase tracking-wide">
                {s.commonName}
              </p>
              <p className={`font-mono text-xs sm:text-sm font-semibold ${valueColor(i)}`}>
                {s.lengthM}m
              </p>
            </div>
          )
        })}
      </div>
      <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-stone">
        <i className="ti ti-ruler" aria-hidden="true"></i>
        <span>Silhouettes scaled proportionally by length</span>
      </div>
    </div>
  )
}

export default SizeChart