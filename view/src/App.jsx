import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.scss';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      {/**
       *  <LoginPage />
       * <SignupPage />
       */}

       <Navbar />
    </div>
  )
}

export default App
