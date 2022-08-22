import { LoginProps, LogoutProps, SignupProps } from "../model/authSchema";
import { http, URL } from "./instance";

const fetchLogin = (props: LoginProps) => {
  return http.post(URL.LOGIN, props);
};

const fetchSignup = (props: SignupProps) => {
  return http.post(URL.SIGNUP, props);
};

const fetchLogout = (props: LogoutProps) => {
  return http.post(URL.LOGOUT, props);
};

export { fetchLogin, fetchSignup, fetchLogout };
