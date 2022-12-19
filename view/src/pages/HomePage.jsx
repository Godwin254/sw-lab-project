import React from 'react';
import BackImg from '../assets/images/bg-image.png';
import Video from '../assets/images/video1.mp4';
import IconImg from '../assets/images/bg-icons.png'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { CgArrowRight } from 'react-icons/cg';
import {BsFacebook, BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs';
import Vector1 from '../assets/images/Vector1.png';
import Vector2 from '../assets/images/Vector2.png';
import Vector3 from '../assets/images/Vector3.png';
import  Vector4 from '../assets/images/Vector4.png';

function HomePage() {
    
  return (

    <div className="HomePage">
      <Navbar />
      <div className="content">
        <header>
          <img src={BackImg} alt="home-image" />
          <div className="text">
            <h1>
              Let's talk about mental health and Awareness
            </h1>
            <button>
              Get started
              <CgArrowRight className='icon' />
            </button>
          </div>
        </header>
        <main>
          <section className="section1">
            <h2>What we do</h2>
            <div>
              <p>
                Visual hierarchy is the arrangement of elements in order of importance. 
                This is done either by size, colour, imagery, contrast, typography, whitespace, texture and style. 
                One of the most important functions of visual hierarchy is to establish a focal point; this shows visitors where the most important information is.
              </p>
              <video loop autoplay>
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>

          <section className="section2">
            <h2>How we do it</h2>
            <div>
              <div className="left-view">
                <h1>
                  <span>Mind</span>Guard Best Features
                </h1>
                <p>
                  Visual hierarchy is the arrangement of elements in order of importance. 
                </p>
                <button>
                  Explore more
                </button>

              </div>

              <div className="right-view">
                <div className="card">
                  <img src={Vector1} alt="card-icon" />
                  <h3>Mental awareness</h3>
                </div>
                <div className="card">
                  <img src={Vector2} alt="card-icon" />
                  <h3>Positive Thinking</h3>
                </div>
                <div className="card">
                  <img src={Vector3} alt="card-icon" />
                  <h3>Peer Counselling</h3>
                </div>
                <div className="card">
                  <img src={Vector4} alt="card-icon" />
                  <h3>Online aid</h3>
                </div>

              </div>
            </div>
          </section>
          <section className='section3'>
            <img src={IconImg} alt="bg-contact" />
            <div>
              <button>Connect to an expert</button>
              <div className="icons">
                <BsFacebook  className='icon'/>
                <BsTwitter className='icon' />
                <BsInstagram className='icon' />
                <BsLinkedin className='icon' />
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default HomePage