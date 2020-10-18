import React from "react";
import { connect } from "react-redux"
import Header from "./Header";
import { authUserThunk } from "../../redux/auth-reducer"
// import WithStyleHOC from "../hoc/WithStylesHOC"
import { compose } from "redux";

class HeaderComponent extends React.Component {
  componentDidMount() {
    this.props.authUserThunk()
  }

  render() {
    return <Header { ...this.props } />;
  }
}

const mapStateToProps = state => ({ isAuth: state.auth.isAuth, id: state.auth.userID, login: state.auth.login })

export default compose(//WithStyleHOC, 
  connect(mapStateToProps, { authUserThunk })
)(HeaderComponent)
