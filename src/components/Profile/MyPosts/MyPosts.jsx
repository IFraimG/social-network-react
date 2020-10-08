import React from "react";
import Post from "./Post/Post";
import c from "./MyPosts.module.css";

function MyPosts() {
  return (
    <div>
      <div>
        my posts
        <div>new post</div>
      </div>
      <div className={c.posts}>
        <Post msg="helllllo1" />
        <Post msg="helllllo2" />
        <Post msg="helllllo3" />
        <Post msg="helllllo4" />
        <Post msg="helllllo5" />
        <Post msg="helllllo6" />
      </div>
    </div>
  );
}

export default MyPosts;
