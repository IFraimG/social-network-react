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
      let newMessage = { id: 6, message: state.msgValue }
      return { ...state, messages: [...state.messages, newMessage], msgValue: "" }
    case CHANGE_MESSAGE: return { ...state, msgValue: action.data }
    default: return { ...state };
  }
}

export function sendMessage() {
  return { type: ADD_MESSAGE }
}

export function editMessage(data) {
  return { type: CHANGE_MESSAGE, data: data }
}

export default dialogsReducer;