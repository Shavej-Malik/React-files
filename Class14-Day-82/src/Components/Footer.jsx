import React, { useContext } from 'react'
import { UserDataContext } from '../Context/UserContext'

const Footer = () => {

    const data = useContext(UserDataContext)

  return (
    <div className='absolute bottom-0 w-screen h-10 bg-blue-400'>
        <h1>This is Footer {data} </h1>
    </div>
  )
}

export default Footer