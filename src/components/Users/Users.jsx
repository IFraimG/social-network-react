import React, { useRef } from "react";
import User from "./user/User";
import styles from "./Users.module.css";

let Users = React.memo(props => {
  let element = useRef(null)
  let checkboxEl = useRef(null)
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let view = <p onClick={ props.loadFullData }>Show all pages</p>
  if (props.isFull) view = "";

  const loadUsers = () => {
    checkboxEl.current.checked = false
    props.loadUsers(element, props.pageSize, props.currentPage)
  }

  let showUsers = <p onClick={() => loadUsers}>Load all users</p>
  function sendFilter() {
    props.filterFollowers(checkboxEl.current.checked, props.pageSize, props.currentPage)
  }

  const pageRedirect = (num) => {
    checkboxEl.current.checked = false
    props.redirectToPage(num, element)
  }

  return (
    <div>
      <div className={styles.users__title}>
        <h1 ref={ element }>Find users</h1>
        <div>
          <label htmlFor="checkboxID">Find users that I subscribed</label>
          <input ref={ checkboxEl } value={props.isFollowers} onClick={ sendFilter } type="checkbox" id="checkboxID"/>
        </div>
      </div>
      <div className={styles.users}>
      { props.users.map((item) => (
          <User key={item.id} item={item} isProgress={ props.followingAtProgress } toggleFollowing={ props.toggleFollowing } refollow={ props.refollow } />
        ))
      }
      </div>
      <div className={ styles.users__pages }>
        { !props.isFollowers ?
          pages.map(num => {
            let numEl = <span onClick={ () => pageRedirect(num) } key={ num }>{ num }</span>
            if (props.currentPage === num) {
              numEl = <span onClick={ () => pageRedirect(num) } key={ num } className={ styles.users__active}>{ num }</span>
            }
            return numEl;
          }) : ""
        }
        { view }
      </div>
    </div>
  )
})

export default Users;