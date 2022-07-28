import styled from "styled-components";
import useProduct from "../hooks/useProduct";

interface TeaItemProps {
  id: number;
  img: string;
  brand: string;
  name: string;
  price: number;
}

const TeaItem = ({ id, img, brand, name, price }: TeaItemProps) => {
  const { onClickProduct, onClickFavorite } = useProduct({ tea_id: id });
  return (
    <S.ItemWrapper onClick={() => onClickProduct()}>
      <S.ItemThumbnail img={img}>
        <S.ItemFavorite onClick={() => onClickFavorite()} />
      </S.ItemThumbnail>
      <S.ItemDescribeContainer>
        <S.ItemBrand>{brand}</S.ItemBrand>
        <S.ItemName>{name}</S.ItemName>
        <S.ItemPrice>{price.toLocaleString()}원</S.ItemPrice>
      </S.ItemDescribeContainer>
    </S.ItemWrapper>
  );
};

export default TeaItem;

const S: any = {};

S.ItemWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

S.ItemThumbnail = styled.div<{ img: string }>`
  position: relative;
  background: url(${({ img }: { img: string }) => img}) no-repeat center/cover;
  width: 14rem;
  height: 18.6rem;
  border-radius: 0.5rem;
`;

S.ItemFavorite = styled.div`
  background: url("/image/icon_favorite.svg") no-repeat center/cover;
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
