import React, { useState, useEffect } from "react";
import styles from "./ProfileInfo.module.css";

function ProfileStatusWithHook(props) {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const toggleModeActivate = () => {
    setEditMode(!editMode)
  }

  const sendStatus = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const inputStatus = (event) => {
    setStatus(event.target.value)
  }

  let description = (
    <p onDoubleClick={ toggleModeActivate }>The user doesn't complete a status</p>
  );
  if (props.status) description = <p onDoubleClick={ toggleModeActivate }>{props.status}</p>;

  return (
    <>
      {!editMode && <div>{description}</div>}
      {editMode && (
        <div className={styles.info__input}>
          <input
            autoFocus={true}
            type="text"
            onChange={inputStatus}
            value={status}
            placeholder="Complete your status..."
          />
          <img
            onClick={sendStatus}
            className={styles.info__save}
            src="https://www.flaticon.com/svg/static/icons/svg/25/25398.svg"
            alt=""
          />
          <img
            onClick={toggleModeActivate}
            className={styles.info__save}
            src="https://www.flaticon.com/svg/static/icons/svg/126/126497.svg"
            alt=""
          />
        </div>
      )}
    </>
  );
}

export default React.memo(ProfileStatusWithHook);
