import React from 'react'
import Navbar from './Components/Navbar'
import Men from './Components/Men'
import Women from './Components/Women'
const App = () => {

  // const user1={
  //   name:'Ronaldo',
  //   age:35,
  //   gender:'male'
  // }
  // const user2={
  //   name:'Shreya',
  //   age:24,
  //   gender:'female'
  // }
      {/* Event Listener */}
      function btnclick(n){
        console.log("Button Clicked",n)
      }
      
  return (
    <div>
      <button 
      onClick={btnclick(50)}
      className='active:scale-95 bg-emerald-500 text-white text-bold m-2 rounded 
      px-2 py-3 cursor-pointer'>
        Click to Download
      </button>
      {/* ------------------------------------------------------------------------------ */}
      {/* {user1.gender == 'female' ? <Men/> : <Women/>} */}
{/* ------------------------------------------------------------------------------  */}
      {/* <Navbar title='DHL' color='red' link={['Home','About', 'Account','Contact']}/>
      <Navbar title='Youtube' color='blue' link={['Home','Service', 'Course','Purchase']}/>
      <Navbar title='Google' color='green' link={['Home','Product', 'Sell','Buy']}/> */}
    </div>
  )
}

export default App