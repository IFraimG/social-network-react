import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom"
import Loader from "../../Loaders/Loader";
import ProfileStatusWithHook from "./ProfileStatus";
import c from "./ProfileInfo.module.css";
import logo from "../../../img/user.png";
import ModalContacts from "../../Modal/ModalContacts";

const ProfileContacts = props => {
  let contactsList = []
  for (let obj in props.contacts) {
    contactsList.push(obj)
  }
  let list = Object.values(props.contacts).map((item, index) => {
    if (item != null || item != undefined) return <a rel="noopener nofollow noreferrer" target="_blank" key={index} className={c.info__link} href={item}>{contactsList[index]}</a>
    else return ""
  })

  return <React.Fragment>{list}</React.Fragment>
}

function ProfileInfo(props) {
  let classes = props.classes;
  let fileInput = useRef(null)

  const changeFile = event => {
    let file = event.target.files
    if (file.length > 0) props.savePhoto(file[0])
  }

  let image = (
    <div className={c.info__logo}>
      <img className={c.info__image} src={logo} />
    </div>
  );

  if (props.profile.photos && props.profile.photos.small != null)
    image = (
      <div className={c.info__logo}>
        <img
          className={c.info__image}
          src={props.profile.photos.small}
          alt="img"
        />
      </div>
    );

  if (!Object.keys(props.profile).length) return <Loader />;
  else {
    return (
      <div>
        { props.isModal ? <ModalContacts /> : "" }
        <div>
          <div className={c.poster}>
            <img src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg?fit=fill&w=800&h=300" />
          </div>
          <div className={c.info}>
            <div className={c.info__left}>
              {image}
              <div className={c.info__title}>
                <h2>{props.profile.fullName}</h2>
                <ProfileStatusWithHook
                  updateStatus={props.updateStatus}
                  status={props.status}
                  isUser={ props.isUser }
                />
              </div>
            </div>
            <div className={c.info__middle}>
              <ProfileContacts contacts={props.profile.contacts} />
            </div>
            { props.isUser ?
              <div className={c.info__right}>
                <div className={c.info__right__wrapper}>
                <p>
                  <b>Looking for a job: </b>
                  {props.profile.lookingForAJob ? "Yes" : "None"}
                </p>
                <p>
                  <b>My profiessional skills: </b>
                  {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : "None"}
                </p>
                <label htmlFor="inputFile">Load your logo here</label>
                <input className={c.info__file} onChange={changeFile} ref={fileInput} id="inputFile" type="file" />
                <button onClick={ () => props.sendModal(true) }>Add your contacts</button>
              </div>
              </div>
              : ""
            }
          </div>
        </div>
      </div>
    )}
}

export default ProfileInfo;
