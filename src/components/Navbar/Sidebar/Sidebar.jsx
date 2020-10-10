import React from "react";
import Friend from "./Friend/Friend"
import c from "./Sidebar.module.css";

function Sidebar(props) {
  let friend = props.store.getState.sidebar.friends.map(friend => {
    return <Friend key={ friend.id } info={ friend } />
  })

  return (
    <div className={ c.sidebar }>
      <h2>My friends online</h2>
      <div className={ c.sidebar__list }>{ friend }</div>
    </div>
  )
}

export default Sidebar;
