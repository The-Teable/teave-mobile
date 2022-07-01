import Link from "next/link";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import CenteredContainer from "./common/CenteredContainer";
import SliderContainer from "../container/common/SliderContainer";

interface itemProps {
  url: string;
}

interface bannnerProps {
  banners: { url: string; href: string }[];
}

const Container = styled(CenteredContainer).attrs({ as: "section" })``;

const BoxSize = styled.div``;

const Wrapper = styled(SliderContainer)``;

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

const PromotionBanner = ({ banners }: bannnerProps) => {
  const [width, setWidth] = useState(0);
  const $banner = useRef(null);
  useEffect(() => {
    console.log($banner?.current?.clientWidth);
    setWidth($banner?.current?.clientWidth);
  }, []);
  return (
    <Container>
      <BoxSize ref={$banner}>
        <Wrapper
          itemWidth={width}
          items={banners.map(({ url, href }, i) => (
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
