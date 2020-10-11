import React from "react";
import Dialog from './Dialog';
import { addMessageActionCreator, editMessageActionCreator } from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";

function DialogConainer(props) {
  return (
    <StoreContext.Consumer>
      {
        store => {
          let sendMessage = () => {
            let action = addMessageActionCreator();
            store.dispatch(action);
          };
        
          let editMessage = (text) => {
            let action = editMessageActionCreator(text);
            store.dispatch(action);
          };

          return <Dialog 
            users={ store.getState().profilePage.users }
            messages={ store.getState().dialogsPage.messages }
            msgValue={ store.getState().dialogsPage.msgValue }
            sendMessage={ sendMessage } 
            editMessage={ editMessage } 
          />
        }
      }
    </StoreContext.Consumer>
  )
}

export default DialogConainer;