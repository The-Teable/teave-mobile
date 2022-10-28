import styled from "styled-components";
import Link from "next/link";
import CenteredContainer from "./CenteredContainer";

const items = [
  { url: "/image/icon_home.svg", text: "홈", href: "/home" },
  { url: "/image/icon_search.svg", text: "검색", href: "/search" },
  { url: "/image/icon_favorite.svg", text: "찜", href: "/wish" },
  { url: "/image/icon_cart.svg", text: "장바구니", href: "/cart" },
  { url: "/image/icon_account.svg", text: "마이페이지", href: "/mypage" },
];

const TabBar = () => (
  <>
    <StyledPadding />
    <StyledContainer>
      {items.map(({ url, text, href }, i) => (
        <Link key={i} href={href} passHref>
          <StyledItem>
            <StyledIcon url={url} />
            <StyledText>{text}</StyledText>
          </StyledItem>
        </Link>
      ))}
    </StyledContainer>
  </>
);

export default TabBar;

const S: any = {};

const StyledContainer = styled(CenteredContainer).attrs({ as: "nav" })`
  display: flex;
  justify-content: space-around;
  box-sizing: content-box;
  height: 5rem;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  border-top: 0.1rem solid #e6e6e6;
  background-color: #ffffff;
`;

const StyledItem = styled.div`
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

const StyledIcon = styled.div<{ url: string }>`
  background: url(${({ url }: { url: string }) => url}) no-repeat center/contain;
  width: 3rem;
  height: 3rem;
`;

const StyledText = styled.p`
  line-height: 1.4rem;
`;

const StyledPadding = styled.div`
  height: 5rem;
`;
