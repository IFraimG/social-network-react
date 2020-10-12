import React from "react";
import CreatePost from "./CreatePost/CreatePost";
import Post from "./Post/Post";
import c from "./MyPosts.module.css";

function MyPosts(props) {
  let obj1 = {
    name: "Pushok",
    age: 2,
    classroom: ["лол", "кек", "питон", "круто"],
    isTrue: false,
    pushok: {
      lol: "kek",
      piton: "круто"
    }
  }
  let obj2 = { ...obj1 }
  obj2.pushok = { ...obj1.pushok }

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
