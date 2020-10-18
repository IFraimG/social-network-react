import React from "react";
import { Form, Field } from "react-final-form"
import c from "./CreatePost.module.css";

function CreatePost(props) {

  let createPost = (text) => {
    props.addPost(text.textField)
    text.textField = ""
  }

  return (
    <Form initialValues={props.textValue} onSubmit={createPost}>
      { formProps => (
        <form onSubmit={formProps.handleSubmit}>
          <div className={ c.createpost }>
            <h1>New post</h1>
            <div className={ c.createpost__content }>
              <div className={ c.createpost__field }>
                <Field name="textField" component="textarea" placeholder="Tell about us yourself..."  />
              </div>
              <div className={ c.createpost__rules }>
                <button type="submit">Publish a post</button>
              </div>
            </div>
          </div>
        </form>
      )}
    </Form>
  );
}

export default CreatePost;
