import React from 'react'
import { useState } from 'react'
const Navbar = (props) => {

    const [newTheme, setnewTheme] = useState('')

  return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            props.changeTheme(newTheme)//Sendind data to App(Parent)
            setnewTheme('')
        }}>
            <input type="text" placeholder='Enter your theme' required
            value={newTheme}
            onChange={(e)=>{
                setnewTheme(e.target.value)
            }}
            />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Navbar