import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.scss';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import {Routes, Route} from 'react-router-dom';
import LibraryPage from './pages/LibraryPage';
import ErrorPage from './pages/ErrorPage';

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
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="*" element={<ErrorPage />} />
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
