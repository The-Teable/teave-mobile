import { rest } from "msw";
import { mypageApiUrls } from "../../src/services/api/mypageApi";

const mypageApi = [
  rest.get(
    process.env.NEXT_PUBLIC_LS_URL + mypageApiUrls.MYPAGE_INFO,
    (_req, res, ctx) => {
      return res(ctx.json(dummy.userInfo));
    }
  ),
];

export default mypageApi;

const dummy = {
  userInfo: {
    name: "최수연",
    rank: "녹차",
    mileage: 500,
    couponCount: 2,
    orderCount: 41,
    deliveryCount: 2,
    reviewCount: 12,
  },
};
