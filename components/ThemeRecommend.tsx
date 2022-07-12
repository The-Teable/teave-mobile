import styled from "styled-components";
import Link from "next/link";
import Slider from "./common/Slider";
import useThemeRecommend from "../hooks/useThemeRecommend";

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

const ThemeRecommend = ({ title, items }: props) => {
  const [onClickProduct, onClickFavorite] = useThemeRecommend();
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.ItemsContainer
        itemWidth={150}
        items={items.map(({ teaId, url, href, brand, name, price }: any) => (
          <Link key={teaId} href={href} passHref>
            <S.ItemWrapper onClick={() => onClickProduct(teaId)}>
              <S.ItemThumbnail url={url}>
                <S.ItemFavorite onClick={() => onClickFavorite(teaId)} />
              </S.ItemThumbnail>
              <S.ItemDescribeContainer>
                <S.ItemBrand>{brand}</S.ItemBrand>
                <S.ItemName>{name}</S.ItemName>
                <S.ItemPrice>{price.toLocaleString()}원</S.ItemPrice>
              </S.ItemDescribeContainer>
            </S.ItemWrapper>
          </Link>
        ))}
      ></S.ItemsContainer>
    </S.Container>
  );
};

export default ThemeRecommend;

const S: any = {};

S.Container = styled.section``;

S.Title = styled.p`
  font-size: 2rem;
  padding: 1.5rem 0;
`;

S.ItemsContainer = styled(Slider)`
  padding: 1.5rem 0;
`;

S.ItemWrapper = styled.div`
  margin-left: 1rem;
  &:hover {
    cursor: pointer;
  }
  &:nth-child(1) {
    margin-left: 0;
  }
`;

S.ItemThumbnail = styled.div<{ url: string }>`
  position: relative;
  background: url(${({ url }: { url: string }) => url}) no-repeat center/cover;
  width: 14rem;
  height: 18.6rem;
  border-radius: 0.5rem;
`;

S.ItemFavorite = styled.div`
  background: url("image/icon_favorite.svg") no-repeat center/cover;
  width: 2rem;
  height: 2rem;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
`;

S.ItemDescribeContainer = styled.div`
  padding-top: 1.5rem;
  font-size: 12px;
`;

S.ItemBrand = styled.p``;

S.ItemName = styled.p``;

S.ItemPrice = styled.span`
  color: #808080;
`;
