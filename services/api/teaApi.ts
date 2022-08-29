import axios from "axios";
import { ClickProductProps, WishProductProps } from "../model/teaSchema";

const URL = {
  CLICK_PRODUCT: "/user-click-product/",
  WISH_PRODUCT: "/user-wish-product/",
};

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LS_URL,
});

const fetchClickProduct = (props: ClickProductProps) => {
  return http.post(URL.CLICK_PRODUCT, props);
};

const fetchWishProduct = (props: WishProductProps) => {
  return http.post(URL.WISH_PRODUCT, props);
};

export { fetchClickProduct, fetchWishProduct };
