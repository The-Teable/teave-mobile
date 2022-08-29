import axios from "axios";
import { storage } from "../../util/storage";
import { CheckDuplicateIdProps } from "../model/validateSchema";

const URL = {
  CHECK_DUPLICATE_ID: "/signup/check/?user_id=",
  REFRESH_TOKEN: "/token/refresh/",
};

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LS_URL,
});

const fetchCheckDuplicateId = ({ user_id }: CheckDuplicateIdProps) => {
  return http.get(`${URL.CHECK_DUPLICATE_ID}${user_id}`);
};

const fetchRefreshToken = () => {
  http.interceptors.response.use((response) => {
    const { data: token } = response;
    storage.set({ key: "ACCESS_TOKEN", value: token });
  });
  return http.get(URL.REFRESH_TOKEN);
};

export { fetchCheckDuplicateId, fetchRefreshToken };
