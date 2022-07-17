import styled from "styled-components";
import useSlider from "../../hooks/useSlider";

interface props {
  items: any;
  itemWidth: number;
}

const Slider = ({ items, itemWidth }: props) => {
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
    isDrag,
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
  top: 4.5rem;
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
    display: block;
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

S.PrevButton = styled(S.MoveButton)`
  background: url("/image/icon_go_prev.svg") no-repeat center/contain;
  left: 10px;
`;

S.NextButton = styled(S.MoveButton)`
  background: url("/image/icon_go_next.svg") no-repeat center/contain;
  right: 10px;
`;
