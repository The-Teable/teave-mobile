import axios from "axios";
import { CartProduct } from "../model/cartSchema";

export const cartApiUrls = {
  CART_PRODUCT: "/cart_product/",
};

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LS_URL,
});

const getCartProducts = () => {
  return http.get<CartProduct[]>(cartApiUrls.CART_PRODUCT);
};

const addCartProduct = (teaId: number) => {
  return http.post(`${cartApiUrls.CART_PRODUCT}/${teaId}`);
};

const removeCartProduct = (teaId: number) => {
  return http.delete(`${cartApiUrls.CART_PRODUCT}/${teaId}`);
};

export { getCartProducts, addCartProduct, removeCartProduct };
