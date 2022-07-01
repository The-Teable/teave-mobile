import { useEffect, useRef, useState } from "react";
import Slider from "../../components/common/Slider";

const SliderContainer = ({ items, itemWidth }: any) => {
  const [moveWidth, setMoveWidth] = useState(0);
  const [prevDisable, setPrevDisable] = useState(false);
  const [nextDisable, setNextDisable] = useState(false);
  const $wrapperRef = useRef();
  const prevOnClick = () => {
    const moved = moveWidth - itemWidth;
    setMoveWidth(moved > 0 ? moved : 0);
  };
  const nextOnClick = () => {
    const totalWidth = $wrapperRef?.current?.scrollWidth;
    const viewWidth = $wrapperRef?.current?.clientWidth;
    const moved = moveWidth + itemWidth;
    if (viewWidth + moved < totalWidth) setMoveWidth(moved);
    else setMoveWidth(totalWidth - viewWidth);
  };

  useEffect(() => {
    const totalWidth = $wrapperRef?.current?.scrollWidth;
    const viewWidth = $wrapperRef?.current?.clientWidth;
    setPrevDisable(moveWidth <= 0);
    setNextDisable(moveWidth + viewWidth >= totalWidth);
  }, [moveWidth]);

  return (
    <Slider
      $wrapperRef={$wrapperRef}
      items={items}
      moveWidth={moveWidth}
      prevOnClick={prevOnClick}
      prevDisable={prevDisable}
      nextOnClick={nextOnClick}
      nextDisable={nextDisable}
    />
  );
};

export default SliderContainer;
