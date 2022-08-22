import { useMutation } from "@tanstack/react-query";
import { fetchClickProduct, fetchWishProduct } from "../api/teaApi";

const useTeaQuery = () => {
  const handleClickProduct = useMutation(fetchClickProduct).mutate;

  const handleWishProduct = useMutation(fetchWishProduct).mutate;

  return { handleClickProduct, handleWishProduct };
};

export default useTeaQuery;
