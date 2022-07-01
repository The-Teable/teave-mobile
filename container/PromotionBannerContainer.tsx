import { useEffect, useRef, useState } from "react";
import PromotionBanner from "../components/PromotionBanner";

const PromotionBannerContainer = ({ banners }: any) => {
  const [width, setWidth] = useState(0);
  const $bannerRef = useRef(null);
  useEffect(() => {
    console.log($bannerRef?.current?.clientWidth);
    setWidth($bannerRef?.current?.clientWidth);
  }, []);
  return (
    <PromotionBanner banners={banners} $bannerRef={$bannerRef} width={width} />
  );
};

export default PromotionBannerContainer;
