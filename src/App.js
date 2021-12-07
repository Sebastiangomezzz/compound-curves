import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Text from './components/Text';
import Form from './components/Form';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Text/>
      <Form/>
      <Footer />
    </div>
  );
}

export default App;
