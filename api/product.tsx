import axios from "axios";
import { ProductProps } from "../types/product";
import { UserProps } from "../types/user";
import errorHandling from "./errorHandling";

const instance = axios.create({ baseURL: process.env.NEXT_PUBLIC_LS_URL });

const fetchSelectProduct = ({
  user_id,
  tea_id,
}: {
  tea_id: Pick<ProductProps, "id">;
  user_id: Pick<UserProps, "user_id">;
}) => {
  instance
    .post("user-click-product", {
      user_id,
      tea_id,
    })
    .catch((error) => {
      errorHandling(error);
    });
};

const fetchWishProduct = ({
  user_id,
  tea_id,
}: {
  tea_id: Pick<ProductProps, "id">;
  user_id: Pick<UserProps, "user_id">;
}) => {
  instance
    .post("user-wish-product", {
      user_id,
      tea_id,
    })
    .catch((error) => {
      errorHandling(error);
    });
};

export { fetchSelectProduct, fetchWishProduct };
