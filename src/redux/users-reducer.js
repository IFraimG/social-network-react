const REFOLLOW_USER = "REFOLLOW_USER"
const SET_USER = "SET_USER"
const EDIT_PAGE = "EDIT_PAGE"
const EDIT_TOTAL_COUNT = "EDIT_TOTAL_COUNT"
const GET_FULL_PAGE = "GET_FULL_PAGE"
const RELOAD_METHOD = "RELOAD_METHOD"

let stateDefault = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  totalFullCount: 0,
  isFull: false,
  currentPage: 1,
  isLoading: false
}

function usersReducer(state = stateDefault, action) {
	switch (action.type) {
		case SET_USER:
			return { ...state, users: [  ...action.data] }
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
		default: return { ...state }
	}
}

export const refollow = (userID) => ({ type: "REFOLLOW_USER", data: userID })
export const setUsers = (usersData) => ({ type: "SET_USER", data: usersData })
export const editPage = (currentPage) => ({ type: "EDIT_PAGE", data: currentPage })
export const setTotalCount = (totalCount) => ({ type: "EDIT_TOTAL_COUNT", data: totalCount })
export const getFullPages = () => ({ type: "GET_FULL_PAGE" })
export const reloading = () => ({ type: "RELOAD_METHOD" })

export default usersReducer;