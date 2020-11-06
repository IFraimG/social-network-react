import React, { useState, useEffect, useRef } from "react";
import styles from "./ProfileInfo.module.css";
import cn from "classnames"

function ProfileStatusWithHook(props) {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)
  const statusREF = useRef(null)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const toggleModeActivate = () => {
    if (props.isUser) setEditMode(!editMode)
  }

  const sendStatus = () => {
    props.updateStatus(status)
    setEditMode(false)
  }

  const inputStatus = (event) => {
    setStatus(event.target.value)
  }

  let description = (
    <p onDoubleClick={ toggleModeActivate }>The user doesn't complete a status</p>
  );
  if (props.status) description = <span ref={statusREF} onDoubleClick={ toggleModeActivate }>{props.status}</span>;

  return (
    <>
      {!editMode ? description : (
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
