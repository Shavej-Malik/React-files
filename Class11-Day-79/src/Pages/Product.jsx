import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div>
        <h1 className='text-white underline text-3xl font-bold absolute /*can used (fixed) instead of absolute*/ left-[50vw]  -translate-x-1/2'>ProductsPage</h1>
      </div>

      <div className='flex gap-5 text-white'>
        <Link className='text-xl font-semibold underline' to='/product/men' >Men's collection</Link>
        <Link className='text-xl font-semibold underline' to='/product/women' >Women's collection</Link>
      </div>
    </div>
  )
}

export default Product