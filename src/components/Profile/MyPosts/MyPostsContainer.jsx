import React from "react";
import MyPosts from "./MyPosts";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profile-reducer";

function MyPostsContainer(props) {
  
  let createPost = text => {
    if (text) props.store.dispatch(addPostActionCreator(text))
  };

  let changePost = text => props.store.dispatch(updateNewPostActionCreator(text))

  return <MyPosts createPost={ createPost } textValue={ props.store.getState().profilePage.textValue } posts={ props.store.getState().profilePage.posts } updateNewPost={ changePost } />;
}

export default MyPostsContainer;
