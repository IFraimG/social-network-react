import React, { useEffect, useState } from "react";
import { connect } from "react-redux"
import styles from "../Modal/Modal.module.css"
import close from "../../img/cancel.png"
import { sendModal, updateContacts } from "../../redux/profile-reducer";

function WithModal(Component, title) {
  const ModalWrapper = props => {
    const [isCreate, setActive] = useState(false)
    useEffect(() => {
      setActive(true)
    }, [])
    
    const editModal = () => {
      setActive(false)
      props.sendModal(false)
    }

    const preventClose = event => event.stopPropagation()

    return (
      <div onClick={editModal} className={styles.wrapper}>
        <div className={styles.modal__inner}>
          <div className={isCreate ? styles.modal + " " + styles.modal__active : styles.modal} onClick={preventClose}>
            <div className={styles.modal__header}>
              <h2>{title}</h2>
              <img onClick={editModal} src={close} />
            </div>
            <div className={styles.modal__content}>
              <Component {...props} />
            </div>
            <div className={styles.modal__footer}></div>
          </div>
        </div>
      </div>
    )
  }

  const mapStateToProps = state => ({isModal: state.profilePage.isModal, profile: state.profilePage.profile})

  return connect(mapStateToProps, {sendModal, updateContacts})(ModalWrapper);
}

export default WithModal;
