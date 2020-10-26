import { usersAPI } from "../api/api";
import { updateObject } from "../utils/object-check";

const REFOLLOW_USER = "myocean/users/REFOLLOW_USER";
const SET_USER = "myocean/users/SET_USER";
const ADD_USERS = "myocean/users/ADD_USERS";
const EDIT_PAGE = "myocean/users/EDIT_PAGE";
const EDIT_TOTAL_COUNT = "myocean/users/EDIT_TOTAL_COUNT";
const GET_FULL_PAGE = "myocean/users/GET_FULL_PAGE";
const RELOAD_METHOD = "myocean/users/RELOAD_METHOD";
const FOLLOW_PROGRESS = "myocean/users/FOLLOW_PROGRESS";

let stateDefault = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  totalFullCount: 0,
  isFull: false,
  isFollowers: false,
  currentPage: 1,
  isLoading: false,
  isAutoLoading: false,
  followingAtProgress: [],
};

function usersReducer(state = stateDefault, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, users: [...action.data] };
    case ADD_USERS:
      return {
        ...state,
        users: [...state.users, ...action.data.items],
        currentPage: state.currentPage + 1,
        isAutoLoading: true,
      };
    case REFOLLOW_USER:
      return { ...state, users: updateObject(state.users, action.data) };
    case EDIT_PAGE:
      return { ...state, currentPage: action.data };
    case EDIT_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.data / 3,
        totalFullCount: action.data,
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
        followingAtProgress: action.isFetching
          ? [...state.followingAtProgress, action.id]
          : [...state.followingAtProgress.filter((id) => id !== action.data)],
      };
    default:
      return { ...state };
  }
}

export const refollow = (userID) => ({ type: REFOLLOW_USER, data: userID });
export const setUsers = (usersData) => ({ type: SET_USER, data: usersData });
export const addUsers = (usersData) => ({ type: ADD_USERS, data: usersData });
export const editPage = (currentPage) => ({ type: EDIT_PAGE, data: currentPage });
export const setTotalCount = (totalCount) => ({ type: EDIT_TOTAL_COUNT, data: totalCount });
export const getFullPages = () => ({ type: GET_FULL_PAGE });
export const reloading = () => ({ type: RELOAD_METHOD });
export const toggleFollowingProgress = (isFetching, id) => ({ type: FOLLOW_PROGRESS, data: { isFetching, id } });

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(reloading());
    let data = await usersAPI.getPageUsers(currentPage, pageSize)

    dispatch(setUsers(data.items));
    dispatch(setTotalCount(data.totalCount));
    dispatch(reloading());
  };
};

export const redirectPageThunk = (numPage, element, pageSize) => async (dispatch) => {
  dispatch(editPage(numPage));
  let data = await usersAPI.getPageUsers(numPage, pageSize)
  dispatch(setUsers(data.items));
  window.scrollBy({ top: element.current.getBoundingClientRect().top, behavior: "smooth" });
};

export const toggleFollowing = (item) => async (dispatch) => {
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

export const loadUsers = (pageSize, currentPage) => async dispatch => {
  let data = await usersAPI.getPageUsers(currentPage + 1, pageSize)
  dispatch(addUsers(data));
};

export const filterFollowers = (filter, pageSize, currentPage) => async dispatch => {
  if (filter) {
    let data = await usersAPI.getFollowedUsers(pageSize)
    dispatch(setUsers(data.items))
  }
  else getUsersThunkCreator(currentPage, pageSize)(dispatch);
};

export default usersReducer;
