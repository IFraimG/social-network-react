import React from "react";
import { NavLink } from "react-router-dom"
import c from "./Header.module.css";
import logo from "../../img/logo64x64.png"

function Header(props) {
  return (
    <header className={ c.header }>
      <div className={ c.header__logo }>
        <img src={ logo } />
        <NavLink to="/" className={ c.header__title }>MyOcean V2</NavLink>
      </div>
      <h2>Social network created using React !</h2>
      { !props.isAuth ? <NavLink className={"link " + c.header__link} to="/login">Login</NavLink> : <NavLink className={"link " + c.header__link} to={"/profile/" + props.id }>{ props.login }</NavLink> }
    </header>
  );
}

export default Header;