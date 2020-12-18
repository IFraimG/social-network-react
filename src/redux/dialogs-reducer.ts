const ADD_MESSAGE: string = "myocean/dialogs/ADD-MESSAGE"
// const CHANGE_MESSAGE: string = "myocean/dialogs/CHANGE-MESSAGE"

type users = { id: number, name: string }
type message = { id: number, message: string }

type stateInitType = {
  messages: Array<message>,
  msgValue: string | undefined,
  users: Array<users>
}

let stateInit: stateInitType = {
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

const dialogsReducer = (state = stateInit, action: any): stateInitType  => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = { id: 6, message: action.payload }
      return { ...state, messages: [...state.messages, newMessage], msgValue: "" }
    }
    default: return {...state}
  }
}

type sendMessageActionType = { type: typeof ADD_MESSAGE, payload: string }
export const sendMessage = (msg: string): sendMessageActionType => ({type: ADD_MESSAGE, payload: msg})

export default dialogsReducer;