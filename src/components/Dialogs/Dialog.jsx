import React, { useRef } from "react";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import c from "./Dialog.module.css";
import { addMessageActionCreator, editMessageActionCreator } from "../../redux/dialogs-reducer"

function Dialog(props) {
  let messageElement = useRef(null)

  let user = props.users.map(item => {
    return <DialogItem key={ item.id } name={ item.name } id={ item.id } />
  })

  let message = props.messages.map(message => <Message key={ message.message } message={ message.message } />)

  let sendMessage = () => {
    let action = addMessageActionCreator()
    props.dispatch(action)
  }

  let editMessage = () => {
    let action = editMessageActionCreator(messageElement.current.value)
    props.dispatch(action)
  }

  return (
    <div className={ c.dialogs }>
      <div className={ c.dialogs__content }>
        <div className={ c.dialogs__left }>
          <h1 className={ c.dialogs__title }>Friends</h1>
          <div className={ c.dialogs__lists }>{ user }</div>
        </div>
        <div className={ c.dialogs__right }>
          <h1 className={ c.dialogs__title }>Dialogs</h1>
          <div className={ c.dialogs__messages }>
            { message }
          </div>
          <div className={ c.dialogs__input }>
            <textarea ref={ messageElement } onChange={ editMessage } value={ props.msgValue } placeholder="Enter your message..." type="text">
            </textarea>
            <button onClick={ sendMessage }>Push</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialog;
