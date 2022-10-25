import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { UserWishProduct } from "../model/wishSchema";

/**
 * TODO
 *  - 토큰 유효성 검사
 *  - 에러 핸들링
 */

const URL = {
  WISH: "/user-wish-product/",
};

const queryKeys = {
  GET_WISH: "getWish",
};

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LS_URL,
});

const useWishProduct = () => {
  const queryClient = useQueryClient();

  const { data, ...results } = useQuery(
    [queryKeys.GET_WISH],
    () => http.get<UserWishProduct>(URL.WISH),
    {
      select: (data) => {
        return data.data;
      },
    }
  );

  const addWish = useMutation((tea_id) => http.post(URL.WISH, { tea_id }), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.GET_WISH]);
    },
  }).mutate;

  const removeWish = useMutation(
    (tea_id: number) => http.post(`${URL.WISH}delete/`, { tea_id }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.GET_WISH]);
      },
    }
  ).mutate;
  return {
    wishProducts: data,
    addWish,
    removeWish,
    ...results,
  };
};

export { useWishProduct };
