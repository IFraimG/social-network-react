let store = {
  _callSubscriber() {
    console.log("^___^");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _state: {
    profilePage: {
      posts: [
        { id: 1, text: "hellllo1", likesCount: 0 },
        { id: 2, text: "hellllo2", likesCount: 3 },
        { id: 3, text: "hellllo3", likesCount: 5 },
        { id: 4, text: "hellllo4", likesCount: 6 },
        { id: 5, text: "hellllo5", likesCount: 4 },
      ],
      textValue: "pushok 123 asadsdadsdas",
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
      msgValue: ""
    },
    sidebar: {
      friends: [
        { id: 1, name: "Pushok Pushok1", img: "" },
        { id: 2, name: "Pushok Pushok2", img: "" },
        { id: 3, name: "Pushok Pushok3", img: "" },
        { id: 4, name: "Pushok Pushok4", img: "" },
        { id: 5, name: "Pushok Pushok5", img: "" },
      ],
    },
  },
  get getState() {
    return this._state;
  },
  addPost() {
    let newPost = { id: 6, text: this._state.profilePage.textValue, likesCount: 0 };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.textValue = "";
    this._callSubscriber(this);
  },
  updateNewPost(newText) {
    this._state.profilePage.textValue = newText;
    this._callSubscriber(this);
  },
  sendMessage() {
    let newMessage = { id: 6, message: this._state.dialogsPage.msgValue };
    this._state.dialogsPage.messages.push(newMessage)
    this._state.dialogsPage.msgValue = "";
    this._callSubscriber(this);
  },
  editMessage(msg) {
    this._state.dialogsPage.msgValue = msg
    this._callSubscriber(this);
  },
};

window.store = store;

export default store;