import React from "react";
import MyPosts from "./MyPosts";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";

function MyPostsContainer() {
  return (
    <StoreContext.Consumer>
      { store => {
        let createPost = text => {
          if (text) store.dispatch(addPostActionCreator(text))
        };

        let changePost = text => store.dispatch(updateNewPostActionCreator(text))

        return <MyPosts 
          createPost={ createPost } 
          textValue={ store.getState().profilePage.textValue } 
          posts={ store.getState().profilePage.posts } 
          updateNewPost={ changePost } 
        /> 
      }}
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;
