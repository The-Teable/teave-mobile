import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addCartProductApi,
  getCartProductsApi,
  removeCartProductApi,
  selectCartProductApi,
} from "../api/cartApi";
import { CartProductProps } from "../model/cartSchema";

const QUERY_KEY = "getCartProducts";

const useCartQuery = () => {
  const queryClient = useQueryClient();

  const { data: cartProducts, ...results } = useQuery(
    [QUERY_KEY],
    getCartProductsApi,
    {
      select: ({ data }) => data,
    }
  );

  const productPrice = cartProducts?.reduce(
    (acc, cur) => acc + (cur.is_selected ? cur.price * cur.count : 0),
    0
  );

  const dividedByBrand = cartProducts?.reduce<
    Record<string, CartProductProps[]>
  >((acc: Record<string, CartProductProps[]>, cur: CartProductProps) => {
    acc[cur.brand] = cur.brand in acc ? [...acc[cur.brand], cur] : [cur];
    return acc;
  }, {});

  const addCart = useMutation(addCartProductApi, {
    onSuccess: () => queryClient.invalidateQueries([QUERY_KEY]),
  }).mutate;

  const removeCart = useMutation(
    (teaId: number) => removeCartProductApi(teaId),
    {
      onSuccess: () => queryClient.invalidateQueries([QUERY_KEY]),
    }
  ).mutate;

  const selectProduct = useMutation(selectCartProductApi, {
    onSuccess: () => queryClient.invalidateQueries([QUERY_KEY]),
  }).mutate;

  const selectAllProduct = useMutation(selectCartProductApi, {
    onSuccess: () => queryClient.invalidateQueries([QUERY_KEY]),
  }).mutate;

  return {
    productPrice,
    dividedByBrand,
    addCart,
    removeCart,
    selectProduct,
    selectAllProduct,
    ...results,
  };
};

export default useCartQuery;
