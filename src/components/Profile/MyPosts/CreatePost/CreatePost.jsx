import React, { useRef } from "react";
import c from "./CreatePost.module.css";
// import { addPostActionCreator, updateNewPostActionCreator } from "../../../../redux/profile-reducer"

function CreatePost(props) {
  let postElement = useRef(null)

  let createPost = () => {
    props.addPost(postElement.current.value)
  }

  let changePost = () => {
    props.updateNewPost(postElement.current.value)
  }

  return (
    <div className={ c.createpost }>
      <h1>New post</h1>
      <div className={ c.createpost__content }>
        <div className={ c.createpost__field }>
            <textarea ref={ postElement } onChange={ changePost } value={ props.textValue } placeholder="Tell about us yourself..." />
        </div>
        <div className={ c.createpost__rules }>
          <button onClick={ createPost }>Publish a post</button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
