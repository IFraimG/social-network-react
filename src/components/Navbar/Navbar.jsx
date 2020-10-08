import React from "react";
import c from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={ c.nav }>
      <div className={ c.nav__content }>
        <div className={`${c.nav__item} ${c.nav__nolast}`}>
          <a href="/profile">Profile</a>
        </div>
        <div className={`${c.nav__item} ${c.nav__nolast}`}>
          <a href="/dialogs">Messages</a>
        </div>
        <div className={`${c.nav__item} ${c.nav__nolast}`}>
          <a href="/news">News</a>
        </div>
        <div className={`${c.nav__item} ${c.nav__nolast}`}>
          <a href="/music">Music</a>
        </div>
        <div className={ c.nav__item }>
          <a href="/settings">Settings</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
