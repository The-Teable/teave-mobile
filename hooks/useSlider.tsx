import { useEffect, useRef, useState } from "react";

const useSlider = itemWidth => {
  const [moveWidth, setMoveWidth] = useState(0);
  const [prevDisable, setPrevDisable] = useState(false);
  const [nextDisable, setNextDisable] = useState(false);
  const $wrapperRef = useRef();
  const [startX, setStartX] = useState(0);
  const [isDrag, setIsDrag] = useState(false);

  const movePrev = (moved: any) => (moved > 0 ? moved : 0);

  const moveNext = (totalWidth, viewWidth, moved) =>
    viewWidth + moved < totalWidth ? moved : totalWidth - viewWidth;

  const isMovablePrev = moveWidth => moveWidth <= 0;

  const isMovableNext = (moveWidth, viewWidth, totalWidth) =>
    moveWidth + viewWidth >= totalWidth;

  // const onDragStart = e => {
  //   setIsDrag(true);
  //   setStartX(
  //     moveWidth + (isNaN(e.clientX) ? e.touches[0].clientX : e.clientX)
  //   );
  // };

  // const onDragMove = e => {
  //   if (isDrag) {
  //     setMoveWidth(
  //       startX - (isNaN(e.clientX) ? e.touches[0].clientX : e.clientX)
  //     );
  //   }
  // };

  const onDragStart = e => {
    setIsDrag(true);
    setStartX(moveWidth + e.clientX); // 움직인 누적 거리 + 마우스 X좌표
  };

  const onDragMove = e => {
    if (isDrag) {
      setMoveWidth(
        startX - e.clientX < 0
          ? -500 * Math.log(-0.001 * (startX - e.clientX - 1000))
          : startX - e.clientX
      );
    }
  };

  //500 * Math.log(-0.001 * (e.clientX - startX - 1000))

  const getClosestMoveWidth = (moveWidth, itemWidth, totalWidth, viewWidth) => {
    let unit = 0;
    if (moveWidth < 0) return 0;
    if (moveWidth > totalWidth - viewWidth) moveWidth = totalWidth - viewWidth;
    while (unit < moveWidth) unit += itemWidth;
    if (unit - moveWidth > itemWidth / 2) return unit - itemWidth;
    // 기준치 미달, 움직임 방지
    else return unit < totalWidth - viewWidth ? unit : totalWidth - viewWidth;
  };

  const onDragEnd = () => {
    console.log(moveWidth);
    if (isDrag) {
      setMoveWidth(
        getClosestMoveWidth(
          moveWidth,
          itemWidth,
          $wrapperRef?.current?.scrollWidth,
          $wrapperRef?.current?.clientWidth
        )
      );
    }
    setIsDrag(false);
  };

  const onPrevClick = () => setMoveWidth(movePrev(moveWidth - itemWidth));

  const onNextClick = () =>
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
    onPrevClick,
    onNextClick,
    onDragStart,
    onDragMove,
    onDragEnd,
    isDrag
  ];
};

export default useSlider;
