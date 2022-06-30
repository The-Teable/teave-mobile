import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface itemProps {
  moveWidth: number;
  index: number;
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
  transform: translate(-${({ moveWidth, index }: any) => moveWidth * index}px);
  transition: transform 0.5s;
`;

const PrevButton = styled(MoveButton)`
  left: 10px;
`;

const NextButton = styled(MoveButton)`
  right: 10px;
`;

const Slider = ({ items, moveWidth }: any) => {
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const temp = useRef();
  const scroll = (scrollOffset: any) => {
    temp.current.scrollLeft += scrollOffset;
  };
  useEffect(() => {
    // setWindowWidth(window.getComputedStyle())
  }, []);
  return (
    <Container>
      <Wrapper ref={temp} moveWidth={moveWidth} index={index}>
        {items.map((e: any) => e)}
      </Wrapper>
      <PrevButton
        onClick={
          () => {
            // console.log(temp?.current?.clientWidth);
            // console.log(temp?.current?.scrollWidth);
            // console.log(temp?.current?.scrollLeft);
            scroll(150);
          }
          // index > 0 ? setIndex(index - 1) : setIndex(items.length - 1)
        }
      />
      <NextButton
        onClick={() =>
          index < items.length - 1 ? setIndex(index + 1) : setIndex(0)
        }
      />
    </Container>
  );
};

export default Slider;
