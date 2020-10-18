import { authAPI } from "../api/api"

const SET_USER_DATA = "SET_USER_DATA"
const DELETE_USER_DATA = "DELETE_USER_DATA"
const SET_USER_ID = "SET_USER_ID"
const SET_ERR = "SET_ERR"
const CLEAR_ERROR = "CLEAR_ERROR"

let stateDefault = {
  userID: null,
  email: null,
  login: null,
  isAuth: false,
  errorsList: []
};

function authReducer(state = stateDefault, action) {
  switch (action.type) {
    case SET_USER_DATA:
        return { ...state, ...action.data, isAuth: true }
    case DELETE_USER_DATA:
      return { ...state, isAuth: false, userID: null, email: null, login: null }
    case SET_USER_ID:
      return { ...state, userID: action.data, isAuth: true }
    case SET_ERR:
      return { ...state, errorsList: [action.data] }
    case CLEAR_ERROR:
      return { ...state, errorsList: [] }
    default:
      return { ...state };
  }
}

export const setUser = (userID, email, login) => ({ type: SET_USER_DATA, data: { userID, email, login }})
export const deleteUser = () => ({ type: SET_USER_DATA })
export const setUserID = id => ({ type: SET_USER_ID, data: id })
export const setError = err => ({ type: SET_ERR, data: err })
export const clearError = () => ({ type: CLEAR_ERROR })

export const authUserThunk = () => dispatch => {
  authAPI.authUser()
    .then(data => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data
        dispatch(setUser(id, email, login))
      }
    })
}

export const logoutThunk = () => dispatch => {
  authAPI.logout()
    .then(data => {
      console.log(data)
      dispatch(deleteUser())
    })
    .catch(err => console.log(err))
}

export const loginUserThunk = data => dispatch => {
  authAPI.loginUser(data.emailField, data.passwordField, data.rememberMeField)
    .then(res => {
      console.log(res)
      if (!res.resultCode) {
        dispatch(setUserID(res.data.userId))
        dispatch(clearError())
      }
      else dispatch(setError(res.messages))
    })
    .catch(err => console.log("Err", err))
}

export default authReducer;