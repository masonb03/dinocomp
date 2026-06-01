import { useEffect } from 'react'
import './App.css'
import { fetchSpecies } from './services/speciesService'
import Navbar from './components/Navbar'
import About from './pages/About'
import Compare from './pages/Compare'
import Browse from './pages/Browse'
import CompareTray from './components/CompareTray'
import { Route, Routes } from 'react-router-dom'

function App() {

  useEffect(() => {
    fetchSpecies().then(data => console.log(data))
  }, [])

  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='flex-1 overflow-hidden'>
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path='/about' element={<About />} />
          <Route path="/compare" element={<Compare />} />
        </Routes>
      </div>
      <CompareTray />
    </div>
  )
}

export default App
