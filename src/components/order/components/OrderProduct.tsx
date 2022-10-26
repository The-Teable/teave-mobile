import styled from "styled-components";
import Image from "next/image";
import { ProductInCart } from "../../../services/model/cartSchema";
import Margin from "../../common/Margin";
import { color } from "../../../styles/palette";

const OrderProduct = ({
  products,
}: {
  products: Record<string, ProductInCart[]>;
}) => {
  return (
    <S.Container>
      <S.Title>주문상품</S.Title>
      {Object.entries(products).map(([brandName, items]) => (
        <>
          <S.BrandTitle>{brandName}</S.BrandTitle>
          {items.map(({ id, name, price, count, image_url }) => (
            <S.ItemContainer key={id}>
              <S.ItemWrapper>
                <Image src={image_url} width={60} height={60} alt={name} />
                <Margin size={1} row />
                <S.ItemTitle>{name}</S.ItemTitle>
                <Margin size={1} row />
                <div>{count} 개</div>
              </S.ItemWrapper>
              <S.Price>{(price * count).toLocaleString()}원</S.Price>
            </S.ItemContainer>
          ))}
          <S.DeliveryCost>배송비 3,000원</S.DeliveryCost>
          <Margin size={0.5} row />
          <Margin size={1} />
        </>
      ))}
    </S.Container>
  );
};

export default OrderProduct;

const S: any = {};

S.Container = styled.div`
  font-size: 1.2rem;
`;

S.Title = styled.div`
  display: flex;
  font-size: 1.6rem;
  font-weight: bold;
  background-color: #ffffff;
  align-items: center;
  height: 5rem;
  border-bottom: 1px solid ${color.gray200};
  padding: 0 2rem;
`;

S.BrandTitle = styled.div`
  display: flex;
  font-weight: 500;
  background-color: #ffffff;
  align-items: center;
  height: 5rem;
  border-bottom: 1px solid ${color.gray200};
  padding: 0 2rem;
`;

S.ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 1rem;
  font-size: 1.2rem;
`;

S.ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

S.ItemTitle = styled.div`
  font-size: 1.2rem;
`;

S.Count = styled.input`
  width: 5rem;
`;

S.Price = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

S.DeliveryCost = styled.div`
  display: flex;
  background-color: #ffffff;
  align-items: center;
  height: 4rem;
  border-top: 1px solid ${color.gray200};
  font-size: 1.2rem;
  color: #808080;
  padding: 0 2rem;
`;
