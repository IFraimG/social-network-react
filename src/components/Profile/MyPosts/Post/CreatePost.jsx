import React from "react";
import c from "./CreatePost.module.css";

function CreatePost(props) {
  return (
    <div className={ c.createpost }>
      <div className={ c.createpost__content }>
        <div className={ c.createpost__field }>
            <textarea placeholder="Tell about us yourself..."></textarea>
        </div>
        <div className={ c.createpost__rules }>
          <button>Publish a post</button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
