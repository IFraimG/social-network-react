import React from "react";
import Post from "./Post/Post";
import CreatePost from "./Post/CreatePost";
import c from "./MyPosts.module.css";

function MyPosts() {
  return (
    <div>
      <CreatePost />
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
