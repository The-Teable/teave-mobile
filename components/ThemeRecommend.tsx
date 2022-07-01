import styled from "styled-components";
import Link from "next/link";
import CenteredBox from "./common/CenteredBox";
import axios from "axios";
import SliderContainer from "../container/common/SliderContainer";

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

interface itemThumbProps {
  url: string;
}

const Container = styled(CenteredBox).attrs({ as: "section" })``;

const Title = styled.p`
  font-size: 2rem;
  padding: 1.5rem 0;
`;

const ItemsContainer = styled(SliderContainer)`
  padding: 1.5rem 0;
`;

const ItemWrapper = styled.div`
  margin-left: 1rem;
  &:hover {
    cursor: pointer;
  }
  &:nth-child(1) {
    margin-left: 0;
  }
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

const ThemeRecommend = ({
  title,
  items,
  onClickProduct,
  onClickFavorite,
}: any) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ItemsContainer
        itemWidth={150}
        items={items.map(({ teaId, url, href, brand, name, price }: any) => (
          <Link key={teaId} href={href} passHref>
            <ItemWrapper onClick={() => onClickProduct(teaId)}>
              <ItemThumbnail url={url}>
                <ItemFavorite onClick={() => onClickFavorite(teaId)} />
              </ItemThumbnail>
              <ItemDescribeContainer>
                <ItemBrand>{brand}</ItemBrand>
                <ItemName>{name}</ItemName>
                <ItemPrice>{price.toLocaleString()}원</ItemPrice>
              </ItemDescribeContainer>
            </ItemWrapper>
          </Link>
        ))}
      ></ItemsContainer>
    </Container>
  );
};

export default ThemeRecommend;
