import React from "react";
import { NavLink } from "react-router-dom"
import c from "../Dialog.module.css";

function DialogItem(props) {
  return (
    <div className={ c.dialogs__item }>
      <NavLink to={ "/dialogs/" + props.id } className={ c.dialogs__item + " " + c.dialogs__active }>
        { props.name }
      </NavLink>
    </div>
  )
}

export default DialogItem;