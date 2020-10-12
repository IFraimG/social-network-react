import MyPosts from "./MyPosts";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profile-reducer";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    textValue: state.profilePage.textValue,
    posts: state.profilePage.posts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createPost: () => dispatch(addPostActionCreator()),
    updateNewPost: text => dispatch(updateNewPostActionCreator(text))
  }
}

const SuperPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default SuperPostsContainer;
