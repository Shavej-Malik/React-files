import React from 'react'
import Card from './Component/Card'
import Button from './Component/Button'
const App = () => {
    // const age=21 // JS can write like this
    // const name='Johan Doe'
    const user=['Rahul','Vicky','Manoj','Priya']
  return (
    <div className='p-5 h-screen bg-black'>
      {/* {Card('Rick Nolan', 30)}
      {Card('Glenn Maggie', 28)}
      {Card('Bixi', 25)} */}
{/* -----------------------------------------------------------------*/}
      {/*<Card user="Rick Nolan" age="30"/> {/*Accept this into props as a paramter*/}
      {/*<Card user="Glenn Maggie" age="28"/> {/* wil get as a Object */}
{/* -----------------------------------------------------------------*/}
      {/* <h1>{name},{age}</h1>
      <h1>{arr.length}</h1>
      <h1>{arr.map(function(elem){
        return <h1>{elem}</h1>
      })}</h1>
      <h1>{arr.filter(function(elem){
        return elem>10
      })}</h1> */}
{/* -----------------------------------------------------------------*/}
      {/* <Button text="Buy Now"/>
      <Button text="Explore More"/> */}
{/* -----------------------------------------------------------------*/}
      {user.map(function(elem){
        return <Card user={elem}/>
      })}
    </div>
  )
}

export default App