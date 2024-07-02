import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import profilePic from './assets/profile-pic.jpg';
import facebookIcon from './assets/facebook-icon.png';
import instagramIcon from './assets/instagram-icon.png';
import linkedinIcon from './assets/linkedin-icon.png';
import twitterIcon from './assets/twitter-icon.png';
import youtubeIcon from './assets/youtube-icon.png';
import About from './features/pages/About';
import Contact from './features/pages/Contact';
import Courses from './features/pages/Courses';
import Results from './features/pages/Results';


function App() {
  return (
    <Router>
    <div className='container text-center p-4 shadow rounded mt-5'>
      <div className='profile'>
        <img src={profilePic} alt='Profile' />
      </div>
      <h1>Julia Life Coach</h1>
      <h2>Personal Life Coach</h2>
      <p>A life coach is a type of wellness professional<br></br> who helps people make progress in their lives<br></br> in order to attain greater fulfillment</p>
      <div className='buttons'>
      <Link to="/aboutPage" className="button" _blank>ABOUT ME</Link>
      <Link to="/coursesPage" className="button">MY COURSES</Link>
      <Link to="/resultsPage" className="button">RESULTS</Link>
      <Link to="/contactPage" className="button">CONTACT</Link>
      </div>
      <div className='links'>
        <a href='#'><img src={facebookIcon} alt='Facebook'/></a>
        <a href='#'><img className='instagram-icon' src={instagramIcon} alt='Instagram'/></a>
        <a href='#'><img src={linkedinIcon} alt='Linkedin'/></a>
        <a href='#'><img src={twitterIcon} alt='Twitter'/></a>
        <a href='#'><img src={youtubeIcon} alt='Youtube'/></a>
      </div>
      <p className="footer text-muted mt-4">Free Online Assistance</p>
    </div>
    <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/results" element={<Results />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
