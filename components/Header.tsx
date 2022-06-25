import styled from "styled-components";
import Link from "next/link";
import CenteredContainer from "./common/CenteredContainer";

const Container = styled(CenteredContainer).attrs({ as: "header" })`
  display: flex;
  justify-content: space-between;
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  z-index: 1;
  height: 5rem;
`;

const Logo = styled.div`
  background: url("/image/logo_text.png") no-repeat center/contain;
  width: 6.3rem;
  height: 1.7rem;
  &:hover {
    cursor: pointer;
  }
`;

const Menu = styled.div`
  background: url("/image/icon_menu.svg") no-repeat center/contain;
  width: 3.2rem;
  height: 3.2rem;
  margin-right: 2rem;
  &:hover {
    cursor: pointer;
  }
`;

const Padding = styled.div`
  height: 5rem;
`;

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
