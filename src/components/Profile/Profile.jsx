import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <main>
      <ProfileInfo 
        status={props.status} 
        updateStatus={props.updateUserStatus} 
        profile={props.profile} 
      />
      <MyPostsContainer />
    </main>
  );
}

export default Profile;