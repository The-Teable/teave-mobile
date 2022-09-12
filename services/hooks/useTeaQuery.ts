import { useMutation } from "@tanstack/react-query";
import { fetchClickProduct, fetchWishProduct } from "../api/teaApi";

const useTeaQuery = () => {
  const queryClickProduct = useMutation(fetchClickProduct).mutate;

  const queryWishProduct = useMutation(fetchWishProduct).mutate;

  return { queryClickProduct, queryWishProduct };
};

export default useTeaQuery;
