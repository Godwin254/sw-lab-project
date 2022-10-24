import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='Navbar'>
      <h2>BONGA<span>KE</span></h2>
      <Link to='/'>Home</Link>
      <Link to='/about'>About us</Link>
      <Link to='/contact-us'>Contact us</Link>
      <Link to='/Forum'>Forum</Link>
      <Link to='/sign-up'>Login</Link>
    </div>
  )
}

export default Navbar