import { useMutation, useQueries, useQuery } from "@tanstack/react-query";
import { fetchClickProduct, fetchWishProduct } from "../api/teaApi";

const useTeaActionQuery = () => {
  const queryClickProduct = useMutation(fetchClickProduct).mutate;

  const queryWishProduct = useMutation(fetchWishProduct).mutate;

  return { queryClickProduct, queryWishProduct };
};

export default useTeaActionQuery;
