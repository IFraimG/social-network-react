import React from "react";
import { connect } from "react-redux"
import Header from "./Header";
import { authUserThunk } from "../../redux/auth-reducer"

class HeaderComponent extends React.Component {
  componentDidMount() {
    this.props.authUserThunk()
  }

  render() {
    return <Header { ...this.props } />;
  }
}

const mapStateToProps = state => ({ isAuth: state.auth.isAuth, id: state.auth.userID, login: state.auth.login })
export default connect(mapStateToProps, { authUserThunk })(HeaderComponent);
