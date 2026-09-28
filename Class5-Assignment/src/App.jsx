// import React from 'react'
import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  return (
    <div className='box'>
      <h1>{num}</h1>
      <button onClick={()=>{
        setNum(num + 1)
      }} >Increase</button>

      <button onClick={()=>{
        setNum(num - 1)
      }} >Decrease</button>
      
      <button onClick={()=>{
        setNum(num + 5)
      }} >Jump by 5</button>

      <button onClick={()=>{
        setNum(0)
      }} >Reset</button>
    </div>
  )
}

export default App