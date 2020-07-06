import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <img className="logo" src="logo.png" alt="restaurant logo" />
        <Navbar />
      </header>
      <About />
      <Menu />
    </div>
  );
}

export default App;
