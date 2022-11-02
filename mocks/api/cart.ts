import { rest } from "msw";
import { cartApiUrls } from "../../src/services/api/cartApi";

const cartApi = [
  rest.get(
    process.env.NEXT_PUBLIC_LS_URL + cartApiUrls.CART_PRODUCT,
    (_req, res, ctx) => {
      return res(ctx.json(dummy.cartProducts));
    }
  ),
  rest.post(
    `${process.env.NEXT_PUBLIC_LS_URL + cartApiUrls.CART_PRODUCT}:tea_id`,
    (req, res, ctx) => {
      // const { authToken } = req.cookies;
      return res(ctx.status(201));
    }
  ),
  rest.delete(
    `${process.env.NEXT_PUBLIC_LS_URL + cartApiUrls.CART_PRODUCT}:tea_id`,
    (req, res, ctx) => {
      const { tea_id } = req.params;
      dummy.cartProducts = dummy.cartProducts.filter(
        ({ id }) => tea_id !== id + ""
      );
      return res(ctx.status(204));
    }
  ),
  rest.patch(
    `${process.env.NEXT_PUBLIC_LS_URL + cartApiUrls.CART_PRODUCT}:tea_id`,
    (req: any, res, ctx) => {
      const { tea_id } = req.params;
      const { is_selected } = req.body;
      dummy.cartProducts = dummy.cartProducts.map((product) => {
        if (tea_id === product.id + "") product.is_selected = is_selected;
        return product;
      });
      return res(ctx.status(204));
    }
  ),
];

export default cartApi;

const dummy = {
  cartProducts: [
    {
      id: 0,
      brand: "보향다원",
      name: "홍차아람",
      price: 25000,
      count: 1,
      image_url: "/image/goods1.svg",
      is_selected: true,
    },
    {
      id: 1,
      brand: "보향다원",
      name: "딸기 정원",
      price: 15000,
      count: 2,
      image_url: "/image/goods1.svg",
      is_selected: true,
    },
    {
      id: 2,
      brand: "투티거스 호랑이 다과점",
      name: "홍차아람",
      price: 15000,
      count: 1,
      image_url: "/image/goods1.svg",
      is_selected: false,
    },
  ],
};
