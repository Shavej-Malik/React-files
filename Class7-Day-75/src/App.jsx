// import React from 'react'
import React , { useState } from 'react'
import Card from './Components/Card'

const App = () => {

  const [userName, setUserName] = useState('')
  const [userRole, setUserRole] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [userDesc, setUserDesc] = useState('')

  const [allUsers, setallUsers] = useState([])

  const submitHanlder=(e)=>{
    e.preventDefault()
    // console.log(userName) 
    // console.log(userRole) 
    // console.log(imageURL) 
    // console.log(userDesc)

    const oldUsers = [...allUsers]
    oldUsers.push({userName, userRole, imageURL, userDesc})
    console.log(oldUsers)
    setallUsers(oldUsers)

    setUserName('')
    setUserRole('')
    setImageURL('')
    setUserDesc('')
  }

  const deleteHandler = (idx)=>{
    const copyUsers = [...allUsers]
    copyUsers.splice(idx,1)
    setallUsers(copyUsers)
  }

  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e)=>{
          submitHanlder(e)
        }}
         className='px-2 py-10 flex flex-wrap justify-center'>

        <input 
        className='border-2 text-xl font-semibold rounded m-2 w-[48%] px-5 py-2' 
        type="text" 
        placeholder='Enter Your Name'
        value={userName}
        onChange={(e)=>{
          setUserName(e.target.value)
        }}
        required
        />

        <input 
        className='border-2 text-xl font-semibold rounded m-2 w-[48%] px-5 py-2' 
        type="text" 
        placeholder='Enter Role'
        value={userRole}
        onChange={(e)=>{
          setUserRole(e.target.value)
        }}
        required
        />

        <input 
        className='border-2 text-xl font-semibold rounded m-2 w-[48%] px-5 py-2' 
        type="text" 
        placeholder='Enter Image URL'
        value={imageURL}
        onChange={(e)=>{
          setImageURL(e.target.value)
        }}
        required
        />

        <input 
        className='border-2 text-xl font-semibold rounded m-2 w-[48%] px-5 py-2' 
        type="text" 
        placeholder='Enter Discription'
        value={userDesc}
        onChange={(e)=>{
          setUserDesc(e.target.value)
        }}
        required
        />

        <button className='px-20 py-2 m-5 font-semibold text-xl w-fit rounded bg-emerald-500 active:scale-95 cursor-pointer'>Create User </button>
      </form>
      <div className='px-2 py-10 gap-5 flex flex-wrap '>
        {/* <Card/>
        <Card/>
        <Card/>
        <Card/> */}
        {allUsers.map(function(elem,idx){
          return <Card key={idx} idx={idx} elem={elem} deleteHandler={deleteHandler}/>
    //       return <div key={idx} className='w-[23vw]  rounded-xl p-5 text-center flex items-center flex-col bg-white text-black'>
    //     <img className='h-30 w-30 rounded-full' src={elem.imageURL} alt="Image!"/>
    //     <h1 className='text-2xl font-bold mt-4'>{elem.userName}</h1>
    //     <h5 className='text-lg text-blue-300 font-semibold my-3'>{elem.userRole}</h5>
    //     <p className='text-small font-medium leading-tight'>{elem.userDesc}</p>

    //     <button onClick={()=>{
    //       deleteHandler(idx)
    //     }} className='px-4 py-2 mt-5 active:scale-95 cursor-pointer rounded bg-red-400 text-white font-semibold'>Remove</button>
    // </div>
        })}
        
      </div>
    </div>
  )
}

export default App