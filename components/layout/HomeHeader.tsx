import React from "react";
import styled from "styled-components";
import Link from "next/link";
import CenteredContainer from "./CenteredContainer";
import { color } from "../../styles/palette";
import HeaderTemplate from "./HeaderTemplate";

const items = [
  { title: "메인", href: "/home" },
  { title: "샵", href: "/home/shop" },
  { title: "테스트", href: "/home/tea-test" },
  { title: "매거진", href: "/home/magazine" }
];

const Header = () => {
  return (
    <>
      <S.Container>
        <S.TopWrapper>
          <Link href="/" passHref>
            <S.Logo />
          </Link>
        </S.TopWrapper>
        <HeaderTemplate headerNavLinks={items} />
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
  border-bottom: solid ${color.gray200} 0.1rem;
  background-color: #ffffff;
`;

S.TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
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

S.Padding = styled.div`
  height: 9rem;
`;

export default Header;
