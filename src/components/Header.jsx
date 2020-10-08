import React from "react";
import "../App.css";
import logo from "../img/logo64x64.png"

function Header() {
  return (
    <header className="header">
      <img src={ logo } />
    </header>
  );
}

export default Header;