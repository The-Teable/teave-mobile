import styled from "styled-components";

interface itemProps {
  moveWidth: number;
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

const Slider = ({
  items,
  moveWidth,
  prevOnClick,
  nextOnClick,
  prevDisable,
  nextDisable,
  $wrapperRef,
}: any) => {
  return (
    <Container>
      <Wrapper ref={$wrapperRef} moveWidth={moveWidth}>
        {items.map((e: any) => e)}
      </Wrapper>
      <PrevButton onClick={prevOnClick} disabled={prevDisable} />
      <NextButton onClick={nextOnClick} disabled={nextDisable} />
    </Container>
  );
};

export default Slider;
