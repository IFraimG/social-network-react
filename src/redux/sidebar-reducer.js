let stateInit = {
  friends: [
    { id: 1, name: "Pushok Pushok1", img: "" },
    { id: 2, name: "Pushok Pushok2", img: "" },
    { id: 3, name: "Pushok Pushok3", img: "" },
    { id: 4, name: "Pushok Pushok4", img: "" },
    { id: 5, name: "Pushok Pushok5", img: "" },
  ],
}

function sidebarReducer(state = stateInit, action) {
  return state;
}

export default sidebarReducer;