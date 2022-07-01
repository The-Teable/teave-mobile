import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface itemProps {
  moveWidth: number;
  ref: any;
}

const MoveButton = styled.button`
  display: none;
  position: absolute;
  top: 30px;
  width: 30px;
  height: 100px;
`;

const Container = styled.div`
  position: relative;
  overflow: scroll;
  &:hover ${MoveButton} {
    display: block;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper = styled.div<itemProps>`
  display: flex;
  transform: translate(-${({ moveWidth }: any) => moveWidth}px);
  transition: transform 0.5s;
`;

const PrevButton = styled(MoveButton)`
  left: 10px;
`;

const NextButton = styled(MoveButton)`
  right: 10px;
`;

const Slider = ({ items, itemWidth }: any) => {
  const [index, setIndex] = useState(0);
  const [moveWidth, setMoveWidth] = useState(0);
  const [prevBtnDisable, setPrevBtnDisable] = useState(false);
  const [nextBtnDisable, setNextBtnDisable] = useState(false);
  const temp = useRef();

  useEffect(() => {
    const totalWidth = temp?.current?.scrollWidth;
    const viewWidth = temp?.current?.clientWidth;
    setPrevBtnDisable(moveWidth <= 0);
    setNextBtnDisable(moveWidth + viewWidth >= totalWidth);
  }, [moveWidth]);

  return (
    <Container>
      <Wrapper ref={temp} moveWidth={moveWidth}>
        {items.map((e: any) => e)}
      </Wrapper>
      <PrevButton
        onClick={() => {
          const moved = moveWidth - itemWidth;
          if (moved > 0) setMoveWidth(moved);
          else setMoveWidth(0);
        }}
        disabled={prevBtnDisable}
      />
      <NextButton
        onClick={() => {
          const totalWidth = temp?.current?.scrollWidth;
          const viewWidth = temp?.current?.clientWidth;
          const moved = moveWidth + itemWidth;
          console.log(totalWidth, viewWidth, moved);
          if (viewWidth + moved < totalWidth) setMoveWidth(moved);
          else setMoveWidth(totalWidth - viewWidth);
        }}
        disabled={nextBtnDisable}
      />
    </Container>
  );
};

export default Slider;
