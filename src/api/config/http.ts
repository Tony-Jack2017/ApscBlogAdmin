import axios from "axios";
import {message} from "antd";

const baseUrl = process.env.REACT_APP_API_URL

const instance = axios.create({
    baseURL: baseUrl,
    timeout: 30000
})

instance.interceptors.request.use((config) => {
    return config
}, (err: any) => {
    return Promise.reject(err)
})

instance.interceptors.response.use((value) => {
    return Promise.resolve(value)
},(err) => {
    if(err.code === "ERR_NETWORK") {
        message.error("Error Network, Please check your network is working")
    }
    return Promise.reject(err)
})

export default instance