import { useState } from "react";
import styled from "styled-components";

interface itemProps {
  width: number;
  index: number;
}

const MoveButton = styled.button`
  display: none;
  position: absolute;
  z-index: 1;
  top: 30px;
  width: 30px;
  height: 100px;
`;

const Container = styled.div<itemProps>`
  position: relative;
  display: flex;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &:hover ${MoveButton} {
    display: block;
  }
  transform: translate(-${({ width, index }: any) => width * index}px);
  transition: transform 1s;
`;

const PrevButton = styled(MoveButton)`
  left: 10px;
`;

const NextButton = styled(MoveButton)`
  right: 10px;
`;

const Slider = ({ items, width }: any) => {
  const [index, setIndex] = useState(0);
  return (
    <Container width={width} index={index}>
      <PrevButton onClick={() => setIndex(index + 1)} />
      {items}
      <NextButton />
    </Container>
  );
};

export default Slider;
