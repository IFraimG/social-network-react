import React from "react";
import { NavLink } from "react-router-dom";
import c from "./Post.module.css";

function MyPosts(props) {
  return (
    <div className={ c.post }>
      <div className={ c.post__title }>
        <img className={ c.post__image } src="https://images.unsplash.com/photo-1560275619-4662e36fa65c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1076&q=80" />
        <NavLink className={ c.post__name } to="/">Пушок Пушок</NavLink>
      </div>
      <p className={ c.post__text }>{ props.text }</p>
      <p>{ props.likes } likes</p>
    </div>
  );
}

export default MyPosts;
