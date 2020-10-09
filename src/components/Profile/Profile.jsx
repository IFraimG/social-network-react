import React from "react";
import c from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
  return (
    <main>
      <ProfileInfo />
      <MyPosts />
    </main>
  );
}

export default Profile;