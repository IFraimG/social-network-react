import Dialog from './Dialog';
import { sendMessage, editMessage } from "../../redux/dialogs-reducer";
import { connect } from "react-redux"

function mapStateToProps(state) {
  return {
    users: state.dialogsPage.users,
    messages: state.dialogsPage.messages,
    msgValue: state.dialogsPage.msgValue
  }
}

export default connect(mapStateToProps, { sendMessage, editMessage })(Dialog);