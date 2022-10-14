import styled from "styled-components";
import Image from "next/image";
import { ProductInCart } from "../../services/model/cartSchema";
import ToggleSelector from "./ToggleSelector";
import { color } from "../../styles/palette";

const CartProducts = ({
  brandProduct: { id, name, price, count, image_url, is_selected },
}: {
  brandProduct: ProductInCart;
}) => {
  /**
   * TODO: 장바구니 삭제 api 연동
   */
  const handleDeleteProduct = () => {};

  return (
    <S.ItemContainer key={id}>
      <ToggleSelector id={id + ""} labelName="" isChecked={is_selected} />
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
  );
};

export default CartProducts;

const S: any = {};

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
