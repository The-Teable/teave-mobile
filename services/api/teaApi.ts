import { ClickProductProps, WishProductProps } from "../model/teaSchema";
import { http, URL } from "./instance";

const fetchClickProduct = (props: ClickProductProps) => {
  return http.post(URL.CLICK_PRODUCT, props);
};

const fetchWishProduct = (props: WishProductProps) => {
  return http.post(URL.WISH_PRODUCT, props);
};

export { fetchClickProduct, fetchWishProduct };
