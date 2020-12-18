import { authAPI } from "../api/api"
import { authUserThunk } from "./auth-reducer";

const SET_INIT: string = "SET_INIT"

type stateDefaultType = {
  init: boolean,
  globalError: null | string
}

let stateDefault = {
  init: false,
  globalError: null
};

function appReducer(state = stateDefault, action: any): stateDefaultType {
  switch (action.type) {
    case SET_INIT:
      return { ...state, init: true }
    default:
      return { ...state };
  }
}

type setInitActionType = { type: typeof SET_INIT }
export const setInit = (): setInitActionType => ({ type: SET_INIT })

export const initializeApp = () => (dispatch: any) => {
  let res = dispatch(authUserThunk())
  Promise.all([res]).then(() => dispatch(setInit()))
}

export default appReducer;