import { useEffect, useRef, useState } from "react";

const usePromotionBanner = () => {
  const [width, setWidth] = useState(0);
  const $bannerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setWidth($bannerRef.current!.clientWidth);
  }, []);
  return [width, $bannerRef];
};

export default usePromotionBanner;
