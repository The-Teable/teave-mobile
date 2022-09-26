import { useQuery } from "@tanstack/react-query";
import { fetchThemeProducts } from "../api/teaApi";
import { QUERY_KEY } from "../model/queryKey";

const useThemeProductsQuery = () => {
  const { data, ...results } = useQuery(
    [QUERY_KEY.GET_THEME_FILTERING],
    fetchThemeProducts,
    {
      select: (themes) =>
        themes.map(({ theme, tea_info }) => ({
          title: theme,
          goods: tea_info.map((product) => ({
            id: product.id,
            url: product.image_url,
            brand: product.brand,
            name: product.name,
            price: product.price,
          })),
        })),
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
