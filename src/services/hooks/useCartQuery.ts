import { useQuery } from "@tanstack/react-query"
import { fetchProductsInCart } from "../api/cartApi"

const useCartQuery = () => {
    const {data, ...results } = useQuery(["getCart"],fetchProductsInCart, {select: ({data}) => data});
    return { productsInCart: data, ...results}
}