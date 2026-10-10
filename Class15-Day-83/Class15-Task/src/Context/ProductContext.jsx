import React, { createContext } from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
export const ProductDataContext = createContext()
const ProductContext = (props) => {

    const [productData, setproductData] = useState([])
    
      const getData = async ()=>{
        const response = await axios.get("https://fakestoreapi.com/products")
        // console.log(response)
        // console.log(response.data)
        setproductData(response.data)
      }
      const getfirstData = async (id)=>{
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        console.log(response.data)
      }
    
      useEffect(function(){
        getData()
      },[])

  return (
    <div>
        <ProductDataContext.Provider value={productData}>
            {props.children}
        </ProductDataContext.Provider>
    </div>
  )
}

export default ProductContext