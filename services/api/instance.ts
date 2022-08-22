import axios from "axios";
import dayjs from "dayjs";
import jwtDecode from "jwt-decode";
import { storage, STORAGE_KEY } from "../../util/storage";

const URL = {
  LOGIN: "/login/",
  SIGNUP: "/signup/",
} as const;

const URL_NEED_TOKEN = {
  LOGOUT: "/logout",
} as const;

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LS_URL,
});

const httpWithToken = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LS_URL,
});

httpWithToken.interceptors.request.use(async (config) => {
  const accessToken = storage.get(STORAGE_KEY.ACCESS_TOKEN);
  if (!accessToken) {
    alert("no access token");
    return;
  }
  const decodedToken = jwtDecode(accessToken);

  const hasExp = (token: unknown): token is { exp: number } =>
    typeof token === "object" && token !== null && "exp" in token;

  const exp = hasExp(decodedToken) ? decodedToken.exp : null;
  if (!exp) {
    alert("no exp in access token");
    return;
  }

  const isExpired = dayjs.unix(exp).diff(dayjs()) < 1;
  if (!isExpired) return config;

  const {
    data: { access: newAccessToken, refresh: newRefreshToken },
  } = await axios.post(`${process.env.NEXT_PUBLIC_LS_URL}/token/refresh/`, {
    refresh: storage.get(STORAGE_KEY.REFRESH_TOKEN),
  });

  storage.set({ key: STORAGE_KEY.ACCESS_TOKEN, value: newAccessToken });
  storage.set({ key: STORAGE_KEY.REFRESH_TOKEN, value: newRefreshToken });

  if (config.headers === undefined) config.headers = {};
  config.headers.Authorization = `Bearer ${newAccessToken}`;

  return config;
});

export { URL, URL_NEED_TOKEN, http, httpWithToken };
