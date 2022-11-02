import styled from "styled-components";
import Image from "next/image";
import { CartProductProps } from "../../../services/model/cartSchema";
import ToggleSelector from "./ToggleSelector";
import { color } from "../../../styles/palette";
import useCartQuery from "../../../services/hooks/useCartQuery";

const CartProducts = ({
  brandProduct: { id, name, price, count, image_url, is_selected },
}: {
  brandProduct: CartProductProps;
}) => {
  const { removeCart } = useCartQuery();
  const handleDeleteProduct = () => {
    removeCart(id);
  };

  return (
    <StyledItemContainer key={id}>
      <ToggleSelector id={id + ""} labelName="" isChecked={is_selected} />
      <StyledItemWrapper>
        <Image src={image_url} width={75} height={90} alt={name} />
        <StyledContentWrapper>
          <StyledItemTitle>{name}</StyledItemTitle>
          <StyledUnitPrice>{price.toLocaleString()}원</StyledUnitPrice>
          <StyledCountWrapper>
            <StyledCount type="number" defaultValue={count} />개
          </StyledCountWrapper>
        </StyledContentWrapper>
      </StyledItemWrapper>
      <StyledPrice>{(price * count).toLocaleString()}원</StyledPrice>
      <StyledDeleteButton
        src="/image/icon_exit.svg"
        width={10}
        height={10}
        onClick={handleDeleteProduct}
      />
    </StyledItemContainer>
  );
};

export default CartProducts;

const StyledItemContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  justify-content: space-around;
  padding: 2.5rem 1rem;
  font-size: 1.2rem;
`;

const StyledItemWrapper = styled.div`
  display: flex;
`;

const StyledContentWrapper = styled.div`
  padding: 1.8rem;
`;

const StyledItemTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const StyledUnitPrice = styled.div`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

const StyledCountWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCount = styled.input`
  width: 5rem;
  margin-right: 0.5rem;
`;

const StyledPrice = styled.div`
  display: flex;
  font-size: 1.2rem;
  width: 8rem;
  font-weight: bold;
  align-items: center;
  padding-left: 2rem;
  border-left: 1px solid ${color.gray200};
`;

const StyledDeleteButton = styled(Image)`
  &:hover {
    cursor: pointer;
  }
`;
