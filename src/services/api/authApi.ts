import axios from "axios";
import { storage } from "../../util/storage";
import { LoginProps, LogoutProps, SignupProps } from "../model/authSchema";

const URL = {
  LOGIN: "/login/",
  SIGNUP: "/signup/",
  LOGOUT: "/logout/",
};

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LS_URL,
});

const fetchLogin = (props: LoginProps) => {
  return http.post(URL.LOGIN, props);
};

const fetchSignup = (props: SignupProps) => {
  return http.post(URL.SIGNUP, props);
};

const fetchLogout = (props: LogoutProps) => {
  storage.remove("ACCESS_TOKEN");
  return http.post(URL.LOGOUT, props);
};

export { fetchLogin, fetchSignup, fetchLogout };
