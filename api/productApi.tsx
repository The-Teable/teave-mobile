import axios from "axios";
import { ProductProps } from "../types/product";
import { UserProps } from "../types/user";
import errorHandling from "./errorHandling";

const instance = axios.create({ baseURL: process.env.NEXT_PUBLIC_LS_URL });

const fetchSelectProduct = (props: {
  tea_id: ProductProps["id"];
  user_id: UserProps["user_id"];
}) => {
  const { user_id, tea_id } = props;

  instance
    .post("user-click-product", {
      user_id,
      tea_id,
    })
    .catch((error) => {
      errorHandling(error);
    });
};

const fetchWishProduct = (props: {
  tea_id: ProductProps["id"];
  user_id: UserProps["user_id"];
}) => {
  const { user_id, tea_id } = props;

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
