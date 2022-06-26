import styled from "styled-components";
import Link from "next/link";
import CenteredContainer from "./common/CenteredContainer";

const Container = styled(CenteredContainer).attrs({ as: "header" })`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  z-index: 1;
  height: 9rem;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4rem;
  font-size: 1.4rem;
`;
const Logo = styled.div`
  background: url("/image/logo_text.png") no-repeat center/contain;
  width: 6.3rem;
  height: 1.7rem;
  padding: 0 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const LoginLogOutButton = styled.button`
  background-color: #ffffff;
  border: 0;
  color: #424242;
  height: 2rem;
  font-size: 1rem;
`;

const NavItemContainer = styled.div`
  display: flex;
  align-items: center;
  height: 85%;
`;

const Selected = styled(NavItemContainer)`
  border-bottom: solid #1a4c45 0.3rem;
`;

const NavItemTitle = styled.span``;

const Padding = styled.div`
  height: 9rem;
`;

const items = [
  { title: "메인", href: "/", selected: true },
  { title: "샵", href: "/", selected: false },
  { title: "테스트", href: "/", selected: false },
  { title: "매거진", href: "/", selected: false },
];

const Header = () => {
  const isLogin = false;
  return (
    <>
      <Container>
        <TopWrapper>
          <Link href="/" passHref>
            <Logo />
          </Link>
          {!isLogin ? (
            <Link href="/" passHref>
              <LoginLogOutButton>로그인 / 회원가입</LoginLogOutButton>
            </Link>
          ) : (
            <Link href="/" passHref>
              <LoginLogOutButton>로그아웃</LoginLogOutButton>
            </Link>
          )}
        </TopWrapper>
        <NavWrapper>
          {items.map(({ title, href, selected }, i) => (
            <Link key={i} href={href} passHref>
              {selected ? (
                <Selected>
                  <NavItemTitle>{title}</NavItemTitle>
                </Selected>
              ) : (
                <NavItemContainer>
                  <NavItemTitle>{title}</NavItemTitle>
                </NavItemContainer>
              )}
            </Link>
          ))}
        </NavWrapper>
      </Container>
      <Padding />
    </>
  );
};

export default Header;
