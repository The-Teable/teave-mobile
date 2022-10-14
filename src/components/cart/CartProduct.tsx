import styled from "styled-components";
import Image from "next/image";
import { ProductInCart } from "../../services/model/cartSchema";
import ToggleSelector from "./ToggleSelector";
import Margin from "../common/Margin";
import { color } from "../../styles/palette";
import { Fragment } from "react";

const TEMP_DELIVERY_FEE = 3000;

const CartProduct = ({
  products,
}: {
  products: Record<string, ProductInCart[]>;
}) => {
  /**
   * TODO: 장바구니 삭제 api 연동
   */
  const handleDeleteProduct = () => {};

  return (
    <>
      {Object.entries(products).map(([brandName, brandProducts], i) => {
        const totalPrice = brandProducts.reduce(
          (acc, cur) => acc + (cur.is_selected ? cur.price * cur.count : 0),
          0
        );
        return (
          <Fragment key={i}>
            <S.BrandTitle>{brandName} 배송</S.BrandTitle>
            {brandProducts.map(
              ({ id, name, price, count, image_url, is_selected }) => (
                <S.ItemContainer key={id}>
                  <ToggleSelector
                    id={id + ""}
                    labelName=""
                    isChecked={is_selected}
                  />
                  <S.ItemWrapper>
                    <Image src={image_url} width={75} height={90} alt={name} />
                    <S.ContentWrapper>
                      <S.ItemTitle>{name}</S.ItemTitle>
                      <S.UnitPrice>{price.toLocaleString()}원</S.UnitPrice>
                      <S.CountWrapper>
                        <S.Count type="number" defaultValue={count} />개
                      </S.CountWrapper>
                    </S.ContentWrapper>
                  </S.ItemWrapper>
                  <S.Price>{(price * count).toLocaleString()}원</S.Price>
                  <S.DeleteButton
                    src="/image/icon_exit.svg"
                    width={10}
                    height={10}
                    onClick={handleDeleteProduct}
                  />
                </S.ItemContainer>
              )
            )}
            {totalPrice > 0 && (
              <S.TotalPriceContainer>
                <S.DeliveryCost>
                  {totalPrice.toLocaleString()}원 + 배송비{" "}
                  {TEMP_DELIVERY_FEE.toLocaleString()}원 =
                </S.DeliveryCost>
                <S.TotalPrice>
                  합계 {(totalPrice + TEMP_DELIVERY_FEE).toLocaleString()}원
                </S.TotalPrice>
              </S.TotalPriceContainer>
            )}
          </Fragment>
        );
      })}
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
  margin-top: 1rem;
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
  margin-bottom: 1rem;
`;

S.UnitPrice = styled.div`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

S.CountWrapper = styled.div`
  display: flex;
  align-items: center;
`;

S.Count = styled.input`
  width: 5rem;
  margin-right: 0.5rem;
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

S.DeleteButton = styled(Image)`
  &:hover {
    cursor: pointer;
  }
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
  margin-right: 0.5rem;
`;

S.TotalPrice = styled.div`
  font-weight: bold;
`;
