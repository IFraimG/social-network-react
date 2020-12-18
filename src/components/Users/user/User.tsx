import React from "react";
import { NavLink } from "react-router-dom"
import styles from "../Users.module.css";
import img from "../../../img/user.png"

type UserType = {
  item: any,
  toggleFollowing: (item: any) => void,
  isProgress: Array<number>
}

const User: React.FC<UserType> = ({item, toggleFollowing, isProgress}) => {
  let isFollow: any = null
  if (item.followed) isFollow = (
    <button
      disabled={isProgress.some((id: number) => id === item.id)} 
      onClick={() => toggleFollowing(item)}
    >Unfollow</button>
  )

  if (!item.followed) isFollow = (
    <button 
      disabled={isProgress.some((id: number) => id === item.id)} 
      onClick={() => toggleFollowing(item)}
    >Follow</button>
  )

  let isImage = (
    <NavLink to={"/profile/" + item.id}>
      <img src={ img } alt="" />
    </NavLink>
  )

  if (item.photos.small !== null) isImage = (
    <NavLink to={"/profile/" + item.id}>
      <img src={ item.photos.small } alt="" />
    </NavLink>
  )

  return (
    <div className={styles.user}>
      <div className={styles.user__left}>
        { isImage }
        { isFollow }
      </div>
      <div className={styles.user__right}>
        <div className={styles.user__title}>
          <NavLink className={styles.user__link} to={"/profile/" + item.id}>
            <h2>{item.name}</h2>
          </NavLink>
          <p>{item.description}</p>
        </div>
        <div className={styles.user__location}>
          <h3>{"props.item.location.country"},</h3>
          <p>{"props.item.location.city"}</p>
        </div>
      </div>
    </div>
  );
}

export default User;
