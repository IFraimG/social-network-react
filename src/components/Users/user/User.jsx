import React from "react";
import styles from "../Users.module.css";
import img from "../../../img/user.png"

function User(props) {
  let isFollow = <button onClick={ () => props.refollow(props.item.id) }>Follow</button>
  let isImage = <img src={ img } alt="" />
  if (props.item.photos.small !== null) isImage = <img src={ props.item.photos.small } alt="" />
  if (!props.item.followed) isFollow = <button onClick={() => props.refollow(props.item.id)}>Unfollow</button>
  return (
    <div className={styles.user}>
      <div className={styles.user__left}>
        { isImage }
        {isFollow}
      </div>
      <div className={styles.user__right}>
        <div className={styles.user__title}>
          <h2>{props.item.name}</h2>
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
