import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import CenteredContainer from "./CenteredContainer";
import { color } from "../../styles/palette";
import { useRouter } from "next/router";

const items = [
  { title: "메인", href: "/home" },
  { title: "샵", href: "/shop" },
  { title: "테스트", href: "/tea-test" },
  { title: "매거진", href: "/magazine" },
];

const MainNavigator = () => {
  const router = useRouter();
  return (
    <>
      <StyledContainer>
        <StyledTopWrapper>
          <Link href="/" passHref>
            <StyledLogo />
          </Link>
        </StyledTopWrapper>
        <StyledNavWrapper>
          {items.map(({ title, href }) => (
            <Link key={href} href={href} passHref>
              <StyledNavItemContainer
                isSelected={router && router.pathname === href}
              >
                <span>{title}</span>
              </StyledNavItemContainer>
            </Link>
          ))}
        </StyledNavWrapper>
      </StyledContainer>
      <StyledPadding />
    </>
  );
};

export default MainNavigator;

const StyledContainer = styled(CenteredContainer).attrs({ as: "header" })`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  z-index: 1;
  height: 8rem;
  border-bottom: solid ${color.gray200} 0.1rem;
  background-color: #ffffff;
`;

const StyledTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
`;

const StyledLogo = styled.div`
  background: url("/image/logo_text.png") no-repeat center/contain;
  width: 6.3rem;
  height: 1.7rem;
  padding: 0 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const StyledPadding = styled.div`
  height: 9rem;
`;

const StyledNavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3rem;
  font-size: 1.4rem;
`;

const StyledNavItemContainer = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  &:hover {
    cursor: pointer;
  }
  ${({ isSelected }) =>
    !isSelected
      ? null
      : css`
          height: 3rem;
          box-sizing: border-box;
          border-bottom: solid #1a4c45 0.2rem;
        `}
`;
