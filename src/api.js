const url = import.meta.env.VITE_API_APP_URL;
console.log(url);
import axios from 'axios';
const api = axios.create({
    withCredentials: true,
    baseURL: process.env
}) 

export default api;
