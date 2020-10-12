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
  textValue: ""
}

function profileReducer(state = stateInit, action) {
  switch (action.type) {
    case ADD_POST:
      let newPost = { id: 6, text: state.textValue, likesCount: 0 };
      return { ...state, posts: [...state.posts, newPost], textValue: "" };
    case UPDATE_POST_TEXT: 
      return { ...state, textValue: action.data };
    default: return { ...state };
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = data => ({ type: UPDATE_POST_TEXT, data: data})

export default profileReducer;