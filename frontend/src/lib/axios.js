import axios from "axios"

export const axiosinstance =  axios.create({
    baseURL : import.meta.env.VITE_MODE=== "development" ? `${import.meta.env.VITE_BASE_URL}/api`: "/api",
    withCredentials : true
})