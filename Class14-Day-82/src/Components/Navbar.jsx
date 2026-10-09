import React, { useContext } from 'react'
import { UserDataContext } from '../Context/UserContext'

const Navbar = (props) => {
    // console.log(props)
    // console.log(props.children)
    const data = useContext(UserDataContext)
    // console.log(data)
  return (
    <div className='h-10 w-full bg-emerald-400'>
        <h1>This is Navbar {data} </h1>
        {/* <h1>{props.children}</h1> printed on screen */}
    </div>
  )
}

export default Navbar