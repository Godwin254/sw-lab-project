import React from 'react'
import { BsFacebook, BsInfoCircleFill } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import loginImg from '../assets/images/loginImg.jpg'
import background from  '../assets/images/background.jpg'
import { useNavigate} from 'react-router-dom';

function LoginPage() {
     const navigate = useNavigate();

  return (
    <div className="LoginPage">
          <img src={background} alt="background" className="background" />
          <div className="login-container">
               <div className="left-view">
                    <img src={loginImg} alt="logo" />
                    <button onClick={() => navigate('/')} >back to home</button>
               </div>
               <div className="right-view">
                    <h1>Welcome back, User</h1>
                    <p>Sign in to your account</p>
                    <span> <BsInfoCircleFill className="icon" />Some error/success message</span>
                    <form>
                         <div className="form-group">
                              <label htmlFor="email">Email</label>
                              <input type="email" name="email" id="email" placeholder='name@domain.com'/>
                         </div>
                         <div className="form-group">
                              <label htmlFor="password">Password</label>
                              <input type="password" name="password" id="password" placeholder="qw12@!QWE" />
                         </div>
                         <div className="form-group checkbox">
                              <input type="checkbox" name="remember" id="remember" />
                              <label htmlFor="remember">Remember me</label>
                         </div>
                         <div className="form-group">
                              <button type="submit">Login</button>
                         </div>
                    </form>
                    <div className="forgot-password">
                         <a href="#">Forgot password?</a>
                         <p>Don't have an account? <a href="/signup">Sign up</a></p>
                    </div>
                    

               </div>
          </div>
    </div>
  )
}

export default LoginPage