import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'

const Navbar = () => {
  const [theme, setTheme] = useContext(ThemeDataContext)
  return (
    <div className='nav'>
        <h1>Navbar </h1>
        <h2>{theme}</h2>
        <button onClick={()=>{
          if(theme === "light"){
            setTheme("Dark")
          }else{
            setTheme("light")
          }
        }}>Change Theme</button>
    </div>
  )
}

export default Navbar