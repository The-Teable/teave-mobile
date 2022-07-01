import styled from "styled-components";
import Link from "next/link";
import CenteredContainer from "./common/CenteredContainer";
import axios from "axios";
import Slider from "./common/Slider";

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

const Container = styled(CenteredContainer).attrs({ as: "section" })``;

const Title = styled.p`
  font-size: 2rem;
  padding: 1.5rem 0;
`;

const ItemsContainer = styled(Slider)`
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

const ThemeRecommend = ({ title, items }: props) => {
  const tempUserId = 123;
  const instance = axios.create({ baseURL: process.env.NEXT_PUBLIC_LS_URL });

  return (
    <Container>
      <Title>{title}</Title>
      <ItemsContainer
        itemWidth={150}
        items={items.map(({ id, url, href, brand, name, price }) => (
          <Link key={id} href={href} passHref>
            <ItemWrapper
              onClick={() => {
                console.log("posted");
                instance.post("user-click-product", {
                  userId: tempUserId,
                  teaId: id,
                });
              }}
            >
              <ItemThumbnail url={url}>
                <ItemFavorite
                  onClick={() => {
                    console.log(id, name);
                  }}
                />
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
