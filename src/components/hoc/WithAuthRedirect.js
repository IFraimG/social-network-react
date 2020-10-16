import React from "react"
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function WithAuthRedirect(Component) {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.auth) return <Redirect to="/login" />
      return <Component {...this.props} />
    }
  }
  const mapStateToPropsRedirect = state => ({ auth: state.auth.isAuth })

  return connect(mapStateToPropsRedirect)(RedirectComponent)
}

export default WithAuthRedirect;