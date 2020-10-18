import { authAPI } from "../api/api"
import { authUserThunk } from "./auth-reducer";

const SET_INIT = "SET_INIT"

let stateDefault = {
  init: false
};

function appReducer(state = stateDefault, action) {
  switch (action.type) {
    case SET_INIT:
      return { ...state, init: true }
    default:
      return { ...state };
  }
}

export const setInit = () => ({ type: SET_INIT })

export const initializeApp = () => dispatch => {
  let res = dispatch(authUserThunk())
  Promise.all([res]).then(() => dispatch(setInit()))
}

export default appReducer;