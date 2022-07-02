import Link from "next/link";
import styled from "styled-components";
import usePromotionBanner from "../hooks/usePromotionBanner";
import CenteredBox from "./common/CenteredBox";
import Slider from "./common/Slider";

const PromotionBanner = ({ banners }: any) => {
  const [width, $bannerRef] = usePromotionBanner();
  return (
    <S.Container>
      <S.BoxSize ref={$bannerRef}>
        <S.Wrapper
          itemWidth={width}
          items={banners.map(({ url, href }: any, i: any) => (
            <>
              <Link key={i} href={href} passHref>
                <S.Item url={url} />
              </Link>
            </>
          ))}
        />
      </S.BoxSize>
    </S.Container>
  );
};

export default PromotionBanner;

const S: any = {};

S.Container = styled(CenteredBox).attrs({ as: "section" })``;

S.BoxSize = styled.div``;

S.Wrapper = styled(Slider)``;

S.Item = styled.div<{ url: string }>`
  background: url(${({ url }) => url}) no-repeat center/cover;
  height: 18rem;
  flex-shrink: 0;
  width: 100%;
  border-radius: 0.55rem;
  &:hover {
    cursor: pointer;
  }
`;
