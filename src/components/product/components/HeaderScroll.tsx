import React, { useState, useEffect, RefObject, useRef } from "react";
import styled, { css } from "styled-components";
import CenteredContainer from "../../common/CenteredContainer";

type Props = {
  headerNavLinks: {
    title: string;
    ref: RefObject<HTMLDivElement>;
  }[];
};

const HeaderScroll = ({ headerNavLinks }: Props) => {
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
      return [
        ...acc,
        (ref.current && ref.current.offsetTop - HEADER_MARGIN) || 0,
      ];
    }, []);
    scrollYs.current.push(999999);
  }, [headerNavLinks]);

  return (
    <>
      <StyledNavWrapper>
        {headerNavLinks.map(({ title }, i) => (
          <div
            key={i}
            onClick={() => {
              window.scrollTo(0, scrollYs.current[i]);
            }}
          >
            <StyledNavItemContainer
              isSelected={
                scrollYs.current[i] <= scrollY &&
                scrollY < scrollYs.current[i + 1]
              }
            >
              <span>{title}</span>
            </StyledNavItemContainer>
          </div>
        ))}
      </StyledNavWrapper>
    </>
  );
};

export default HeaderScroll;

const StyledNavWrapper = styled(CenteredContainer)`
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
