import axios from "axios";

export const cartApiUrls = {
  PRODUCTS_IN_CART: "/products-in-cart/"
};

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LS_URL,
});

const fetchProductsInCart = () => {
  return http.get(cartApiUrls.PRODUCTS_IN_CART);
};

export { fetchProductsInCart };
