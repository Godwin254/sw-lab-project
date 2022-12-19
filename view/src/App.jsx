import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.scss';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {

  return (
    <div className="App">
      {/**
       *  <LoginPage />
       * <SignupPage />
       *  <Navbar />
       * <Footer />
       */}

       <HomePage />
    </div>
  )
}

export default App
