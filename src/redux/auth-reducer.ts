import { authAPI } from "../api/api"

// КЛЮЧ К ЭКШОНАМ

const SET_USER_DATA: string = "myocean/auth/SET_USER_DATA"
const DELETE_USER_DATA: string = "myocean/auth/DELETE_USER_DATA"
const SET_USER_ID: string = "myocean/auth/SET_USER_ID"
const SET_ERR: string = "myocean/auth/SET_ERR"
const CLEAR_ERROR: string= "myocean/auth/CLEAR_ERROR"
const GET_CAPTCHA_URL: string = "myocean/auth/GET_CAPTCHA"

// СТЭЙТ

type stateDefaultType = {
  userID: number | string | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
  errorsList: Array<string>,
  captchaURL: string | null
}

let stateDefault: stateDefaultType = {
  userID: null,
  email: null,
  login: null,
  isAuth: false,
  errorsList: [],
  captchaURL: null
};

// export type stateDefaultType = typeof stateDefault;

// РЕДЮСЕРЫ

const authReducer = (state = stateDefault, action: any): stateDefaultType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state, userID: action.payload.id, login: action.payload.login, email: action.payload.email, isAuth: true 
      }
    }
    case DELETE_USER_DATA: {
      return { ...state, isAuth: false, userID: null, email: null, login: null }
    }
    case SET_USER_ID: {
      return { ...state, userID: action.payload, isAuth: true }
    }
    case SET_ERR: {
      return { ...state, errorsList: [...state.errorsList, action.payload] }
    }
    case CLEAR_ERROR:{
      return {...state, errorsList: []}
    }
    case GET_CAPTCHA_URL: {
      return { ...state, captchaURL: action.payload }
    }
    default: return {...state}
  }
}

// ЭКШОНЫ 

type authDataType = {
  id: string | undefined,
  email: string | undefined,
  login: string | undefined
}
type setUserActionType = {
  type: typeof SET_USER_DATA,
  payload: authDataType,

}
export const setUser = (payload: authDataType): setUserActionType => ({
  type: SET_USER_DATA, payload: { id: payload.id, login: payload.login, email: payload.email }
})

type deleteUserActionType = {type: typeof DELETE_USER_DATA}
export const deleteUser = (): deleteUserActionType => ({type: DELETE_USER_DATA})

type setUserIDActionType = {type: typeof SET_USER_ID, payload: {userID: string}}
export const setUserID = (userID: string): setUserIDActionType => ({type: SET_USER_ID, payload: {userID}})

type setErrorActionType = {type: typeof SET_ERR, payload: string}
export const setError = (msg: string): setErrorActionType => ({type: SET_ERR, payload: msg})

type clearErrorActionType = {type: typeof CLEAR_ERROR}
export const clearError = (): clearErrorActionType => ({type: CLEAR_ERROR})

type getCaptchaActionType = {
  type: typeof GET_CAPTCHA_URL, 
  payload: string | null
}
export const getCaptcha = (captchURL: string): getCaptchaActionType => ({type: GET_CAPTCHA_URL, payload: captchURL})

// САНКИ

export const getCaptchaURL = () => async (dispatch: any) => {
  let res = await authAPI.getCaptchaURL()
  let captchURL: string = res.data.url
  dispatch(getCaptcha(captchURL))
}


export const authUserThunk = () => async (dispatch: any) => {
  let data: any = await authAPI.authUser()
  if (data.resultCode === 0) {
    let dataInfo: authDataType = data.data
    dispatch(setUser({id: dataInfo.id, email: dataInfo.email, login: dataInfo.login}))
  }
  return data
}

export const logoutThunk = () => async (dispatch: any) => {
  try {
    await authAPI.logout()
    dispatch(deleteUser())
  } catch (error) {
    console.log(error)
  }
}

type loginUserDataType = {
  emailField: string | undefined,
  passwordField: string | undefined,
  rememberMeField: boolean,
  captchaField: string | undefined | null
}
export const loginUserThunk = (data: loginUserDataType) => async (dispatch: any) => {
  try {
    let res = await authAPI.loginUser(data.emailField, data.passwordField, data.rememberMeField, data.captchaField)
    if (!res.resultCode) {
      dispatch(setUserID(res.data.userId))
      dispatch(clearError())
    }
    else {
      dispatch(getCaptchaURL())
      dispatch(setError(res.messages))
    }
  } catch (error) {
    console.log("Err", error)
  }
}

export default authReducer;