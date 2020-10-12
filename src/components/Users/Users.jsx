import React from "react";
import User from "./user/User";
import * as axios from "axios";
import styles from "./Users.module.css";

function Users(props) {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((res) => props.setUsers(res.data.items));
  }
  return (
    <div>
      <h1>Find users</h1>
      <div className={styles.users}>
        {props.users.map((item) => (
          <User key={item.id} item={item} refollow={props.refollow} />
        ))}
        <button>Upload more</button>
      </div>
    </div>
  );
}

export default Users;
