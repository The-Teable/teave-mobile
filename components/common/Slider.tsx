import { useState } from "react";
import styled from "styled-components";

interface itemProps {
  moveWidth: number;
  index: number;
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
  overflow: hidden;
  &:hover ${MoveButton} {
    display: block;
  }
`;

const Wrapper = styled.div<itemProps>`
  display: flex;
  &::-webkit-scrollbar {
    display: none;
  }
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
  return (
    <Container>
      <Wrapper moveWidth={moveWidth} index={index}>
        {items.map((e: any) => e)}
      </Wrapper>
      <PrevButton
        onClick={() =>
          index > 0 ? setIndex(index - 1) : setIndex(items.length - 1)
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
