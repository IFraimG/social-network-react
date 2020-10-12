import Dialog from './Dialog';
import { addMessageActionCreator, editMessageActionCreator } from "../../redux/dialogs-reducer";
import { connect } from "react-redux"

function mapStateToProps(state) {
  return {
    users: state.dialogsPage.users,
    messages: state.dialogsPage.messages,
    msgValue: state.dialogsPage.msgValue
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sendMessage: () => {
      dispatch(addMessageActionCreator())
    },
    editMessage: (text) => {
      dispatch(editMessageActionCreator(text))
    }
  }
}

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)

export default SuperDialogsContainer;