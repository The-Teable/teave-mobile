import styled from "styled-components";
import Link from "next/link";
import CenteredBox from "../common/CenteredBox";

const items = [
  { title: "메인", href: "/", selected: true },
  { title: "샵", href: "/", selected: false },
  { title: "테스트", href: "/test", selected: false },
  { title: "매거진", href: "/", selected: false },
];

const Header = () => {
  const isLogin = false;
  return (
    <>
      <S.Container>
        <S.TopWrapper>
          <Link href="/" passHref>
            <S.Logo />
          </Link>
          {!isLogin ? (
            <Link href="/" passHref>
              <S.LoginLogOutButton>로그인 / 회원가입</S.LoginLogOutButton>
            </Link>
          ) : (
              <Link href="/" passHref>
                <S.LoginLogOutButton>로그아웃</S.LoginLogOutButton>
              </Link>
            )}
        </S.TopWrapper>
        <S.NavWrapper>
          {items.map(({ title, href, selected }, i) => (
            <Link key={i} href={href} passHref>
              {selected ? (
                <S.Selected>
                  <S.NavItemTitle>{title}</S.NavItemTitle>
                </S.Selected>
              ) : (
                  <S.NavItemContainer>
                    <S.NavItemTitle>{title}</S.NavItemTitle>
                  </S.NavItemContainer>
                )}
            </Link>
          ))}
        </S.NavWrapper>
      </S.Container>
      <S.Padding />
    </>
  );
};

export default Header;

const S: any = {};

S.Container = styled(CenteredBox).attrs({ as: "header" })`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  z-index: 1;
  height: 9rem;
`;

S.TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
`;

S.NavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4rem;
  font-size: 1.4rem;
`;
S.Logo = styled.div`
  background: url("/image/logo_text.png") no-repeat center/contain;
  width: 6.3rem;
  height: 1.7rem;
  padding: 0 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

S.LoginLogOutButton = styled.button`
  background-color: #ffffff;
  border: 0;
  color: #424242;
  height: 2rem;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

S.NavItemContainer = styled.div`
  display: flex;
  align-items: center;
  height: 85%;
  &:hover {
    cursor: pointer;
  }
`;

S.Selected = styled(S.NavItemContainer)`
  border-bottom: solid #1a4c45 0.3rem;
`;

S.NavItemTitle = styled.span``;

S.Padding = styled.div`
  height: 9rem;
`;
