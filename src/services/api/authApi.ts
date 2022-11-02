import axios from "axios";
import { LoginProps, SignupProps } from "../model/authSchema";
import { removeToken } from "./_handleToken";

export const authApiUrls = {
  LOGIN: "/login/",
  SIGNUP: "/signup/",
  LOGOUT: "/logout/",
};

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LS_URL,
});

const loginApi = (props: LoginProps) => {
  return http.post(authApiUrls.LOGIN, props);
};

const signupApi = (props: SignupProps) => {
  return http.post(authApiUrls.SIGNUP, props);
};

const logoutApi = () => {
  removeToken();
  return http.post(authApiUrls.LOGOUT);
};

export { loginApi, signupApi, logoutApi };
