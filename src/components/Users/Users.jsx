import React from "react";
import User from "./user/User"
import styles from "./Users.module.css"

function Users(props) {
	if (props.users.length === 0) {
		props.setUsers([
			{ 
				fullname: "Пушок Штанишкин", 
				description: "Я очень ленивый ПУШОК", 
				location: {
					country: "Russia", 
					city: "Moscow",
				},
				isFollow: false,
				img: "",
				id: 1
			},
			{ 
				fullname: "Pushok Shtyanishkin", 
				description: "I am very lazy PUSHOK", 
				country: "THE CAPITAL OF GREAT BRITAIN",
				isFollow: false, 
				location: {
					country: "THE CAPITAL OF GREAT BRITAIN",
					city: "London",
				},
				img: "",
				id: 2
			},
			{ 
				fullname: "Push Push", 
				description: "I am very energetic PUSH", 
				isFollow: true,
				location: {
					country: "France", 
					city: "Pariz",
				},
				img: "",
				id: 3
			},
		])
	}
  return (
		<div>
			<h1>Find users</h1>
			<div className={ styles.users }>
				{ props.users.map(item => <User key={ item.id } item={ item } refollow={ props.refollow } /> ) }
				<button>Upload more</button>
			</div>
		</div>
	)
}

export default Users;