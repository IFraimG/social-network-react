import { connect } from "react-redux"
import Navbar from "./Navbar"
import { logoutThunk } from "../../redux/auth-reducer"

const mapStateToProps = state => {
  return {
    id: state.auth.userID,
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, { logout: logoutThunk })(Navbar);
