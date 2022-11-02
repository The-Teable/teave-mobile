import { rest } from "msw";

const myApi = [
  rest.get(process.env.NEXT_PUBLIC_LS_URL + "", (_req, res, ctx) => {
    return res(ctx.json(dummy.my));
  }),
];

export default myApi;

const dummy = { my: "" };
