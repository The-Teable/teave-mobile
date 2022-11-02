import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import useElementCurWidth from "../../../hooks/useElementCurWidth";
import Slider from "../../common/Slider";

interface Props {
  banners: { url: string; href: string }[];
}

const PromotionBanner = ({ banners }: Props) => {
  const [width, $bannerRef] = useElementCurWidth();
  return (
    <StyledContainer ref={$bannerRef}>
      <Slider itemWidth={width}>
        {banners.map(({ url, href }, i) => (
          <Link key={i} href={href} passHref>
            <StyledItem>
              <Image
                src={url}
                layout="fill"
                objectFit="cover"
                alt="promotion banner"
              />
            </StyledItem>
          </Link>
        ))}
      </Slider>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  border-radius: 0.55rem;
  overflow: hidden;
`;

const StyledItem = styled.div`
  position: relative;
  height: 18rem;
  flex-shrink: 0;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

export default PromotionBanner;
