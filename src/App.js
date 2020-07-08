import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <img className="logo" src="logo.png" alt="restaurant logo" />
        <Navbar />
      </header>
      <About />
      <Menu />
      <Contact />
    </div>
  );
}

export default App;
