import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Random from './Pages/Random'
import NotFound from './Pages/NotFound'
import Navbar from './Component/Navbar'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div className=' h-screen bg-black'>
      {/* <h1 className='text-white underline text-3xl font-bold absolute left-1/2 top-1/2 -translate-1/2'>Hello Friends</h1> */}
      {/* <Home/> */}
      {/* <About/> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} /> {/*telling that 'Home Page' will open on '/'*/}
        <Route path='/about' element={<About/>} />
        <Route path='/about/:id' element={<Random/>}/>{/*This is Dynamic Route*/} {/*telling that 'About Page' will open on '/about'*/} 
        <Route path='/product' element={<Product/>} />{/*telling that 'Product Page' will open on '/product'*/}
        <Route path='/product/men' element={<Men/>} /> {/*This is Nested Route*/}
        <Route path='/product/women' element={<Women/>} />
        <Route path='/*' element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App