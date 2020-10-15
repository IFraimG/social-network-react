import React from "react";
import { connect } from "react-redux"
import Navbar from "./Navbar"

const mapStateToProps = state => {
  return {
    id: state.auth.userID,
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps)(Navbar);
