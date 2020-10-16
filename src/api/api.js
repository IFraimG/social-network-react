import axios from "axios"

const configAxios = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "874a378d-a4dd-474f-a96b-3106d40560af"
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0",
})

export const usersAPI = {
  getPageUsers: async (currentPage, pageSize) => {
    let res = await configAxios.get(
      `/users?page=${currentPage}&count=${pageSize}`
    )
    return res.data
  },
  unFollow: (id) => {
    return configAxios.delete(`/follow/${id}`)
  },
  follow: (id) => {
    return configAxios.post(`/follow/${id}`, {})
  }
}

export const profileAPI = {
  getProfile: async (id) => {
    let res = await configAxios.get("/profile/" + id)
    return res.data;
  }
}

export const authAPI = {
  authUser: async () => {
    let res = await configAxios.get("/auth/me")
    return res.data;
  }
}