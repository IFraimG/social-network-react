import React from "react";
import Post from "./Post/Post";
import CreatePost from "./CreatePost/CreatePost";
import c from "./MyPosts.module.css";

function MyPosts(props) {
  let post = props.store.getState.profilePage.posts.map(item => <Post key={ item.id } text={ item.text } likes={ item.likesCount } />)
  return (
    <div>
      <CreatePost updateNewPost={ props.store.updateNewPost.bind(props.store) } addPost={ props.store.addPost.bind(props.store) } textValue={ props.store.getState.profilePage.textValue } />
      <div className={c.posts}>
        <h1>My posts</h1>
        { post }
      </div>
    </div>
  );
}

export default MyPosts;
