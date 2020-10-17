import React from "react";
import Loader from "../../Loaders/Loader";
import ProfileStatus from "./ProfileStatus";
import { Project, Words } from "arwes";
import c from "./ProfileInfo.module.css";
import logo from "../../../img/user.png";

function ProfileInfo(props) {
  let classes = props.classes;
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
      <Project animate header={props.profile.fullName}>
        <div className={ classes.root }>
          <div className={c.poster}>
            <img src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg?fit=fill&w=800&h=300" />
          </div>
          <div className={c.info + " " + classes.root}>
            <div className={c.info__left}>
              {image}
              <div className={c.info__title}>
                <div className={ c.info__status }>
                  <p>Status:</p>
                  <ProfileStatus
                    classes={props.classes}
                    updateStatus={props.updateStatus}
                    status={props.status}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Project>
      // <div>
      //   <div className={c.poster}>
      //     <img src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg?fit=fill&w=800&h=300" />
      //   </div>
      //   <div className={c.info + " " + classes.root}>
      //     <div className={c.info__left}>
      //       {image}
      //       <div className={c.info__title}>
      //         <h2>{props.profile.fullName}</h2>
      //         <ProfileStatus
      //           classes={props.classes}
      //           updateStatus={props.updateStatus}
      //           status={props.status}
      //         />
      //       </div>
      //     </div>
      //   </div>
      // </div>
    )}
}

export default ProfileInfo;
