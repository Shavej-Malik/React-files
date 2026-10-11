import React from 'react'
import MainRoutes from "./Routes/MainRoutes"
import Navbar from "./Components/Navbar"
const App = () => {
  return (
    <div className="px-5 py-5 w-screen h-screen bg-gray-800 text-white">
      <Navbar/>
      <MainRoutes/>
    </div>
  )
}

export default App