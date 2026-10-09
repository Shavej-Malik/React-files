import React from 'react'
import Navbar from './Components/Navbar'
import Section from './Components/Section'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='App-div'>
{/* ************************************************************ */}
    
    {/*<Navbar>
      <h1>This is Second Navbar</h1> {/* we send this children into Navbar 
    </Navbar>*/}
  
{/* ************************************************************ */}
      <Navbar/>
      <Section>
        <h1>Hello All Sections</h1>
      </Section>
      <Footer/>
    </div>
  )
}

export default App