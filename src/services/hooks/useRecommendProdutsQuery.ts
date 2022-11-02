import { useQuery } from "@tanstack/react-query";
import { getMainProductsApi, teaApiUrls } from "../api/teaApi";

export const RecommendProductsQueryKeys = {
  GET_RECOMMEND_PRODUCT: "GET_RECOMMEND_PRODUCT",
};

const useRecommendProductsQuery = () => {
  const { data, ...results } = useQuery(
    [RecommendProductsQueryKeys.GET_RECOMMEND_PRODUCT],
    getMainProductsApi,
    {
      select: ({ data: products }) =>
        products.map((product) => ({
          url: product.image_url,
          brand: product.brand,
          name: product.name,
          features: product.efficacies,
          describe: product.description,
        })),
      onError: () => {
        /**
         * TODO: error handling
         */
      },
    }
  );
  return {
    recommendProducts: data,
    ...results,
  };
};

export default useRecommendProductsQuery;
