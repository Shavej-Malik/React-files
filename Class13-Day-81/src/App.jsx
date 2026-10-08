import React from 'react'
import Navbar from './Component/Navbar'
import { useState } from 'react'
const App = () => {

  const [theme, setTheme] = useState('light')

  const changeTheme = (newTheme)=> { // made this func to get data from Navbar(child)
    setTheme(newTheme)
  }

  return (
    <div>
      <h1>Theme is {theme}</h1>
      <Navbar changeTheme={changeTheme} />
    </div>
  )
}

export default App