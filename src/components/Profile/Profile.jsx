import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <main>
      <ProfileInfo 
        {...props}
        // status={props.status} 
        // updateStatus={props.updateUserStatus}
        // savePhoto={props.savePhoto}
        // profile={props.profile} 
        // isUser={props.isUser}
      />
      <MyPostsContainer />
    </main>
  );
}

export default Profile;