import Link from "next/link";
import styled from "styled-components";
import useElementCurWidth from "../hooks/useElementCurWidth";
import Slider from "./common/Slider";

interface Props {
  banners: { url: string; href: string }[];
}

const PromotionBanner = ({ banners }: Props) => {
  const [width, $bannerRef] = useElementCurWidth();
  return (
    <S.Container ref={$bannerRef}>
      <Slider itemWidth={width}>
        {banners.map(({ url, href }, i) => (
          <Link key={i} href={href} passHref>
            <S.Item url={url} />
          </Link>
        ))}
      </Slider>
    </S.Container>
  );
};

const S: any = {};

S.Container = styled.section``;

S.Item = styled.div<{ url: string }>`
  background: url(${({ url }: { url: string }) => url}) no-repeat center/cover;
  height: 18rem;
  flex-shrink: 0;
  width: 100%;
  border-radius: 0.55rem;
  &:hover {
    cursor: pointer;
  }
`;

export default PromotionBanner;
