import instance from "../config/http";

export const checkUserInfo = () => {
    return instance.get("/user/check")
}
export const userRegister = (data: any) => {
    return instance.post("/user/create", data)
}
export const userLogin = (data:any) => {
  return instance.post("/user/login", data)
}

export const getUserList = () => {
    return instance.get("/user/list")
}

export const updateUser = () => {
    return instance.post("/user/update")
}

export const modifyPassword = () => {
    return instance.post("/user/password/modify")
}