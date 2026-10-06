import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {

  const param = useParams()
  console.log(param)

  return (
    <div className=' h-screen bg-black'>
      <h1 className='text-white underline text-3xl font-bold absolute /*can used (fixed) instead of absolute*/ left-[50vw]  -translate-x-1/2'>AboutPage</h1>
    </div>
  )
}

export default About