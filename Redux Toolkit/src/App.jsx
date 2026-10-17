import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from './Redux/Slices/CounterSlice'

const App = () => {
// we can show on screen value of Slices
  const num = useSelector((state)=>state.Counter.value)
  const theme = useSelector((state)=>state.Theme.value)
// we can change value of Slices
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{num},{theme} </h1>
      <button onClick={()=>
        dispatch(increment())
      }>Increment</button>
      <button onClick={()=>
        dispatch(decrement())
      }>Decrement</button>
    </div>
  )
}

export default App