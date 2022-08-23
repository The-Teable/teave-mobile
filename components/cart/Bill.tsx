import styled from "styled-components";
import CenteredContainer from "../layout/CenteredContainer";

const Bill = () => {
  return (
    <>
      <CenteredContainer>
        <S.Container>
          <S.Wrapper>
            <S.ItemGray>총 상품 금액</S.ItemGray>
            <S.Item>67,000원</S.Item>
          </S.Wrapper>
          <S.Wrapper>
            <S.ItemGray>총 배송비</S.ItemGray>
            <S.Item>3,000원</S.Item>
          </S.Wrapper>
          <S.Wrapper>
            <S.ItemGray>총 할인 금액</S.ItemGray>
            <S.Item>0원</S.Item>
          </S.Wrapper>
          <S.Wrapper>
            <S.Result>결제 금액</S.Result>
            <S.Result>70,000원</S.Result>
          </S.Wrapper>
        </S.Container>
      </CenteredContainer>
    </>
  );
};

export default Bill;

const S: any = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 2rem 1.5rem;
`;
S.Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
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
  font-size: 1.4rem;
  font-weight: bold;
`;
