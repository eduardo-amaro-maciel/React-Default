import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8',
    }
})
