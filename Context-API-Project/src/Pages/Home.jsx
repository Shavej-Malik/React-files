import React, { useEffect } from 'react'
// import axios from "axios"
import axios from "../Utils/Axios"
function Home() {
  const getProduct = async ()=>{
    try {
        const { data } = await axios.get("/products");
        console.log(data);
    } catch (error) {
        console.log(error);
    }
  }

  // useEffect(()=>{});
  useEffect(()=>{
    // console.log("HOME.jsx Mounted")
    getProduct()
    return ()=>{
      // console.log("HOME.jsx Umounted")
    }
  });

  return (
    <div>
      <h1>Home</h1>
      <button onClick={getProduct} className='bg-amber-600 rounded px-2 mt-2 active:scale-95 cursor-pointer'>Get Products</button>
    </div>
  )
}

export default Home