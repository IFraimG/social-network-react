import React from "react";
import { NavLink } from "react-router-dom"
import c from "./Header.module.css";
import logo from "../../img/logo64x64.png"

function Header() {
  return (
    <header className={ c.header }>
      <div className={ c.header__logo }>
        <img src={ logo } />
        <NavLink to="/" className={ c.header__title }>MyOcean V2</NavLink>
      </div>
      <div>
        <h2>Social network created using React !</h2>
      </div>
    </header>
  );
}

export default Header;