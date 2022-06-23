import styled from "styled-components";
import Link from "next/link";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 76.8rem;
  margin: 0 auto;
  padding: 0 1.3rem;
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  background-color: #ffffff;
  z-index: 1;
`;

const Logo = styled.div`
  background: url("/image/logo_text.png") no-repeat center/contain;
  width: 7.6rem;
  height: 4.8rem;
  &:hover {
    cursor: pointer;
  }
`;

const Menu = styled.div`
  background: url("/image/icon_menu.svg") no-repeat center/contain;
  width: 3.2rem;
  height: 3.2rem;
  &:hover {
    cursor: pointer;
  }
`;

const Padding = styled.div`
  height: 5rem;
`

const Header = () => (
  <>
    <Container>
      <Link href="/" passHref>
        <Logo />
      </Link>
      <Link href="/menu" passHref>
        <Menu />
      </Link>
    </Container>
    <Padding />
  </>
);

export default Header;
