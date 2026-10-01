import React from 'react';
import Card from './Component/Card';
const App = () => {

  const CardData1 = {
    username:'Shavej Malik',
    role:'Engineer',
    email:'shavej@gmail.com',
    profile:'https://i.pinimg.com/736x/78/29/4d/78294d83f530638cfc30f61e51e23aad.jpg'
  }
  const CardData2 = {
    username:'Sundar Pichai',
    role:'CEO',
    email:'SundPi@gmail.com',
    profile:'https://i.pinimg.com/736x/c2/3c/1b/c23c1bbd3566ec1dd99dd5c1f5326c3c.jpg'
  }
  const CardData3 = {
    username:'Ronaldo',
    role:'Footballer',
    email:'ronaldo@gmail.com',
    profile:'https://i.pinimg.com/736x/81/2e/26/812e267ae6262563b0a4a8f005f82397.jpg'
  }

  return (
    <>
      <Card CardData={CardData1}/>
      <Card CardData={CardData2}/>
      <Card CardData={CardData3}/>
    </>
  )
}

export default App