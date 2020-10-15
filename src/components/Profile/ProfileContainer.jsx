import React from "react";
import Profile from "./Profile";
import { profileAPI } from "../../api/api"
import { connect } from "react-redux"
import { withRouter, Redirect } from "react-router-dom"
import { setUser, refollowUser } from "../../redux/profile-reducer"

class ProfileContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.id
    profileAPI.getProfile(id)
      .then(data => this.props.setUserData(data))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.props.match.params.id) {
      return <Redirect to={{ pathname: "/" }} />
    }
    return <Profile { ...this.props } profile={ this.props.profile } />
  } 
}

function mapStateToProps(state) {
  return {
    profile: state.profilePage.profile
  }
}

let urlDataComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserData: setUser, refollowUser })(urlDataComponent);