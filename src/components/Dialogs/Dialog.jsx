import React from "react";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import c from "./Dialog.module.css";

function Dialog(props) {

  let user = props.users.map(item => {
    return <DialogItem key={ item.id } name={ item.name } id={ item.id } />
  })

  let message = props.messages.map(message => <Message key={ message.message } message={ message.message } />)

  return (
    <div className={ c.dialogs }>
      <div className={ c.dialogs__content }>
        <div className={ c.dialogs__left }>
          <h1 className={ c.dialogs__title }>Messages</h1>
          <div className={ c.dialogs__lists }>{ user }</div>
        </div>
        <div className={ c.dialogs__right }>
          <h1 className={ c.dialogs__title }>Dialogs</h1>
          <div className={ c.dialogs__messages }>
            { message }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialog;
