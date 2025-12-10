
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'



const App = (props) => {

  return (
    <div className='text-white'>

      <Navbar/>
      <FullScreenNav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App