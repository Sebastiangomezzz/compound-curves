import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Text from './components/Text';
import Slider from './components/Slider';
import Form from './components/Form';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Text/>
      <Form/>
      <Footer />
    </div>
  );
}

export default App;
