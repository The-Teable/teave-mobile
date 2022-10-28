import styled from "styled-components";
import Margin from "../common/Margin";
import CenteredContainer from "../common/CenteredContainer";
import { productInCart } from "../../services/static/dummy.json";
import { CartProductProps } from "../../services/model/cartSchema";
import DeliveryInfo from "./components/DeliveryInfo";
import OrderProduct from "./components/OrderProduct";
import Bill from "../common/Bill";
import Button from "../common/Button";

/**
 * TODO:
 *  - productInCart 대신 주문할 물품들을 받아와야함
 */
const OrderPage = () => {
  const dividedByBrand = productInCart.reduce<
    Record<string, CartProductProps[]>
  >((acc, cur) => {
    acc[cur.brand] = cur.brand in acc ? [...acc[cur.brand], cur] : [cur];
    return acc;
  }, {});
  const userInfo = {
    name: "김티브",
    tel: "010-1243-2343",
    address: "서울시 성암로 8길 12번지",
  };

  const productPrice = productInCart
    .filter(({ is_selected }: CartProductProps) => is_selected)
    .reduce((totalPrice, { price }) => totalPrice + price, 0);

  return (
    <>
      <Margin size={1} />
      <DeliveryInfo {...userInfo} />
      <Margin size={1} />
      <OrderProduct products={dividedByBrand} />
      <Bill productPrice={productPrice} deliveryCost={3000} discountPrice={0} />
      <StyledSubmitContainer>
        <StyledButton>70,000원 결제하기</StyledButton>
      </StyledSubmitContainer>
    </>
  );
};

export default OrderPage;

const StyledSubmitContainer = styled(CenteredContainer)`
  padding: 2rem;
`;

const StyledButton = styled(Button)`
  font-size: 1.5rem;
  font-weight: bold;
  height: 4rem;
`;
