import React from "react";
import styles from "./Loader.module.css"

function Loader() {
  return (
    <div className={styles.lds__loading}>
      <div className={styles.lds__ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;