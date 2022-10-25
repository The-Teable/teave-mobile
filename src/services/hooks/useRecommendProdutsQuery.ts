import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { fetchMainProducts, teaApiUrls } from "../api/teaApi";
import { MainFilteringResults } from "../model/teaSchema";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LS_URL,
});

const useRecommendProductsQuery = () => {
  const { data, ...results } = useQuery(
    ["getResult"],
    () => http.get<MainFilteringResults>(teaApiUrls.RECOMMEND_PRODUCTS),
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
