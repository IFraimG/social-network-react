import React from "react";
import c from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <main>
      <ProfileInfo />
      <MyPosts posts={ props.posts } />
    </main>
  );
}

export default Profile;