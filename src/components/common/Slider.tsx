import styled, { css } from "styled-components";
import useSlider from "../../hooks/useSlider";
import { ReactNode } from "react";
import Image from "next/image";

interface SliderProps {
  children: ReactNode;
  itemWidth: number;
}

/* 
  컴포넌트 사용 시
  children으로 받는 슬라이딩 될 각 요소에 원하는 width와 flex-shrink: 0을 넣어야 정상작동
 */

const Slider = ({ children, itemWidth }: SliderProps) => {
  const {
    $sliderRef,
    transitionX,
    prevDisable,
    nextDisable,
    onPrevClick,
    onNextClick,
    onDragStart,
    onDragMove,
    onDragEnd,
    isDragging,
  } = useSlider(itemWidth);
  return (
    <StyledContainer>
      <StyledWrapper
        ref={$sliderRef}
        onMouseDown={(e: any) => onDragStart(e)}
        onMouseMove={(e: any) => onDragMove(e)}
        onMouseUp={(e: any) => onDragEnd(e)}
        onMouseLeave={(e: any) => onDragEnd(e)}
        onTouchStart={(e: any) => onDragStart(e)}
        onTouchEnd={(e: any) => onDragEnd(e)}
        transitionX={transitionX}
        isDragging={isDragging}
      >
        {children}
      </StyledWrapper>
      <StyledPrevButton onClick={onPrevClick} disabled={prevDisable}>
        <Image src="/image/icon_go_prev.svg" alt="prev icon" layout="fill" />
      </StyledPrevButton>
      <StyledNextButton onClick={onNextClick} disabled={nextDisable}>
        <Image src="/image/icon_go_next.svg" alt="prev icon" layout="fill" />
      </StyledNextButton>
    </StyledContainer>
  );
};

export default Slider;

const StyledMoveButton = styled.button`
  opacity: 0;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 3rem;
  height: 8rem;
  border: 0px;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const StyledContainer = styled.div`
  position: relative;
  overflow-x: scroll;
  overflow-y: hidden;
  &:hover ${StyledMoveButton} {
    opacity: 1;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledWrapper = styled.div<{ transitionX: number; isDragging: boolean }>`
  display: flex;
  transform: translate(
    ${({ transitionX }: { transitionX: number }) => -transitionX}px
  );
  transition: transform
    ${({ isDragging }: { isDragging: boolean }) => (isDragging ? 0 : 0.5)}s;
  user-select: none;
`;

const StyledPrevButton = styled(StyledMoveButton)<{ disabled: boolean }>`
  left: 0.5rem;
  ${({ disabled }: { disabled: boolean }) =>
    disabled
      ? css`
          display: none;
        `
      : null}
`;

const StyledNextButton = styled(StyledMoveButton)<{ disabled: boolean }>`
  right: 0.5rem;
  ${({ disabled }: { disabled: boolean }) =>
    disabled
      ? css`
          display: none;
        `
      : null}
`;
