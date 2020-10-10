import React, { useRef } from "react";
import c from "./CreatePost.module.css";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../../redux/state"

function CreatePost(props) {
  let postElement = useRef(null)

  let createPost = () => {
    if (postElement.current.value) {
      let action = addPostActionCreator()
      props.dispatch(action)
    }
  }

  let changePost = () => {
    let action = updateNewPostActionCreator(postElement.current.value)
    props.dispatch(action)
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
