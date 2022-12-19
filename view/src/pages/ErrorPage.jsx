import React from 'react'
import {useNavigate} from 'react-router-dom';
import ErrorImg from '../assets/error.svg';

function ErrorPage() {
     const navigate = useNavigate();
  return (
    <div className='ErrorPage'>
          <img src={ErrorImg} alt="error" />
          <h1>Ooops, An Error Occured!</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <button onClick={() => navigate('/')}> back to home</button>

    </div>
  )
}

export default ErrorPage