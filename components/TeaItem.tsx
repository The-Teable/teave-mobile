import { useContext } from "react";
import styled from "styled-components";
import AuthContext from "../context/AuthContext";
import useProduct from "../hooks/useProduct";
import { ProductProps } from "../types/product";

type TeaItemProps = Pick<
  ProductProps,
  "id" | "name" | "brand" | "price" | "image_url"
> & {
  width?: string;
  height?: string;
};

const TeaItem = (props: TeaItemProps) => {
  const {
    id,
    image_url,
    brand,
    name,
    price,
    width = "14rem",
    height = "18.6rem",
  } = props;

  const {
    user: { user_id },
  } = useContext(AuthContext);

  const { onClickProduct, onClickWish } = useProduct({ user_id, tea_id: id });
  return (
    <S.Container onClick={() => onClickProduct()}>
      <S.Thumbnail url={image_url} width={width} height={height}>
        <S.Favorite onClick={() => onClickWish()} />
      </S.Thumbnail>
      <S.DescribeContainer>
        <S.TitleWrapper>
          <S.Brand>[{brand}] </S.Brand>
          <S.Name>{name}</S.Name>
        </S.TitleWrapper>
        <S.Price>{price.toLocaleString()}원</S.Price>
      </S.DescribeContainer>
    </S.Container>
  );
};

export default TeaItem;

const S: any = {};

S.Container = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

S.Thumbnail = styled.div<{ url: string; width: number; height: number }>`
  position: relative;
  background: url(${({ url }: { url: string }) => url}) no-repeat center/cover;
  width: ${({ width }: { width: number }) => width};
  height: ${({ height }: { height: number }) => height};
  border-radius: 0.5rem;
`;

S.Favorite = styled.div`
  background: url("/image/icon_favorite.svg") no-repeat center/cover;
  width: 2rem;
  height: 2rem;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
`;

S.DescribeContainer = styled.div`
  padding-top: 1.5rem;
  font-size: 1.2rem;
`;

S.TitleWrapper = styled.div`
  height: 4.5rem;
  line-height: 1.5rem;
`;

S.Brand = styled.span``;

S.Name = styled.span``;

S.Price = styled.p`
  font-weight: bold;
`;
