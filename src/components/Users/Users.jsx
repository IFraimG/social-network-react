import React, { useRef } from "react";
import Paginator from "./Paginator";
import User from "./user/User";
import styles from "./Users.module.css";

let Users = props => {
  let element = useRef(null)
  let checkboxEl = useRef(null)

  const pageRedirect = (num) => props.redirectToPage(num, element)
  const sendFilter = () => props.filterFollowers(checkboxEl.current.checked, props.pageSize, props.currentPage)

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
      {!props.isFollowers ? <Paginator 
        totalUsersCount={props.totalUsersCount} 
        pageSize={props.pageSize} 
        element={element} 
        pageRedirect={pageRedirect} 
      />: ""}
    </div>
  )
}

export default React.memo(Users);