import React from "react";
import { NavLink } from "react-router-dom"
import styles from "../Users.module.css";
import img from "../../../img/user.png"

function User(props) {
  let isFollow = ""

  if (props.item.followed && props.isAuth) isFollow = (
    <button
      disabled={props.isProgress.some(id => id === props.item.id)} 
      onClick={() => props.toggleFollowing(props.item)}
    >Unfollow</button>
  )

  if (!props.item.followed && props.isAuth) isFollow = (
    <button 
      disabled={props.isProgress.some(id => id === props.item.id)} 
      onClick={() => props.toggleFollowing(props.item)}
    >Follow</button>
  )

  let isImage = (
    <NavLink to={"/profile/" + props.item.id}>
      <img src={ img } alt="" />
    </NavLink>
  )

  if (props.item.photos.small !== null) isImage = (
    <NavLink to={"/profile/" + props.item.id}>
      <img src={ props.item.photos.small } alt="" />
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
          <NavLink className={styles.user__link} to={"/profile/" + props.item.id}>
            <h2>{props.item.name}</h2>
          </NavLink>
          <p>{props.item.description}</p>
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
