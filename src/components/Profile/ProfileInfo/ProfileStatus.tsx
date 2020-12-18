import React, { useState, useEffect, useRef } from "react";
import styles from "./ProfileInfo.module.css";

type ProfileStatusType = {
  status: string,
  isUser: boolean,
  updateStatus: (status: string | null) => void
}

const ProfileStatusWithHook: React.FC<ProfileStatusType> = ({ updateStatus, status, isUser }) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [newStatus, setStatus] = useState<string>(status)
  const statusREF = useRef<any | null>(null)

  useEffect(() => {
    setStatus(status)
  }, [status])

  const toggleModeActivate = () => {
    if (isUser) setEditMode(!editMode)
  }

  const sendStatus = () => {
    updateStatus(newStatus)
    setEditMode(false)
  }

  const inputStatus = (event: any) => {
    setStatus(event.target.value)
  }

  let description = (
    <p onDoubleClick={ toggleModeActivate }>The user doesn't complete a status</p>
  );
  if (status) description = <span ref={statusREF} onDoubleClick={ toggleModeActivate }>{status}</span>;

  return (
    <>
      {!editMode ? description : (
        <div className={styles.info__input}>
          <input
            autoFocus={true}
            type="text"
            onChange={inputStatus}
            value={newStatus}
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
