import Link from "next/link";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import Margin from "../../components/common/Margin";
import CenteredContainer from "../../components/layout/CenteredContainer";

const LoginPage = () => {
  const router = useRouter();
  const { returnUrl }: any = router.query;
  return (
    <CenteredContainer>
      <S.Container>
        <Link href={"/" + returnUrl} passHref>
          <S.ExitIcon />
        </Link>
        <Margin size={9} />
        <S.SNSContainer>
          <S.SNSIcon url={"/image/icon_kakao.svg"} />
          <S.SNSIcon url={"/image/icon_google.svg"} />
          <S.SNSIcon url={"/image/icon_apple.svg"} />
        </S.SNSContainer>
        <Margin size={5} />
        <S.Division />
        <Margin size={5} />
        <S.Input placeholder={"아이디를 입력해주세요"} />
        <Margin size={1} />
        <S.Input placeholder={"비밀번호를 입력해주세요"} type={"password"} />
        <Margin size={1} />
        <div>
          <input type={"checkbox"} id={"autoLogin"} />
          <label htmlFor={"autoLogin"}>자동 로그인</label>
        </div>
        <Margin size={1} />
        <S.Button>로그인</S.Button>
        <Margin size={2} />
        <S.FindIDPWContainer>
          <Link href={"/"} passHref>
            <span>아이디 찾기</span>
          </Link>
          {" | "}
          <Link href={"/"} passHref>
            <span>비밀번호 찾기</span>
          </Link>
        </S.FindIDPWContainer>
        <Margin size={2} />
        <S.Button reverse>회원가입</S.Button>
      </S.Container>
    </CenteredContainer>
  );
};

export default LoginPage;

const S: any = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem;
`;

S.ExitIcon = styled.div`
  background: url("/image/icon_exit.svg") no-repeat center/contain;
  width: 1.7rem;
  height: 1.7rem;
  &:hover {
    cursor: pointer;
  }
`;

S.SNSContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

S.SNSIcon = styled.div<{ url: string }>`
  background: url(${({ url }: { url: string }) => url}) no-repeat center/contain;
  width: 5rem;
  height: 5rem;
  &:hover {
    cursor: pointer;
  }
`;

S.Division = styled.div`
  background: url("/image/icon_division.svg") no-repeat center/contain;
  width: 14.5rem;
  height: 2rem;
  margin: 0 auto;
`;

S.Input = styled.input`
  border: 1px solid #b3b3b3;
  border-radius: 3rem;
  &:focus {
    border: 1px solid #000000;
  }
  box-sizing: border-box;
  height: 4rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
`;

S.Button = styled.button<{ reverse: boolean }>`
  border: 0px;
  height: 4rem;
  padding: 1rem;
  border-radius: 3rem;
  font-size: 1.1rem;
  ${({ reverse }: any) =>
    reverse
      ? css`
          border: 1px solid #104315;
          color: #104315;
        `
      : css`
          background-color: #104315;
          color: #ffffff;
        `}
`;

S.FindIDPWContainer = styled.div`
  margin: 0 auto;
  color: #b3b3b3;
`;
