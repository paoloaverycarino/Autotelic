import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar
import Hero from './pages/Hero';
import LongForm from './pages/Longform';
import ShortForm from './pages/Shortform';
import Photography from './pages/Photography';
import Code from './pages/Code';
import Music from './pages/Music';
import About from './pages/About';
import Contact from './pages/Contact';

import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      {/* Navbar stays on top across all pages */}
      <Navbar />

      {/* Routes for page navigation */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/LongForm" element={<LongForm />} />
        <Route path="/ShortForm" element={<ShortForm />} />
        <Route path="/Photography" element={<Photography />} />
        <Route path="/Code" element={<Code />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

