import React from "react";
import styles from "./Users.module.css";

type PaginatorType = {
  totalUsersCount: number,
  pageSize: number,
  currentPage: number,
  pageRedirect: (num: number) => void,
  element: any
}

const Paginator: React.FC<PaginatorType> = ({totalUsersCount, pageSize, pageRedirect, currentPage, element}) => {
  let pagesCount: number = Math.ceil(totalUsersCount / pageSize)

  let pages: Array<number> = []
  for (let i: number = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div className={ styles.users__pages }>
      { pages.map(num => {
          let numEl: any = <span onClick={ () => pageRedirect(num) } key={ num }>{ num }</span>
          if (currentPage === num) {
            numEl = <span onClick={ () => pageRedirect(num) } key={ num } className={ styles.users__active}>{ num }</span>
          }
          return numEl;
        })
      }
    </div>
  )
}

export default Paginator