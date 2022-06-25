import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import CenteredContainer from "./common/CenteredContainer";

interface itemProps {
  url: string;
  move: number;
}

interface bannnerProps {
  banners: { url: string; href: string }[];
}

const Container = styled(CenteredContainer).attrs({ as: "section" })``;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  border-radius: 0.5rem;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled.div<itemProps>`
  flex: none;
  background: url(${({ url }: itemProps) => url}) no-repeat center/cover;
  width: 100%;
  height: 18rem;
  &:hover {
    cursor: pointer;
  }
  transform: translate(-${({ move }: itemProps) => move}%);
  transition: transform 1s;
`;

const PromotionBanner = ({ banners }: bannnerProps) => {
  const [move, setMove] = useState(0);
  const next = () =>
    move < 500
      ? move === -600
        ? setMove(100)
        : setMove(move + 100)
      : setMove(-600);
  return (
    <Container>
      <Wrapper>
        {banners.map(({ url, href }, i) => (
          <Link key={i} href={href} passHref>
            <Item url={url} onClick={next} move={move} />
          </Link>
        ))}
      </Wrapper>
    </Container>
  );
};

export default PromotionBanner;
