import React from 'react'

const Card = (props) => {
  return (
       <div className='w-[23vw]  rounded-xl p-5 text-center flex items-center flex-col bg-white text-black'>
        <img className='h-30 w-30 rounded-full' src={props.elem.imageURL} alt="Image!"/>
        <h1 className='text-2xl font-bold mt-4'>{props.elem.userName}</h1>
        <h5 className='text-lg text-blue-300 font-semibold my-3'>{props.elem.userRole}</h5>
        <p className='text-small font-medium leading-tight'>{props.elem.userDesc}</p>

        <button onClick={()=>{
          props.deleteHandler(props.idx)
        }} className='px-4 py-2 mt-5 active:scale-95 cursor-pointer rounded bg-red-400 text-white font-semibold'>Remove</button>
    </div>



    // <div className='w-[23vw]  rounded-xl p-5 text-center flex items-center flex-col bg-white text-black'>
    //     <img className='h-30 w-30 rounded-full object-center object-cover' src="https://i.pinimg.com/736x/6f/4e/0e/6f4e0e44170b49d1f0aae0eca18e2a05.jpg" alt="Image!"/>
    //     <h1 className='text-2xl font-bold mt-4'>Shavej Malik</h1>
    //     <h5 className='text-lg text-blue-300 font-semibold my-3'>Developer</h5>
    //     <p className='text-small font-medium leading-tight'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, corporis?</p>

    //     <button className='px-4 py-2 mt-5 active:scale-95 cursor-pointer rounded bg-red-400 text-white font-semibold'>Remove</button>
    // </div>

  )
}

export default Card