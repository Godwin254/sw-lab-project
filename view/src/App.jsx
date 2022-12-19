import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.scss';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      {/**
       *  <LoginPage />
       * <SignupPage />
       *  <Navbar />
       * <Footer />
       */}
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {
            /*
            protected routes
            */
          }
          
       </Routes>
    </div>
  )
}

export default App
