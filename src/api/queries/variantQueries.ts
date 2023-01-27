import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_COVID_URL as string
})

export const getAllVariants = () => api.get("variants").then((res) => res.data);