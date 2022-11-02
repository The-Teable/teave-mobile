import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMyInfoApi, postMyInfoApi } from "../api/_template";

export const myApiQueryKeys = {
  GET_MY_API: "GET_MY_API",
};

const useMyApiQuery = () => {
  const queryClient = useQueryClient();

  const { data: myInfo, ...results } = useQuery(
    [myApiQueryKeys.GET_MY_API],
    getMyInfoApi,
    {
      select: ({ data }) => data,
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const postMyInfo = useMutation(postMyInfoApi, {
    onSuccess: () => queryClient.invalidateQueries([myApiQueryKeys.GET_MY_API]),
    onError: (error) => {
      console.error(error);
    },
  }).mutate;

  return {
    myInfo,
    postMyInfo,
    ...results,
  };
};

export default useMyApiQuery;
