import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      {/* <Link to='/' >Home</Link>
      <Link to='/about' >About</Link>
      <Link to='/courses' >Courses</Link> */}

{/* Upgraded Version of Link -> NavLink */}

      <NavLink
       to='/' 
      //  className={({isActive})=>{
      //    isActive ? 'active' : 'non-active'
      //  }}
      style={({isActive})=>({
        color:isActive ? 'red' : 'white'
      })}
       >Home</NavLink>
      <NavLink
       to='/about' 
      //  className={({isActive})=>{
      //    isActive ? 'active' : 'non-active'
      //  }}
      style={({isActive})=>({
        color:isActive ? 'red' : 'white'
      })}
       >About</NavLink>
      <NavLink
       to='/courses' 
      //  className={({isActive})=>{
      //    isActive ? 'active' : 'non-active'
      //  }}
      style={({isActive})=>({
        color:isActive ? 'red' : 'white'
      })}
       >Courses</NavLink>

      {/* <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/courses">Courses</a> */}
    </div>
  )
}

export default Navbar