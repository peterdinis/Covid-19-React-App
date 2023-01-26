import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_COVID_URL as string
})

export const getAllCountriesStats = () => api.get("countries").then((res) => res.data);