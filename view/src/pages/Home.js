import React from 'react'
import {Link} from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

function Home() {
  const home1 = require('../images/Rectangle 17.png');
  const home2 = require('../images/Rectangle 2.png');
  return (
    <div className='Home'>

      <header>
        <img src={home2} alt='home-page' />
        <div className='Home__overlay'></div>

        <div className='header-content'>
          <h1>Raising a sound mind generation</h1>
          <button>Getting started <HiOutlineArrowNarrowRight className='i'/></button>

          <div className="header-content__slide-images">
            <img src={home1} alt='slide-image' width="100px"/>
            <img src={home2} alt='slide-image' width="100px"/>
            <img src={home1} alt='slide-image' width="100px"/>
          </div>
        </div>
      </header>

      <section className="section__about">
        <h2>About site</h2>
        <p>
          Visual hierarchy is the arrangement of elements in order of importance.
          This is done either by size, colour, imagery, contrast, typography, whitespace, texture and style.
          One of the most important functions of visual hierarchy is to establish a focal point;
          this shows visitors where the most important information is.
        </p>
      </section>

      <section className='section__features'>
        <h2>Features</h2>
        <div className='section__features__cards'>

          <div className='section__features__cards__card'>
            <span></span>
            <h3>Mental Awareness</h3>
            <p>
              Visual hierarchy is the arrangement of elements in order of importance.
            </p>
            <button>Discover</button>
          </div>

          <div className='section__features__cards__card'>
            <span></span>
            <h3>Mental Awareness</h3>
            <p>
              Visual hierarchy is the arrangement of elements in order of importance.
            </p>
            <button>Discover</button>
          </div>

          <div className='section__features__cards__card'>
            <span></span>
            <h3>Mental Awareness</h3>
            <p>
              Visual hierarchy is the arrangement of elements in order of importance.
            </p>
            <button>Discover</button>

          </div>

        </div>

      </section>

      <section className='section__contact'>
        <img src={home1} alt='contact-section' />
        <div className='section__contact__overlay'></div>
        <button>Contact Expert</button>
        <div className="section__contact__icons">
       
          <Link to='/facebook' className='section__contact__icons__icon' >
            <FaFacebookF className="i"/>
          </Link>
          <Link to='/twitter' className='section__contact__icons__icon' >
            <FaTwitter className="i" />
          </Link>
          <Link to='/linkedin' className='section__contact__icons__icon' >
            <FaLinkedinIn className="i" />
          </Link>
          <Link to='/instagram' className='section__contact__icons__icon' >
            <FaInstagram className="i" />
          </Link>

        </div>

      </section>

    </div>
  )
}

export default Home