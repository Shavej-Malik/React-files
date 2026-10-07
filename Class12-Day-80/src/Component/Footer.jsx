import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate() //Use when we want to go on courses through click on button

  return (
    <div className='footer'>
        <h3>Footer</h3>
        <button
        onClick={()=>{
            navigate('/courses')
        }}
        >Explore Courses</button>
    </div>
  )
}

export default Footer