import React, { useContext } from 'react'
import { ProductDataContext } from '../Context/ProductContext'
import { Link } from 'react-router-dom'

const Product = () => {

  const productData = useContext(ProductDataContext)

  return (
    <div className='AllProduct'>
      {/* <button onClick={getData}>All Products</button> */}
      {/* <button onClick={getfirstData}>First Product</button> */}
      {/* <button onClick={()=>{
        getfirstData(7)
      }}>First Product</button> */}
      {productData.map(function(elem,idx){
        return <Link className='product' key={idx} to={`/product/${elem.id}`}>
          <div>
            <img src={elem.image} alt="" />
            <h1>{elem.title}</h1>
          </div>
        </Link>
      })}
    </div>
  )
}

export default Product