import { LoginProps, LogoutProps, SignupProps } from "../model/authSchema";
import { authenticInstance, authenticUrls } from "./authenticInstance";
import { nonAuthenticInstance, nonAuthenticUrls } from "./nonAuthenticInstance";

const fetchLogin = (props: LoginProps) => {
  return nonAuthenticInstance.post(nonAuthenticUrls.LOGIN, props);
};

const fetchSignup = (props: SignupProps) => {
  return nonAuthenticInstance.post(nonAuthenticUrls.SIGNUP, props);
};

const fetchLogout = (props: LogoutProps) => {
  return authenticInstance.post(authenticUrls.LOGOUT, props);
};

export { fetchLogin, fetchSignup, fetchLogout };
