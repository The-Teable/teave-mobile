import styled from "styled-components";
import { CartProductProps } from "../../../services/model/cartSchema";
import { color } from "../../../styles/palette";
import { Fragment } from "react";
import CartProduct from "./CartProduct";

const TEMP_DELIVERY_FEE = 3000;

const CartProductsContainer = ({
  products,
}: {
  products: Record<string, CartProductProps[]>;
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
            <StyledBrandTitle>{brandName} 배송</StyledBrandTitle>
            {brandProducts.map((brandProduct) => (
              <CartProduct brandProduct={brandProduct} key={brandProduct.id} />
            ))}
            {totalPrice > 0 && (
              <StyledTotalPriceContainer>
                <StyledDeliveryCost>
                  {totalPrice.toLocaleString()}원 + 배송비{" "}
                  {TEMP_DELIVERY_FEE.toLocaleString()}원 =
                </StyledDeliveryCost>
                <StyledTotalPrice>
                  합계 {(totalPrice + TEMP_DELIVERY_FEE).toLocaleString()}원
                </StyledTotalPrice>
              </StyledTotalPriceContainer>
            )}
          </Fragment>
        );
      })}
    </>
  );
};

export default CartProductsContainer;

const StyledBrandTitle = styled.div`
  display: flex;
  font-weight: 500;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  height: 5rem;
  border-bottom: 1px solid ${color.gray200};
  margin-top: 1rem;
`;

const StyledTotalPriceContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  height: 5rem;
  border-top: 1px solid ${color.gray200};
`;

const StyledDeliveryCost = styled.div`
  font-size: 1.2rem;
  color: #808080;
  margin-right: 0.5rem;
`;

const StyledTotalPrice = styled.div`
  font-weight: bold;
`;
