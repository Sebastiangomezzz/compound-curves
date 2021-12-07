import React from 'react'
import Logo from '../../img/Logo.png';
import './Navbar.styles.css'

console.log(Logo)

function Navbar() {
    return (
      <div className="navbar-container">
        <img className="navbar-logo" src={Logo} alt="compound-curves-logo" />
        <ul className="navbar-list">
          <li className="navbar-list-item">About Us</li>
          <li className="navbar-list-item">Contact</li>
        </ul>
      </div>
    );
}

export default Navbar;
