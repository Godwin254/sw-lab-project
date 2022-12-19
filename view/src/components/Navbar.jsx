import React from 'react'
import Button from './Button';
import Logo from '../assets/images/logo.png'
import {useNavigate} from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  }

  return (
    <div className='Navbar'>
        <img src={Logo} alt='logo' />
        <nav>
            <a href='#'>Home</a>
            <a href='#'>Explore</a>
            <div className='explore-dropdown'>
              <a href='#'>About</a>
              <a href='#'>Meet up</a>
              <a href='#'>Programs</a>
              <a href='#'>Pricing</a>
            </div>
            <a href='#' className='library'>Library</a>
            <div className='lib-dropdown'>
              <div className='dropdown-category'>
                <h3>Blogs</h3>
                <a href='#'>Stress</a>
                <a href='#'>Anxiety</a>
                <a href='#'>Depression</a>
                <a href='#'>Mental health</a>
              </div>
              <div className='dropdown-category'>
                <h3>News</h3>
                <a href='#'>Daily feeds</a>
                <a href='#'>National</a>
                <a href='#'>Communiities</a>
              </div>
              <div className='dropdown-category'>
                <h3>Forums</h3>
                <a href='#'>Mental Health Awareness</a>
                <a href='#'>Inua Dada</a>
                <a href='#'>BoyChild empowerment</a>
              </div>
            </div>
        </nav>

        <Button handler={handleSignUp} text='Sign up'/>
    </div>
  )
}

export default Navbar