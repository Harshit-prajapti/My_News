
import './App.css'
import Data from './components/Data'
import About from './components/About'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
function App() {

  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Data/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
