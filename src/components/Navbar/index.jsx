import React from "react";
import Logo from "../../img/Logo.png";
import { Link } from "react-router-dom";
import "./Navbar.styles.css";

console.log(Logo);

function Navbar() {
  return (
    <div className="navbar-container">
      <Link to="/">
        <img className="navbar-logo" src={Logo} alt="compound-curves-logo" />
      </Link>
      <ul className="navbar-list">
        <Link className="navbar-list-item" to="/services">
          <li>Services</li>
        </Link>
        <Link className="navbar-list-item" to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
