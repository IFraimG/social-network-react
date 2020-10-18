import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux"
import { compose } from "redux"
import { withRouter } from "react-router-dom"
import { getUserThunk, getUserStatus, updateUserStatus } from "../../redux/profile-reducer"
import WithAuthRedirect from "../hoc/WithAuthRedirect"
// import WithStyleHOC from "../hoc/WithStylesHOC"

class ProfileContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.id
    if (!id) id = this.props.history.push("/login")
    this.props.getUserThunk(id)
    this.props.getUserStatus(id)
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateUserStatus} />
  } 
}

function mapStateToProps(state) {
  return { profile: state.profilePage.profile, status: state.profilePage.status }
}

export default compose(
  // WithStyleHOC,
  withRouter, 
  WithAuthRedirect, 
  connect(mapStateToProps, { getUserThunk, getUserStatus, updateUserStatus })
)(ProfileContainer)