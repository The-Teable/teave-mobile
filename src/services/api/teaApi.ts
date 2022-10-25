import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { storage } from "../../util/storage";
import { ClickProductProps, MainFilteringResults } from "../model/teaSchema";

export const teaApiUrls = {
  REFRESH_TOKEN: "/token/refresh/",
  CLICK_PRODUCT: "/user-click-product/",
  RECOMMEND_PRODUCTS: "/main-filtering-results/",
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
    } = await http.get(teaApiUrls.REFRESH_TOKEN);
    storage.set({ key: "ACCESS_TOKEN", value: refreshedToken });
    return {
      ...config,
      headers: { Authorization: `Bearer ${refreshedToken}` },
    };
  }
  return { ...config, headers: { Authorization: `Bearer ${token}` } };
});

const fetchClickProduct = (props: ClickProductProps) => {
  return http.post(teaApiUrls.CLICK_PRODUCT, props);
};

const fetchMainProducts = async () => {
  return (await http.get<MainFilteringResults>(teaApiUrls.RECOMMEND_PRODUCTS))
    .data;
};

export { fetchClickProduct, fetchMainProducts };
