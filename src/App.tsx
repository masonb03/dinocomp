import { useEffect } from 'react'
import './App.css'
import { fetchSpecies } from './services/speciesService'
import Navbar from './components/Navbar'

function App() {

  useEffect(() => {
    fetchSpecies().then(data => console.log(data))
  }, [])

  return (
    <>
    <Navbar />
    </>
  )
}

export default App
