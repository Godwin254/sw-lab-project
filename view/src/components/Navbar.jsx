import React from 'react'
import Button from './Button'

function Navbar() {

  const handleSignUp = () => {
    alert("under implementation");
  }
  return (
    <div className='Navbar'>
        <h1>MindGaurd</h1>
        <nav>
            <a href='#'>Home</a>
            <a href='#'>Explore</a>
            <a href='#'>Library</a>
        </nav>

        <Button handler={handleSignUp} text='Sign up'/>
    </div>
  )
}

export default Navbar