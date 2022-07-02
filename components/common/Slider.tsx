import styled from "styled-components";
import useSlider from "../../hooks/useSlider";

const Slider = ({ items, itemWidth }: any) => {
  const [
    $wrapperRef,
    moveWidth,
    prevDisable,
    nextDisable,
    prevOnClick,
    nextOnClick,
  ] = useSlider(itemWidth);
  return (
    <S.Container>
      <S.Wrapper ref={$wrapperRef} moveWidth={moveWidth}>
        {items.map((e: any) => e)}
      </S.Wrapper>
      <S.PrevButton onClick={prevOnClick} disabled={prevDisable} />
      <S.NextButton onClick={nextOnClick} disabled={nextDisable} />
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

S.Wrapper = styled.div<{ moveWidth: number }>`
  display: flex;
  transform: translate(-${({ moveWidth }) => moveWidth}px);
  transition: transform 0.5s;
`;

S.PrevButton = styled(S.MoveButton)`
  left: 10px;
`;

S.NextButton = styled(S.MoveButton)`
  right: 10px;
`;
