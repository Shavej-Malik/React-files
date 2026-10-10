import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductDataContext } from '../Context/ProductContext'


const ProductDetails = () => {
  const productdata = useContext(ProductDataContext)
  const {productId} = useParams()
  const selectedProduct = productdata.find((elem)=>elem.id==productId)
  return (
    <div>
        <div className='prodets'>
          <img src={selectedProduct.image} alt="" />
          <h1>{selectedProduct.title}</h1>
          <h5>{`Price :- ${selectedProduct.price}`}</h5>
        </div>
    </div>
  )
}

export default ProductDetails