import instance from "./config/http";

const getList = () => {
   return instance.get("/test")
}

export {
    getList
}