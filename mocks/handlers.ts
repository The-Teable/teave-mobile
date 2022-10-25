import { rest } from "msw";
import { UserWishProduct } from "../src/services/model/wishSchema";

type UserWishProductRequsetBody = {
  body: {
    tea_id: number;
  };
};

let wishProducts = [
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
];

export const handlers = [
  rest.get(
    process.env.NEXT_PUBLIC_LS_URL + "/user-wish-product/",
    (_req, res, ctx) => {
      return res(ctx.json<UserWishProduct[]>(wishProducts));
    }
  ),
  rest.post(
    process.env.NEXT_PUBLIC_LS_URL + "/user-wish-product/",
    (_req, res, ctx) => {
      // const { authToken } = req.cookies;
      return res(ctx.status(201));
    }
  ),
  rest.post(
    process.env.NEXT_PUBLIC_LS_URL + "/user-wish-product/delete",
    (req: UserWishProductRequsetBody, res, ctx) => {
      const { tea_id } = req.body;
      wishProducts = wishProducts.filter(({ id }) => tea_id !== id);
      return res(ctx.status(204));
    }
  ),
];
