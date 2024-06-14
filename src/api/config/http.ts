import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL

const instance = axios.create({
    baseURL: baseUrl,
    timeout: 30000
})

instance.interceptors.request.use((config) => {

    config.headers["Access-Control-Allow-Credentials"] = true
    config.headers["access-control-allow-methods"]= "POST, GET, OPTIONS, PUT, DELETE, UPDATE"
    config.headers["access-control-allow-origin"] = "http://localhost:3000"
    config.headers["Access-Control-Expose-Headers"]= "Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Cache-Control, Content-Language, Content-Type"
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