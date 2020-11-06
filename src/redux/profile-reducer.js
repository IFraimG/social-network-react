import { createDuck } from "redux-duck"
import { profileAPI } from "../api/api"

const myDuck = createDuck("profile", "myocean")

const ADD_POST = myDuck.defineType('ADD-POST')
const GET_USER = myDuck.defineType('GET_USER')
const REFOLLOW_USER = myDuck.defineType('REFOLLOW_USER')
const SET_STATUS = myDuck.defineType('SET_STATUS')
const SAVE_PHOTO = myDuck.defineType("SET_PHOTO")
const EDIT_MODAL = myDuck.defineType("EDIT_MODAL")
const EDIT_CONTACTS = myDuck.defineType("EDIT_CONTACTS")

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
  status: "",
  isModal: false
}

const profileReducer = myDuck.createReducer({
  [ADD_POST]: (state, action) => {
    let newPost = { id: 6, text: action.payload, likesCount: 0 };
    return { ...state, posts: [...state.posts, newPost], textValue: "" };
  },
  [GET_USER]: (state, action) => {
    return { ...state, profile: action.payload }
  },
  [REFOLLOW_USER]: (state, action) => {
    return { ...state, profile: { ...state.profile, isFollowed: !state.profile.isFollowed } }
  },
  [SET_STATUS]: (state, action) => {
    return { ...state, status: action.payload }
  },
  [SAVE_PHOTO]: (state, action) => {
    return { ...state, profile: { images: action.photos }}
  },
  [EDIT_MODAL]: (state, action) => {
    return { ...state, isModal: action.payload }
  },
  [EDIT_CONTACTS]: (state, action) => {

  }
}, stateInit) 

export const createPost = myDuck.createAction(ADD_POST)
export const setUser = myDuck.createAction(GET_USER)
export const refollowUser = myDuck.createAction(REFOLLOW_USER)
export const getStatus = myDuck.createAction(SET_STATUS)
export const setPhoto = myDuck.createAction(SAVE_PHOTO)
export const editModal = myDuck.createAction(EDIT_MODAL)
export const editContact = myDuck.createAction(EDIT_CONTACTS)

export const getUserThunk = (id) => async dispatch => {
  try {
    let data = await profileAPI.getProfile(id)
    dispatch(setUser(data))
  } catch (error) {
    console.log(error)
  }
}

export const getUserStatus = (id) => async dispatch => {
  try {
    let res = await profileAPI.getStatus(id)
    dispatch(getStatus(res.data))
  } catch (error) {
    console.log(error)
  }
}

export const updateUserStatus = (status) => async dispatch => {
  try {
    await profileAPI.updateStatus(status)
    dispatch(getStatus(status))
  } catch (error) {
    console.log(error)
  }
}

export const savePhoto = (photo) => async dispatch => {
  try {
    let data = await profileAPI.updatePhoto(photo)
    if (!data.resultCode) dispatch(setPhoto(data.photos))
  } catch (error) {
    console.log(error);
  }
}

export const sendModal = isModal => dispatch => {
  dispatch(editModal(isModal))
}

export const updateContacts = (profile) => async dispatch => {
  try {
    let data = await profileAPI.updateContacts(profile)
    dispatch(editModal(false))
    if (!data.resultCode) dispatch(setUser(profile))
  } catch (error) {
    console.log(error);
  }
}

export default profileReducer;