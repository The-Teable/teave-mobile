import styled from "styled-components";
import Image from "next/image";
import { CartProductProps } from "../../../services/model/cartSchema";
import Margin from "../../common/Margin";
import { color } from "../../../styles/palette";

const OrderProduct = ({
  products,
}: {
  products: Record<string, CartProductProps[]> | undefined;
}) => {
  if (!products) return null;
  return (
    <StyledContainer>
      <StyledTitle>주문상품</StyledTitle>
      {Object.entries(products).map(([brandName, items]) => (
        <>
          <StyledBrandTitle>{brandName}</StyledBrandTitle>
          {items.map(({ id, name, price, count, image_url }) => (
            <StyledItemContainer key={id}>
              <StyledItemWrapper>
                <Image src={image_url} width={60} height={60} alt={name} />
                <Margin size={1} row />
                <StyledItemTitle>{name}</StyledItemTitle>
                <Margin size={1} row />
                <div>{count} 개</div>
              </StyledItemWrapper>
              <StyledPrice>{(price * count).toLocaleString()}원</StyledPrice>
            </StyledItemContainer>
          ))}
          <StyledDeliveryCost>배송비 3,000원</StyledDeliveryCost>
          <Margin size={0.5} row />
          <Margin size={1} />
        </>
      ))}
    </StyledContainer>
  );
};

export default OrderProduct;

const StyledContainer = styled.div`
  font-size: 1.2rem;
`;

const StyledTitle = styled.div`
  display: flex;
  font-size: 1.6rem;
  font-weight: bold;
  background-color: #ffffff;
  align-items: center;
  height: 5rem;
  border-bottom: 1px solid ${color.gray200};
  padding: 0 2rem;
`;

const StyledBrandTitle = styled.div`
  display: flex;
  font-weight: 500;
  background-color: #ffffff;
  align-items: center;
  height: 5rem;
  border-bottom: 1px solid ${color.gray200};
  padding: 0 2rem;
`;

const StyledItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 1rem;
  font-size: 1.2rem;
`;

const StyledItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledItemTitle = styled.div`
  font-size: 1.2rem;
`;

const StyledCount = styled.input`
  width: 5rem;
`;

const StyledPrice = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const StyledDeliveryCost = styled.div`
  display: flex;
  background-color: #ffffff;
  align-items: center;
  height: 4rem;
  border-top: 1px solid ${color.gray200};
  font-size: 1.2rem;
  color: #808080;
  padding: 0 2rem;
`;
