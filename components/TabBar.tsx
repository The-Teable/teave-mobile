import styled from "styled-components";
import Link from "next/link";

interface iconProps {
  url: string;
}

const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 76.8rem;
  margin: 0 auto;
  height: 4.8rem;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  border-top: 0.1rem solid #e6e6e6;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.div<iconProps>`
  background: url(${({ url }) => url}) no-repeat center/contain;
  width: 2.5rem;
  height: 2.5rem;
`;

const items = [
  { url: "image/icon_home.svg", text: "홈", href: "/" },
  { url: "image/icon_search.svg", text: "검색", href: "/" },
  { url: "image/icon_cart.svg", text: "장바구니", href: "/" },
  { url: "image/icon_account.svg", text: "마이페이지", href: "/" },
];

const TabBar = () => (
  <Container>
    {items.map(({ url, text, href }, i) => (
      <Link key={i} href={href} passHref>
        <Item>
          <Icon url={url} />
          <p>{text}</p>
        </Item>
      </Link>
    ))}
  </Container>
);

export default TabBar;
