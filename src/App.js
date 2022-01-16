import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/pages/Landing';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
