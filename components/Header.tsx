import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 76.8rem;
  margin: 0 auto;
`;

const Logo = styled.div`
  background: url("/image/logo_text.png") no-repeat center/contain;
  width: 160px;
  height: 32px;
  margin: 14px;
  &:hover {
    cursor: pointer;
  }
`;

const Menu = styled.div`
  background: url("/image/icon_menu.svg") no-repeat center/contain;
  width: 32px;
  height: 32px;
  margin: 14px;
  &:hover {
    cursor: pointer;
  }
`;

const Header = () => (
  <Container>
    <Link href="/" passHref>
      <Logo />
    </Link>
    <Link href="/menu" passHref>
      <Menu />
    </Link>
  </Container>
);

export default Header;
