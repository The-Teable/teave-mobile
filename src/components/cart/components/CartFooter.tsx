import styled from "styled-components";
import Link from "next/link";
import CenteredContainer from "../../common/CenteredContainer";
import Button from "../../common/Button";

const CartFooter = ({ price }: { price: number }) => (
  <>
    <StyledPadding />
    <StyledContainer>
      <StyledPrice>총 {price.toLocaleString()}원</StyledPrice>
      <Link href={"/order"} passHref>
        <Button>바로구매</Button>
      </Link>
    </StyledContainer>
  </>
);

export default CartFooter;

const StyledContainer = styled(CenteredContainer).attrs({ as: "nav" })`
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: content-box;
  height: 8rem;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  border-top: 0.1rem solid #e6e6e6;
  background-color: #ffffff;
`;

const StyledPrice = styled.div`
  font-size: 1.4rem;
  width: 15rem;
  font-weight: bold;
`;

const StyledPadding = styled.div`
  height: 8rem;
`;
