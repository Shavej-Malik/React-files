import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import ProductDetails from './Pages/ProductDetails'
const App = () => {

  // const [productData, setproductData] = useState([])

  // const getData = async ()=>{
  //   const response = await axios.get("https://fakestoreapi.com/products")
  //   // console.log(response)
  //   // console.log(response.data)
  //   setproductData(response.data)
  // }
  // const getfirstData = async (id)=>{
  //   const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
  //   console.log(response.data)
  // }

  // useEffect(function(){
  //   getData()
  // },[])
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/product' element = {<Product/>} />
        <Route path='/product/:productId' element = {<ProductDetails/>} />
        
      </Routes>
    </div>
    // <div className='AllProduct'>
    //   {/* <button onClick={getData}>All Products</button> */}
    //   {/* <button onClick={getfirstData}>First Product</button> */}
    //   {/* <button onClick={()=>{
    //     getfirstData(7)
    //   }}>First Product</button> */}
    //   {productData.map(function(elem,idx){
    //     return <a target='_blank' className='product' key={idx} href="">
    //       <div>
    //         <img src={elem.image} alt="" />
    //         <h1>{elem.title}</h1>
    //       </div>
    //     </a>
    //   })}
    // </div>
  )
}

export default App