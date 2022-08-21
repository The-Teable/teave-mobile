import axios from "axios";
import dayjs from "dayjs";
import { storage, STORAGE_KEY } from "../../util/storage";

const authenticUrls = {
  LOGOUT: "/logout",
} as const;

const authenticInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LS_URL,
});

authenticInstance.interceptors.request.use(async (config) => {
  const accessToken = storage.get(STORAGE_KEY.ACCESS_TOKEN);

  const isExpired = dayjs.unix(accessToken.exp).diff(dayjs()) < 1;
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

export { authenticUrls, authenticInstance };
