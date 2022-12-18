import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.scss';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {

  return (
    <div className="App">
      {/**
       *  <LoginPage />
       */}
      <SignupPage />
    </div>
  )
}

export default App
