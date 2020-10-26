import React from "react";
import { connect } from "react-redux"
import Header from "./Header";
// import WithStyleHOC from "../hoc/WithStylesHOC"

function HeaderComponent(props) {
  return <Header { ...props } />;
}

const mapStateToProps = state => ({ isAuth: state.auth.isAuth, id: state.auth.userID, login: state.auth.login })

export default connect(mapStateToProps)(HeaderComponent)
