import Link from "next/link";
import TabBar from "../common/TabBar";
import styled from "styled-components";
import Button from "../common/Button";
import Margin from "../common/Margin";
import TitleHeader from "../common/TitleHeader";
import CenteredContainer from "../common/CenteredContainer";
import { storage } from "../../util/storage";
import useAuthQuery from "../../services/hooks/useAuthQuery";
import UserInfoContainer from "./components/UserInfoContainer";

const MyPage = () => {
  const isAuthorized = storage.get("ACCESS_TOKEN") ? true : false;
  const { logout } = useAuthQuery();

  return (
    <>
      <TitleHeader title={"마이페이지"} />
      <StyledContainer>
        {isAuthorized ? (
          <UserInfoContainer />
        ) : (
          <StyledNotLoginContainer>
            <Link href={"/mypage/login/?returnUrl=mypage"} passHref>
              <Button>로그인</Button>
            </Link>
            <Margin row size={6} />
            <Link href={"/mypage/signup"} passHref>
              <Button reverse>회원가입</Button>
            </Link>
          </StyledNotLoginContainer>
        )}
        <Margin size={1} />
        <StyledItem>배송지 관리</StyledItem>
        <StyledItem>개인정보 수정</StyledItem>
        <StyledItem>알림 설정</StyledItem>
        <Margin size={1} />
        <StyledItem>1:1 문의</StyledItem>
        <StyledItem>티브 소개</StyledItem>
        <StyledItem>배송 안내</StyledItem>
        <StyledItem>공지사항</StyledItem>
        <StyledItem>자주하는 질문</StyledItem>
        <StyledItem>고객센터 (앱 문의, 건의)</StyledItem>
        <StyledItem>이용안내</StyledItem>
        {isAuthorized && (
          <StyledItem onClick={() => logout()}>로그아웃</StyledItem>
        )}
      </StyledContainer>
      <TabBar />
    </>
  );
};

export default MyPage;

const StyledContainer = styled(CenteredContainer)`
  background: #f4f4f4;
  min-height: 92vh;
  padding: 0;
  font-size: 1.5rem;
`;

const StyledNotLoginContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  padding: 3.4rem;
`;

const StyledItem = styled.div`
  padding: 1.8rem;
  background-color: #ffffff;
  margin: 0.1rem;
  &:hover {
    cursor: pointer;
  }
`;
