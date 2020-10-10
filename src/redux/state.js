import { rendererEntireTree } from "../render"

let state = {
  profilePage: {
    posts: [
      { id: 1, text: "hellllo1", likesCount: 0 },
      { id: 2, text: "hellllo2", likesCount: 3 },
      { id: 3, text: "hellllo3", likesCount: 5 },
      { id: 4, text: "hellllo4", likesCount: 6 },
      { id: 5, text: "hellllo5", likesCount: 4 },
    ],
    users: [
      { id: 1, name: "Pushok1" },
      { id: 2, name: "Pushok2" },
    ],
  },
  dialogsPage: {
    messages: [
      { id: 1, message: "hellllo" },
      { id: 2, message: "Welcome to MyOcean V2 !!!" },
      {
        id: 3,
        message: "It is a new social network of Kulagin Aleksandr ^___^",
      },
    ],
  },
  sidebar: {
    friends: [
      { id: 1, name: "Pushok Pushok1", img: "" },
      { id: 2, name: "Pushok Pushok2", img: "" },
      { id: 3, name: "Pushok Pushok3", img: "" },
      { id: 4, name: "Pushok Pushok4", img: "" },
      { id: 5, name: "Pushok Pushok5", img: "" }
    ]
  }
};

export let addPost = (postMessage) => {
  let newPost = { id: 6, text: postMessage, likesCount: 0 }
  state.profilePage.posts.push(newPost)
  rendererEntireTree(state)
}

export let sendMessage = (msg) => {
  let newMessage = { id: 6, message: msg }
  state.dialogsPage.messages.push(newMessage)
  rendererEntireTree(state)
}

export default state;
