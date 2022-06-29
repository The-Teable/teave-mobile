import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import CenteredContainer from "./common/CenteredContainer";
import Slider from "./common/Slider";

interface itemProps {
  url: string;
  width: number;
}

interface bannnerProps {
  banners: { url: string; href: string }[];
}

const Container = styled(CenteredContainer).attrs({ as: "section" })``;

const Wrapper = styled(Slider)``;

// overflow-x: scroll;
//   &::-webkit-scrollbar {
//     display: none;
//   }

const Item = styled.div<itemProps>`
  background: url(${({ url }: itemProps) => url}) no-repeat center/cover;
  width: ${({ width }: itemProps) => width}px;
  height: 18rem;
  border-radius: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const PromotionBanner = ({ banners }: bannnerProps) => {
  const width = window.innerWidth < 768 ? window.innerWidth : 768;
  console.log(width);
  return (
    <Container>
      <Wrapper
        moveWidth={width}
        items={banners.map(({ url, href }, i) => (
          <Link key={i} href={href} passHref>
            <Item url={url} width={width} />
          </Link>
        ))}
      ></Wrapper>
    </Container>
  );
};

export default PromotionBanner;
