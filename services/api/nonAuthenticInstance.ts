import axios from "axios";

const nonAuthenticUrls = {
  LOGIN: "/login/",
  SIGNUP: "/signup/",
} as const;

const nonAuthenticInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LS_URL,
});

export { nonAuthenticUrls, nonAuthenticInstance };
