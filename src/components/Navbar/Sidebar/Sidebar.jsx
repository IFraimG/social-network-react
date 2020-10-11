import React from "react";
import StoreContext from "../../../StoreContext";
import Friend from "./Friend/Friend"
import c from "./Sidebar.module.css";

function Sidebar(props) {
  return (
    <StoreContext.Consumer> 
      {
        store => {
          let friend = store.getState().sidebar.friends.map(friend => {
            return <Friend key={ friend.id } info={ friend } />
          })
        
          return (
            <div className={ c.sidebar }>
              <h2>My friends online</h2>
              <div className={ c.sidebar__list }>{ friend }</div>
            </div>
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default Sidebar;
