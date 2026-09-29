// import React from 'react'
import React, { useState } from 'react';

const App = () => {

  const [name, setName] = useState('');
//we want to store submision⬇️
  const [allUsers, setAllUsers] = useState([]);


  const submitHandler=(e)=>{
    e.preventDefault()//use this to prevent of default effect
    // console.log("Form Submitted");
    // console.log(name);
    setName('')

    const newAllUsers= [...allUsers]
    newAllUsers.push(name)
    console.log(newAllUsers)
    setAllUsers(newAllUsers)
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter Your name' 
          //value={"Shavej Malik"}//This is un-changable value We cannot erase it from input Box 
//Two way handling ⬇️
          // onChange={(e)=>{//When we write into input box that are called changing
          //   // console.log("Changing.....")
          //   console.log(e.target.value)
          // }}
//Now we will interact with form with the help of react
          required
          value={name}
          onChange={(e)=>{
            setName(e.target.value)
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App