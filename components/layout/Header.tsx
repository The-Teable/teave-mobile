import React from "react";
import styled from "styled-components";
import Link from "next/link";
import CenteredContainer from "./CenteredContainer";

export enum HeaderIndex {
  MAIN,
  SHOP,
  TEST,
  MAGAZINE
}

interface props {
  selectedIndex: HeaderIndex;
}

const items = [
  { title: "메인", href: "/" },
  { title: "샵", href: "/" },
  { title: "테스트", href: "/tea-test" },
  { title: "매거진", href: "/" }
];

const Header = ({ selectedIndex }: props) => {
  return (
    <>
      <S.Container>
        <S.TopWrapper>
          <Link href="/" passHref>
            <S.Logo />
          </Link>
        </S.TopWrapper>
        <S.NavWrapper>
          {items.map(({ title, href }, i) => (
            <Link key={i} href={href} passHref>
              {i === selectedIndex ? (
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

const S: any = {};

S.Container = styled(CenteredContainer).attrs({ as: "header" })`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  z-index: 1;
  height: 8rem;
  border-bottom: solid #eeeeee 0.1rem;
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
  height: 3rem;
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

S.NavItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.5rem;
  &:hover {
    cursor: pointer;
  }
`;

S.Selected = styled(S.NavItemContainer)`
  height: 3rem;
  box-sizing: border-box;
  border-bottom: solid #1a4c45 0.2rem;
`;

S.NavItemTitle = styled.span``;

S.Padding = styled.div`
  height: 9rem;
`;

export default Header;
