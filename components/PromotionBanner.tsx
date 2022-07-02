import Link from "next/link";
import styled from "styled-components";
import usePromotionBanner from "../hooks/usePromotionBanner";
import CenteredBox from "./common/CenteredBox";
import Slider from "./common/Slider";

interface itemProps {
  url: string;
}

const Container = styled(CenteredBox).attrs({ as: "section" })``;

const BoxSize = styled.div``;

const Wrapper = styled(Slider)``;

const Item = styled.div<itemProps>`
  background: url(${({ url }: itemProps) => url}) no-repeat center/cover;
  height: 18rem;
  flex-shrink: 0;
  width: 100%;
  border-radius: 0.55rem;
  &:hover {
    cursor: pointer;
  }
`;

const PromotionBanner = ({ banners }: any) => {
  const [width, $bannerRef] = usePromotionBanner();
  return (
    <Container>
      <BoxSize ref={$bannerRef}>
        <Wrapper
          itemWidth={width}
          items={banners.map(({ url, href }: any, i: any) => (
            <>
              <Link key={i} href={href} passHref>
                <Item url={url} />
              </Link>
            </>
          ))}
        />
      </BoxSize>
    </Container>
  );
};

export default PromotionBanner;
