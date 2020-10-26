import { createDuck } from "redux-duck"
import { authAPI } from "../api/api"

const myDuck = createDuck("auth", "myocean")

const SET_USER_DATA = myDuck.defineType("SET_USER_DATA")
const DELETE_USER_DATA = myDuck.defineType("DELETE_USER_DATA")
const SET_USER_ID = myDuck.defineType("SET_USER_ID")
const SET_ERR = myDuck.defineType("SET_ERR")
const CLEAR_ERROR = myDuck.defineType("CLEAR_ERROR")

let stateDefault = {
  userID: null,
  email: null,
  login: null,
  isAuth: false,
  errorsList: []
};

const authReducer = myDuck.createReducer({
  [SET_USER_DATA]: (state, action) => {
    return { ...state, userID: action.payload, isAuth: true }
  },
  [DELETE_USER_DATA]: (state, action) => {
    return { ...state, isAuth: false, userID: null, email: null, login: null }
  },
  [SET_USER_ID]: (state, action) => {
    return { ...state, userID: action.payload, isAuth: true }
  },
  [SET_ERR]: (state, action) => {
    return { ...state, errorsList: [action.payload] }
  },
  [CLEAR_ERROR]: (state, action) => {
    return {...state, errorsList: []}
  }
}, stateDefault)

export const setUser = myDuck.createAction(SET_USER_DATA)
export const deleteUser = myDuck.createAction(SET_USER_DATA)
export const setUserID = myDuck.createAction(SET_USER_ID)
export const setError = myDuck.createAction(SET_ERR)
export const clearError = myDuck.createAction(CLEAR_ERROR)

export const authUserThunk = () => async dispatch => {
  let data = await authAPI.authUser()
  if (data.resultCode === 0) {
    let { id, login, email } = data.data
    dispatch(setUser(id, email, login))
  }
  return data
}

export const logoutThunk = () => dispatch => {
  authAPI.logout()
    .then(data => {
      console.log(data)
      dispatch(deleteUser())
    })
    .catch(err => console.log(err))
}

export const loginUserThunk = data => async dispatch => {
  try {
    let res = await authAPI.loginUser(data.emailField, data.passwordField, data.rememberMeField)
    if (!res.resultCode) {
      dispatch(setUserID(res.data.userId))
      dispatch(clearError())
    }
    else dispatch(setError(res.messages))
  } catch (error) {
    console.log("Err", error)
  }
}

export default authReducer;