import React from "react";
import c from "./Header.module.css";
import logo from "../../img/logo64x64.png"

function Header() {
  return (
    <header className={ c.header }>
      <img src={ logo } />
      <a href="/" className={ c.header__title }>MyOcean V2</a>
    </header>
  );
}

export default Header;