import React, { useState, useCallback } from "react";
import styles from "./ModalForm.module.css"
import { Form, Field } from "react-final-form"

// const ModalInput = (props) => {
//   return (
//     <div className={styles.modal__item}>
//       <label className={styles.modal__label} htmlFor={props.id}>{props.label}: </label>
//         <Field id={props.id} name={props.id}>
//           { props => <input value={props.contact != undefined || props.contact != null ? props.contact : ""} onChange={(event) => props.editInfo(event, props.objectEdit)} /> }
//         </Field>
//     </div>
//   )
// }

function ModalForm(props) {
  const [contactsList, setInfo] = useState({
    vk: props.profile.contacts.vk,
    github: props.profile.contacts.github,
    facebook: props.profile.contacts.facebook,
    instagram: props.profile.contacts.instagram,
    twitter: props.profile.contacts.twitter,
    website: props.profile.contacts.website,
    youtube: props.profile.contacts.youtube,
    mainLink: props.profile.contacts.mainLink
  })
  let [errors, setErrors] = useState([])
  const onSubmit = (values) => {
    let errList = []
    Object.entries(contactsList).map(item => {
      try {
        let url = ""
        if (item[1] != null || item[1] != undefined) url = new URL(item[1])
      } catch (err) {
        console.log(err.message);
        errList.push(`You entered incorrect link: ${item[0]}`)
      }
    })
    if (errList.length > 0) setErrors(errList)
    else {
      let newProfile = {...props.profile}
      newProfile.contacts = contactsList
      newProfile.lookingForAJob = false
      newProfile.lookingForAJobDescription = "none"
      newProfile.aboutMe = "none"
      props.updateContacts(newProfile)
    }
  }

  const editInfo = (event, info) => {
    console.log(event, info);
  }
  
  return (
    <div className={styles.formWrapper}>
      <Form onSubmit={onSubmit}> 
        { props => (
          <form className={styles.form} onSubmit={props.handleSubmit}>
            <div className={styles.modal__item}>
              <label className={styles.modal__label} htmlFor="Github">Github: </label>
              <Field id="github" name="github">
                { props => <input value={contactsList.github != undefined || contactsList.github != null ? contactsList.github : ""} onChange={(event) => setInfo({...contactsList, github:event.target.value})} /> }
              </Field>
            </div>
            <div className={styles.modal__item}>
              <label className={styles.modal__label} htmlFor="vk">Vkontakte: </label>
              <Field id="vk" name="vk">
                { props => <input value={contactsList.vk != undefined || contactsList.vk != null ? contactsList.vk : ""} onChange={(event) => setInfo({...contactsList, vk:event.target.value})} /> }
              </Field>
            </div>
            <div className={styles.modal__item}>
              <label className={styles.modal__label} htmlFor="facebook">Facebook: </label>
              <Field id="facebook" name="facebook">
                { props => <input value={contactsList.facebook != undefined || contactsList.facebook != null ? contactsList.facebook : ""} onChange={(event) => setInfo({...contactsList, facebook:event.target.value})} /> }
              </Field>
            </div>
            <div className={styles.modal__item}>
              <label className={styles.modal__label} htmlFor="instagram">Instagram: </label>
              <Field id="instagram" name="instagram">
                { props => <input value={contactsList.instagram != undefined || contactsList.instagram != null ? contactsList.instagram : ""} onChange={(event) => setInfo({...contactsList, instagram:event.target.value})} /> }
              </Field>
            </div>
            <div className={styles.modal__item}>
              <label className={styles.modal__label}  htmlFor="twitter">Twitter: </label>
              <Field id="twitter" name="twitter">
                { props => <input value={contactsList.twitter != undefined || contactsList.twitter != null ? contactsList.twitter : ""} onChange={(event) => setInfo({...contactsList, twitter:event.target.value})} /> }
              </Field>
            </div>
            <div className={styles.modal__item}>
              <label className={styles.modal__label}  htmlFor="Website">Website: </label>
              <Field id="Website" name="website">
                { props => <input value={contactsList.website != undefined || contactsList.website != null ? contactsList.website : ""} onChange={(event) => setInfo({...contactsList, website:event.target.value})} /> }
              </Field>
            </div>
            <div className={styles.modal__item}>
              <label className={styles.modal__label} htmlFor="Youtube">Youtube: </label>
              <Field id="Youtube" name="youtube">
                { props => <input value={contactsList.youtube != undefined || contactsList.youtube != null ? contactsList.youtube : ""} onChange={(event) => setInfo({...contactsList, youtube:event.target.value})} /> }
              </Field>
            </div>
            <div className={styles.modal__item}>
              <label className={styles.modal__label} htmlFor="MainLink">MainLink: </label>
              <Field id="MainLink" name="mainlink">
                { props => <input value={contactsList.mainlink != undefined || contactsList.mainlink != null ? contactsList.mainlink : ""} onChange={(event) => setInfo({...contactsList, mainlink:event.target.value})} /> }
              </Field>
            </div>
            <button className={styles.modal__send} type="submit">Save contacts</button>
          </form>
        )}
      </Form>
      <div className={styles.error__list}>
        {
          errors.map(item => {
            return <span className={styles.modal__error} key={item}>{item}</span>
          })
        }
      </div>
    </div>
  );
}

export default ModalForm;
