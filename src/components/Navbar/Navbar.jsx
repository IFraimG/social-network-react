import React from "react";
import { NavLink } from "react-router-dom"
import c from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={ c.nav }>
      <div className={ c.nav__content }>
        <NavLink to="/profile" className={`${c.nav__item} ${c.nav__nolast}`}>
          <div>Profile</div>
        </NavLink>
        <NavLink to="/dialogs" className={`${c.nav__item} ${c.nav__nolast}`}>
          <div>Messages</div>
        </NavLink>
        <NavLink to="/news" className={`${c.nav__item} ${c.nav__nolast}`}>
          <div>News</div>
        </NavLink>
        <NavLink to="/music" className={`${c.nav__item} ${c.nav__nolast}`}>
          <div>Music</div>
        </NavLink>
        <NavLink to="/settings" className={ c.nav__item }>
          <div>Settings</div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
