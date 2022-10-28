import axios from "axios";
import { CartProductProps } from "../model/cartSchema";

export const cartApiUrls = {
  CART_PRODUCT: "/cart_product/",
};

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LS_URL,
});

const getCartProducts = () => {
  return http.get<CartProductProps[]>(cartApiUrls.CART_PRODUCT);
};

const postAddCartProduct = (teaId: number) => {
  return http.post(`${cartApiUrls.CART_PRODUCT}${teaId}`);
};

const deleteCartProduct = (teaId: number) => {
  return http.delete(`${cartApiUrls.CART_PRODUCT}${teaId}`);
};
/**
 * TODO: 단일 선택, 전체 선택, 수량 변경 api 협의
 */
const patchSelectCartProduct = (teaId: number, isSelected: boolean) => {
  return http.patch(`${cartApiUrls.CART_PRODUCT}${teaId}`, {
    is_selected: !isSelected,
  });
};

export {
  getCartProducts,
  postAddCartProduct,
  deleteCartProduct,
  patchSelectCartProduct,
};
