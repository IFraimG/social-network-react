import React from "react"
import WithModal from "../hoc/WithModal";
import ModalForm from "./ModalForm/ModalForm";

function ModalContactsContainer(props) {
  return <ModalForm profile={props.profile} updateContacts={props.updateContacts} sendModal={props.sendModal} />
}

export default WithModal(ModalContactsContainer, "Добавление контактов");
