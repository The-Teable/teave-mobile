import axios from "axios";
import { CheckDuplicateIdProps } from "../model/validateSchema";

export const validateApiUrls = {
  CHECK_DUPLICATE_ID: "/signup/check/?user_id=",
  REFRESH_TOKEN: "/token/refresh/",
};

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LS_URL,
});

const checkDuplicateIdApi = ({ user_id }: CheckDuplicateIdProps) => {
  return http.get(`${validateApiUrls.CHECK_DUPLICATE_ID}${user_id}`);
};

export { checkDuplicateIdApi };
