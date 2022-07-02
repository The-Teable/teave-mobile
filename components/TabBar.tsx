import styled from "styled-components";
import Link from "next/link";
import CenteredBox from "./common/CenteredBox";

const items = [
  { url: "image/icon_home.svg", text: "홈", href: "/" },
  { url: "image/icon_search.svg", text: "검색", href: "/" },
  { url: "image/icon_favorite.svg", text: "찜", href: "/" },
  { url: "image/icon_cart.svg", text: "장바구니", href: "/" },
  { url: "image/icon_account.svg", text: "마이페이지", href: "/" },
];

const TabBar = () => (
  <>
    <S.Padding />
    <S.Container>
      {items.map(({ url, text, href }, i) => (
        <Link key={i} href={href} passHref>
          <S.Item>
            <S.Icon url={url} />
            <p>{text}</p>
          </S.Item>
        </Link>
      ))}
    </S.Container>
  </>
);

export default TabBar;

const S: any = {};

S.Container = styled(CenteredBox).attrs({ as: "nav" })`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 4.8rem;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  border-top: 0.1rem solid #e6e6e6;
`;

S.Item = styled.div`
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

S.Icon = styled.div<{ url: string }>`
  background: url(${({ url }) => url}) no-repeat center/contain;
  width: 2.5rem;
  height: 2.5rem;
`;

S.Padding = styled.div`
  height: 5rem;
`;
