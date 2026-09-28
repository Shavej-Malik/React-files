// import React from 'react'
import React, { useState } from 'react'

const App = () => {

  // const [king, setking] = useState("Rahul")
  // const [queen, setqueen] = useState("Shreya")

  // const changeKing=()=>{
  //   console.log("btn clicked")
  //   setking("Vicky")
  // }
  // const changeQueen=()=>{
  //   console.log("btn clicked")
  //   setqueen("Mia")
  // }

  // const arr=['sarthak','hars','ajay','ankit','hitesh']
  // const [num, setNum] = useState(0)

  const [marks, setMarks] = useState([60,65,89,12,29])

  function graceMarks(){
    const newMarks=marks.map(function(elem){
      return elem + 5
    })
    setMarks(newMarks)
  }
  
  return (
    <div className='box'>
      {/* <h1>{king} X {queen}</h1>
      <button onClick={changeKing} >Change king</button>
      <button onClick={changeQueen} >Change queen</button> */}

      {/* <h1>{arr[num]}</h1>
      <button onClick={()=>{
        if(num<arr.length-1)
          setNum(num+1)
      }}>click Me</button> */}

        {marks.map(function(elem,idx){
          return <h1 key={idx} >Student {idx+1} = {elem} ({elem>33?'Pass':'Fail'})</h1>
        })}
      <button onClick={graceMarks}>Give them grace</button>
    </div>
  )
}

export default App