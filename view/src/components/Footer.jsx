import React from 'react';
import Logo from '../assets/images/logo.png';

function Footer() {

     const year = new Date().getFullYear();
     return (
          <footer>
               <div className='left-view'>
                    <span>&copy; {year} </span>
                    <a href="#">Github </a>
                    <a href="#">Medium</a>
     
               </div>
               <img src={Logo} alt='logo' />
               <div className='right-view'>
                    <a href='#'>Home</a>
                    <a href='#'>Explore</a>
                    <a href='#'>Library</a>
                    <a href='#'>Contact us</a>
               </div>
          </footer>
     )
}

export default Footer