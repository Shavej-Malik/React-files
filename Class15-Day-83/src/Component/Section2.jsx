import React, { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'

const Section2 = () => {
  const data = useContext(ThemeDataContext)
  return (
    <div>
        <h1>Section2</h1>
        <h2> {data} </h2>
    </div>
  )
}

export default Section2