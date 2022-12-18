import React from 'react'
import { BsFacebook, BsInfoCircleFill } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import loginImg from '../assets/images/loginImg.jpg'
import background from  '../assets/images/background.jpg'

function SignupPage() {
  return (
    <div className="SignupPage">
        <img src={background} alt="background" className="background" />

        <div className="signup-container">

          <div className='left-view'>
            <img src={loginImg} alt="logo" />
            <button >back to home</button>
          </div>

          <div className='right-view'>
            <h1>New to the platform?</h1>
            <p>Create an account.</p>
            <span> <BsInfoCircleFill className="icon" />Some error/success message</span>
            <form>
              <div className="form-group">
                <label htmlFor="fname">Full name</label>
                <input type="name" name="name" id="name" placeholder='name@domain.com' />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='name@domain.com' />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="qw12@!QWE" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Confirm password</label>
                <input type="password" name="password" id="password" placeholder="qw12@!QWE" />
              </div>
              <div className="form-group">
                <button type="submit">Register</button>
              </div>
            </form>
            <div className="forgot-password">
              <p>Don't have an account? <a href="#">Sign up</a></p>
             </div>

          </div>
            
        </div>
    </div>
  )
}

export default SignupPage