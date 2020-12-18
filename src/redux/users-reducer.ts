import { AppStateType } from './redux-store';
import { Dispatch } from 'redux';
import { usersAPI } from "../api/api";
import { updateObject } from "../utils/object-check";
import { ThunkAction } from 'redux-thunk';

const REFOLLOW_USER: string = "myocean/users/REFOLLOW_USER";
const SET_USER: string = "myocean/users/SET_USER";
const ADD_USERS: string = "myocean/users/ADD_USERS";
const EDIT_PAGE: string = "myocean/users/EDIT_PAGE";
const EDIT_TOTAL_COUNT: string = "myocean/users/EDIT_TOTAL_COUNT";
const GET_FULL_PAGE: string = "myocean/users/GET_FULL_PAGE";
const RELOAD_METHOD: string = "myocean/users/RELOAD_METHOD";
const FOLLOW_PROGRESS: string = "myocean/users/FOLLOW_PROGRESS";

type stateDefaultType = {
  users: Array<any>,
  pageSize: number,
  totalUsersCount: number,
  totalFullCount: number,
  isFull: boolean,
  isFollowers: boolean,
  currentPage: number,
  isLoading: boolean,
  isAutoLoading: boolean,
  followingAtProgress: Array<number>
}

let stateDefault: stateDefaultType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  totalFullCount: 0,
  isFull: false,
  isFollowers: false,
  currentPage: 1,
  isLoading: false,
  isAutoLoading: false,
  followingAtProgress: []
};

type ActionTypes = refollowType | setUsersType | addUsersType | editPageType | 
  setTotalCountType | toggleFollowingType | getFullPagesType | reloadingType

const usersReducer = (state = stateDefault, action: ActionTypes): stateDefaultType => {
  switch (action.type) {
    case SET_USER:
      return { ...state, users: [...action.payload] };
    case ADD_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload.items],
        currentPage: state.currentPage + 1,
        isAutoLoading: true,
      };
    case REFOLLOW_USER:
      return { ...state, users: updateObject(state.users, action.payload) };
    case EDIT_PAGE:
      return { ...state, currentPage: action.payload };
    case EDIT_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.payload / 3,
        totalFullCount: action.payload,
        isAutoLoading: false,
      };
    case GET_FULL_PAGE:
      let fullData = state.totalFullCount;
      return { ...state, totalUsersCount: fullData, isFull: true };
    case RELOAD_METHOD:
      return { ...state, isLoading: !state.isLoading };
    case FOLLOW_PROGRESS:
      return {
        ...state,
        followingAtProgress: action.payload.isFetching
          ? [...state.followingAtProgress, action.payload.id]
          : [...state.followingAtProgress.filter((id: number) => id !== action.payload)],
      };
    default:
      return { ...state };
  }
}

type refollowType = {type: typeof REFOLLOW_USER, payload: string | number}
export const refollow = (userID: string): refollowType => ({ type: REFOLLOW_USER, payload: userID });

type setUsersType = {type: typeof SET_USER, payload: any}
export const setUsers = (usersData: any): setUsersType => ({ type: SET_USER, payload: usersData });

type addUsersType = {type: typeof ADD_USERS, payload: any}
export const addUsers = (usersData: any): addUsersType => ({ type: ADD_USERS, payload: usersData });

type editPageType = {type: typeof EDIT_PAGE, payload: number}
export const editPage = (currentPage: number): editPageType => ({ type: EDIT_PAGE, payload: currentPage });

type setTotalCountType = {type: typeof EDIT_TOTAL_COUNT, payload: number}
export const setTotalCount = (totalCount: number): setTotalCountType => ({ type: EDIT_TOTAL_COUNT, payload: totalCount });

type getFullPagesType = {type: typeof GET_FULL_PAGE, payload: null}
export const getFullPages = (): getFullPagesType => ({ type: GET_FULL_PAGE, payload: null });

type reloadingType = {type: typeof RELOAD_METHOD, payload: null}
export const reloading = (): reloadingType => ({ type: RELOAD_METHOD, payload: null });

type toggleFollowingType = {type: typeof FOLLOW_PROGRESS, payload: {isFetching: boolean, id: number | string}}
export const toggleFollowingProgress = (isFetching: boolean, id: number | string): toggleFollowingType => ({ type: FOLLOW_PROGRESS, payload: { isFetching, id } });


type dispatchType = Dispatch<ActionTypes>
type stateType = AppStateType
type thunkReturnType = ThunkAction<void, AppStateType, unknown, ActionTypes>

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
  return async (dispatch: any) => {
    dispatch(reloading());
    let data = await usersAPI.getPageUsers(currentPage, pageSize)

    dispatch(setUsers(data.items));
    dispatch(setTotalCount(data.totalCount));
    dispatch(reloading());
  };
};

export const redirectPageThunk = (numPage: number, element: any, pageSize: number) => async (dispatch: any) => {
  dispatch(editPage(numPage));
  let data = await usersAPI.getPageUsers(numPage, pageSize)
  dispatch(setUsers(data.items));
  window.scrollBy({ top: element.current.getBoundingClientRect().top, behavior: "smooth" });
};

export const toggleFollowing = (item: any) => async (dispatch: any) => {
  dispatch(toggleFollowingProgress(true, item.id));
  if (!item.followed) {
    let res = await usersAPI.follow(item.id)
    if (res.data.resultCode === 0) dispatch(refollow(item.id));
    dispatch(toggleFollowingProgress(false, item.id));
  } else {
    let res = await usersAPI.unFollow(item.id)
    if (res.data.resultCode === 0) dispatch(refollow(item.id));
    dispatch(toggleFollowingProgress(false, item.id));
  }
};

export const loadUsers = (pageSize: number, currentPage: number) => async (dispatch: any) => {
  let data = await usersAPI.getPageUsers(currentPage + 1, pageSize)
  dispatch(addUsers(data));
};

export const filterFollowers = (filter: boolean, pageSize: number, currentPage: number) => async (dispatch: any) => {
  if (filter) {
    let data = await usersAPI.getFollowedUsers(pageSize)
    dispatch(setUsers(data.items))
  }
  else getUsersThunkCreator(currentPage, pageSize)(dispatch);
};

export default usersReducer;
