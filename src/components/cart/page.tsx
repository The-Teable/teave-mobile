import ToggleSelector from "./components/ToggleSelector";
import Margin from "../common/Margin";
import { productInCart } from "../../services/static/dummy.json";
import { ProductInCart } from "../../services/model/cartSchema";
import CartFooter from "./components/CartFooter";
import Bill from "../common/Bill";
import CartProductsContainer from "./components/CartProductsContainer";

const TEMP_DELIVERY_FEE = 3000;

/**
 * TODO :
 *  - 서버 API 완성시 dividedByBrand를 react query에서 select하는 것으로 교체할 것
 *  - discountPrice 일단 0으로 했는데 할인가를 어디서 정하는지? 서버에서 보내줄 때 할인가와 원가를 주는지?
 *  - 모두 선택 클릭 시 dividedByBrand에서 is_selected가 false 인 아이템들을 true로 바꾸는 PUT요청
 *  - delivery cost 산정 방식 협의 후 TEMP_DELIVERY_FEE수정
 */
const CartPage = () => {
  const dividedByBrand = productInCart.reduce<Record<string, ProductInCart[]>>(
    (acc: Record<string, ProductInCart[]>, cur: ProductInCart) => {
      acc[cur.brand] = cur.brand in acc ? [...acc[cur.brand], cur] : [cur];
      return acc;
    },
    {}
  );

  const productPrice = productInCart.reduce(
    (acc, cur) => acc + (cur.is_selected ? cur.price * cur.count : 0),
    0
  );

  return (
    <>
      <ToggleSelector id="selectAll" labelName="모두선택" />
      <CartProductsContainer products={dividedByBrand} />
      <Margin size={2} />
      <Bill
        productPrice={productPrice}
        deliveryCost={TEMP_DELIVERY_FEE}
        discountPrice={0}
      />
      <CartFooter price={productPrice + TEMP_DELIVERY_FEE} />
    </>
  );
};

export default CartPage;
