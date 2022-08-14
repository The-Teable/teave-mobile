import { fetchSelectProduct, fetchWishProduct } from "../api/product";
import { ProductProps } from "../types/product";
import { UserProps } from "../types/user";

const useProduct = (props: {
  tea_id: ProductProps["id"];
  user_id: UserProps["user_id"];
}) => {
  const { tea_id, user_id } = props;

  const onClickProduct = () => {
    fetchSelectProduct({ user_id, tea_id });
  };

  const onClickWish = () => {
    fetchWishProduct({ user_id, tea_id });
  };

  return { onClickProduct, onClickWish };
};

export default useProduct;
