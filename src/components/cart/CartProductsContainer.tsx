import styled from "styled-components";
import { ProductInCart } from "../../services/model/cartSchema";
import { color } from "../../styles/palette";
import { Fragment } from "react";
import CartProduct from "./CartProduct";

const TEMP_DELIVERY_FEE = 3000;

const CartProductsContainer = ({
  products,
}: {
  products: Record<string, ProductInCart[]>;
}) => {
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
            {brandProducts.map((brandProduct) => (
              <CartProduct brandProduct={brandProduct} />
            ))}
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

export default CartProductsContainer;

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
