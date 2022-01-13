import React from "react";
import Logo from "../../img/Logo.png";
import { Link } from "react-router-dom";
import Burguer from '../Burguer';
import "./Navbar.styles.css";

console.log(Logo);

function Navbar() {
  return (
    <div className="navbar-container">
      <Link to="/">
        <img className="navbar-logo" src={Logo} alt="compound-curves-logo" />
      </Link>
      <Burguer />
      
    </div>
  );
}

export default Navbar;
