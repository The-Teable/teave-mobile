import { useEffect, useRef, useState } from "react";

const useSlider = (itemWidth) => {
  const [moveWidth, setMoveWidth] = useState(0);
  const [prevDisable, setPrevDisable] = useState(false);
  const [nextDisable, setNextDisable] = useState(false);
  const $wrapperRef = useRef();

  const movePrev = (moved: any) => (moved > 0 ? moved : 0);

  const moveNext = (totalWidth, viewWidth, moved) =>
    viewWidth + moved < totalWidth ? moved : totalWidth - viewWidth;

  const isMovablePrev = (moveWidth) => moveWidth <= 0;

  const isMovableNext = (moveWidth, viewWidth, totalWidth) =>
    moveWidth + viewWidth >= totalWidth;

  const prevOnClick = () => setMoveWidth(movePrev(moveWidth - itemWidth));

  const nextOnClick = () =>
    setMoveWidth(
      moveNext(
        $wrapperRef?.current?.scrollWidth,
        $wrapperRef?.current?.clientWidth,
        moveWidth + itemWidth
      )
    );

  useEffect(() => {
    setPrevDisable(isMovablePrev(moveWidth));
    setNextDisable(
      isMovableNext(
        moveWidth,
        $wrapperRef?.current?.clientWidth,
        $wrapperRef?.current?.scrollWidth
      )
    );
  }, [moveWidth]);
  return [
    $wrapperRef,
    moveWidth,
    prevDisable,
    nextDisable,
    prevOnClick,
    nextOnClick,
  ];
};

export default useSlider;
