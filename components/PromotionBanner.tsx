import Link from "next/link";
import styled from "styled-components";

interface itemProps {
  url: string;
}

interface bannnerProps {
  banners: { url: string; href: string }[];
}

const Container = styled.section`
  max-width: 76.8rem;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 10px;
  border-radius: 0.5rem;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled.div<itemProps>`
  flex: none;
  background: url(${({ url }) => url}) no-repeat center/cover;
  width: 100%;
  height: 18rem;
  &:hover {
    cursor: pointer;
  }
`;

const PromotionBanner = ({ banners }: bannnerProps) => (
  <Container>
    <Wrapper>
      {banners.map(({ url, href }, i) => (
        <Link key={i} href={href} passHref>
          <Item url={url} />
        </Link>
      ))}
    </Wrapper>
  </Container>
);

export default PromotionBanner;
