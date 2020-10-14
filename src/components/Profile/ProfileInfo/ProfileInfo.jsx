import React from "react";
import c from "./ProfileInfo.module.css";

function ProfileInfo(props) {
  console.log(props);
  return (
    <div>
      <div className={c.poster}>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg?fit=fill&w=800&h=300" />
      </div>
      <div className={c.info}>
        <img
          className={c.info__image}
          src="https://i.pinimg.com/564x/48/b1/3a/48b13a44fad0f600ead6837d608a4de6.jpg"
          alt=""
        />
        <div className={c.info__title}>
          <h2>Пушок Пушок</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Minus numquam odio eligendi soluta molestias eveniet architecto 
            nostrum ad accusantium enim, tempore assumenda, magni, repellendus 
            error. Laboriosam autem vitae sapiente itaque.</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
