const url = import.meta.env.VITE_API_URL_DEPLOY;

import axios from 'axios';
const api = axios.create({
    withCredentials: true,
    baseURL: url
}) 

export default api;
