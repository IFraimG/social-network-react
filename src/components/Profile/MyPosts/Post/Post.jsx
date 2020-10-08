import React from "react";
import c from "./Post.module.css";

function MyPosts(props) {
  return (
    <div className={ c.post }>
      <img className={ c.post__image } src="https://images.unsplash.com/photo-1560275619-4662e36fa65c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1076&q=80" />
      <p className={ c.post__text }>{ props.msg }</p>
    </div>
  );
}

export default MyPosts;
