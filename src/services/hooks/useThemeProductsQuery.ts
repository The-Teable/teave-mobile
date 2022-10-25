import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { teaApiUrls } from "../api/teaApi";
import { QUERY_KEY } from "../model/queryKey";
import { ThemeFiltering } from "../model/teaSchema";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LS_URL,
});

/**
 * 테마 추천은 프론트 서버에 정적으로 있어도 될 듯
 */
const useThemeProductsQuery = () => {
  const { data, ...results } = useQuery(
    [QUERY_KEY.GET_THEME_FILTERING],
    () => http.get<ThemeFiltering>(teaApiUrls.THEME_PRODUCTS),
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
  console.log(data);
  return {
    themeProducts: data,
    ...results,
  };
};

export default useThemeProductsQuery;
