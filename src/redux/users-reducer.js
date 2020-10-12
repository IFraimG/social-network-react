const REFOLLOW_USER = "REFOLLOW_USER"
const SET_USER = "SET_USER"

let stateDefault = {
  users: [
		// { 
		// 	name: "Пушок Штанишкин", 
		// 	description: "Я очень ленивый ПУШОК", 
		// 	location: {
		// 		country: "Russia", 
		// 		city: "Moscow",
		// 	},
		// 	isFollow: false,
		// 	img: "",
		// 	id: 1
		// },
		// { 
		// 	name: "Pushok Shtyanishkin", 
		// 	description: "I am very lazy PUSHOK", 
		// 	country: "THE CAPITAL OF GREAT BRITAIN",
		// 	isFollow: false, 
		// 	location: {
		// 		country: "THE CAPITAL OF GREAT BRITAIN",
		// 		city: "London",
		// 	},
		// 	img: "",
		// 	id: 2
		// },
		// { 
		// 	name: "Push Push", 
		// 	description: "I am very energetic PUSH", 
		// 	isFollow: true,
		// 	location: {
		// 		country: "France", 
		// 		city: "Pariz",
		// 	},
		// 	img: "",
		// 	id: 3
		// },
  ]
}

function usersReducer(state = stateDefault, action) {
	switch (action.type) {
		case SET_USER:
			return { ...state, users: [...state.users, ...action.data] }
		case REFOLLOW_USER: 
			return { ...state, users: state.users.map(item => {
				if (item.id === action.data) return { ...item, followed: !item.followed }
				return item
			})}
		default: return { ...state }
	}
}

export const refollowAC = (userID) => ({ type: "REFOLLOW_USER", data: userID })
export const setUsersAC = (usersData) => ({ type: "SET_USER", data: usersData })

export default usersReducer;