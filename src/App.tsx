import { useEffect } from 'react'
import './App.css'
import { fetchSpecies } from './services/speciesService'
import Navbar from './components/Navbar'
import Browse from './pages/Browse'

function App() {

  useEffect(() => {
    fetchSpecies().then(data => console.log(data))
  }, [])

  return (
    <>
    <Navbar />
    <Browse />
    </>
  )
}

export default App
