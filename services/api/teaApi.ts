import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { storage } from "../../util/storage";
import { ClickProductProps, WishProductProps } from "../model/teaSchema";
import { fetchRefreshToken } from "./validateApi";

const URL = {
  CLICK_PRODUCT: "/user-click-product/",
  WISH_PRODUCT: "/user-wish-product/",
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
    const response = await fetchRefreshToken();
    return {
      ...config,
      headers: { HTTP_AUTHORIZATION: response.data.token },
    };
  }
  return { ...config, headers: { HTTP_AUTHORIZATION: token } };
});

const fetchClickProduct = (props: ClickProductProps) => {
  return http.post(URL.CLICK_PRODUCT, props);
};

const fetchWishProduct = (props: WishProductProps) => {
  return http.post(URL.WISH_PRODUCT, props);
};

export { fetchClickProduct, fetchWishProduct };
