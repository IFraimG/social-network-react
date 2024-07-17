import { Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"
import { profileAPI } from "../api/api"
import { AppStateType } from "./redux-store"

const ADD_POST = 'myocean/profile/ADD-POST'
const GET_USER = 'myocean/profile/GET_USER'
const REFOLLOW_USER = 'myocean/profile/REFOLLOW_USER'
const SET_STATUS = 'myocean/profile/SET_STATUS'
const SAVE_PHOTO = "myocean/profile/SET_PHOTO"
const EDIT_MODAL = "myocean/profile/EDIT_MODAL"
// const EDIT_CONTACTS = "myocean/profile/EDIT_CONTACTS"

type posts = { id: number, text: string, likesCount: number }
type stateInitType = {
  posts: Array<posts>,
  textValue: string | undefined,
  profile: any,
  status: string | undefined,
  isModal: boolean
}

let stateInit: stateInitType = {
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

type ActionsTypes = createPostActionType | setUserActionType | refollowUserActionType | 
  getStatusActionType | setPhotoActionType | editModalActionType

const profileReducer = (state = stateInit, action: ActionsTypes): stateInitType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = { id: 6, text: action.payload, likesCount: 0 };
      return { ...state, posts: [...state.posts, newPost], textValue: "" };
    }
    case GET_USER: {
      return { ...state, profile: action.payload }
    }
    case REFOLLOW_USER:  {
      return { ...state, profile: { ...state.profile, isFollowed: !state.profile.isFollowed } }
    }
    case SET_STATUS: {
      return { ...state, status: action.payload }
    }
    case SAVE_PHOTO: {
      return { ...state, profile: { images: action.payload }}
    }
    case EDIT_MODAL: {
      return { ...state, isModal: action.payload }
    }
    default: return {...state}
  }
} 

type createPostActionType = { type: typeof ADD_POST, payload: string }
export const createPost = (text: string): createPostActionType => ({type: ADD_POST, payload: text})

type setUserActionType = { type: typeof GET_USER, payload: any }
export const setUser = (data: any): setUserActionType => ({type: GET_USER, payload: data})

type refollowUserActionType = { type: typeof REFOLLOW_USER }
export const refollowUser = (): refollowUserActionType => ({type: REFOLLOW_USER})

type getStatusActionType = { type: typeof SET_STATUS, payload: string }
export const getStatus = (status: string): getStatusActionType => ({type: SET_STATUS, payload: status})

type setPhotoActionType = { type: typeof SAVE_PHOTO, payload: any }
export const setPhoto = (photos: any): setPhotoActionType => ({type: SAVE_PHOTO, payload: photos})

type editModalActionType = { type: typeof EDIT_MODAL, payload: boolean }
export const editModal = (isModal: boolean): editModalActionType => ({type: EDIT_MODAL, payload: isModal})
// export const editContact = () => ({type: EDIT_CONTACTS, payload: })

type getState = () => AppStateType
type dispatchType = Dispatch<ActionsTypes>
type thunkReturnType = ThunkAction<void, AppStateType, unknown, ActionsTypes>

export const getUserThunk = (id: number): thunkReturnType => async (dispatch: dispatchType) => {
  try {
    let data = await profileAPI.getProfile(id)
    dispatch(setUser(data))
  } catch (error) {
    console.log(error)
  }
}

export const getUserStatus = (id: number): thunkReturnType => async (dispatch: dispatchType) => {
  try {
    let res = await profileAPI.getStatus(id)
    dispatch(getStatus(res.data))
  } catch (error) {
    console.log(error)
  }
}

export const updateUserStatus = (status: string): thunkReturnType => async (dispatch: dispatchType) => {
  try {
    await profileAPI.updateStatus(status)
    dispatch(getStatus(status))
  } catch (error) {
    console.log(error)
  }
}

export const savePhoto = (photo: any): thunkReturnType => async (dispatch: dispatchType) => {
  try {
    let data = await profileAPI.updatePhoto(photo)
    if (!data.resultCode) dispatch(setPhoto(data.photos))
  } catch (error) {
    console.log(error);
  }
}

export const sendModal = (isModal: boolean): thunkReturnType => (dispatch: dispatchType) => {
  dispatch(editModal(isModal))
}

export const updateContacts = (profile: any): thunkReturnType => async (dispatch: dispatchType) => {
  try {
    let data = await profileAPI.updateContacts(profile)
    dispatch(editModal(false))
    if (!data.resultCode) dispatch(setUser(profile))
  } catch (error) {
    console.log(error);
  }
}

export default profileReducer;