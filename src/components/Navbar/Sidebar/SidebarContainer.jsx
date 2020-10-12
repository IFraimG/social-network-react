import Sidebar from "./Sidebar"
import { connect } from "react-redux"

function mapStateToProps(state) {
  return {
    friends: state.sidebar.friends
  }
}

const SuperSidebarContainer = connect(mapStateToProps)(Sidebar)

export default SuperSidebarContainer;
