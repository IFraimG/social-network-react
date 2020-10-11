import React from "react";
import Dialog from './Dialog';
import { addMessageActionCreator, editMessageActionCreator } from "../../redux/dialogs-reducer";

function DialogConainer(props) {
  let sendMessage = () => {
    let action = addMessageActionCreator();
    props.store.dispatch(action);
  };

  let editMessage = (text) => {
    let action = editMessageActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Dialog 
      users={ props.store.getState().profilePage.users }
      messages={ props.store.getState().dialogsPage.messages }
      msgValue={ props.store.getState().dialogsPage.msgValue }
      sendMessage={ sendMessage } 
      editMessage={ editMessage } 
    />
  )
}

export default DialogConainer;