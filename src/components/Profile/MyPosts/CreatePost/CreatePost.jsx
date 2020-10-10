import React, { useRef } from "react";
import c from "./CreatePost.module.css";

function CreatePost(props) {

  let postElement = useRef(null)

  let createPost = () => {
    if (postElement.current.value) props.addPosts(postElement.current.value)
    postElement.current.value = ""
  }

  return (
    <div className={ c.createpost }>
      <h1>New post</h1>
      <div className={ c.createpost__content }>
        <div className={ c.createpost__field }>
            <textarea ref={ postElement } placeholder="Tell about us yourself..."></textarea>
        </div>
        <div className={ c.createpost__rules }>
          <button onClick={ createPost }>Publish a post</button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
