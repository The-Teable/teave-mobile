import Image from "next/image";
import styled from "styled-components";
import Margin from "../components/common/Margin";
import TitleHeader from "../components/common/TitleHeader";
import CenteredContainer from "../components/layout/CenteredContainer";
import TabBar from "../components/layout/TabBar";
import { color } from "../styles/palette";
import { useWishProduct } from "../services/hooks/useWishProduct";
import { UserWishProduct } from "../services/model/wishSchema";

const WishPage = () => {
  const { wishProducts, removeWish } = useWishProduct();

  return (
    <>
      <TitleHeader title={"찜한 상품"} />
      <CenteredContainer>
        {wishProducts && (
          <>
            <StyledCounter>전체 {wishProducts.length}개</StyledCounter>
            <StyledContainer>
              {wishProducts.map((props: UserWishProduct) => {
                const { id, name, brand, price, image_url } = props;
                return (
                  <StyledItemContainer key={id}>
                    <Image
                      src={image_url}
                      width={105}
                      height={120}
                      alt={name}
                    />
                    <StyledItemWrapper>
                      <StyledTitle>
                        [{brand}] {name}
                      </StyledTitle>
                      <Margin size={2} />
                      <StyledPrice>{price.toLocaleString()}원</StyledPrice>
                      <Margin size={4} />
                      <StyledButtonContainer>
                        <StyledButton onClick={() => removeWish(id)}>
                          삭제
                        </StyledButton>
                        <Margin size={2} row />
                        <StyledGreenButton>장바구니</StyledGreenButton>
                      </StyledButtonContainer>
                    </StyledItemWrapper>
                  </StyledItemContainer>
                );
              })}
            </StyledContainer>
          </>
        )}
      </CenteredContainer>
      <TabBar />
    </>
  );
};

export default WishPage;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const StyledCounter = styled.div`
  text-align: right;
  color: #808080;
  font-size: 1.2rem;
  margin: 2rem 0;
`;

const StyledItemContainer = styled.div`
  display: flex;
  margin: 0 3rem 3rem 0;
`;
const StyledItemWrapper = styled.div`
  margin-left: 1.5rem;
`;

const StyledTitle = styled.h3`
  font-size: 12px;
`;
const StyledPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const StyledButtonContainer = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  font-size: 1.2rem;
  border-radius: 2rem;
  width: 8rem;
  height: 3rem;
  text-align: center;
  background-color: #ffffff;
  border: 1px solid #808080;
`;

const StyledGreenButton = styled(StyledButton)`
  color: ${color.teaveGreen};
  border: 1px solid ${color.teaveGreen};
`;
