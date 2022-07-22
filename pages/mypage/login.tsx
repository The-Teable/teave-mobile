import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import styled from "styled-components";
import Button from "../../components/common/Button";
import InputText from "../../components/common/InputText";
import Margin from "../../components/common/Margin";
import CenteredContainer from "../../components/layout/CenteredContainer";
import AuthContext from "../../context/AuthContext";

const LoginPage = () => {
  const router = useRouter();
  const { returnUrl }: any = router.query;
  const { loginUser }: any = useContext(AuthContext);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const userid = e.target.userid.value;
    const password = e.target.password.value;
    loginUser(userid, password);
  };
  return (
    <CenteredContainer>
      <S.Container>
        <Link href={`/${returnUrl ? returnUrl : ""}`} passHref>
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
        <form onSubmit={handleSubmit}>
          <S.InputText
            id={"userid"}
            placeholder={"아이디를 입력해주세요"}
            required
          />
          <Margin size={1} />
          <S.InputText
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
          <S.Button>로그인</S.Button>
        </form>
        <Margin size={2} />
        <S.FindIDPWContainer>
          <Link href={"/mypage/find_id"} passHref>
            <span>아이디 찾기</span>
          </Link>
          {" | "}
          <Link href={"/mypage/find_pw"} passHref>
            <span>비밀번호 찾기</span>
          </Link>
        </S.FindIDPWContainer>
        <Margin size={2} />
        <Link href="/mypage/signup">
          <S.Button type={"submit"} reverse>
            회원가입
          </S.Button>
        </Link>
      </S.Container>
    </CenteredContainer>
  );
};

export default LoginPage;

const S: any = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  padding: 4rem;
  margin: 0 auto;
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

S.InputText = styled(InputText)``;

S.Button = styled(Button)``;

S.FindIDPWContainer = styled.div`
  margin: 0 auto;
  color: #b3b3b3;
  &:hover {
    cursor: pointer;
  }
`;
