import axios from "axios"

const configAxios = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "874a378d-a4dd-474f-a96b-3106d40560af"
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0",
})

export const usersAPI = {
  getPageUsers: async (currentPage: number, pageSize: number) => {
    let res = await configAxios.get(
      `/users?page=${currentPage}&count=${pageSize}`
    )
    return res.data
  },
  unFollow: (id: number) => {
    return configAxios.delete(`/follow/${id}`)
  },
  follow: (id: number) => {
    return configAxios.post(`/follow/${id}`, {})
  },
  getFollowedUsers: async (pageSize: number) => {
    let res = await configAxios.get(`/users?count=${100}&friend=${true}`)
    return res.data
  }
}

export const profileAPI = {
  getProfile: async (id: number) => {
    let res = await configAxios.get("/profile/" + id)
    return res.data;
  },
  getStatus: async (id: number) => {
    let res = await configAxios.get("/profile/status/" + id)
    return res
  },
  updateStatus: async (status: string) => {
    let res = await configAxios.put("/profile/status", { status: status })
    return res
  },
  updatePhoto: async (photo: any) => {
    let formData = new FormData()
    formData.set("image", photo, photo.name)
    let res = await configAxios.put("/profile/photo", formData, { headers: {"Content-Type": "multipart/form-data"}})
    return res.data
  },
  updateContacts: async (profile: any) => {
    let res = await configAxios.put("/profile", profile)
    return res.data
  }
}

export const authAPI = {
  authUser: async () => {
    let res = await configAxios.get("/auth/me")
    return res.data;
  },
  loginUser: async (email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) => {
    let res = await configAxios.post("/auth/login", {email, password, rememberMe, captcha})
    return res.data
  },
  logout: () => {
    return configAxios.delete("/auth/login")
  },
  getCaptchaURL: () => {
    return configAxios.get("/security/get-captcha-url")
  }
}