const ADD_MESSAGE = "ADD-MESSAGE"
const CHANGE_MESSAGE = "CHANGE-MESSAGE"

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

function dialogsReducer(state = stateInit, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = { id: 6, message: action.data }
      return { ...state, messages: [...state.messages, newMessage], msgValue: "" }
    default: return { ...state };
  }
}

export function sendMessage(msg) {
  return { type: ADD_MESSAGE, data: msg }
}

export default dialogsReducer;