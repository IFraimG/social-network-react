import React from "react";
import c from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
  return (
    <main className={ c.content }>
      <div className={ c.inner }>
        <div className={ c.poster }>
          <img src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg?fit=fill&w=800&h=300" />
        </div>
        <div>ava description</div>
        <MyPosts />
      </div>
    </main>
  );
}

export default Profile;