import { useEffect, useRef, useState, MouseEvent } from "react";

const useSlider = (itemWidth: number) => {
  const $sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [originClientX, setOriginClientX] = useState(0);
  const [originTransitionX, setOriginTransitionX] = useState(0);
  const [transitionX, setTransitionX] = useState(0);
  const [prevDisable, setPrevDisable] = useState(false);
  const [nextDisable, setNextDisable] = useState(false);

  const onDragStart = (e: MouseEvent<Element, MouseEvent>) => {
    setIsDragging(true);
    setOriginClientX(e.clientX);
    setOriginTransitionX(transitionX);
  };

  const onDragMove = (e: MouseEvent<Element, MouseEvent>) => {
    if (isDragging) {
      setTransitionX(
        dragBoundary(
          originTransitionX,
          $sliderRef.current!.scrollWidth - $sliderRef.current!.clientWidth,
          originClientX - e.clientX
        )
      );
    }
  };

  const onDragEnd = (e: MouseEvent<Element, MouseEvent>) => {
    if (isDragging) {
      setTransitionX(
        getFitTransitionX(
          transitionX,
          itemWidth,
          $sliderRef.current!.scrollWidth - $sliderRef.current!.clientWidth,
          originClientX - e.clientX
        )
      );
      setIsDragging(false);
    }
  };

  const onPrevClick = () =>
    setTransitionX(
      getFitTransitionX(
        transitionX - itemWidth,
        itemWidth,
        $sliderRef.current!.scrollWidth - $sliderRef.current!.clientWidth,
        -itemWidth
      )
    );

  const onNextClick = () =>
    setTransitionX(
      getFitTransitionX(
        transitionX + itemWidth,
        itemWidth,
        $sliderRef.current!.scrollWidth - $sliderRef.current!.clientWidth,
        itemWidth
      )
    );

  const checkPrevMove = (width: number) => width > 0;

  const checkNextMove = (width: number, maxTransition: number) =>
    width < maxTransition;

  const dragBoundary = (
    originTransitionX: number,
    maxTransitionX: number,
    movedDistance: number
  ) => {
    return originTransitionX + movedDistance < 0
      ? movedDistance / 3
      : originTransitionX + movedDistance > maxTransitionX + movedDistance / 3
      ? maxTransitionX + movedDistance / 3
      : originTransitionX + movedDistance;
  };

  const getFitTransitionX = (
    transitionX: number,
    itemWidth: number,
    maxTransitionX: number,
    movedDistance: number
  ) => {
    if (transitionX <= 0) return 0;
    if (transitionX >= maxTransitionX) return maxTransitionX;
    if (movedDistance > (itemWidth > 400 ? 100 : itemWidth / 4))
      return itemWidth * Math.ceil(transitionX / itemWidth);
    if (movedDistance < -(itemWidth > 400 ? 100 : itemWidth / 4))
      return itemWidth * Math.floor(transitionX / itemWidth);
    return transitionX - movedDistance;
  };

  useEffect(() => {
    setPrevDisable(!checkPrevMove(transitionX));
    setNextDisable(
      !checkNextMove(
        transitionX,
        $sliderRef.current!.scrollWidth - $sliderRef.current!.clientWidth
      )
    );
  }, [transitionX]);
  return {
    $sliderRef,
    transitionX,
    prevDisable,
    nextDisable,
    onPrevClick,
    onNextClick,
    onDragStart,
    onDragMove,
    onDragEnd,
    isDragging,
  };
};

export default useSlider;
