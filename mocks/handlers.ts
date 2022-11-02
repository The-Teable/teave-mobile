import cartApi from "./api/cart";
import mypageApi from "./api/mypage";
import teaApi from "./api/tea";
import wishApi from "./api/wish";

export const handlers = [...wishApi, ...teaApi, ...cartApi, ...mypageApi];
