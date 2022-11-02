import styled from "styled-components";

const Bill = (props: {
  productPrice: number | undefined;
  deliveryCost: number | undefined;
  discountPrice: number | undefined;
}) => {
  const { productPrice, deliveryCost, discountPrice } = props;
  if (!productPrice || !deliveryCost || !discountPrice) return null;
  return (
    <>
      <StyledContainer>
        <StyledWrapper>
          <StyledItemGray>총 상품 금액</StyledItemGray>
          <StyledItem>{productPrice.toLocaleString() + "원"}</StyledItem>
        </StyledWrapper>
        <StyledWrapper>
          <StyledItemGray>총 배송비</StyledItemGray>
          <StyledItem>{deliveryCost.toLocaleString() + "원"}</StyledItem>
        </StyledWrapper>
        <StyledWrapper>
          <StyledItemGray>총 할인 금액</StyledItemGray>
          <StyledItem>{discountPrice.toLocaleString() + "원"}</StyledItem>
        </StyledWrapper>
        <StyledWrapper>
          <StyledResult>결제 금액</StyledResult>
          <StyledResult>
            {(productPrice + deliveryCost - discountPrice).toLocaleString() +
              "원"}
          </StyledResult>
        </StyledWrapper>
      </StyledContainer>
    </>
  );
};

export default Bill;

const S: any = {};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 1rem 1rem;
`;
const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  &:last-child {
    border-top: 1px #f4f4f4 solid;
  }
`;
const StyledItemGray = styled.div`
  color: #808080;
  font-size: 1.4rem;
`;
const StyledItem = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
`;
const StyledResult = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
`;
