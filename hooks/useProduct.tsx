import { useContext } from "react";
import { fetchSelectProduct, fetchWishProduct } from "../api/product";
import AuthContext from "../context/AuthContext";
import { ProductProps } from "../types/product";

const useProduct = ({ tea_id }: { tea_id: Pick<ProductProps, "id"> }) => {
  const {
    user: { user_id },
  } = useContext(AuthContext);

  const onClickProduct = () => {
    fetchSelectProduct({ user_id, tea_id });
  };

  const onClickWish = () => {
    fetchWishProduct({ user_id, tea_id });
  };

  return { onClickProduct, onClickWish };
};

export default useProduct;
