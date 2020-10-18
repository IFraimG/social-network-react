import React from "react";
import { connect } from "react-redux"
import Header from "./Header";
// import WithStyleHOC from "../hoc/WithStylesHOC"

class HeaderComponent extends React.Component {
  render() {
    return <Header { ...this.props } />;
  }
}

const mapStateToProps = state => ({ isAuth: state.auth.isAuth, id: state.auth.userID, login: state.auth.login })

export default connect(mapStateToProps)(HeaderComponent)
