import Dialog from './Dialog';
import { sendMessage, editMessage } from "../../redux/dialogs-reducer";
import { connect } from "react-redux"
import WithAuthRedirect from "../hoc/WithAuthRedirect"
import { compose } from 'redux';

function mapStateToProps(state) {
  return {
    users: state.dialogsPage.users,
    messages: state.dialogsPage.messages,
    msgValue: state.dialogsPage.msgValue
  }
}

export default compose(connect(mapStateToProps, { sendMessage, editMessage }), WithAuthRedirect)(Dialog)