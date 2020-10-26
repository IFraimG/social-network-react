import { createDuck } from "redux-duck"

const myDuck = createDuck("dialogs", "myocean")

const ADD_MESSAGE = myDuck.defineType("ADD-MESSAGE")
const CHANGE_MESSAGE = myDuck.defineType("CHANGE-MESSAGE")

let stateInit = {
  messages: [
    { id: 1, message: "hellllo" },
    { id: 2, message: "Welcome to MyOcean V2 !!!" },
    {
      id: 3,
      message: "It is a new social network of Kulagin Aleksandr ^___^",
    },
  ],
  msgValue: "",
  users: [
    { id: 1, name: "Pushok1" },
    { id: 2, name: "Pushok2" },
  ],
}

const dialogsReducer = myDuck.createReducer({
  [ADD_MESSAGE]: (state, action) => {
    let newMessage = { id: 6, message: action.payload }
    return { ...state, messages: [...state.messages, newMessage], msgValue: "" }
  }
}, stateInit)

export const sendMessage = myDuck.createAction(ADD_MESSAGE)

export default dialogsReducer;