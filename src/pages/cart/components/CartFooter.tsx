import styled from "styled-components";
import Link from "next/link";
import CenteredContainer from "../../../components/layout/CenteredContainer";
import Button from "../../../components/common/Button";

const CartFooter = () => (
  <>
    <S.Padding />
    <S.Container>
      <S.Price>총 70,000원</S.Price>
      <Link href={"/order"} passHref>
        <Button>바로구매</Button>
      </Link>
    </S.Container>
  </>
);

export default CartFooter;

const S: any = {};

S.Container = styled(CenteredContainer).attrs({ as: "nav" })`
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

S.Price = styled.div`
  font-size: 1.4rem;
  width: 15rem;
  font-weight: bold;
`;

S.Padding = styled.div`
  height: 8rem;
`;
