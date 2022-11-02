import axios from "axios";
import { getToken } from "./_handleToken";

/**
 * 아직 안 만들어진 API임
 * 추후 만들어지면 URL과 props 변경 요망
 */
export const mypageApiUrls = {
  MYPAGE_INFO: "/mypage_info/",
};

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LS_URL,
});

// http.interceptors.request.use(async (config) => {
//   const token = await getToken();
//   return { ...config, headers: { Authorization: `Bearer ${token}` } };
// });

const getMypageInfo = () => {
  console.log("fetch ");
  return http.get(mypageApiUrls.MYPAGE_INFO);
};

export { getMypageInfo };
