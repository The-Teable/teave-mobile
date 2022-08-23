import styled from "styled-components";
import Margin from "../components/common/Margin";
import TitleHeader from "../components/common/TitleHeader";
import CenteredContainer from "../components/layout/CenteredContainer";
import { productInCart as dummy } from "./api/dummy.json";
import { ProductInCart } from "../services/model/cartSchema";
import DeliveryInfo from "../components/order/DeliveryInfo";
import OrderProduct from "../components/order/OrderProduct";
import Bill from "../components/cart/Bill";
import Button from "../components/common/Button";

const OrderPage = () => {
  const productInCart = dummy;
  const dividedByBrand = productInCart.reduce<Record<string, ProductInCart[]>>(
    (acc, cur) => {
      acc[cur.brand] = cur.brand in acc ? [...acc[cur.brand], cur] : [cur];
      return acc;
    },
    {}
  );
  const userInfo = {
    name: "김티브",
    tel: "010-1243-2343",
    address: "서울시 성암로 8길 12번지",
  };

  return (
    <>
      <TitleHeader title={"주문 / 결제"} />
      <S.Container>
        <Margin size={1} />
        <DeliveryInfo {...userInfo} />
        <Margin size={1} />
        <OrderProduct products={dividedByBrand} />
      </S.Container>
      <Bill />
      <S.SubmitContainer>
        <S.Button>70,000원 결제하기</S.Button>
      </S.SubmitContainer>
    </>
  );
};

export default OrderPage;

const S: any = {};

S.Container = styled(CenteredContainer)`
  background-color: #f4f4f4;
  min-height: 92vh;
  padding: 0;
  font-size: 1.5rem;
`;

S.SubmitContainer = styled(CenteredContainer)`
  padding: 2rem;
`;

S.Button = styled(Button)`
  font-size: 1.5rem;
  font-weight: bold;
  height: 4rem;
`;
