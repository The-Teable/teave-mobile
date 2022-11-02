import Image from "next/image";
import styled from "styled-components";
import useMypageInfoQuery from "../../../services/hooks/useMypageInfoQuery";

const UserInfoContainer = () => {
  const { mypageInfo } = useMypageInfoQuery();
  if (!mypageInfo) return null;

  const {
    name,
    rank,
    mileage,
    couponCount,
    orderCount,
    deliveryCount,
    reviewCount,
  } = mypageInfo;

  return (
    <>
      <StyledLoginContainer>
        <StyledUserContainer>
          <Image
            src={"/image/icon_account.svg"}
            height={50}
            width={50}
            alt={"user_image"}
          />
          <StyledUserWrapper>
            <StyledUserName>{name}</StyledUserName>
            <StyledRankWrapper>
              <StyledUserRank>{rank} 등급</StyledUserRank>
              <StyledRankInfo>등급 혜택보기&gt;</StyledRankInfo>
            </StyledRankWrapper>
          </StyledUserWrapper>
        </StyledUserContainer>
        <StyledMileageConainer>
          <StyledMileageWrapper>
            <StyledMileageTitle>적립금</StyledMileageTitle>
            <StyledMileageContent>{mileage} P</StyledMileageContent>
            <StyledMileageClickHint>&gt;</StyledMileageClickHint>
          </StyledMileageWrapper>
          <StyledMileageWrapper>
            <StyledMileageTitle>쿠폰</StyledMileageTitle>
            <StyledMileageContent>{couponCount} 개</StyledMileageContent>
            <StyledMileageClickHint>&gt;</StyledMileageClickHint>
          </StyledMileageWrapper>
        </StyledMileageConainer>
        <StyledPurchaseContainer>
          <StyledPurchaseWrapper>
            <StyledPurchaseTitle>주문내역</StyledPurchaseTitle>
            <StyledPurchaseContent>{orderCount}</StyledPurchaseContent>
          </StyledPurchaseWrapper>
          <StyledPurchaseWrapper>
            <StyledPurchaseTitle>배송정보</StyledPurchaseTitle>
            <StyledPurchaseContent>{deliveryCount}</StyledPurchaseContent>
          </StyledPurchaseWrapper>
          <StyledPurchaseWrapper>
            <StyledPurchaseTitle>리뷰</StyledPurchaseTitle>
            <StyledPurchaseContent>{reviewCount}</StyledPurchaseContent>
          </StyledPurchaseWrapper>
        </StyledPurchaseContainer>
      </StyledLoginContainer>
    </>
  );
};

export default UserInfoContainer;

const StyledLoginContainer = styled.div`
  background-color: #ffffff;
  font-size: 1.5rem;
  padding: 0 1.8rem 1.8rem 2rem;
`;

const StyledUserContainer = styled.div`
  display: flex;
  padding: 5rem 0;
`;

const StyledUserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.2rem;
`;

const StyledUserName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const StyledRankWrapper = styled.div`
  display: flex;
`;
const StyledUserRank = styled.div`
  font-size: 1.2rem;
  margin-right: 1rem;
`;
const StyledRankInfo = styled.div`
  color: #aaaaaa;
  font-size: 1.2rem;
`;

const StyledMileageConainer = styled.div`
  display: flex;
`;

const StyledMileageWrapper = styled.div`
  position: relative;
  border: 0.1rem solid #dddddd;
  border-radius: 1.2rem;
  width: 100%;
  padding: 2rem;
  &:hover {
    cursor: pointer;
  }
  &:first-child {
    margin-right: 1.5rem;
  }
`;
const StyledMileageTitle = styled.h3`
  font-size: 1.5rem;
  color: #aaaaaa;
  margin-bottom: 2rem;
`;

const StyledMileageContent = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyledMileageClickHint = styled.div`
  position: absolute;
  color: #aaaaaa;
  bottom: 2rem;
  right: 1rem;
`;

const StyledPurchaseContainer = styled.div`
  display: flex;
  border: 0.1rem solid #dddddd;
  border-radius: 1.2rem;
  margin-top: 2rem;
`;
const StyledPurchaseWrapper = styled.div`
  width: 100%;
  border-right: 0.1rem solid #dddddd;
  padding: 2rem;
  &:last-child {
    border-right: 0;
  }
  &:hover {
    cursor: pointer;
  }
`;

const StyledPurchaseTitle = styled(StyledMileageTitle)`
  text-align: center;
`;

const StyledPurchaseContent = styled(StyledMileageContent)`
  text-align: center;
`;
