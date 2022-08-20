import { LoginProps, LogoutProps, SignupProps } from "../model/authSchema";
import { axiosInstance, urls } from "./instance";

const fetchLogin = (props: LoginProps) => {
  return axiosInstance.post(urls.LOGIN, props);
};

const fetchSignup = (props: SignupProps) => {
  return axiosInstance.post(urls.SIGNUP, props);
};

const fetchLogout = (props: LogoutProps) => {
  return axiosInstance.post(urls.LOGOUT, props);
};

export { fetchLogin, fetchSignup, fetchLogout };
