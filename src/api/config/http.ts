import axios from "axios";

const instance = axios.create()

instance.interceptors.request.use((config) => {
    return config
}, (err: any) => {
    return Promise.reject(err)
})

instance.interceptors.response.use((value) => {
    return Promise.resolve(value)
},(err) => {
    return Promise.reject(err)
})

export default instance