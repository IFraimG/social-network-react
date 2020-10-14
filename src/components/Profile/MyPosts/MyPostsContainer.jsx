import MyPosts from "./MyPosts";
import { createPost, updateNewPost } from "../../../redux/profile-reducer";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    textValue: state.profilePage.textValue,
    posts: state.profilePage.posts
  }
}

export default connect(mapStateToProps, { createPost: createPost, updateNewPost: updateNewPost })(MyPosts);