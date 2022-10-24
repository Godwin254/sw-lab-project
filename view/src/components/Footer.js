import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className="Footer">
        <div className="Footer__left">
            <Link to="/copyright">Copyright 2022</Link> 
            <Link to="/portfolio">Portfolio</Link> 
            <Link to="/Github">GitHub</Link> 

        </div>

        <div className="Footer__center">
            <h2>BONGA<span>KE</span></h2>
        </div>

        <div className="Footer__right">
            <Link to="/">Home</Link> 
            <Link to="/contact-us">Contact us</Link> 
            <Link to="/blogs">Blogs</Link> 
            <Link to="/forum">Forum</Link> 
        </div>

    </div>
  )
}

export default Footer