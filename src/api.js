const url = process.env.VITE_API_APP_URL;

import axios from 'axios';
const api = axios.create({
    withCredentials: true,
    baseURL: 'https://trans-novel-api.vercel.app/'
}) 

export default api;
