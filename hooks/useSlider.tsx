import { useEffect, useRef, useState } from "react";

const useSlider = (itemWidth: number) => {
  const $sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [originClientX, setOriginClientX] = useState(0);
  const [originTransitionX, setOriginTransitionX] = useState(0);
  const [transitionX, setTransitionX] = useState(0);
  const [prevDisable, setPrevDisable] = useState(false);
  const [nextDisable, setNextDisable] = useState(false);

  const onDragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    setOriginClientX(e.clientX);
    setOriginTransitionX(transitionX);
  };

  const onDragMove = (e: React.MouseEvent) => {
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

  const onDragEnd = (e: React.MouseEvent) => {
    if (isDragging) {
      setTransitionX(
        getFitTransitionX(
          transitionX,
          itemWidth,
          $sliderRef.current!.scrollWidth - $sliderRef.current!.clientWidth,
          e.clientX
        )
      );
      setIsDragging(false);
    }
  };

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
    lastClientX: number
  ) => {
    if (transitionX <= 0) return 0;
    if (transitionX >= maxTransitionX) return maxTransitionX;
    if (originClientX - lastClientX > (itemWidth > 400 ? 100 : itemWidth / 4))
      return itemWidth * Math.ceil(transitionX / itemWidth);
    if (originClientX - lastClientX < -(itemWidth > 400 ? 100 : itemWidth / 4))
      return itemWidth * Math.floor(transitionX / itemWidth);
    return originTransitionX;
  };

  const onPrevClick = () => setTransitionX(transitionX - itemWidth);

  const onNextClick = () => setTransitionX(transitionX + itemWidth);

  const checkPrevMove = (width: number) => width > 0;

  const checkNextMove = (width: number, maxTransition: number) =>
    width < maxTransition;

  useEffect(() => {
    setPrevDisable(!checkPrevMove(transitionX));
    setNextDisable(
      !checkNextMove(
        transitionX,
        $sliderRef.current!.scrollWidth - $sliderRef.current!.clientWidth
      )
    );
  }, [transitionX]);
  return [
    $sliderRef,
    transitionX,
    prevDisable,
    nextDisable,
    onPrevClick,
    onNextClick,
    onDragStart,
    onDragMove,
    onDragEnd,
    isDragging
  ];
};

export default useSlider;
