import React from "react";
import CreatePost from "./CreatePost/CreatePost";
import Post from "./Post/Post";
import c from "./MyPosts.module.css";

function MyPosts(props) {
  let post = props.posts.map(item => <Post key={ item.id } text={ item.text } likes={ item.likesCount } />)
  return (
    <div>
      <CreatePost updateNewPost={ props.updateNewPost } addPost={ props.createPost } textValue={ props.textValue } />
      <div className={c.posts}>
        <h1>My posts</h1>
        { post }
      </div>
    </div>
  );
}

export default MyPosts;
