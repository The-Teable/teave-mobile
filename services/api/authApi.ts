import { LoginProps, LogoutProps, SignupProps } from "../model/authSchema";
import { URL, URL_NEED_TOKEN, http, httpWithToken } from "./instance";

const fetchLogin = (props: LoginProps) => {
  return http.post(URL.LOGIN, props);
};

const fetchSignup = (props: SignupProps) => {
  return http.post(URL.SIGNUP, props);
};

const fetchLogout = (props: LogoutProps) => {
  return httpWithToken.post(URL_NEED_TOKEN.LOGOUT, props);
};

export { fetchLogin, fetchSignup, fetchLogout };
