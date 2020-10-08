import React from "react";
import c from "../../css/Header.module.css";
import logo from "../../img/logo64x64.png"

function Header() {
  return (
    <header className={ c.header }>
      <img src={ logo } />
      <a href="/" className={ c.header__title }>MyOcean</a>
    </header>
  );
}

export default Header;