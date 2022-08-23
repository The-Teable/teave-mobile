import Image from "next/image";
import styled from "styled-components";
import ToggleSelector from "../components/cart/toggleSelector";
import Margin from "../components/common/Margin";
import TitleHeader from "../components/common/TitleHeader";
import CenteredContainer from "../components/layout/CenteredContainer";
import { productInCart as dummy } from "./api/dummy.json";
import { ProductInCart } from "../services/model/cartSchema";
import { color } from "../styles/palette";
import CartFooter from "../components/cart/CartFooter";
import Bill from "../components/cart/Bill";

const CartPage = () => {
  const productInCart = dummy;
  const dividedByBrand = productInCart.reduce<Record<string, ProductInCart[]>>(
    (acc, cur) => {
      acc[cur.brand] = cur.brand in acc ? [...acc[cur.brand], cur] : [cur];
      return acc;
    },
    {}
  );

  return (
    <>
      <TitleHeader title={"장바구니"} />
      <S.Container>
        <ToggleSelector id="selectAll" labelName="모두선택" />

        {Object.entries(dividedByBrand).map(([brandName, items]) => (
          <>
            <Margin size={1} />
            <S.BrandTitle>{brandName} 배송</S.BrandTitle>
            {items.map(({ id, brand, name, price, count, image_url }) => (
              <S.ItemContainer key={id}>
                <ToggleSelector id={id + ""} labelName="" />
                <Image src={image_url} width={75} height={90} alt={name} />
                <S.ItemWrapper>
                  <S.ItemTitle>
                    [{brand}] {name}
                  </S.ItemTitle>
                  <Margin size={2} />
                  <S.UnitPrice>{price.toLocaleString()}원</S.UnitPrice>
                  <Margin size={2} />
                  <S.CountWrapper>
                    <S.Count type="number" min="1" defaultValue={count} />
                    <Margin size={0.5} row />개
                  </S.CountWrapper>
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
        <Margin size={2} />
      </S.Container>
      <Bill />
      <CartFooter />
    </>
  );
};

export default CartPage;

const S: any = {};

S.Container = styled(CenteredContainer)`
  background-color: #f4f4f4;
  min-height: 92vh;
  padding: 0;
  font-size: 1.5rem;
`;

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
  padding: 2.5rem 1rem;
  font-size: 1.2rem;
`;

S.ItemWrapper = styled.div`
  padding: 1.8rem;
`;

S.ItemTitle = styled.div`
  font-size: 1.2rem;
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
