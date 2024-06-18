import instance from "../config/http";

export const checkUserInfo = () => {
    return instance.get("/user/check")
}
export const userRegister = () => {
    return instance.post("/user/create")
}
export const userLogin = () => {
  return instance.post("/user/login")
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