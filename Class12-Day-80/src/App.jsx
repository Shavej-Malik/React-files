import React from 'react'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Courses from './Pages/Courses'
import Koder from './Pages/Koder'
import Kodex from './Pages/Kodex'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar/>
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/courses' element={<Courses/>}>
          <Route path='koder' element={<Koder/>} />
          <Route path='kodex' element={<Kodex/>} />
        </Route>
      </Routes>
      <Footer/>
    </div>
    
  )
}

export default App