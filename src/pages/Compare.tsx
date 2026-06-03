import { clearQueue } from "../redux/quereSlice"
import type { RootState } from "../redux/store"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { highlightColors } from "../types/species"
import SizeChart from "../components/SizeChart"


const Compare = () => {

  const dispatch = useDispatch()
  const queue = useSelector((state: RootState) => state.queue.species)
  const navigate = useNavigate()


  const highlightColor = (values: number[], current: number) => {
    const sorted = [...values].sort((a, b) => b - a)
  if (current === sorted[0]) return highlightColors.best
  if (current === sorted[1]) return highlightColors.second
  return { color: 'white', borderColor: 'transparent', backgroundColor: 'transparent' }
  }

  return (
    <div className='flex flex-col h-[calc(100vh-150px)]'>
      <div className='flex items-center gap-4 p-4 bg-neutral-800 border border-neutral-600'>
        <button className='border border-neutral-500 hover:bg-neutral-700 transition text-white font-bold p-3 px-5 rounded-xl whitespace-nowrap cursor-pointer'
        onClick={() => navigate('/')}>
          Browse
        </button>
        <h1 className='text-xl font-bold text-neutral-300'>Comparing Species</h1>
        <button className='border border-neutral-500 hover:bg-neutral-700 transition text-white font-bold p-3 px-5 rounded-xl whitespace-nowrap cursor-pointer  ml-auto'
        onClick={() => dispatch(clearQueue())}>
          Clear all
        </button>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        <table className="w-full table-auto border-collapse">
          <thead className="border-b border-neutral-600">
            <tr>
              <th className="text-left p-3 text-neutral-500 w-32"></th>
              {queue.map(s => (
                <th key={s.id} className="p-3 text-center">
                  <span className="block text-white font-bold text-sm">{s.commonName}</span>
                  <span className="block text-neutral-500 text-xs italic">{s.scientificName}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="border-b border-neutral-600">
            <tr className="border-b border-neutral-600">
              <td className="p-3 text-neutral-500 text-sm font-bold">Period</td>
              {queue.map(s => (
                <td key={s.id} className="p-3 text-center text-white text-medium font-semibold">
                  <span>{s.period}</span>
                </td>
              ))}
            </tr>
            <tr className="border-b border-neutral-600">
              <td className="p-3 text-neutral-500 text-sm font-bold">Diet</td>
              {queue.map(s => (
                <td key={s.id} className="p-3 text-center text-white text-medium font-semibold">{s.diet}</td>
              ))}
            </tr>
            <tr className="border-b border-neutral-600">
              <td className="p-3 text-neutral-500 text-sm font-bold">Length</td>
              {queue.map(s => {
                const values = queue.map(q => q.lengthM)
                return (
                  <td key={s.id} className="p-3 text-center text-sm">
                    <span className='rounded-lg px-2 py-1 font-semibold' style={highlightColor(values, s.lengthM)}>
                      {s.lengthM}m
                    </span>
                  </td>
                )
              })}
            </tr>
            <tr className="border-b border-neutral-600">
              <td className="p-3 text-neutral-500 text-sm font-bold">Weight</td>
              {queue.map(s => {
                const values = queue.map(q => q.massKg)
                return (
                  <td key={s.id} className="p-3 text-center text-sm">
                    <span className='rounded-lg px-2 py-1 font-semibold' style={highlightColor(values, s.massKg)}>
                      {s.massKg}kg
                    </span>
                  </td>
                )
              })}
            </tr>
            <tr className="border-b border-neutral-600">
              <td className="p-3 text-neutral-500 text-sm font-bold">Clade</td>
              {queue.map(s => (
                <td key={s.id} className="p-3 text-center text-white text-medium font-semibold">{s.clade}</td>
              ))}
            </tr>
            <tr className="border-b border-neutral-600">
              <td className="p-3 text-neutral-500 text-sm font-bold">Continent</td>
              {queue.map(s => (
                <td key={s.id} className="p-3 text-center text-white text-medium font-semibold">{s.continent}</td>
              ))}
            </tr>
            <tr className="border-b border-neutral-600">
              <td className="p-3 text-neutral-500 text-sm font-bold">Discovered</td>
              {queue.map(s => (
                  <td key={s.id} className="p-3 text-center text-white text-medium font-semibold">
                      {s.discoveryYear}
                  </td>
              ))}
            </tr>
            <tr>
              <td className="p-3 text-neutral-500 text-sm font-bold">Description</td>
              {queue.map(s => (
                <td key={s.id} className="p-3 text-center text-white text-medium font-semibold">{s.description}</td>
              ))}
            </tr>
          </tbody>
        </table>
      <SizeChart queue={queue} />
      </div>
      <div className='flex items-center gap-4 p-4 text-sm text-neutral-500 border-t border-neutral-600'>
        <span style={highlightColors.best} className='rounded-lg px-2 py-1 font-semibold'>
          Highest value
        </span>
        <span style={highlightColors.second} className='rounded-lg px-2 py-1 font-semibold'>
          Second value
        </span>
        <span className='rounded-lg px-2 py-1 font-semibold'>
          Unhighlighted value = lowest
        </span>
      </div>
    </div>
  )
}

export default Compare