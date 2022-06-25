import Link from "next/link";
import styled from "styled-components";
import { CenteredContainer } from "../components/Layout";

const Container = styled(CenteredContainer)`
  padding: 6rem;
`;

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
`;

const Logo = styled.div`
  background: url("/image/logo_text.png") no-repeat center/contain;
  width: 7.6rem;
  height: 4.8rem;
  &:hover {
    cursor: pointer;
  }
`;

const Exit = styled.div`
  background: url("/image/icon_exit.svg") no-repeat center/contain;
  width: 1.75rem;
  height: 1.75rem;
  &:hover {
    cursor: pointer;
  }
`;

const BodyContainer = styled.div``;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 0;
  &:hover {
    cursor: pointer;
  }
`;

const MenuText = styled.p`
  font-size: 1.6rem;
`;

const MenuImg = styled.div`
  background: url("/image/icon_enter.svg") no-repeat center/contain;
  width: 1.25rem;
  height: 1.25rem;
  margin: 0.25rem;
`;

const Button = styled.div`
  border-radius: 0.8rem;
  padding: 1.5rem;
  text-align: center;
  font-size: 1.6rem;
  margin: 2.5rem 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonGreen = styled(Button)`
  background-color: #1d4a22;
  color: #ffffff;
`;

const ButtonWhite = styled(Button)`
  border: solid #e5e5e5 0.1rem;
`;

const Signup = styled(ButtonGreen)``;

const Login = styled(ButtonWhite)``;

const Logout = styled(ButtonGreen)``;

const menuList = [
  { text: "Shop", href: "/" },
  { text: "Story", href: "/" },
  { text: "Magazine", href: "/" },
  { text: "Support", href: "/" },
];

const Menu = () => {
  const isLogin = false;
  return (
    <Container>
      <HeadContainer>
        <Link href="/" passHref>
          <Logo />
        </Link>
        <Link href="/" passHref>
          <Exit />
        </Link>
      </HeadContainer>
      <BodyContainer>
        <>
          {menuList.map(({ text, href }, i) => (
            <Link key={i} href={href} passHref>
              <MenuWrapper>
                <MenuText>{text}</MenuText>
                <MenuImg />
              </MenuWrapper>
            </Link>
          ))}
        </>
        {!isLogin ? (
          <>
            <Signup>티브 가입하기</Signup>
            <Login>로그인</Login>
          </>
        ) : (
          <Logout>로그아웃</Logout>
        )}
      </BodyContainer>
    </Container>
  );
};

export default Menu;
