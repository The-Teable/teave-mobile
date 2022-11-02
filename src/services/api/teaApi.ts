import axios from "axios";
import {
  ClickProductProps,
  MainFilteringResults,
  ThemeFiltering,
} from "../model/teaSchema";
// import { getToken } from "./_handleToken";

export const teaApiUrls = {
  CLICK_PRODUCT: "/user-click-product/",
  RECOMMEND_PRODUCTS: "/main-filtering-results/",
  THEME_PRODUCTS: "/theme-filtering/",
};

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LS_URL,
});

// http.interceptors.request.use(async (config) => {
//   const token = await getToken();
//   return { ...config, headers: { Authorization: `Bearer ${token}` } };
// });

const clickProductApi = (props: ClickProductProps) => {
  return http.post(teaApiUrls.CLICK_PRODUCT, props);
};

const getMainProductsApi = () => {
  return http.get<MainFilteringResults>(teaApiUrls.RECOMMEND_PRODUCTS);
};

const getThemeProductsApi = () => {
  return http.get<ThemeFiltering>(teaApiUrls.THEME_PRODUCTS);
};

export { clickProductApi, getMainProductsApi, getThemeProductsApi };
