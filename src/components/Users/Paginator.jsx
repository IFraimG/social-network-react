import React from "react";
import styles from "./Users.module.css";

const Paginator = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div className={ styles.users__pages }>
      { pages.map(num => {
          let numEl = <span onClick={ () => props.pageRedirect(num) } key={ num }>{ num }</span>
          if (props.currentPage === num) {
            numEl = <span onClick={ () => props.pageRedirect(num) } key={ num } className={ styles.users__active}>{ num }</span>
          }
          return numEl;
        })
      }
    </div>
  )
}

export default Paginator