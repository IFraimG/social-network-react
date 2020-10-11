const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"

let stateInit = {
  posts: [
    { id: 1, text: "hellllo1", likesCount: 0 },
    { id: 2, text: "hellllo2", likesCount: 3 },
    { id: 3, text: "hellllo3", likesCount: 5 },
    { id: 4, text: "hellllo4", likesCount: 6 },
    { id: 5, text: "hellllo5", likesCount: 4 },
  ],
  textValue: "",
  users: [
    { id: 1, name: "Pushok1" },
    { id: 2, name: "Pushok2" },
  ],
}

function profileReducer(state = stateInit, action) {
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