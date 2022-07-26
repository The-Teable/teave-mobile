import { useEffect, useRef, useState, RefObject } from "react";

const useElementCurWidth = (): [number, RefObject<HTMLDivElement>] => {
  const [width, setWidth] = useState(0);
  const $element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setWidth($element.current!.clientWidth);
  }, []);
  return [width, $element];
};

export default useElementCurWidth;
