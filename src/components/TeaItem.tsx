import styled from "styled-components";
import useTeaQuery from "../services/hooks/useTeaQuery";
import { MouseEvent } from "react";
import { useRouter } from "next/router";

interface TeaItemProps {
  id: number;
  url: string;
  brand: string;
  name: string;
  price: number;
  width?: string;
  height?: string;
}

const TeaItem = ({
  id,
  url,
  brand,
  name,
  price,
  width = "14rem",
  height = "18.6rem"
}: TeaItemProps) => {
  const router = useRouter();

  const { queryClickProduct, queryWishProduct } = useTeaQuery();

  const handleClickProduct = (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    queryClickProduct({ id });
    router.push(`/product?id=${id}`);
  };

  return (
    <S.Container onClick={handleClickProduct}>
      <S.Thumbnail url={url} width={width} height={height}>
        <S.Favorite onClick={() => queryWishProduct({ id })} />
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
