import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { Species } from '../types/species'
import { fetchSpeciesById } from '../services/speciesService'
import { useNavigate } from 'react-router-dom'
import {periodColors} from '../types/species'
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

  if (!species) return <div className='text-white p-4'>Loading...</div>;

  return (
    <div className='flex flex-col h-full'>
      <div className='flex items-center gap-4 p-4 bg-neutral-800 border border-neutral-600'>
        <button className='border border-neutral-500 hover:bg-neutral-700 transition text-white font-bold p-3 px-5 rounded-xl whitespace-nowrap cursor-pointer'
        onClick={() => navigate('/')}>
          Browse
        </button>
        <p className='text-xl font-bold text-neutral-300'>Species Details</p>
      </div>
      <div className='flex-1 p-4 flex gap-6 overflow-hidden'>
        <div className="w-1/3 h-full bg-neutral-700 rounded-md flex items-end justify-center mb-4">
          <i className="ti ti-bone text-neutral-500 text-2xl" aria-hidden="true"></i>
          <div className='bg-neutral-900 w-full flex items-center justify-center p-4 rounded-br-md rounded-bl-md'>
            <button 
            className='bg-neutral-800 text-white p-2 rounded-xl hover:bg-neutral-600 transition duration-300 border border-white cursor-pointer'
            onClick={() => { dispatch(inTray ? removeSpecies(species.id) : addSpecies(species));}}>
            {inTray ? '✓In tray' : '+ Add to comparator'}</button>
          </div>
        </div>
        <div className='w-1/2 p-4 overflow-y-auto'>
          <h1 className='text-white text-2xl font-bold'>{species.commonName}</h1>
          <p className='text-neutral-500 italic'>{species.scientificName}</p>
          <div className='flex gap-6 my-4'>
            <p className='border px-2 rounded-xl text-lg font-bold' 
            style={{
              color: periodColors[species.period],
              borderColor: periodColors[species.period],
              backgroundColor: periodColors[species.period] + '20' }} >{species.period}</p>
            <p className='border px-2 rounded-xl bg-neutral-500 text-lg font-semibold text-neutral-800'>{species.clade}</p>
            <p className='border px-2 rounded-xl bg-neutral-500 text-lg font-semibold text-neutral-800'>{species.diet}</p>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='bg-neutral-700 text-white p-2 rounded-xl'>
              <p className='text-neutral-400 '>Length</p>
              <span className='font-bold text-xl'>{species.lengthM} m</span>
            </div>
            <div className='bg-neutral-700 text-white p-2 rounded-xl'>
              <p className='text-neutral-400 '>Mass</p>
              <span className='font-bold text-xl'>{species.massKg} kg</span>
            </div>
            <div className='bg-neutral-700 text-white p-2 rounded-xl'>
              <p className='text-neutral-400 '>Continent</p>
              <span className='font-bold text-xl'>{species.continent}</span>
            </div>
            <div className='bg-neutral-700 text-white p-2 rounded-xl'>
              <p className='text-neutral-400 '>Discovered</p>
              <span className='font-bold text-xl'>{species.discoveryYear}</span>
            </div>
           </div>
           <div className='mt-6 text-neutral-500'>
            <h2>Description</h2>
            <p>{species.description}</p>
           </div>
          </div>
        </div>
      </div>
  )
}

export default SpeciesDetail