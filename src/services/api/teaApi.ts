import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { storage } from "../../util/storage";
import {
  ClickProductProps,
  MainFilteringResults,
  ThemeFiltering,
} from "../model/teaSchema";

const URL = {
  REFRESH_TOKEN: "/token/refresh/",
  CLICK_PRODUCT: "/user-click-product/",
  MAIN_PRODUCTS: "/main-filtering-results/",
  THEME_PRODUCTS: "/theme-filtering/",
};

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LS_URL,
});

http.interceptors.request.use(async (config) => {
  const token = storage.get("ACCESS_TOKEN");
  const decodedToken = jwt_decode(token);

  const hasExp = (decodedToken: unknown): decodedToken is { exp: number } =>
    typeof decodedToken === "object" &&
    decodedToken !== null &&
    "exp" in decodedToken;

  const isExpired = hasExp(decodedToken)
    ? dayjs.unix(decodedToken.exp).diff(dayjs()) < 1
    : true;

  if (isExpired) {
    const {
      data: { token: refreshedToken },
    } = await http.get(URL.REFRESH_TOKEN);
    storage.set({ key: "ACCESS_TOKEN", value: refreshedToken });
    return {
      ...config,
      headers: { Authorization: `Bearer ${refreshedToken}` },
    };
  }
  return { ...config, headers: { Authorization: `Bearer ${token}` } };
});

const fetchClickProduct = (props: ClickProductProps) => {
  return http.post(URL.CLICK_PRODUCT, props);
};

const fetchMainProducts = async () => {
  return (await http.get<MainFilteringResults>(URL.MAIN_PRODUCTS)).data;
};

const fetchThemeProducts = () => {
  return http.get<ThemeFiltering>(URL.THEME_PRODUCTS);
};

export { fetchClickProduct, fetchMainProducts, fetchThemeProducts };
