import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex items-center justify-center gap-x-10 font-bold text-1xl mb-5'>
        <NavLink className={(e)=>e.isActive && "text-red-300" || ""} to="/" >Home</NavLink>
        <NavLink className={(e)=>e.isActive && "text-red-300" || ""} to="/recipes" >Recipes</NavLink>
        <NavLink className={(e)=>e.isActive && "text-red-300" || ""} to="/about" >About</NavLink>
        <NavLink className={(e)=>`px-2 py-0.5 bg-amber-300 rounded-xl ${e.isActive && "text-red-300" || ""}`} to="/create-recipes" >Create Recipes</NavLink>
    </div>
  )
}

export default Navbar