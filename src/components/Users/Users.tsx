import React, { useRef } from "react";
import Paginator from "./Paginator";
import User from "./user/User";
import styles from "./Users.module.css";


type Props = {
  isFollowers: any,
  redirectToPage: (a: number, b: any) => void,
  filterFollowers: (a: any, b: number, c: number) => void,
  loadFullData: () => void,
  loadUsers: () => void,
  redirectPageThunk: () => void,
  getFullPages: () => void,
  toggleFollowing: () => void,
  followingAtProgress: Array<number>,
  pageSize: number,
  totalUsersCount: number,
  currentPage: number,
  users: Array<any>
}

let Users: React.FC<Props> = ({
  totalUsersCount, toggleFollowing, currentPage, filterFollowers, 
  isFollowers, pageSize, redirectToPage, users, followingAtProgress
}) => {
  let element = useRef<HTMLHeadingElement>(null)
  let checkboxEl = useRef<any>(null)

  const pageRedirect = (num: number) => redirectToPage(num, element)
  const sendFilter = () => filterFollowers(checkboxEl.current.checked, pageSize, currentPage)

  return (
    <div>
      <div className={styles.users__title}>
        <h1 ref={ element }>Find users</h1>
        <div>
          <label htmlFor="checkboxID">Find users that I subscribed</label>
          <input ref={ checkboxEl } value={isFollowers} onClick={ sendFilter } type="checkbox" id="checkboxID"/>
        </div>
      </div>
      <div className={styles.users}>
      { users.map((item) => (
          <User key={item.id} item={item} isProgress={ followingAtProgress } toggleFollowing={toggleFollowing} />
        ))
      }
      </div>
      {!isFollowers ? <Paginator 
        totalUsersCount={totalUsersCount} 
        pageSize={pageSize} 
        element={element} 
        currentPage={currentPage}
        pageRedirect={pageRedirect} 
      />: ""}
    </div>
  )
}

export default React.memo(Users);