import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-8 py-4 bg-pink-400'>
        <h1 className='text-white underline text-3xl font-bold left-0 top-0 '>Navbar</h1>
        <div className='text-white font-semibold text-xl flex gap-10'>
          <Link to={'/'} >Home</Link> {/*mean that click on 'Home' then reach on page of '/'*/}
          <Link to={'/about'} >About</Link>{/*mean that click on 'About' then reach on page of '/about'*/}
          <Link to={'/product'} >Product</Link>{/* mean that click on 'Product' then reach on page of '/product' */}
          {/* <a href="/">Home Page</a>
          <a href="/about">About Page</a>
          <a href="/product">Product Page</a> */}
        </div>
    </div>
  )
}

export default Navbar