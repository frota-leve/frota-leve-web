import axios from "axios";
import { parseCookies } from 'nookies';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
})

api.interceptors.request.use(
  (config) => {
    const { 'token': token } = parseCookies()
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api