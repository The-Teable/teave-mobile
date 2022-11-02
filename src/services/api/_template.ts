import axios from "axios";
import { getToken } from "./_handleToken";

export const myApiUrls = {
  MY_API: "/my_api/",
};

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LS_URL,
});

http.interceptors.request.use(async (config) => {
  const token = await getToken();
  return { ...config, headers: { Authorization: `Bearer ${token}` } };
});

const getMyInfoApi = () => {
  return http.get(myApiUrls.MY_API);
};

const postMyInfoApi = (props: {}) => {
  return http.post(myApiUrls.MY_API, props);
};

export { getMyInfoApi, postMyInfoApi };
