import React from 'react'

const Card = (props) => {
    //console.log(props)//props mean properties
  return (
    <div className='bg-white border-3 border-red-500 rounded px-5 py-3  h-20 w-40 m-2'>
        <h1 className='text-4xl font-bold'>{props.user}</h1>
    </div>
  )
}

export default Card