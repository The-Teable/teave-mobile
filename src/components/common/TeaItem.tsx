import styled from "styled-components";
import useTeaActionQuery from "../../services/hooks/useTeaActionQuery";
import { MouseEvent } from "react";
import { useRouter } from "next/router";
import { useWishProductQuery } from "../../services/hooks/useWishProductQuery";
import Image from "next/image";

interface TeaItemProps {
  id: number;
  url: string;
  brand: string;
  name: string;
  price: number;
  width?: number;
  height?: number;
}

const TeaItem = ({
  id,
  url,
  brand,
  name,
  price,
  width = 140,
  height = 186,
}: TeaItemProps) => {
  const router = useRouter();

  const { queryClickProduct } = useTeaActionQuery();
  const { addWish } = useWishProductQuery();

  const handleClickProduct = () => {
    queryClickProduct({ id });
    router.push(`/product?id=${id}`);
  };

  return (
    <StyledContainer onClick={() => handleClickProduct()}>
      <div style={{ position: "relative", width, height }}>
        <StyledThumbnail
          src={url}
          layout="fill"
          objectFit="cover"
          alt="thumbnail"
        />

        <StyledWishIconWrapper onClick={() => addWish({ tea_id: id })}>
          <Image
            src={"/image/icon_favorite.svg"}
            width={width / 7}
            height={width / 7}
            alt="wish icon"
          />
        </StyledWishIconWrapper>
      </div>
      <StyledDescribeContainer>
        <StyledTitleWrapper>
          <StyledBrand>[{brand}] </StyledBrand>
          <StyledName>{name}</StyledName>
        </StyledTitleWrapper>
        <StyledPrice>{price.toLocaleString()}원</StyledPrice>
      </StyledDescribeContainer>
    </StyledContainer>
  );
};

export default TeaItem;

const StyledContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const StyledThumbnail = styled(Image)`
  border-radius: 0.5rem;
`;

const StyledWishIconWrapper = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
`;

const StyledDescribeContainer = styled.div`
  padding-top: 1.5rem;
  font-size: 1.2rem;
`;

const StyledTitleWrapper = styled.div`
  height: 4.5rem;
  line-height: 1.5rem;
`;

const StyledBrand = styled.span``;

const StyledName = styled.span``;

const StyledPrice = styled.p`
  font-weight: bold;
`;
