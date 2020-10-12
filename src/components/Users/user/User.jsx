import React from "react";
import styles from "../Users.module.css";

function User(props) {
  let isFollow = <button onClick={ () => props.refollow(props.item.id) }>Follow</button>
  if (!props.item.isFollow) isFollow = <button onClick={() => props.refollow(props.item.id)}>Unfollow</button>
  return (
    <div className={styles.user}>
      <div className={styles.user__left}>
        <img src="https://www.vhv.rs/file/small/1/13754_shark-logo-png.png" alt="" />
        {isFollow}
      </div>
      <div className={styles.user__right}>
        <div className={styles.user__title}>
          <h2>{props.item.fullname}</h2>
          <p>{props.item.description}</p>
        </div>
        <div className={styles.user__location}>
          <h3>{props.item.location.country},</h3>
          <p>{props.item.location.city}</p>
        </div>
      </div>
    </div>
  );
}

export default User;
