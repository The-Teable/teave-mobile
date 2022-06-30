import Link from "next/link";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import CenteredContainer from "./common/CenteredContainer";
import Slider from "./common/Slider";

interface itemProps {
  url: string;
}

interface bannnerProps {
  banners: { url: string; href: string }[];
}

const Container = styled(CenteredContainer).attrs({ as: "section" })``;

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

const PromotionBanner = ({ banners }: bannnerProps) => {
  const [width, setWidth] = useState(0);
  const ref = useRef();
  useEffect(() => {
    setWidth(window.innerWidth < 768 ? window.innerWidth : 768);
    console.log(width);
  });
  return (
    <Container>
      <Wrapper
        ref={ref}
        moveWidth={width}
        items={banners.map(({ url, href }, i) => (
          <>
            <Link key={i} href={href} passHref>
              <Item url={url} />
            </Link>
          </>
        ))}
      ></Wrapper>
    </Container>
  );
};

export default PromotionBanner;
