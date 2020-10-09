import React from "react";
import { NavLink } from "react-router-dom"
import c from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={ c.nav }>
      <div className={ c.nav__content }>
        <div className={`${c.nav__item} ${c.nav__nolast}`}>
          <NavLink to="/profile" activeClassName={ c.nav__active }>Profile</NavLink>
        </div>
        <div className={`${c.nav__item} ${c.nav__nolast}`}>
          <NavLink to="/dialogs" activeClassName={ c.nav__active }>Messages</NavLink>
        </div>
        <div className={`${c.nav__item} ${c.nav__nolast}`}>
          <NavLink to="/news" activeClassName={ c.nav__active }>News</NavLink>
        </div>
        <div className={`${c.nav__item} ${c.nav__nolast}`}>
          <NavLink to="/music" activeClassName={ c.nav__active }>Music</NavLink>
        </div>
        <div className={ c.nav__item }>
          <NavLink to="/settings" activeClassName={ c.nav__active }>Settings</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
