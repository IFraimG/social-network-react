import { usersAPI } from "../api/api"

const REFOLLOW_USER = "REFOLLOW_USER"
const SET_USER = "SET_USER"
const ADD_USERS = "ADD_USERS"
const EDIT_PAGE = "EDIT_PAGE"
const EDIT_TOTAL_COUNT = "EDIT_TOTAL_COUNT"
const GET_FULL_PAGE = "GET_FULL_PAGE"
const RELOAD_METHOD = "RELOAD_METHOD"
const FOLLOW_PROGRESS = "FOLLOW_PROGRESS"

let stateDefault = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  totalFullCount: 0,
  isFull: false,
  currentPage: 1,
  isLoading: false,
  followingAtProgress: []
}

function usersReducer(state = stateDefault, action) {
	switch (action.type) {
		case SET_USER:
      return { ...state, users: [  ...action.data] }
    case ADD_USERS:
      return { ...state, users: [ ...state.users, ...action.data.items], currentPage: state.currentPage + 1 }
		case REFOLLOW_USER: 
			return { ...state, users: state.users.map(item => {
				if (item.id === action.data) return { ...item, followed: !item.followed }
				return item
			})}
		case EDIT_PAGE:
			return { ...state, currentPage: action.data }
		case EDIT_TOTAL_COUNT:
			return { ...state, totalUsersCount: action.data / 3, totalFullCount: action.data }
		case GET_FULL_PAGE:
			let fullData = state.totalFullCount
			return { ...state, totalUsersCount: fullData, isFull: true }
		case RELOAD_METHOD:
			return { ...state, isLoading: !state.isLoading }
		case FOLLOW_PROGRESS:
			return { ...state, followingAtProgress: action.isFetching ? [...state.followingAtProgress, action.id] : [...state.followingAtProgress.filter(id => id !== action.data)] }
		default: return { ...state }
	}
}

export const refollow = (userID) => ({ type: "REFOLLOW_USER", data: userID })
export const setUsers = (usersData) => ({ type: "SET_USER", data: usersData })
export const addUsers = (usersData) => ({ type: "ADD_USERS", data: usersData })
export const editPage = (currentPage) => ({ type: "EDIT_PAGE", data: currentPage })
export const setTotalCount = (totalCount) => ({ type: "EDIT_TOTAL_COUNT", data: totalCount })
export const getFullPages = () => ({ type: "GET_FULL_PAGE" })
export const reloading = () => ({ type: "RELOAD_METHOD" })
export const toggleFollowingProgress = (isFetching, id) => ({ type: "FOLLOW_PROGRESS", data: {isFetching, id} })

export const getUsersThunkCreator = (currentPage, pageSize) =>  {
	return (dispatch) => {
		dispatch(reloading())
		usersAPI.getPageUsers(currentPage, pageSize)
		  .then(data => {
			dispatch(setUsers(data.items))
			dispatch(setTotalCount(data.totalCount))
			dispatch(reloading())
		  });
	}
}

export const redirectPageThunk = (numPage, element, pageSize) =>  {
	return (dispatch) => {
		dispatch(editPage(numPage))
    usersAPI.getPageUsers(numPage, pageSize)
      .then(data => {
        dispatch(setUsers(data.items))
        window.scrollBy({ top: element.current.getBoundingClientRect().top, behavior: "smooth" })
      });
	}
}

export const toggleFollowing = (item) =>  {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, item.id))
    usersAPI.unFollow(item.id)
      .then(res => {
        if (res.data.resultCode === 0) dispatch(refollow(item.id))
        dispatch(toggleFollowingProgress(false, item.id))
      })
	}
}

export const loadUsers = (element, pageSize, currentPage) => dispatch => {
  window.scrollBy({ top: element.current.getBoundingClientRect().top, behavior: "smooth" })
  usersAPI.getPageUsers(currentPage + 1, pageSize).then(data => {
    console.log(data)
    dispatch(addUsers(data))
  })
}

export default usersReducer;