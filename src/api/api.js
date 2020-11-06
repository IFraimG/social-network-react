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
  },
  getFollowedUsers: async (pageSize) => {
    let res = await configAxios.get(`/users?count=${100}&friend=${true}`)
    return res.data
  }
}

export const profileAPI = {
  getProfile: async (id) => {
    let res = await configAxios.get("/profile/" + id)
    return res.data;
  },
  getStatus: async (id) => {
    let res = await configAxios.get("/profile/status/" + id)
    return res
  },
  updateStatus: async (status) => {
    let res = await configAxios.put("/profile/status", { status: status })
    return res
  },
  updatePhoto: async photo => {
    let formData = new FormData()
    formData.set("image", photo, photo.name)
    let res = await configAxios.put("/profile/photo", formData, { headers: {"Content-Type": "multipart/form-data"}})
    return res.data
  },
  updateContacts: async (profile) => {
    let res = await configAxios.put("/profile", profile)
    console.log(res);
    return res.data
  }
}

export const authAPI = {
  authUser: async () => {
    let res = await configAxios.get("/auth/me")
    return res.data;
  },
  loginUser: async (email, password, rememberMe = false, captcha) => {
    let isCaptcha = captcha !== undefined && captcha.length > 0
    let res = await configAxios.post("/auth/login", {email, password, rememberMe, isCaptcha})
    return res.data
  },
  logout: () => {
    return configAxios.delete("/auth/login")
  },
  getCaptchaURL: () => {
    return configAxios.get("/security/get-captcha-url")
  }
}