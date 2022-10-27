import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  addCartProduct,
  getCartProducts,
  removeCartProduct,
} from "../api/cartApi";

const QUERY_KEY = "getCartProducts";

const useCartQuery = () => {
  const queryClient = useQueryClient();

  const { data, ...results } = useQuery([QUERY_KEY], getCartProducts, {
    select: ({ data }) => data,
  });

  const addCart = useMutation((teaId: number) => addCartProduct(teaId), {
    onSuccess: () => queryClient.invalidateQueries([QUERY_KEY]),
  });
  const removeCart = useMutation((teaId: number) => removeCartProduct(teaId), {
    onSuccess: () => queryClient.invalidateQueries([QUERY_KEY]),
  });

  return { cartProducts: data, addCart, removeCart, ...results };
};

export default useCartQuery;
