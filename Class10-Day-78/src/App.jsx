// import React from 'react'
import React, { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [title, settitle] = useState('')

  const [counter, setcounter] = useState(0)

  useEffect(function(){//this will run as a side effect. title change then run and counter increase then run 
    console.log("useEffect running.......")
  },[])//dependency array -> to using useEffect will not run automatically.if we put [counter] then useEfect will run when counter increase and if we put [title] then useEfect will run when write into input

  return (
    <div>
      <input type="text" placeholder='Enter Your Name' 
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />
      <h1>{counter}</h1>
      <button onClick={()=>{
        setcounter(counter+1)
      }}>Increase</button>
    </div>
  )
}
export default App