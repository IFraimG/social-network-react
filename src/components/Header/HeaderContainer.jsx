import React from "react";
import { connect } from "react-redux"
import Header from "./Header";
import { authAPI } from "../../api/api"
import { setUser } from "../../redux/auth-reducer"

class HeaderComponent extends React.Component {
  componentDidMount() {
    authAPI.authUser()
      .then(data => {
        if (data.resultCode === 0) {
          let { id, login, email } = data.data
          this.props.setUser(id, email, login)
        }
      })
  }

  render() {
    return <Header { ...this.props } />;
  }
}

const mapStateToProps = state => ({ isAuth: state.auth.isAuth, id: state.auth.userID, login: state.auth.login })
export default connect(mapStateToProps, { setUser })(HeaderComponent);
