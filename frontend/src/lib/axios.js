import axios from "axios"

export const axiosinstance =  axios.create({
    baseURL :  `${import.meta.env.VITE_BASE_URL}/api`,
    withCredentials : true
})
