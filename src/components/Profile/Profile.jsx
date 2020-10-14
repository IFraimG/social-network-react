import React from "react";
import SuperPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <main>
      <ProfileInfo profile={ props.profile } />
      <SuperPostsContainer />
    </main>
  );
}

export default Profile;