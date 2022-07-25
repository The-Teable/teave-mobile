import Link from "next/link";
import { useContext } from "react";
import TabBar from "../../components/layout/TabBar";
import AuthContext from "../../context/AuthContext";
import styled from "styled-components";
import Button from "../../components/common/Button";
import Margin from "../../components/common/Margin";
import TitleHeader from "../../components/common/TitleHeader";
import CenteredContainer from "../../components/layout/CenteredContainer";

const MyPage = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <>
      <TitleHeader title={"마이페이지"} />
      <S.Container>
        {user ? (
          <S.LoginContainer>
            <S.UserContainer>
              <S.UserImage url={"/image/icon_account.svg"} />
              <Margin row size={1.2} />
              <S.UserWrapper>
                <S.UserName>김티브님</S.UserName>
                <Margin size={1} />
                <S.RankWrapper>
                  <S.UserRank>녹차 등급</S.UserRank>
                  <Margin row size={1} />
                  <S.RankInfo>등급 혜택보기&gt;</S.RankInfo>
                </S.RankWrapper>
              </S.UserWrapper>
            </S.UserContainer>
            <S.MileageConainer>
              <S.MileageWrapper>
                <S.MileageTitle>적립금</S.MileageTitle>
                <S.MileageContent>500 P</S.MileageContent>
                <S.MileageClickHint>&gt;</S.MileageClickHint>
              </S.MileageWrapper>
              <Margin row size={5} />
              <S.MileageWrapper>
                <S.MileageTitle>쿠폰</S.MileageTitle>
                <S.MileageContent>5 개</S.MileageContent>
                <S.MileageClickHint>&gt;</S.MileageClickHint>
              </S.MileageWrapper>
            </S.MileageConainer>
            <Margin size={2} />
            <S.PurchaseContainer>
              <S.PurchaseWrapper>
                <S.PurchaseTitle>주문내역</S.PurchaseTitle>
                <S.PurchaseContent>0</S.PurchaseContent>
              </S.PurchaseWrapper>
              <S.PurchaseWrapper>
                <S.PurchaseTitle>배송정보</S.PurchaseTitle>
                <S.PurchaseContent>0</S.PurchaseContent>
              </S.PurchaseWrapper>
              <S.PurchaseWrapper>
                <S.PurchaseTitle>리뷰</S.PurchaseTitle>
                <S.PurchaseContent>0</S.PurchaseContent>
              </S.PurchaseWrapper>
            </S.PurchaseContainer>
            <Margin size={2} />
          </S.LoginContainer>
        ) : (
          <S.NotLoginContainer>
            <Link href={"/mypage/login/?returnUrl=mypage"} passHref>
              <S.Button>로그인</S.Button>
            </Link>
            <Margin row size={6} />
            <Link href={"/mypage/signup"} passHref>
              <S.Button reverse>회원가입</S.Button>
            </Link>
          </S.NotLoginContainer>
        )}
        <Margin size={1} />
        <S.ItemWrapper>배송지 관리</S.ItemWrapper>
        <S.ItemWrapper>개인정보 수정</S.ItemWrapper>
        <S.ItemWrapper>알림 설정</S.ItemWrapper>
        <Margin size={1} />
        <S.ItemWrapper>1:1 문의</S.ItemWrapper>
        <S.ItemWrapper>티브 소개</S.ItemWrapper>
        <S.ItemWrapper>배송 안내</S.ItemWrapper>
        <S.ItemWrapper>공지사항</S.ItemWrapper>
        <S.ItemWrapper>자주하는 질문</S.ItemWrapper>
        <S.ItemWrapper>고객센터(앱 문의,건의)</S.ItemWrapper>
        <S.ItemWrapper>이용안내</S.ItemWrapper>
        {user ? (
          <S.ItemWrapper onClick={logoutUser}>로그아웃</S.ItemWrapper>
        ) : null}
      </S.Container>
      <TabBar />
    </>
  );
};

export default MyPage;

const S: any = {};

S.Container = styled(CenteredContainer)`
  background: #f4f4f4;
  min-height: 92vh;
  padding: 0;
  font-size: 1.5rem;
`;

S.LoginContainer = styled.div`
  background-color: #ffffff;
  font-size: 1.5rem;
  padding: 0 1.8rem;
`;

S.UserContainer = styled.div`
  display: flex;
  padding: 5rem 0;
`;
S.UserImage = styled.div<{ url: string }>`
  background: url(${({ url }: { url: string }) => url}) no-repeat center/contain;
  width: 5rem;
  height: 5rem;
`;

S.UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

S.UserName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

S.RankWrapper = styled.div`
  display: flex;
`;
S.UserRank = styled.div`
  font-size: 1.2rem;
`;
S.RankInfo = styled.div`
  color: #aaaaaa;
  font-size: 1.2rem;
`;

S.MileageConainer = styled.div`
  display: flex;
`;

S.MileageWrapper = styled.div`
  position: relative;
  border: 0.1rem solid #dddddd;
  border-radius: 1.2rem;
  width: 100%;
  padding: 2rem;
  &:hover {
    cursor: pointer;
  }
`;
S.MileageTitle = styled.h3`
  font-size: 1.5rem;
  color: #aaaaaa;
  margin-bottom: 2rem;
`;

S.MileageContent = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

S.MileageClickHint = styled.div`
  position: absolute;
  color: #aaaaaa;
  bottom: 2rem;
  right: 1rem;
`;

S.PurchaseContainer = styled.div`
  display: flex;
  border: 0.1rem solid #dddddd;
  border-radius: 1.2rem;
`;
S.PurchaseWrapper = styled.div`
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

S.PurchaseTitle = styled(S.MileageTitle)`
  text-align: center;
`;

S.PurchaseContent = styled(S.MileageContent)`
  text-align: center;
`;

S.NotLoginContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  padding: 3.4rem;
`;

S.ItemWrapper = styled.div`
  padding: 1.8rem;
  background-color: #ffffff;
  margin: 0.1rem;
  &:hover {
    cursor: pointer;
  }
`;

S.Button = styled(Button)``;
