import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { getUserThunk, getUserStatus, updateUserStatus } from "../../redux/profile-reducer";
import WithAuthRedirect from "../hoc/WithAuthRedirect";
// import WithStyleHOC from "../hoc/WithStylesHOC"

const ProfileContainer = React.memo((props) => {
  useEffect(() => {
    let id = props.match.params.id;
    if (!id) id = props.history.push("/login");
    props.getUserThunk(id);
    props.getUserStatus(id);
  }, []);

  return (
    <Profile
      {...props}
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateUserStatus}
    />
  );
})

function mapStateToProps(state) {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  };
}

export default compose(
  withRouter,
  WithAuthRedirect,
  connect(mapStateToProps, { getUserThunk, getUserStatus, updateUserStatus })
)(ProfileContainer);
