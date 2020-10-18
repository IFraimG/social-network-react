import React from "react";
import { connect } from "react-redux";
import { loginUserThunk } from "../../redux/auth-reducer"
import Login from "./Login"

function LoginContainer(props) {
  return <Login { ...props } loginUserThunk={props.loginUserThunk} />;
}

const mapStateToProps = state => ({ errorsList: state.auth.errorsList })

export default connect(mapStateToProps, {loginUserThunk})(LoginContainer);