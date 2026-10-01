import React from 'react'
import Upper from './Upper'
import Lower from './Lower'
const Card = (props) => {
    
  return (
    <div className='card'>
        {/* <div className="upper">
            <img src="https://i.pinimg.com/736x/78/29/4d/78294d83f530638cfc30f61e51e23aad.jpg" alt="Image!" />
        </div> */}
        {/* <div className="lower">
            <h2>Shavej Malik</h2>
            <h4>shavej@gmail.com</h4>
            <h3>Developer</h3>
        </div> */}
        <Upper CardData = {props.CardData}/>
        <Lower CardData = {props.CardData}/>
    </div>
  )
}

export default Card