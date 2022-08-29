import axios from "axios";
import { CheckDuplicateIdProps } from "../model/validateSchema";

const URL = {
  CHECK_DUPLICATE_ID: "/signup/check/?user_id=",
};

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LS_URL,
});

const fetchCheckDuplicateId = ({ user_id }: CheckDuplicateIdProps) => {
  return http.get(`${URL.CHECK_DUPLICATE_ID}${user_id}`);
};

export { fetchCheckDuplicateId };
