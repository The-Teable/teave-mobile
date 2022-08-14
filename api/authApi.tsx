import axios, { AxiosError } from "axios";
import { LoginProps, SignupProps, UserProps } from "../types/user";
import errorHandling from "./errorHandling";

const instance = axios.create({ baseURL: process.env.NEXT_PUBLIC_LS_URL });

const fetchLogin = async (props: LoginProps) => {
  try {
    const response = await instance.post("login", {
      ...props,
    });
    if (response.status !== 200) throw Error("wrong status");
    return response;
  } catch (error) {
    if (error instanceof AxiosError) errorHandling(error);
    else alert(error);
    return null;
  }
};

const fetchSignup = async (props: SignupProps) => {
  try {
    const response = await instance.post("signup", {
      ...props,
    });
    if (response.status !== 201) throw Error("wrong status");
    return response;
  } catch (error) {
    if (error instanceof AxiosError) errorHandling(error);
    else alert(error);
    return null;
  }
};

const fetchLogout = async () => {
  try {
    const response = await instance.get("logout");
    if (response.status === 401) throw Error("wrong status");
    return response;
  } catch (error) {
    if (error instanceof AxiosError) errorHandling(error);
    else alert(error);
    return null;
  }
};

export { fetchLogin, fetchSignup, fetchLogout };
