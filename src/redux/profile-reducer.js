const ADD_POST = "ADD-POST"
const GET_USER = "GET_USER"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"
const REFOLLOW_USER = "REFOLLOW_USER"

let stateInit = {
  posts: [
    { id: 1, text: "hellllo1", likesCount: 0 },
    { id: 2, text: "hellllo2", likesCount: 3 },
    { id: 3, text: "hellllo3", likesCount: 5 },
    { id: 4, text: "hellllo4", likesCount: 6 },
    { id: 5, text: "hellllo5", likesCount: 4 },
  ],
  textValue: "",
  profile: {}
}

function profileReducer(state = stateInit, action) {
  switch (action.type) {
    case ADD_POST:
      let newPost = { id: 6, text: state.textValue, likesCount: 0 };
      return { ...state, posts: [...state.posts, newPost], textValue: "" };
    case UPDATE_POST_TEXT: 
      return { ...state, textValue: action.data };
    case GET_USER:
      return { ...state, profile: action.data }
    case REFOLLOW_USER:
      return { ...state, profile: { ...state.profile, isFollowed: !state.profile.isFollowed } }
    default: return { ...state };
  }
}

export const createPost = () => ({ type: ADD_POST })
export const updateNewPost = data => ({ type: UPDATE_POST_TEXT, data: data})
export const setUser = profile => ({ type: GET_USER, data: profile })
export const refollowUser = () => ({ type: REFOLLOW_USER  })

export default profileReducer;