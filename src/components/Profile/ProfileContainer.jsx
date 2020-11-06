import React, { useState, useEffect, useRef } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { getUserThunk, getUserStatus, updateUserStatus, savePhoto, sendModal } from "../../redux/profile-reducer";
import WithAuthRedirect from "../hoc/WithAuthRedirect";
// import WithStyleHOC from "../hoc/WithStylesHOC"

const ProfileContainer = React.memo((props) => {
  const [IUser, setIsUser] = useState({isUser: false, id: ""})
  const prevRouteID = useRef(IUser.id)

  useEffect(() => {
    let id = props.match.params.id;
    if (!id) id = props.history.push("/login");
    props.getUserThunk(id);
    props.getUserStatus(id);
    setIsUser(() => ({isUser: props.match.params.id == props.isUser, id: props.match.params.id}))
  }, []);

  return (
    <Profile
      {...props}
      // profile={props.profile}
      // status={props.status}
      updateStatus={props.updateUserStatus}
      isUser={IUser.isUser}
    />
  );
})

function mapStateToProps(state) {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isUser: state.auth.userID,
    isModal: state.profilePage.isModal
  };
}

export default compose(
  withRouter,
  WithAuthRedirect,
  connect(mapStateToProps, { getUserThunk, getUserStatus, updateUserStatus, savePhoto, sendModal })
)(React.memo(ProfileContainer));
