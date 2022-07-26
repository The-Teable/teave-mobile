import styled, { css } from "styled-components";
import useSlider from "../../hooks/useSlider";
import { ReactNode } from "react";

interface SliderProps {
  children: ReactNode;
  itemWidth: number;
}

/* 
  컴포넌트 사용 시
  children으로 받는 슬라이딩 될 각 요소에 원하는 width와 flex-shrink: 0을 넣어야 정상작동
 */

const Slider = ({ children, itemWidth }: SliderProps) => {
  const [
    $wrapperRef,
    transitionX,
    prevDisable,
    nextDisable,
    onPrevClick,
    onNextClick,
    onDragStart,
    onDragMove,
    onDragEnd,
    isDrag
  ] = useSlider(itemWidth);

  return (
    <S.Container>
      <S.Wrapper
        ref={$wrapperRef}
        transitionX={transitionX}
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onTouchStart={onDragStart}
        onTouchEnd={onDragEnd}
        isDrag={isDrag}
      >
        {children}
      </S.Wrapper>
      <S.PrevButton onClick={onPrevClick} disabled={prevDisable} />
      <S.NextButton onClick={onNextClick} disabled={nextDisable} />
    </S.Container>
  );
};

export default Slider;

const S: any = {};

S.MoveButton = styled.button`
  opacity: 0;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 3rem;
  height: 8rem;
  border: 0px;
  &:hover {
    cursor: pointer;
  }
`;

S.Container = styled.div`
  position: relative;
  overflow-x: scroll;
  overflow-y: hidden;
  &:hover ${S.MoveButton} {
    opacity: 1;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

S.Wrapper = styled.div<{ transitionX: number; isDrag: boolean }>`
  display: flex;
  transform: translate(
    ${({ transitionX }: { transitionX: number }) => -transitionX}px
  );
  transition: transform
    ${({ isDrag }: { isDrag: boolean }) => (isDrag ? 0 : 0.5)}s;
  user-select: none;
`;

S.PrevButton = styled(S.MoveButton)<{ disabled: boolean }>`
  background: url("/image/icon_go_prev.svg") no-repeat center/contain;
  left: 0.5rem;
  ${({ disabled }: { disabled: boolean }) =>
    disabled
      ? css`
          display: none;
        `
      : null}
`;

S.NextButton = styled(S.MoveButton)<{ disabled: boolean }>`
  background: url("/image/icon_go_next.svg") no-repeat center/contain;
  right: 0.5rem;
  ${({ disabled }: { disabled: boolean }) =>
    disabled
      ? css`
          display: none;
        `
      : null}
`;
