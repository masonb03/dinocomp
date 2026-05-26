import { useEffect } from 'react'
import './App.css'
import { fetchSpecies } from './services/speciesService'

function App() {

  useEffect(() => {
    fetchSpecies().then(data => console.log(data))
  }, [])

  return (
    <div className="p-4">Dinocomp</div>
  )
}

export default App
