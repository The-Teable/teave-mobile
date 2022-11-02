import { useQuery } from "@tanstack/react-query";
import { getMypageInfo } from "../api/mypageApi";

export const mypageInfoQueryKeys = {
  GET_MYPAGE_INFO: "GET_MYPAGE_INFO",
};

const useMypageInfoQuery = () => {
  const { data: mypageInfo, ...results } = useQuery(
    [mypageInfoQueryKeys.GET_MYPAGE_INFO],
    getMypageInfo,
    {
      select: ({ data }) => data,
      onError: (error) => {
        console.error(error);
      },
    }
  );

  return {
    mypageInfo,
    ...results,
  };
};

export default useMypageInfoQuery;
