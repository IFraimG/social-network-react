import profileReducer, { createPost, getUserStatus } from "../redux/profile-reducer"

it("length of post must be incremented", () => {
  let action = createPost("новый пост 1")
  let state = {
    posts: [
      { id: 1, text: "hellllo1", likesCount: 0 },
      { id: 2, text: "hellllo2", likesCount: 3 },
      { id: 3, text: "hellllo3", likesCount: 5 },
      { id: 4, text: "hellllo4", likesCount: 6 },
    ]
  }
  let newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(5)
  expect(newState.posts[4].text).toBe("новый пост 1")
}) 

it("length of status must be", () => {
  let action = getUserStatus("12040")
  let state = {
    status: ""
  }
  let newState = profileReducer(state, action)
  expect(newState.status.length).toBeDefined()
})