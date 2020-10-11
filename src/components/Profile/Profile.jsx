import React from "react";
import c from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <main>
      <ProfileInfo />
      <MyPostsContainer store={ props.store } />
    </main>
  );
}

export default Profile;