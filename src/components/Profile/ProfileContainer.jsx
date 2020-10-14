import React from "react";
import Profile from "./Profile";
import axios from "axios"
import { connect } from "react-redux"
import { withRouter, Redirect } from "react-router-dom"
import { setUser, refollowUser } from "../../redux/profile-reducer"

class ProfileContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.id
    axios.get("https://social-network.samuraijs.com/api/1.0/profile/" + id)
      .then(res => this.props.setUserData(res.data))
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