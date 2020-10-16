import React, { useRef } from "react";
import User from "./user/User";
import styles from "./Users.module.css";

let Users = props => {
  let element = useRef(null)

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let view = <p onClick={ props.loadFullData }>Show all pages</p>
  if (props.isFull) view = "";

  let showUsers = <p onClick={() => props.loadUsers(element, props.pageSize, props.currentPage)}>Load all users</p>

  return (
    <div>
      <h1 ref={ element }>Find users</h1>
      <div className={styles.users}>
        { props.users.map((item) => (
          <User key={item.id} item={item} isProgress={ props.followingAtProgress } toggleFollowing={ props.toggleFollowing } refollow={ props.refollow } />
        ))}
      </div>
      <div className={ styles.users__pages }>
        {
          pages.map(num => {
            let numEl = <span onClick={ () => props.redirectToPage(num, element) } key={ num }>{ num }</span>
            if (props.currentPage === num) {
              numEl = <span onClick={ () => props.redirectToPage(num, element) } key={ num } className={ styles.users__active}>{ num }</span>
            }
            return numEl;
          })
        }
        { view }
        { showUsers }
      </div>
    </div>
  )
}

export default Users;