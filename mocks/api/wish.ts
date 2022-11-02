import { rest } from "msw";
import { wishApiUrls } from "../../src/services/api/wishApi";
import { UserWishProduct } from "../../src/services/model/wishSchema";

const wishApi = [
  rest.get(
    process.env.NEXT_PUBLIC_LS_URL + wishApiUrls.WISH,
    (_req, res, ctx) => {
      return res(ctx.json<UserWishProduct>(dummy.wishProducts));
    }
  ),
  rest.post(
    process.env.NEXT_PUBLIC_LS_URL + wishApiUrls.WISH,
    (_req, res, ctx) => {
      // const { authToken } = req.cookies;
      return res(ctx.status(201));
    }
  ),
  rest.post(
    process.env.NEXT_PUBLIC_LS_URL + wishApiUrls.WISH_DELETE,
    (
      req: {
        body: {
          tea_id: number;
        };
      },
      res,
      ctx
    ) => {
      const { tea_id } = req.body;
      dummy.wishProducts = dummy.wishProducts.filter(({ id }) => tea_id !== id);
      return res(ctx.status(204));
    }
  ),
];

export default wishApi;

const dummy = {
  wishProducts: [
    {
      id: 0,
      name: "카라멜 티메리카노 ",
      brand: "큐앤리브리즈",
      type: "",
      flavor: "",
      caffeine: "",
      efficacies: "",
      price: 15000,
      image_url: "/image/goods1.svg",
    },
    {
      id: 1,
      name: "카라멜 티메리카노 ",
      brand: "큐앤리브리즈",
      type: "",
      flavor: "",
      caffeine: "",
      efficacies: "",
      price: 15000,
      image_url: "/image/goods2.svg",
    },
    {
      id: 2,
      name: "카라멜 티메리카노 ",
      brand: "큐앤리브리즈",
      type: "",
      flavor: "",
      caffeine: "",
      efficacies: "",
      price: 15000,
      image_url: "/image/goods3.svg",
    },
    {
      id: 3,
      name: "카라멜 티메리카노 ",
      brand: "큐앤리브리즈",
      type: "",
      flavor: "",
      caffeine: "",
      efficacies: "",
      price: 15000,
      image_url: "/image/goods1.svg",
    },
  ],
};
