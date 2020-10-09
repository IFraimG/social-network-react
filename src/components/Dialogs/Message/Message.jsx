import React from "react";
import c from "../Dialog.module.css";

function Message(props) {
  return <div className={c.dialogs__msg}>{props.message}</div>;
}

export default Message;
