import React from "react";
import Logo from "../../img/Logo.png";
import "./Navbar.styles.css";

console.log(Logo);

function Navbar() {
  return (
    <div className="navbar-container">
        <img className="navbar-logo" src={Logo} alt="compound-curves-logo" />
     </div>
  );
}

export default Navbar;
