import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  headerNavLinks: {
    title: string;
    href: string;
  }[];
};

const HeaderTemplate = ({ headerNavLinks }: Props) => {
  const router = useRouter();

  return (
    <>
      <S.NavWrapper>
        {headerNavLinks.map(({ title, href }) => (
          <Link key={href} href={href} passHref>
            <S.NavItemContainer isSelected={router.pathname === href}>
              <span>{title}</span>
            </S.NavItemContainer>
          </Link>
        ))}
      </S.NavWrapper>
    </>
  );
};

export default HeaderTemplate;

const S: any = {};

S.NavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3rem;
  font-size: 1.4rem;
`;

S.NavItemContainer = styled.div<{ isSelected: boolean }>`
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
