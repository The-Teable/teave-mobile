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
  const temp = useRef();
  const totalWidth = temp?.current?.scrollWidth;
  // useEffect(() => {
  //   setWindowWidth(window.getComputedStyle())
  // }, []);
  return (
    <Container>
      <Wrapper ref={temp} moveWidth={moveWidth}>
        {items.map((e: any) => e)}
      </Wrapper>
      <PrevButton
        onClick={
          () => {
            // console.log(temp?.current?.clientWidth);
            // console.log(temp?.current?.scrollWidth);
          }
          // index > 0 ? setIndex(index - 1) : setIndex(items.length - 1)
        }
      />
      <NextButton
        onClick={() => {
          setMoveWidth();
          setIndex(index < items.length - 1 ? index + 1 : 0);
        }}
      />
    </Container>
  );
};

export default Slider;
