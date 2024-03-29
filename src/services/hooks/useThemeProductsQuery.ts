import { useQuery } from "@tanstack/react-query";
import { getThemeProductsApi } from "../api/teaApi";
import { QUERY_KEY } from "../model/queryKey";

/**
 * 테마 추천은 프론트 서버에 정적으로 있어도 될 듯
 * 백엔드와 협의 후 삭제할 쿼리
 */
const useThemeProductsQuery = () => {
  const { data, ...results } = useQuery(
    [QUERY_KEY.GET_THEME_FILTERING],
    getThemeProductsApi,
    {
      select: ({ data }) => {
        return data.map(({ theme, tea_info }) => ({
          title: theme,
          goods: tea_info.map((product) => ({
            id: product.id,
            url: product.image_url,
            brand: product.brand,
            name: product.name,
            price: product.price,
          })),
        }));
      },
      onError: () => {
        /**
         * TODO: error handling
         */
      },
    }
  );
  return {
    themeProducts: data,
    ...results,
  };
};

export default useThemeProductsQuery;
