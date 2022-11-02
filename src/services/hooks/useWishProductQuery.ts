import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addWishApi, getWishApi, removeWishApi } from "../api/wishApi";

/**
 * TODO
 *  - 토큰 유효성 검사
 *  - 에러 핸들링
 */

const queryKeys = {
  GET_WISH: "getWish",
};

const useWishProductQuery = () => {
  const queryClient = useQueryClient();

  const { data, ...results } = useQuery([queryKeys.GET_WISH], getWishApi, {
    select: (data) => {
      return data.data;
    },
  });

  const addWish = useMutation(addWishApi, {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.GET_WISH]);
    },
  }).mutate;

  const removeWish = useMutation(removeWishApi, {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.GET_WISH]);
    },
  }).mutate;
  return {
    wishProducts: data,
    addWish,
    removeWish,
    ...results,
  };
};

export { useWishProductQuery };
