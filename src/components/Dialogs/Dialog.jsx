import React from "react";
import { Form, Field } from "react-final-form"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import c from "./Dialog.module.css";

function Dialog(props) {
  let user = props.users.map(item => {
    return <DialogItem key={ item.id } name={ item.name } id={ item.id } />
  })

  let message = props.messages.map(message => <Message key={ message.message } message={ message.message } />)

  let sendMessage = (msg) => {
    props.sendMessage(msg.textValue)
    msg.textValue = ""
  }

  return (
    <Form onSubmit={ sendMessage }>
      { formProps => (
        <form onSubmit={formProps.handleSubmit}>
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
                  <Field name="textValue" placeholder="Enter your message..." component="textarea" />
                  <button type="submit">Push</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </Form>
  )
}

export default Dialog;
