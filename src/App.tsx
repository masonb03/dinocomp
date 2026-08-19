import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Compare from './pages/Compare'
import Browse from './pages/Browse'
import SpeciesDetail from './pages/SpeciesDetail'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {


  return (
    <div className='min-h-screen lg:h-screen'>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path='/about' element={<About />} />
          <Route path="/compare" element={<Compare />} />
          <Route path='/species/:id' element={<SpeciesDetail />}/>
        </Routes>
    </div>
  )
}

export default App
