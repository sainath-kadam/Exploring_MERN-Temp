// Navbar.js
import React from 'react';
import './Navbar.css'; // Import the separate CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/About">About</a>
        </li>      
      </ul>
    </nav>
  );
};

export default Navbar;

// we should use <a> for giving the path
//Using <nav> for Navigation:
//Using <div> for Generic Containers: