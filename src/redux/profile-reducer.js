import { profileAPI } from "../api/api"

const ADD_POST = "ADD-POST"
const GET_USER = "GET_USER"
const REFOLLOW_USER = "REFOLLOW_USER"
const SET_STATUS = "SET_STATUS"

let stateInit = {
  posts: [
    { id: 1, text: "hellllo1", likesCount: 0 },
    { id: 2, text: "hellllo2", likesCount: 3 },
    { id: 3, text: "hellllo3", likesCount: 5 },
    { id: 4, text: "hellllo4", likesCount: 6 },
    { id: 5, text: "hellllo5", likesCount: 4 },
  ],
  textValue: "",
  profile: {},
  status: ""
}

function profileReducer(state = stateInit, action) {
  switch (action.type) {
    case ADD_POST:
      let newPost = { id: 6, text: action.data, likesCount: 0 };
      return { ...state, posts: [...state.posts, newPost], textValue: "" };
    case GET_USER:
      return { ...state, profile: action.data }
    case REFOLLOW_USER:
      return { ...state, profile: { ...state.profile, isFollowed: !state.profile.isFollowed } }
    case SET_STATUS:
      return { ...state, status: action.data }
    default: return { ...state };
  }
}

export const createPost = postText => ({ type: ADD_POST, data: postText })
export const setUser = profile => ({ type: GET_USER, data: profile })
export const refollowUser = () => ({ type: REFOLLOW_USER  })
export const getStatus = status => ({ type: SET_STATUS, data: status })

export const getUserThunk = (id) => dispatch => {
  profileAPI.getProfile(id)
    .then(data => dispatch(setUser(data)))
    .catch(err => console.log(err))
}

export const getUserStatus = (id) => dispatch => {
  profileAPI.getStatus(id)
    .then(res => dispatch(getStatus(res.data)))
    .catch(err => console.log(err))
}

export const updateUserStatus = (status) => dispatch => {
  profileAPI.updateStatus(status)
    .then(() => dispatch(getStatus(status)))
    .catch(err => console.log(err))
}

export default profileReducer;