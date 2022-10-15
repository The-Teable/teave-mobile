import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

/**
 * TODO
 *  - 토큰 유효성 검사
 *  - 에러 핸들링
 */

const URL = {
  WISH: "/user-wish-product/",
};

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LS_URL,
});

const useWishProduct = () => {
  const queryClient = useQueryClient();

  const { data, ...results } = useQuery(["getWish"], () => http.get(URL.WISH), {
    select: () => {
      return data?.data.data;
    },
  });

  const addWish = useMutation((tea_id) => http.post(URL.WISH, { tea_id }), {
    onSuccess: () => {
      queryClient.invalidateQueries(["getWish"]);
    },
  }).mutate;

  const removeWish = useMutation(
    (tea_id) => http.post(`${URL.WISH}/delete`, { tea_id }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["getWish"]);
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
