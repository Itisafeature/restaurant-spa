import React from 'react';
import '../Navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <a className="nav-link" href="#about">
          <button className="nav-btn">About</button>
        </a>
        <a className="nav-link" href="#menu">
          <button className="nav-btn">Menu</button>
        </a>
        <a className="nav-link" href="#">
          <button className="nav-btn">Contact</button>
        </a>
      </div>
    </>
  );
};

export default Navbar;
