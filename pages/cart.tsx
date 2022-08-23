import styled from "styled-components";
import ToggleSelector from "../components/cart/toggleSelector";
import Margin from "../components/common/Margin";
import TitleHeader from "../components/common/TitleHeader";
import CenteredContainer from "../components/layout/CenteredContainer";
import { productInCart as dummy } from "./api/dummy.json";
import { ProductInCart } from "../services/model/cartSchema";
import CartFooter from "../components/cart/CartFooter";
import Bill from "../components/cart/Bill";
import CartProduct from "../components/cart/CartProduct";

const CartPage = () => {
  const productInCart = dummy;
  const dividedByBrand = productInCart.reduce<Record<string, ProductInCart[]>>(
    (acc, cur) => {
      acc[cur.brand] = cur.brand in acc ? [...acc[cur.brand], cur] : [cur];
      return acc;
    },
    {}
  );

  return (
    <>
      <TitleHeader title={"장바구니"} />
      <S.Container>
        <ToggleSelector id="selectAll" labelName="모두선택" />
        <CartProduct products={dividedByBrand} />
        <Margin size={2} />
      </S.Container>
      <Bill />
      <CartFooter />
    </>
  );
};

export default CartPage;

const S: any = {};

S.Container = styled(CenteredContainer)`
  background-color: #f4f4f4;
  min-height: 92vh;
  padding: 0;
  font-size: 1.5rem;
`;
