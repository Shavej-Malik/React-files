import React from 'react'

const Button = (props) => {
  return (
    <div className='w-fit font-bold bg-emerald-500 px-4 py-3 text-white rounded m-2'>
        {props.text}
    </div>
  )
}

export default Button