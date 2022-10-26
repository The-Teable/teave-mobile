import styled from "styled-components";
// import CenteredContainer from "../layout/CenteredContainer";

const Bill = (props: {
  productPrice: number;
  deliveryCost: number;
  discountPrice: number;
}) => {
  const { productPrice, deliveryCost, discountPrice } = props;
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.ItemGray>총 상품 금액</S.ItemGray>
          <S.Item>{productPrice.toLocaleString() + "원"}</S.Item>
        </S.Wrapper>
        <S.Wrapper>
          <S.ItemGray>총 배송비</S.ItemGray>
          <S.Item>{deliveryCost.toLocaleString() + "원"}</S.Item>
        </S.Wrapper>
        <S.Wrapper>
          <S.ItemGray>총 할인 금액</S.ItemGray>
          <S.Item>{discountPrice.toLocaleString() + "원"}</S.Item>
        </S.Wrapper>
        <S.Wrapper>
          <S.Result>결제 금액</S.Result>
          <S.Result>
            {(productPrice + deliveryCost - discountPrice).toLocaleString() +
              "원"}
          </S.Result>
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default Bill;

const S: any = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 1rem 1rem;
`;
S.Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  &:last-child {
    border-top: 1px #f4f4f4 solid;
  }
`;
S.ItemGray = styled.div`
  color: #808080;
  font-size: 1.4rem;
`;
S.Item = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
`;
S.Result = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
`;
