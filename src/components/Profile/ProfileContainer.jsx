import React from "react";
import Profile from "./Profile";
import { profileAPI } from "../../api/api"
import { connect } from "react-redux"
import { compose } from "redux"
import { withRouter } from "react-router-dom"
import { setUser, refollowUser } from "../../redux/profile-reducer"
import WithAuthRedirect from "../hoc/WithAuthRedirect"

class ProfileContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.id
    profileAPI.getProfile(id)
      .then(data => this.props.setUserData(data))
      .catch(err => console.log(err))
  }

  render() {
    return <Profile { ...this.props } profile={ this.props.profile } />
  } 
}

function mapStateToProps(state) {
  return { profile: state.profilePage.profile }
}

export default compose(
  withRouter, 
  WithAuthRedirect, 
  connect(mapStateToProps, { setUserData: setUser, refollowUser })
)(ProfileContainer)