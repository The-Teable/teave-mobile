import styled from "styled-components";
import Margin from "../common/Margin";
import CenteredContainer from "../common/CenteredContainer";
import DeliveryInfo from "./components/DeliveryInfo";
import OrderProduct from "./components/OrderProduct";
import Bill from "../common/Bill";
import Button from "../common/Button";
import useCartQuery from "../../services/hooks/useCartQuery";

const OrderPage = () => {
  const { dividedByBrand, productPrice } = useCartQuery();

  const tempUserInfo = {
    name: "김티브",
    tel: "010-1243-2343",
    address: "서울시 성암로 8길 12번지",
  };

  return (
    <>
      <Margin size={1} />
      <DeliveryInfo {...tempUserInfo} />
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
