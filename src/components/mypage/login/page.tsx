import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Button from "../../common/Button";
import InputText from "../../common/InputText";
import Margin from "../../common/Margin";
import CenteredContainer from "../../common/CenteredContainer";
import useAuthQuery from "../../../services/hooks/useAuthQuery";

const LoginPage = () => {
  const router = useRouter();
  const { returnUrl }: any = router.query;
  const { login } = useAuthQuery();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const userid = e.target.userid.value;
    const password = e.target.password.value;
    login({ user_id: userid, password });
  };
  return (
    <CenteredContainer>
      <StyledContainer>
        <Link href={`/${returnUrl ? returnUrl : ""}`} passHref>
          <StyledExitIcon />
        </Link>
        <Margin size={9} />
        <StyledSNSContainer>
          <StyledSNSIcon url={"/image/icon_kakao.svg"} />
          <StyledSNSIcon url={"/image/icon_google.svg"} />
          <StyledSNSIcon url={"/image/icon_apple.svg"} />
        </StyledSNSContainer>
        <Margin size={5} />
        <StyledDivision />
        <Margin size={5} />
        <form onSubmit={handleSubmit}>
          <StyledInputText
            id={"userid"}
            placeholder={"아이디를 입력해주세요"}
            required
          />
          <Margin size={1} />
          <StyledInputText
            id={"password"}
            placeholder={"비밀번호를 입력해주세요"}
            type={"password"}
            required
          />
          <Margin size={1} />
          <div>
            <input type={"checkbox"} id={"autoLogin"} />
            <label htmlFor={"autoLogin"}>자동 로그인</label>
          </div>
          <Margin size={1} />
          <StyledButton>로그인</StyledButton>
        </form>
        <Margin size={2} />
        <StyledFindIDPWContainer>
          <Link href={"/mypage/find?target=id"} passHref>
            <span>아이디 찾기</span>
          </Link>
          {" | "}
          <Link href={"/mypage/find?target=pw"} passHref>
            <span>비밀번호 찾기</span>
          </Link>
        </StyledFindIDPWContainer>
        <Margin size={2} />
        <Link href="/mypage/signup">
          <StyledButton type={"submit"} reverse>
            회원가입
          </StyledButton>
        </Link>
      </StyledContainer>
    </CenteredContainer>
  );
};

export default LoginPage;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  padding: 4rem;
  margin: 0 auto;
`;

const StyledExitIcon = styled.div`
  background: url("/image/icon_exit.svg") no-repeat center/contain;
  width: 1.7rem;
  height: 1.7rem;
  &:hover {
    cursor: pointer;
  }
`;

const StyledSNSContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledSNSIcon = styled.div<{ url: string }>`
  background: url(${({ url }: { url: string }) => url}) no-repeat center/contain;
  width: 5rem;
  height: 5rem;
  &:hover {
    cursor: pointer;
  }
`;

const StyledDivision = styled.div`
  background: url("/image/icon_division.svg") no-repeat center/contain;
  width: 14.5rem;
  height: 2rem;
  margin: 0 auto;
`;

const StyledInputText = styled(InputText)``;

const StyledButton = styled(Button)``;

const StyledFindIDPWContainer = styled.div`
  margin: 0 auto;
  color: #b3b3b3;
  &:hover {
    cursor: pointer;
  }
`;
