import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL

const instance = axios.create({
    baseURL: baseUrl,
    timeout: 30000
})

console.log(baseUrl)

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