import axios from "axios";

const urls = {
  LOGIN: "/login",
  SIGNUP: "/signup",
  LOGOUT: "/logout",
} as const;

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LS_URL,
});

export { urls, axiosInstance };
