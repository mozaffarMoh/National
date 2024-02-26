import axios from "axios";
import Cookies from 'js-cookie';

const code = Cookies.get("code")
const apiNational = axios.create({
  baseURL: "https://national.cliprz.org/api",
  headers: {
    "Content-Type": "application/json",
    "code": code
  },
});

apiNational.interceptors.request.use(
  (config: any) => {
    const token = Cookies.get("token")
    if (token) {
      config.headers["Authorization"] = `Bearer${token}`;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
export default apiNational;