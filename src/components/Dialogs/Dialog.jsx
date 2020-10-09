import React from "react";
import { NavLink } from "react-router-dom"
import c from "./Dialog.module.css";

function DialogItem(props) {
  return (
    <div className={ c.dialogs__item }>
      <NavLink to={ "/dialogs/" + props.id } className={ c.dialogs__item + " " + c.dialogs__active }>
        { props.name }
      </NavLink>
    </div>
  )
}

function Message(props) {
  return (
    <div className={ c.dialogs__msg }>{ props.message }</div>
  )
}

function Dialog(props) {
  return (
    <div className={ c.dialogs }>
      <div className={ c.dialogs__content }>
        <div className={ c.dialogs__left }>
          <h1 className={ c.dialogs__title }>Messages</h1>
          <div className={ c.dialogs__lists }>
            <DialogItem name="Pushok1" id="1" />
            <DialogItem name="Pushok2" id="2" />
            <DialogItem name="Pushok3" id="3" />
            <DialogItem name="Pushok4" id="4" />
            <DialogItem name="Pushok5" id="5" />
            <DialogItem name="Pushok6" id="6" />
            <DialogItem name="Pushok7" id="7" />
          </div>
        </div>
        <div className={ c.dialogs__right }>
          <h1 className={ c.dialogs__title }>Dialogs</h1>
          <div className={ c.dialogs__messages }>
            <Message message="hellllo" />
            <Message message="hellllo" />
            <Message message="hellllo" />
            <Message message="hellllo" />
            <Message message="hellllo" />
            <Message message="hellllo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialog;
