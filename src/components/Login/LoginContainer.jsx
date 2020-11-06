import React from "react";
import { connect } from "react-redux";
import { loginUserThunk } from "../../redux/auth-reducer"
import Login from "./Login"

function LoginContainer(props) {
  return <Login { ...props } />;
}

const mapStateToProps = state => ({ 
  errorsList: state.auth.errorsList, id: state.auth.userID, captchaURL: state.auth.captchaURL 
})

export default connect(mapStateToProps, {loginUserThunk})(LoginContainer);