import styled from "styled-components";
import { color } from "../../../styles/palette";
import Margin from "../../common/Margin";

const DeliveryInfo = ({ name, tel, address }: any) => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledTitle>주문자</StyledTitle>
        <StyledGreenSpan>새로운 배송지</StyledGreenSpan>
      </StyledWrapper>
      <Margin size={2} />
      <div>{name}</div>
      <div>{tel}</div>
      <StyledAddress>{address}</StyledAddress>
      <Margin size={2} />
      <select placeholder="배송 시 요청사항을 선택해주세요.">
        <option>문 앞에 두고가주세요</option>
        <option>ppap</option>
      </select>
    </StyledContainer>
  );
};

export default DeliveryInfo;

const StyledContainer = styled.div`
  background-color: #ffffff;
  font-size: 1.4rem;
  padding: 1.5rem;
`;
const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
`;

const StyledGreenSpan = styled.span`
  font-weight: 500;
  color: ${color.teaveGreen};
`;

const StyledGrayText = styled.span`
  color: #b3b3b3;
`;

const StyledAddress = styled(StyledGrayText).attrs({ as: "address" })``;
