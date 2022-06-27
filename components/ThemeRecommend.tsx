import styled from "styled-components";
import Link from "next/link";
import { useState, useCallback } from "react";
import CenteredContainer from "./common/CenteredContainer";

interface props {
  title: string;
  items: {
    id: number;
    url: string;
    href: string;
    brand: string;
    name: string;
    price: number;
  }[];
}

interface itemProps {
  move: number;
}

interface itemThumbProps {
  url: string;
}

const Container = styled(CenteredContainer).attrs({ as: "section" })``;

const Title = styled.p`
  font-size: 2rem;
  padding: 1.5rem 0;
`;

const ItemsContainer = styled.div`
  display: flex;
  position: relative;
  overflow-x: scroll;
  padding: 1.5rem 0;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MoveButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 30px;
  width: 30px;
  height: 100px;
`

const PrevButton = styled(MoveButton)`
  left: 10px;
`;

const NextButton = styled(MoveButton)`
  right: 10px;
`;


const ItemWrapper = styled.div<itemProps>`
  flex: none;
  margin-left: 1rem;
  &:hover {
    cursor: pointer;
  }
  &:nth-child(1) {
    margin-left: 0;
  }
  transform: translate(-${({ move }: itemProps) => move}%);
  transition: transform 1s;
`;

const ItemThumbnail = styled.div<itemThumbProps>`
  position: relative;
  background: url(${({ url }: itemThumbProps) => url}) no-repeat center/cover;
  width: 14rem;
  height: 18.6rem;
  border-radius: 0.5rem;
`;

const ItemFavorite = styled.div`
  background: url("image/icon_favorite.svg") no-repeat center/cover;
  width: 2rem;
  height: 2rem;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
`;

const ItemDescribeContainer = styled.div`
  padding-top: 1.5rem;
  font-size: 12px;
`;

const ItemBrand = styled.p``;

const ItemName = styled.p``;

const ItemPrice = styled.span`
  color: #808080;
`;

const ThemeRecommend = ({ title, items }: props) => {
  const [move, setMove] = useState(0);
  const next = () =>
    move < 100
      ? move === -100
        ? setMove(100)
        : setMove(move + 100)
      : setMove(-100);
  const prev = () =>
    move > 0
      ? move === 100
        ? setMove(0)
        : setMove(move - 100)
      : setMove(100);
  return (
    <Container>
      <Title>{title}</Title>
      <ItemsContainer>
        <PrevButton onClick={prev}>&lt;</PrevButton>
        {items.map(({ id, url, href, brand, name, price }) => (
          <Link key={id} href={href} passHref>
            <ItemWrapper move={move}>
              <ItemThumbnail url={url}>
                <ItemFavorite onClick={() => { console.log(id, name) }} />
              </ItemThumbnail>
              <ItemDescribeContainer>
                <ItemBrand>{brand}</ItemBrand>
                <ItemName>{name}</ItemName>
                <ItemPrice>{price.toLocaleString()}원</ItemPrice>
              </ItemDescribeContainer>
            </ItemWrapper>
          </Link>
        ))}
        <NextButton onClick={next}>&gt;</NextButton>
      </ItemsContainer>
    </Container>
  );
};

export default ThemeRecommend;
