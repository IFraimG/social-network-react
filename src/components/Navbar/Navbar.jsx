import React from "react";
import c from "../../css/Navbar.module.css";

function Navbar() {
  return (
    <nav className={ c.nav }>
      <div className={ c.nav__content }>
        <div className={`${c.nav__item} ${c.nav__nolast}`}>
          <a href="/">Profile</a>
        </div>
        <div className={`${c.nav__item} ${c.nav__nolast}`}>
          <a href="/">Messages</a>
        </div>
        <div className={`${c.nav__item} ${c.nav__nolast}`}>
          <a href="/">News</a>
        </div>
        <div className={`${c.nav__item} ${c.nav__nolast}`}>
          <a href="/">Music</a>
        </div>
        <div className={ c.nav__item }>
          <a href="/">Settings</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
