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
}

function dialogsReducer(state = stateInit, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = { id: 6, message: state.msgValue }
      state.messages.push(newMessage)
      state.msgValue = ""
      return state;
    case CHANGE_MESSAGE: 
      state.msgValue = action.data;
      return state;
    default: return state;
  }
}

export function addMessageActionCreator() {
  return { type: ADD_MESSAGE }
}

export function editMessageActionCreator(data) {
  return { type: CHANGE_MESSAGE, data: data }
}

export default dialogsReducer;