import React from "react";
import { NavLink } from "react-router-dom"
import c from "./Navbar.module.css";

function Navbar(props) {
  let isProfile = ""
  if (props.isAuth) isProfile = (
    <NavLink to={"/profile/" + props.id} className={`${c.nav__item} ${c.nav__nolast}`}>
      <div>Profile</div>
    </NavLink>
  )
  return (
    <nav className={ c.nav }>
      <div className={ c.nav__content }>
        { isProfile }
        <NavLink to="/dialogs" className={`${c.nav__item} ${c.nav__nolast}`}>
          <div>Messages</div>
        </NavLink>
        <NavLink to="/news" className={`${c.nav__item} ${c.nav__nolast}`}>
          <div>News</div>
        </NavLink>
        <NavLink to="/music" className={`${c.nav__item} ${c.nav__nolast}`}>
          <div>Music</div>
        </NavLink>
        <NavLink to="/users" className={`${c.nav__item} ${c.nav__nolast}`}>
          <div>Find users</div>
        </NavLink>
        <NavLink to="/settings" className={ c.nav__item }>
          <div>Settings</div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
