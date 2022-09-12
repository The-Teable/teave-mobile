import React, { useState, useEffect, RefObject, useRef } from "react";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";
import CenteredContainer from "./CenteredContainer";

type Props = {
  headerNavLinks: {
    title: string;
    href: string;
    ref: RefObject<HTMLDivElement>;
  }[];
};

const HeaderScroll = ({ headerNavLinks }: Props) => {
  const router = useRouter();
  const scrollYs = useRef<number[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const HEADER_MARGIN = 80;

  const listener = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  useEffect(() => {
    scrollYs.current = headerNavLinks.reduce<number[]>((acc, { ref }) => {
      return [...acc, ref.current?.offsetTop - HEADER_MARGIN || 0];
    }, []);
    scrollYs.current.push(999999);
    console.log(scrollYs.current);
  }, [headerNavLinks]);

  return (
    <>
      <S.NavWrapper>
        {headerNavLinks.map(({ title }, i) => (
          <div
            key={i}
            onClick={() => {
              window.scrollTo(0, scrollYs.current[i]);
            }}
          >
            <S.NavItemContainer
              isSelected={
                scrollYs.current[i] <= scrollY &&
                scrollY < scrollYs.current[i + 1]
              }
            >
              <span>{title}</span>
            </S.NavItemContainer>
          </div>
        ))}
      </S.NavWrapper>
    </>
  );
};

export default HeaderScroll;

const S: any = {};

S.NavWrapper = styled(CenteredContainer)`
  position: fixed;
  right: 0;
  top: 5rem;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3rem;
  font-size: 1.4rem;
  background-color: white;
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
