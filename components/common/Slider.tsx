import styled from "styled-components";
import useSlider from "../../hooks/useSlider";
import { useState, useRef } from "react";

const Slider = ({ items, itemWidth }: any) => {
  const [
    $wrapperRef,
    moveWidth,
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
        moveWidth={moveWidth}
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onTouchStart={onDragStart}
        onTouchEnd={onDragEnd}
        isDrag={isDrag}
      >
        {items.map((e: any) => e)}
      </S.Wrapper>
      <S.PrevButton onClick={onPrevClick} disabled={prevDisable} />
      <S.NextButton onClick={onNextClick} disabled={nextDisable} />
    </S.Container>
  );
};

export default Slider;

const S: any = {};

S.MoveButton = styled.button`
  display: none;
  position: absolute;
  top: 30px;
  width: 30px;
  height: 100px;
`;

S.Container = styled.div`
  position: relative;
  overflow: scroll;
  &:hover ${S.MoveButton} {
    display: block;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

S.Wrapper = styled.div<{ moveWidth: number; isDrag: boolean }>`
  display: flex;
  transform: translate(${({ moveWidth }) => -moveWidth}px);
  transition: transform ${({ isDrag }) => (isDrag ? 0 : 0.5)}s;
`;

S.PrevButton = styled(S.MoveButton)`
  left: 10px;
`;

S.NextButton = styled(S.MoveButton)`
  right: 10px;
`;
