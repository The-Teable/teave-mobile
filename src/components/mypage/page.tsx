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
  const isAuthorized = storage.get("ACCESS_TOKEN") ? false : true;
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
        <StyledItemWrapper>배송지 관리</StyledItemWrapper>
        <StyledItemWrapper>개인정보 수정</StyledItemWrapper>
        <StyledItemWrapper>알림 설정</StyledItemWrapper>
        <Margin size={1} />
        <StyledItemWrapper>1:1 문의</StyledItemWrapper>
        <StyledItemWrapper>티브 소개</StyledItemWrapper>
        <StyledItemWrapper>배송 안내</StyledItemWrapper>
        <StyledItemWrapper>공지사항</StyledItemWrapper>
        <StyledItemWrapper>자주하는 질문</StyledItemWrapper>
        <StyledItemWrapper>고객센터 (앱 문의, 건의)</StyledItemWrapper>
        <StyledItemWrapper>이용안내</StyledItemWrapper>
        {isAuthorized ? (
          <StyledItemWrapper onClick={logout}>로그아웃</StyledItemWrapper>
        ) : null}
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

const StyledItemWrapper = styled.div`
  padding: 1.8rem;
  background-color: #ffffff;
  margin: 0.1rem;
  &:hover {
    cursor: pointer;
  }
`;
