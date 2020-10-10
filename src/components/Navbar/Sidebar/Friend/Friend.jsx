import React from "react";
import { NavLink } from "react-router-dom"
import c from "../Sidebar.module.css";

function Friend(props) {
  let isImg = <img className={ c.image } src={ props.img } alt=""/>
  if (!props.image) isImg = <div className={ c.noimage }></div>
  return (
    <div >
      <NavLink className={ c.friend } to={ "/users/" + props.info.id }>
        { isImg }
        <p>{ props.info.name }</p>
      </NavLink>
    </div>
  )
}

export default Friend;
