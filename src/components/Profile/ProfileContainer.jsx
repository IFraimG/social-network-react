import React from "react";
import Profile from "./Profile";
import axios from "axios"
import { connect } from "react-redux"
import { setUser } from "../../redux/profile-reducer"

class ProfileContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.id
    axios.get("https://social-network.samuraijs.com/api/1.0/profile/" + id)
      .then(res => this.props.setUserData(res.data))
      .catch(err => console.log(err))
  }

  render() {
    return <Profile { ...this.props } profile={ this.props.profile } />
  } 
}

function mapStateToProps(state) {
  return {
    profile: state.profilePage.profile
  }
}

export default connect(mapStateToProps, { setUserData: setUser })(ProfileContainer);