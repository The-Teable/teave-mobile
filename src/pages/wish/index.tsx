import Image from "next/image";
import styled from "styled-components";
import Margin from "../../components/common/Margin";
import TitleHeader from "../../components/common/TitleHeader";
import CenteredContainer from "../../components/layout/CenteredContainer";
import TabBar from "../../components/layout/TabBar";
import { WishResponseProps } from "../../services/model/teaSchema";
import { color } from "../../styles/palette";
import { wishList } from "../../services/static/dummy.json";

const WishPage = () => {
  return (
    <>
      <TitleHeader title={"찜한 상품"} />
      <CenteredContainer>
        <Margin size={2} />
        <S.Counter>전체 {wishList.length}개</S.Counter>
        <Margin size={2} />
        <S.Container>
          {wishList.map((props: WishResponseProps) => {
            const { id, name, brand, price, image_url } = props;
            return (
              <S.ItemContainer key={id}>
                <Image src={image_url} width={105} height={120} alt={name} />
                <Margin size={1.5} row />
                <S.ItemWrapper>
                  <S.Title>
                    [{brand}] {name}
                  </S.Title>
                  <Margin size={2} />
                  <S.Price>{price.toLocaleString()}원</S.Price>
                  <Margin size={4} />
                  <S.ButtonContainer>
                    <S.Button>삭제</S.Button>
                    <Margin size={2} row />
                    <S.GreenButton>장바구니</S.GreenButton>
                  </S.ButtonContainer>
                </S.ItemWrapper>
              </S.ItemContainer>
            );
          })}
        </S.Container>
      </CenteredContainer>
      <TabBar />
    </>
  );
};

export default WishPage;

const S: any = {};
S.Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
S.Counter = styled.div`
  text-align: right;
  color: #808080;
  font-size: 1.2rem;
`;

S.ItemContainer = styled.div`
  display: flex;
  margin: 0 3rem 3rem 0;
`;
S.ItemWrapper = styled.div``;

S.Title = styled.h3`
  font-size: 1.2rem;
`;
S.Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

S.ButtonContainer = styled.div`
  display: flex;
`;

S.Button = styled.button`
  font-size: 1.2rem;
  border-radius: 2rem;
  width: 8rem;
  height: 3rem;
  text-align: center;
  background-color: #ffffff;
  border: 1px solid #808080;
`;

S.GreenButton = styled(S.Button)`
  color: ${color.teaveGreen};
  border: 1px solid ${color.teaveGreen};
`;
