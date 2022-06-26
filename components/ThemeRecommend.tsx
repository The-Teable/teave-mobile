import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import CenteredContainer from "./common/CenteredContainer";

interface props {
  title: string;
  items: {
    url: string;
    href: string;
    brand: string;
    name: string;
    price: number;
  }[];
}

interface itemProps {
  url: string;
}

const Container = styled(CenteredContainer).attrs({ as: "section" })``;

const Title = styled.p`
  font-size: 2rem;
  padding: 1.5rem 0;
`;

const ItemsContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 1.5rem 0;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ItemWrapper = styled.div`
  flex: none;
  margin-left: 1rem;
  &:hover {
    cursor: pointer;
  }
  &:nth-child(1) {
    margin-left: 0;
  }
`;

const ItemThumbnail = styled.div<itemProps>`
  background: url(${({ url }: itemProps) => url}) no-repeat center/cover;
  width: 14rem;
  height: 18.6rem;
  border-radius: 0.5rem;
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
  return (
    <Container>
      <Title>{title}</Title>
      <ItemsContainer>
        {items.map(({ url, href, brand, name, price }, i) => (
          <Link key={i} href={href} passHref>
            <ItemWrapper>
              <ItemThumbnail url={url} />
              <ItemDescribeContainer>
                <ItemBrand>{brand}</ItemBrand>
                <ItemName>{name}</ItemName>
                <ItemPrice>{price.toLocaleString()}원</ItemPrice>
              </ItemDescribeContainer>
            </ItemWrapper>
          </Link>
        ))}
      </ItemsContainer>
    </Container>
  );
};

export default ThemeRecommend;
