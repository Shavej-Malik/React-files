import React from 'react'

const Lower = (props) => {
    
  return (
    <div className="lower">
        <h2>{props.CardData.username}</h2>
        <h4>{props.CardData.email}</h4>
        <h3>{props.CardData.role}</h3>
    </div>
  )
}

export default Lower