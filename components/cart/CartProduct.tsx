import styled from "styled-components";
import Image from "next/image";
import { ProductInCart } from "../../services/model/cartSchema";
import ToggleSelector from "./ToggleSelector";
import Margin from "../common/Margin";
import { color } from "../../styles/palette";

const CartProduct = ({
  products,
}: {
  products: Record<string, ProductInCart[]>;
}) => {
  return (
    <>
      {Object.entries(products).map(([brandName, items]) => (
        <>
          <Margin size={1} />
          <S.BrandTitle>{brandName} 배송</S.BrandTitle>
          {items.map(({ id, name, price, count, image_url }) => (
            <S.ItemContainer key={id}>
              <ToggleSelector id={id + ""} labelName="" />
              <S.ItemWrapper>
                <Image src={image_url} width={75} height={90} alt={name} />
                <S.ContentWrapper>
                  <S.ItemTitle>{name}</S.ItemTitle>
                  <Margin size={1} />
                  <S.UnitPrice>{price.toLocaleString()}원</S.UnitPrice>
                  <Margin size={1.5} />
                  <S.CountWrapper>
                    <S.Count type="number" min="1" defaultValue={count} />
                    <Margin size={0.5} row />개
                  </S.CountWrapper>
                </S.ContentWrapper>
              </S.ItemWrapper>
              <S.Price>{(price * count).toLocaleString()}원</S.Price>
            </S.ItemContainer>
          ))}
          <S.TotalPriceContainer>
            <S.DeliveryCost>55,000원 + 배송비 3,000원 =</S.DeliveryCost>
            <Margin size={0.5} row />
            <S.TotalPrice>합계 58,000원</S.TotalPrice>
          </S.TotalPriceContainer>
        </>
      ))}
    </>
  );
};

export default CartProduct;

const S: any = {};

S.BrandTitle = styled.div`
  display: flex;
  font-weight: 500;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  height: 5rem;
  border-bottom: 1px solid ${color.gray200};
`;

S.ItemContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  justify-content: space-around;
  padding: 2.5rem 1rem;
  font-size: 1.2rem;
`;

S.ItemWrapper = styled.div`
  display: flex;
`;

S.ContentWrapper = styled.div`
  padding: 1.8rem;
`;

S.ItemTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
`;

S.UnitPrice = styled.div`
  font-size: 1.2rem;
`;

S.CountWrapper = styled.div`
  display: flex;
  align-items: center;
`;

S.Count = styled.input`
  width: 5rem;
`;

S.Price = styled.div`
  display: flex;
  font-size: 1.2rem;
  width: 8rem;
  font-weight: bold;
  align-items: center;
  padding-left: 2rem;
  border-left: 1px solid ${color.gray200};
`;

S.TotalPriceContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  height: 5rem;
  border-top: 1px solid ${color.gray200};
`;

S.DeliveryCost = styled.div`
  font-size: 1.2rem;
  color: #808080;
`;

S.TotalPrice = styled.div`
  font-weight: bold;
`;
