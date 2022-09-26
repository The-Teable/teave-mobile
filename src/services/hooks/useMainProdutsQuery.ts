import { useQuery } from "@tanstack/react-query";
import { fetchMainProducts } from "../api/teaApi";

const useMainProductsQuery = () => {
  const { data, ...results } = useQuery(["getResult"], fetchMainProducts, {
    select: (products) =>
      products.map((product) => ({
        url: product.image_url,
        brand: product.brand,
        name: product.name,
        /**
         * TODO: 서버데이터에 추가 후 수정
         */
        features: "",
        describe: "",
      })),
    onError: () => {
      /**
       * TODO: error handling
       */
    },
  });
  return {
    mainProducts: data,
    ...results,
  };
};

export default useMainProductsQuery;
