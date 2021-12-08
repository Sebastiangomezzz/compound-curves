import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/pages/Landing';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';


function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
  );
}

export default App;

