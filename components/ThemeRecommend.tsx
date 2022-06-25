import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import CenteredContainer from "./common/CenteredContainer";

interface props {
  title: string;
  items: { url: string; href: string }[];
}

interface itemProps {
  url: string;
}

const Container = styled(CenteredContainer).attrs({ as: "section" })`
  margin: 4rem 0;
`;

const Title = styled.p`
  font-size: 1.4rem;
  padding: 1rem 0;
`;

const ItemsContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled.div<itemProps>`
  flex: none;
  background: url(${({ url }: itemProps) => url}) no-repeat center/cover;
  width: 14rem;
  height: 13rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  &:hover {
    cursor: pointer;
  }
  &:nth-child(1) {
    margin-left: 0;
  }
  &:nth-last-child(1) {
    margin-right: 0;
  }
  transform: translate(-${({ move }: itemProps) => move}%);
  transition: transform 1s;
`;

const ThemeRecommend = ({ title, items }: props) => {
  const [move, setMove] = useState(0);
  const next = () =>
    move < 500
      ? move === -600
        ? setMove(100)
        : setMove(move + 100)
      : setMove(-600);
  return (
    <Container>
      <Title>{title}</Title>
      <ItemsContainer onClick={next}>
        {items.map(({ url, href }, i) => (
          <Link key={i} href={href} passHref>
            <Item url={url} />
          </Link>
        ))}
      </ItemsContainer>
    </Container>
  );
};

export default ThemeRecommend;
