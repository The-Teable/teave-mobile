import axios from "axios";
import { UserWishProduct } from "../model/wishSchema";
import { getToken } from "./_handleToken";

export const wishApiUrls = {
  WISH: "/user-wish-product/",
  WISH_DELETE: "/user-wish-product/delete/",
};

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LS_URL,
});

http.interceptors.request.use(async (config) => {
  const token = await getToken();
  return { ...config, headers: { Authorization: `Bearer ${token}` } };
});

const getWishApi = () => {
  return http.get<UserWishProduct>(wishApiUrls.WISH);
};

const addWishApi = ({ tea_id }: { tea_id: number }) => {
  return http.post(wishApiUrls.WISH, { tea_id });
};

const removeWishApi = ({ tea_id }: { tea_id: number }) => {
  return http.post(wishApiUrls.WISH_DELETE, { tea_id });
};

export { getWishApi, addWishApi, removeWishApi };
