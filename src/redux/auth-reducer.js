import { authAPI } from "../api/api"

const SET_USER_DATA = "SET_USER_DATA"

let stateDefault = {
  userID: null,
  email: null,
  login: null,
  isAuth: false
};

function authReducer(state = stateDefault, action) {
  switch (action.type) {
    case SET_USER_DATA:
        return { ...state, ...action.data, isAuth: true }
    default:
      return { ...state };
  }
}

export const setUser = (userID, email, login) => ({ type: SET_USER_DATA, data: { userID, email, login }})

export const authUserThunk = () => dispatch => {
  authAPI.authUser()
    .then(data => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data
        dispatch(setUser(id, email, login))
      }
    })
}

export default authReducer;