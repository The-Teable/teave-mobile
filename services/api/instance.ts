import axios from "axios";

const URL = {
  LOGIN: "/login/",
  SIGNUP: "/signup/",
  LOGOUT: "/logout/",
  CLICK_PRODUCT: "/user-click-product/",
  WISH_PRODUCT: "/user-wish-product/",
} as const;

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LS_URL,
});

export { URL, http };
