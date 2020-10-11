const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"

function profileReducer(state, action) {
  switch (action.type) {
    case ADD_POST:
      let newPost = { id: 6, text: state.textValue, likesCount: 0 };
      state.posts.push(newPost);
      state.textValue = "";
      return state;
    case UPDATE_POST_TEXT: 
      state.textValue = action.data;
      return state;
    default: return state;
  }
}

export function addPostActionCreator() {
  return { type: ADD_POST }
}

export function updateNewPostActionCreator(data) {
  return { type: UPDATE_POST_TEXT, data: data}
}

export default profileReducer;