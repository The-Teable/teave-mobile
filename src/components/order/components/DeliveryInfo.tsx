import styled from "styled-components";
import { color } from "../../../styles/palette";
import Margin from "../../common/Margin";

const DeliveryInfo = ({ name, tel, address }: any) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>주문자</S.Title>
        <S.GreenSpan>새로운 배송지</S.GreenSpan>
      </S.Wrapper>
      <Margin size={2} />
      <div>{name}</div>
      <div>{tel}</div>
      <S.Address>{address}</S.Address>
      <Margin size={2} />
      <select placeholder="배송 시 요청사항을 선택해주세요.">
        <option>문 앞에 두고가주세요</option>
        <option>ppap</option>
      </select>
    </S.Container>
  );
};

export default DeliveryInfo;

const S: any = {};

S.Container = styled.div`
  background-color: #ffffff;
  font-size: 1.4rem;
  padding: 1.5rem;
`;
S.Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

S.Title = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
`;

S.GreenSpan = styled.span`
  font-weight: 500;
  color: ${color.teaveGreen};
`;

S.GrayText = styled.span`
  color: #b3b3b3;
`;

S.Address = styled(S.GrayText).attrs({ as: "address" })``;
